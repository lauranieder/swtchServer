<?php 

/*Upload image*/
if(isset($_FILES['image'])){
    $errors = array();
    $feedback = array();
    $file_name = $_FILES['image']['name'];
    $file_size =$_FILES['image']['size'];
    $file_tmp =$_FILES['image']['tmp_name'];
    $file_type=$_FILES['image']['type'];   
    $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));

    $expensions= array("png"); 		
    if(in_array($file_ext,$expensions)=== false){
        $errors[]="Extension not allowed, please choose a PNG file.";
    }
    if($file_size > 2097152){
    $errors[]='File size must be less than 2 MB';
    }				
    if(empty($errors)==true){
        if(file_exists("img/") && is_dir("img/")){
            //echo "File exist";   
        }else{
            $feedback[] ="Folder doesn't exist, new folder created";
            mkdir ("img/");    
        }
        if(file_exists("img/".$file_name)){
            $file_name_only = basename($file_name, ".png");
           move_uploaded_file($file_tmp,"img/".$file_name_only."_2.png"); 
        }else{
           move_uploaded_file($file_tmp,"img/".$file_name); 
        }
        //echo "Success";
        $feedback[] = " Success";
        echo json_encode($feedback);
    }else{
        //print_r($errors);
        echo json_encode($errors);
    }
}

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





     