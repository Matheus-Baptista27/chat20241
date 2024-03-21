require("dotenv").config();
const app = require("../src/api");

app.app.use((req, res, next)=>{
    next();
});

let port = process.env.API_PORT || 5001;
app.app.listen(port);

console.log(`listening on ${port}`);