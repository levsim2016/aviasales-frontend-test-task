export interface ITransfersFilters {
    filterByStops: boolean;
    filterByStopsAmount: {
        [stopsAmount: number]: boolean;
    };
}
