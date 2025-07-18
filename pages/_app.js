import "../styles/globals.css";
//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Head from "next/head";

//router
import { useRouter } from "next/router";

//frame motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Pouya Hendy</title>
        <meta name="description" content="Pouya Hendy's Portfolio" />
        <meta
          name="keywords"
          content="Pouya Hendy, Portfolio, Web Developer, Frontend Developer, Backend Developer, Full Stack Developer, React Developer, Next.js Developer, Tailwind Developer, HTML Developer, CSS Developer, JavaScript Developer, TypeScript Developer, Python Developer, C++ Developer, Delphi Developer, Figma Developer, Adobe XD Developer, Photoshop Developer, Canva Developer, Supabase Developer, MySQL Developer, React Query Developer, Redux Developer"
        />
        <meta name="author" content="Pouya Hendy" />

        {/* Favicon and icons */}
        <link rel="apple-touch-icon" href="/images/MasiHND-AppleLogo.png" />
        <link
          rel="icon"
          href="/images/faviconLight.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/faviconDark.png"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
