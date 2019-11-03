import React from 'react';
import styles from './card.module.scss';
import ICardProps from 'ui-elements/interfaces/ICardProps';

function getCardClasses(extraClassName?: string): string {
  if (extraClassName === undefined) {
    return styles['card'];
  }
  return `${styles['card']} ${extraClassName}`;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const cardClasses = getCardClasses(props.className);

  return (
    <div className={cardClasses} style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;