<section class="content-home js-image">
    <div class="container grid">
        <p class="overtitle"><?= $attributes['overtitle']; ?></p>
        <h2><?= $attributes['title']; ?></h2>
        <div class="subtitle"><?= $attributes['text']; ?></div>
    </div>
    <?php if (isset($attributes['image']['url'])) : ?>
        <div class="grid_image">
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