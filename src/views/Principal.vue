<template>
    <div>
        <div id="principal-log">
            <div class="slider fullpantalla">
              <ul class="slides fullpantalla">
                <li>
                  <img src="resources/herramienta.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="resources/jarindería.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="resources/madera.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="resources/utiles.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      
      
          <div id="login">
            <h5>Iniciar sesion</h5>
              <form >
                  <div class="row">
                    <div class="input-field">
                      <i class="material-icons prefix">account_circle</i>
                      <input id="icon_prefix " type="text" class="validate">
                      <label for="icon_prefix">Usuario</label>
                    </div>
                    <div class="input-field">
                      <i class="material-icons prefix">phone</i>
                      <input id="icon_telephone" type="password" class="validate" >
                      <label for="icon_telephone" ></label>
                    </div>
                  </div>
                  <button @click="iniciarsesion">Iniciar sesion</button>
                </form>
               <a  id="ir">  <router-link to="/Registrarse">Registrarse</router-link></a>
                
                
          </div>
    
    </div>
</template>

<style scoped>
    #principal-log{
    position: absolute;
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    margin-left:0%;
     z-index: 1;
     height: 100%;
  

}

#login{
    /*position: relative;
    display: inline-block;
    margin-top: 1%;
    float:left;
    z-index: 55555;
    background-color: aquamarine;
    opacity: 10%;*/
    position: absolute;
     left: 25%; 
     width: 50%;
      z-index: 3;
      opacity: 0.8;
      height: 100%;
      background-color:white;
    
}


.fullpantalla{
    height: 100%;
}

#log{
    background-color:white;
    text-emphasis-color: white;
}


.muestras{
    position: absolute;
    display: inline-block;
    background-color: black;
    z-index: 1;

}
</style>
<script>
import{mapState,mapMutations} from 'vuex';
export default {
    name:'Principal',
     methods:{
        ...mapMutations(['iniciarsesion']),
        
        
    }
}
</script>
