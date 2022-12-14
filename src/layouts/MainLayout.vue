<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          TecNMPlant
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

export const linksList = [
  {
    title: 'Home',
    caption: 'Volver al inicio',
    icon: 'las la-home',
    link: 'IndexPage'
  },
  {
    title: 'Biblioteca',
    caption: 'Plantas existentes',
    icon: 'las la-book',
    link: 'BibliPage'
  },
  // {
  //   title: 'Guardado',
  //   caption: 'Favoritas',
  //   icon: 'las la-save',
  //   link: 'GuardPage'
  // },
  // {
  //   title: 'Notificaciones',
  //   caption: 'Nuevas noticias',
  //   icon: 'las la-bell',
  //   link: 'NotifiPage'
  // },
  {
    title: 'Acerca de',
    caption: 'Informacion de la aplicacion.',
    icon: 'las la-exclamation-circle',
    link: 'AcercaPage'
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'las la-graduation-cap',
    link: 'https://quasar.dev'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    // return {
    //   linksList,
    //   leftDrawerOpen,
    //   toggleLeftDrawer () {
    //     leftDrawerOpen.value = !leftDrawerOpen.value
    //   }
    // }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
