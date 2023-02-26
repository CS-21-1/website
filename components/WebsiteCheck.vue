<template>
    <div class="main" :style="{ background: $vuetify.theme.themes.light.background2 }">
        <v-container class="d-flex flex-column align-center col-12 mt-16">
            <h3 class="mt-4">Перевірка домену у базі даних CS-21-1</h3>
            <v-col class="col-12 col-md-8 col-lg-6 mt-4 mb-0">
                <v-text-field background-color="background3" filled dense rounded height="50" dark hide-details placeholder="Введіть домен (без назви протоколу). Наприклад: google.com"></v-text-field>
            </v-col>
            <v-col class="col-12 col-md-4 col-lg-3">
                <v-btn rounded color="primary" width="100%" height="50" dark>
                    <v-icon class="mr-1" size="18">
                        mdi-order-bool-ascending-variant
                    </v-icon>
                    Перевірка
                </v-btn>
            </v-col>
        </v-container>  
    </div>
</template>
<script>
export default {
    name: "WebsiteCheck"
}
</script>
<style scoped lang="scss">
.main {
    width: 100%;
    padding-top: 5em;
    padding-bottom: 8em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;
}
</style>