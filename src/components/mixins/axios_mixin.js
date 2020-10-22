import axios from "axios";

export const requestData = {
    data() {
        return {
            categories: [],
            categoryList: []
        }
    },
    methods: {
        getCategory() {
            axios.get('/category/')
              .then(response => {
                  this.categoryList = response.data
              })
        }
    },
    mounted() {
        axios.get('/products/')
            .then(response => {
                this.categories = response.data
            }).catch(err => {
                console.log(err)
        })
        this.getCategory()
    },
}
