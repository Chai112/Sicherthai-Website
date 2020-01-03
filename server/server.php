<?php
function report_err($msg)
{
    $data->status = $msg;
    $data->err = true;
}

header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8");

ignore_user_abort(true);

// get input
$id = $_GET['id'];
$q = $_GET['q'];

// create output
$data = new stdClass;
$data->status = "GO.";
$data->err = false;
$data->id = $id;
$data->answer = array();

// init sql
$servername = "localhost";
$username = "id12114678_sicher";
$password = "Titacute_";
$database = "id12114678_alpha";

// Create connection
$db = new mysqli($servername, $username, $password, $database);

// Check connection
if ($db->connect_error) 
{
    report_err("SQL Connection failed: " . $db->connect_error);
}


// get info
$index = 0;
//$query = "SELECT id FROM Courses WHERE name = '" .$q ."'";
$query = "SELECT * FROM Courses";
if ($result = $db->query($query)) // TODO: unsanitised
{
    // fetch associative array
    while ($row = $result->fetch_assoc()) 
    {
        $data->answer[$index] = array(
            "id" => $row["id"],
            "name" => $row["name"]
        );
        $index++;
    }
    // free result set
    $result->free();
}
else
{
    report_err("SQL Message failed: " .$result);
}

/*
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
 */

// Send the data.
echo json_encode($data);

?>

