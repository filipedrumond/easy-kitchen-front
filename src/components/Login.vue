<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-3">
                <div class="form-group">
                    <label class="" for="email">Email</label>
                    <input
                        class="form-control"
                        id="email"
                        type="text"
                        v-model="emailInput"
                    />
                </div>
                <div class="form-group">
                    <label class="" for="senha">Senha</label>
                    <input
                        class="form-control"
                        id="senha"
                        type="text"
                        v-model="senhaInput"
                    />
                </div>
                <button class="btn btn-block btn-success" @click="btnLogin()">
                    Entrar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            emailInput: "",
            senhaInput: "",
            autoFill: true
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
                    if(response.body[0].tema){
                        $("#app").addClass(response.body[0].tema);
                    }
                    this.$router.push({ path: "/" });
                },
                response => {
                    this.SimpleAlerts.error({ title: "O BANCO MORREU" });
                }
            );
        }
    },
    created() {
        if (this.autoFill) {
            this.emailInput = "filipe.dp@outlook.com";
            this.senhaInput = "1234";
        }
    }
};
</script>

<style lang='scss'>
</style>
