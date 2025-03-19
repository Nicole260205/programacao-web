const calc = require("./util/calculadora");
const express = require("express");

const app = express();

app.get("/somar/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.send(`A soma é ${calc.somar(a,b)}`)
});

app.get("/subtrair/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.send(`A subtração é ${calc.subtrair(a, b)}`);
});

app.get("/multiplicar/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  res.send(`A multiplicação é ${calc.multiplicar(a, b)}`);
});

app.get("/dividir/:a/:b", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  res.send(`A divisão é ${calc.dividir(a, b)}`);
});


const PORT = 8000;
app.listen(PORT, () => {
  console.log("app rodando na porta " + PORT);
});