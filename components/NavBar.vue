<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-app-bar :style="{ background: $vuetify.theme.themes.light.navbar }" fixed elevation="0" class="navbar"
            height="65">
            <v-container>
                <v-row style="height: 100% !important; display: flex; align-items: center;">
                    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-app-bar-nav-icon class="d-block d-sm-none" dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                    <div class="d-none d-sm-flex">
                        <div v-for="button in buttons" :key="button">
                            <v-btn :href="button.link" v-if="button.type === 'plain'" :class="button.class"
                                :color="button.color" plain target="_blank">
                                {{ button.text }}
                            </v-btn>
                            <v-btn :href="button.link" v-if="button.type === 'outlined'" :class="button.class"
                                :color="button.color" outlined target="_blank">
                                {{ button.text }}
                            </v-btn>
                        </div>
                    </div>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed bottom temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <a style="text-decoration: none;" v-for="button in buttons" :href="button.link" :key="button"
                        target="_blank">
                        <v-list-item>
                            <v-list-item-title>{{ button.text }}</v-list-item-title>
                        </v-list-item>
                    </a>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>
<script>
export default {
    name: "NavBar",
    data() {
        return {
            title: "CS-21-1",
            buttons: [
                {
                    type: "plain",
                    color: "grey",
                    class: null,
                    text: "TELEGRAM BOT",
                    link: "https://t.me/CS_21_FactCheck_bot"
                },
                {
                    type: "outlined",
                    color: "white",
                    class: "ml-4",
                    text: "API DOCS",
                    link: "https://api.cs-21-1.space/docs"
                }
            ],
            drawer: false,
            group: null
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    }
}
</script>
<style lang="scss">
.navbar {
    border-bottom: 0.2em solid white !important;
}
</style>