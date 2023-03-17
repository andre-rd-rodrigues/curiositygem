import styles from "./homepageComponents.module.scss";
import { jost } from "assets/fonts/nextFonts";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <Image src="/favicon.ico" alt="Curiosity gem" width={20} height={20} />
      <h1>Curiosity Gem</h1>
      <p style={jost.style}>Uncover hidden gems of knowledge. Stay curious.</p>
    </div>
  );
};

export default Introduction;
