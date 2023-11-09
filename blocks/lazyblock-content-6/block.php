<section class="content-green content-green-text js-image image-green-top" anim>
    <div class="container grid">
        <h2 anim-title><?= $attributes['text']; ?></h2>
    </div>
    <?php if (isset($attributes['image']['url'])) : ?>
        <div anim-image class="grid_image">
            <div class="image">
                <div class="image_paralax">
                    <img src="<?= esc_url($attributes['image']['url']); ?>" alt="<?= esc_url($attributes['image']['alt']); ?>">
                </div>
                <?php for ($i = 1; $i <= 8; $i++): ?>
                    <div class="image_bg" style="background-image: url('<?= esc_url($attributes['image']['url']); ?>')"></div>
                <?php endfor; ?>
            </div>
        </div>
    <?php endif; ?>
</section>