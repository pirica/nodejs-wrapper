/* eslint-disable no-restricted-syntax */
import axios, { AxiosError, AxiosInstance } from 'axios';
import { URLSearchParams } from 'url';
import { version } from '../../package.json';
import Client from '../client/Client';
import FortniteAPIError from '../exceptions/FortniteAPIError';
import InvalidAPIKeyError from '../exceptions/InvalidAPIKeyError';
import MissingAPIKeyError from '../exceptions/MissingAPIKeyError';
import { FortniteAPIResponseData } from './httpStructs';

class HTTP {
  public client: Client;
  public axios: AxiosInstance;
  constructor(client: Client) {
    this.client = client;

    this.axios = axios.create({
      method: 'GET',
      baseURL: 'https://fortnite-api.com',
      headers: {
        ...process.env.IS_BROWSER !== 'true' ? {
          'User-Agent': `fnapicom/${version}`,
        } : {},
        ...typeof this.client.config.apiKey === 'string' ? {
          Authorization: this.client.config.apiKey,
        } : {},
      },
    });
  }

  public async fetch(url: string, params?: any): Promise<FortniteAPIResponseData> {
    try {
      const response = await this.axios({
        url,
        params,
        paramsSerializer: (p) => {
          const searchParams = new URLSearchParams();

          for (const [key, value] of Object.entries(p)) {
            if (Array.isArray(value)) {
              for (const singleValue of value) searchParams.append(key, singleValue);
            } else {
              searchParams.append(key, (value as any));
            }
          }

          return searchParams.toString();
        },
      });

      return response.data;
    } catch (e) {
      if (e instanceof AxiosError && e.response?.data?.error) {
        if (e.response.status === 401) {
          if (this.client.config.apiKey) {
            throw new InvalidAPIKeyError(url);
          } else {
            throw new MissingAPIKeyError(url);
          }
        }

        throw new FortniteAPIError(e.response.data, e.config, e.response.status);
      }

      throw e;
    }
  }
}

export default HTTP;