// import axios from "axios";

// const key = import.meta.env.VITE_UNSPLASH_API


// export const fetchMedia = async (query, page = 1, per_page = 20) => {
//     try {
//         const res = await axios.get("https://api.unsplash.com/search/photos", {
//             params: { query, page, per_page },
//             headers: { Authorization: `Client-ID ${key}` }
//         })
//         return res.data;


//     } catch (error) {
//         console.log(error);

//     }
// }

import axios from "axios";

const key = import.meta.env.VITE_UNSPLASH_API;

export const fetchMedia = async (query, page = 1, per_page = 20) => {
    const res = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
            params: {
                query,
                page,
                per_page,
            },
            headers: {
                Authorization: `Client-ID ${key}`,
            },
        }
    );

    return res.data;
};
