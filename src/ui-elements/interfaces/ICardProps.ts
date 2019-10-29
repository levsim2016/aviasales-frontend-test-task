import { ReactNode, CSSProperties } from 'react';

export default interface ICardProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};