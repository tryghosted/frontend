import styles from './styles.module.css'
import EmailSignup from './components/email-signup'
import Testimonial from './components/testimonial'
// Images
import { worksWith, how, coachingLogos } from './content/home'
import Image from 'next/image'
import heroInbox from '/public/illustrations/hero-inbox.svg'
import recording from '/public/illustrations/recording.svg'

export default function Home() {
  return (
    <main className='bg-grid bg-no-repeat'>
      <HeroSection />
      <HowItWorksSection />
      <GetAccessSection />
      <TestimonialSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className='grid md:grid-cols-12 gap-8 py-7 lg:py-14'>
      <div className='md:col-span-7'>
        <h1 className={`text-3xl md:text-5xl lg:pr-2 mb-3 ${styles.heading}`}><span className={styles.underline}>Completing</span> the<br /> Interview Feedback Loop</h1>
        <p className={styles.headingSub}>
          Ghosted AI is your interview feedback assistant, we join your remote interviews, transcribe call audio, and then leverage the power of AI to provide you instant feedback on your interview performance.
        </p>
        <EmailSignup />
        <h2 className={`text-md mt-8 mb-6 ${styles.h3}`}>Built by operators from</h2>
        <div className="h-16 items-start flex flex-row">
          <div className="mr-12">
            <Image alt="Amazon" src="/logos/amazon.svg" width={90} height={25} sizes="100vw" />
          </div>
          <div className="mr-12">
            <Image alt="Visa" src="/logos/visa.svg" width={75} height={25} sizes="100vw" />
          </div>
          <div className="mr-12">
            <Image alt="Google" src="/logos/google.svg" width={95} height={25} sizes="100vw" />
          </div>
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <Image alt="Sprig" src="/logos/sprig.svg" width={80} height={25} sizes="100vw" />
            <div className="text-neutral-500 text-sm font-normal">a16Z & Accel backed</div>
          </div>
        </div>
      </div>
      <div className='md:col-span-5'>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image
            src={heroInbox}
            // empty labels this image as decorative
            alt=""
            sizes="800px"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className='py-7 lg:py-14'>
      <h2 className={`mb-8 text-xl md:text-4xl text-center ${styles.heading}`}>How it works</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {how.map(h => (
          <div key={h.title} className="text-center flex flex-col content-center items-center">
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
              <Image
                  alt={h.alt}
                  src={h.image}
                  fill
                  style={{ objectFit: "contain" }} />
            </div>
            <p className={`mt-8 mb-4 md:text-xl ${styles.heading}`}>{h.title}</p>
            <p>{h.subtitle}</p>
          </div>
        ))}
      </div>
      <div className='text-center py-12'>
        <a href="#get-access" className="primary-button">Get Access!</a>
      </div>
    </section>
  )
}

function GetAccessSection() {
  return (
    <section id="get-access" className='py-7 lg:py-14'>
      <div className='grid md:grid-cols-2'>
        <div style={{ position: 'relative', width: '400px', margin: '0 auto' }}>
          <Image
            alt=""
            src={recording}
            sizes="800px"
            // Make the image display full width
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className='flex flex-col h-full justify-center'>
          <h2 className={`text-lg md:text-2xl mb-8 ${styles.accessTitle}`}>Provide your details for early access to our private beta!</h2>
          <EmailSignup />
        </div>
      </div>
      <div className="pt-14 text-center">
        <h3 className={styles.h3}>Works with popular meeting apps</h3>
        <ul className='flex flex-wrap max-w-3xl mx-auto py-8 justify-center'>
          {worksWith.map(logo => (
            <li key={logo.title}>
              <Image
                alt={logo.title}
                src={logo.src}
                className='mx-8'
                style={{
                  width: 'auto',
                  height: '40px',
                }}
              />
            </li>
          ))}
        </ul>
        <p>and more</p>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section id="testimonials" className='py-7 lg:py-14'>
      <h2 className={`mb-8 text-xl md:text-4xl text-center ${styles.heading}`}>Testimonials</h2>
      <div className='grid md:grid-cols-3 gap-2'>
        <Testimonial
          rating={5}
          name="Product Manager @ Google"
          testimony="I support Ghosted because it fills a vital gap in the job market, emphasizing ongoing improvement in interview skills. Acting as a personal interview coach, Ghosted boosts candidates' confidence, refines responses, and helps them stand out in a competitive job market."
          logo="/logos/google.svg"
        />
        <Testimonial
          rating={5}
          name="Research Manager @ AirBnb"
          testimony="I endorse Ghosted for bridging a crucial job market gap by enhancing ongoing interview skills. Serving as a personalized coach, Ghosted elevates candidates' confidence, sharpens responses, and distinguishes them in a competitive job market."
          logo="/logos/airbnb.svg"
        />
        <Testimonial
          rating={5}
          name="Director Of Product @ Cision"
          testimony="Ghosted is building a product to solve a pain point that I believe most of us have faced while interviewing."
          logo="/logos/cision.svg"
        />
      </div>
      <div className="pt-14 text-center">
        <h2 className={styles.h3}>Coaching from professionals at</h2>
        <ul className='flex md:justify-around py-8 md:flex-row flex-col justify-center'>
          {coachingLogos.map(logo => (
            <li key={logo.title} className='mx-auto mb-8 md:mb-0 md:mt-0'>
              <div style={{ position: "relative", width: "100px", height: "40px" }}>
                <Image
                    src={logo.src}
                    alt=""
                    fill
                    style={{ objectFit: "contain" }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
