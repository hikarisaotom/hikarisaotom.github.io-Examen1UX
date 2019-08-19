<template>
    <div class="fullscream">
         <div class="slider fullpantalla">
              <ul class="slides fullpantalla">
                <li>
                  <img src="https://www.tekcrispy.com/wp-content/uploads/2018/02/madera-1021x580.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="https://durmientesdemadera.cl/wp-content/uploads/2017/12/Tablon-cafe-360x360.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="https://durmientesdemadera.cl/wp-content/uploads/2017/12/Tablon-cafe-360x360.jpg" class="fullpantalla"/>
                  <!-- random image -->
                  <div class="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img src="https://durmientesdemadera.cl/wp-content/uploads/2017/12/Tablon-cafe-360x360.jpg" class="fullpantalla"/>
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
          
        <div id="login">
            <center> <h1>Login</h1></center>
             <div class="row" >
                    <div class="input-field ">
                      <i class="material-icons prefix">account_circle</i>
  
                      <input id="icon_prefix"  class="validate" type="text" name="username" v-model="input.username" placeholder="Username" />
                      <label for="icon_prefix">Usuario</label>
                    </div>
                    
                    <div class="input-field ">
                      <i class="material-icons prefix">phone</i>
                       <input id="icon_telephone" class="validate" type="password" name="password" v-model="input.password" placeholder="Password" v-on:keyup.enter="login()"/>
                      <label for="icon_telephone" >Password</label>
                    </div>
                  </div>
       <center> <button class="btn waves-effect waves-light orange pulse"  v-on:click="login()">Log in
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
#log{
    background-color:white;
    text-emphasis-color: white;
}
    #login {
      /* width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;*padding: */
        position: absolute;
     left: 25%; 
     width: 50%;
      z-index: 3;
      opacity: 0.8;
      height: 100%;
      background-color:white;
      font-size: 50px;
    }

    .fullpantalla{
       position: absolute;
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    margin-left:0%;
     z-index: 1;
     height: 100%;
  
}
fullscream{
 height: 100%;

}

</style>