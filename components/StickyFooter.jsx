const StickyFooter = () => {
  return (
    <div className="container mx-auto relative hidden xl:flex">
      <img
        src="/c.svg"
        alt="crayon"
        className="absolute lg:-bottom-6  2xl:-left-12"
      />
    </div>
  );
};

export default StickyFooter;
