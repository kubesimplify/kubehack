import Logo from "@assets/Logo";
import { ArrowTopRight } from "@assets/icon";
import Button from "@components/ui/Button";
import Heading from "@components/ui/Heading";
import Footer from "@layout/Footer";
import Head from "next/head";
import Link from "next/link";

const Cocpage = () => {
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
      <nav className="fixed top-0 left-0 right-0 z-30 w-full bg-sky-900  h-20 flex items-center tracking-wider">
        <div className="flex items-center justify-between mx-4 md:justify-around md:mx-auto w-full font-bold max-w-6xl">
          <Link href="/">
            <Logo />
          </Link>
          <div>
            <Button>
              <ArrowTopRight />
              Coming Soon...
            </Button>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto flex flex-col gap-4 mb-2 p-4 mt-20">
        <div className="flex flex-col gap-5">
          <Heading className="py-2 mb-2">Code of Conduct</Heading>
          <p>
            All attendees, speakers, sponsors and volunteers at Kubehack are
            required to agree with the following code of conduct. Organizers
            will enforce this code throughout the event.
          </p>
          <p>
            We expect cooperation from all participants to help ensure a safe
            environment for everybody.
          </p>
          <h1 className="font-bold text-xl underline ring-offset-8">
            No Discrimination
          </h1>
          <p>
            Kubehack is dedicated to providing a harassment-free event
            experience for everyone, regardless of gender, gender identity and
            expression, age, sexual orientation, disability, physical
            appearance, body size, race, ethnicity, religion &#40;or lack
            thereof&#41;, or technology choices.
          </p>
          <h1 className="font-bold text-xl underline ring-offset-8">
            No Harassment
          </h1>
          <p>
            We do not tolerate harassment of conference participants in any
            form. Sexual language and imagery is not appropriate for any event
            venue, including talks, workshops, parties, Twitter and other online
            media.{" "}
          </p>
          <p>
            Conference participants violating these rules may be sanctioned or
            expelled from Kubehack at the discretion of the event organizers.
          </p>
          <p>
            Harassment includes offensive verbal comments related to gender,
            gender identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion,
            technology choices, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </p>
          <p>
            Participants asked to stop any harassing behavior are expected to
            comply immediately.
          </p>
          <p>
            Sponsors are also subject to the anti-harassment policy. In
            particular, sponsors should not use sexualised images, activities,
            or other material. Booth staff &#40;including volunteers&#41; should
            not use sexualised clothing/uniforms/costumes, or otherwise create a
            sexualised environment.
          </p>
          <p>
            If a participant engages in harassing behavior, the conference
            organizers may take any action they deem appropriate, including
            warning the offender or expulsion from the event.
          </p>
          <h1 className="font-bold text-xl underline ring-offset-8">
            Always Report
          </h1>
          <p>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of The
            Kubehack team immediately, or contact us at{" "}
            <a className="underline" href="mailto:contact@kubehack.com">
              contact@kubehack.com
            </a>
            . Kubesimplify team can be identified as they&apos;ll be wearing
            branded clothing and/or badges.
          </p>
          <p>
            Kubesimplify team will be happy to help participants contact
            hotel/venue security or local law enforcement, provide escorts, or
            otherwise assist those experiencing harassment to feel safe for the
            duration of the conference. We value your attendance.
          </p>
          <p>
            We expect participants to follow these rules at the event and
            workshop venues and event-related social events.
          </p>
          <h1 className="font-bold text-xl underline ring-offset-8">
            Consequesnces of Violations
          </h1>
          <p>
            In case any participant violates this Code of Conduct, the organizer
            may, at their own discretion:
          </p>
          <ul className="list-disc pl-6">
            <li>expel them from the hackathon</li>
            <li>report their behaviour to local law enforcement.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cocpage;
