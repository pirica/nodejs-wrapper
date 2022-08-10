import HTTP from '../http/HTTP';
import { Language } from '../../resources/enums';
import { ClientConfig, ClientOptions } from '../../resources/structs';
import {
  AESKeysRequestParams, AESKeysResponseData, BannerColorsRequestParams, BannerColorsResponseData,
  BannersRequestParams, BannersResponseData, BRMapRequestParams, BRMapResponseData, BRNewsRequestParams,
  BRNewsResponseData, BRShopCombinedRequestParams, BRShopCombinedResponseData, BRShopRequestParams,
  BRShopResponseData, BRStatsByAccountIDRequestParams, BRStatsByAccountIDResponseData, BRStatsRequestParams,
  BRStatsResponseData, CosmeticsByIDRequestParams, CosmeticsByIDResponseData, CosmeticsListRequestParams,
  CosmeticsListResponseData, CosmeticsSearchAllRequestParams, CosmeticsSearchAllResponseData,
  CosmeticsSearchByIDsRequestParams, CosmeticsSearchByIDsResponseData, CosmeticsSearchRequestParams,
  CosmeticsSearchResponseData, CreativeNewsRequestParams, CreativeNewsResponseData, CreatorCodeRequestParams,
  CreatorCodeResponseData, NewCosmeticsRequestParams, NewCosmeticsResponseData, NewsRequestParams, NewsResponseData,
  PlaylistByIDRequestParams, PlaylistByIDResponseData, PlaylistsRequestParams, PlaylistsResponseData, STWNewsRequestParams,
  STWNewsResponseData,
} from '../http/autogeneratedEndpointStructs';

class Client {
  public http: HTTP;
  public config: ClientConfig;
  constructor(config?: ClientOptions) {
    this.config = {
      language: Language.English,
      ...config,
    };

    this.http = new HTTP(this);
  }

  /**
   * Returns the current aes keys
   * @param options Options for this endpoint
   */
  public async aesKeys(options?: AESKeysRequestParams): Promise<AESKeysResponseData> {
    return this.http.fetch('/v2/aes', options);
  }

  /**
   * Returns an array of all banners
   * @param options Options for this endpoint
   */
  public async banners(options?: BannersRequestParams): Promise<BannersResponseData> {
    return this.http.fetch('/v1/banners', options);
  }

  /**
   * Returns an array of all banner colors
   * @param options Options for this endpoint
   */
  public async bannerColors(options?: BannerColorsRequestParams): Promise<BannerColorsResponseData> {
    return this.http.fetch('/v1/banners/colors', options);
  }

  /**
   * Returns an array of all battle royale cosmetics
   * @param options Options for this endpoint
   */
  public async cosmeticsList(options?: CosmeticsListRequestParams): Promise<CosmeticsListResponseData> {
    return this.http.fetch('/v2/cosmetics/br', options);
  }

  /**
   * Returns data of the latest added battle royale cosmetics
   * @param options Options for this endpoint
   */
  public async newCosmetics(options?: NewCosmeticsRequestParams): Promise<NewCosmeticsResponseData> {
    return this.http.fetch('/v2/cosmetics/br/new', options);
  }

  /**
   * Returns data of the requested battle royale cosmetic ID
   * @param options Options for this endpoint
   */
  public async cosmeticsByID(options: { id: string } & CosmeticsByIDRequestParams): Promise<CosmeticsByIDResponseData> {
    return this.http.fetch(`/v2/cosmetics/br/${options.id}`);
  }

  /**
   * Returns data of the first battle royale cosmetic which matches the search options(s)
   * @param options Options for this endpoint
   */
  public async cosmeticsSearch(options?: CosmeticsSearchRequestParams): Promise<CosmeticsSearchResponseData> {
    return this.http.fetch('/v2/cosmetics/br/search', options);
  }

