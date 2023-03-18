import styles from "./appbutton.module.scss";

const AppButton = ({ label, onClick, containerClassName }) => {
  return (
    <div className={containerClassName || null}>
      <button className={styles.container} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default AppButton;
