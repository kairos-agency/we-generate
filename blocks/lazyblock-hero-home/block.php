<header class="hero-home js-image-hero">
    <div class="container grid">
        <h1><?= $attributes['title']; ?></h1>
        <div class="subtitle"><?= $attributes['text']; ?></div>
        <a class="btn-primary btn-small" href="<?php bloginfo('url'); ?>/products/ecostill/">Discover more</a>
    </div>
    <?php if (isset($attributes['image']['url'])) : ?>
        <div class="grid_image">
            <div class="image">
                <div class="image_paralax">
                    <img src="<?= esc_url($attributes['image-background']['url']); ?>" alt="<?= esc_url($attributes['image-background']['alt']); ?>">
                    <img src="<?= esc_url($attributes['image-middle']['url']); ?>" alt="<?= esc_url($attributes['image-middle']['alt']); ?>">
                    <img src="<?= esc_url($attributes['image-top']['url']); ?>" alt="<?= esc_url($attributes['image-top']['alt']); ?>">
                </div>
                <?php for ($i = 1; $i <= 7; $i++): ?>
                    <div class="image_bg" style="background-image: url('<?= esc_url($attributes['image']['url']); ?>')"></div>
                <?php endfor; ?>
            </div>
        </div>
    <?php endif; ?>
</header>