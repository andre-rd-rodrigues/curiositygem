import styles from "./appimage.module.scss";

const AppImage = ({ src, height = "30vw", className }) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        height
      }}
    ></div>
  );
};

export default AppImage;
