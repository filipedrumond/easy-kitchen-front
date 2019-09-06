<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    beforeCreated() {
        this.$session.start();
    }
};
</script>

<style lang="scss">
</style>
