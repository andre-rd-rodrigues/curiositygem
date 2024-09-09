import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import CopyUrl from "./CopyUrl";
import styles from "./sharelinks.module.scss";

const ShareLinks = ({ slug, image, description, className }) => {
  const URL = slug
    ? `https://blog.andrerodrigo.com/article/${slug}`
    : `https://blog.andrerodrigo.com`;

  const ICON_PROPS = {
    size: 28,
    round: true
  };

  const containerStyles = className
    ? `${styles.container} ${className}`
    : `${styles.container}`;

  return (
    <div className={containerStyles}>
      <FacebookShareButton url={URL}>
        <FacebookIcon size={ICON_PROPS.size} round={ICON_PROPS.round} />
      </FacebookShareButton>
      <LinkedinShareButton url={URL}>
        <LinkedinIcon size={ICON_PROPS.size} round={ICON_PROPS.round} />
      </LinkedinShareButton>
      <PinterestShareButton url={URL} media={image} description={description}>
        <PinterestIcon size={ICON_PROPS.size} round={ICON_PROPS.round} />
      </PinterestShareButton>
      <TwitterShareButton url={URL}>
        <TwitterIcon size={ICON_PROPS.size} round={ICON_PROPS.round} />
      </TwitterShareButton>
      <CopyUrl url={URL} size={ICON_PROPS.size} />
      <WhatsappShareButton url={URL}>
        <WhatsappIcon size={ICON_PROPS.size} round={ICON_PROPS.round} />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareLinks;
