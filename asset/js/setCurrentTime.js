function updateLastSyncTime() {
    var currentdate = new Date();
    var datetime =
      "Última sincronización: " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    document.getElementById("navbar-time").innerHTML = datetime; //navbar-time es el ID que hay en el HTML.
}
updateLastSyncTime();
