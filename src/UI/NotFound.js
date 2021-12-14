import { motion } from "framer-motion";
import styles from "./NotFound.module.css";

const NotFound = () => {
    const hover = {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    };
    return (
        <div className={styles.content}>
            <h5 className={styles.error}>Error 404, page not found</h5>
            <motion.a whileHover={hover} href='/' className={styles.aerror}>
                Home
            </motion.a>
        </div>
    );
};

export default NotFound;
