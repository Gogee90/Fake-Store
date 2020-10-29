<template>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "CommentSection",
        data() {
            return {
                comment: null,
                author: null,
                date: null
            }
        },
        methods: {
            getComments() {
                axios.get('')
            }
        }
    }
</script>

<style scoped>

</style>
