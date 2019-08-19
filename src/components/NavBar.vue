<template>
  <div>
    <!--INICIOO DE MI CODIO-->
 
    
 <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
      <ul class="right hide-on-med-and-down">
       
        <li  class="tooltipped" data-position="bottom" data-tooltip="Herramientas"><router-link to="/Construccion"><i class="material-icons">view_module</i></router-link></li>
        <li class="tooltipped" data-position="bottom" data-tooltip="Escolar" ><router-link to="/Escolar"><i class="material-icons">view_module</i></router-link></li>
        <li class="tooltipped" data-position="bottom" data-tooltip="Inicio" ><router-link to="/Inicio"><i class="material-icons">refresh</i></router-link></li>
        <li class="tooltipped" data-position="bottom" data-tooltip="Jardin" ><router-link to="/Jardin"><i class="material-icons">more_vert</i></router-link></li>
      </ul>
    </div>
  </nav>
   
    <!--FIN DE MI CODIO-->
     <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
        <div id="nav">
          
        </div>
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect sidenav-close" href="#!">Third Link With Waves</a></li>
  </ul>

  <ul id="carrito" class="sidenav carrito">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
      </div>
      
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div>
     PRODUCTOS EN SU CARRITO AQUI 
      <p v-for="(item,index) of carritos" :key="item.id">
        {{index}} - {{item.nombre}} -{{item.cantidad}}
      </p>
    <li><a href="#!"><i class="material-icons">cloud</i>Carrito de compras</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect sidenav-close" href="#!">Comprar</a></li>
  </ul>
  
 <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>{{productoAgregarCarrito.nombre}}</h4>
     Disponibles en stock:  {{productoAgregarCarrito.cantidad}}
     <input type="text" v-model.number="totalcomprar" disabled/>
     <button  @click="Aumentar">+</button>
     <button  @click="disminuir">-</button>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
    <a href="#!" class="waves-effect waves-green btn-flat" @click="addToCart">Agregar a Carrito</a>
    </div>
  </div>
     
     
  
  
  </div>
  
</template>

<script>
import{mapState,mapMutations} from 'vuex';
export default {
  
  name: "NavBar",
 
  computed:{
        ...mapState(['carritos']),
        ...mapState(['productoAgregarCarrito']),
        ...mapState(['totalcomprar']),
        
    },
     methods:{
        ...mapMutations(['loadCarrito']),
        ...mapMutations(['addToCart']),
        ...mapMutations(['Aumentar']),
         ...mapMutations(['disminuir']),
         
        
        
    }

   

 
};
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Mystery+Quest");
p {
  font-family: "Mystery Quest", cursive;
  font-size: 150%;
}
  .carrito{
    width:100%;
  }
</style>