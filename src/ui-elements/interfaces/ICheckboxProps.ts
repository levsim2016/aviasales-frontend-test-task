import { SelectHandler } from 'ui-elements/types/SelectHandler';
import { IDisableable } from './IDisableable';
import { ISelectable } from './ISelectable';

export interface ICheckboxProps extends IDisableable, ISelectable {
    label: string;
    selectHandler: SelectHandler;
}
