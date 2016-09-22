// JavaScript Document

//注册


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
				div.innerHTML="邮箱地址不能为空！"
				div.className="false";
			}else{
				var reg=/^\w+@\w+\.\w+(\.\w+)?$/;
				if(regE(reg,str)){
					div.innerHTML=""
					div.className="true";
				}else{
					div.innerHTML="邮箱格式不正确！"
					div.className="false";
				}
			}
			break;
		case "d2":
			if(str==""){
				div.innerHTML="昵称不能为空！"
				div.className="false";
			}else{
				var reg=/^[\u0391-\uFFE5]{3,8}$/
				if(regE(reg,str)){
					div.innerHTML=""
					div.className="true";
				}else{
					div.innerHTML="昵称只能为中文字符，3-8位"
					div.className="false";
				}
			}
			break;
		case "d3":
			if(str==""){
				div.innerHTML="登录密码不能为空！"
				div.className="false";
			}else{
				
				if(str.length>=4&&str.length<=8){
					div.innerHTML=""
					div.className="true";
				}else{
						div.innerHTML="密码长度在4-8位"
						div.className="false";
				}
			}
			break;
		case "d4":
			if(str==""){
				div.innerHTML="重复密码不能为空！"
				div.className="false";
			}else{
				if(document.getElementById("pwd").value==str){
					div.innerHTML=""
					div.className="true";
				}else{
					div.innerHTML="两次输入密码不一致"
					div.className="false";
				}
			}
			break;
	}
}