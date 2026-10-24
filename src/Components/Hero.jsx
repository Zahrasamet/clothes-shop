
import hero_img from "../assets/ml1.jpg";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="flex justify-between items-center px-24 gap-4 w-full mt-24 max-w-screen-xl">
        <div className="w-1/2 mt-12">
         
<h2 className="text-3xl font-semibold">
  Discover Your Perfect Style
</h2>

<h1 className="text-6xl font-bold mt-3 leading-tight">
  Elevate Your Style With Timeless Fashion.
</h1>

<p className="text-lg text-gray-500 mt-4">
  Explore our latest collection of stylish clothing designed
  for every occasion. Find your favorite looks and express
  your unique style with confidence.
</p>

        </div>

        <div className="w-1/2">
          <img
            src={hero_img}
            alt="Hero"
            className="w-full h-[500px] object-contain mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
