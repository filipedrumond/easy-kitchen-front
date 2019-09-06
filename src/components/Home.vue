<template>
    <div class="home">
        BEM VINDO {{ usuario }}
        <br />
        {{ $session.get("dadosUsuario") }}
        <H1>HOME</H1>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            usuario: ""
        };
    },
    created: function() {
        this.usuario = this.$session.get("dadosUsuario").nome;
    }
};
</script>

<style lang='scss'>
</style>
