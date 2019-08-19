<template>
  <div>
    <!--INICIOO DE MI CODIO-->

    <nav class="orange">
      <div class="nav-wrapper orange">
        <a href="#!" class="brand-logo logo">
          <i class="material-icons">cloud</i><b>Ferreteria</b>
        </a>
        <ul class="right hide-on-med-and-down">
          <li class="tooltipped" data-position="bottom" data-tooltip="Construccion">
            <router-link to="/Construccion">
              <i class="material-icons">view_module</i>
            </router-link>
          </li>
          <li class="tooltipped" data-position="bottom" data-tooltip="Escolar">
            <router-link to="/Escolar">
              <i class="material-icons">view_module</i>
            </router-link>
          </li>
          <li class="tooltipped" data-position="bottom" data-tooltip="Herramientas">
            <router-link to="/Inicio">
              <i class="material-icons">refresh</i>
            </router-link>
          </li>
          <li class="tooltipped" data-position="bottom" data-tooltip="Jardin">
            <router-link to="/Jardin">
              <i class="material-icons">more_vert</i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!--FIN DE MI CODIO-->
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="https://www.logaster.com.es/blog/wp-content/uploads/2019/01/4-min.jpg" />
            <div id="nav"></div>
          </div>
          <a href="#user">
            <img
              class="circle"
              src="http://emser.es/wp-content/uploads/2016/08/usuario-sin-foto.png"
            />
          </a>
          <a href="#name">
            <span class="white-text name">Claudia Cortes</span>
          </a>
          <a href="#email">
            <span class="white-text email">Hikarisaotom</span>
          </a>
        </div>
      </li>
      <li>
        <a href="#!">
          <i class="material-icons">cloud</i>Cliente Frecuente
        </a>
      </li>
      <li>
        <a href="#!">
          <i class="material-icons">cloud</i>Tiendas cercanas cerca de su ubicacion actual..
        </a>
      </li>

      <li>
        <div class="divider"></div>
      </li>
      <li>
        <a class="subheader">Su carrito tiene actualmente los sig productos</a>
      </li>
      <p v-for="(item,index) of carritos" :key="item.id">{{index}}-{{item.nombre}}</p>
    </ul>

    <ul id="carrito" class="sidenav carrito">
      <li>
        <div class="user-view" width="100%">
          <div class="background">
            <img
              src="http://disruptivoo.com/wp-content/uploads/2019/04/62-Fondos-de-Pantalla-Abstractos-para-tus-dispositivos-58.jpg"
            />
          </div>

          <a href="#name">
            <span class="white-text name">
              <h1>CARRITO</h1>
            </span>
          </a>
        </div>
        <table class="highlight responsive-table">
          <thead>
            <tr>
              <td>Cantidad</td>
              <td>Producto</td>
              <td>Precio</td>
              <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) of carritos" :key="item.id">
              <td>{{item.cantidad}}</td>
              <td>{{item.nombre}}</td>
              <td>LPS. {{item.precio}}</td>
              <td><button @click="eliminar(index)" onclick="M.toast({html: 'Se ha eliminado el producto'})"><i class="material-icons">cloud</i></button></td>
            </tr>
            <tr class="cyan">
              <td colspan="2"> <b>TOTAL</b></td>
              <td>LPS.5,0000</td>
              <td><center> <a class="waves-effect sidenav-close pulse orange" onclick="M.toast({html: 'La compra se ha realizado con exito'})">Comprar</a></center></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
       
      </li>
    </ul>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4 class="orange">{{productoAgregarCarrito.nombre}}</h4>
       <center> <img v-bind:src="productoAgregarCarrito.url" width="100px"
        height="100px"/>
        </center>
        <h5> <b> Disponibles en stock: </b></h5> {{productoAgregarCarrito.cantidad}}
        <h5><b>Precio: </b></h5>  {{productoAgregarCarrito.precio}}
        <center>
      <table>
        <tr>
          <td width="30%"><input
          type="text"
          v-model.number="totalcomprar"
          disabled
        /></td>
          <td width="10%"><button class="btn-flat orange" @click="Aumentar"><b>+</b></button></td>
          <td width="10%"><button class="btn-flat orange" @click="disminuir"><b>-</b></button></td>
        </tr>
      </table>
        </center>
        
        
        
        
      </div>
      <div class="modal-footer">
        <center>
        <a onclick="M.toast({html: 'Producto agregado al carrito'})" class="waves-effect waves-green btn pulse orange" @click="addToCart">Agregar a Carrito</a>
      </center>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "NavBar",

  computed: {
    ...mapState(["carritos"]),
    ...mapState(["productoAgregarCarrito"]),
    ...mapState(["totalcomprar"])
  },
  methods: {
    ...mapMutations(["loadCarrito"]),
    ...mapMutations(["addToCart"]),
    ...mapMutations(["Aumentar"]),
    ...mapMutations(["disminuir"]),
    ...mapMutations(["eliminar"])
  }
};
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Mystery+Quest");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css?family=Bangers|Poiret+One&display=swap");

@import url("https://fonts.googleapis.com/css?family=Bangers|Poiret+One&display=swap");
div{
  font-family: "Poiret One",cursive;
}
.logo{
 font-family: "Poiret One",cursive;
}
p {
  font-family: "Mystery Quest", cursive;
  font-size: 150%;
}

#carrito{
  width: 50%
}
</style>