export interface ITicketFilters {
    filterByStops: boolean;
    filterByStopsAmount: {
        [stopsAmount: number]: boolean;
    };
}
