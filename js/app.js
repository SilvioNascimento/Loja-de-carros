function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return 
    }


    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = '';

    let titulo = '';
    let marca = '';
    let anoLancamento = '';
    let descricao = '';
    let preco = '';

    for(let carro of carros) {
        titulo = carro.titulo.toLowerCase();
        marca = carro.marca.toLowerCase();
        anoLancamento = carro.anoLancamento;
        descricao = carro.descricao.toLowerCase();

        if(titulo.includes(campoPesquisa) || marca.includes(campoPesquisa) || anoLancamento === Number(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${carro.titulo}</a>
                </h2>
                <img src=${carro.imagem}>
                <p class="marca-carro">Marca: ${carro.marca}</p>
                <p class="ano-lancamento-carro">Ano de lançamento: ${carro.anoLancamento}</p>
                <p class="descricao-carro">Descrição: ${carro.descricao}</p>
                <p class="preco-carro">Preço: ${carro.preco}</p>
            </div>
            `
        }

    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o modelo, ano de lancamento ou a marca do carro</p>"
    }

    section.innerHTML = resultados;
}