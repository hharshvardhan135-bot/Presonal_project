import { useState, type FormEvent } from 'react';
import styles from './style.module.scss';
import BackImg from '../../assets/png/Background.png';

/* ------------------------------------------------------------------
   TEXT CONTENT  – change any wording here, no need to touch the JSX
------------------------------------------------------------------- */
const CONTENT = {
  heading: 'REGISTER',
  emailLabel: 'Register with email address',
  emailPlaceholder: 'Yourname@gmail.com',
  submitLabel: 'Register',
  dividerText: 'Or continue with',
  termsPrefix: 'By registering you agree with our',
  termsLink: 'Terms and Conditions',
  taglineLine1: 'REGISTER FOR YOUR',
  taglineLine2: 'ADVENTURE!',
  haveAccount: 'Have an account?',
  signIn: 'Sign in',
  
};

/* ------------------------------------------------------------------
   SMALL ICON COMPONENTS (inline SVG, so no extra files are needed)
------------------------------------------------------------------- */
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.8-5.5 3.8a6 6 0 1 1 0-12c1.9 0 3.1.8 3.8 1.5l2.6-2.5A9.6 9.6 0 0 0 12 2.4a9.6 9.6 0 1 0 0 19.2c5.5 0 9.2-3.9 9.2-9.3 0-.6-.1-1.1-.2-1.6H12Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#1877F2" />
    <path fill="#fff" d="M13.2 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.3-1.3 1.4-1.3h1.4V5.6c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.1H8.1V14h2.3v7h2.8Z" />
  </svg>
);

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------- */
const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: call your register API here
    console.log('Register with:', email);
  };

  const handleGoogle = () => {
    // TODO: Google auth
  };

  const handleFacebook = () => {
    // TODO: Facebook auth
  };

  return (
    <main className={styles.page}>
      {/* Background artwork */}
      <div className={styles.background}>
        <img src={BackImg} alt="" className={styles.backgroundImg} />
        <div className={styles.backgroundShade} />
      </div>

      {/* Top bar: sign-in link (mobile only) – left side is intentionally empty */}
      <header className={styles.header}>
        <a href="/login" className={styles.headerLink}>
          {CONTENT.haveAccount} <span>{CONTENT.signIn}</span>
        </a>
      </header>

      {/* Form */}
      <section className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>{CONTENT.heading}</h1>

          <label htmlFor="email" className={styles.label}>
            {CONTENT.emailLabel}
          </label>

          <div className={styles.inputBox}>
            <MailIcon />
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={CONTENT.emailPlaceholder}
            />
          </div>

          <button type="submit" className={styles.primaryButton}>
            {CONTENT.submitLabel}
          </button>

          <div className={styles.divider} />

          <p className={styles.smallText}>{CONTENT.dividerText}</p>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton} onClick={handleGoogle}>
              <GoogleIcon /> Google
            </button>
            <button type="button" className={styles.socialButton} onClick={handleFacebook}>
              <FacebookIcon /> Facebook
            </button>
          </div>

          <p className={styles.smallText}>
            {CONTENT.termsPrefix} <a href="/terms">{CONTENT.termsLink}</a>
          </p>
        </form>
      </section>

      {/* Big tagline bottom-left (desktop only) */}
      <p className={styles.tagline}>
        {CONTENT.taglineLine1}
        <br />
        <span>{CONTENT.taglineLine2}</span>
      </p>

      {/* Footer (mobile only) */}
      <footer className={styles.footer}></footer>
    </main>
  );
};

export default Register;