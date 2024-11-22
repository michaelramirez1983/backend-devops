import express from 'express';
import { configuration } from '../config.js';
import { esPalindromo } from '../app/palabras.js';
import { esPrimo } from '../app/numeros.js';
import { operar } from '../app/calculadora.js';

let mainRouter = express.Router();

mainRouter.get("/", (_req, res) => {
    return res.send(`Hola mundo al usuario ${configuration.username}`);
});

mainRouter.get("/api-key", (_req, res) => {
    return res.send(`la apikey de mi aplicacion es: ${configuration.apikey}`);
});

mainRouter.get("/operar_suma", (req, res) => {
    const { operacion, num1, num2 } = req.query as { operacion: string, num1: string, num2: string };
    let resultado = operar(operacion, +num1, +num2);
    return res.send(`El resultado de la operacion suma es: ${resultado}`);
});

mainRouter.get("/operar_resta", (req, res) => {
    const { operacion, num1, num2 } = req.query as { operacion: string, num1: string, num2: string };
    let resultado = operar(operacion, -num1, -num2);
    return res.send(`El resultado de la operacion resta es: ${resultado}`);
});

mainRouter.get("/operar_multiplica", (req, res) => {
    const { operacion, num1, num2 } = req.query as { operacion: string, num1: string, num2: string };
    let resultado = operar(operacion, *num1, *num2);
    return res.send(`El resultado de la operacion multiplica es: ${resultado}`);
});

mainRouter.get("/operar_resta", (req, res) => {
    const { operacion, num1, num2 } = req.query as { operacion: string, num1: string, num2: string };
    let resultado = operar(operacion, -num1, -num2);
    return res.send(`El resultado de la operacion resta es: ${resultado}`);
});

mainRouter.get("/palindromo", (req, res) => {
    const frase = req.query.frase as string;
    return res.send(`Hola, La frase ingresada ${esPalindromo(frase) ? "es" : "no es"} palindromo`);
});

mainRouter.get("/primo", (req, res) => {
    const numero = req.query.numero as string;
    return res.send(`Hola, el numero ingresado ${esPrimo(+numero) ? "es" : "no es"} un numero primo`);
});

export default mainRouter;