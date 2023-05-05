<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header class="header">
        <b-navbar type="dark" variant="dark" class="navbar">
            <b-container>
                <b-navbar-brand href="#" @click="fetchAllMovies">MovieDB </b-navbar-brand>
                <b-nav-form>
                    <b-form-input class="mr-sm-2 search-input" debounce="500" placeholder="Search" v-model="searchValue"></b-form-input>
                </b-nav-form>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    data: () => ({
        searchValue: ""
    }),
    watch: {
        searchValue: "onSearchValueChange"
    },
    methods: {
        ...mapActions("movieStore", ["searchMovie", "fetchMovies", "toggleSearchState"]),
        onSearchValueChange(value) {
            if (value) {
                this.searchMovie(value);
                console.log(value);
                this.toggleSearchState(true);
            } else {
                this.fetchMovies();
                this.toggleSearchState(false);
            }
        },
        fetchAllMovies() {
            this.fetchMovies();
        }
    }
}
</script>
    
<style scoped>
    .header {
        margin-bottom: 30px;
    }
    .navbar {
        background-color: rgba(0, 0, 0, .7) !important;
    }
    .search-input {
        color: #fff;
        background: rgba(255, 255, 255, .1);
        border-color: rgba(0, 0, 0, .6);
    }
    .search-input:focus {
        box-shadow: none;
        color: #fff;
        background: rgba(255, 255, 255, .2);
        border-color: rgba(0, 0, 0, .6);
    }
</style>