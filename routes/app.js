
module.exports = (app) => {

    
    const controller = require("../controller/controller");
    
app.post("/Register" ,controller.Register);

app.get("/Login" , controller.Login);

app.patch("/update/:id" , controller.Update);

app.delete("/Delete/:Email" , controller.Delete);

app.post("/mail"  , controller.mail);


}