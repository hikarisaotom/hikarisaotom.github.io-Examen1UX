<template>
  <div class="padre orange ">
    <!--INICIO DEL MI CODIGO-->
    <div class="cols 8  orange">
      <center>
       <p class="dato grey darken-3">
         <font color="white"><b>Liquidaciones de stock</b></font></p>
      </center>
      <table>
        <tr v-for="(item,index) of herramientas" :key="item.id">
          <td v-show="item.cantidad<10||item.cantidad===10">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title"> <h4><font color="#ffe0b2 "><b>Remate:{{item.nombre}}!</b></font></h4> </span>
                <h5><p>Aproveche: solamente quedan {{item.cantidad}} en existencia.</p></h5>
              </div>
              <div class="card-action">
                <div class="card-action grey darken-3" v-show="item.cantidad===0||item.cantidad<0">
                    <font color="#e65100"><b> <h3>NO HAY EXISTENCIA EN STOCK</h3></b></font>
                </div>
                <div class="card-action grey darken-3" v-show="item.cantidad>0">
                 <center> <a
                    class="waves-effect waves-light  modal-trigger btn-flat orange text-white"
                    href="#modal1"
                    @click="dismunirStock(index)"
                  > <font color="white"><b> Comprar</b></font></a></center>
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
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
@import url("https://fonts.googleapis.com/css?family=Bangers|Poiret+One&display=swap");
div{
  font-family: "Poiret One",cursive;
}
.dato{
  font-family: "Poiret One",cursive;
  font-size: 200%;
  font-style: normal;

}

.padre {
  height: 100%;
  overflow: auto;
}
.hijo {
  height: 100%;
}
</style>
