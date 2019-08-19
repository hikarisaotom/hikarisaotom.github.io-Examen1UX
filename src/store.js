import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    herramientas:[
      { tipo: 'herramienta',
       nombre:'MARTILLO',
        url:'https://d2mq510qed945.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/T/STAN0475.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:5,
        precio:150,
        lugar:1

      },
      { tipo: 'jardin',
       nombre:'PALA',
       url:'http://www.plantelia.com/3878-thickbox/pala-jardin-ancha.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50,
        precio:15,
        lugar:1
      },
      { tipo: 'jardin',
      nombre:'PALA',
      url:'http://www.plantelia.com/3878-thickbox/pala-jardin-ancha.jpg',
       descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
       cantidad:50,
       precio:20,
       lugar:1
     },
      { tipo: 'escolar',
       nombre:'CUADERNO',
       url:'https://www.costco.com.mx/medias/sys_master/products/h77/he7/12047304687646.jpg',
        descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
        cantidad:50,
        precio:15,
        lugar:1
      },
      { tipo: 'escolar',
      nombre:'CUADERNO',
      url:'https://www.costco.com.mx/medias/sys_master/products/h77/he7/12047304687646.jpg',
       descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
       cantidad:50,
       precio:25,
       lugar:1
     },
      { tipo: 'construccion',
      nombre:'Tubos',
      url:'https://static.bricomart.es/478/5/3/3/a/10106992_fo_01_web.jpg',
       descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
       cantidad:10,
       precio:50,
       lugar:1
     },
     { tipo: 'construccion',
      nombre:'Tubos',
      url:'https://static.bricomart.es/478/5/3/3/a/10106992_fo_01_web.jpg',
       descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
       cantidad:10,
       precio:150,
       lugar:1
     },
     { tipo: 'herramienta',
     nombre:'CLAVOS',
     url:'https://d2mq510qed945.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/T/STAN0475.jpg',
      descripcion:'Cuadernos de colores de diversas marcas y de excelente calidad',
      cantidad:50,
      precio:5,
      lugar:1
    },
      
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
        }],
        nicknamelog:'',
        passlog:'',
        

  },
  mutations: {

    eliminar(state,index){
      state.carritos.splice(index,1);
      console.log('ELIMINANDO',state.carritos[index]);
      window.localStorage.setItem('CarritoCompras',JSON.stringify(state.carritos));
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
      cantidad:state.totalcomprar,
      precio:state.precio
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
