const token = require("../util/token");
const usuarioModel = require('../models/usuarioModel');

exports.entrar=async(nick)=>{
    let resp = await usuarioModel.registrarUsuario(nick);
    if(resp.insertedId){
        return {"IdUser":resp.inserteId,
                "token": await token.setToken(JSON.stringify(resp.insertId).replace(/"/g, ``),nick),
                "nick":nick}
            }
        }

    const jwt = require(`jsonwebtoken`);

    const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
        
    function verifyJWT(req, res, next){
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}
    })
    const setToken = async (id, key) => {
        console.log(id);
        if (id) {
            return jwt.sign({id }, key, { expiresIn: 28800 });
        }
        return false;
    };

    module.exports = {
        checktoken,
        setToken,
    };