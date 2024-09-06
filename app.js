
const section = document.getElementById("resultados-pesquisa");

const search = () => {
    let resultados = ''
    let input = document.getElementById("input-search")
    input = input.value.toLowerCase()
    if (!input) {
        alert('Digite um termo no campo de pesquisa!')
        return
    }  
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(input) || dado.descricao.toLowerCase().includes(input) || dado.tags.toLowerCase().includes(input)) {
        resultados += 
        `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
        } 
        if (!resultados) {
            resultados = `<p>Não houve resultado de pesquisa para o termo "<strong>${input}</strong>"</p>`
        }
    } 
    section.innerHTML = resultados
}


/* const search = () => {
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
} */