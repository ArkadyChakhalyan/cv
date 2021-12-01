import './info.css';

export const Languages = () => {
    return (
        <ul className='skills'>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Английский</p>
                    <div className='outside'>
                        <div className='inside english'></div>
                    </div>
                </span>
            </li>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Норвежский</p>
                    <div className='outside'>
                        <div className='inside norwegian'></div>
                    </div>
                </span>
            </li>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Армянский</p>
                    <div className='outside'>
                        <div className='inside armenian'></div>
                    </div>
                </span>
            </li>
        </ul>

    )
}