import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state: image } = useLocation();
  const navigate = useNavigate();
  //   const handleDownload = () => {
  //     const link = document.createElement("a");
  //     link.href = image.url;
  //     link.download = `image-${image.id}.jpg`;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };
  //   const handleDownload = () => {
  //     const link = document.createElement("a");
  //     link.href = image.url;
  //     link.download = "image.jpg";
  //     link.target = "_blank";
  //     link.click();
  //   };

  const handleDownload = async () => {
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `image-${image.id}.jpg`;
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Download failed:", error);
    }
  };
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

        <div className="flex justify-center items-center flex-row gap-50">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold mt-4">{image.title}</h1>
            <p className="text-gray-600 mt-2">{image.description}</p>
          </div>
          <div className="">
            <button
              onClick={handleDownload}
              className="p-2 w-[200px] h-[50px] mt-5 bg-black/10 rounded-sm hover:scale-95 transition"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
