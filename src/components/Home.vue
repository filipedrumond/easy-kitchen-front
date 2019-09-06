<template>
    <div class="home">
        BEM VINDO {{$session.get("dadosUsuario").nome}}
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    },
    created(){
        if(!this.$session.id()){
            window.location.replace(this.defaultPath+"login");
        }
    },
};
</script>

<style lang='scss'>
</style>
