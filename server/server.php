<?php
header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8");

ignore_user_abort(true);
$id = $_GET['id'];
$q = $_GET['q'];

$data = new \stdClass();
$data->status = "GO.";
$data->err = false;
$data->id = $id;
$data->answer = "null";

$servername = "localhost";
$username = "id12114678_sicher";
$password = "Titacute_";
$database = "id12114678_alpha";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    $data->status = "SQL Connection failed: " . $conn->connect_error;
    $data->err = true;
}

if (file_exists('internal_data.txt')) {
    $data->answer = file_get_contents('internal_data.txt');
    // Add 1 to $data
    $data->answer = $data->answer + 1;
    // Update file
    file_put_contents('internal_data.txt', $data->answer);
}
else
{
    $data->status = "Data failed: cannot access internal-data.txt";
    $data->answer = -1;
    $data->err = true;
}

// Send the data.
echo json_encode($data);

?>

