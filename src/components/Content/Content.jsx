import React, { useState } from 'react';
import styles from './Content.module.css';
import tarakan from '../../images/tarakaneblan.svg';
import logout from '../../images/log-out.svg';
import BugsList from '../BugsList/BugsList';
import Modal from '../Modal/Modal';

const Content = () => {
    const id = '8fs8dfsf6776afefeafe776fe'
    const idArray = id.split('')
    let idForRenderFirstLetters = [];
    let idForRenderLastLetters = [];
    for (let i = 0; i < idArray.length; i++) {
        if (i < 7) {
            idForRenderFirstLetters.push(idArray[i]);
        } else if (i >= idArray.length - 4) {
            idForRenderLastLetters.push(idArray[i]);
        }
    }
    const idForRender = `${idForRenderFirstLetters.join('') + '....' + idForRenderLastLetters.join('').toUpperCase()}`

    const [activeButton, setActiveButton] = useState('bugs')

    return (
        <main className={styles.content}>
            <section className={styles.tracker}>
                <div className={styles.buttons}>
                    <button onClick={() => setActiveButton('bugs')} className={styles.button} type="button" style={activeButton === 'bugs' ? {fontWeight: '600', fontSize: '16px', borderBottom: '1px solid #FFD600'} : {}}>BUGS</button>
                    <button onClick={() => setActiveButton('suggestions')} className={styles.button} type="button" style={activeButton === 'suggestions' ? {fontWeight: '600', fontSize: '16px', borderBottom: '1px solid #FFD600'} : {}}>SUGGESTIONS</button>
                </div>
                <div className={styles.middle}>
                    <img src={tarakan} alt={'tarakaneblan'} className={styles.tarakan} />
                    <h1 className={styles.title}>bug tracker</h1>
                </div>
                <div className={styles.infobuttons}>
                    <button className={styles.infobutton} style={{width: 43, height: 39}}>?</button>
                    <button className={styles.infobutton} style={{width: 156, height: 39}}>{idForRender}</button>
                    <button className={styles.infobutton} style={{width: 43, height: 39}}><img src={logout} /></button>
                </div>
            </section>
            <section className={styles.bugList}>
                <p className={styles.bugListText}>bug list</p>
                <button type='button' className={styles.bugButton}>+ new bug</button>
            </section>
            <BugsList />
            <Modal />
        </main>
    );
};

export default Content;