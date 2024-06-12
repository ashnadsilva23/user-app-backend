const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { usermodel } = require("./models/users")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ashna:ashna@cluster0.n9qo4.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add", (req, res) => {
    let input = req.body
    let user = usermodel(input)
    user.save()
    res.json({ "status": "success" })
})
app.post("/view", (req, res) => {
    usermodel.find().then(
        (data) => {
            res.json(data)

        }
    ).catch(
        (error) => {
            res.json(error)

        }
    ).finally()

})
app.listen(8086, () => {
    console.log("server started")
})