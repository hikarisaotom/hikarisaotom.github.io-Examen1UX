<template>
    <div>
        <a  data-target="carrito" class="sidenav-trigger"  @click="loadCarrito"><i class="material-icons">shop</i>Carrito</a>

  
    </div>
</template>

<script>


import{mapState,mapMutations} from 'vuex';
export default {
   name: "Carito",
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

</script>