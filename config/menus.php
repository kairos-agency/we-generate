<?php

function register_my_menu()
{
    register_nav_menu('main-menu', __('Main Menu'));
    register_nav_menu('legal-menu', __('Legal Menu'));
}

add_action('init', 'register_my_menu');

function custom_menu_description( $item_output, $item, $depth, $args ) {
    if ( ! empty( $item->description ) ) {
        $item_output .= '<span class="menu-description">' . esc_html( $item->description ) . '</span>';
    }
    return $item_output;
}
add_filter( 'walker_nav_menu_start_el', 'custom_menu_description', 10, 4 );
