import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
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
    </Layout>
    );
}