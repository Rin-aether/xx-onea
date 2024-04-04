const quiz =[
  {
  question:'問:足立先生には、年下の奥様がいらっしゃいます。さて、足立先生と奥様は年齢がいくつ離れているでしょうか？',
  answers: ['5歳差','8歳差','12歳差','15歳差'],
  correct:'15歳差',
  studies:'<span>A.15歳差。</span>足立先生には2歳の男の子と0歳の女の子、<br>2人のお子様がいらっしゃいます。女の子の方の<br>夜泣きが凄まじく、大変だそうです。'
  },{
  question:'問: 足立先生は、中学校、高校と続けて同じ部活動に取り組んでいました。さて、その部活動とは次のうちどれでしょう？',
  answers:['サッカー部','陸上部','卓球部','野球部'],
  correct:'陸上部',
  studies:'<span>A.陸上部。</span>足立先生は長距離の選手(5000メートル走)<br>だったそうです。フルマラソンも経験されており、<br>3時間半を切るタイムを記録されたこともあります。'
  },{
  question:'問:中川先生は、登山が好きで富士山にも登ったことがあるそうです。さて、中川先生の「今までに富士山に登った回数」は何回でしょうか？',
  answers: ['2回','5回','8回','12回'],
  correct:'12回',
  studies:'<span>A.12回。</span>最初は奥様に誘われたのがきっかけで、<br>プロポーズも富士山だったそうです。また、家族5人<br>みんなで登ったこともあるといいますから驚きです。'
  },{
  question:'問:中川先生は、フルマラソンも経験され、奥様ともマラソンの大会で出会ったそうです。その大会とは、どこで行われたものだったでしょうか？',
  answers:['東京マラソン','ホノルルマラソン','ベルリンマラソン','ロンドンマラソン'],
  correct:'ホノルルマラソン',
  studies:'<span>A.ホノルルマラソン。</span>ちなみに奥様との挙式はハワイで<br>行い、その後奥様と一緒に走ったそうです。<br>そして2度目のハワイでも、同じように走ったそうです。'
  },{
  question:'問:岩永先生は、プロ野球観戦が好きで、休日はよく見ているそうです。プロ野球チームは多くありますが、岩永先生の好きなチームはどれでしょう？',
  answers:['広島カープ','読売ジャイアンツ','横浜ベイスターズ','阪神タイガース'],
  correct:'横浜ベイスターズ',
  studies:'<span>A.横浜ベイスターズ。</span>今では多忙なため回数は<br>減っていますが、岩永先生が学生の頃には、なんと一年に20試合以上もスタジアムに足を運んだそうです。'
  },{
  question:'問:岩永先生はゲームが大好きです。下の選択肢は、岩永先生の好きなゲームを上げたものですが、この中で1番プレイ時間が長いものはどれでしょう？',
  answers: ['ゼルダの伝説BotW','NiGHTS(ナイツ)','ドラゴンクエスト3','ロマンシングサ・ガ2'],
  correct:'ドラゴンクエスト3',
  studies:'<span>A.ドラゴンクエスト3。</span>岩永先生はRTAも何度か実践<br>しているほどドラクエ3をやりこんでおり、「おそらく<br>プレイ時間は1000時間に達している」とのこと。'
  },{
  question:'問:小泉先生は、コクーンタワーの面白い形に惹かれてHALに来る前は、海外でwebデザイナーをしていました。さて、その場所はどこでしょう？',
  answers:['ロンドン','パリ','フィレンツェ','マドリード'],
  correct:'パリ',
  studies:'<span>A.パリ。</span>あるweb会社の人に提案され、デザイナーと<br>なったそうです。小泉先生は、フランスのwebデザイン<br>コンテストの受賞歴もたくさん持っています。'
  },{
  question:'問:小泉先生は、高校3年間と、卒業後の2年間で、合わせて5年間打ち込んでいたものがあります。さて、それはいったい何でしょう？',
  answers:['野球','サーフィン','バンド','ラグビー'],
  correct:'ラグビー',
  studies:'<span>A.ラグビー。</span>テレビで見たラグビーに感動し、始められた<br>そうです。ちなみに、小泉先生は他の選択肢である野球、<br>バンド、サーフィンも全て経験しています。'
  },{
  question:'問:村上先生は、「あるもの」を見に行った時、それがきっかけでwebの世界に足を踏み入れました。では、そのあるものとは何でしょう？',
  answers:['歌舞伎','人形浄瑠璃','能楽','落語'],
  correct:'歌舞伎',
  studies:'<span>A.歌舞伎。</span>その時見た歌舞伎が美しく、絵を描きました。<br>そして、その描いた絵をたくさんの人に見てもらいたくて、ホームページを作り始めたのが原点だそうです。'
  },{
  question:'問:村上先生は、小学校の頃から演劇に打ち込んでいました。それとは別に、学生時代に好きだったことがあるのですが、それは何でしょう？',
  answers: ['絵を描くこと','スポーツをすること','楽器を弾くこと','写真を撮ること'],
  correct:'絵を描くこと',
  studies:'<span>A.絵を描くこと。</span>村上先生は「ファイブスター物語」「AKIRA」「うしおととら」などの漫画が好きで、同人誌を描き、イベントで販売したこともあるそうです。'
  }
  ];
 const hellodenzin = ['私はＨＡＬオネアの管理人を務めております、\n「電人ＨＡＬ」と申します。以後お見知りおきを…', '早速ですが、あなたの先生方に対する知識…\n試させていただきましょうか。', 'それでは、問題です。']