  /**
   * Returns an array of all battle royale cosmetics which match the search options(s)
   * @param options Options for this endpoint
   */
  public async cosmeticsSearchAll(options?: CosmeticsSearchAllRequestParams): Promise<CosmeticsSearchAllResponseData> {
    return this.http.fetch('/v2/cosmetics/br/search/all', options);
  }

  /**
   * Returns an array of the requested battle royale cosmetic IDs
   * @param options Options for this endpoint
   */
  public async cosmeticsSearchByIDs(options: Omit<CosmeticsSearchByIDsRequestParams, 'id'>
    & { id: string | string[] }): Promise<CosmeticsSearchByIDsResponseData> {
    return this.http.fetch('/v2/cosmetics/br/search/ids', options);
  }

  /**
   * Returns data of a creator code by its name
   * @param options Options for this endpoint
   */
  public async creatorCode(options: CreatorCodeRequestParams): Promise<CreatorCodeResponseData> {
    return this.http.fetch('/v2/creatorcode', options);
  }

  /**
   * Returns data & images of the BR map & POIs
   * @param options Options for this endpoint
   */
  public async brMap(options?: BRMapRequestParams): Promise<BRMapResponseData> {
    return this.http.fetch('/v1/map', options);
  }

  /**
   * Returns data of the current battle royale, save the world & creative news
   * @param options Options for this endpoint
   */
  public async news(options?: NewsRequestParams): Promise<NewsResponseData> {
    return this.http.fetch('/v2/news', options);
  }

  /**
   * Returns data of the current battle royale news
   * @param options Options for this endpoint
   */
  public async brNews(options?: BRNewsRequestParams): Promise<BRNewsResponseData> {
    return this.http.fetch('/v2/news/br', options);
  }

  /**
   * Returns data of the current save the world news
   * @param options Options for this endpoint
   */
  public async stwNews(options?: STWNewsRequestParams): Promise<STWNewsResponseData> {
    return this.http.fetch('/v2/news/stw', options);
  }

  /**
   * Returns data of the current creative news
   * @param options Options for this endpoint
   */
  public async creativeNews(options?: CreativeNewsRequestParams): Promise<CreativeNewsResponseData> {
    return this.http.fetch('/v2/news/creative', options);
  }

  /**
   * Returns an array of all playlists
   * @param options Options for this endpoint
   */
  public async playlists(options?: PlaylistsRequestParams): Promise<PlaylistsResponseData> {
    return this.http.fetch('/v1/playlists', options);
  }

  /**
   * Returns data of the requested playlist ID
   * @param options Options for this endpoint
   */
  public async playlistById(options: { id: string } & PlaylistByIDRequestParams): Promise<PlaylistByIDResponseData> {
    return this.http.fetch(`/v1/playlists/${options.id}`, options);
  }

  /**
   * Returns data of the current battle royale shop
   * @param options Options for this endpoint
   */
  public async brShop(options?: BRShopRequestParams): Promise<BRShopResponseData> {
    return this.http.fetch('/v2/shop/br', options);
  }

  /**
   * Returns data of the current battle royale shop (combines the special and default categories into one)
   * @param options Options for this endpoint
   */
  public async brShopCombined(options?: BRShopCombinedRequestParams): Promise<BRShopCombinedResponseData> {
    return this.http.fetch('/v2/shop/br/combined', options);
  }

  /**
   * Returns stats of the requested player account
   * Note: trios stats will always be null
   * @param options Options for this endpoint
   */
  public async brStats(options: BRStatsRequestParams): Promise<BRStatsResponseData> {
    return this.http.fetch('/v2/stats/br/v2', options);
  }

  /**
   * Returns stats of the requested player account
   * Note: trios stats will always be null
   * @param options Options for this endpoint
   */
  public async brStatsByID(options: { id: string } & BRStatsByAccountIDRequestParams): Promise<BRStatsByAccountIDResponseData> {
    return this.http.fetch(`/v2/stats/br/v2/${options.id}`, options);
  }
}

export default Client;
