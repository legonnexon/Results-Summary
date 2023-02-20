import styles from "./Home.module.css";

export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.YourResult}>
                <h1 className={styles.titleYourResult}>Your Result</h1>
                <div className={styles.circle}>
                    <h1 className={styles.recordNumber}>76</h1>
                    <p className={styles.totalRecord}>of 100</p>
                </div>
                <h1 className={styles.Great}>Great</h1>
                <p className={styles.paragrafo}>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className={styles.Summary}>
                <p className={styles.titleSummary}>Summary</p>
                <div className={styles.reaction}>
                    <div className={styles.flex}>
                        <img src="/icon-reaction.svg" alt="" />
                        <span>Reaction</span>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.score}>80</span>
                        <span className={styles.saleBlue}>/</span>
                        <span className={styles.saleBlue}>100</span>
                    </div>
                </div>
                <div className={styles.memory}>
                    <div className={styles.flex}>
                        <img src="/icon-memory.svg" alt="" />
                        <span>Memory</span>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.score}>92</span>
                        <span className={styles.saleBlue}>/</span>
                        <span className={styles.saleBlue}>100</span>
                    </div>
                </div>
                <div className={styles.verbal}>
                    <div className={styles.flex}>
                        <img src="/icon-verbal.svg" alt="" />
                        <span>Verbal</span>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.score}>61</span>
                        <span className={styles.saleBlue}>/</span>
                        <span className={styles.saleBlue}>100</span>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.flex}>
                        <img src="/icon-visual.svg" alt="" />
                        <span>Visual</span>
                    </div>
                    <div className={styles.flex}>
                        <span className={styles.score}>72</span>
                        <span className={styles.saleBlue}>/</span>
                        <span className={styles.saleBlue}>100</span>
                    </div>
                </div>
                <button className={styles.continue}>Continue</button>
            </div>
        </div>
    )
}