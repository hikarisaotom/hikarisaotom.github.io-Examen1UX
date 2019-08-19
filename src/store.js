import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    herramientas:[
      { tipo: 'herramienta',
       nombre:'MARTILLO',
        url:'https://www.officedepot.com.mx/medias/11053.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjU4OTE3fGltYWdlL2pwZWd8aGQxL2hhOC85NTYzMjY5NjkzNDcwLmpwZ3xhNTMxZWNlYzI0ZTVjMWNmZTRlZTdiZjU4NjgwZTVmOTMzZTgxYzZhMWYxYjlkODljNTYyZjNhZTRkMWZmNGQ5',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:5
      },
      { tipo: 'jardin',
       nombre:'PALA',
       url:'/assets/cuaderno.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      },
      { tipo: 'escolar',
       nombre:'CUADERNO',
       url:'/assets/cuaderno.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      },
      { tipo: 'construccion',
      nombre:'Tubos',
      url:'/assets/cuaderno.jpg',
       descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
       cantidad:10
     },
     { tipo: 'herramienta',
     nombre:'CLAVOS',
     url:'/assets/cuaderno.jpg',
      descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
      cantidad:50
    },
      { tipo: 'herramienta',
       nombre:'TENAZAS',
        url:'../resources/cuaderno.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50
      }
  ],
  
        productoAgregarCarrito:{
          nombre:'' ,
        id:0       },
        carritos:[],
        totalcomprar:0,
        bandera:1,
        usuarios:[{
          nombre: 'Claudia',
          apellido:'Cortes',
          password:'1234',
          nickname:'hikarisaotom',
        }]

  },
  mutations: {

    iniciarsesion(state){

    },
    /*MOSTRAR */
    loadCarrito(state){
      var dbcarritos=JSON.parse(window.localStorage.getItem('CarritoCompras'));
      var dbProducto=JSON.parse(window.localStorage.getItem('productoTemp'));
      var dbStock=JSON.parse(window.localStorage.getItem('productosStock'));
      if(dbcarritos!=null){
        state.carritos=dbcarritos;
      state.productoAgregarCarrito=dbProducto;
      state.herramientas=dbStock;
      console.log("MOSTRANDO DATOS EN LOCAL STORAGE");
      }else{
        console.log("ESTAN VACIOS---LLENANDO");
        window.localStorage.setItem('CarritoCompras',JSON.stringify(state.carritos));
        window.localStorage.setItem('productoTemp',JSON.stringify(state.productoAgregarCarrito));
        window.localStorage.setItem('productosStock',JSON.stringify(state.herramientas));
      }
     
     },
     /*A;ADIR PRODUCTOS AL CARRITO */
    addToCart(state){
      var index=state.productoAgregarCarrito.id;
      console.log('TOTAL A DISMINUIR',state.totalcomprar);
      state.herramientas[index].cantidad=state.herramientas[index].cantidad-state.totalcomprar;
      console.log('NUEVA CANTIDAD', state.herramientas[index]);
     state.carritos.push( {tipo: state.productoAgregarCarrito.tipo,
     nombre: state.productoAgregarCarrito.nombre,
      url:state.productoAgregarCarrito.url,
      descripcion:state.productoAgregarCarrito.descripcion,
      cantidad:state.totalcomprar
    }
     );
     state.totalcomprar=0;
      window.localStorage.setItem('CarritoCompras',JSON.stringify(state.carritos));
      window.localStorage.setItem('productoTemp',JSON.stringify(state.productoAgregarCarrito));
      window.localStorage.setItem('productosStock',JSON.stringify(state.herramientas));
    },

    /*DISMINUIR LOS VALORES EN STOCK se abre cuando se muestra el modal */
    dismunirStock(state,index){
      state.productoAgregarCarrito=state.herramientas[index];
      state.productoAgregarCarrito.id=index;
     
    },
    /*AUMENTAR Y REDUCIR EL TAMA;O DEL TOTAL DE PRODUCTOS A COMPRAR */
    Aumentar(state){
      state.totalcomprar++;
      console.log('aumentando',state.totalcomprar);
    },
    disminuir(state){
      state.totalcomprar--;
      console.log('disminuyendo',state.totalcomprar);
    },

  },
  actions: {

  }
  
})
