function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    
    if (isNaN(inputValue)) {
        alert('Por favor ingrese un valor válido.');
        return;
    }

    const litrosPorSegundo = (inputValue * 1000) / (30 * 24 * 3600);
    const litrosPorHora = (inputValue * 1000) / (30 * 24);
    const litrosPorDia = (inputValue * 1000) / 30;

    document.getElementById('litrosPorSegundo').textContent = `Litros/Segundo: ${litrosPorSegundo.toFixed(6)} l/s`;
    document.getElementById('litrosPorHora').textContent = `Litros/Hora: ${litrosPorHora.toFixed(6)} l/h`;
    document.getElementById('litrosPorDia').textContent = `Litros/Día: ${litrosPorDia.toFixed(6)} l/d`;
}
