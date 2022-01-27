const Cosas = 
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


let lista = []

function Save(id){
 
        
const filto = Cosas.find((filto) => filto.id === id);
    
       if(filto !== undefined){
           lista.push(filto)
           console.log(filto)
           console.log("-----------------")
           
       }else{
           console.log(`no se encontro un producto para el id ${id}`)
           return null
       }   
    
}

Save(2)
Save(1)
console.log(lista)



function getById(id){

    const filtro = lista.find((filtro) => filtro.id === id);

       if(filtro !== undefined){
           console.log(filtro)
           console.log("-----------------")
           
       }else{
           console.log(`no se encontro un producto para el id ${id}`)
           return null
       }

}

getById(2)

function getAll(){
    console.log(lista)
    console.log("-----------------")}


getAll()

function deleteById(id){
 
    let valor = id
    
    lista = lista.filter(item => item.id !== valor)
    
    console.log(lista)
    console.log("-----------------")
    }
    

deleteById(1)

function deleteAll(){

    lista = []
  
    console.log('////////////////////// ')
  }
  
  deleteAll()