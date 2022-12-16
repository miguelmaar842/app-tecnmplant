<template>
  <q-page class="flex flex-center">
    <div class="container-fluid">
      <div class="q-pa-md">
        <q-table
        grid
        card-class="bg-primary text-white"
        title="Plantas"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>


      <!-- <header class="header">
        <label for="">
          Type planta nombre or id:
          <input type="text" nombre="" id="" v-model="plantaid">
          <button
          class="buscarplanta"
          @click="buscarplanta"
          >
          Buscar planta
          </button>
        </label>
      </header>
      <main
      class="main"
      v-if="object.entries(plantaData).length > 0"
      >
        <section class="PlnatasCard">
          <div class="imagen">
            <h1 class="Plantanombre">planta</h1>
            <img src="" alt="plantas de todo tipo">
          </div>
          <ul class="nombre_cientifico">
            <h2>
              cientifico:
            </h2>
            <li>
              <span></span>
            </li>
          </ul>
          <ul class="descripcion">
            <h2>
              Descripcion:
            </h2>
            <li>
                <span></span>
            </li>
          </ul>
        </section>
      </main> -->
      <!-- <div class="q-pa-md">
        <q-table
          title="Plantas"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
      </div> -->
      <!-- <div class="row q-mb-md justify-center"> -->
        <!-- <span class="text-h4">BibliPage</span> -->
        <!-- <div class="row row justify-around full-width">
          <q-img :src="imagen" width="250px" />
        </div>
        <div class="row row justify-around full-width">
          <h2>{{ name }}</h2>
        </div>
        <div class="row justify-around full-width">
          <q-input v-model="search" label="numero de planta"/>
          <q-btn
          color="primary"
          label="Buscar."
          :size="xs"
          @click="getPlants()"
          />
        </div>
        <div class="row justify-between absolute full-width container-arrows">
        </div> -->
      <!-- </div> -->
    </div>
  </q-page>
</template>

<script>
// import {plantaapi} from "@/api/plantaapi"
//import { preFetch } from "quasar/wrappers"
import { defineComponent } from 'vue'
//import ajax from './components/ajax.vue'

export default defineComponent({
  name: 'BibliPage',

  data(){
    return{
    columns: [
      {
        name: 'id',
        required: true,
        label: 'ID',
        align: 'id',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'name',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'sname',
        required: true,
        label: 'Nombre Cientifico',
        align: 'sname',
        field: row => row.sname,
        format: val => `${val}`,
        sortable: true
      },
      {
        name: 'description',
        required: true,
        label: 'Descripcion',
        align: 'description',
        field: row => row.description,
        format: val => `${val}`,
        sortable: true
      },
      // {
      //   name: 'img',
      //   required: true,
      //   label: 'Imagen',
      //   align: 'img',
      //   field: row => row.img,
      //   format: val => `${val}`,
      //   sortable: true
      // },
    ],
    rows:[],
    }
  },
  mounted(){
    this.getRows()
  },
  methods:{
    getRows(){
      this.$axios
      .get('https://my-json-server.typicode.com/miguelmaar842/false-api/plantas')
      .then(res=>{
        this.rows = res.data
      })
      .catch(e=>{
        console.log(e)
      })
    }
  }


  // data(){
  //   return{
  //     columns:[
  //       {
  //         name: 'id',
  //         required: true,
  //         label: 'id',
  //         align: 'left',
  //         field: 'id',
  //         sortable: true
  //       },
  //       {
  //         name: 'name',
  //         required: true,
  //         label: 'name',
  //         align: 'left',
  //         field: 'name',
  //         sortable: true
  //       },
  //       {
  //         name: 'sname',
  //         required: true,
  //         label: 'sname',
  //         align: 'left',
  //         field: 'sname',
  //         sortable: true
  //       },
  //       {
  //         name: 'img',
  //         required: true,
  //         label: 'img',
  //         align: 'left',
  //         field: 'img',
  //         sortable: true
  //       },
  //       {
  //       name: 'description',
  //         required: true,
  //         label: 'description',
  //         align: 'left',
  //         field: 'description',
  //         sortable: true
  //       },
  //     ],
  //     rows:[],
  //   }
  // },
  // mounted(){
  //   this.getRows()
  // },
  // methods:{
  //   getRows(){
  //     this.$axios
  //     .get('https://my-json-server.typicode.com/miguelmaar842/false-api/plantas')
  //     .then(res=>{
  //       this.rows = res.data
  //     })
  //     .catch(e=>{
  //       console.log(e)
  //     })
  //   }
  // }
})
</script>
