const mongoose = require('mongoose');
const escolaSchema = require('./Escola');

const TurmaSchema = new mongoose.Schema({
    nome:String,
    escola: {type: mongoose.Schema.Types.ObjectId, ref: 'Escola'}
});

module.exports = mongoose.model('Turma',TurmaSchema);