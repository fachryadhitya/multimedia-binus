// import Body from "../components/";
import Body from "../components/Body";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Multimedia Project</title>
      </Head>

      <div className="min-h-screen bg-blue-primary py-6">
        <Header />
        <Body />
        <StickyFooter />
      </div>
    </>
  );
}
