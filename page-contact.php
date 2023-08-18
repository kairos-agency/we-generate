<?php
/**
 * Template Name: Contact
 */
?>

<?php get_header(); ?>

<header class="hero-contact">
    <div class="container">
        <h1>Connect <em>with us</em></h1>
        <?= do_shortcode('[contact-form-7 id="dea465c" title="Contact (page)"]'); ?>
    </div>
</header>

<?php get_footer(); ?>