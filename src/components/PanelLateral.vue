<template>
    <div class ="padre red">
        <!--INICIO DEL MI CODIGO-->
             <div class="cols 8 indigo lighten-3 hijo">
               <center><p> OFERTAS</p></center>
             </div>
        <!--FIN DE MI CODIGO-->
    </div>
</template>

<script>
import{mapState,mapMutations} from 'vuex';
export default {
    name:'Panel',
}
</script>
<style scoped>
    .padre{
        height: 100%;
        overflow: auto;
    }
    .hijo{
        height: 100%;
    }
</style>
