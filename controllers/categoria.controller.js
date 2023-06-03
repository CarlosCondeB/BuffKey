function generarListaCategoria(data) {
    const listaCategoria = document.getElementById('listaCategoria');
  
    data.forEach(item => {
      const listItem = document.createElement('li');
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'option';
      radio.value = item.idCategoria;
  
      const label = document.createElement('label');
      label.textContent = item.nombreCategoria;
  
      listaCategoria.appendChild(radio);
      listaCategoria.appendChild(label);
      listaCategoria.appendChild(listItem);
    });
}
  

export const listCategory = {
    generarListaCategoria,
};
