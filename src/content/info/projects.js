import { Project } from '../project/project';
import '../project/project.css';
import stocks1 from '../../imgs/stocks1.png';
import stocks2 from '../../imgs/stocks2.png';
import contacts1 from '../../imgs/contacts1.png';
import contacts2 from '../../imgs/contacts2.png';
import todo1 from '../../imgs/todo1.png';
import todo2 from '../../imgs/todo2.png';
import slides1 from '../../imgs/slides1.png';
import sildes2 from '../../imgs/slides2.png';
import bookstore1 from '../../imgs/bookstore1.png';
import bookstore2 from '../../imgs/bookstore2.png';
import { useEffect, useRef, useState } from 'react';

export const Projects = () => {

    const [leftDisabled, setLeftDisabled] = useState(false);
    const [rightDisabled, setRightDisabled] = useState(false);

    const element = useRef(null);
    const width = element?.current?.clientWidth;

    const [left, setLeft] = useState(0);
    const [position, setPosition] = useState(0);

    const [transition, setTransition] = useState('margin 0.65s ease-out');

    const onLeftClick = () => {
        setPosition(prevState => prevState - 1);
        if (position < 0) setPosition(0);
    };

    const onRightClick = () => {
        setPosition(prevState => prevState + 1);
        if (position > 4) setPosition(4);
    };
    
    const [windowWidth, setWindowWidth] = useState();

    const resize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);

    useEffect(() => {
        setTransition('margin 0.65s ease-out');
        setLeft(position * width);

        if (position <= 0) setLeftDisabled(true);
        else setLeftDisabled(false);
    
        if(position >= 4) setRightDisabled(true);
        else setRightDisabled(false);

    }, [position])

    useEffect(() => {
        setTransition('')
        setLeft(position * width);
    }, [windowWidth])

    return (
        <div className='container projects' ref={element}>
            <button
                className='button left'
                onClick={onLeftClick}
                disabled={leftDisabled}
            >
                &#8249;
            </button>
            <ul className='projects' style={{ marginLeft: -left + 'px', transition: transition }}>
                {
                    projects.map((item, index) => {

                        const { name, description, tools, pictures, link, repoLink } = item;

                        return (
                            <li key={index}>
                                <Project
                                    name={name}
                                    pictures={pictures}
                                    link={link}
                                    repoLink={repoLink}
                                    description={description}
                                    tools={tools}
                                />
                            </li>
                        );
                    })
                }
            </ul>
            <button 
                className='button right'
                onClick={onRightClick}
                disabled={rightDisabled}
                >
                &#8250;
            </button>
        </div>
    );
};

const projects = [
    {
        name: 'Stock Spreadsheet',
        description: 'Stock analyzer tool and portfolio manager for tracking your stocks and dividend income',
        tools: 'React, Redux, Thunk, Rest API / fetch, работа с локальным хранилищем, адаптивная верстка, CSS modules, Canvas, JSDoc',
        pictures: [
            stocks1,
            stocks2
        ],
        link: 'https://arkadychakhalyan.github.io/stock-spreadsheet/',
        repoLink: 'https://github.com/ArkadyChakhalyan/stock-spreadsheet',
    },
    {
        name: 'Contacts',
        description: 'SPA with sign-in form and contacts page / login - "user", password - "passowrd" ',
        tools: 'React, Redux, Material UI',
        pictures: [
            contacts1,
            contacts2
        ],
        link: 'https://arkadychakhalyan.github.io/contacts/',
        repoLink: 'https://github.com/ArkadyChakhalyan/contacts',
    },
    {
        name: 'Todo List',
        description: 'Custom todo-list',
        tools: 'React, Redux, TypeScript, CSS modules, адаптивная верстка, работа с локальным хранилищем',
        pictures: [
            todo1,
            todo2
        ],
        link: 'https://arkadychakhalyan.github.io/todo-list/',
        repoLink: 'https://github.com/ArkadyChakhalyan/todo-list',
    },
    {
        name: 'Bookstore',
        description: 'Search engine for Google Books',
        tools: 'React, Redux, Thunk, TypeScript, CSS modules, RestAPI / fetch, адаптивная верстка',
        pictures: [
            bookstore1,
            bookstore2
        ],
        link: 'https://arkadychakhalyan.github.io/bookstore-test/?#/',
        repoLink: 'https://github.com/ArkadyChakhalyan/bookstore-test',
    },
    {
        name: 'Slides',
        description: 'Ipad (1024x768) product presenation',
        tools: 'React, SCSS, BEM, адаптивная верстка, CSS-анимация, верстка по макету',
        pictures: [
            slides1,
            sildes2
        ],
        link: ' https://arkadychakhalyan.github.io/slides_test/',
        repoLink: 'https://github.com/ArkadyChakhalyan/slides_test',
    },
]