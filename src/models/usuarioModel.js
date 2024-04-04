const db = require("./db");
let registrarUsuario = async(nick) =>{   
let user =  await db.insertOne("usuario",{"nick": nick});
  return user;
}

let buscarUsuario = async (idUser)=>{
    let user = await db.findOne("usuario",idUser);
    return user;
}

let alterarUsuario = async (user)=>{
  return await db.updateOne("usuarios", user,{_id:user._id});
}

async function sairDaSala(idUser) 
  try {
      let user = await db.findOne("usuarios", idUser);
      
      if (!user) {
          console.error("Usuário não encontrado.");
          return false;
      
      user.salaAtual = null;
      await db.updateOne("usuarios", user, { _id: user._id });

      return true;
  } catch (error) {
      console.error("Erro ao sair da sala:", error);
      return false;
  }
}

module.exports = {registrarUsuario, buscarUsuario, alterarUsuario}