function pesquisar() {
  let section = document.getElementById('resultados-pesquisa')

  let campoPesquisa = document.getElementById('campo-pesquisa').value

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = ''

  let nome = ''

  let descricao = ''

  for (let dados of gems) {
    nome = dados.nome.toLowerCase()
    descricao = dados.descricao.toLowerCase()
    tag = dados.tag.toLowerCase()

    if (!campoPesquisa) {
      section.innerHTML = 'Nada contrado. Digite algo'
      return
    }

    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tag.includes(campoPesquisa)
    ) {
      resultados += `
        <div class="item-resultado">
          <div class="topo">
            <img ${dados.imagem} alt=${dados.nome} />
              <div class="informações">
                <h2>${dados.nome}</h2>
                <p class="descricao-meta"> <strong>Espécie:</strong> ${dados.especie}</p>
                <p class="descricao-meta"> <strong>Arma:</strong> ${dados.arma}</p>
              </div>
          </div>
          <div class="base">
            <p class="descricao-meta">${dados.descricao}</p>
            <a href= ${dados.link} target="_blank" >Saiba Mais</a>
          </div>   
        </div>`
    }
  }

  if (!resultados) {
    section.innerHTML =
      'Desculpe parece que ainda não temos uma Gem com esse nome'
    return
  }

  section.innerHTML = resultados
}
