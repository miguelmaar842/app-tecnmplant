<template>
  <q-page class="flex flex-center">
    <div class="container-fluid">

      <div class="q-pa-md">
        <q-table
          title="Plantas"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
      </div>


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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BibliPage',

  data(){
    return{
      columns:[
        {
          name: 'nombre',
          required: true,
          label: 'nombre',
          align: 'left',
          field: 'nombre',
          sortable: true
        },
        {
          name: 'nombre_cientifico',
          required: true,
          label: 'nombre_cientifico',
          align: 'left',
          field: 'nombre_cientifico',
          sortable: true
        },
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
      .get('http://localhost:3000/api/plantas/')
      .then(res=>{
        this.rows = res.data
      })
      .catch(e=>{
        console.log(e)
      })
    }
  }

})
</script>
