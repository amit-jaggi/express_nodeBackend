const PORT = 8080;
const express = require('express');
const cors = require('cors');
const mainRouter = require("./routes");

const app = express();
app.use(cors());

app.use("/api/v1", mainRouter)

app.listen(PORT, () => {
    console.log(`Application started\nListening on http://localhost:${PORT}`);
});