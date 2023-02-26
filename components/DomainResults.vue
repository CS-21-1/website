<template>
    <v-row>
        <v-col class="col-12 col-md-6 col-lg-6">
            <v-card elevation="0">
                <v-list dense>
                    <v-list-item>
                        <h4>Інформація про домен</h4>
                    </v-list-item>
                    <!-- 
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item> -->

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Країна реєстранта</v-list-item-title>
                            <div style="display: flex; gap: 0.5em; align-items: center; margin-top: 0.4em;">
                                <v-avatar color="primary" size="36">{{ registrant_country }}</v-avatar>
                                <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col class="col-12 col-md-6 col-lg-6">
            <v-card elevation="0">
                <v-list dense>
                    <v-list-item>
                        <h4>Фейкові факти на сайті</h4>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Two-line item</v-list-item-title>
                            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title>Three-line item</v-list-item-title>
                            <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                consectetur adipiscing elit.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-card elevation="0">
                <v-list class="mt-4" dense>
                    <v-list-item>
                        <h4>Коментарі користувачів про домен</h4>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Two-line item</v-list-item-title>
                            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title>Three-line item</v-list-item-title>
                            <v-list-item-subtitle>
                                Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                consectetur adipiscing elit.
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
const api = require("~/api.cs-21-1.space.json");
export default {
    data() {
        return {
            registrant_country: null
        }
    },
    async created() {
        // this.registrant_country = await this.$axios.get("https://api.cs-21-1.space/websites/18/");
        this.registrant_country = api.whois["whois.verisign-grs.com"]
        console.log(await this.registrant_country);
    }
}
</script>