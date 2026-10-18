import Gallary from "../components/Gallary";

const Home = () => {
  const data = "Premium Gallary";
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-5">
        <h1 className="font-bold text-3xl">{data.toUpperCase()}</h1>
      </div>
      <div className="p-10">
        <Gallary />
      </div>
    </div>
  );
};

export default Home;
