const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send("Hola desde Corporativo");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port}`);
});