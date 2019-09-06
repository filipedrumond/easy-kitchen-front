<template>
    <div class="logout">
    </div>
</template>

<script>
export default {
    name: "Logout",
    data() {
        return {};
    },
    created(){
        if(this.$session.id()){
            this.$session.destroy();
        }
        window.location.replace(this.defaultPath);
    },
};
</script>

<style lang='scss'>
</style>
