import Card from "../../../common/components/Card/Card";
import styles from "./DescriptiveSection.module.scss";

function DescriptiveSection() {
    return (
        <section className={styles.SectionContainer}>
            <div className={styles.SectionInnerContainer}>
                <ol className={styles.TextList}>
                    <li>Improve your vocabulary.</li>
                    <li>Start today.</li>
                    <li>Don't be lazy.</li>
                    <li>Memorize words that you specify yourself.</li>
                    <li>Free of charge!</li>
                </ol>
                <div className={styles.CardContainer}>
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default DescriptiveSection;