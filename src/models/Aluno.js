const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome:String,
    turma: {type: mongoose.Schema.Types.ObjectId, ref: 'Turma'}
});

module.exports = mongoose.model('Aluno',AlunoSchema);