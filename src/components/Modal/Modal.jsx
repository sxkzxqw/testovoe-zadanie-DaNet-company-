import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import closeIcon from '../../images/close.svg';
import kupidman from '../../images/MaiklKuzyaIKolyan.svg';
import musor from '../../images/musorok.svg';

const Modal = ({handleClose}) => {
    useEffect(() => {
        function closeByEscape(evt) {
          if(evt.key === 'Escape') {
            handleClose();
          }
        }
          document.addEventListener('keydown', closeByEscape);
          return () => {
            document.removeEventListener('keydown', closeByEscape);
          }
      }, []) 
    return (
        <div className={styles.modaloverlay}>
            <div className={styles.modal}>
                <button className={styles.button} onClick={handleClose}> 
                    <img src={closeIcon} />
                </button>
                <h2 className={styles.title}>Button not working!</h2>
                <div className={styles.infoAndButton}>
                    <div className={styles.info}>
                        <div className={styles.infoWrapper}>
                            <p className={styles.infoType}>
                                Adress:
                            </p>
                            <p className={styles.infoText}>
                                d85sa...d85sa
                            </p>
                        </div>
                        <div className={styles.infoWrapper}>
                            <p className={styles.infoType}>
                                App:
                            </p>
                            <p className={styles.infoText}>
                                DeNet NFT
                            </p>
                        </div>
                        <div className={styles.infoWrapper}>
                            <p className={styles.infoType}>
                                Created:
                            </p>
                            <p className={styles.infoText}>
                                01/29/2022
                            </p>
                        </div>
                        <div className={styles.infoWrapper}>
                            <p className={styles.infoType}>
                                Deadline:
                            </p>
                            <p className={styles.infoText}>
                                01/29/2022
                            </p>
                        </div>
                    </div>
                    <button className={styles.buttonInfo} type="button">In progress</button>
                </div>
                <div className={styles.inputAndButtons}>
                    <button className={styles.inputSectionButton} type="button">
                        ADD BUG TO REDMINE
                    </button>
                    <fieldset className={styles.inputWrapper}>
                        <input type='input' placeholder='Link from redmine' className={styles.input} />
                        <button className={styles.inputSectionButton} type="button">
                            ADD LINK
                        </button>
                    </fieldset>
                </div>
                <div className={styles.border}></div>
                <p className={styles.mainText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti tincidunt aliquet nisl netus cras id est arcu. Fames orci habitasse mauris eu massa gravida amet. Eu morbi enim eu nec. Fringilla vitae fermentum sit tincidunt scelerisque nisl fermentum, commodo viverra. Varius eu amet enim fermentum quis morbi quisque fringilla in. Egestas dignissim fringilla sapien augue viverra. At pulvinar lacus enim in volutpat integer tortor. Felis, nibh odio fermentum nisi, sed. Vulputate scelerisque ultrices non aliquam et nulla etiam pretium urna. Turpis nam purus vulputate at congue. Id amet ac mauris egestas in ipsum id.
                </p>
                <div className={styles.images}>
                    <ul className={styles.imagesList}>
                        <li className={styles.image}>
                            <p className={styles.imageTitle}>
                                image_2022-02-17_10-17-38.PNG
                            </p>
                            <p className={styles.imageSize}>
                                (711) KB
                            </p>
                        </li>
                        <li className={styles.image}>
                            <p className={styles.imageTitle}>
                                image_2022-02-17_10-17-38.PNG
                            </p>
                            <p className={styles.imageSize}>
                                (711) KB
                            </p>
                        </li>
                        <li className={styles.image}>
                            <p className={styles.imageTitle}>
                                image_2022-02-17_10-17-38.PNG
                            </p>
                            <p className={styles.imageSize}>
                                (711) KB
                            </p>
                        </li>
                        <li className={styles.image}>
                            <p className={styles.imageTitle}>
                                image_2022-02-17_10-17-38.PNG
                            </p>
                            <p className={styles.imageSize}>
                                (711) KB
                            </p>
                        </li>
                        <li className={styles.image}>
                            <p className={styles.imageTitle}>
                                image_2022-02-17_10-17-38.PNG
                            </p>
                            <p className={styles.imageSize}>
                                (711) KB
                            </p>
                        </li>
                        <li className={styles.image}>
                            <p className={styles.imageTitle}>
                                image_2022-02-17_10-17-38.PNG
                            </p>
                            <p className={styles.imageSize}>
                                (711) KB
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.border} style={{ marginTop: '25px' }}></div>
                <div className={styles.modalFooter}>
                    <fieldset className={styles.inputWrapper}>
                        <input type='input' placeholder='Thanks for suggestions keep the bounty' className={styles.input} style={{width: '819px', left: '0', height: '43px'}} />
                        <button className={styles.inputSectionButton} type="button" style={{height: '44px', width: '66px', borderBottomLeftRadius: '0', borderTopLeftRadius: '0', marginLeft: '817px'}}>
                            <img src={kupidman} />
                        </button>
                    </fieldset>
                    <button type='button' className={styles.Musorka_SamTiMusorkaBratok}>
                        <img src={musor} alt='Musorok)' />
                    </button>
                    <button type='button' className={styles.Status__Ladno_A_Zachem}>
                        Status
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;