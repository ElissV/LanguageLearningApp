import classnames from "classnames";
import styles from "./Card.module.scss";

function Card() {
    return (
        <div className={styles.CardContainer}>
            <div className={styles.CardInnerContainer}>
                <div className={classnames(styles.Card, styles.CardFront)}>
                    <div className={styles.CardSide}>
                    </div>
                        <div className={styles.CardText}>
                            Your words will be here.
                        </div>
                </div>
                <div className={classnames(styles.Card, styles.CardBack)}>
                    <div className={styles.CardSide}>
                    </div>
                        <div className={styles.CardText}>
                            Words' translations will be here.
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Card;