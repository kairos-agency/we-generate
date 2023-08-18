<?php
/**
 * Template Name: Contact
 */
?>

<?php get_header(); ?>

<header class="hero-contact js-page-contact">
    <div class="container">
        <h1 anim-title>Connect <em>with us</em></h1>
        <div anim-scale>
            <?= do_shortcode('[contact-form-7 id="dea465c" title="Contact (page)"]'); ?>
        </div>
    </div>
</header>

<?php get_footer(); ?>