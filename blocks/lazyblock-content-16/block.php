<section class="section" anim>
    <div class="container grid">
        <div class="content">
            <div>
                <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
                <h2 anim-title><?= $attributes['title']; ?></h2>
            </div>
            <div class="three-cards">
                <?php foreach ($attributes['repeater'] as $inner) : ?>
                    <div class="card" anim-card>
                        <img src="<?= esc_url($inner['logo']['url']); ?>" alt="<?= esc_url($inner['logo']['alt']); ?>">
                        <p><?= $inner['title']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>