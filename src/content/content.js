import { useState } from 'react';
import './content.css';

export const Content = ({ title, content, className }) => {

    const [show, setShow] = useState('visible');
    const [opacity, setOpacity] = useState();
    const [height, setHeight] = useState('1000px');

    const onClick = () => {
        if (show === 'visible' && height === '1000px') {
            setOpacity(0);
            setHeight('0px');
            setTimeout(() => {
                if (height === '1000px') setShow('visible');
                else setShow('hidden');
            }, 800);

        } else {
            setShow('visible');
            setOpacity(1);
            setHeight('1000px');
        }
    }

    return (
        <div className='content-box'>
            <span className='head'>
                <h2
                    className='more'
                    onClick={onClick} >
                    {title}
                </h2>
                <div className='line decoration' />
            </span>
            <span
                className={`content ${className}`}
                style={{
                    visibility: show,
                    maxHeight: height,
                    opacity: opacity
                }}>
                {content}
            </span>
        </div>
    );
};