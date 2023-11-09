<section class="section" anim>
    <div class="container grid">
        <div class="content">
            <div>
                <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
                <h2 anim-title><?= $attributes['title']; ?></h2>
                <div anim-opacity class="subtitle"><p><?= $attributes['text']; ?></p></div>
                <p anim-opacity class="small-title"><?= $attributes['title-cards']; ?></p>
            </div>
            <div class="cards" anim-scale>
                <?php foreach ($attributes['repeater'] as $key => $inner) : ?>
                    <?php if ($key <= 2) : ?>
                        <div class="card" anim-card>
                            <p><?= $inner['title']; ?></p>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
            <div class="list">
                <?php foreach (array_slice($attributes['repeater'], 3) as $key => $inner) : ?>
                    <div anim-list>
                        <h4 class="arrow-<?= $inner['arrow-up-or-down'] ? 'ne' : 'se' ?>"><?= $inner['title']; ?></h4>
                        <div>
                            <?= $inner['description']; ?>
                        </div>
                    </div>
                    <hr anim-list>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>