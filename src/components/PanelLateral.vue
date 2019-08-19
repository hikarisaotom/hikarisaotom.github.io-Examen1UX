<template>
  <div class="padre orange accent-2">
    <!--INICIO DEL MI CODIGO-->
    <div class="cols 8  orange accent-2 hijo">
      <center>
        <p>LIQUIDACIONES</p>
      </center>
      <table>
        <tr v-for="(item,index) of herramientas" :key="item.id">
          <td v-show="item.cantidad<10||item.cantidad===10">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">LIQUIDACION! {{item.nombre}}</span>
                <p>Aproveche: solamente quedan {{item.cantidad}} en existencia.</p>
              </div>
              <div class="card-action">
                <div class="card-action" v-show="item.cantidad===0||item.cantidad<0">
                  <h5>NO HAY EXISTENCIA EN STOCK</h5>
                </div>
                <div class="card-action" v-show="item.cantidad>0">
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#modal1"
                    @click="dismunirStock(index)"
                  >Comprar</a>
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td></td>
        </tr>
      </table>
    </div>
    <!--FIN DE MI CODIGO-->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Panel",
  computed: {
    ...mapState(["herramientas"])
  },
  methods: {
    ...mapMutations(["dismunirStockHerramienta"]),
    ...mapMutations(["addToCart"]),
    ...mapMutations(["dismunirStock"])
  }
};
</script>
<style scoped>
.padre {
  height: 100%;
  overflow: auto;
}
.hijo {
  height: 100%;
}
</style>
