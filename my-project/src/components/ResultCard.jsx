const ResultCard = (props) => {
  return (
    <div className="w-[20vw] h-75 bg-white rounded">
      <img className="h-full w-full object-cover" src={props.item.src} alt="" />
      <div className="">
        <h1 className="text-white font-semibold">{props.item.title}</h1>
      </div>
    </div>
  );
};

export default ResultCard;
