<section class="slider">
    <div class="dots">
        <span class="active"></span>
        <span></span>
        <span></span>
    </div>
    <div class="slides">
        <?php $loop = 1; ?>
        <?php foreach ($attributes['repeater'] as $key => $inner) : ?>
            <div class="slide<?= ($key === 0) ? ' active' : ''; ?>">
                <canvas id="loop<?= $loop; ?>"></canvas>
                <img src="<?= esc_url($inner['icon']['url']); ?>" alt="<?= esc_attr($inner['icon']['alt']); ?>">
                <p><?= $inner['text']; ?></p>
            </div>
            <?php $loop++; ?>
        <?php endforeach; ?>
    </div>
</section>