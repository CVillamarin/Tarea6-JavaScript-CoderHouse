let infoImprimir=document.getElementById("infoImprimir");
infoImprimir.onclick=()=>{
    Swal.fire({
        title: '<strong>Queres saber mas sobre este mundo?</strong>',
        icon: 'info',
        html:
        '<a href="https://www.youtube.com/watch?v=C4HAJ5HLuB4&ab_channel=RinconUtil" target="_blank">Click aca para saber como funciona una impresora 3D</a> ' ,
      });
}
let terminarCompra=document.getElementById("terminarCompra");
terminarCompra.onclick=()=>{
    Swal.fire({
        title: 'Pedido confirmado!',
        text: 'Tus Items llegaran pronto!',
    });
}