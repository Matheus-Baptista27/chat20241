let findAll = async (collection)=>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
  }
  
let findOne = async (collection, _id)=>{
    const db = await connect();
    let obj= await db.collection(collection).find({'_id':new ObjectId(_id)}).toArray();
    if(obj)
      return obj[0];
    return false;
  }
  
let updateOne= async (collection, object, param)=>{
    const db = await connect();
    let result= await db.collection(collection).updateOne(param, { $set: object} );
    return result;
  }
  
  module.exports = {findAll, findOne, updateOne};