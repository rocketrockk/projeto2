function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")
  /* resumindo todo o processo com um único elemento toggle */

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("dark")) {
    // se tiver dark mode, adicionar a imagem dark
    img.setAttribute("src", "./assets/avatar-darklis.png")
    // se não tiver
  } else {
    // então manter a imagem normal
    img.setAttribute("src", "./assets/AvatarLIS.png")
  }

  if (html.classList.contains("dark")) {
    img.setAttribute(
      "alt",
      "arco iris com algumas nuvens escrito lisbella e babykids com fundo azul escuro"
    )
  } else {
    img.setAttribute(
      "alt",
      "arco iris com algumas nuvens escrito lisbella e babykids"
    )
  }
}
