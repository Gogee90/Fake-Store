export const requestData = {
    data() {
        return {
            categories: [],
        }
    },
    mounted() {
        const axios = require('axios');
        axios.get('https://fakestoreapi.com/products?limit=10/')
            .then(response => {
                let products = response.data
                products.forEach(items => {
                    this.categories.push(items)
                })
            }).catch(err => {
                console.log(err)
        })
    },
}
