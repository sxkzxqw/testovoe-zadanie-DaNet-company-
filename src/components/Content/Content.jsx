import React, { useState } from 'react';
import styles from './Content.module.css';
import tarakan from '../../images/tarakaneblan.svg';
import logout from '../../images/log-out.svg';
import BugsList from '../BugsList/BugsList';
import Modal from '../Modal/Modal';
import closeIcon from '../../images/close.svg';

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
    const [modal, setModal] = useState(null);
    const [hint, setHint] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        navigator.clipboard.writeText(id)
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
        setIsClicked(false);
    };

    function handleCloseHint() {
        setHint(null)
    }

    function setHintState(state) {
        setHint(state)
    }

    function handleCloseModal() {
        setModal(null);
    }

    function setModalState(state) {
        setModal(state)
    }

    return (
        <main className={styles.content}>
            <section className={styles.tracker}>
                <div className={styles.buttons}>
                    <button onClick={() => setActiveButton('bugs')} className={styles.button} type="button" style={activeButton === 'bugs' ? { fontWeight: '600', fontSize: '16px', borderBottom: '1px solid #FFD600' } : {}}>BUGS</button>
                    <button onClick={() => setActiveButton('suggestions')} className={styles.button} type="button" style={activeButton === 'suggestions' ? { fontWeight: '600', fontSize: '16px', borderBottom: '1px solid #FFD600' } : {}}>SUGGESTIONS</button>
                </div>
                <div className={styles.middle}>
                    <img src={tarakan} alt={'tarakaneblan'} className={styles.tarakan} />
                    <h1 className={styles.title}>bug tracker</h1>
                </div>
                <div className={styles.infobuttons}>
                    <div className={styles.divForHint}>
                        <button className={styles.infobutton} style={{ width: 43, height: 39 }} onClick={setHintState}>?</button>
                        {!!hint &&
                            <div className={styles.hint}>
                                <div className={styles.hintTitleWrapper}>
                                    <p className={styles.hintTitle}>Reward details</p>
                                    <img src={closeIcon} className={styles.hintClose} onClick={handleCloseHint} />
                                </div>
                                <div className={styles.hintTextWrapper}>
                                    <p className={styles.hintText}>You can report a bug or send a suggestion to DeNet Developers Team. On the team consideration DeNet can reward you, if the bug or a suggestion will be the first in it's kind.</p>
                                    <p className={styles.hintText}>The reward is represented in decentralized storage capacity up to 10 GB. Using it you can stake your NFTs and store any other files in DeNet Ecosystem for free.</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.divForHint}>
                        <button className={styles.infobutton} style={{ width: 156, height: 39 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>{idForRender}</button>
                        {isHovering &&
                            <div className={styles.idHover}>
                                <p className={styles.hoverSuggest}>Click to copy</p>
                                <div className={styles.rhombus}></div>
                            </div>
                        }
                        {isClicked &&
                            <div className={styles.idHover}>
                            <p className={styles.hoverSuggest}>Copied</p>
                            <div className={styles.rhombus}></div>
                        </div>
                        }
                    </div>
                    <button className={styles.infobutton} style={{ width: 43, height: 39 }}><img src={logout} /></button>
                </div>
            </section>
            <section className={styles.bugList}>
                <p className={styles.bugListText}>bug list</p>
                <button type='button' className={styles.bugButton} onClick={setModalState}>+ new bug</button>
            </section>
            <BugsList />
            {!!modal &&
                <Modal handleClose={handleCloseModal} />
            }
        </main>
    );
};

export default Content;