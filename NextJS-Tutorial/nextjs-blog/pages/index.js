import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <p>Rob, is a self driven front end web developer for Liverpool SaaS & recruitment marketing company SourceFlow</p>
    <Link href="/posts/first-post">
    <a>This a link to the first post page</a>
    </Link>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
    {allPostsData.map(({ id, date, title }) => (
      <li className={utilStyles.listItem} key={id}>
      {title}
      <br />
      {id}
      <br />
      {date}
      </li>
      ))}
    </ul>
    </section>


    
    </Layout>
    );
}