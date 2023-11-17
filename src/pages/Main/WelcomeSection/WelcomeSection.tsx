import styles from "./styles.module.scss";

function WelcomeSection() {
    return (
        <section className={styles.MainContainer} section-labelledby="welcome-header">
            <hgroup>
                <h2 id="welcome-header">
                    Welcome, user!
                </h2>
                <p>
                    Here you can learn a new language.
                </p>
            </hgroup>
        </section>
    );
}

export default WelcomeSection;