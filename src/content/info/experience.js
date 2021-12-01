import './info.css';

export const Experience = () => {
    return (
        <ul className='long'>
            <li>
                <span className='top'>
                    <p className='text text-title'>
                        <div className='square' />
                        верстальщик, front-end</p>
                    <span className='date'>
                        <p className='accent'>фриланс</p>
                        <p>06.21-09.2021</p>
                    </span>
                </span>
                <p className='text extra'>
                    Верстка по дизайн макетам,
                    разработка отдельных компонентов.
                </p>
            </li>
            <li>
                <span className='top'>
                    <p className='text text-title'>
                        <div className='square' />
                        дизайнер</p>
                    <span className='date'>
                        <p className='accent'>фриланс</p>
                        <p>2017-2020</p>
                    </span>
                </span>
                <p className='text extra'>
                    Дизайн логотипов, брендинг,
                    айдентика, моушен дизайн.
                </p>
            </li>
            <li>
                <span className='top'>
                    <p className='text text-title'>
                        <div className='square' />
                        менеджер бара</p>
                    <span className='date'>
                        <p className='accent'>catch-22, норвегия</p>
                        <p>2018-2021</p>
                    </span>
                </span>
                <p className='text extra'>
                    Обучение новых сотрудников,
                    управление рабочими процессами,
                    контроль сотрудников,
                    заполнение финансовой отчетности.
                </p>
            </li>
        </ul>
    )
};