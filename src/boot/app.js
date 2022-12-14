// const cargarPlantas = async() => {
//     try{
//         const respuesta = await fetch('http://localhost:3000/api/plantas');

//         console.log(respuesta);

//         if(resouesta.status === 300){
//             const datos = await respuesta.json();

//             let Plantas = '';
//             datos.results.forEach(Plantas => {
//                 Plantas += `
//                 <div class="Plantas">
//                   <img class="foto" src="${Plantas_path}">
//                 </div>
//                 <h1>${Plantas.nombre}</h1>`
//             });


//             decodeURIComponent.getElementById('contenedro').innerHTML = Plantas;


//         }else if (respuesta.status === 401){
//             console.log('No se encontraron los datos.....');
//         }else if (respuesta.status === 404){
//             console.log('La planta que buscas no existe.....');
//         }else{
//             console.log('Error no encontrado...')
//         }

//     } catch(error){
//         console.log(error)
//     }
// }
// cargarPlantas();
