// emulates fetching data from server asynchronously
const getDataFromServer = async () => { //Aquí se está cogiendo los arrays de datos para las dos gráficas.
  // area chart
  const profits = Array.from({ length: 30 }, () => //length 30 es porque necesita rellenar 30 datos. Hay 30 etiquetas en la gráfica.
    Math.floor(Math.random() * 40)
  );
  // stacked bar chart
  const web = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx * 4)
  );
  const social = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx * 2)
  );
  const other = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx)
  );
  // fake timeout (Cosas del getDataFromServer real, que hasta que no le das el timeout no sale.)
  await new Promise((resolve) => setTimeout(resolve, 2000)); //Esta fila no tocarla.
  return { profits, web, social, other }; //Actualizar según nombres de variables que metamos arriba.
};

const reset = () => {
  areaChart && areaChart.updateSeries([]); //Borra datos(?). Tampoco tocar nada. Solamente actualizar con los nombres de los archivos .js que metamos. 
  stackedBarChart && stackedBarChart.updateSeries([]);
  // A partir de aquí no tocar.
  clearInterval(updateInterval);
  updateInterval = setInterval(async () => {
    update();
  }, 30000);
};

const update = async () => {
  document.getElementById("navbar-loader").classList.remove("d-none"); //Esto es el timer de molongo de arriba.
  const response = await getDataFromServer();
  //Aquí actualizar con el nombre de los archivos .js de las gráficas y las variables que les asignemos.
  areaChart &&
    areaChart.updateSeries([{ name: "Profits", data: response.profits }]);
  stackedBarChart &&
    stackedBarChart.updateSeries([
      { name: "Web", data: response.web },
      { name: "Social", data: response.social },
      { name: "Other", data: response.other },
    ]);
    //A partir de aquí no tocar. Hay que ver solamente qué es lo de navbar-loader. Pero si C&P con lo de arriba, debería funcionar.
  updateLastSyncTime && updateLastSyncTime();
  document.getElementById("navbar-loader").classList.add("d-none");
};

document.addEventListener("DOMContentLoaded", async () => {
  update();
});

updateInterval = setInterval(async () => {
  update();
}, 30000);
