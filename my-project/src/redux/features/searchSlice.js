// import { createSlice } from "@reduxjs/toolkit";

// export const searchSlice = createSlice({
//     name: "search",
//     initialState: {
//         query: '',
//         activeTab: 'photos',
//         results: [],
//         loading: false,
//         error: null
//     },
//     reducers: {
//         setQuery: (state, action) => {
//             state.query = action.payload
//         },
//         setActiveTab: (state, action) => {
//             state.activeTab = action.payload
//         },
//         setResults: (state, action) => {
//             state.results = action.payload
//             state.loading = false
//         },
//         setLoading: (state) => {
//             state.loading = true
//             state.error = null
//         },
//         setError: (state, action) => {
//             state.error = action.payload
//             state.loading = false
//         },
//         clearResults: (state) => {
//             state.results = []
//         },
//     }
// })

// export const { setQuery, setActiveTab, setResults, setLoading, setError, clearResults } = searchSlice.actions
// export default searchSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    loadingMore: false,
    error: null,
    page: 1,
    totalPages: 0,
};

export const searchSlice = createSlice({
    name: "search",
    initialState,

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
            state.results = [];
            state.page = 1;
            state.totalPages = 0;
            state.loading = false;
            state.loadingMore = false;
            state.error = null;
        },

        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },

        setResults: (state, action) => {
            state.results = action.payload.results;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.loading = false;
            state.loadingMore = false;
            state.error = null;
        },

        appendResults: (state, action) => {
            state.results.push(...action.payload.results);
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.loadingMore = false;
            state.error = null;
        },

        setLoading: (state) => {
            state.loading = true;
            state.loadingMore = false;
            state.error = null;
        },

        setLoadingMore: (state) => {
            state.loadingMore = true;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.loadingMore = false;
        },

        clearResults: (state) => {
            state.results = [];
            state.page = 1;
            state.totalPages = 0;
            state.loading = false;
            state.loadingMore = false;
            state.error = null;
        },
    },
});

export const {
    setQuery,
    setActiveTab,
    setResults,
    appendResults,
    setLoading,
    setLoadingMore,
    setError,
    clearResults,
} = searchSlice.actions;

export default searchSlice.reducer;
