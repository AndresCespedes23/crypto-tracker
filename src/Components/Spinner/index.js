import { Triangle } from "react-loader-spinner";
import styles from "../../styles/spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
