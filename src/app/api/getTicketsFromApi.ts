import { TICKETS_ENDPOINT } from 'app/constants/ticketsEndpoint';
import { ITicketsResponse } from 'app/interfaces/ITicketsResponse';

export async function getTicketsFromApi(
    searchId: string
): Promise<ITicketsResponse | null> {
    const ticketsApiUrl = `${TICKETS_ENDPOINT}?searchId=${searchId}`;
    const response = await fetch(ticketsApiUrl);

    if (response.ok === false) {
        return null;
    }

    return response.json() as Promise<ITicketsResponse>;
}
