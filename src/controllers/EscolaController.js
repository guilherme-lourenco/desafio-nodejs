const Escola = require('../models/Escola');
const constantMessages = require('../utils/constantMessages');

module.exports = {
    async listar(req,res){
        try{
            const objEscolas = await Escola.find();
            return res.json({
                success:true, 
                message: constantMessages.DEFAULT_SUCCESS, 
                objEscolas
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
            let objEscola = await Escola.findOne({_id:id});
            res.json({
                success:true, 
                message: constantMessages.DEFAULT_SUCCESS,
                objEscola
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
            const {nome, cnpj} = req.body;
            const objEscola = await Escola.create({
                nome,
                cnpj
            });
            
         res.json({success:true, objEscola});

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
            const {nome, cnpj} = req.body;
            let objEscola = await Escola.findOne({_id:id});
            if(objEscola){
                if(nome) objEscola.nome = nome;
                if(cnpj) objEscola.cnpj = cnpj;
        
                await Escola.updateOne( 
                    { _id: id },
                    { $set: 
                        { 
                            nome: nome, 
                            cnpj: cnpj 
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
            let objEscola = await Escola.findOne({_id:id});
            if(objEscola){
                await Escola.deleteOne({_id:id});
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