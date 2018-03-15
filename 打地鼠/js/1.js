/*
* @Author: Administrator
* @Date:   2018-03-15 15:58:58
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-15 17:08:15
*/
var t=0;
var hour,min,second;
var speed=1500;
var showTime,timeID;//showTime计时器    timeID图片出现计时器
var rand;
var myScore=0;//分数
//获取鼠地数组
var gameArr = document.querySelectorAll(".gameArea ul li");

// 获取点击按钮
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");


//显示信息元素获取
var gameTime = document.querySelector(".gameInfo .time");

var score = document.querySelector(".gameInfo .score");

var hint = document.querySelector(".gameInfo .hint");

// 注册点击事件
for(var i=0;i<gameArr.length;i++){
	gameArr[i].onclick=function(){
		if(this.mark==true){
			this.style.backgroundImage="url(images/02.jpg)";
			// 分数累加
			myScore+=100;
			score.firstElementChild.innerText=myScore+"分";

			if(500<=myScore && myScore<1000){
				hint.innerText="hwl 傻逼";
			}else if(1500<=myScore && myScore<3000){
				hint.innerText="you can do best";
			}
		}
	}
}


// 停止
stopBtn.onclick=function(){
	clearInterval(timeID);
	clearInterval(showTime);
	t=0;
	gameTime.firstElementChild.innerText="";
	myScore=0;
	hint.innerText="";

}

startBtn.onclick=start;

function start(){
	// startBtn
	timeID=setInterval(function(){

		speed-=10;

		rand=parseInt(Math.random()*gameArr.length);
		console.log(rand);

		// 添加有老鼠属性标记
		gameArr[rand].mark=true;
		gameArr[rand].style.backgroundImage="url(images/01.jpg)";

		// 过了一段时间都清空掉
		setTimeout(function(){
			console.log(rand+"b")
			gameArr[rand].mark=false;
			gameArr[rand].style.backgroundImage="url(images/00.jpg)";
		},speed-150)

	},speed);//外面时间必须大于里面，不然消不掉
	gameInfo();

}
//暂停
pauseBtn.onclick=function(){
	clearInterval(timeID);
	clearInterval(showTime);
}


function gameInfo(){
	showTime=setInterval(function(){
		t++;
		second=(t%60)<10 ? '0'+(t%60) :(t%60);
		min=parseInt((t/60)%60)<10 ? "0"+parseInt((t/60)%60) :parseInt((t/60)%60)
		hour=parseInt(t/3600)<10 ? "0"+parseInt(t/3600) :parseInt(t/3600);
		gameTime.firstElementChild.innerText=hour+":"+min+":"+second;
	},1000)
}







