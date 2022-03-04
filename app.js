const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('онлайн магазин!')
})

app.post('/test', async function (req, res) {

    try {
        console.log(req)
        console.log(req.body)
        console.log(1, req.body.voice)
        console.log(2, req.body.phone)





        res.status(200).json({ response: "test_OK" });


    } catch (e) {
        res.status(400).json({ response: "test_BAD" });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port))