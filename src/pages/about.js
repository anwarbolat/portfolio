'use client';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import Experience from '../components/Experience';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Anwar Bolat | Interaction and Visual Designer</title>
        <meta
          name="description"
          content="Learn about Anwar Bolat's journey in interaction design, UX research, and digital innovation."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-secondary">
        <Header />
        <main>
          <AboutHero />
          
          {/* Experience Section with AnimatedSphere */}
          <Experience />

          <section className="py-20">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Qualifications */}
                <div className="card">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Qualifications</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-lg">• MSc in Human-Computer Interaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• The International Usability & UX Qualification Board</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• The Nielsen Norman Group</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• BA Architecture</span>
                    </li>
                  </ul>
                </div>

                {/* Awards */}
                <div className="card">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Awards</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-lg">• Surrey Digital Awards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• Awwwards Site of the Day</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• CSS Design Awards</span>
                    </li>
                  </ul>
                </div>

                {/* Recognition */}
                <div className="card">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Recognition</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-lg">• Featured in Web Designer Magazine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• Speaker at UX London 2023</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg">• Published in UX Collective</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
