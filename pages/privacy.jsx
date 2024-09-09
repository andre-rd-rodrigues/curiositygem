import AppHead from "components/AppHead/AppHead";
import PageContainer from "components/PageContainer/PageContainer";
import styles from "styles/legal.module.scss";

function Privacy() {
  return (
    <>
      <AppHead
        title="Privacy Policy - Blog"
        description="Your privacy is important to us! Our Privacy Policy page details how we collect, use, and protect your personal information when you use our blog. Trust us to keep your data secure and respect your privacy. Read more to learn about our practices and your rights."
      />
      <PageContainer className={styles.container}>
        <h1>Privacy Policy</h1>
        <p>
          We take your privacy seriously. This privacy policy explains how we
          collect, use, and protect your personal information when you visit our
          website.
        </p>
        <h2>What personal data we collect and why we collect it</h2>
        <p>
          We only collect the personal information that you voluntarily provide
          to us, such as your name and email address when you subscribe to our
          newsletter. We use this information to send you our newsletter and
          other relevant updates. We do not share your personal information with
          any third parties, except as required by law. We also use Google
          Analytics to analyze the usage of our website. Google Analytics
          collects information about your use of our website, such as the pages
          you visit, your browser type, your IP address, and your geographic
          location. We use this information to improve our website and better
          understand our audience. Google Analytics may also use cookies to
          collect and store information about your usage. You can learn more
          about how Google uses your data by visiting their Privacy Policy page.
        </p>
        <h2>Cookies</h2>
        <p>
          We use cookies on our website to improve your user experience. Cookies
          are small data files that are placed on your device when you visit our
          website. They allow us to remember your preferences and customize our
          website to your needs. We do not use cookies to collect any personally
          identifiable information.
        </p>
        <h2>Third-party links</h2>
        <p>
          Our website may contain links to other websites. We are not
          responsible for the privacy practices or content of these websites. We
          encourage you to read their privacy policies before providing any
          personal information.
        </p>
        <h2>Security</h2>
        <p>
          We take appropriate measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction. However,
          no internet transmission is completely secure, and we cannot guarantee
          the security of your information.
        </p>
        <h2>Changes to our Privacy Policy</h2>
        <p>
          We reserve the right to update this privacy policy at any time. Any
          changes will be posted on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy policy, please
          contact us at{" "}
          <a href="mailto:andrerodrigo.web@gmail.com">
            andrerodrigo.web@gmail.com
          </a>
          .
        </p>
      </PageContainer>
    </>
  );
}

export default Privacy;
