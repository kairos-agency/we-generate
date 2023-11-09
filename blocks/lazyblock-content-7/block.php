<section class="content-home" anim>
    <div class="container grid">
        <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
        <h2 anim-title><?= $attributes['title']; ?></h2>
        <div anim-opacity class="subtitle"><p><?= $attributes['text']; ?></p></div>
        <div class="big-three-cards" anim-scale>
            <h3><?= $attributes['title-cards']; ?></h3>
            <div class="cards">
                <?php foreach($attributes['repeater'] as $inner): ?>
                    <div anim-card>
                        <img src="<?= esc_url($inner['image']['url']); ?>" alt="<?= esc_url($inner['image']['alt']); ?>">
                        <h4><?= $inner['title']; ?></h4>
                        <p><?= $inner['text']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>