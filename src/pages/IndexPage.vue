<template>
  <q-page class="flex flex-center">
    <div class="container-fluid">
      <img src="../img/boletin_3.jpg" class="img-fluid img1" alt="">
      <div class="row q-mb-md justify-center">
        <span class="text-h4">¿Que es TecNMPlant?</span>
      </div>
      <div>
        <p class="col-12 col-sm-6 col-md-3">
          <span class="text-body1">Es una Herramienta orientada a el área de agronomía la cual fue pensada para los nuevos egresados a la carrera de ingeniería en agronomía, este funciona básicamente como una enciclopedia la cual tiene información de plantas.</span>
        </p>
        <!-- <div class="q-pa-md q-gutter-sm">
          <q-img
          :src="url"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
          />
        </div> -->
        <!-- <img src="../img/boletin_3.jpg" class="rounded mx-auto d-block justify-center" alt="..."> -->
      </div>
      <div class="row q-mb-md justify-center">
        <span class="text-h4">Propósito de esta herramienta.</span>
      </div>
      <div>
        <p class="col-12 col-sm-6 col-md-3">
          <span class="text-body1">Este surgió con el propósito de mejorar el proceso de aprendizaje de los alumnos egresados en el primer semestre de la carrera de ingeniería en agronomía, a través de un sitio que hace uso de la información sobre los cultivos que maneja el área de agronomía dentro de la institución, implementando la enseñanza de manera digital ayudando a los estudiantes a recabar información de las plantaciones que mas se utilizan para sus prácticas.</span>
        </p>
      </div>
    </div>
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
