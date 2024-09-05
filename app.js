let input = document.getElementById("input-search")
const section = document.getElementById("resultados-pesquisa");

let resultados = ''

/* for (let dado of dados) {
    
    resultados += 
    `
    <div class="item-resultado">
    <h2>${dado.titulo}</h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
    `
} */

section.innerHTML = resultados

const search = () => {
    let nomeMin = input.value.toLowerCase()
    let filtrado = dados.filter((dado) => {
     return dado.titulo.toLowerCase() === nomeMin
    })
    console.log(filtrado)
    section.innerHTML = `
    <div class="item-resultado">
    <h2>${filtrado[0].titulo}</h2>
    <p class="descricao-meta">${filtrado[0].descricao}</p>
    <a href=${filtrado[0].link} target="_blank">Mais informações</a>
    </div>
    `
}