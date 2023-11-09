<section class="section" anim>
    <div class="container grid">
        <div class="content">
            <div>
                <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
                <h2 anim-title><?= $attributes['title']; ?></h2>
                <div anim-opacity class="subtitle"><p><?= $attributes['text']; ?></p></div>
            </div>
            <div class="comparator" anim-scale>
                <?php foreach ($attributes['repeater'] as $inner) : ?>
                    <div anim-card>
                        <h3><?= $inner['title']; ?></h3>
                        <p><?= $inner['text']; ?></p>
                        <?= $inner['list']; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>