const jwt = require("jsonwebtoken");

const value = {
    name: "samarth",
    accountNumber: 123123123
}


//jwt generate
// const token = jwt.sign(value, "secret");
// console.log(token);

//jwt verify
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtYXJ0aCIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzI3OTgxNjAxfQ.YOvTjM3Y1_njSgsSBwxXt2vGcS62WMLpMVEJ-_cWG9g", "secret");
console.log(verifiedValue);


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtYXJ0aCIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzI3OTgxNjAxfQ.YOvTjM3Y1_njSgsSBwxXt2vGcS62WMLpMVEJ-_cWG9g