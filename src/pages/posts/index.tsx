import { GetStaticProps } from 'next';
import Head  from 'next/head';
import * as prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>
          Posts | Ignews
        </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>10 de junho de 2021</time>
            <strong>Sinto saudades dos old days</strong>
            <p>Os old days eram em 2016, nona série. Era tudo bom demais. Agora tudo se resume à vida de fudido.</p>
          </a>
          <a href="#">
            <time>10 de junho de 2021</time>
            <strong>Sinto saudades dos old days</strong>
            <p>Os old days eram em 2016, nona série. Era tudo bom demais. Agora tudo se resume à vida de fudido.</p>
          </a>
          <a href="#">
            <time>10 de junho de 2021</time>
            <strong>Sinto saudades dos old days</strong>
            <p>Os old days eram em 2016, nona série. Era tudo bom demais. Agora tudo se resume à vida de fudido.</p>
          </a>
          <a href="#">
            <time>10 de junho de 2021</time>
            <strong>Sinto saudades dos old days</strong>
            <p>Os old days eram em 2016, nona série. Era tudo bom demais. Agora tudo se resume à vida de fudido.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismicValue = getPrismicClient()

  const response = await prismicValue.query([
    prismic.predicates.at("document.type", "publication")
  ], {
    fetch: ["publication.title", "publication.content"],
    pageSize: 100,
  });

  console.log(response);

  return {
    props: {}
  }
}