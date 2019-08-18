<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <Nav-Bar></Nav-Bar>
      <table>
        <tr>
          <td width="30%">
<Panel></Panel>
          </td>
          <td>
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
  }
}
</script>
<style>


</style>
