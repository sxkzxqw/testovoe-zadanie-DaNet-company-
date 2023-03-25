import React from 'react';
import styles from './Header.module.css';
import LOGO from '../../images/LOGO.svg';
import lupa from '../../images/lupazalupa.svg';
import plus from '../../images/plus.svg';
import Select from 'react-select';

const Header = () => {
    const options = [
        {value: 'Polygon', label: 'Polygon'},
        {value: 'example1', label: 'example1'},
        {value: 'example2', label: 'example2'},
        {value: 'example3', label: 'example3'}
    ]
    return (
        <header className={styles.header}>
            <img src={LOGO} alt='logo' className={styles.logo} />
            <div className={styles.wrapper}>
                <img src={lupa} alt='lupka-zalupka' className={styles.lupa} />
                <Select options={options} />
                <div className={styles.balancegb}>
                    <div className={styles.gb_wrapper}>
                        <p className={styles.used}>Used:&nbsp;</p>
                        <p className={styles.gb}>0.4 GB</p>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.balancewrapper}>
                        <p className={styles.balance}>Balance:&nbsp;</p>
                        <p className={styles.bal}>0.6 TBY</p>
                        <img src={plus} alt='plus' className={styles.plus} />
                    </div>
                </div>
                <img src='https://nypost.com/wp-content/uploads/sites/2/2015/09/the_thinker_chimp-41.jpg?quality=75&amp;strip=all&amp;w=1024' alt='Фотография профиля' className={styles.photo} />
            </div>
        </header>
    );
};

export default Header;