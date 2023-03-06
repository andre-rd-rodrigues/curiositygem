import { jost } from "assets/fonts/nextFonts";
import styles from "./homepageComponents.module.scss";
import { jost } from "assets/fonts/nextFonts";

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.logo} />
      <h1>Curiosity Gem</h1>
      <p style={jost.style}>Uncover hidden gems of knowledge. Stay curious.</p>
      <button onClick={() => window.scroll(0, 500)}>start reading</button>
    </div>
  );
};

export default Introduction;
