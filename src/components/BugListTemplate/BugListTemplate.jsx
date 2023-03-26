import React from 'react';
import styles from './BugListTemplate.module.css';
import { Reorder } from 'framer-motion';

const BugListTemplate = ({ bug }) => {
    const id = bug.adress;
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
    const idForRender = `${idForRenderFirstLetters.join('') + '....' + idForRenderLastLetters.join('')}`;

    const circleColor = (data) => {
        if (data === 'Critical' || data === 'High') {
            return <div className={styles.severity}>
                <div className={styles.circle} style={{ background: '#ED4848' }}></div>
                <p className={styles.severityText}>{bug.severity}</p>
            </div>
        } else if (data === 'Medium') {
            return <div className={styles.severity}>
                <div className={styles.circle} style={{ background: '#FFD600' }}></div>
                <p className={styles.severityText}>{bug.severity}</p>
            </div>
        } else if (data === 'Low') {
            return <div className={styles.severity}>
                <div className={styles.circle} style={{ background: '#32A243' }}></div>
                <p className={styles.severityText}>{bug.severity}</p>
            </div>
        }
    }

    const renderStatus = (data) => {
        if (data === 'New') {
            return <div className={styles.status} style={{background: 'inherit', border: '1px solid #32A243'}}>
            <p className={styles.statustext}>{bug.status}</p>
            </div>
        } else if (data === 'On review') {
            return <div className={styles.status} style={{background: 'inherit', border: '1px solid #FFD600'}}>
            <p className={styles.statustext}>{bug.status}</p>
            </div>
        } else if (data === 'In progress') {
            return <div className={styles.status} style={{background: '#FFD600'}}>
            <p className={styles.statustext}>{bug.status}</p>
            </div>
        } else if (data === 'Rejected') {
            return <div className={styles.status} style={{background: '#ED4848', color: 'white'}}>
            <p className={styles.statustext}>{bug.status}</p>
            </div>
        } else if (data === 'Solved') {
            return <div className={styles.status} style={{background: '#32A243', color: 'white'}}>
            <p className={styles.statustext}>{bug.status}</p>
            </div>
        }
    }

    return (
        <Reorder.Item value={bug} className={styles.bugLi} id={bug}>
            <p className={styles.id}>{`#${bug.id}`}</p>
            <p className={styles.adress}>{idForRender}</p>
            <p className={styles.bug}>{bug.bug}</p>
            <p className={styles.app}>{bug.app}</p>
            {renderStatus(bug.status)}
            <p className={styles.data}>{bug.created}</p>
            {circleColor(bug.severity)}
            <p className={styles.priority}>{bug.priority}</p>
        </Reorder.Item>
    );
};

export default BugListTemplate;