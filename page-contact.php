<?php
/**
 * Template Name: Contact
 */
?>

<?php get_header(); ?>

<header class="hero-contact">
    <div class="container">
        <h1>Connect <em>with us</em></h1>
        <div class="info">
            <div>
                <p>Phone</p>
                <p>Lisa Wyler<br/>+33 6 33 66 86 29</p>
            </div>
            <div>
                <p>Address</p>
                <p>7 chemin Gardeloup<br/>33360 Camblanes et Meynac</p>
            </div>
        </div>
        <?= do_shortcode('[contact-form-7 id="dea465c" title="Contact (page)"]'); ?>
    </div>
</header>

<?php get_footer(); ?>