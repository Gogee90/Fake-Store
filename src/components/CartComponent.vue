<template>
  <div class="orders">
    <h1>Your orders</h1>
    <v-row v-for="value in carts" :key="value.id" class="rows">
      <ul style="list-style: none">
        <li style="background-color: lightgray">#{{value.id}}</li>
        <li><small>{{value.date}}</small></li>
        <li v-for="item in value.product_id" :key="item.id" class="card pa-1">
          <v-card
              class="mx-auto"
              max-width="300"
              :to="{name: 'Product', params:{category: item.category, product_id: item.id}}"
            >
            <v-img
              :src="item.image"
              class="white--text align-end"
              height="200px"
            ></v-img>
            <v-card-title >{{item.title}}</v-card-title>
            <v-card-subtitle class="pb-0">{{ item.price }} USD</v-card-subtitle>
          </v-card>
          <v-spacer></v-spacer>
        </li>
      </ul>

    </v-row>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
  </div>
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
.orders {
  margin-top: 40px;
  margin-bottom: 40px;
}

.rows {
  background: #fff;
  box-shadow: 0 3px 8px #aaa;
  border-radius: 5px;
  padding: 20px;
}

.card {
  display: inline-block;
}
</style>
