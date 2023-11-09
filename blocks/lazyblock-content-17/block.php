<section class="contact" anim>
    <div class="container grid">
        <div>
            <p anim-opacity class="overtitle"><?= $attributes['title']; ?></p>
            <h2 anim-title><?= $attributes['text']; ?></h2>
        </div>
        <div anim-scale>
            <?= do_shortcode($attributes['shortcode']); ?>
        </div>
    </div>
</section>