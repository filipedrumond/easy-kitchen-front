<template>
    <div id="app" :class="tema">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            tema: ""
        };
    },
    created: function() {
        this.tema = this.$session.get("dadosUsuario").tema || "default";
    }
};
</script>

<style lang="scss">
* {
    font-family: "Roboto", sans-serif;
}
</style>
