import Image from "next/image";

function Loader() {
  return (
    <div className="flex justify-center items-center height-100 fixed top-0 left-0 right-0 bottom-0 z-50 bg-white bg-opacity-80 ">
      <Image
        src="/assets/images/loader.gif"
        width={100}
        height={100}
        alt="loader"
      />
    </div>
  );
}

export default Loader;
