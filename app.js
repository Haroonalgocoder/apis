// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());

// const bodyparser = require("body-parser");
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));

// const User = require("./model/user");
// const url = require("./model/image");

// const multer = require("multer");
// const path = require("path");

// const nodemailer = require("nodemailer");



// const fileFilter  = (req,file , cb)=>{
//     if(file.mimetype == "image/jpeg" || file.mimetype == "imagetype/png"){
//         cb(null,true)
//     }else{
//         cb(null , false);
//     }
// }

// const upload = multer({dest:"uploads" , fileFilter:fileFilter});



// //////
// app.post("/Register" , async (req, res)=>{

//     try{
//         const{UserName,DateofBirth,Address,Email,Password,contact} =req.body;
//         let data = req.body;
//     if(!(UserName&&DateofBirth&&Address&&Email&&Password&&contact))
//     {
//         res.status(400).send("all data is required")
//     }
//     const emailexist = await User.findOne({Email})
//     if(emailexist) return res.status(400).send("email already exists"); 
    
//     const contactexist = await User.findOne({contact})
//     if(contactexist) return res.status(400).send("contact already exists");
    
//     const validPassword = await User.findOne({Password})
//     let strongPassword = RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
//     if(!strongPassword.test(Password)) return res.status(400).send("password must have uppercase,lowercase,special character,number");


//     else{
        
//         const user = await User.create({
//             UserName,
//             DateofBirth,
//             Email,
//             Password,
//             contact,
//             Address,
//         });
        
        
//         const salt  = bcrypt.genSalt(10);
//         user.Password = await bcrypt.hash(user.Password , 10); 
    

//         await user.save();
//         res.status(200).json(user)   

//     } 
//     }catch(error){
//     console.log(error , "cannot not save data")
// }

// })


// app.post("/upload" , upload.single("PDimage") ,async (req, res)=>{
//     try {
        
//              const up  =await url.create({
//              PDimage:req.file.path,
//              PDname:req.body.name
//          }) 
//         console.log(req.file)

//          await up.save();
//         res.status(200).json(up);
         

//     } catch (error) {
//         console.log("something worng")
//     }

// })

// app.get("/upload" , async(req ,res) => {
//  url.find()
      
// })


// app.get("/Login" , async (req,res)=>{
//     try{
//         let data = req.body ; 
//         const{Email , Password} = data;
//         if(!(Email&&Password))
//         {
//             res.status(400).send("need all requirements")
//         }
        
//         const user = await User.findOne({Email})
//         if(!user) return res.status(400).send("email not exist");
        
//         const match = await bcrypt.compare(Password , user.Password);
//         if(!match) return res.status(400).send("password not matched")
//         else{
//             res.status(200).send(user);
//         }



//     }catch(error){
//         console.log(error , "data cannot be save")
//     }
// })




// app.patch("/update/:id" , upload.single('myfile'), async (req,res)=>{
//     try {

// let _id = req.params.id
//  const update = await User.findByIdAndUpdate(_id , req.body)
//       if(!update){
//           res.status(400).send("not found")
//       }else{
//           res.status(200).send(update)
//       }
//       } catch (error) {
//         return res.status(400).send('something wrong')
//       }
//     });


// app.patch("/update/:Email" , async (req,res) =>{
//     try {
        
// let Email = req.params.Email;
// const update = await User.findOneAndUpdate(Email , req.body)
// if(!update){
//     res.status(400).send("not found")
// }else{
//     res.status(200).send(update)
// }
//     } catch (error) {
//         res.status(400).send("something bad")
//     }
// } )



// app.delete("/Delete/:Email" , async(req,res) =>{
//     try{
        
// let  Email = req.params.Email;
// const deleted =  await User.findOneAndDelete(Email , req.body)
// if(!deleted){
//     res.status(400).send("not found")
// }else{
//     res.status(200).send(deleted)
// }

//     }catch(error){
//         console.log(error)
//     }

// })

// const transporter = nodemailer.createTransport({

//     host: "smtp.gmail.com",
//     service : "gmail",
    
//     auth:{
// user:"haroonzulkifl@gmail.com",
// pass:"Shahzada444@"
//     }

// })

// app.post("/mail" , async (req, res)=>{

// const {from , to , subject , test} =req.body;
//     const mailsend ={
//         from:"haroonzulkifl@gmail.com",
//     to:"haroonzulkifl@gmail.com",
//     subject:"Hello ",
//     text:"mail sending successfully "
// }

//  const mailsending = transporter.sendMail(mailsend)
// if(!mailsending){
//     res.status(400).send("something wrong")
// }else{
//     res.status(200).send("mail send")
// }


// })


// module.exports = upload;
// module.exports = app;
