import Star from "../icons/star.svg";

const Header = () => {
  return (
    <div className="container px-4 mx-auto mb-4 lg:mb-10 flex justify-center">
      <div className="flex items-center justify-center  animate-bounce ">
        <Star className="h-20 md:h-auto w-20" />
        <h1 className="ml-2 lg:ml-3 titleText text-center text-2xl md:text-4xl lg:text-6xl  text-yellow-primary">
          5 Tips & Trick belajar online
        </h1>
      </div>
    </div>
  );
};

export default Header;
