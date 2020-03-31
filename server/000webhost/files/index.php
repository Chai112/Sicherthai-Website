<?php
function report_err($msg)
{
    $data->status = $msg;
    $data->err = true;
}

function fetch_file($filename)
{
    $filereg = fopen($filename,'r') or die("Server Error: cannot open file");
    $contents = '';
    while(!feof($filereg)) {
        $contents = $contents . fgets($filereg) . "<br>";
        
    }
    return $contents;
}

function fetch_sql($query, $cell_array)
{
    // init sql
    $servername = "sql265.main-hosting.eu";
    $username = "u540959199_sicher";
    $password = "Titacute_";
    $database = "u540959199_Courses";

    // SQL Create connection
    $db = new mysqli($servername, $username, $password, $database);


    // SQL Check connection 
    if ($db->connect_error) 
    {
        echo "connection error";
        report_err("SQL Connection failed: " . $db->connect_error);
    }

    if ($result = $db->query($query))
    {
        $index = 0;
        // fetch associative array
        while ($row = $result->fetch_assoc()) 
        {
            for($i = 0; $i < count($cell_array); $i++) {
                $answer[$index][$cell_array[$i]] = $row[$cell_array[$i]];
            }
            $index++;
        }
    }
    else
    {
        echo "SQL fail";
    }

    return $answer;
}

header("Access-Control-Allow-Origin: *"); 
header("Content-Type: application/json; charset=UTF-8");

ignore_user_abort(true);

// create output
$data = new stdClass;
$data->status = "GO.";
$data->answer = array();

// get input
$inp_type = $_GET['type'];
if ($inp_type === "REQUEST")
{
    $inp_item = $_GET['item'];

    if ($inp_item === "ALL_COURSES")
    {
        $query = "SELECT * FROM InhouseCourses";
        $row_array = array(
            "id",
            "name",
            "category");

        $data->answer = fetch_sql($query, $row_array);
        /*

        if ($result = $db->query($query)) // TODO: unsanitised
        {
            $index = 0;
            // fetch associative array
            while ($row = $result->fetch_assoc()) 
            {
                $data->answer[$index] = array(
                    "id" => $row["id"],
                    "name" => $row["name"],
                    "category" => $row["category"],
                );
                $index++;
            }
        }
        else
        {
            echo "SQL fail";
        }
         */
    }

    if ($inp_item === "INHOUSE_COURSES")
    {
        $inp_id = $_GET['id'];
        $query = "SELECT * FROM InhouseCourses where id = " . $inp_id;
        $row_array = array("id", "name", "category");

        $data->answer = fetch_sql($query, $row_array);
    }

    if ($inp_item === "PUBLIC_COURSES")
    {
        $inp_id = $_GET['id'];
        $query = "SELECT * FROM InhouseCourses where id = " . $inp_id;
        $row_array = array("id", "name", "category");

        $data->answer = fetch_sql($query, $row_array);
    }
}
//$result->free();

// read from file
//echo fetch_file('data/itinerary/a');
/*


// SQL get info
$index = 0;
//$query = "SELECT id FROM Courses WHERE name = '" .$q ."'";
$query = "SELECT * FROM InhouseCourses";
if ($result = $db->query($query)) // TODO: unsanitised
{
    // fetch associative array
    while ($row = $result->fetch_assoc()) 
    {
        $data->answer[$index] = array(
            "id" => $row["id"],
            "name" => $row["name"],
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
            "presentation_description" => $row["prerequisites"],
            "event_schedule" => $row["itinerary"],
            
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
 */
            /*
            "date_5_1" => $row["date_5_1"],
            "date_5_2" => $row["date_5_2"],
            "date_5_3" => $row["date_5_3"],
            "date_5_4" => $row["date_5_4"],
            
            "date_6_1" => $row["date_6_1"],
            "date_6_2" => $row["date_6_2"],
            "date_6_3" => $row["date_6_3"],
            "date_6_4" => $row["date_6_4"],
            */
            
/*
            "category" => $row["category"],
        );
        $index++;
    }
    // free result set
    $result->free();
}
else
{
    //report_err("SQL Message failed: " .$result);
}
 */

// Send the data.
echo json_encode($data);

?>







