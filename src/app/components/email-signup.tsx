'use client';

import { redirect } from 'next/navigation';
import styles from './email-signup.module.css';
import { createSurveyResponse } from '@/app/lib/actions';

export default function EmailSignup() {
   async function handleForm(formData: FormData) {
    const email = formData.get('email') as string;
    await createSurveyResponse(email);
    redirect(`/signup?email=${email}`);
   }

    return (
        <div>
            <form action={handleForm} className={styles.form}>
                <label htmlFor="signup-email" className='sr-only'>Email</label>
                <input id="signup-email" name="email" type="email" required placeholder='your@email.com' className={styles.input} />
                <button type="submit" value="Join Waitlist!" className={styles.button}>Join Waitlist!</button>
            </form>
        </div>
    );
}
