import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Triistam</p>
        <p>
          17y.o. coder from Uzbekistan. I'm currently learning typescript for
          web development!
        </p>
      </section>
    </Layout>
  );
}
