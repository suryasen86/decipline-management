// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.body)
  
  let name=req.body.name
  if(name=="suryasen"){
    res.status(200).json({ status:true,name: 'John Doe' })
  }else{
    res.status(200).json({ status:false,name: 'John Doe' })
  }
 
}
