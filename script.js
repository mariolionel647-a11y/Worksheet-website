
let images=['ayam.jpg', 'babi.jpg', 'domba.jpg', 'elang.jpg', 'flamingo.jpg', 'hiu.jpg', 'ikan.jpg', 'jerapah.jpg', 'kura.jpg'];
let idx=0;

function openViewer(src){
 idx=images.indexOf(src);
 document.getElementById('viewImg').src='images/'+src;
 document.getElementById('viewer').style.display='flex';
}

function closeViewer(){
 document.getElementById('viewer').style.display='none';
}

function nextImg(){
 idx=(idx+1)%images.length;
 document.getElementById('viewImg').src='images/'+images[idx];
}

function prevImg(){
 idx=(idx-1+images.length)%images.length;
 document.getElementById('viewImg').src='images/'+images[idx];
}
