const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMail: []
        }
    },
    created() {
        this.generateRandomMail()
    },
    methods: {
        generateRandomMail() {
            this.randomMail = []
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.randomMail.push(resp.data.response)
                    console.log(resp.data.response)
                });
            }
        }
    },
}).mount('#app')