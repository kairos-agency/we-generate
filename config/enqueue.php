<?php

function enqueue_assets()
{
    wp_enqueue_style('neptune-style', get_template_directory_uri() . '/dist/styles/style.css', [], '1.0', 'all');
    wp_enqueue_script('neptune-script', get_template_directory_uri() . '/dist/scripts/bundle.js', [], '1.0', true);

    wp_localize_script('neptune-script', 'wp_ajax', array('ajax_url' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'enqueue_assets');
