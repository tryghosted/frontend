import styles from './styles.module.css'
import EmailSignup from './components/email-signup'
import Testimonial from './components/testimonial'
// Images
import { builtBy, worksWith, how, coachingLogos } from './content/home'
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
        <div className="h-16 justify-start items-start inline-flex">
          <div className="w-32 h-6 flex-col justify-center items-start inline-flex">
            <Image alt="Amazon" src="/logos/amazon.svg" width={68} height={20} sizes="100vw" />
          </div>
          <div className="w-32 h-6 flex-col justify-center items-start inline-flex">
            <Image alt="Visa" src="/logos/visa.svg" width={51} height={16} sizes="100vw" />
          </div>
          <div className="w-32 flex-col justify-center items-start inline-flex">
            <Image alt="Google" src="/logos/google.svg" width={68} height={24} sizes="100vw" />
          </div>
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <Image alt="Sprig" src="/logos/sprig.svg" width={59} height={22} sizes="100vw" />
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
        <div className='flex flex-col h-full justify-center mt-8'>
          <h2 className={`text-lg md:text-2xl mb-8 ${styles.accessTitle}`}>Provide your details for early access to our private beta!</h2>
          <EmailSignup />
        </div>
      </div>
      <div className="pt-14 text-center">
        <h3 className={styles.h3}>Works with popular meeting apps</h3>
        <ul className='flex flex-wrap gap-3 justify-around max-w-3xl mx-auto py-8'>
          {worksWith.map(logo => (
            <li key={logo.title} style={{ position: 'relative', width: '171px', height: '32px' }}>
              <Image
                alt={logo.title}
                src={logo.src}
                sizes="180px"
                style={{
                  width: 'auto',
                  height: '32px',
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
      <div className='grid md:grid-cols-3 gap-4'>
        <Testimonial
          rating={5}
          name="Amanda Chen"
          testimony="Incredible app for job interviews! Ghosted AI's feedback was spot on, helping me improve my answers and body language. A must-have for job seekers!"
          logo="/logos/google.svg"
        />
        <Testimonial
          rating={5}
          name="David Martinez"
          testimony="Ghosted AI surprised me with its precise, helpful AI coaching. Great for interview prep, though it could use more industry-specific tips. Very user-friendly!"
          logo="/logos/instacart.svg"
        />
        <Testimonial
          rating={5}
          name="Sarah Johnson"
          testimony="Ghosted AI offers good basic interview feedback, but it's a bit generic. Great for beginners, but might not suffice for experienced professionals."
          logo="/logos/cision.svg"
        />
      </div>
      <div className="pt-14 text-center">
        <h2 className={styles.h3}>Coaching from professionals at</h2>
        <ul className='flex flex-wrap gap-3 justify-around py-8'>
          {coachingLogos.map(logo => (
            <li key={logo.title}>
              <div style={{ position: "relative", width: "100px", height: "30px" }}>
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
