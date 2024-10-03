const express = require("express")
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb+srv://kapoorsamarth7:wBMJixjgzyOIIhZY@cluster0.ck9mw.mongodb.net/usersappnew")

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({ 
    name: name, 
    email: email,
    password: password
});

user.save();
res.json({
    "msg": "user created successfully"
})

})