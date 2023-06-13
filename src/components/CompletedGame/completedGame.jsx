import styles from './completedGame.module.css';


const CompletedGame = ({ isQuizStarted, onComplete, isQuizCompleted }) => {

    const handleClickButton = () => {
        onComplete();
    }

    return (
        <>
            {isQuizStarted && (
                <button
                    className={styles.giveUp_button}
                    onClick={handleClickButton}
                >
                    Give Up!
                </button>
            )}

            {/* {!isQuizCompleted && (
                <div>
                    <button>Try again</button>
                    <button>Show answer</button>
                </div>

            )} */}
        </>
    )
};

export default CompletedGame;
