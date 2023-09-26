import React, {useState} from 'react';
import css from './Flipcard.module.scss'
import MDRenderer from '../MDRenderer/MDRenderer'

const Flipcard = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        console.log("click")
        setIsFlipped(!isFlipped);
        console.log(isFlipped)
      };

    const backgroundImageStyle = {
        backgroundImage: `url(${props.image})`,
    };


    return (
      <div className={css.wrapper}>
        <div className={` ${css.container} ${isFlipped ? css.flipped : ''}`} onClick={handleCardClick}>
            <div className={css.cardfront} style={backgroundImageStyle}>
                <p className={css.internship}>{props.role}</p>
                <p className={css.place}>{props.place}</p>
                <p className={css.timeperiod}>{props.tenure}</p>
            </div>

            <div className={css.cardback}>
                <div className={css.content}>
                    <div className={css.header}> My Responsibilities:</div>

                    <div className={css.body}>
                        <div className={css.description}>
                            <MDRenderer markdownContent={props.detail}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    )
}

export default Flipcard