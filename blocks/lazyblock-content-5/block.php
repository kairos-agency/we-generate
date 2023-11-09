<section class="content-green content-green-text padding-small" anim>
    <div class="container">
        <h2 anim-title><?= $attributes['title']; ?></h2>
        <div class="grid-3">
            <?php foreach($attributes['repeater'] as $inner): ?>
                <div anim-card>
                    <h3><?= $inner['title']; ?></h3>
                    <p class="subtitle"><?= $inner['text']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>