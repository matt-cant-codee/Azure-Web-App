<?php
$xml = simplexml_load_file('data.xml');
if (isset($_GET['type'])) {
    $type = $_GET['type'];
    if ($type === 'membership') {
        $monthlyPrice = $xml->membership->monthly->price;
        $monthlyDescription = $xml->membership->monthly->description;
        $annualPrice = $xml->membership->annual->price;
        $annualDescription = $xml->membership->annual->description;
        $content = '<h3>Membership Prices</h3>';
        $content .= '<div class="membership-container">';
        $content .= '<div class="membership-item">';
        $content .= '<h4>Monthly</h4>';
        $content .= '<p><strong>Price:</strong> ' . $monthlyPrice . '</p>';
        $content .= '<p><strong>Description:</strong> ' . $monthlyDescription . '</p>';
        $content .= '</div>';
        $content .= '<div class="membership-item">';
        $content .= '<h4>Annual</h4>';
        $content .= '<p><strong>Price:</strong> ' . $annualPrice . '</p>';
        $content .= '<p><strong>Description:</strong> ' . $annualDescription . '</p>';
        $content .= '</div>';
        $content .= '</div>';
        $content .= '<h5>To apply for membership just visit our Gym at #141 Mendoza Street, Capitol Drive, Balanga City, Bataan</h5>';
        $content .= '<h5>Or contact us through our:';
        $content .= '<h5>Phone number: 09064621408</h5>';
        $content .= '<h5>Email: MattigasGym@gmail.com</h5>';
        $content .= '<h5>Facebook: MATTigasgym</h5>';
        echo $content;
    }
    elseif ($type === 'trainers') {
        $content = '<h3>Our Trainers</h3>';
        $content .= '<div class="trainers-container">';
        foreach ($xml->trainers->trainer as $trainer) {
            $name = $trainer->name;
            $image = 'images/' . $trainer->image;
            $description = $trainer->description;
            $content .= '<div class="trainer">';
            $content .= '<img src="' . $image . '" alt="' . $name . '">';
            $content .= '<h4>' . $name . '</h4>';
            $content .= '<p>' . $description . '</p>';
            $content .= '</div>';
        }
        $content .= '</div>';
        echo $content;
    }
    else {
        echo '<p>No data available.</p>';
    }
}
?>