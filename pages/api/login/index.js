const conn=require('../../../config/con');
let {generatePassHash} =require('../../../utils/index')
const Login=(req, res) => {
    if (req.method === "POST") { 
        let {userName,password}=req.body
        conn.query('select * from mst_user',(err,resp)=>{
            if(err){
                res.send({status:false,message:"error"})
            }else{
                res.send({status:true,message:"success",data:resp})
            }
        })
         
    }
    else{
        res.status(502).send("Nice Try.")
    }
   
}
   
export default Login
