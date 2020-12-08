export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    addToCart(id) {
        this.products.push(id)
        console.log(this.products)
        this.$store.dispatch('saveCart', this.products)
    }
  }
}
