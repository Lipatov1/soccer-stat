import styles from './NotFound.module.css'
import { Link } from 'react-router-dom';
import { FC } from 'react';

const NotFound: FC = () =>  (
    <div className={styles.box}>
        <p className={styles.status}>404</p>
        <p className={styles.text}>Страница не найдена</p>
        <Link className={styles.link} to={'/'}>Перейти на <span>главную</span></Link>
    </div>
);

export default NotFound;
