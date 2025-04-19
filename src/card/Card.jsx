import styles from "./card.module.css";
import propsTypes from "prop-types";

function Card(props){
    return(
        <div className={styles.card} onClick={() => window.open(props.upstream, "_blank")}>
            <img src={props.picture} alt="Picture" className={styles.picture} />
            <hr />
            <h2 className={styles.cardTitle}>{props.title}</h2>
            <p className={styles.cardText}>{props.description}</p>
            <p className={styles.cardText}>{props.title} is {props.isFramework? "":"not "} a framework</p>
        </div>
    );
}

Card.propsTypes = {
    picture: propsTypes.string.isRequired,
    title: propsTypes.string.isRequired,
    description: propsTypes.oneOfType([propsTypes.string, propsTypes.number]).isRequired,
    isFramework: propsTypes.bool.isRequired
}

export default Card;