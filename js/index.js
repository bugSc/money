$(function(){

	// 预加载
	var $onload=$(".onload>div");
	var $wrap=$(".wrap");
	var num=20;
		onloadTimer=setInterval(function(){
			if(num<=0){
				clearInterval(onloadTimer);
				$wrap.show();
			}
			$onload.text(num);
			num--;
	},500);
	// 填写个人资料
	var $infromation=$(".infromation");
	var $filloutclose=$(".fillout>img:nth-of-type(1)");
		// 判断个人信息是否已经填写完毕
	var $detailName=$(".detail>input:nth-of-type(1)");
	var $detailTel=$(".detail>input:nth-of-type(2)");
	var $detailImg=$(".fillout>img:nth-of-type(3)");
	var $detailP=$(".detail>p");
$detailImg.on("touchstart",function(){
	if($detailName.val()==""||$detailTel.val()==""){
		$detailP.text("请填写个人信息喔！");
		return;
	}
	$.ajax({
		type:"GET",
		url:"index.php",
		dataType:"text",
		data:{name:$detailName.val(),tel:$detailTel.val()},
		success:function(data){
			$detailName.val()=="";
			$detailTel.val()=="";
		}
	})	
})
	$filloutclose.on("touchstart",function(){
		$(this).parent().parent().hide();
			$wrapSub.show();
			// 调用数钱函数
			gameFn();
	})
// 开始按钮
	var $startImg=$(".mianPage>img:nth-of-type(3)");
	var $shouImg=$(".mianPage>img:nth-of-type(4)");
// 数钱榜
	var $rank=$(".mianPage>img:nth-of-type(6)");
	var $severalclose=$(".several>img");
	var $several=$(".several");
// 活动规则// 活动奖品// 奖券使用说明	
	var $activity=$(".mianPage>img:nth-of-type(6)~img");
	var $actionclose=$(".action>img");
	var $action=$(".action");
	var $wrapSub=$(".wrapSub");

$startImg.on("touchstart",function(){
		$infromation.show();
	})
setInterval(function(){
		$startImg.toggleClass("start");
},800);
setInterval(function(){
		$shouImg.fadeToggle();
},500);

// 点击显示/隐藏
	// 数钱榜
$rank.on("touchstart",function(){
		$several.show();
	});
	$severalclose.on("touchstart",function(){
		$several.hide();
	});
// 活动规则// 活动奖品// 奖券使用说明	
	$activity.on("touchstart",function(){
			$action.eq($(this).index()-6).show();
		$actionclose.on("touchstart",function(){
			$(this).parent().hide();
		});
	});

	// <!-- 开始数钱页面 -->
	var $nomotron=$(".nomotron>span");
	var $moueyShou=$(".money>img:nth-of-type(2)");
	var $papaMoney=$(".wrapSub>.money>div");
	// 文字切换
	var $changeImg=$(".change>img");

	var bol=false;
	var time=20;
	var score=0;
	var a=b=c=0;
	var gameTimer=null;
	var i=0;
	var add=0;
	// <!-- /*three*/ -->
	var $wrapthird=$(".wrapthird");
	var	$fewMoney=$(".fewMoney");
	var $rankspan2=$(".ranking>span:nth-of-type(2)");
	var $rankspan4=$(".ranking>span:nth-of-type(4)");
	var $again=$(".again>img:nth-of-type(1)");
	var $share=$(".again>img:nth-of-type(2)");
	// console.log($beyond);
	var $sharePage=$("#socialShare");
	
function gameFn(){
	// 文字图片切换
	var wordMap=["p2_txt1.png","p2_txt2.png","p2_txt3.png"];
		setInterval(function(){
			if(i>2){
					i=0;
				}
			$changeImg.attr("src","img/"+wordMap[i]);
			i++;
		},1000);
	// 数钱事件
	bol=true;	
	gameTimer=setInterval(function(){
			if(time<=0){
				clearInterval(gameTimer);
				bol=false;
				// three页面
				$wrapthird.show().siblings().hide();
					// 重置参数
					bol=false;
					time=20;
					gameTimer=null;
					score=0;
					a=b=c=0;
					$nomotron.eq(0).text(a);
					$nomotron.eq(1).text(b);
					$nomotron.eq(2).text(c);
					add=0;
					$fewMoney.text();
					$rankspan2.text();
					i=0;
			}
			$nomotron.eq(3).text(time);
			time--;
	},1000);
	$papaMoney.on("swipeUp",function(){
		$moueyShou.hide();
		if(bol){
				var $imgMoney=$("<img id='imgMoney' src='img/p2_qian.jpg' alt=''>");
				$papaMoney.append($imgMoney);
				setTimeout(function(){
					$imgMoney.remove();
				},500);
				score++;
				a=parseInt(score/100);
				b=parseInt(score%100/10);
				c=parseInt(score%100%10);
				$nomotron.eq(0).text(a);
				$nomotron.eq(1).text(b);
				$nomotron.eq(2).text(c);
				// 数钱所得的钱
				add++;
				$fewMoney.text("￥"+add);
				$rankspan2.text("￥"+add);
			}
			window.event.returnValue=false;
			event.preventDefault();
		});
	}
	// 分享
	$share.on("touchstart",function(){
		$sharePage.show();
	});
	$sharePage.on("touchstart",function(){
		$(this).hide();
	})
	// 再来一次
	$again.on("touchstart",function(){
		$wrapSub.show().siblings().hide();

		gameFn();
	})
});