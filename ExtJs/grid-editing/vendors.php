<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "grid";
$conn = new mysqli($host, $user, $password, $dbname);




$callback = $_REQUEST['callback'];

$output = array();
$success = 'false';

$sql = "SELECT * FROM vendors";
$result = mysqli_query($conn, $sql);


if(mysqli_num_rows($result) > 0){
	while ($obj = mysqli_fetch_object($result)) {
		# code...
		$output[] = $obj;
	}
	$success = 'true';
}

if($callback){
	header('Content-Type: text/javascrip');
	echo $callback.'({"success":'.$success.',"items":'.json_encode($output).'});';
}
else{
	header('Content-Type: application/x-json');
	echo json_encode($output);
}

$conn->close();
?>