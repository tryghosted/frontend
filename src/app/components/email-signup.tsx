'use client'
import { useState, useCallback } from 'react';
import styles from './email-signup.module.css'

export default function EmailSignup() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setEmail(event.currentTarget.value);
    }, [setEmail])

    const handleForm = useCallback<React.FormEventHandler<HTMLFormElement>>((event) => {
        event.preventDefault();
        if (!email) return;
        setError('');
        setLoading(true);
        setTimeout(() => {
            setEmail('');
            setSuccess(true);
            setLoading(false);
        }, 1000)
        setTimeout(() => {
            setSuccess(false);
        }, 3000)
    }, [setEmail, setSuccess, setError, setLoading, email])

    return (
        <div>
            <form onSubmit={handleForm} className={styles.form}>
                <label htmlFor="signup-email" className='sr-only'>Email</label>
                <input id="signup-email" name="email" type="email" value={email} onChange={handleChange} placeholder='your@email.com' className={styles.input} />
                <input type="submit" value={loading ? "Submitting..." : "Get Access!"} disabled={loading} className={styles.button} />
            </form>
            {success && (
                <div className="p-2 bg-emerald-200 text-emerald-900 rounded-lg mt-2">
                    Submitted!
                </div>
            )}
            {!!error && (
                <div className="p-2 bg-red-200 text-red-900 rounded-lg mt-2">
                    An error occurred. Please try again later.
                </div>
            )}
        </div>
    );
}