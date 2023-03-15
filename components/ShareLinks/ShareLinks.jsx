import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
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

const ShareLinks = ({ slug, image, description }) => {
  const URL = `https://curiositygem.com/article/${slug}`;
  const ICON_PROPS = {
    size: 28,
    round: true
  };

  return (
    <div className={styles.container}>
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
