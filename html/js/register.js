// JavaScript Document

//ע��


function foucs(its){
	var str=its.value;
	its.value=str;
}
function regE(reg,str){
	return reg.test(str);
}


function blurs(its){
	var name=its.name;
	var div=document.getElementById(name);
	var str=its.value;
	switch(name){
		case "d1":
			if(str==""){
				div.innerHTML="�����ַ����Ϊ�գ�"
				div.className="false";
			}else{
				var reg=/^\w+@\w+\.\w+(\.\w+)?$/;
				if(regE(reg,str)){
					div.innerHTML=""
					div.className="true";
				}else{
					div.innerHTML="�����ʽ����ȷ��"
					div.className="false";
				}
			}
			break;
		case "d2":
			if(str==""){
				div.innerHTML="�ǳƲ���Ϊ�գ�"
				div.className="false";
			}else{
				var reg=/^[\u0391-\uFFE5]{3,8}$/
				if(regE(reg,str)){
					div.innerHTML=""
					div.className="true";
				}else{
					div.innerHTML="�ǳ�ֻ��Ϊ�����ַ���3-8λ"
					div.className="false";
				}
			}
			break;
		case "d3":
			if(str==""){
				div.innerHTML="��¼���벻��Ϊ�գ�"
				div.className="false";
			}else{
				
				if(str.length>=4&&str.length<=8){
					div.innerHTML=""
					div.className="true";
				}else{
						div.innerHTML="���볤����4-8λ"
						div.className="false";
				}
			}
			break;
		case "d4":
			if(str==""){
				div.innerHTML="�ظ����벻��Ϊ�գ�"
				div.className="false";
			}else{
				if(document.getElementById("pwd").value==str){
					div.innerHTML=""
					div.className="true";
				}else{
					div.innerHTML="�����������벻һ��"
					div.className="false";
				}
			}
			break;
	}
}