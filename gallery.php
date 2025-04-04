<?php
$xml = simplexml_load_file('data.xml');
$content = '<div class="gallery-container">';
foreach ($xml->gallery->image as $image) {
    $url = 'images/' . $image->url;
    $description = $image->description;
    $content .= '<div class="gallery-item">';
    $content .= '<img src="' . $url . '" alt="' . $description . '">';
    $content .= '<p>' . $description . '</p>';
    $content .= '</div>';
}
$content .= '</div>';
echo $content; die;
?>