export interface ITransfersFilters {
    filterByTransfers: boolean;
    filterByTransfersAmount: {
        [transfersAmount: number]: boolean;
    };
}
