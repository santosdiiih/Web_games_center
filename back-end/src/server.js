const app = require("./app");  

const PORT = process.env.PORT || 3333;  

app.listen(PORT, () => { 
  console.log("Servido rodando na porta " + PORT); 
}); 


// const app = require("./app.js");

// const porta = 3333;

// app.listen(porta, () =>{
//     console.log(`Servidor rodadndo na porta ${porta}.`);
// });