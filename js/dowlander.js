const { jsPDF } = window.jspdf;
function imprimir(){
let header='curriculum'
const doc = new jsPDF();
doc.text(build(header), 10, 10);
doc.save("c.v-Juan-Daniel.pdf");
}

function build(header){
  return `${header}`
   
}