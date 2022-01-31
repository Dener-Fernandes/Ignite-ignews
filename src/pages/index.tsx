/*Scoped css: Forma de definir um escopo para o css. Dessa forma, este não irá interferir
  em outros arquivos.
  Exemplo de scoped css: home.module.css.*/
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.gnews</title>
      </Head>
      <main>
        <section>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span></h1>
          <p>
            Get access to all the publications <br/>
            <span>for $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}