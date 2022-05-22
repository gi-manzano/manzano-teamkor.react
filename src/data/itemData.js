
export const itemData = 

[

{   
    id: 1,
    name: 'Pantalon Raider', 
    tipo:'Outdoor', 
    precio :1200, 
    stock:4,
    img: '/fotos/pantalon.jpg'
},

{   id: 2,
    name: 'Buzo Magna', 
    tipo:'Outdoor', 
    precio :1200, 
    stock: 6,
    img:'/fotos/buzo1.jpg'
    
},

{   id: 3,
    name: 'Remea Zafari', 
    tipo:'Indoor', 
    precio :1200, 
    stock:5,
    img:'/fotos/remera.jpg'
},

{   id: 4,
    name: 'Calza Strong', 
    tipo:'Indoor', 
    precio :1200, 
    stock:9,
    img:'/fotos/calza2.jpg'
},

{   id: 5,
    name: 'Top Smille', 
    tipo:'Workout', 
    precio :1200, 
    stock:3,
    img:'/fotos/top1.jpg'
},

{  
        id: 6,
        name: 'Top Tuluz', 
        tipo:'workout', 
        precio :1200, 
        stock:6,
        img:'/fotos/top2.jpg'
    },

    
]


// para context carritoCount
const task = new Promise ((resp) =>{
    resp (itemData)
}, 1000)

export const getItem = () => {
    return task
}