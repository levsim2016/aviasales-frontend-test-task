import { ISearchIdResponse } from 'app/interfaces/ISearchIdResponse';
import { SEARCH_ID_ENDPOINT } from 'app/constants/searchIdEndpoint';

export async function getSearchIdFromApi(): Promise<ISearchIdResponse> {
  const request = await fetch(SEARCH_ID_ENDPOINT);
  return request.json() as Promise<ISearchIdResponse>;
}
