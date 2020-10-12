export const requestData = {
    data() {
        return {
            categories: [],
        }
    },
    mounted() {
        const axios = require('axios');
        axios.get('https://gogee90.pythonanywhere.com/api/products')
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
