import Rating from "@mui/material/Rating";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function ReviewsSection() {
    return (
        <section className={styles.MainContainer}>
            <div className={styles.RatingContainer}>
                <span>4.5</span>
                <Rating name="size-large" value={4.5} precision={0.5} size="large" />
            </div>
            <div className={styles.ReviewCardContainer}>
                <Button className={styles.InlineArrowButton}>
                    <ArrowBackIosIcon className={styles.Icon}/>
                </Button>
                <div className={styles.ReviewCard}>
                    "Probably the best language learning app. I've been using it every day throughout 3 years."
                    <div className={styles.ReviewerNameContainer}>
                        - Alice
                    </div>
                </div>
                <Button className={styles.InlineArrowButton}>
                    <ArrowForwardIosIcon className={styles.Icon} />
                </Button>
                <div className={styles.ArrowContainerBlock}>
                    <Button>
                        <ArrowBackIosIcon className={styles.Icon} />
                    </Button>
                    <Button>
                        <ArrowForwardIosIcon className={styles.Icon} />
                    </Button>
                </div>
            </div>
        </section>
    );
}