import Image from "next/image";
import styles from "./footer.module.css";
import GhostedLogo from "/public/logos/ghosted.svg";
import LinkedInLogo from "/public/logos/linkedin.svg";

export default function Footer() {
  return (
    <footer className={`${styles.container}`}>
      <div className="max-w-6xl mx-auto px-6 md:flex text-center md:text-start justify-between py-14 gap-8 items-start">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <Image src={GhostedLogo} alt="Ghosted" width={146} height={28} />
          <p className={styles.body}>Completing the Interview Feedback Loop!</p>
          <p className={styles.body}>
            <a href="mailto:tryghosted@gmail.com" target="_blank">
              tryghosted@gmail.com
            </a>
          </p>
        </div>
        <div className="md:text-right">
          <ul className="flex md:justify-end justify-center gap-4 mb-4 mt-2 md:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/company/ghosted-ai/"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Image
                  style={{
                    position: "relative",
                    width: "146px",
                    height: "28px",
                  }}
                  className="max-w-max"
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  width={146}
                  height={28}
                />
              </a>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row md:justify-end gap-2">
            <li>
              <a className={styles.link} href="/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={styles.link} href="mailto:tryghosted@gmail.com">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
