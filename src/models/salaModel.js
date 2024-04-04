const db = require("./db");
async function listarSalas(){
    return await db.findAll("salas");
}


let buscarSala = async (idsala)=>{
    return db.findOne("salas",idsala);
}

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

async function sairSala(idsala) {
  try {
    
    let sala = await db.findOne("salas", idsala);

    if (!sala) {
 
      return false;
    }
    sala.participantes = sala.participantes.filter((participante) => participante !== iduser);

 
    await db.updateOne("salas", sala, { _id: sala._id });

 
    return true;
  } catch (error) {
   
    console.error("Erro ao sair da sala:", error);
    return false;
  }
}


  module.exports = { listarSalas,buscarMensagens, buscarSala, atualizarMensagens, sairSala};