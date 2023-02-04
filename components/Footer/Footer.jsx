import AppIcon from "components/AppIcon/AppIcon";
import { SOCIAL_MEDIA } from "utils/constants";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div id="footer-social-media">
        {SOCIAL_MEDIA.map(({ label, ref }, index) => (
          <AppIcon key={index} href={ref} icon={label} />
        ))}
      </div>
      <div id="footer-copyright">&#169; 2022 by André Rodrigo</div>
    </footer>
  );
};

export default Footer;
