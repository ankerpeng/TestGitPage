// JavaScript Document
function guanbi(){
	document.getElementById("gg").style.display="none";
}

function getE(id){
	return document.getElementById(id);
}


/*�鼮����л�*/
function overblock(id){
	var divs=document.getElementsByName("books");
	for(var i=0;i<divs.length;i++){
		divs[i].style.display="none";
	}
	var ids="book-"+id;
	getE(ids).style.display="block";
}
	


//dd_scroll
//ͼƬ�л�
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
	
	//�������span����ʽ
	var sps=document.getElementsByName("sps")
	for(var i=0;i<sps.length;i++){
		//���������spanʱ�������span����ʽ
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
var span; //��¼span��ǩ�Ķ���
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

//�޷����
//���������Ķ���


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
	
	
	
