document.getElementById("p4").style.display ="none";
document.getElementById("p2").style.display ="none";
document.getElementById("p1").style.display ="none";
document.getElementById("n2").style.display ="none";
document.getElementById("n3").style.display ="none";
document.getElementById("n4").style.display ="none";
let answer = 0;
function fun01(){
  question.innerHTML = "週1日以上持ち運びたい"
};

function fun02(){

  question.innerHTML = "1日2時間以上使いたい"
};
function fun03(){
  question.innerHTML = "動画や画像をたくさん保存したい"
};
function fun04(){
  document.getElementById("p8").style.display = 'none';
  document.getElementById("n1").style.display = 'none';
  document.getElementById("p1").style.display = 'inline';
  document.getElementById("n4").style.display = 'inline';
};
function fun05(){
  document.getElementById("p8").style.display = 'none';
  document.getElementById("n1").style.display = 'none';
  document.getElementById("p4").style.display = 'inline';
  document.getElementById("n2").style.display = 'inline';
}
function fun06(){
  document.getElementById("p4").style.display = 'none';
  document.getElementById("n2").style.display = 'none';
  document.getElementById("p2").style.display = 'inline';
  document.getElementById("n3").style.display = 'inline';
};
function fun07(){
  document.getElementById("p2").style.display = 'none';
  document.getElementById("n3").style.display = 'none';
  document.getElementById("p1").style.display = 'inline';
  document.getElementById("n4").style.display = 'inline';
};
function fun08(){
  answer +=4
};
function fun09(){
  answer +=2
};
function fun10(){
  answer  +=1
};
function fun11(){
  answer +=8
};
function an01(){
  recommend.innerHTML ="あなたにおすすめのノートパソコンは";

  if (answer === 9){
NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001476594/'>GALLERIA RM7C-R35T</a>";
  }else if (answer === 8){
NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001503028/'>G-Tune E5-165-M16-KK(軽さ重視)</a> <br>  <a href='https://kakaku.com/item/J0000038561/'>Dell G15(価格重視)</a>  <br> <a href='https://kakaku.com/item/K0001450011/'>Legion 570i(性能重視)</a>";
  }else if (answer === 7){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001468691/'>ENVY x360 13-bf</a>";
  }else if (answer === 6){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001508620/'>Vivobook15</a>";    
  }else if (answer === 5 ||answer === 3){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001513759/spec/#tab'>IdeaPad Flex5Gen8(価格、性能重視)</a><br><a href='https://kakaku.com/item/K0001467250/spec/#tab'>dynabook SZ/MV(軽さ、バッテリー持ち重視)</a>";
  }else if (answer === 4){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/J0000038549/spec/#tab'>Inspiron16</a>";
  }else if (answer === 2){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001517403/'>Vostro3525</a>";
  }else if (answer === 1){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001394801/'>IdeaPad Slim550</a>";
  }else if (answer === 0){
    NotePc.innerHTML ="<a href='https://kakaku.com/item/K0001517402/'>Vostro3525</a>";
  }
  you.innerHTML ="です！";
};