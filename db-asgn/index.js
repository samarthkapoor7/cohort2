const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kapoorsamarth7:wBMJixjgzyOIIhZY@cluster0.ck9mw.mongodb.net/")

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({ 
    name: 'Samarth Kapoor', 
    email: "asbf@example.com", 
    password: '123456'
});

user.save();
