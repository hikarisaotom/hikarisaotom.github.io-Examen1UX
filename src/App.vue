<template>
  <div id="app">
    <div id="nav"></div>
    <div v-if="!authenticated">
            <router-view @authenticated="setAuthenticated" />
         </div>
      <div id="app">
        <div id="nav">
          <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
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
  },data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "clau",
                    password: "1234"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
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
  
}
</script>
<style scoped>
.principal {
  height: 720px;
}
.celdas {
  padding: 0px;
}

</style>
