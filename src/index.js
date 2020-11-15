const express = require('express');
const constants = require('./utils/constants');
const mongoose = require('mongoose');

const routesEscola = require('./routes/escolas');
const routesAluno = require('./routes/alunos');
const routesTurma = require('./routes/turmas');


const app = express();

try{
    mongoose.connect(constants.CONNECTION_STRING,{
            useNewUrlParser:true,
            useUnifiedTopology:true
    });
    
    app.use(express.json());
    
    //Definição das Rotas
    app.use(routesEscola);
    app.use(routesTurma);
    app.use(routesAluno);

    app.use(express.json());

    app.listen(constants.PORT);

} catch (err){
    console.log('Tratado');
}