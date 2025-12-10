const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')

let usuarios=[
  {usuario:'admin',clave:bcrypt.hashSync('123456',10),rol:'admin'}
]

router.post('/login',(req,res)=>{
  const {usuario,clave}=req.body
  const u=usuarios.find(x=>x.usuario===usuario)
  if(!u)return res.json({ok:false})
  const ok=bcrypt.compareSync(clave,u.clave)
  if(!ok)return res.json({ok:false})
  return res.json({ok:true})
})

module.exports=router
