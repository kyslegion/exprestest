// Import packages
const express = require("express");
const home = require("./routes/home");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/'));

app.get('/',(req,res)=>{
    console.log(req.route.path);
    res.sendFile(path.join(__dirname, './connexion.html'));
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
