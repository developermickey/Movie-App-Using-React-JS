const Banner = () => {
  return (
    <div
      className="w-full h-[50vh] bg-cover bg-top flex items-end"
      style={{
        backgroundImage: `url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/Avengers-Endgame-banner-poster.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5)`,
      }}
    >
      <div className="text-3xl text-white bg-blue-600/60 w-full text-center py-2">
        Avengers
      </div>
    </div>
  );
};

export default Banner;
