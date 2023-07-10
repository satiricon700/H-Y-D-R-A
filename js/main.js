let key = '3f4382e5f9864a36a8b79d117146d2a7';
let pais = 'us'
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
let mostrar_noticias = document.getElementById('noticias');


fetch(url).then((resp)  => resp.json()).then(dato =>{
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div = document.createElement('noticias')
        div.innerHTML =   `<br>
              <img style="max-width:800px" src=${numero.urlToImage}></br>
              <h1>${numero.title}</h1>
              <h2>${numero.description}</h2>
              <h3>${numero.url}</h3>`
    })
});