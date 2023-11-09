<section class="section" anim>
    <div class="container grid">
        <div class="content">
            <div>
                <p anim-opacity class="overtitle"><?= $attributes['overtitle']; ?></p>
                <h2 anim-title><?= $attributes['title']; ?></h2>
            </div>
            <div class="big-grid" anim-scale>
                <div class="first-row">
                    <?php
                    $first_row_content = array_slice($attributes['repeater'], 0, 3);
                    foreach ($first_row_content as $inner) :
                    ?>
                        <div anim-card>
                            <h3><strong><?= $inner['title']; ?></strong></h3>
                            <p><?= $inner['text']; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="second-row">
                    <?php
                    $second_row_content = array_slice($attributes['repeater'], 3);
                    foreach ($second_row_content as $inner) :
                    ?>
                        <div anim-card>
                            <h3><strong><?= $inner['title']; ?></strong></h3>
                            <p><?= $inner['text']; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>