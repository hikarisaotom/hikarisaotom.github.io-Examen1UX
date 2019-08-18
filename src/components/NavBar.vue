<template>
    <div>
        <!--INICIOO DE MI CODIO-->
<nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul class="right hide-on-med-and-down">
            <li><a href="#!">Inicio</a></li>
            <li><a href="./Inicio">Sesion</a></li>
            <li><a href="collapsible.html">Otros</a></li>
            <li><a href="mobile.html">Configuracion</a>
            </li>
          </ul>
        </div>
      </nav>

       <div class="col s6 offset-s6">
      <ul class="tabs offset-s6">
        <li class="tab col s3"><router-link to="/Construccion">Construccion</router-link></li>
        <li class="tab col s3"><router-link to="/Escolar">Escolar</router-link></li>
        <li class="tab col s3 disabled"><router-link to="/Inicio">Herramientas</router-link></li>
        <li class="tab col s3"> <router-link to="/Jardin">Jardineria</router-link></li>
      </ul>
    </div>
         <!--FIN DE MI CODIO-->
         </div>
</template>

<script>
export default {
    name:'NavBar'
    
}
</script>