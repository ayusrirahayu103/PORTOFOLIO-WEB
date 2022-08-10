const { createApp, ref } = Vue;

const app = createApp({
    setup(){

        const linkFood = "http://localhost:5000/makanan";
        const linkDrink = "http://localhost:5000/minuman";
        const makanan = ref([]);
        const minuman = ref([]);
        const div = document.getElementById("view");

        const warungFood = async () => {
           const respond = await axios.get(linkFood);

           makanan.value = respond.data;
           minuman.value = [];
        };

        const warungDrink = async () => {
            const respond = await axios.get(linkDrink);
 
            minuman.value = respond.data;
            makanan.value = [];
        };
 

        return {
            warungFood,
            warungDrink,
            makanan,
            minuman,
            div,
        };
    },
});

app.mount("#app");