// import Body from "../components/";
import Body from "../components/Body";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";

export default function IndexPage() {
  return (
    <>
      <div className="min-h-screen bg-blue-primary py-6">
        <Header />
        <Body />
        <StickyFooter />
      </div>
    </>
  );
}
