<template>
    <div class="login">
        <div class="teste">
            <input type="text" v-model="emailInput" />
            <input type="text" v-model="senhaInput" />
            <button class="btn btn-success" @click="btnLogin()">FFF</button>
        </div>
        <div class="debug">
            DEBUG :
            {{ emailInput }}
            {{ senhaInput }}
        </div>
        <br />
        <div class="debug">
            {{}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            emailInput: "filipe.dp@outlook.com",
            senhaInput: "1234",
            name: ""
        };
    },
    methods: {
        btnLogin: function() {
            let response = this.reqLogin(
                this.emailInput,
                this.senhaInput,
                function() {}
            );
        },
        reqLogin: function(usuario, senha) {
            let url = `${this.db_url}usuarios?email=${usuario}&senha=${senha}`;
            var VueXX = this;
            this.$http.get(url).then(
                response => {
                    if (response.body.length !== 1) {
                        this.SimpleAlerts.error({
                            title: "Erro ao logar",
                            text: "Usuario ou senha inválidos"
                        });
                        return;
                    }
                    this.$session.set("dadosUsuario", response.body[0]);
                    this.$router.push({ path: "/" });
                },
                response => {
                    this.SimpleAlerts.error({ title: "O BANCO MORREU" });
                }
            );
        }
    },
    created() {}
};
</script>

<style lang='scss'>
</style>
