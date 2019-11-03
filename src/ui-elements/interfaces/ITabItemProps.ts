import ISelectable from './ISelectable';
import IDisableable from './IDisableable';
import TabSelectHandler from 'ui-elements/types/TabSelectHandler';

export default interface ITabItemProps extends ISelectable, IDisableable {
  id: string;
  label: string;
  selectHandler: TabSelectHandler;
}
