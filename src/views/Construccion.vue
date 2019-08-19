<template>
    <div class="muestras">
        <!--INICIO DEL MI CODIGO-->
<div class="col s12 white">
      <table>
       <tr>
         <td  v-for="(item,index) of arrayordenado" :key="item.id" v-show="item.tipo==='construccion' &&item.lugar===1">
           <div class="col s3 ">
                    <div class="card ">
                      <div class="card-image" >
                        <img v-bind:src="item.url" class="tamano" />
                        <span class="card-title black-text">{{ item.nombre }}</span>
                      </div>
                      <div class="card-content">
                        <p>
                          {{ item.descripcion }}
                        </p>
                        <p>
                          Cantidad:
                          {{ item.cantidad }}
                        </p>
                      </div>
                      <div class="card-action" v-show="item.cantidad>0">
                      <a class="waves-effect waves-light btn modal-trigger" href="#modal1" @click="dismunirStock(index)">Comprar</a>
                      </div>
                      <div class="card-action" v-show="item.cantidad===0||item.cantidad<0">
                        <h5>NO HAY EXISTENCIA EN STOCK</h5>
                      </div>
                    </div>
                  </div>
         </td>
         
       </tr>
       <tr>
          <td  v-for="(item,index) of arrayordenado" :key="item.id" v-show="item.tipo==='construccion' &&item.lugar===2">
           <div class="col s3 ">
                    <div class="card ">
                      <div class="card-image">
                        <img v-bind:src="item.url" />
                        <span class="card-title black-text">{{ item.nombre }}</span>
                      </div>
                      <div class="card-content">
                        <p>
                          {{ item.descripcion }}
                        </p>
                        <p>
                          Cantidad:
                          {{ item.cantidad }}
                        </p>
                      </div>
                      <div class="card-action" v-show="item.cantidad>0">
                      <a class="waves-effect waves-light btn modal-trigger" href="#modal1" @click="dismunirStock(index)">Comprar</a>
                      </div>
                      <div class="card-action" v-show="item.cantidad===0||item.cantidad<0">
                        <h5>NO HAY EXISTENCIA EN STOCK</h5>
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
    name:'Construccion',
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
  .muestras{
    width:100%; 
    height:100%;
    overflow-x:hidden; overflow-y:scroll;
    padding: 0px;
  }
</style>