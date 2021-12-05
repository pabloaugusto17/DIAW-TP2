//Autenticação de chaves
const cliente_id = "e31f54d8f8f7c49e52dd";
const cliente_secret = "3c6d3fd681537dee29270a4903e8b41ac0183183 ";

//URL padrão de usuário Git
const url = "https://api.github.com/users";


//Função assíncrona para retornar o usuário, ela deve ser assíncrona pois recebe informações da API
async function receber_Usuario(usuario) {

    //Aqui é feita a concatenação para busca na API
    const profile_response = await fetch(`${url}/${usuario}?cliente_id=${cliente_id}&cliente_secret=${cliente_secret} `);
    
    //Transforma as informações recebidas em um Json para sua conseguir manipular seus atributos
    const perfil = profile_response.json();

    //Retorna o perfil
    return perfil;

}

let pesquisa = document.getElementById('botao_pesquisa');

pesquisa.onclick = () => {

    document.getElementById('coluna_informacoes').style.display = 'block';
    document.getElementById('foto_informacoes').style.display = 'block';
    document.getElementById('botao_informacoes').style.display = 'block';
    
    let campo_texto = document.getElementById('input_barra_cima');

    let usuario = receber_Usuario(campo_texto.value);

    let nome = document.getElementById('span_nome');
    let bio = document.getElementById('span_bio');
    let seguidores = document.getElementById('span_seguidores');
    let foto_perfil = document.getElementById('foto_perfil');

    usuario.then(res => nome.innerHTML = res.name);
    usuario.then(res => bio.innerHTML = res.bio);
    usuario.then(res => seguidores.innerHTML = res.followers);
    usuario.then(res => foto_perfil.src = res.avatar_url);

    let botao_perfil = document.getElementById('src_botao');
    let seguidores_url = document.getElementById('seguidores_url');
    let foto_url = document.getElementById('foto_url');

    usuario.then(res => botao_perfil.href = res.html_url);
    usuario.then(res => seguidores_url.href = res.followers_url);
    usuario.then(res => foto_url.href = res.avatar_url);

}

window.onload = () => {

    document.getElementById('coluna_informacoes').style.display = 'none';
    document.getElementById('foto_informacoes').style.display = 'none';
    document.getElementById('botao_informacoes').style.display = 'none';

}