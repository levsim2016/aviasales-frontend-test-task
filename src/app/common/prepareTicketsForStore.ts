import { ITicket } from 'app/interfaces/ITicket';

export function prepareTicketsForStore(tickets: ITicket[]): ITicket[] {
    return tickets.map(ticket => ({
        ...ticket,
        segments: ticket.segments.map(segment => {
            return {
                ...segment,
                date: new Date(segment.date),
            };
        }),
    }));
}
