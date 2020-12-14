<template>
    <v-card>
      <v-card-title>Cart</v-card-title>
      <router-link :to="{ name: 'Orders' }"><v-icon class="cart_icon">shopping_cart</v-icon></router-link>
      <v-card-text>You have {{this.$store.getters.getCart.length}} items in cart</v-card-text>
      <v-card-subtitle><strong>You are currently logged in as: {{credentials.username}}</strong></v-card-subtitle>
      <v-card-actions>
        <v-btn text @click="postItems ">Confirm</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "Cart",
      data() {
            return {
                credentials: null,
                cart: null,
            }
        },
        methods: {
            getCart() {
                axios.get(`https://gogee90.pythonanywhere.com/api/carts/${this.credentials.pk}`)
                  .then(response => {
                      response.data.forEach(item => {
                        this.cart = item.product_id
                        localStorage['credentials'] = this.credentials.pk
                      })
                  })
            },
            getCredentials() {
              axios({
                method: 'get',
                headers: {
                  'Authorization': `Token ${localStorage['token']}`
                },
                url: '/dj-rest-auth/user/'
              })
                .then(response => {
                  this.credentials = response.data
                  this.getCart()
                })
            },
            postItems() {
                axios({
                  method: 'post',
                  headers: {
                    'Authorization': `Token ${localStorage['token']}`
                  },
                  data: {
                    user: localStorage['credentials'],
                    product_id: this.$store.getters.getCart
                  },
                  url: '/carts/create'
                })
                  .then((response) => {
                      console.log(response)
                  })
            }
        },
        mounted() {
            this.getCredentials()
        },
    }
</script>

<style scoped>
.cart_icon {
  position: relative;
  left: 11em;
  bottom: 2em;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}
</style>
