import Head from 'next/head';
import Header from '../../components/Header';
import PortfolioGrid from '../../components/PortfolioGrid';
import Footer from '../../components/Footer';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Anuar Bolat</title>
        <meta
          name="description"
          content="Explore my portfolio of interaction and visual design projects, featuring work for Sage, Kaplan, THG, and other leading companies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-secondary">
        <Header />
        <main className="flex-grow">
          <PortfolioGrid />
        </main>
        <Footer />
      </div>
    </>
  );
}
