<template>
    <div class="muestras">
        <!--INICIO DEL MI CODIGO-->
              <div class="col s12 green ">
          <ul>
              <li v-for="(item,index) of arrayordenado" :key="item.id">
                <div class="row">
                  <div class="col s3 ">
                    <div class="card ">
                      <div class="card-image">
                        <img v-bind:src="item.url" />
                        <span class="card-title">{{ item.nombre }}</span>
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
                          
                        <a  @click="dismunirStockHerramienta(index)">Agregar a carrito</a>
                       
                         <a  @click="addToCart(arrayordenado[index])">probando bandera</a>
                      </div>
                      <div class="card-action" v-show="item.cantidad===0||item.cantidad<0">
                        <h5>NO HAY EXISTENCIA EN STOCK</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
      </div>
        <!--FIN DE MI CODIGO-->

         <!-- Modal Trigger -->
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

  
    </div>
</template>

<script>
import{mapState,mapMutations} from 'vuex';
export default {
    name:'Herramienta',
    computed:{
        ...mapState(['herramientas']),
        arrayordenado(){
            return this.herramientas.sort((a,b)=>b.cantidad-a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['dismunirStockHerramienta']),
         ...mapMutations(['addToCart'])
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