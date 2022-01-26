
/*Scoped css: Forma de definir um escopo para o css. Dessa forma, este não irá interferir
  em outros arquivos.
  Exemplo de scoped css: home.module.css.*/

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <h1 className={styles.title}>Hello World!!!</h1>
  );
}