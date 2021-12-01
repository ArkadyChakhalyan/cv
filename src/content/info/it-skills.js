import './info.css';

export const ItSkills = () => {
    return (
        <ul className='long'>
            <li>
                <p className='text text-title'>
                    <div className='square' />
                    html / css</p>
                <p className='text extra'>
                    HTML5, SASS/SCSS, PostCSS, CSS-modules,
                    CSS variables, Flex, Grid, Bootstrap
                </p>
            </li>
            <li>
                <p className='text text-title'>
                    <div className='square' />
                    javascript</p>
                <p className='text extra'>
                    ES2015-2021, TypeScript, ООП, DOM,
                    LocalStorage, SessionStorage,
                    React, Redux, Thunk, React-Router,
                    Canvas(построение графиков на чистом Canvas),
                    Работа с сетью (fetch, RestAPI)
                </p>
            </li>
            <li>
                <p className='text text-title'>
                    <div className='square' />
                    environment</p>
                <p className='text extra'>
                    NodeJS/NPM, Webpack, ESLint
                </p>
            </li>
        </ul>

    );
};

