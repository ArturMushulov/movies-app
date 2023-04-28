import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb_250";
import mutations from "@/store/mutations";

function serializeResponse(movies) {
    return movies.reduce((acc, movie) => {
        acc[movie.imdbID] = movie;
        return acc;
    }, {});
}

const {
    MOVIES
} = mutations;

const movieStore = {
    namespaced: true,
    state: {
        top250IDs: IDs,
        moviesForPage: 12,
        currentPage: 1,
        movies: {}
    },
    getters: {
        moviesList: ({
            movies
        }) => movies,
        sliceIds: ({
            top250IDs
        }) => (from, to) => top250IDs.slice(from, to),
        currentPage: ({
            currentPage
        }) => currentPage,
        moviesForPage: ({
            moviesForPage
        }) => moviesForPage
    },
    mutations: {
        [MOVIES](state, value) {
            state.movies = value;
        }
    },
    actions: {
        initMoviesStore: {
            handler({
                dispatch
            }) {
                dispatch("fetchMovies");
            },
            root: true
        },
        async fetchMovies({
            getters,
            commit
        }) {
            try {
                const {
                    currentPage,
                    moviesForPage,
                    sliceIds
                } = getters;
                const from = (currentPage * moviesForPage) - moviesForPage;
                const to = moviesForPage * currentPage;
                const moviesToFetch = sliceIds(from, to);

                const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`));
                const response = await Promise.all(requests);
                const movies = serializeResponse(response);
                commit(MOVIES, movies);
            } catch (err) {
                console.log(err);
            }
        }
    }
};

export default movieStore;