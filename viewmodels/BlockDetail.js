var app = new Vue({
    el: '#app',
    data: {
        blockDetail: ''
    },
    mounted() {
        console.log('view mounted');
        /* js get url param */
        var url = new URL(location.href);
        var blockhash = url.searchParams.get("blockhash");
        this.getBlock(blockhash);
    },
    methods: {
        getBlock(blockhash) {
            axios.get('/block/getBlockDetailByHash', {
                params: {
                    blockhash: blockhash
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.blockDetail = response.data;

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
})