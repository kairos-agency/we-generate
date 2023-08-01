<?php

function register_my_menu()
{
    register_nav_menu('menu-principal', __('Menu principal'));
    register_nav_menu('menu-principal-pages', __('Menu principal Pages'));
    register_nav_menu('menu-footer', __('Menu footer'));
    register_nav_menu('menu-footer-pages', __('Menu footer Pages'));
    register_nav_menu('menu-footer-bottom', __('Menu footer-bottom'));
}

add_action('init', 'register_my_menu');
