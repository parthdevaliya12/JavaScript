const Home = () => {
  const data = "Welcome to home page";
  return (
    <div className="flex justify-center items-center ">
      <div className="">
        <h1 className="text-2xl font-semibold">{data.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default Home;
