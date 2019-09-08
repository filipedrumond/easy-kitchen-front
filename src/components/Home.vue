<template>
    <div class="home container">
        BEM VINDO {{ usuario }}
        <br />
        <button class="btn btn-primary">XXX</button>
        {{ $session.get("dadosUsuario") }}
        <h1 class="text-primary">primary</h1>
        <h1 class="text-secondary">secondary</h1>
        <h1 class="text-success">success</h1>
        <h1 class="text-danger">danger</h1>
        <h1 class="text-warning">warning</h1>
        <h1 class="text-info">info</h1>
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
