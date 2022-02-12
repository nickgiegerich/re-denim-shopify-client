import PageTitle from "@/components/PageTitle";

function StoreHeading() {
  return (
    <div className="h-screen">
      <div className="bg-hero rounded-lg h-1/3 md:h-1/2">
        <PageTitle text="more than just bags." />
        {/* <p className="max-w-xl text-center px-2 mx-auto text-lg font-normal text-gray-100">
          Denim Re-purposed into Fashionable Accessories <br />
          Custom Embroidery in{" "}
          <span className="inline-block text-palette-primary font-bold text-xl leading-3 pb-2">
            Vivid Colors
          </span>{" "}
          <br />
          Totes, Satchels, Carry-ons, Purses, Packs and more!
        </p> */}
      </div>
      <div className="h-2/3 md:h-1/2 flex flex-col md:flex-row justify-evenly">
        <div className="w-full text-center mt-20">
          <span className="text-6xl font-primary font-semibold leading-relaxed">Why Us?</span>
        </div>
        <div className="w-full text-center md:text-left md:mt-20 px-3">
          <span className="text-2xl leading-relaxed">
            At ReDenim each creation is unique, no two creations are identical.
            This uniqueness is driven by the fact that no two pairs of jeans are
            the same size, shape, or patina. Truly one of a kind creations that
            are durable, look great and contribute to improving the world around
            us, one product at a time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default StoreHeading;
