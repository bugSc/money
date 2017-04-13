<?php 
	$name=$_GET['name'];//用户名
	$tel=$_GET['tel'];//电话号码
	// 建立关系
	$conn=@mysqli_connect("localhost","root","", "class9");
	// 设置编码
	$conn->query('set names utf8');
    // // 就修改sql语句
    // echo '-----'.$psw.'----';
    if ($tel!="") {
        $sql1="INSERT INTO countmoney(name,tel) VALUES ('{$user}','{$tel}')";
    }
 ?>