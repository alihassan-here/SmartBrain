const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("this is working")
})
app.post("/signin", (req, res) => {
    res.send("signing")
})
app.post("/register", (req, res) => {
    res.send("registering")
})
app.post("/profile/:id", (req, res) => {
    res.send("profile id")
})
app.put("/image", (req, res) => {
    res.send("profile id")
})

app.listen(4000, () => {
    console.log(`server is listen at port 4000!`);
})