<section class="section" anim>
    <div class="container grid">
        <div class="content">
            <div>
                <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
                <h2 anim-title><?= $attributes['title']; ?></h2>
                <div anim-opacity class="subtitle"><p><?= $attributes['text']; ?></p></div>
            </div>
            <div class="cards">
                <?php foreach ($attributes['repeater'] as $inner) : ?>
                    <div class="card" anim-card>
                        <p><?= $inner['title']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>