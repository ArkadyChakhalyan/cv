import './header.css';

export const Header = () => {
    return (
        <div className='header'>
            <h1>чахалян аркадий</h1>
            <span className='line'>
                <p className='label'>E-mail:</p>
                <a
                    className='accent'
                    href='mailto:arkadychakhalyan@gmail.com'>arkadychakhalyan@gmail.com</a>
            </span>
            <span className='line'>
                <p className='label'>Телефон:</p>
                <a
                    className='accent number'
                    href='tel:+79996671688'>+79996671688</a>
            </span>
            <span className='line'>
                <p className='label'>Возраст:</p>
                <p className='accent number'>26</p>
            </span>
        </div>
    )
};