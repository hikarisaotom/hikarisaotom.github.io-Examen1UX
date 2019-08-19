<template>
    <div class="muestras">
        <!--INICIO DEL MI CODIGO-->
           <div class="col s12 white">
      <table>
       <tr>
         <td  v-for="(item,index) of arrayordenado" :key="item.id" v-show="item.tipo==='jardin' &&item.lugar===1">
           <div class="col s3 ">
                    <div class="card ">
                      <div class="card-image grey darken-3" >
                        <img v-bind:src="item.url" class="tamano" />
                        <span class="card-title black-text grey darken-3">
                          <font color="white"> <b>{{ item.nombre }} </b></font></span>
                      </div>
                      <div class="card-content">
                        <p><h5><b>
                          {{ item.descripcion }}</b>
                          </h5>
                        
                        <p><h5>
                          
                          <font color="orange"> <b>Cantidad:</b></font>
                          {{ item.cantidad }}
                          </h5>
                       
                      </div>
                      <div class="card-action grey darken-3" v-show="item.cantidad>0">
                      <a class="waves-effect waves-light btn modal-trigger orange" href="#modal1" @click="dismunirStock(index)"> <b>Comprar</b></a>
                      </div>
                      <div class="card-action" v-show="item.cantidad===0||item.cantidad<0">
                         <font color="#e65100"><b> <h3>NO HAY EXISTENCIA EN STOCK</h3></b></font>
                      </div>
                    </div>
                  </div>
         </td>
         
       </tr>
          <tr>
         <td  v-for="(item,index) of arrayordenado" :key="item.id" v-show="item.tipo==='jardin' &&item.lugar===2">
           <div class="col s3 ">
                    <div class="card ">
                      <div class="card-image grey darken-3" >
                        <img v-bind:src="item.url" class="tamano" />
                        <span class="card-title black-text grey darken-3">
                          <font color="white"> <b>{{ item.nombre }} </b></font></span>
                      </div>
                      <div class="card-content">
                        <p><h5><b>
                          {{ item.descripcion }}</b>
                          </h5>
                        
                        <p><h5>
                          
                          <font color="orange"> <b>Cantidad:</b></font>
                          {{ item.cantidad }}
                          </h5>
                       
                      </div>
                     <div class="card-action grey darken-3" v-show="item.cantidad>0">
                      <a class="waves-effect waves-light btn modal-trigger orange" href="#modal1" @click="dismunirStock(index)"> <b>Comprar</b></a>
                      </div>
                      <div class="card-action" v-show="item.cantidad===0||item.cantidad<0">
                         <font color="#e65100"><b> <h3>NO HAY EXISTENCIA EN STOCK</h3></b></font>
                      </div>
                    </div>
                  </div>
         </td>
         
       </tr>

      </table>
    </div>
        <!--FIN DE MI CODIGO-->
    </div>
</template>
  <!-- JQUERY -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
    <!-- JS MATERIALIZE -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.js"></script>
<script>
import{mapState,mapMutations} from 'vuex';
export default {
    name:'Jardin',
    computed:{
        ...mapState(['herramientas']),
        arrayordenado(){
            return this.herramientas.sort((a,b)=>b.cantidad-a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['dismunirStockHerramienta']),
         ...mapMutations(['addToCart']),
         ...mapMutations(['dismunirStock'])
    }

}


 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Bangers|Poiret+One&display=swap");
div{
  font-family: "Poiret One",cursive;
}
  .muestras{
    width:100%; 
    height:100%;
    overflow-x:hidden; overflow-y:scroll;
    padding: 0px;
  }
</style>