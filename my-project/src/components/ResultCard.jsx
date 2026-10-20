// import { Download } from "lucide-react";

// const ResultCard = (props) => {
//   return (
//     <div className="w-[20vw] h-75 bg-white rounded">
//       <img className="h-full w-full object-cover" src={props.item.src} alt="" />
//       <div className="">
//         <h1 className="text-white font-semibold">{props.item.title}</h1>
//         <button>
//           <Download size={25} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResultCard;

import { useState } from "react";
import { Download, Check, ArrowUpRight } from "lucide-react";

const ResultCard = ({ item }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);

      const response = await fetch(item.src);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `image-${item.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Image download failed:", error);
      window.open(item.src, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <article className="group relative isolate aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15">
      <img
        src={item.thumbnail || item.src}
        alt={item.title || "Unsplash image"}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/0 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Discover / Photography
          </p>

          <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-white sm:text-base">
            {item.title || "Untitled photograph"}
          </h2>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          aria-label="Download image"
          title="Download image"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-neutral-200 active:scale-95 disabled:opacity-60"
        >
          {downloading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
          ) : (
            <Download size={19} strokeWidth={2} />
          )}
        </button>
      </div>

      <div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight size={17} />
      </div>
    </article>
  );
};

export default ResultCard;
