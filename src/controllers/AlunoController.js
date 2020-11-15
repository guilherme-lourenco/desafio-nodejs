const Aluno = require('../models/Aluno');
const constantMessages = require('../utils/constantMessages');
const { response } = require('express');

module.exports = {
    async listar(req,res){
        try{
            const objAlunos = await Aluno.find();
            return res.json({
                success:true, 
                message: constantMessages.DEFAULT_SUCCESS, 
                objAlunos
            });
        } catch(err){
            console.log(err);
            res.status(500).json({
                success:false, 
                message: constantMessages.DEFAULT_ERROR
            });
        }
    },

    async obterPorId(req,res){
        const {id} = req.params;
        try{
            let objAluno = await Aluno.findOne({_id:id});
            res.json({
                success:true, 
                message: constantMessages.DEFAULT_SUCCESS,
                objAluno
            });
        } catch(err){
            console.log(err);
            res.status(500).json({
                success:false, 
                message: constantMessages.DEFAULT_ERROR
            });
        }
    },
        
    async inserir(req,res){    
        try{
            const {nome, turma} = req.body;
            const objAluno = await Aluno.create({
                nome,
                turma
            });
            
         res.json({success:true, objAluno});

        } catch(err){
            console.log(err);
            res.status(500).json({
                success:false, 
                message: constantMessages.DEFAULT_ERROR
            });
        }
    },

    async atualizar(req,res){
        try{
            const {id} = req.params;
            const {nome, turma} = req.body;
            let objAluno = await Aluno.findOne({_id:id});
            if(objAluno){
                await Aluno.updateOne( 
                    { _id: id },
                    { $set: 
                        { 
                            nome: nome, 
                            turma: turma
                        } 
                    }
                );
            }
       
            res.json({
                success:true,
                message: constantMessages.DEFAULT_SUCCESS
            });
        } catch(err){
            console.log(err);
            res.status(500).json({
                success:false, 
                message: constantMessages.DEFAULT_ERROR
            });
        }
    },

    async excluir(req,res){
        try{
            const {id} = req.params;
            let objAluno = await Aluno.findOne({_id:id});
            if(objAluno){
                await Aluno.deleteOne({_id:id});
            }
            res.json({
                success:true,
                message: constantMessages.DEFAULT_DELETION_SUCCESS
            });
        } catch(err){
            console.log(err);
            res.status(500).json({
                success:false, 
                message: constantMessages.DEFAULT_ERROR
            });
        }
    }
}