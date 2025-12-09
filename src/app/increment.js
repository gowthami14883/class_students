const express = require("express");
const app = express();
app.use(express.json());
app.post("/count", (req, res) => {
let str = req.body.text.toLowerCase();
let count = {};
for(let i of str){
    if(/[a-z]/.test(i)) {
        if(count[i]){
        count [i]++;
    }
    else {
        count[i]=1;
    }
}
}
let asen = Object.keys(count).sort();
let result = {};
for(let key of asen){
    result[key]=count[key];
}
res.send(result);
});
app.listen(5000, () => console.log("Server running on http://localhost:5000"));





