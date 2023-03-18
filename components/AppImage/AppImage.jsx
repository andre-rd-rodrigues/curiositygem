import PropTypes from "prop-types";
import Image from "next/image";

const AppImage = ({
  src,
  containerClassName,
  imageClassName,
  alt = "Curiosity Gem",
  priority = false
}) => {
  return (
    <div
      className={containerClassName || null}
      style={{ position: "relative" }}
    >
      <Image
        className={imageClassName || null}
        style={{ objectFit: "cover" }}
        src={src}
        alt={alt}
        fill
        quality={50}
        priority={priority}
      />
    </div>
  );
};

AppImage.propTypes = {
  containerClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default AppImage;
