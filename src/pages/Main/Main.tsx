import DescriptiveSection from "./DescriptiveSection/DescriptiveSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import styles from "./styles.module.scss";
import Divider from "../../common/components/Divider/Divider";
import { ReviewsSection } from "./ReviewsSection/ReviewsSection";

function Main() {
    return (
        <div className={styles.MainViewContainer}>
            <div className={styles.MainViewInnerContainer}>
                <WelcomeSection />
                <Divider />
                <DescriptiveSection />
                <Divider />
                <ReviewsSection />
            </div>
        </div>
    );
}

export default Main;