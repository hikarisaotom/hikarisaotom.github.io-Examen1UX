<template>
  <div id="app">
    <div id="nav"></div>
    <div v-if="!authenticated">
      <router-view @authenticated="setAuthenticated" />
    </div>
    <div id="app">
      <div id="nav">
        <div class="fixed-action-btn">
          <a class="btn-floating btn-large red tooltipped" v-if="authenticated" data-position="left" data-tooltip="Salir" >
            <i class="large material-icons " >mode_edit</i>
          </a>
          <ul>
            
              <li>
              <a class="btn-floating blue">
                <a  data-target="slide-out" class="sidenav-trigger tooltipped" data-position="left" data-tooltip="Perfil" ><i class="material-icons">menu</i></a>
              </a>
            </li>
            <li>
              <a class="btn-floating green tooltipped" data-position="left" data-tooltip="Carrito">
                <Carito></Carito>
              </a>
            </li>
            <li>
              <a class="btn-floating blue">
                <router-link v-if="authenticated" to="/login" v-on:click.native="logout()"> <i class="material-icons">publish</i></router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="nav" v-show="authenticated">
        <Nav-Bar></Nav-Bar>
        <table class="principal">
          <tr>
            <td width="20%" class="celdas">
              <Panel></Panel>
            </td>
            <td class="celdas">
              <router-view @authenticated="setAuthenticated" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Panel from "./components/PanelLateral";
import Carito from "./components/Carito";
import { mapState, mapMutations } from "vuex";
export default {
  name: "app",
  components: {
    NavBar,
    Panel,
    Carito
  },
  computed: {
    ...mapState(["bandera"])
  },
  methods: {
    /* ...mapMutations(["dismunirStockHerramienta"]),
    ...mapMutations(["addToCart"]),
    ...mapMutations(["dismunirStock"])*/
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "clau",
        password: "1234"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });
</script>
<style scoped>

.principal {
  height: 720px;
}
.celdas {
  padding: 0px;
}

#app {
  height: 100%;
}
</style>
