<template>
  <div class="feedback">
    <h2>Feedback</h2>
    <v-divider></v-divider>
    <ul v-for="comment in comments" :key="comment.id">
      <li><small>{{comment.created_date}}</small></li>
      <li><strong>{{comment.author}}</strong></li>
      <li>{{comment.text}}</li>
      <v-divider></v-divider>
    </ul>
    <v-spacer></v-spacer>
    <v-textarea
      outlined
      name="input-7-4"
      label="Leave a feedback"
      value="feedback"
      v-model="newComment"
      @keypress.enter="sendComments"
    >
    </v-textarea>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "CommentSection",
        data() {
            return {
                comments: null,
                newComment: ''
            }
        },
        methods: {
            sendComments() {
              axios({
                method: 'post',
                url: `/comments/${this.$route.params.product_id}`,
                headers: {
                    'Authorization': `Token ${localStorage['token']}`,
                  },
                data: {
                  text: this.newComment,
                  product: this.$route.params.product_id
                }
              })
              .then(response => {
                this.comments.push(response.data)
              }).catch(err => {
                console.log(err)
              })
            },
            getComments() {
                axios.get(`/comments/${this.$route.params.product_id}`)
                  .then(response => {
                      this.comments = response.data
                      console.log(this.comments)
                  })
            }
        },
        created() {
            this.getComments()
        }
    }
</script>

<style scoped>
.feedback ul {
  list-style: none;
}

.feedback h2 {
  text-align: center;
}
</style>
