import AppHead from "components/AppHead/AppHead";
import PageContainer from "components/PageContainer/PageContainer";
import styles from "styles/legal.module.scss";

function Terms() {
  return (
    <>
      <AppHead
        title="Terms & Conditions - Curiosity Gem"
        description="Stay informed and protected while using Curiosity Gem! Our Terms & Conditions page outlines the rules and guidelines for using our blog, ensuring a safe and enjoyable experience for all. Read more to learn about our policies, rights, and obligations."
      />
      <PageContainer className={styles.container}>
        <h1>Terms and Conditions</h1>
        <h2>1. Introduction</h2>
        <p>
          These Terms and Conditions govern your use of Curiosity Gem, a blog
          website operated by André Rodrigues. By accessing or using our
          Website, you agree to be bound by these Terms and Conditions.
        </p>
        <h2>2. Content</h2>
        <p>
          All content on our Website, including but not limited to articles,
          images, graphics, videos, and any other materials posted by us, is the
          property of Curiosity Gem and is protected by applicable copyright and
          trademark laws. You may not use or reproduce any content from our
          Website without our prior written consent.
        </p>
        <h2>3. User Conduct</h2>
        <p>
          Users are not allowed to publish any posts, articles, or comments on
          our Website. The Website is only for reading articles. You agree to
          use our Website only for lawful purposes and in a manner that does not
          infringe on the rights of others. You are solely responsible for your
          conduct on our Website, and we reserve the right to terminate your
          access to our Website if you violate these Terms and Conditions.
        </p>
        <h2>4. Data Collection</h2>
        <p>
          We use Google Analytics to analyze user traffic on our Website. Google
          Analytics collects data such as your IP address, browser type, device
          type, and operating system. This data is used to analyze user behavior
          and improve our Website. By using our Website, you consent to the
          collection and use of this data by Google Analytics. For more
          information on how Google Analytics collects and processes data,
          please refer to Google&apos;s Privacy Policy.
        </p>
        <h2>5. Links to Third-Party Websites</h2>
        <p>
          Our Website may contain links to third-party websites that are not
          owned or controlled by Curiosity Gem. We have no control over, and
          assume no responsibility for, the content, privacy policies, or
          practices of any third-party websites. By using our Website, you
          acknowledge and agree that we shall not be responsible or liable,
          directly or indirectly, for any damage or loss caused or alleged to be
          caused by or in connection with the use of or reliance on any such
          content, goods, or services.
        </p>
      </PageContainer>
    </>
  );
}

export default Terms;
