const { createApp, ref, onMounted } = Vue;

const app = createApp({
    setup(){

        const link = "https://randomuser.me/api/";
        const gambar = ref("");
        const namaAwal = ref("");
        const namaAkhir = ref("");

        const randomName = async () => {
            const user = await axios.get(link);
            namaAwal.value = user.data.results[0].name.first;
            namaAkhir.value = user.data.results[0].name.last;
            gambar.value = user.data.results[0].picture.large;
        };

        return {
            randomName,
            gambar,
            namaAwal,
            namaAkhir,
        };
    },
});

app.mount("#app");