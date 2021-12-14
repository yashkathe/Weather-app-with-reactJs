import styles from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={styles.lds}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
