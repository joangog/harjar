<?php
include "config.php";

$count = 0;

$sql = $conn->query("SELECT COUNT(DISTINCT isp) as count FROM entry");
if($sql){
    $count = $sql->fetch_assoc()['count'];
}

echo json_encode($count);
?>
