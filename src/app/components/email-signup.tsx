'use client';

import { redirect } from 'next/navigation';
import styles from './email-signup.module.css';

export default function EmailSignup() {
   async function handleForm(formData: FormData) {
    console.log(formData);
    const email = formData.get('email');
    redirect(`/signup?email=${email}`);
   }

    return (
        <div>
            <form action={handleForm} className={styles.form}>
                <label htmlFor="signup-email" className='sr-only'>Email</label>
                <input id="signup-email" name="email" type="email" placeholder='your@email.com' className={styles.input} />
                <input type="submit" value="Get Access!" className={styles.button} />
            </form>
        </div>
    );
}
