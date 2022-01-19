
var imgdon=1;var cdobj=null;
var imgp1=new Image();var imgp2=new Image();var imgp3=new Image();var imgp4=new Image();var imgp5=new Image();var imgp6=new Image();var imgp7=new Image();var imgp8=new Image();var imgp9=new Image();var imgp10=new Image();var imgp11=new Image();var imgp12=new Image();var imgp13=new Image();var imgp14=new Image();var imgp15=new Image();var imgp16=new Image();var imgp17=new Image();var imgp18=new Image();var imgp19=new Image();var imgp20=new Image();var imgp21=new Image();var imgp22=new Image();var imgp23=new Image();var imgp24=new Image();var imgp25=new Image();var imgp26=new Image();var imgp27=new Image();var imgp28=new Image();var imgp29=new Image();var imgp30=new Image();var imgp31=new Image();var imgp32=new Image();var imgp33=new Image();var imgp34=new Image();var imgp35=new Image();var imgp36=new Image();var imgp37=new Image();
imgp1.src='1.jpg';imgp2.src='2.jpg';imgp3.src='3.jpg';imgp4.src='4.jpg';imgp5.src='5.jpg';imgp6.src='6.jpg';imgp7.src='7.jpg';imgp8.src='8.jpg';imgp9.src='9.jpg';imgp10.src='10.jpg';imgp11.src='11.jpg';imgp12.src='12.jpg';imgp13.src='13.jpg';imgp14.src='14.jpg';imgp15.src='15.jpg';imgp16.src='16.jpg';imgp17.src='17.jpg';imgp18.src='18.jpg';imgp19.src='19.jpg';imgp20.src='20.jpg';imgp21.src='21.jpg';imgp22.src='22.jpg';imgp23.src='23.jpg';imgp24.src='24.jpg';imgp25.src='25.jpg';imgp26.src='26.jpg';imgp27.src='27.jpg';imgp28.src='28.jpg';imgp29.src='29.jpg';imgp30.src='30.jpg';imgp31.src='31.jpg';imgp32.src='32.jpg'; imgp33.src='33.jpg';imgp34.src='34.jpg';imgp35.src='35.jpg';imgp36.src='36.jpg';imgp37.src='37.jpg';
var imgstr1='<img src="1.jpg" width=400 height=300 alt="" border="0">';var imgstr2='<img src="2.jpg" width=400 height=300 alt="" border="0">';var imgstr3='<img src="3.jpg" width=400 height=300 alt="" border="0">';var imgstr4='<img src="4.jpg" width=400 height=300 alt="" border="0">';var imgstr5='<img src="5.jpg" width=400 height=300 alt="" border="0">';var imgstr6='<img src="6.jpg" width=400 height=300 alt="" border="0">';var imgstr7='<img src="7.jpg" width=400 height=300 alt="" border="0">';var imgstr8='<img src="8.jpg" width=400 height=300 alt="" border="0">';var imgstr9='<img src="9.jpg" width=400 height=300 alt="" border="0">';var imgstr10='<img src="10.jpg" width=400 height=300 alt="" border="0">';var imgstr11='<img src="11.jpg" width=400 height=300 alt="" border="0">';var imgstr12='<img src="12.jpg" width=400 height=300 alt="" border="0">';var imgstr13='<img src="13.jpg" width=400 height=300 alt="" border="0">';var imgstr14='<img src="14.jpg" width=400 height=300 alt="" border="0">';var imgstr15='<img src="15.jpg" width=400 height=300 alt="" border="0">';var imgstr16='<img src="16.jpg" width=400 height=300 alt="" border="0">';var imgstr17='<img src="17.jpg" width=400 height=300 alt="" border="0">';var imgstr18='<img src="18.jpg" width=400 height=300 alt="" border="0">';var imgstr19='<img src="19.jpg" width=400 height=300 alt="" border="0">';var imgstr20='<img src="20.jpg" width=400 height=300 alt="" border="0">';var imgstr21='<img src="21.jpg" width=400 height=300 alt="" border="0">';var imgstr22='<img src="22.jpg" width=400 height=300 alt="" border="0">';var imgstr23='<img src="23.jpg" width=400 height=300 alt="" border="0">';var imgstr24='<img src="24.jpg" width=400 height=300 alt="" border="0">';var imgstr25='<img src="25.jpg" width=400 height=300 alt="" border="0">';var imgstr26='<img src="26.jpg" width=400 height=300 alt="" border="0">';var imgstr27='<img src="27.jpg" width=400 height=300 alt="" border="0">';var imgstr28='<img src="28.jpg" width=400 height=300 alt="" border="0">';var imgstr29='<img src="29.jpg" width=400 height=300 alt="" border="0">';var imgstr30='<img src="30.jpg" width=400 height=300 alt="" border="0">';var imgstr31='<img src="31.jpg" width=400 height=300 alt="" border="0">';var imgstr32='<img src="32.jpg" width=400 height=300 alt="" border="0">';var imgstr33='<img src="33.jpg" width=400 height=300 alt="" border="0">';var imgstr34='<img src="34.jpg" width=400 height=300 alt="" border="0">';var imgstr35='<img src="35.jpg" width=400 height=300 alt="" border="0">';var imgstr36='<img src="36.jpg" width=400 height=300 alt="" border="0">';var imgstr37='<img src="37.jpg" width=400 height=300 alt="" border="0">';
	var uagent;	var opsystem;
	var IE4B=false;	var NS4B=false;	var NS6B=false;	var OP5B=false;	var AOLB=false;
	var MsWinS=false;	var MacOS=false;	var ULinS=false;
	var majorver;	majorver = parseInt(navigator.appVersion);

	if(majorver>=4)
	{}
	uagent = window.navigator.userAgent.toLowerCase();
	opsystem = window.navigator.platform.toLowerCase();

	if (opsystem.indexOf('win') != -1)
		MsWinS = true;
	else if (opsystem.indexOf('mac') != -1)
		MacOS = true;
	else if (opsystem.indexOf('unix') != -1 || opsystem.indexOf('linux') != -1 || opsystem.indexOf('sun') != -1)
		ULinS = true;

	NS4B=(document.layers);
	IE4B=(document.all);
	NS6B=((document.getElementById)&&(!IE4B))?true:false;
	OP5B=(uagent.indexOf('Opera') != -1)?true:false;

	if ((uagent.indexOf('aol')) != -1 )
		AOLB=true;

