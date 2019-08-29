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
    </div>
</template>

<script>
import { log } from "util";
export default {
    name: "HelloWorld",
    data() {
        return {
            emailInput: "filipe.dp@outlook.com",
            senhaInput: "123"
        };
    },
    methods: {
        btnLogin: function() {
            this.reqLogin(this.emailInput, this.senhaInput);
        },
        reqLogin: function(usuario, senha) {
            let url = `${this.db_url}usuarios?email=${usuario}&senha=${senha}`;
            this.$http.get(url).then(
                response => {
                    if (response.body.length !== 1) {
                        alert("ERRO");
                        return;
                    }
                    this.$session.set(dadosUsuario, response.body);
                },
                response => {
                    window.alert("ERRO");
                }
            );
        }
    }
};
</script>

<style lang='scss'>
.login {
    .teste {
        background-color: white;
    }
}
</style>
