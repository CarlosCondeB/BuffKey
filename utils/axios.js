
try {
    const response = await axios.get('http://localhost:3000/categorias');
    const data = response.data;

    const listaCategoria = document.getElementById('listaCategoria');
      
    data.forEach((item) => {
        const listItem = document.createElement('li');
      
        const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'option';
            radio.id = item.idCategoria;
            radio.value = item.idCategoria;
            radio.checked = item.nombreCategoria === 'Carnes'

        const label = document.createElement('label');
            label.htmlFor = item.idCategoria;
            label.textContent = item.nombreCategoria;
      
        listItem.appendChild(radio);
        listItem.appendChild(label);
        listaCategoria.appendChild(listItem);
    });

} catch (error) {
        console.error(error);
}

try {
    const response = await axios.get('http://localhost:3000/proveedores/nombres');
    const data = response.data;
    console.log(data);
} catch (error) {
    
}