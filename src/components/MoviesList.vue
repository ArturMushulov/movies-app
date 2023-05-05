<template>
    <b-container>
        <h3 class="list-title">{{ listTitle }}</h3>
        <b-row>
            <template v-if="isExist">
                <b-col cols="3" v-for="(movie, key) in list" :key="key">
                    <MovieItem :movie="movie" 
                    @mouseover.native="onMouseover(movie.Poster)"
                    @removeItem="onRemoveItem"
                    @showModal = "onShowMovieInfo"
                    />
                </b-col>
            </template>
            <template v-else>
                <div>Empty List</div>
            </template>
        </b-row>
        <b-modal body-class="movie-modal-body" :id="moviesModalID" size="xl" hide-footer hide-header>
            <MovieInfoModal :movie="selectedMovie" @closeModal="onCloseModal"/>
        </b-modal>
    </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue"
import MovieInfoModal from "./MovieInfoModal.vue";

export default {
    name: "MoviesList",
    props: {
        list: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        moviesModalID: "movie-info",
        selectedMovieID: ""
    }),
    components: {
        MovieItem,
        MovieInfoModal
    },
    computed: {
        ...mapGetters("movieStore", ["isSearch"]),
        isExist() {
            return Boolean(Object.keys(this.list).length);
        },
        listTitle() {
            return this.isSearch ? "Search result" : "IMDB Top 250"
        },
        selectedMovie() {
            return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
        }
    },  
    methods: {
        ...mapActions("movieStore", ["removeMovie"]),
        ...mapActions(["showNotify"]),
        onMouseover(poster) {
            this.$emit("changePoster", poster);
        },
        async onRemoveItem({ id, title }) {
            const isConfirm = await this.$bvModal.msgBoxConfirm(`Are you sure remove ${title}?`);
 
            if (isConfirm) {
                this.removeMovie(id);
                this.showNotify({
                    msg: "Movie deleted successful",
                    variant: "success",
                    title: "Complete"
                })
            }
        },
        onShowMovieInfo(id) {
            this.selectedMovieID = id;
            this.$bvModal.show(this.moviesModalID);
        },
        onCloseModal() {
            this.selectedMovieID = null;
            this.$bvModal.hide(this.moviesModalID);
        }
    }
};
</script>

<style scoped>
    .list-title {
        color: #fff;
    }
</style>

<style>
    .movie-modal-body {
        padding: 0 !important;
    }
</style>