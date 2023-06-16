const jwt = require("jsonwebtoken");
// const { findById, findOne } = require("../schemass/prodoct");
const secretkey = "secretkey";
// const productschema= require("../schemass/prodoct")


const bcktoken = async function verifytoken(req, resp, next) {

  const token2 = req.headers.authorization; 

  if (!token2) {  
    return resp.status(404) 
      .send({ success: false, message: " Please send token" });
  }


  let token = null;  

 console.log(token, "tokennnn11111111111111111"); 


  if (token2) {
    token = req.headers.authorization.split(" ")[1];     
  }

  console.log(token, "tokennnn"); 


  // let verified = null;    
  // console.log(verified,"verifieed")   

  try {
    const data = jwt.verify(token, secretkey);
    console.log( "dataaa", data);        /* id milage yha pr*/

  
    // const user = await  productschema.findOne({_id:data.id})  
    
    // console.log(user,"userrrr")    /*kiski id hae uski detail milage yha pe*/

    // req.currentUser = user ;  

    next();  
           

  } catch {
    return resp.status(400).send({ success: false, message: "Invalid Token" });
  }
 
};
module.exports = bcktoken;