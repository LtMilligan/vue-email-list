const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMail: null
        }
    },
    methods: {
        generateRandomMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.randomMail = resp.data.response
                });
            }
        }
    },
})