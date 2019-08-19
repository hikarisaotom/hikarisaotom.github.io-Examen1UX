<template>
  <div id="app">
    <div id="nav"></div>
    <div v-show="bandera===1">
      <!--LOG IN -->
      <router-view />
    </div>
    <div v-show="bandera===2">
      <!--Registrarse -->
      <router-view />
    </div>
    <div v-show="bandera===3">
      <!--SESION INICIADA -->
      <Nav-Bar></Nav-Bar>
      <table class="principal">
        <tr>
          <td width="20%" class="celdas">
            <Panel></Panel>
          </td>
          <td class="celdas">
            <router-view />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Panel from "./components/PanelLateral";
import { mapState, mapMutations } from "vuex";
export default {
  name: "app",
  components: {
    NavBar,
    Panel
  },
  computed: {
    ...mapState(["bandera"])
  },
  methods: {
    /* ...mapMutations(["dismunirStockHerramienta"]),
    ...mapMutations(["addToCart"]),
    ...mapMutations(["dismunirStock"])*/
  }
};
</script>
<style scoped>
.principal {
  height: 720px;
}
.celdas {
  padding: 0px;
}
</style>
