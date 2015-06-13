<?php 

$action = isset($_GET['action']) ? $_GET['action'] : NULL;

    switch ($action) {
        case 'LoadImage':            
            $dir = "img/*.png";
            //get the list of all files with .png extension in the directory and safe it in an array named $images
            $images = glob($dir);
            echo json_encode($images);
            
            break;
    }
?>





     