// JavaScript Document


//�����ͼ���б�
var booklist=new Array();
booklist[0]="<a href='#'>���й�����С˵</a>��13880��";
booklist[1]="<a href='#'>���й����ִ�С˵</a>��1380��";
booklist[2]="<a href='#'>���й��ŵ�С˵</a>��13880��";
booklist[3]="<a href='#'>���Ĵ�����</a>��13880��";
booklist[4]="<a href='#'>���۰�̨С˵</a>��13880��";
booklist[5]="<a href='#'>������С˵</a>��13880��";
booklist[6]="<a href='#'>����̽�����ɣ�����</a>��13880��";
booklist[7]="<a href='#'>�����С˵</a>��13880��";
booklist[8]="<a href='#'>�������ֲ�</a>��13880��";
booklist[9]="<a href='#'>���й�����С˵</a>��13880��";
booklist[10]="<a href='#'>���й�����С˵</a>��1380��";
booklist[11]="<a href='#'>����̽�����ɣ�����</a>��1380��";
booklist[12]="<a href='#'>������С˵</a>��13480��";
booklist[13]="<a href='#'>���й����ִ�С˵</a>��13880��";
booklist[14]="<a href='#'>������С˵</a>��13880��";
booklist[15]="<a href='#'>���й�����С˵</a>��13880��";

//�������
window.onload=function(){
   var ul=	document.createElement("ul");
   var ulclass=document.createAttribute("class");
	//ѭ������
	for(var i=0;i<booklist.length;i++){
			var li=document.createElement("li");
			li.innerHTML=booklist[i];
			ul.appendChild(li);
	}
	document.getElementById("product_catList_class").appendChild(ul);
}
