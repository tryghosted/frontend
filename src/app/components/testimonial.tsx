import { log } from 'console';
import styles from './testimonial.module.css'
import Image from 'next/image';
import { useMemo } from 'react';

interface Star {
    key: string;
    filled: boolean;
    position: number;
}

function Stars({ rating, outOf = 5 }: { rating: number, outOf?: number }) {
    const stars: Star[] = useMemo(
        () => (new Array(outOf).fill('star').map((_, i) => {
            return {
                key: `star-${i}`,
                filled: i < rating,
                position: i * 16
            }
        })
        ),
        [rating, outOf]
    );

    return (
        <svg width={outOf * 16} height="15" viewBox={`0 0 ${outOf * 16} 15`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {stars.map((star) => (
                <g
                    key={star.key}
                    fill={star.filled ? "#EDB234" : "#ddd"}
                    transform={`translate(${star.position} 0)`}>
                    <path
                        id={star.key}
                        d="M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z"
                    />
                </g>
            ))}
        </svg>
    )
}

export default function Testimonial({ name, testimony, rating, logo }: { name: string, testimony: string, rating: number, logo: string }) {
    return (
        <div className={styles.box}>
            <div>
                <div className="flex w-full gap-4">
                    <div className='rounded-full' style={{
                        width: '54px',
                        height: '54px',
                        background: '#ddd',
                        overflow: 'hidden'
                    }}>
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" fill="white" />
                            <rect x="0.5" y="0.5" width="53" height="53" rx="26.5" stroke="#AC98FF" />
                            <path d="M26.7722 30.2569C23.7684 30.2569 21.2034 29.1853 19.0688 27.0506C16.9341 24.9159 15.8625 22.3425 15.8625 19.3472C15.8625 16.3519 16.9341 13.7784 19.0688 11.6437C21.2034 9.50906 23.7769 8.4375 26.7722 8.4375C29.7759 8.4375 32.3409 9.50906 34.4756 11.6437C36.6103 13.7784 37.6819 16.3519 37.6819 19.3472C37.6819 22.3425 36.6103 24.9159 34.4756 27.0506C32.3409 29.1853 29.7675 30.2569 26.7722 30.2569ZM3.39188 54V47.0728C3.39188 45.5456 3.80531 44.1281 4.63219 42.8288C5.45906 41.5294 6.57281 40.5253 7.95656 39.825C11.0363 38.3147 14.1497 37.1841 17.28 36.4247C20.4188 35.6653 23.5744 35.2941 26.7638 35.2941C29.9531 35.2941 33.1172 35.6737 36.2475 36.4247C39.3862 37.1841 42.4913 38.3147 45.5709 39.825C46.9547 40.5253 48.0684 41.5209 48.8953 42.8288C49.7222 44.1281 50.1356 45.5456 50.1356 47.0728V54H3.375H3.39188Z" fill="url(#paint0_linear_549_603)" />
                            <defs>
                                <linearGradient id="paint0_linear_549_603" x1="-5.01188" y1="0.185625" x2="52.11" y2="77.7684" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F5F2FF" />
                                    <stop offset="0.57" stopColor="#A58FFF" />
                                    <stop offset="1" stopColor="#6E4AFF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex-grow flex flex-col justify-around'>
                        <Stars rating={rating} />
                        <p className={styles.name}>
                            {name}
                        </p>
                    </div>
                </div>
                <p className='pt-4'>
                    {testimony}
                </p>
            </div>
            <div style={{ position: "relative", width: "80px", height: "28px" }}>
                <Image
                    src={logo}
                    alt=""
                    fill
                    style={{ objectFit: "contain" }} />
            </div>
        </div>
    );
}