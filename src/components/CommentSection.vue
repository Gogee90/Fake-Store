<template>
  <v-textarea
    outlined
    name="input-7-4"
    label="Leave a feedback"
    value="feedback"
  >
  </v-textarea>
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
                axios.get(`/comments/${this.$route.params.product_id}`)
                  .then(response => {
                      console.log(response.data)
                  })
            }
        },
        created() {
            this.getComments()
        }
    }
</script>

<style scoped>

</style>
