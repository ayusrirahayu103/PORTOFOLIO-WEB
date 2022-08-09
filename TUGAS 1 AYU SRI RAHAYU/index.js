const app = document.getElementById("app");
const output = document.getElementById("Gambar");
const btnImg = document.getElementById("button");
const input = document.getElementById("input");

const RubahNama = () => {
    const nama = input.value.toLowerCase();
    if (nama == "harimau") {
        output.src = "./img/harimau.jpg";
    } else if (nama == "kucing") {
        output.src = "./img/kucing.jpg";
    } else if (nama == "burung") {
        output.src = "./img/burung.jpeg";
    } else {
        output.src = "./img/manusia.jpg";
    }
};

btnImg.addEventListener("click", RubahNama);