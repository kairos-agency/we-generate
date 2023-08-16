<section class="content js-image">
    <div class="container grid">
        <p class="overtitle"><?= $attributes['overtitle']; ?></p>
        <h1><?= $attributes['title']; ?></h1>
        <p><?= $attributes['text']; ?></p>
    </div>
    <?php if (isset($attributes['image']['url'])) : ?>
        <div class="grid_image">
            <div class="image">
                <!-- <div class="image_paralax">
                    <img src="<?= esc_url($attributes['image-background']['url']); ?>" alt="<?= esc_url($attributes['image-background']['alt']); ?>">
                    <img src="<?= esc_url($attributes['image-middle']['url']); ?>" alt="<?= esc_url($attributes['image-middle']['alt']); ?>">
                    <img src="<?= esc_url($attributes['image-top']['url']); ?>" alt="<?= esc_url($attributes['image-top']['alt']); ?>">
                </div> -->
                <?php for ($i = 1; $i <= 7; $i++): ?>
                    <div class="image_bg" style="background-image: url('<?= esc_url($attributes['image']['url']); ?>')"></div>
                <?php endfor; ?>
            </div>
        </div>
    <?php endif; ?>
</section>