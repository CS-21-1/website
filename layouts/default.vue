<template>
  <v-app light :style="{background: $vuetify.theme.themes.light.background}">
    <NavBar />
    <v-main>
      <div>
        <Nuxt />
      </div>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