IE5=false;IE4=false;IEold=false;IE5=(uagent.indexOf('msie 5.0') != -1)?true:false;IE4=(uagent.indexOf('msie 4') != -1)?true:false;if(IE5||IE4){IEold=true;}function initr(){
	if(IE4B){if((uagent.indexOf('msie 6.') != -1)||(uagent.indexOf('msie 5.5') != -1)){imgdon=2;setTimeout('dxtrans()',3000);}}
	else if(NS6B)
	{cdobj=document.getElementById('trans');setTimeout('slides()',1.5000);}}
function dxtrans(){
if(IEold!=true){cimg.filters[0].apply();}cimg.src = eval("imgp"+imgdon+".src");
if(IEold!=true){cimg.filters[0].play();}imgdon++;
if(imgdon>37){imgdon=1;}
setTimeout('dxtrans()',3000);
}







function slides(){
if(imgdon==1){document.slideimg.src=imgp2.src;}if(imgdon==2){document.slideimg.src=imgp3.src;}if(imgdon==3){document.slideimg.src=imgp4.src;}if(imgdon==4){document.slideimg.src=imgp5.src;}if(imgdon==5){document.slideimg.src=imgp6.src;}if(imgdon==6){document.slideimg.src=imgp7.src;}if(imgdon==7){document.slideimg.src=imgp8.src;}if(imgdon==8){document.slideimg.src=imgp9.src;}if(imgdon==9){document.slideimg.src=imgp10.src;}if(imgdon==10){document.slideimg.src=imgp11.src;}if(imgdon==11){document.slideimg.src=imgp12.src;}if(imgdon==12){document.slideimg.src=imgp13.src;}if(imgdon==13){document.slideimg.src=imgp14.src;}if(imgdon==14){document.slideimg.src=imgp15.src;}if(imgdon==15){document.slideimg.src=imgp16.src;}if(imgdon==16){document.slideimg.src=imgp17.src;}if(imgdon==17){document.slideimg.src=imgp18.src;}if(imgdon==18){document.slideimg.src=imgp19.src;}if(imgdon==19){document.slideimg.src=imgp20.src;}if(imgdon==20){document.slideimg.src=imgp21.src;}if(imgdon==21){document.slideimg.src=imgp22.src;}if(imgdon==22){document.slideimg.src=imgp23.src;}if(imgdon==23){document.slideimg.src=imgp24.src;}if(imgdon==24){document.slideimg.src=imgp25.src;}if(imgdon==25){document.slideimg.src=imgp26.src;}if(imgdon==26){document.slideimg.src=imgp27.src;}if(imgdon==27){document.slideimg.src=imgp28.src;}if(imgdon==28){document.slideimg.src=imgp29.src;}if(imgdon==29){document.slideimg.src=imgp30.src;}if(imgdon==30){document.slideimg.src=imgp31.src;}if(imgdon==31){document.slideimg.src=imgp32.src;}if(imgdon==32){document.slideimg.src=imgp33.src;}if(imgdon==33){document.slideimg.src=imgp34.src;}if(imgdon==34){document.slideimg.src=imgp35.src;}if(imgdon==35){document.slideimg.src=imgp36.src;}if(imgdon==36){document.slideimg.src=imgp37.src;}
imgdon++;if(imgdon>37){imgdon=1;}setTimeout('slides()',1.5000);}
window.onload=initr;
