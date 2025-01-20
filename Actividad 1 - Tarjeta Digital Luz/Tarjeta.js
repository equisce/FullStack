function mostrarDatoCurioso() {
    const dato = document.getElementById('dato-curioso');
    if (dato.style.display === 'none') {
        dato.style.display = 'block';
    } else {
        dato.style.display = 'none';
    }
}