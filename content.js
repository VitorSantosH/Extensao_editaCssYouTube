window.addEventListener("load", () => {
  try {
    // Seleciona todos os elementos ytd-rich-item-renderer
    const elements = document.querySelectorAll('ytd-rich-item-renderer[rendered-from-rich-grid]');
    
    elements.forEach(element => {
      // Aplica os estilos desejados
      element.style.maxWidth = '20vw';
      element.style.minWidth = '300px';
      console.log(element);
    });
  } catch (error) {
    console.log(error);
  }

  console.log("aqui");
});
