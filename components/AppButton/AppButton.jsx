import styles from "./appbutton.module.scss";

const AppButton = ({ label, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};

export default AppButton;
