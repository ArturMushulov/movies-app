<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="pagination d-flex justify-content-center">
        <b-pagination
            v-model="currentPageModel"
            :per-page="perPage"
            :total-rows="total"
            :limit="3"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
        />
    </div>
</template>

<script>
export default {
    name: "MoviesPagination",
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 1
        }
    },
    computed: {
        currentPageModel: {
            get() {
                return this.currentPage
            },
            set(value) {
                this.$emit("changePaged", value)
            }
        }
    }
}
</script>

<style scoped>
    .pagination {
        margin: 30px 0;
    }
    .pagination >>> .pagination .page-item .page-link {
        background-color: transparent;
        font-size: 16px;
        color: #fff;
        box-shadow: none;
    }
    .pagination >>> .pagination .page-item.active .page-link {
        border-color: #fff;
        background-color: #fff;
        color: #000;
    }
</style>