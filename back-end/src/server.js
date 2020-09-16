const app = require("./app");

const porta = 3000;

app.listen(porta, () =>{
    console.log(`Servidor rodadndo na porta ${porta}.`);
});