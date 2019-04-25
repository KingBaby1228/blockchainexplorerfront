var app = new Vue({
    el: '#app',
    data: {
        recentBlocks: []
    },
    computed: {
        showRecentBlocks(){
            var now = Date.now();
            this.recentBlocks.forEach(block => {
                block.showtime = parseInt((now - block.time)/1000/60);
                block.showSizeOnDisk = block.sizeOnDisk.toLocaleString('en');
            });
            return this.recentBlocks;
        }
    },
    /* computed:{
        showRecentBlocks(){
            var now = Date.now();
            this.recentBlocks.forEach(block => {
                block.showtime = now - block.time;
            });
            return this.recentBlocks;
        }
    } */
    /* 自动加载 */
    mounted() {
        console.log('view mounted');
        this.getBlockRecent();
    },
    methods: {
        getBlockRecent() {
            axios.get('http://localhost:8080/block/getRecentBlocks')
                .then(function (response) {
                    console.log(response);
                    app.recentBlocks = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

})