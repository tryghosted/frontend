import Image from 'next/image';
import styles from './footer.module.css'
import GhostedLogo from '/public/logos/ghosted.svg'

export default function Footer() {
    return (
        <footer className="md:flex justify-between py-14 items-end gap-8">
            <div>
                <Image
                    src={GhostedLogo}
                    alt="Ghosted"
                    width={146}
                    height={28}
                />
                <p className={styles.body}>Completing the Interview Feedback Loop!</p>
                <p className={styles.body}>tryghosted@gmail.com</p>
            </div>
            <div className='md:text-right'>
                <ul className='flex md:justify-end gap-4 my-4'>
                    <li className={styles.linkedIn}>
                        <a href="#">LinkedIn</a>
                    </li>
                    <li className={styles.xTwitter}>
                        <a href="#">X formerly known as Twitter</a>
                    </li>
                </ul>
                <ul className='flex flex-col md:flex-row md:justify-end gap-4'>
                    <li>
                        <a className={styles.link} href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a className={styles.link} href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a className={styles.link} href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}