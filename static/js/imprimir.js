const { jsPDF } = window.jspdf;
const autoTable = window.jspdf_autotable;
const resultados = document.querySelector("#resultados")
const visualizador = document.querySelector("#visualizar")
const frame = document.querySelector("#frame");
//const logo = new Image()
//logo.src = "../imagenes/logo.png"
/*function alfa(){
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
};*/

function construccion(previsualizar) {
    var estructura = {};
    estructura.doctor = ["NOMBRES Y APELLIDOS: Ronald Gutierrez Manco", "CEP: 58496", "TELEFONO: 589472516", "ESPECIALIDAD: Cirujano cardiovascular"]
    estructura.fecha = new Date(Date.now())
    estructura.paciente_datos = ["NOMBRES Y APELLIDOS: Salomón Domingo Ignacio Quispe", "EDAD: 28", "GENERO: MASCULINO"]
    generatePDF(estructura, previsualizar)
    return;
};
function generatePDF(valores, preview) {
    const doc = new jsPDF('p', 'pt', 'letter');
    //doc.addImage(logo,80,30)
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold");
    var docinicio = 60
    doc.text("DOCTOR:", 240, docinicio)
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal");
    docinicio += 20
    for (var i = 0; i < 4; i++) {
        doc.text(valores.doctor[i], 240, docinicio)
        docinicio = docinicio + 20
    }
    doc.text(valores.fecha.toString(), 240, docinicio)
    docinicio = docinicio + 40
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold");
    doc.text("PACIENTE:", 40, docinicio)
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    docinicio = docinicio + 20
    for (var i = 0; i < 3; i++) {
        doc.text(valores.paciente_datos[i], 40, docinicio)
        docinicio = docinicio + 20
    }
    doc.autoTable({
        html: '#resultados',
        valign: 'middle',
        margin: { top: docinicio, bottom: 20 },
        Padding: { top: 10, right: 10, bottom: 10, left: 10 }
    })
    //if (preview) {
    // frame.src = doc.output("bloburl");
    // return;
    //}
    doc.save("receta.pdf");
};
