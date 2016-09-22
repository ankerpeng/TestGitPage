// JavaScript Document
function guanbi(){
	document.getElementById("gg").style.display="none";
}

function getE(id){
	return document.getElementById(id);
}


/*书籍层的切换*/
function overblock(id){
	var divs=document.getElementsByName("books");
	for(var i=0;i<divs.length;i++){
		divs[i].style.display="none";
	}
	var ids="book-"+id;
	getE(ids).style.display="block";
}
	


//dd_scroll
//图片切换
var i=2;
var d;

function imageH(){
	if(i==7){
		getE("6").style.backgroundColor="#FFF";
		i=1;
	}
	if(i>1){
		d=getE(i-1);
	}else{
		d=getE(i);
	}
	d.style.backgroundColor="#CCC";
	getE("dd_scroll").src="images/dd_scroll_"+(i)+".jpg";
	d.style.backgroundColor="#FFF";
	d=getE(i);
	d.style.backgroundColor="#CCC";
	i++;
}
var M=setInterval("imageH()",3000);

function over(its){
	
	//清空所有span的样式
	var sps=document.getElementsByName("sps")
	for(var i=0;i<sps.length;i++){
		//当鼠标移上span时清空其他span的样式
		if(span!=null){
			sps[i].style.backgroundColor="#FFF";
		}
	}
	clearInterval(M);
	var cls=its.className;
	if(cls=="sp"){
		its.style.backgroundColor="#CCC";
		getE("dd_scroll").src="images/dd_scroll_"+its.id+".jpg";
	}else if(cls=="img"){
		if(span!=null){
			span.style.backgroundColor="#CCC";
		}
	}
}
var span; //记录span标签的对象
function out(its){
	var cls=its.className;
	if(cls=="sp"){
		its.style.backgroundColor="#CCC";
		i=its.id;
		span=its;
	}else if(cls=="img"){	
	}
	M=setInterval("imageH()",3000);
}

//无缝滚动
//获得三个层的对象


	var divclass=getE("book-class");
	var d1=getE("dome_book");
	var d2=getE("dome2_book");
	var time=120;
	d2.innerHTML=d1.innerHTML;
	function show(){
		if(d2.offsetHeight-divclass.scrollTop<=0){
			divclass.scrollTop=0;
		}else{
			divclass.scrollTop++;
		}
	}
	var M2=setInterval("show()",time);
	divclass.onmouseover=function(){
		clearInterval(M2);
	}
	divclass.onmouseout=function(){
		 M2=setInterval("show()",time);
	}
	
	
	
