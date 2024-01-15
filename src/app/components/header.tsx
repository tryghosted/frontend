'use client'

import Image from 'next/image';
import styles from './header.module.css'
import GhostedLogo from '/public/logos/ghosted.svg'
import { useState } from 'react';

const links = [
    { title: 'How it works', href: '#how-it-works', scrollTo: true },
    { title: 'Testimonials', href: '#testimonials', scrollTo: true },
    { title: 'About us', href: '/about' }
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToHash = function (element_id: string) {
        if (element_id) {
            const element = document.getElementById(element_id)
            element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }

    return (
        <nav className="flex items-center justify-between flex-wrap py-3">
            <div className="flex items-center flex-shrink-0 text-white">
                <Image
                    src={GhostedLogo}
                    alt="Ghosted"
                    width={146}
                    height={28}
                />
            </div>
            <div className="hidden lg:flex">
                {links.map(link => (
                    <a
                        key={link.href}
                        className={`block mt-4 lg:inline-block lg:mt-0 ${styles.link}`}
                        href={link.href}
                        onClick={() => scrollToHash(link.scrollTo ? link.href : '')}>
                        {link.title}
                    </a>
                ))}
            </div>
            <div>
                <a className={`${styles.accessLink} hidden lg:block`} href="#get-access" onClick={() => scrollToHash('get-access')}>
                    Get Early Access
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex lg:hidden items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                    aria-label="toggle menu"
                >
                    <svg
                        aria-hidden="true"
                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:hidden ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm flex flex-col gap-6 text-center">
                    {links.map(link => (
                        <a
                            key={link.href}
                            className={`block mt-4 lg:inline-block lg:mt-0`}
                            href={link.href}
                            onClick={() => {
                                setIsOpen(false);
                                scrollToHash(link.scrollTo ? link.href : '');
                            }}>
                            {link.title}
                        </a>
                    ))}
                    <a className={`${styles.accessLink} inline`} href="#get-access" onClick={() => {
                        setIsOpen(false);
                        scrollToHash('get-access')
                    }}>
                        Get Early Access
                    </a>
                </div>
            </div>
        </nav >
    )
}