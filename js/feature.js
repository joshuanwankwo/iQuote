let menu = document.querySelectorAll('ul > li');
let text = document.getElementById('text');



// let backBtn = document.getElementsByClassName('backBtn');
// let rdmBtn = document.getElementsByClassName('rdmBtn');
// let fwdBtn = document.getElementsByClassName('forwardBtn');
// let dwnldBtn = document.getElementsByClassName('downloadBtn');
// let stBtn = document.getElementsByClassName('styleBtn');
// let bgImageBtn = document.getElementsByClassName('bgImageBtn');
// let cardColorBtn = document.getElementsByClassName('cardColorBtn');
//  console.log(document.getElementById('backBtn').innerHTML);
 
function showbackDesc(){
    document.getElementById('backBtn').style.display = 'block';
    document.getElementById('rdmBtn').style.display = 'none';
    document.getElementById('forwardBtn').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('styleBtn').style.display = 'none';
    document.getElementById('bgImageBtn').style.display = 'none';
    document.getElementById('cardColorBtn').style.display = 'none';
}

function showRdmDesc(){
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('rdmBtn').style.display = 'block';
    document.getElementById('forwardBtn').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('styleBtn').style.display = 'none';
    document.getElementById('bgImageBtn').style.display = 'none';
    document.getElementById('cardColorBtn').style.display = 'none';
}

function showForwardDesc(){
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('rdmBtn').style.display = 'none';
    document.getElementById('forwardBtn').style.display = 'block';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('styleBtn').style.display = 'none';
    document.getElementById('bgImageBtn').style.display = 'none';
    document.getElementById('cardColorBtn').style.display = 'none';
}

function showDownloadDesc(){
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('rdmBtn').style.display = 'none';
    document.getElementById('forwardBtn').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'block';
    document.getElementById('styleBtn').style.display = 'none';
    document.getElementById('bgImageBtn').style.display = 'none';
    document.getElementById('cardColorBtn').style.display = 'none';
}

function showFontDesc(){
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('rdmBtn').style.display = 'none';
    document.getElementById('forwardBtn').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('styleBtn').style.display = 'block';
    document.getElementById('bgImageBtn').style.display = 'none';
    document.getElementById('cardColorBtn').style.display = 'none';
}

function showBgImgDesc(){
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('rdmBtn').style.display = 'none';
    document.getElementById('forwardBtn').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('styleBtn').style.display = 'none';
    document.getElementById('bgImageBtn').style.display = 'block';
    document.getElementById('cardColorBtn').style.display = 'none';
}


function showCardColorDesc(){
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('rdmBtn').style.display = 'none';
    document.getElementById('forwardBtn').style.display = 'none';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('styleBtn').style.display = 'none';
    document.getElementById('bgImageBtn').style.display = 'none';
    document.getElementById('cardColorBtn').style.display = 'block';
}