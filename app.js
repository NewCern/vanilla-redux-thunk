const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.get("/", (req, res) => {
    res.json("Vanilla Redux Thunk Homepage")
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})