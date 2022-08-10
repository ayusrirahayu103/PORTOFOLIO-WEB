import express from "express";

const app = express();
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
    res.send({nama : "Ayu Sri Rahayu"});
});

app.get("/minuman", (req, res) => {
    res.send([
        {
            id : 1 ,
            nama : "Teh sisri",
            rasa : "Manis nya kamu"
        },
        {
            id: 2 ,
            nama : "Jus",
            rasa : "sesegar jendes",
        },
    ]);
});

app.get("/makanan", (req, res) => {
    res.send([
        {
            id : 1 ,
            nama : "Bakso",
            rasa : "Yang tiada tara",

        },
        {
            id : 2 ,
            nama : "Cilung",
            rasa : "Cinta",
        },
    ]);
});

app.post("/create", (req, res) => {
    res.send({
        nama : req.body,
    });
});

app.listen(port, () => {
    console.log(`Aplikasi nya jalan di port ${port}`);
});