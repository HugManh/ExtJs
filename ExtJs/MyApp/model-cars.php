<?php
include 'connect.php';

$callback = $_REQUEST['callback'];

$output = array();
$success = 'false';

//$method = $_SERVER['REQUEST_METHOD'];
//echo $method;
$action = $_GET['action'];

$modelcarId = '';
$modelcarName = '';
$modelcarCategory = '';
$vendorId = '';

if($action == 'create' || $action == 'update' || $action == 'destroy'){
	$records = json_decode($_REQUEST['records']);
	$modelcarId = $records->{'modelcarId'};
	$modelcarName = $records->{'modelcarName'};
	$modelcarCategory = $records->{'modelcarCategory'};
	$vendorId = $records->{'vendorId'};
	$vendorName = $records->{'vendorName'};
}

switch ($action) {
    
    case 'read':
		$sql = "SELECT modelcars.modelcarId, modelcars.modelcarCategory, modelcars.modelcarName, vendors.vendorId, vendors.vendorName FROM modelcars INNER JOIN vendors ON modelcars.vendorId = vendors.vendorId WHERE hide = 0;";
		$result = mysqli_query($conn, $sql);
		$total = mysqli_num_rows($result); 
		if($total > 0){
			while ($obj = mysqli_fetch_object($result)) {
				$output[] = $obj;
			}
			$success = 'true';
		}

		if($callback){
			header('Content-Type: text/javascrip');
			echo $callback.'({"success":'.$success.',"items":'.json_encode($output).', "total": '.$total.'});';
		}
		else{
			header('Content-Type: application/x-json');
			echo json_encode($output);
		}    

	break;

	case 'create':
    	$sql1 = "INSERT INTO modelcars( modelcarCategory, modelcarName, vendorId, hide) VALUES ('$modelcarCategory' ,'$modelcarName', '$vendorId', 0)";
		$result1 = mysqli_query($conn, $sql1);
		
		
		// echo 'chay create';

	break;

	case 'update':
		// $sql2 = "UPDATE modelcars SET modelcarCategory = '$modelcarCategory', modelcarName = '$modelcarName', vendorId = '$vendorId' WHERE modelcarId = '$modelcarId'";
		// $result2 = mysqli_query($conn, $sql2);
		echo 'chay update';
		// $obj = array(['modelcarName' => $modelcarName, 'vendorName' => $vendorName, 'modelcarCategory' => $modelcarCategory]);
		// $modelCar = json_encode($obj);
		// $ketqua = array('success' => true, 'action' => 'update', 'modelCar' => $modelCar);
		// header('Cache-Control: no-cache, must-revalidate');
		// header('content-type:application/json');
		// echo(json_encode($ketqua));

	break;

	case 'destroy':
		$sql3 = "UPDATE modelcars SET hide = 1 WHERE modelcarId = '$modelcarId'";
		$result3 = mysqli_query($conn, $sql3);
		// echo 'chay destroy';

	break;
    
}

$conn->close();

?>