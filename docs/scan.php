<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// 文件夹1的路径 —— 名称完全不修改
$directory = './文件夹1/';

$apps = [];

// 检查文件夹是否存在
if (!is_dir($directory)) {
    echo json_encode(['error' => '文件夹1 不存在，请创建 ./文件夹1/ 目录']);
    exit;
}

$files = scandir($directory);

foreach ($files as $file) {
    if ($file != '.' && $file != '..' && is_file($directory . $file)) {
        $filePath = $directory . $file;
        $fileSize = round(filesize($filePath) / 1048576, 1); // MB
        $fileExt = pathinfo($file, PATHINFO_EXTENSION);
        $fileName = pathinfo($file, PATHINFO_FILENAME);
        
        $apps[] = [
            'name' => $fileName,
            'version' => '1.0',
            'size' => $fileSize . ' MB',
            'category' => '应用工具',
            'description' => '来自「文件夹1」的 ' . $fileName,
            'downloadUrl' => $directory . $file,
            'filename' => $file
        ];
    }
}

// 按文件名排序
usort($apps, function($a, $b) {
    return strcmp($a['name'], $b['name']);
});

echo json_encode($apps, JSON_UNESCAPED_UNICODE);
?>