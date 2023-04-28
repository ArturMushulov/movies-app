<template>
    <b-container>
        <h3 class="list-title">IMDB Top 250</h3>
        <b-row>
            <template v-if="isExist">
                <b-col cols="3" v-for="(movie, key) in list" :key="key">
                    <MovieItem :movie="movie"/>
                </b-col>
            </template>
            <template v-else>
                <div>Empty List</div>
            </template>
        </b-row>
    </b-container>
</template>

<script>
import MovieItem from "./MovieItem.vue"

export default {
    name: "MoviesList",
    props: {
        list: {
            type: Object,
            default: () => ({})
        }
    },
    components: {
        MovieItem
    },
    computed: {
        isExist() {
            return Boolean(Object.keys(this.list).length);
        }
    }
};
</script>

<style scoped>

</style>