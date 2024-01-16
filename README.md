# Ghosted Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies (this only needs to happen on first run)

```bash
npm install
```

Then, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load custom fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## I don't have time to read the NextJS docs -- TL;DR about this repo?

- Everything lives in `src/app` except assets (like `.png`, `.svg`, and `.pdf` files) which live in `/public`
- Styles are a mix of [TailwindCss](https://tailwindcss.com/) for grid and custom styles for things pasted from Figma 😈 It's just mixed enough that you could go fully either way. Or keep the style mashup and let chaos reign.
- Site pages will match the structure of the form. For example, for a page at `ghosted.ai/dashboard/login` the page code would be at `/src/app/dashboard/login/page.tsx`
- The files are all typescript. This was an easy choice, because we're not working with any data yet. YMMV.
- I took some liberties with some design and/or color choices that I believe will impact users positively, especially regarding accessibility. [This browser extension](https://www.deque.com/axe/browser-extensions/) is excellent for checking on that.
- You'll find both .png and .svg files of the same illustrations -- SVGs are smaller and probably worth keeping in the long run
