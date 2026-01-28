const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    console.log(req.headers);
    res.send("Hola desde Corporativo gracias a Angel se fue");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port}`);
});
