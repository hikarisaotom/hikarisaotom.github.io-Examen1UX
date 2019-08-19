<template>
    <div class="muestras">
        <!--INICIO DEL MI CODIGO-->
              <div class="col s12 green">
          <ul>
              <li v-for="(item,index) of arrayordenado" :key="item.id">
                <div class="row">
                  <div class="col s3">
                    <div class="card">
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
                          
                        <a href="#" @click="dismunirStockJardin(index)">Agregar a carrito</a>
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
    </div>
</template>

<script>
import{mapState,mapMutations} from 'vuex';
export default {
    name:'Jardin',
    computed:{
        ...mapState(['jardines']),
        arrayordenado(){
            return this.jardines.sort((a,b)=>b.cantidad-a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['dismunirStockJardin']),
        ...mapMutations(['addToCart'])
    }

}
</script>

<style scoped>
  .muestras{
    width:100%; 
    padding: 0px;
    height:100%;
    overflow-x:hidden; overflow-y:scroll;
  }
</style>