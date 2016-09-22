// JavaScript Document


//活动加载图书列表
var booklist=new Array();
booklist[0]="<a href='#'>·中国当代小说</a>（13880）";
booklist[1]="<a href='#'>·中国进现代小说</a>（1380）";
booklist[2]="<a href='#'>·中国古典小说</a>（13880）";
booklist[3]="<a href='#'>·四大名著</a>（13880）";
booklist[4]="<a href='#'>·港澳台小说</a>（13880）";
booklist[5]="<a href='#'>·国外小说</a>（13880）";
booklist[6]="<a href='#'>·侦探，悬疑，推理</a>（13880）";
booklist[7]="<a href='#'>·外国小说</a>（13880）";
booklist[8]="<a href='#'>·晋级恐怖</a>（13880）";
booklist[9]="<a href='#'>·中国当代小说</a>（13880）";
booklist[10]="<a href='#'>·中国当代小说</a>（1380）";
booklist[11]="<a href='#'>·侦探，悬疑，推理</a>（1380）";
booklist[12]="<a href='#'>·国外小说</a>（13480）";
booklist[13]="<a href='#'>·中国进现代小说</a>（13880）";
booklist[14]="<a href='#'>·国外小说</a>（13880）";
booklist[15]="<a href='#'>·中国当代小说</a>（13880）";

//窗体加载
window.onload=function(){
   var ul=	document.createElement("ul");
   var ulclass=document.createAttribute("class");
	//循环数组
	for(var i=0;i<booklist.length;i++){
			var li=document.createElement("li");
			li.innerHTML=booklist[i];
			ul.appendChild(li);
	}
	document.getElementById("product_catList_class").appendChild(ul);
}
