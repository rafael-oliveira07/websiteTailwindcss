var imagens=[document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3'), document.getElementById('img4')]

function clickImg(num){
    for(let i in imagens){
        imagens[i].style.backgroundColor='white'
    }
    if(num==1){
        document.getElementById('imgInicial').style.backgroundImage="url(images/imgBackground/beach.jpg)";
        imagens[0].style.backgroundColor='#ffa40c'
    }else if(num==2){
        document.getElementById('imgInicial').style.backgroundImage="url(images/imgBackground/canyon.jpg)";
        imagens[1].style.backgroundColor='#ffa40c'
    }else if(num==3){
        document.getElementById('imgInicial').style.backgroundImage="url(images/imgBackground/sea.jpg)";
        imagens[2].style.backgroundColor='#ffa40c'
    }else{
        document.getElementById('imgInicial').style.backgroundImage="url(images/imgBackground/mountaineer.jpg)";
        imagens[3].style.backgroundColor='#ffa40c'
    }
}

function login(){
    document.getElementById('fundoLogin').style.display='flex'
}

function fechar(){
    document.getElementById('fundoLogin').style.display='none'
}

var abriu=false
function clickPesquisa(){
    let xPesquisa=document.getElementById('svg2')
    if(abriu==false){
        document.getElementById('pesquisando').style.display='flex'
        xPesquisa.innerHTML='<svg id="svg2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'
        abriu=true
    }else{
        document.getElementById('pesquisando').style.display='none'
        xPesquisa=document.getElementById('svg2')
        xPesquisa.innerHTML='<svg id="svg2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>'
        abriu=false
    }
}

var menuAberto=false
function abrirMenu(){
    let xMenu=document.getElementById('menu')
    if(menuAberto==false){
        document.getElementById('navMenu').style.display='block'
        xMenu.innerHTML='<svg id="menu" class="h-6 text-white cursor-pointer hover:text-yellow-500 md:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'
        menuAberto=true
    }else{
        document.getElementById('navMenu').style.display='none'
        xMenu=document.getElementById('menu')
        xMenu.innerHTML='<svg id="menu" class="h-6 text-white cursor-pointer hover:text-yellow-500 md:hidden" onclick="abrirMenu()" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>'
        menuAberto=false
    }   
}