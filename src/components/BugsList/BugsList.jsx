import React, { useEffect, useState } from 'react';
import BugListTemplate from '../BugListTemplate/BugListTemplate';
import { template } from '../bugsTemplate/bugsTemplate';
import styles from './BugsList.module.css';
import strelka from '../../images/decrement(Stroke).svg';
import { Reorder } from "framer-motion";

const BugsList = () => {
    const bugsApi = template;
    const [bugs, setBugs] = useState(bugsApi);

    return (
        <section className={styles.bugs}>
            <div className={styles.selectsList}>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>#</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>Adress</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>BUG</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>App</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>Status</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>Created</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>Severity</p>
                    <img src={strelka} />
                </div>
                <div className={styles.selectwrapper}>
                    <p className={styles.selectText}>Priority</p>
                    <img src={strelka} />
                </div>
            </div>
            <Reorder.Group axis='y' values={bugs} onReorder={setBugs} className={styles.bugsList}>
                {bugs.map((bug, index) => {
                return (
                    <BugListTemplate bug={bug} key={bug.adress} />
                   )
                })} 
            </Reorder.Group>
        </section>
    );
};

export default BugsList;