<section class="content-home content-green" anim>
    <div class="container grid">
        <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
        <h2 anim-title><?= $attributes['title']; ?></h2>
        <div anim-opacity class="subtitle"><p><?= $attributes['text']; ?></p></div>
        <div class="grid-3 grid-3-border">
            <?php foreach($attributes['repeater'] as $inner): ?>
                <div anim-card>
                    <h3><?= $inner['title']; ?></h3>
                    <p class="subtitle"><?= $inner['text']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>