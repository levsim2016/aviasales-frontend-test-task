import { ISearchIdentifierResponse } from 'app/interfaces/ISearchIdentifierResponse';
import { SEARCH_IDENTIFIER_URL } from 'app/constants/searchIdentifierUrl';

export async function getSearchIdentifier(): Promise<
  ISearchIdentifierResponse
> {
  const request = await fetch(SEARCH_IDENTIFIER_URL);
  return request.json() as Promise<ISearchIdentifierResponse>;
}
