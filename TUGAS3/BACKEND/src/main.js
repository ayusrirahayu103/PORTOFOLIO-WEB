import express from 'express'

const app = express();
app.use(express.json());
const port = 12000;

app.get("/makanan", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Seblak",
            rasa: "dasmis,gurda",
        },
        {
            id: 2,
            nama: "Mie Ayam",
            rasa: "Original",
        },
        {
            id: 3,
            nama: "Mie Goreng",
            rasa: "dasmis, gurda",
        },
        {
            id: 4,
            nama: "Bakso",
            rasa: "Original, lava",
        },
        {
            id: 5,
            nama: "Batagor & siomay & dimsum",
            rasa: "original",
        },
    ]);
});

app.get("/minuman", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Es Teh",
        },
        {
            id: 2,
            nama: "Thai Tea",
        },
        {
            id: 3,
            nama: "Jus",
        },
        {
            id: 4,
            nama: "Pop ice",
        },
        {
            id: 5,
            nama: "Marimas",
        },
    ]);
});

app.post("/create", (req, res) => {
    res.send({ nama : req.body });
});

app.listen(port, () => {
    console.log(`Aplikasi Berjalan Di Port : ${port}`);
});