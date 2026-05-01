const cores = {
    fire: '#FDDFDF', grass: '#DEFDE0', electric: '#FCF7DE', water: '#DEF3FD',
    ground: '#f4e7da', rock: '#d5d5d4', fairy: '#fceaff', poison: '#98d7a5',
    bug: '#f8d5a3', dragon: '#97b3e6', psychic: '#eaeda1', flying: '#F5F5F5',
    fighting: '#E6E0D4', normal: '#F5F5F5', ice: '#E0FEFD', ghost: '#D7D4E7'
};

async function buscarDados() {
    const input = document.getElementById('pokemonInput');
    const nomeBusca = input.value.trim();
    const cardConteudo = document.getElementById('card-conteudo');
    const msgErro = document.getElementById('msg-erro');
    const loading = document.getElementById('loading');
    const cardBase = document.getElementById('resultado');

    if (!nomeBusca) return;

    msgErro.innerText = "";
    cardConteudo.classList.add('hidden');
    cardConteudo.classList.remove('animar');
    loading.classList.remove('hidden');

    try {
        const resposta = await fetch(`api.php?name=${encodeURIComponent(nomeBusca)}`);
        const dados = await resposta.json();

        loading.classList.add('hidden');

        if (dados.success) {
            document.getElementById('nome').innerText = dados.nome;
            document.getElementById('pokedex-id').innerText = dados.id;
            document.getElementById('tipo').innerText = dados.tipo;
            document.getElementById('peso').innerText = dados.peso;
            document.getElementById('altura').innerText = dados.altura;

            const imgElement = document.getElementById('imagem');
            imgElement.src = dados.imagem;

            const corFundo = cores[dados.tipo.toLowerCase()] || '#ffffff';
            cardBase.style.backgroundColor = corFundo;

            cardConteudo.classList.remove('hidden');
            cardConteudo.classList.add('animar');
        } else {
            cardBase.style.backgroundColor = '#ffffff';
            msgErro.innerText = dados.mensagem;
        }
    } catch (erro) {
        loading.classList.add('hidden');
        msgErro.innerText = "Erro na conexão com o servidor PHP.";
        console.error('Erro:', erro);
    }
}

window.onload = () => buscarDados();