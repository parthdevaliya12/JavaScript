import { useNavigate } from "react-router-dom";

const Gallary = () => {
  const navigate = useNavigate();

  const gallery = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 1",
      description: "Explore this beautiful wildlife photograph.",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 2",
      description: "A fascinating glimpse of wildlife.",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 3",
      description: "Discover the beauty of nature.",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 4",
      description: "A closer look at the natural world.",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 5",
      description: "A photograph from the wildlife collection.",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 6",
      description: "Discover another scene from nature.",
    },
    {
      id: 7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 7",
      description: "Enjoy this wildlife photograph.",
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 8",
      description: "A moment captured in nature.",
    },
    {
      id: 9,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7GmVpyvkEJEHExL8QnD57tF_bADoYEb5p-DAVMRGfw&s=10",
      title: "Wildlife Image 9",
      description: "Explore the wildlife collection.",
    },
    {
      id: 10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFGC9EvbR0DT8SLUsIy-DIt5w0SPdfz0LxiCbNbZWkw&s=10",
      title: "Wildlife Image 10",
      description: "A beautiful image from the collection.",
    },
    {
      id: 11,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10",
      title: "Wildlife Image 11",
      description: "Explore this scene from the natural world.",
    },
    {
      id: 12,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10",
      title: "Wildlife Image 12",
      description: "Another view from the wildlife collection.",
    },
    {
      id: 13,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgvfPocDqVi-wSk5zVBZlrQyn1wPTbVcNzxCkjuMtsA&s=10",
      title: "Wildlife Image 13",
      description: "Discover the wonders of wildlife.",
    },
    {
      id: 14,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgvfPocDqVi-wSk5zVBZlrQyn1wPTbVcNzxCkjuMtsA&s=10",
      title: "Wildlife Image 14",
      description: "A photograph from the nature collection.",
    },
    {
      id: 15,
      url: "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg",
      title: "Tiger",
      description: "A tiger photographed in its natural surroundings.",
    },
    {
      id: 16,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb26HBU9J3LOKzN8BywaTqJeRtaTVgKKOq4FaMaH8zw&s=10",
      title: "Wildlife Image 16",
      description: "Explore the final image in this collection.",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.map((g) => (
          <div key={g.id} className="p-2 shadow-md rounded-lg overflow-hidden">
            <img
              src={g.url}
              alt={g.title}
              className="w-full h-48 object-cover rounded-md cursor-pointer hover:scale-105 transition duration-300"
              onClick={() => navigate(`/details/${g.id} `, { state: g })}
            />
            <h2 className="mt-2 font-medium">{g.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
