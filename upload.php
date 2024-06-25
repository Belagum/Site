<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Проверяем, существует ли директория
if (!is_dir($target_dir)) {
    mkdir($target_dir, 0777, true);
}

