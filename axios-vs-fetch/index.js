const axios = require("axios");

// async function main() {
//     const response = await fetch("https://dummyjson.com/todos/random")
//     const json = await response.json();
//     console.log(json);
// }

async function main() {
    const response = await axios.get("https://dummyjson.com/todos/random")
    console.log(response.data);
}


main();