import React from 'react';
import styles from './app.module.scss';
import { AppLayout } from '../app-layout/AppLayout';

export const App: React.FC = () => {
    return (
        <div className={styles.appLayoutContainer}>
            <AppLayout></AppLayout>
        </div>
    );
};
