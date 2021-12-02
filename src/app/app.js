import { Content } from '../content/content';
import { About } from '../content/info/about';
import { CodeWars } from '../content/info/codewars';
import { Design } from '../content/info/design';
import { Education } from '../content/info/education';
import { Experience } from '../content/info/experience';
import { ItSkills } from '../content/info/it-skills';
import { Languages } from '../content/info/languages';
import { Projects } from '../content/info/projects';
import { Header } from '../header/header';
import './app.css';

export const App = () => {
    return (
        <div className='app'>
            <Header />
            <Content
                title={'о себе'}
                content={<About />} />
            <Content
                title={'образование'}
                content={<Education />} />
            <Content
                title={'опыт работы'}
                content={<Experience />} />
            <Content
                title={'it навыки'}
                content={<ItSkills />} />
            <Content
                title={'знание языков'}
                content={<Languages />} />
            <Content
                title={'дизайн'}
                content={<Design />} />
            <Content
                title={'codewars'}
                content={<CodeWars />} />
            <Content
                title={'портфолио'}
                content={<Projects />}
                className={'portfolio'} />
        </div>
    )
}