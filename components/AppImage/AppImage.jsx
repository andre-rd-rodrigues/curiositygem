import PropTypes from "prop-types";
import Image from "next/image";

const AppImage = ({
  src,
  containerClassName,
  imageClassName,
  alt = "Curiosity Gem"
}) => {
  return (
    <div
      className={containerClassName || null}
      style={{ position: "relative" }}
    >
      <Image
        className={imageClassName || null}
        src={src}
        alt={alt}
        fill
        objectFit="cover"
      />
    </div>
  );
};

AppImage.propTypes = {
  containerClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default AppImage;
