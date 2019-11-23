import { IRouteSegment } from './IRouteSegment';

export interface ITicket {
    price: number;
    carrier: string;
    segments: IRouteSegment[];
}
