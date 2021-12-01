import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Popup } from './popup';
import './project.css';

export const Project = ({ name, description, tools, pictures, link, repoLink }) => {

    const [showPopup, setShowPopup] = useState(false);
    const [picture, setPicture] = useState(null);

    const onClose = () => {
        document.body.style.overflow = 'overlay';
        setShowPopup(false);
    };

    return (
        <Fragment>
        {showPopup ? <Popup onClose={onClose} picture={picture} /> : null}
        <div className='project'>
            <p className='accent title'>{name}</p>
            <div className='images'>
                <div
                    className='image'
                    style={{ backgroundImage: `url(${pictures[0]})` }}
                    onClick={() => {
                        setShowPopup(true);
                        setPicture(pictures[0]);
                    }}
                />
                <div
                    className='image'
                    style={{ backgroundImage: `url(${pictures[1]})` }}
                    onClick={() => {
                        setShowPopup(true);
                        setPicture(pictures[1]);
                    }}
                />
            </div>
            <p>Описание: {description}</p>
            <p>В проекте реализованно: {tools}</p>
            <span className='links'>
                <a className='accent' href={link} target='noreferer'>Проект</a>
                <a className='accent' href={repoLink} target='noreferer'>Репозиторий</a>
            </span>
        </div>
        </Fragment>
    );
}