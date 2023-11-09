<section class="content-home content-green" anim>
    <div class="container grid prefooter">
        <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
        <h2 anim-title><?= $attributes['title']; ?></h2>
        <div anim-opacity class="subtitle"><p><?= $attributes['text']; ?></p></div>
        <div class="cta">
            <h2 anim-title><?= $attributes['subtitle']; ?></h2>
            <p anim-opacity><?= $attributes['sub-text']; ?></p>
            <a anim-scale class="button" href="<?php esc_url($attributes['link']) ?>"><?= $attributes['button']; ?></a>
        </div>
    </div>
</section>