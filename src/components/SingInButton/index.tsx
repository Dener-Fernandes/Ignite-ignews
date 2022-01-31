import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
    className={styles.signInButton} 
    type="button"
    >
      <FaGithub color="#04D361"/>
      Dener Fernandes
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
      <button
        className={styles.signInButton} 
        type="button"
      >
        <FaGithub color="#EBA417"/>
        Sign in with Github
      </button>
    );
}