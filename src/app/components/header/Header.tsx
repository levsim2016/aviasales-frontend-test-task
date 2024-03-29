import React from 'react';
import styles from './header.module.scss';
import { Logo } from '../logo/Logo';

export const Header: React.FC = () => {
    return (
        <header className={styles.headerLayout}>
            <div className={styles.logoWrapper}>
                <Logo></Logo>
            </div>
        </header>
    );
};
