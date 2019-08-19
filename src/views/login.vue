<template>
    <div class="fullscream">
         <div class="slider fullpantalla">
              <ul class="slides fullpantalla">
                <li>
                  <img src="https://www.tekcrispy.com/wp-content/uploads/2018/02/madera-1021x580.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption center-align">
                    <h3>Materiales de construccion!</h3>
                    <h5 class="light black-text text-black">
                      Necesitas construir?.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="https://www.escueladesarts.com/wp-content/uploads/MASTER-EN-VIVEROS-JARDINES-Y-CENTROS-DE-JARDINERIA.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption left-align">
                    <h3>Jardineria!</h3>
                    <h5 class="light black-text text-black">
                      Haz que tu jardin se vea grandioso.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="http://www.mndelgolfo.com/wp-content/uploads/2016/12/herramientas-de-carpinteros.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption right-align">
                    <h3>Herramientas!</h3>
                    <h5 class="light black-text text-black">
                     Todo en herramientas
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/images/canal_institucional_utiles_escolares.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption center-align">
                    <h3>Utiles!</h3>
                    <h5 class="light black-text text-black">
                      Ofertas para el regreso a clases.
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          
        <div id="login">
            <center> <h1> <font color="#e65100">Login</font></h1></center>
             <div class="row" >
                    <div class="input-field ">
                      <i class="large material-icons prefix">face</i>
  
                      <input id="icon_prefix"  class="validate" type="text" name="username" v-model="input.username" placeholder="Username" />
                      <label for="icon_prefix"><h5>Usuario</h5></label>
                    </div>
                    
                    <div class="input-field ">
                      <i class="large material-icons prefix">fingerprint</i>
                       <input id="icon_telephone" class="validate" type="password" name="password" v-model="input.password" placeholder="Password" v-on:keyup.enter="login()"/>
                      <label for="icon_telephone" ><h5>Password</h5></label>
                    </div>
                  </div>
       <center> <button class="btn waves-effect waves-light orange darken-4 pulse"  v-on:click="login()">Log in
    <i class="material-icons right">send</i>
  </button></center>
       
        
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "inicio" });
                         M.toast({html: 'Bienvenida Claudia!', classes: 'rounded'});
                          M.toast({html: 'Aprovecha y fijate en las oferta', classes: 'rounded'});
                           M.toast({html: 'Hay remate de los productos cuyo inventario es menor a 10', classes: 'rounded'});
                           
                    } else {
                       M.toast({html: 'Datos Invalidos', classes: 'rounded'});
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                   M.toast({html: 'Asegurese de haber llenado los campos', classes: 'rounded'});
                    console.log("A username and password must be present");
                }
            }
        }
    }

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  });

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
@import url("https://fonts.googleapis.com/css?family=Bangers|Poiret+One&display=swap");
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');

#log{
    background-color:white;
    text-emphasis-color: white;
}
input{
    font-family: "Lobster",cursive;
}
h1{
  /* font-family: "Satisfy",cursive;
    font-family: "Poiret One",cursive;*/
    font-family: "Lobster",cursive;
    
}
button{
    font-family: "Lobster",cursive;
}
.fullscream{
 /* font-family: "Satisfy",cursive;
    font-family: "Poiret One",cursive;*/
    font-family: "Lobster",cursive;
    
}

   

</style>