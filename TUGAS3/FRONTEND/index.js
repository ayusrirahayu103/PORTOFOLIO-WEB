const { createApp, ref } = Vue;

const app = createApp({
    setup(){

        const linkMakanan = "http://localhost:12000/makanan";
        const linkMinuman = "http://localhost:12000/minuman";
        const makanan = ref([]);
        const minuman = ref([]);
        const div = document.getElementById("tampilkan");

        const munculMakanan = async () => {
            const respond = await axios.get(linkMakanan);

            makanan.value = respond.data;
            minuman.value = [];
        };

        const munculMinuman = async () => {
            const respond = await axios.get(linkMinuman);

            minuman.value = respond.data;
            makanan.value = [];
        };

        return {
            munculMakanan,
            munculMinuman,
            makanan,
            minuman,
            div,
        };
    },
});

app.mount("#app");