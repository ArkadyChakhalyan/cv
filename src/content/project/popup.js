import './popup.css';

export const Popup = ({ picture, onClose }) => {

    document.body.style.overflow = 'hidden';

    return (
        <div className='popupBg' onClick={onClose}>
            <div className='popupImage' style={{ backgroundImage: `url(${picture})` }} />
        </div>
    );
};