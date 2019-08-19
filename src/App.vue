<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <Nav-Bar></Nav-Bar>
      <table class="principal">
        <tr>
          <td width="20%" class="celdas">
<Panel></Panel>
          </td>
          <td class="celdas">
    <router-view/>
          </td>
        </tr>
      </table>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Panel from './components/PanelLateral'
export default {
  name:'app',
  components:{
    NavBar,
    Panel
  },
   created() {
    console.log('Component has been created!');
  }
}


</script>
<style scoped>
.principal{
  height: 720px;
  
}
.celdas{
    padding: 0px;
  }

</style>
