import { ReactNode } from 'react';
import { IStylizedProps } from './IStylizedProps';

export interface ICardProps extends IStylizedProps {
  children?: ReactNode;
}