const quizLenght = quiz.length;//クイズの数（配列に入っている要素数）
let quiznow = 0;
let score =0;
let moveIndex=1;
let once = 0;
let two =0;
let mode =0;
let denzinHal =0;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [];
const $button = document.getElementsByTagName('button');
const $text = document.getElementById('Qtext');
const $denzin = document.getElementById('hal');
//ボタン全消し//
for (let k= 1; k <5; k++) {
  $button[k].style.visibility="hidden";
}
$('#back').hide();
////////シャッフル
while (array.length > 0) {
  n = array.length;
  k = Math.floor(Math.random() * n);
  newArray.push(array[k]);
  array.splice(k, 1);
}
//////////
$button[0].addEventListener('click',(e)=>{
  if(once==0){
  if (denzinHal==0) {
  $denzin.src="images/normal.png";
  $('.nameP').fadeIn(400);}
  $text.innerText =hellodenzin[denzinHal];
  if (denzinHal==1) {
  $('.nameP').fadeOut(400);
  $denzin.src="images/halwhite.png";
  }
  if (denzinHal==2) {
  $denzin.src="images/kewasii.png";
  }
  if (denzinHal==3) {
    once++;
    for (let l= 1; l <5; l++) {
      $button[l].style.visibility="visible";
    }
      $button[0].style.visibility="hidden";
    quizSetup();//定義した関数は呼ばないと出てこない
  }
    denzinHal++;
}});


//////////////クイズの問題文、選択肢をHTMLに反映させる関数////////
const quizSetup = ()=>{
  $text.innerText = '第' + (quiznow+1) + quiz[newArray[quiznow]].question;
  $denzin.src="images/halwhite.png";
  $('#Qtext').removeClass("study");
  //htmlのオブジェクトを取ってくる場合お約束で「＄」をつける。
  let buttonIndex =1;
  while(buttonIndex <5){
    $button[buttonIndex].textContent = quiz[newArray[quiznow]].answers[buttonIndex-1];
    buttonIndex++;
  }
}
const reset = ()=>{
  $button[0].style.visibility="hidden";
  $text.innerText = '第' + (quiznow+1) + quiz[newArray[quiznow]].question;
  $denzin.src="images/halwhite.png";
  $('#back').hide();
}
/////////正誤判定処理////////////
const clickCheck = (e) =>{
  $('#back').hide();
  if( $text.innerText.includes(quiz[newArray[quiznow]].correct)){
    $denzin.src="images/maru.png";
    $text.innerText ='…正解です。\nお見事。';
    score++;
  }else{
    $denzin.src="images/batu.png";
    $text.innerText ='…不正解です。\n存外難しいでしょう？';
  }
  for (let i = 1; i <5; i++) {
    $button[i].style.visibility="hidden";
  }
  $button[0].textContent ='次へ';
  mode=1;
};
/////study処理///
const study = (e) =>{
$text.innerHTML = quiz[newArray[quiznow]].studies;
$('#Qtext').addClass("study");
$denzin.src="images/normal.png";
  mode=2;
  quiznow++;
};
///次の問題に行くか処理/////
const gonext = (e) =>{
  if(quiznow < quizLenght){
    mode=0;
    for(let j= 1; j <5; j++) {
      $button[j].style.visibility="visible";
    }
    $button[0].style.visibility="hidden";
    quizSetup();//問題がまだある
  }else{
  $button[0].style.visibility="collapse";
  result();
  }
};
//結果発表///
const result = (e) =>{
  $('#Qtext').removeClass("study");
  if(score == quizLenght){
    $denzin.src="images/perfect.png";
      $text.innerHTML ='終了です。　…!　素晴らしい…！<span>全問正解</span>でございます！是非とも先生方に話しかけていただき…ここにはない新たな知識を、繋がりを。つかみ取ってみてください。';
  }else if(score == 0){
      $denzin.src="images/0mon.png";
      $text.innerHTML ='終了です。　…。　全問不正解でございます…。<br>次はもう少し頑張ってみましょうか。応援していますので…<br>またのお越しをお待ちしております。';
  }else{
    $denzin.src="images/halwhite.png";
  $text.innerHTML ='終了です。あなたは全'+ quizLenght +'問のうち、<span>'+ score + '問正解</span>しました。<br>次は更に上を目指してみてください。<br>またのお越しをお待ちしております…';
}
};

//クリックされたものに関して何かしたい場合は、その後は(e),「e.target」で書ける。e=event

while(moveIndex < 5){
  $button[moveIndex].addEventListener('click',(e)=>{
  $('#back').fadeIn(200);
  $button[0].style.visibility="visible";
  $button[0].textContent ='ファイナルアンサー';
  $denzin.src="images/kewasii.png";
  const data = e.currentTarget.dataset['index'];
  $text.innerText ='「'+ quiz[newArray[quiznow]].answers[data]+'」…\n《ファイナルアンサー？》';
  two=1;
  });
  moveIndex++;
}

$('#back').on('click',()=>{
  reset();
});

$button[0].addEventListener('click',(e)=>{
  if(two==1){
if(mode==0){
  clickCheck();
}else if(mode==1){
  study();
}else if (mode==2) {
gonext();
}
  }});
