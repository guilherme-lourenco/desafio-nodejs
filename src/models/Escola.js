const mongoose = require('mongoose');

const EscolaSchema = new mongoose.Schema({
    nome:String,
    cnpj:String
});

module.exports = mongoose.model('Escola',EscolaSchema);