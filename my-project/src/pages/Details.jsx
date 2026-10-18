import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state: image } = useLocation();
  const navigate = useNavigate();

  if (!image) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Image not found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="max-w-2xl w-full shadow-xl rounded-xl p-5">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-800 text-white px-4 py-2 rounded mb-5"
        >
          ← Back to Gallery
        </button>

        <img
          src={image.url}
          alt={image.title}
          className="w-full max-h-[450px] object-contain rounded"
        />

        <h1 className="text-2xl font-bold mt-4">{image.title}</h1>

        <p className="text-gray-600 mt-2">{image.description}</p>

      </div>
    </div>
  );
};

export default Details;
