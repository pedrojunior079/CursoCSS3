function applyColor(){
  var colorInput = document.getElementById("color-input").value;
  
  // verifica se a entrada é um valor hexadecimal valido
  if(/^#[0-9A-Fa-f]{6}$/.test(colorInput)){
    document.body.style.backgroundColor = colorInput;
  }else{
    alert("Digite uma cor Hexadecimal válida!");
  }
}




