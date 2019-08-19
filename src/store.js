import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    herramientas:[
      { tipo: 'herramienta',
       nombre:'Martillo',
        url:'https://www.officedepot.com.mx/medias/11053.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjU4OTE3fGltYWdlL2pwZWd8aGQxL2hhOC85NTYzMjY5NjkzNDcwLmpwZ3xhNTMxZWNlYzI0ZTVjMWNmZTRlZTdiZjU4NjgwZTVmOTMzZTgxYzZhMWYxYjlkODljNTYyZjNhZTRkMWZmNGQ5',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      },
      { tipo: 'escolar',
       nombre:'Cuaderno',
       url:'/assets/cuaderno.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      },
      { tipo: 'escolar',
      nombre:'Cuaderno',
      url:'/assets/cuaderno.jpg',
       descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
       cantidad:50
     },
     { tipo: 'escolar',
     nombre:'Cuaderno',
     url:'/assets/cuaderno.jpg',
      descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
      cantidad:50
    },
      { tipo: 'escolar',
       nombre:'Cuaderno',
        url:'../resources/cuaderno.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      }
  ],
  escolares:[
    { tipo: 'escolar',
     nombre:'Cuaderno',
      url:'../resources/cuaderno.jpg',
      descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
      cantidad:50
    }],
    jardines:[
      { tipo: 'Jardineria',
       nombre:'Pala',
        url:'../resources/cuaderno.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      }],
      construcciones:[
        { tipo: 'Construccion',
         nombre:'Tubos',
          url:'../resources/cuaderno.jpg',
          descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
          cantidad:50
        }],

        productoAgregarCarrito:{
          nombre:''        },
        carritos:[]

  },
  mutations: {
    loadCarrito(state){
      
      var dbcarritos=JSON.parse(window.localStorage.getItem('CarritoCompras'));
      var dbProducto=JSON.parse(window.localStorage.getItem('productoTemp'));
      state.carritos=dbcarritos;
      state.productoAgregarCarrito=dbProducto;
      console.log("MOSTRANDO DATOS EN LOCAL STORAGE");
     },
    addToCart(state,index){
   
      state.productoAgregarCarrito=index;
      console.log('STATE MODIFICADO',state.productoAgregarCarrito);
     state.carritos.push(state.productoAgregarCarrito);
     console.log('VALOR',index);
      window.localStorage.setItem('CarritoCompras',JSON.stringify(state.carritos));
      window.localStorage.setItem('productoTemp',JSON.stringify(state.productoAgregarCarrito));
    
    },
    dismunirStockHerramienta(state,index){
  
      state.herramientas[index].cantidad--;
    },
    dismunirStockJardin(state,index){
      state.jardines[index].cantidad--;
    },
    dismunirStockConstruccion(state,index){
      state.construcciones[index].cantidad--;
    },
    dismunirStockEscolar(state,index){
      state.escolares[index].cantidad--;
    },

  },
  actions: {

  }
  
})
