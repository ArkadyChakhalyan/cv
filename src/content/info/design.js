import './info.css';

export const Design = () => {
    return (
        <ul className='skills'>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Adobe Photoshop</p>
                    <div className='outside'>
                        <div className='inside ph'></div>
                    </div>
                </span>
            </li>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Adobe Illustrator</p>
                    <div className='outside'>
                        <div className='inside ai'></div>
                    </div>
                </span>
            </li>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Abode After Effects</p>
                    <div className='outside'>
                        <div className='inside ae'></div>
                    </div>
                </span>
            </li>
            <li>
                <span className='skill'>
                    <p className='text text-title'>Figma</p>
                    <div className='outside'>
                        <div className='inside figma'></div>
                    </div>
                </span>
            </li>
        </ul>

    )
}