import express from "express";


const router = express.Router();

const app = express();

const PORT = 8000


let productos = 
    [{
      title: "Carta",
      price: 10,
      id: 1
    },

        {
          title: "Peluche",
          price: 100,
          id: 2
        },
 
            {
              title: "Figura",
              price: 200,
              id: 3
            }]










app.use("/api",router)

router.get("/productos",(req,res)=>{
    res.send(productos)
})

router.post("/productos",(req,res)=>{

  function newProduct(title,price,id){
    let productoNuevo = {
      title: title,
      price: price,
      id: id
    }
    productos.push(productoNuevo)
    res.send(productoNuevo)
  
  }

  newProduct("juguete",300,4)
})

router.put("/productos/:id",(req,res)=>{


  function editById(title,price,id){

    let filtro = productos.find((filtro) => filtro.id == id);
  
    filtro = {
      title: title,
      price: price,
      id: id
    }
  res.send(filtro)
  }
  
 editById("nombre Editado","numero editado",req.params.id)

})

router.delete("/productos/:id",(req,res)=>{
  function deleteById(id){
 
    let valor = id
    
    productos = productos.filter(item => item.id != valor)
    res.send(productos)
}
deleteById(req.params.id)

})

router.get("/productos/:id",(req,res)=>{

  function getById(id){

    const filtro = productos.find((filtro) => filtro.id == id);
   
          if(filtro !== undefined){
              console.log(filtro)
              console.log("-----------------")
              res.send(filtro)
              
          }else{
              console.log(`no se encontro un producto para el id ${id}`)
              return null
          }}
    

    getById(req.params.id)

})



const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
 server.on("error", error => console.log(`Error en servidor ${error}`))