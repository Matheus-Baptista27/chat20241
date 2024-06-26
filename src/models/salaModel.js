let buscarSala = async (idsala)=>{
   return db.findOne("salas",idsala);
}

const db = require("./db");
const { ObjectId } = require('mongodb');

let listarSalas = async ()=>{
  let salas= await db.findAll("salas");
  return salas;
};

let atualizarMensagens=async (sala)=>{
    return await db.updateOne("salas", sala,{_id:sala._id});
  }

let buscarMensagens = async (idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
      let msgs=[];
      sala.msgs.forEach((msg)=>{
        if(msg.timestamp >= timestamp){
          msgs.push(msg);
        }
      });
      return msgs;
    }
    return [];
}

let sairSala = async (idsala) => {
  let salas = await db.findAll("salas");
  return salas;
}

let removerUsuario = async (idUser) => {
    let result = await db.deleteOne("usuario", { _id: new ObjectId(idUser) });
    

    if (result.deletedCount === 1) {
      return true;
    } else {
      throw new Error("Erro ao remover o usuário.");
    }
};

  module.exports = {listarSalas,buscarMensagens, buscarSala, atualizarMensagens, sairSala, removerUsuario};