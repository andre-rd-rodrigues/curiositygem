import { jost } from "assets/fonts/nextFonts";
import useStorage from "hooks/useStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COOKIES_NAMING } from "utils";
import styles from "./cookiebanner.module.scss";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { getItem, setItem } = useStorage();

  const handleConfirmation = () => {
    setItem(COOKIES_NAMING, true);
    setShowBanner(false);
  };

  useEffect(() => {
    const cookiesInStorage = getItem(COOKIES_NAMING);

    if (!cookiesInStorage) {
      setShowBanner(true);
    }
  }, [getItem]);

  if (!showBanner) return null;

  return (
    <div className={styles.wrapper} style={jost.style}>
      <div className={styles.title}>
        <Image src="/cookie.png" alt="Cookie" width={25} height={25} />
        <h6>Cookies & Privacy</h6>
      </div>
      <div className={styles.body}>
        <p>
          We use <Link href="/privacy">cookies</Link> in order to personalize
          your site experience.
        </p>
        <button onClick={handleConfirmation}>Confirm</button>
      </div>
    </div>
  );
};

export default CookieBanner;
