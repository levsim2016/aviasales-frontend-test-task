import { ReactNode } from 'react';
import IStylizedProps from './IStylizedProps';

export default interface ICardProps extends IStylizedProps {
  children?: ReactNode;
}
