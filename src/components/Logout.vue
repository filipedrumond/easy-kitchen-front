<template>
    <div class="logout"></div>
</template>

<script>
export default {
    name: "logout",
    data() {
        return {};
    },
    created: function() {
        this.$session.destroy();
        $("#app").removeClass();
        this.$router.push({ path: "home" });
    }
};
</script>

<style lang='scss'>
</style>
