import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ошибка</h1>
            <p>Эта страница отсутствует в нашем интернет-магазине</p>
        </div>
    )
}

export default NotFoundBlock;