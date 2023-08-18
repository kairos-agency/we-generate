<footer>
    <div class="container">
        <div>
            <a class="logo" href="<?php bloginfo('url') ?>">
                <img src="https://we-generate.kairos-valley.net/wp-content/uploads/2023/08/logo-xl-we-generate.svg" alt="Logo WeGenerate" />
            </a>
            <div>
                <div class="column">
                    <?php
                        if (has_nav_menu('footer-menu')) :
                            wp_nav_menu(array(
                                'theme_location' => 'footer-menu',
                                'container' => null
                            ));
                        endif;
                    ?>
                </div>
                <div class="info">
                    <p>Stay in <em>touch</em></p>
                    <?= do_shortcode('[contact-form-7 id="c9b4d3f" title="Contact (footer)"]'); ?>
                </div>
            </div>
        </div>
        <div>
            <p>© Wegenerate, 2023. All rights reserved</p>
            <?php
            if (has_nav_menu('legal-menu')) :
                wp_nav_menu(array(
                    'theme_location' => 'legal-menu',
                    'container' => null
                ));
            endif;
            ?>

            <div>
                <a href="#" target="_blank" rel="nofollow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M5.93588 27.8707H0.09375V8.39844H5.93588V27.8707ZM27.3563 27.8707H21.5142V17.4679C21.5142 14.7575 20.5477 13.4088 18.6344 13.4088C17.9515 13.3734 17.2783 13.5824 16.7354 13.9982C16.1926 14.4141 15.8156 15.0097 15.672 15.6783V27.8729H9.82991C9.82991 27.8729 9.90809 10.3531 9.82991 8.39844H14.4406L14.7968 12.2925H14.9184C15.497 11.2873 16.334 10.4551 17.3425 9.88232C18.351 9.30951 19.4944 9.01688 20.6541 9.03477C21.5561 8.97803 22.4594 9.12416 23.2975 9.46241C24.1356 9.80067 24.8873 10.3224 25.4972 10.9894C26.8419 12.6498 27.5056 14.759 27.3541 16.8902L27.3563 27.8707Z" fill="#3B4E40"/>
                        <path d="M3.01879 6.45541C4.68603 6.45541 6.03759 5.1476 6.03759 3.53435C6.03759 1.92109 4.68603 0.613281 3.01879 0.613281C1.35156 0.613281 0 1.92109 0 3.53435C0 5.1476 1.35156 6.45541 3.01879 6.45541Z" fill="#3B4E40"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>

</html>