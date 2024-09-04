import React, {useState} from 'react';
import css from './Flipcard.module.scss'
import MDRenderer from '../MDRenderer/MDRenderer'
import ReactGA from "react-ga4";

const Flipcard = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        // console.log("click");
        setIsFlipped(!isFlipped);
        console.log("isFlipped for " + props.place + ": " + isFlipped);
        ReactGA.event({
            category: 'Clicks',
            action: 'Click',
            label: "Flipcard for " + props.place,
        });
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
                    <div className={css.header}> My Accomplishments:</div>

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