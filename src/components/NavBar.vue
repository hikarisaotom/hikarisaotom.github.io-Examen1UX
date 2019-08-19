<template>
  <div>
    <!--INICIOO DE MI CODIO-->
    <nav>
      <div class="nav-wrapper orange lighten-2">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#!">Carrito</a>
          </li>
          <li>
            <a href="./Inicio">Configuracion del perfil</a>
          </li>
          
        </ul>
      </div>
    </nav>
    <center><div class="col s12 ">
      <ul class="tabs cyan lighten-3">
        <li class="tab col s3">
          <router-link to="/Construccion">Construccion</router-link>
        </li>
        <li class="tab col s3">
          <router-link to="/Escolar">Escolar</router-link>
        </li>
        <li class="tab col s3">
          <router-link to="/Inicio">Herramientas</router-link>
        </li>
        <li class="tab col s3">
          <router-link to="/Jardin">Jardineria</router-link>
        </li>
        <li class="tab col s3">
         <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </li>
        <li class="tab col s3">
         <a href="#" data-target="carrito" class="sidenav-trigger"><i class="material-icons">shop</i></a>
        </li>
        
      </ul>
    </div></center>
    <!--FIN DE MI CODIO-->
     <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
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
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
     
     
  
  
  </div>
  
</template>

<script>
import{mapState} from 'vuex';
export default {
  name: "NavBar",
  computed:{
        ...mapState(['carritos']),
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


</script>

<style scoped>
  .carrito{
    width:100%;
  }
</style>