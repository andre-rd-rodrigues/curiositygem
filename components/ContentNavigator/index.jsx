import React, { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./contentNavigator.module.scss";
import { NAVBAR_HEIGHT } from "utils";

const ContentNavigator = ({ headings }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState();
  const modalRef = useRef(null);

  useEffect(() => {
    if (headings?.length === 0 || !headings) return;
    setActiveHeadingId(headings[0]?.id);
  }, [headings]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setTimeout(() => {
          if (!modalRef.current.contains(event.target)) {
            setIsVisible(false);
          }
        }, 100);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleNavigation = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const scrollToPosition = absoluteElementTop - NAVBAR_HEIGHT;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth"
      });
    }

    setIsVisible(false);
    setActiveHeadingId(id);
  };

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.15 }}
            className={styles.picker}
          >
            <ul className={styles.list}>
              {headings.map((heading, index) => (
                <li
                  key={heading.id}
                  className={`${styles.listItem} ${
                    heading.id === activeHeadingId ? styles.active : ""
                  }`}
                  onClick={() => handleNavigation(heading.id)}
                >
                  {heading.text}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={toggleVisibility} className={styles.button}>
        <Icon icon="mdi:format-list-bulleted" className="text-3xl" />
      </button>
    </div>
  );
};

export default ContentNavigator;
