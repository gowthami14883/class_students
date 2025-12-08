/*const express = require("express");
const app = express();
app.get("/reverse", (req, res) => {
    const name = req.query.name || "Gowthami Nimanagoti";

    const reversed = name.split(" ").map(word => word.split("")).reverse().join("").toLowercase().join(" ");
    res.send({
        original: name,
        reversed: reversed
    }); 
});
app.listen(5000, () => console.log('Server running on http://localhost:5000'));*/




const express = require("express");
const app = express();

app.get("/reverse", (req, res) => {
    const name = req.query.name || "Gowthami Nimanagoti";

    // Reverse EACH WORD separately
    const reversed = name
        .split(" ")                      // ["Gowthami", "Nimanagoti"]
        .map(word => word.split("").reverse().join("")) // ["imah twoG", ...]
        .join(" ");                      // join back with space

    res.send({
        original: name,
        reversed: reversed
    });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

