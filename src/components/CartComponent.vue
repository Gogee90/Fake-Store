<template>
  <v-row>
    <div class="orders" v-for="value in carts" :key="value.id">
      <v-card v-for="item in value.product_id" :key="item.id"
          class="mx-auto"
          max-width="300"
        >
        <v-img
          :src="item.image"
          class="white--text align-end"
          height="200px"
        ></v-img>
        <v-card-title >{{item.title}}</v-card-title>
        <v-card-subtitle class="pb-0">{{ item.price }} USD</v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange"
          text>Remove from cart</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-row>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "CartComponent",
        props: ['id'],
        data() {
          return {
            carts: null,
            pk: localStorage['credentials']
          }
        },
        methods: {
          getUserCarts() {
            axios.get(`carts/${this.pk}`).then(response => {
              this.carts = response.data
              console.log(response.data)
            })
          }

        },
        mounted() {
          this.getUserCarts()
        }
    }
</script>

<style scoped>

</style>
