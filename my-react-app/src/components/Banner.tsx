import bannerImg from '../assets/imagenes/bannerlips.png';

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] bg-blue-500 text-white flex items-center justify-between overflow-hidden">
      <div className="flex flex-col justify-center pl-12 max-w-[50%]">
        <h1 className="text-4xl font-extrabold uppercase mb-4">
          Adhara's Beauty Exclusive Offer
        </h1>
        <p className="text-lg mb-2">25% OFF select Adhara's Beauty faves</p>
        <p className="text-lg mb-2">Members get an additional 5% off.</p>
        <p className="text-lg mb-6">Treat Yourself</p>
      </div>

    
      <div className="relative w-[45%] h-full">
        <img
          src={bannerImg}
          alt="Lips Banner"
          className="w-full h-full object-cover"
        />

        <button className="absolute bottom-8 right-70 bg-pink-200 hover:bg-pink-600 text-black px-5 py-2 rounded-full font-semibold shadow-md transition">
          See more
        </button>
      </div>
    </section>
  );
};

export default Banner;