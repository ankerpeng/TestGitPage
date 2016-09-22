// JavaScript Document


//推荐商品的显和藏
function picclick(){
	 var pic=document.getElementById("shopping_commend_arrow");
	var div=document.getElementById("shopping_commend_sort");
	if(pic.name=="1"){
		pic.src="images/shopping_arrow_down.gif";
		div.style.display="none";
		pic.name="2";
	}else{
		pic.src="images/shopping_arrow_up.gif";
		div.style.display="block";
		pic.name="1";
	}
}


//验证商品数量
function updNum(its){
	var reg=/^[1-9]\d*$/;
	var str=its.value;
	if(!reg.test(str)){
		its.value=1;
	}
	price();
}

//删除选定商品
function delgoods(its){
	var tr =its.parentNode.parentNode;
	var table=tr.parentNode;
	table.removeChild(tr);
	 price();
}




//计算总价
function price(){
	var zj=document.getElementById("zj");//总价
	var js=document.getElementById("jiesheng");//节省
	var jifen=document.getElementById("jifen");//积分
	
	var xjf=0;//现在的积分
	var xyzj=0;//现在的原总价
	var xxzj=0;//现在的先总价
	//获得table
	var rs=document.getElementById("goodstable").rows;
	for(var i=0;i<rs.length;i++){
		var reg=/^\d+\.\d{1,2}/;
		var djf=rs[i].cells[1].innerHTML;
		var dyj=reg.exec(rs[i].cells[2].innerHTML.substring(1));
		var dxj=reg.exec(rs[i].cells[3].innerHTML.substring(1));
		var num=rs[i].cells[4].firstChild.value;
		xjf+=parseInt(djf)*parseInt(num);
		xyzj+=parseFloat(dyj)*parseInt(num);
		xxzj+=parseFloat(dxj)*parseInt(num);
	}
	var re=/^\d+\.?\d?/;
	var str=xyzj-xxzj;	
	zj.innerHTML="￥"+re.exec(xxzj);
	js.innerHTML="￥"+re.exec(str);
	jifen.innerHTML=xjf;
}



//添加商品
function addgoods(id){
	var ul=document.getElementById(id).parentNode.parentNode;
	var lis=ul.getElementsByTagName("li")
	var strs=new Array();
	for(var i=0;i<lis.length-1;i++){
		var as=lis[i].getElementsByTagName("a");
		if(as.length>0){
			strs[i]=as[0].innerHTML;
		}else{
			strs[i]=lis[i].innerHTML;
		}
	}
	var table=document.getElementById("goodstable");
	var tr=document.createElement("tr");
	tr.className="shopping_product_list";
	
	var td1=document.createElement("td");
	td1.innerHTML="<a href='#' class='blue'>"+strs[0]+"</a>";
	td1.className="shopping_product_list_1";
	
	var td2=document.createElement("td");
	td2.innerHTML="20 ";
	td2.className="shopping_product_list_2"
	
	var td3=document.createElement("td");
	td3.innerHTML=strs[1];
	td3.className="shopping_product_list_3";
	var td4=document.createElement("td");
	td4.innerHTML=strs[2];
	td4.className="shopping_product_list_4";
	var td5=document.createElement("td");
	td5.className="shopping_product_list_5";
	td5.innerHTML="<input type='text' value='1' onblur='updNum(this)' id='num'/>"
	var td6=document.createElement("td");
	td6.innerHTML="<a href='#' class='blue' border='1px ' onclick='delgoods(this)'  />删除</a>";
	td6.className="shopping_product_list_6";
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	table.appendChild(tr);
	price();
}