<?php $logos = get_field('logos', 'option'); ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php the_title(); ?></title>
    <link rel="stylesheet" href="https://use.typekit.net/vmq1fbw.css">
    <?php wp_head(); ?>
    <?php
    if (!empty($logos['favicon'])) : ?>
        <link rel="shortcut icon" href="<?= esc_url($logos['favicon']); ?>" type="image/png">
    <?php endif; ?>
</head>

<body <?php body_class(); ?>>

    <nav>
        <a class="logo" href="<?php bloginfo('url') ?>">
            <?php
                if (!empty($logos)) : ?>
                    <img 
                        src="<?= esc_url($logos['logo_navigation']['url']); ?>" 
                        alt="<?= esc_attr($logos['logo_navigation']['alt']); ?>" 
                    />
            <?php endif; ?>
        </a>

        <?php
            if (has_nav_menu('main-menu')) :
                wp_nav_menu(array(
                    'theme_location' => 'main-menu',
                    'container' => null
                ));
            endif;
        ?>
    </nav>