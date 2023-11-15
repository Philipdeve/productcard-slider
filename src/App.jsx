import Slider from "react-slick";
import products from "./data";

const App = () => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <main className="mx-5 my-5 ">
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-md hover:shadow-2xl p-8 grid gap-9 overflow-hidden h-[300px] lg:h-[380px]" >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full  mb-10"
            />
            <h1 className="font-bold text-sm">
              {product.name.substring(0, 18) + "....."}
            </h1>
            <p className="mt-3 text-[#ff6b00]">$ {product.price}</p>
            <button className="bg-[#ff6b00] text-white text-sm py-2 px-4 rounded-lg my-4 mx-auto ">Add To Cart</button>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default App;
