const { createApp, ref } = Vue;

const app = createApp({
    setup(){

        const linkFood = "http://localhost:5000/makanan";
        const linkDrink = "http://localhost:5000/minuman";
        const food = ref("");
        const drink = ref("");
        const div = document.getElementById("view");

        const warungFood = async () => {
           const respond = await axios.get(linkFood);

           food.value = respond.data;
           drink.value = [];
        };

        const warungDrink = async () => {
            const respond = await axios.get(linkDrink);
 
            drink.value = respond.data;
            food.value = [];
         };
 

        return {
            warungFood,
            warungDrink,
            food,
            drink,
            div,
        };
    },
});

app.mount("#app");