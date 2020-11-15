const Turma = require('../models/Turma');
const { response } = require('express');
const constantMessages = require('../utils/constantMessages');

module.exports = {
    async listar(req,res){
        try{
            const objTurmas = await Turma.find();
            return res.json({
                success:true, 
                message: constantMessages.DEFAULT_SUCCESS, 
                objTurmas
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
            let objTurma = await Turma.findOne({_id:id});
            res.json({
                success:true, 
                message: constantMessages.DEFAULT_SUCCESS,
                objTurma
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
            const {nome, escola} = req.body;
            const objTurma = await Turma.create({
                nome,
                escola
            });
            
         res.json({success:true, objTurma});

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
            const {nome, escola} = req.body;
            let objTurma = await Turma.findOne({_id:id});
            if(objTurma){
                await Turma.updateOne( 
                { _id: id },
                { $set: 
                    { 
                        nome: nome, 
                        escola: escola
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
            let objTurma = await Turma.findOne({_id:id});
            if(objTurma){
                await Turma.deleteOne({_id:id});
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