<template>
    <div class="restaurante container">
        <h2>{{ restaurante }} ID: {{ idRestaurante }}</h2>
        <div class="row" v-for="item in cardapio" v-bind:key="item.id">
            <div class="col-2">
                {{ item.nome }}
            </div>
            <div class="col-2">
                {{ item.valor }}
            </div>
            <div class="col-2">
                <span
                    v-for="ingrediente in item.ingredientes"
                    v-bind:key="ingrediente.id"
                >
                    {{ ingrediente }},
                </span>
            </div>
            <div class="col-3">
                <img
                    :src="'data:image/png;base64,' + item.imgs[0]"
                    alt="Imagem do prato"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Restaurante",
    data() {
        return {
            cardapio: [{ imgs: ["img"] }],
            restaurante: "EZKitchen",
            dataRequest: {},
            idRestaurante: 0
        };
    },
    beforeCreate: function() {},
    created: function() {
        this.idRestaurante = this.$route.query.resturante || 1;
        this.retauranteGet(this.idRestaurante);
    },
    computed: {},
    methods: {
        retauranteGet: function(id) {
            let url = `${this.db_url}restaurantes/${id}`;
            this.$http.get(url).then(
                response => {
                    console.log(response.body);
                    this.cardapio = response.body.cardapio;
                    this.restaurante = response.body.restaurante;
                    this.dataRequest = response.body;
                },
                response => {
                    this.SimpleAlerts.error({ title: "O BANCO MORREU" });
                }
            );
        }
    }
};
</script>

<style lang='scss'>
</style>
