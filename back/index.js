const app = require("./src/server");
const conDb = require("./src/config/conDb");


conDb().then((res)=>{
    app.listen(3000, ()=>{
        console.log("Servidor Online escuchando en el puerto 3000");
    })
})
.catch((err)=>{
    console.log("Error al conectar con la base de datos");
})