const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post("/cadastro", async(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(email == null || password == null){
        return res.status(400).json({error: "Preencha todos os campos."})
    }

    console.log(email);
    console.log(password);

    res.json({error: null, msg: "Teste feito com sucesso!"})
    
});

app.get("/", async(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`);
})