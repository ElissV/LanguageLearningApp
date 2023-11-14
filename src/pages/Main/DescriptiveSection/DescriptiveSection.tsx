import Card from "../../../common/components/Card/Card";
import styles from "./DescriptiveSection.module.scss";

function DescriptiveSection() {
    return (
        <section>
            <div className={styles.TextContainer}>
                <p>Improve your vocabulary.</p>
                <p>Start today.</p>
                <p>Don't be lazy.</p>
                <p>Memorize words that you specify yourself.</p>
                <p>Free of charge!</p>
            </div>
            <div className={styles.CardContainer}>
                <Card />
            </div>
        </section>
    );
}

export default DescriptiveSection;