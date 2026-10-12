<?php
require_once __DIR__ . '/../sta-wordpress/local-test/wordpress/wp-load.php';

global $wpdb;
$row = $wpdb->get_row("SELECT ID, post_title, post_name, post_type FROM {$wpdb->posts} WHERE post_name = 'en'");
echo "Post with slug 'en':\n";
print_r($row);

$row2 = $wpdb->get_results("SELECT ID, post_title, post_name FROM {$wpdb->posts} WHERE post_title LIKE '%Engasjer%'");
echo "\nPosts with title 'Engasjer':\n";
print_r($row2);
