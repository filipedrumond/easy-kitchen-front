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
            {{ $session.getAll() }}
        </div>
    </div>
</template>

<script>
import { log } from "util";
export default {
    name: "HelloWorld",
    data() {
        return {
            emailInput: "filipe.dp@outlook.com",
            senhaInput: "123",
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
            console.log(response);
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
                    this.$session.set("dadosUsuario", response.body);
                    this.SimpleConfirms.success();
                    console.log("Logado como:" + response.body.nome);
                },
                response => {
                    this.SimpleAlerts.error();
                }
            );
        }
    }
};
</script>

<style lang='scss'>
.login {
    .teste {
        border-color: 2cm;
    }
}
</style>
