import { TICKETS_AMOUNT_TO_SHOW } from 'app/constants/ticketsAmountToShow';
import { ITicket } from 'app/interfaces/ITicket';

export function getTicketsSection(
    tickets: ITicket[],
    amount: number = TICKETS_AMOUNT_TO_SHOW
): ITicket[] {
    return tickets.slice(0, amount);
}
