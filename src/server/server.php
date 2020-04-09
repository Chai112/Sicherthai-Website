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

// SQL Create connection
$db = new mysqli($servername, $username, $password, $database);

// SQL Check connection
if ($db->connect_error) 
{
    report_err("SQL Connection failed: " . $db->connect_error);
}


// SQL get info
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
            "name" => $row["name"],
            "is_public" => $row["is_public"],
            "is_inhouse" => $row["is_inhouse"],
            "duration" => $row["duration"],
            "price" => $row["price"],
            "location" => $row["location"],
            "location_2" => $row["location_2"],
            "location_3" => $row["location_3"],
            "location_4" => $row["location_4"],
            "location_5" => $row["location_5"],
            "location_6" => $row["location_6"],
            "lecturer1_name" => $row["lecturer1_name"],
            "lecturer2_name" => $row["lecturer2_name"],
            "lecturer3_name" => $row["lecturer3_name"],
            "lecturer4_name" => $row["lecturer4_name"],
            "objective" => $row["objective"],
            "target_group" => $row["target_group"],
            "presentation_description" => $row["presentation_description"],
            "event_schedule" => $row["event_schedule"],
            
            "date_1_1" => $row["date_1_1"],
            "date_1_2" => $row["date_1_2"],
            "date_1_3" => $row["date_1_3"],
            "date_1_4" => $row["date_1_4"],
            
            "date_2_1" => $row["date_2_1"],
            "date_2_2" => $row["date_2_2"],
            "date_2_3" => $row["date_2_3"],
            "date_2_4" => $row["date_2_4"],
            
            "date_3_1" => $row["date_3_1"],
            "date_3_2" => $row["date_3_2"],
            "date_3_3" => $row["date_3_3"],
            "date_3_4" => $row["date_3_4"],
            
            "date_4_1" => $row["date_4_1"],
            "date_4_2" => $row["date_4_2"],
            "date_4_3" => $row["date_4_3"],
            "date_4_4" => $row["date_4_4"],
            
            "date_5_1" => $row["date_5_1"],
            "date_5_2" => $row["date_5_2"],
            "date_5_3" => $row["date_5_3"],
            "date_5_4" => $row["date_5_4"],
            
            "date_6_1" => $row["date_6_1"],
            "date_6_2" => $row["date_6_2"],
            "date_6_3" => $row["date_6_3"],
            "date_6_4" => $row["date_6_4"],
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

// Send the data.
echo json_encode($data);

?>



