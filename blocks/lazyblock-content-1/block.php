<section class="content js-image">
    <div class="container grid">
        <p class="overtitle"><?= $attributes['overtitle']; ?></p>
        <h1><?= $attributes['title']; ?></h1>
        <p><?= $attributes['text']; ?></p>
    </div>
    <?php if (isset($attributes['image']['url'])) : ?>
        <div class="grid_image">
            <div class="image">
                <?php for ($i = 1; $i <= 8; $i++): ?>
                    <div style="background-image: url('<?= esc_url($attributes['image']['url']); ?>')"></div>
                <?php endfor; ?>
            </div>
        </div>
    <?php endif; ?>
</section>

<div style="height: 150vh; background: red;"><p>lorem</p></div>