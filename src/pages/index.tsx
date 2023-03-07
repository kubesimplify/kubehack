import About from "@components/About";
import Hero from "@components/Hero";
import Prizes from "@components/Prizes";
import Speakers from "@components/Speakers";
import Sponser from "@components/Sponser";
import Track from "@components/Track";
import Faq from "@components/Faq";
import Head from "next/head";
import Gradients from "@components/Gradient";
import dynamic from "next/dynamic";
import Navbar from "@layout/Navbar";
import Footer from "@layout/Footer";
import SectionWrapper from "@components/ui/SectionWrapper";
import Heading from "@components/ui/Heading";
import Link from "next/link";

const Particle = dynamic(() => import("@components/Particles"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>KubeHack</title>
        <meta name="title" content="KubeHack" />
        <meta
          name="description"
          content="Kubehack is a hackathon with endless creativity. Students are challenged to further what they know by creating projects following their passions."
        />
        <meta name="keywords" content="Hackathons, KubeHack, kubesimplify" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#4B0082" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto flex flex-col gap-4 mb-2 px-2">
        <Gradients />
        <Particle />
        <Hero />
        <About />
        <Track />
        <Prizes />
        <Speakers />
        <Sponser />

        {/* Rules Section */}
        <SectionWrapper id="rules">
          <Heading>Rules</Heading>
          <ul className="list-disc">
            <li>
              Follow the{" "}
              <Link href="/code-of-conduct" className="text-cyan">
                Code of Conduct
              </Link>
            </li>
          </ul>
        </SectionWrapper>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
