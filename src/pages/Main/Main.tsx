import DescriptiveSection from "./DescriptiveSection/DescriptiveSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import styles from "./Main.module.scss";
import Divider from "../../common/components/Divider/Divider";
import { ReviewsSection } from "./ReviewsSection/ReviewsSection";

function Main() {
    return (
        <div className={styles.MainViewContainer}>
            <WelcomeSection />
            <Divider />
            <DescriptiveSection />
            <Divider />
            <ReviewsSection />
        </div>
    );
}

export default Main;