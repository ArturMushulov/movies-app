<template>
        <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script>
export default {
    name: "PosterBG",
    props: {
        poster: {
            type: String,
            default: ""
        }
    },
    data: () => ({
        defaultPosterBg: 
        "linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)"
    }),
    computed: {
        posterStyle() {
            return {
                'background-image': this.posterBg
            }
        },
        posterBg() {
            return this.poster ? `url(${this.poster})` : this.defaultPosterBg;
        }
    }
}

</script>

<style scoped>
    .poster-page-bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -2;
        background-size: cover;
        background-position: center;
        transition: all .2s ease;
    }
    .poster-page-bg::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.7;
        background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
    }
</style>