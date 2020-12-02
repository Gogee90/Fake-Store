<template>
    <v-card>
      <v-card-title>Cart</v-card-title>
      <v-icon class="cart_icon">shopping_cart</v-icon>
      <v-card-text>You have {{cart.length}} items in cart</v-card-text>
    </v-card>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Cart",
        data() {
            return {
                cart: null
            }
        },
        methods: {
            getCart() {
                axios.get('https://gogee90.pythonanywhere.com/api/carts/1')
                  .then(response => {
                      response.data.forEach(item => {
                        this.cart = item.product_id
                        console.log(this.cart)
                      })
                  })
            }
        },
        mounted() {
            this.getCart()
        }
    }
</script>

<style scoped>
.cart_icon {
  position: relative;
  left: 11em;
  bottom: 2em;
}
</style>
