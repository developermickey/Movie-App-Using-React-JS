const Paginations = ({ handlePrev, handleNext, pageNo }) => {
  return (
    <div className="bg-zinc-700 w-full p-5 mt-5 flex justify-center text-white text-2xl">
      <div onClick={handlePrev} className="px-8 cursor-pointer">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="px-8 cursor-pointer">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Paginations;
