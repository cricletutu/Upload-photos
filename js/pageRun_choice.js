/*
updated on 20170628
15:00
*/
var picsSrc = 'img/';
var audSrc = "audio/"
var picPNG = '.png';
var picJPG = '.jpg';
var stageW = 640;
var stageH = 1136;
/*
basic
*/
function getId(id){	
	return document.getElementById(id);
}
function hide(id){
	getId(id).style.display = "none";
}
function show(id){
	getId(id).style.display = "block";
}
//set Listener(id)
function setListener(id,name,event){
	getId(id).addEventListener(event,name,false);
}
function setCode(id,code,event){
	getId(id).addEventListener(event,function(){
		eval(code);
	},false);
}
//remove Listener
function removeListener(id,name,event){
	getId(id).removeEventListener(event,name,false);
}
/*
set div or pic pos
*/
function creatImgNode(container,id,src){
	var node = document.createElement('img');
	if(id)	node.id = id;
	if(src)	node.src = src;
	getId(container).appendChild(node);
}
function creatTextNode(container,id,text){
	var node = document.createElement('text');
	if(id)	node.id = id;
	getId(container).appendChild(node);
	node.innerHTML = text;
}
function removeNode(id){
	var ele = getId(id);
	ele.parentNode.removeChild(ele);
}
//set div px
function setDiv(id,num,top,left,width,height,flag){
	var div = getId(id);
	if(flag=='px'){
		div.style.left = left+"px";
		div.style.top = top+"px";
		div.style.width = width+"px";
		div.style.height = height+"px";
	}
	else{
		div.style.left = parseFloat(left/stageW).toFixed(4)*100+'%';
		div.style.top = parseFloat(top/stageH).toFixed(4)*100+'%';
		div.style.width = parseFloat(width/stageW).toFixed(4)*100+'%';
		div.style.height = parseFloat(height/stageH).toFixed(4)*100+'%';
	}
	div.style.position = "absolute";
	div.style.zIndex = num;
}
//set zIndex
function setZindex(id,num){
	getId(id).style.position = "absolute";
	getId(id).style.zIndex = num;
}
//批量添加图片 px
// function creatPic_px(left,top,id,src,width,height,sort){
// 	var png = 'png';
// 	var jpg = 'jpg';
// 	for(i=0;i<id.length;i++){
// 		var pics = getId(id[i]);
// 		var name = id[i];
// 		if(sort==png)	pics.src = picsSrc+src[i]+picPNG;
// 		else	pics.src = picsSrc+src[i]+picJPG;
// 		pics.style.left = left[i]+"px";
// 		pics.style.top = top[i]+"px";
// 		pics.style.width = width[i]+"px";
// 		pics.style.height = height[i]+"px";
// 		pics.style.position = "absolute";
// 	}
// }
function creatPic_px(left,top,id,width,height){
	for(i=0;i<id.length;i++){
		var pics = getId(id[i]);
		pics.style.left = left[i]+"px";
		pics.style.top = top[i]+"px";
		pics.style.width = width[i]+"px";
		pics.style.height = height[i]+"px";
		pics.style.position = "absolute";
	}
}
function creatPic_px_hide(left,top,id,width,height){
	for(i=0;i<id.length;i++){
		var pics = getId(id[i]);
		pics.style.left = left[i]+"px";
		pics.style.top = top[i]+"px";
		pics.style.width = width[i]+"px";
		pics.style.height = height[i]+"px";
		pics.style.position = "absolute";
		pics.style.display = "none";
	}
}
//批量添加图片 %
// function creatPic_per(left,top,id,src,width,height,sort){
// 	var png = 'png';
// 	var jpg = 'jpg';
// 	for(i=0;i<left.length;i++){
// 		var pics = getId(id[i]);
// 		var name = id[i];
// 		if(sort==png)	pics.src = picsSrc+src[i]+picPNG;
// 		else	pics.src = picsSrc+src[i]+picJPG;
// 		pics.style.left = left[i]/stageW*100+"%";
// 		pics.style.top = top[i]/stageH*100+"%";
// 		pics.style.width = width[i]/stageW*100+"%";
// 		pics.style.height = height[i]/stageH*100+"%";
// 		pics.style.position = "absolute";
// 	}
// }
function creatPic_per(left,top,id,width,height){
	for(i=0;i<left.length;i++){
		var pics = getId(id[i]);
		pics.style.left = left[i]/stageW*100+"%";
		pics.style.top = top[i]/stageH*100+"%";
		pics.style.width = width[i]/stageW*100+"%";
		pics.style.height = height[i]/stageH*100+"%";
		pics.style.position = "absolute";
	}
}
function creatPic_hide(left,top,id,src,width,height,sort){
	var png = 'png';
	var jpg = 'jpg';
	for(i=0;i<left.length;i++){
		var pics = getId(id[i]);
		var name = id[i];
		if(sort==png)	pics.src = picsSrc+src[i]+picPNG;
		else	pics.src = picsSrc+src[i]+picJPG;
		
		pics.style.left = left[i]/stageW*100+"%";
		pics.style.top = top[i]/stageH*100+"%";
		pics.style.width = width[i]/stageW*100+"%";
		pics.style.height = height[i]/stageH*100+"%";
		pics.style.position = "absolute";
		pics.style.display = 'none';
		pics.style.zIndex = 101;
	}
}
// function creatBg_full(id,src,sort){
// 	var png = 'png';
// 	var jpg = 'jpg';
// 	for(i=0;i<id.length;i++){
// 		var pics = getId(id[i]);
// 		var bgname = id[i].substring(0,4);
// 		if(sort==png)	pics.src = picsSrc+src[i]+picPNG;
// 		else	pics.src = picsSrc+src[i]+picJPG;
// 		pics.style.left = "0%";
// 		pics.style.top = "0%";
// 		pics.style.width = "100%";
// 		pics.style.height = "100%";
// 		pics.style.position = "absolute";
// 	}
// }
function creatBg_full(id,sort){
	var png = 'png';
	var jpg = 'jpg';
	for(i=0;i<id.length;i++){
		var pics = getId(id[i]);
		var bgname = id[i].substring(0,4);
		if(sort==png)	pics.src = picsSrc+src[i]+picPNG;
		else	pics.src = picsSrc+src[i]+picJPG;
		pics.style.left = "0%";
		pics.style.top = "0%";
		pics.style.width = "100%";
		pics.style.height = "100%";
		pics.style.position = "absolute";
	}
}
//IsPC()
var clicksound = new Audio();
var rightsound = new Audio();
var wrongsound = new Audio();
/*clicksound.src = audSrc + "1.mp3";
rightsound.src = audSrc + "2.mp3";
wrongsound.src = audSrc + "3.mp3";*/
function setChoice(c,id,ans,fn,strr1){
	hide('page'+c);
	var c1 = c+1;
	show('page'+c1);
	$('#page'+c1).animate({opacity:'1'});
	if(c<10){
		var topic = parseInt(id.substring(1,2));
	}
	else{
		var topic = parseInt(id.substring(1,3));
	}
	//
	var Vsrc = "images/t"+topic+'/';
	var none1 = [];
	var sel = [];
	var s2 = "submit"+c;
	var s3 = "fbr"+c;
	var s4 = "fbw"+c;
	var s5 = "jixu"+c;
	var s6 = "retry"+c;
	var a1 = 0;
	var m = ans.length;
	var a2 = a1+m;
	//给选项添加侦听事件
	for(i=0;i<m;i++){
		var str = id+i;
		none1[i] = 0;
		sel[i] = 0;
		$('#'+str).animate({opacity:'1'},Time);
		setListener(str,clickn,start);
	}
	//点击选项执行函数
	function clickn(){
		//initsound();
		//clicksound.play();
		var str = this.id;
		//var num = parseInt(str.substring(1,2));
		if(c<10){
			var num = parseInt(str.substring(3,4));
		}
		else{
			var num = parseInt(str.substring(4,5));
		}
		var s1 = id+num;
		var num1 = num+a1;
		var num2 = num+a2;
		var ss1 = "single";
		if(sel[num]==0){
			if(strr1==ss1){//danxuan
				for(i=0;i<m;i++){
					var ss2 = 'a'+i;
					var btnid = id+i;
					getId(btnid).src = Vsrc+ss2+picPNG;
				}
				getId(s1).src = Vsrc+'a'+num2+picPNG;
				for(i=0;i<sel.length;i++){
					sel[i] = 0;
				}
				sel[num] = 1;
			}
			else{//duoxuan
				getId(s1).src = Vsrc+'a'+num2+picPNG;
				sel[num] = 1;
			}	
		}
		else{
			getId(s1).src = Vsrc+'a'+num1+picPNG;
			sel[num] = 0;
		}
		if(sel.toString()!==none1.toString()){
			show(s2);
			$('#'+s2).animate({opacity:'1'},Time);
			setListener(s2,checkans,start);
		}
		else{
			removeListener(s2,checkans,start);
			$('#'+s2).animate({opacity:'0'},Time,function(){
				hide(s2);
			});
			
		}
	}
	function checkans(){
		for(i=0;i<m;i++){
			var str = id+i;
			removeListener(str,clickn,start);
		}
		hide(s2);
		removeListener(s2,checkans,start);
		if(sel.toString()==ans.toString()){
			show(s3);
			$('#'+s3).animate({opacity:'1'},Time);
			count = count+1;;
			//rightsound.play();
		}
		else{
			show(s4);
			$('#'+s4).animate({opacity:'1'},Time);
			//show(s6);
			//setListener(s6,redofun,start);
			//wrongsound.play();
		}
		show(s5);
		$('#'+s5).animate({opacity:'1'},Time);
		setListener(s5,jixufun,start);
	}
	function jixufun(){
		//initsound();
		//clicksound.play();
		removeListener(s5,jixufun,start);
		initTopic();
		console.log(count)
		fn();
	}
	function redofun(){
		initsound();
		//clicksound.play();
		removeListener(s6,redofun,start);
		hide(s4);
		hide(s6);
		initTopic();
		for(i=0;i<m;i++){
			var str = id+i;
			setListener(str,clickn,start);
		}
		console.log('redo');
	}
	function initTopic(){
		sel = [];
		for(i=0;i<m;i++){
			var ss2 = 'a'+i;
			var btnid = id+i;
			sel[i] = 0;
			getId(btnid).src = Vsrc+ss2+picPNG;
		}
	}
	/*function initsound(){
		clicksound.pause();
		clicksound.currentTime = 0;
		rightsound.pause();
		rightsound.currentTime = 0;
		wrongsound.pause();
		wrongsound.currentTime = 0;
	}*/
}

function IsPC(){  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
	   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
}
