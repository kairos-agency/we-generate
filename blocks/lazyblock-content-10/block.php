<div id="loader" class="loader">
    <p>Loading</p>
    <div class="progress-container">
        <div class="progress-bar"></div>
    </div>
</div>

<header class="hero js-model">
    <div class="container grid">
        <h1 anim-title><?= $attributes['title']; ?></h1>
        <p anim-opacity class="subtitle"><?= $attributes['text']; ?></p>
        <div anim-scale>
            <p><?= $attributes['name']; ?></p>
            <p><?= $attributes['info']; ?></p>
        </div>
    </div>

    <div class="model">
        <div>
            <canvas id="model"></canvas>
            <span class="circle"></span>
            <p class="text1">
                <span></span>
                <?= $attributes['text-1-on-scroll']; ?>
            </p>
            <p class="text2"><?= $attributes['text-2-on-scroll']; ?></p>
            <p class="text3"><?= $attributes['text-3-on-scroll']; ?></p>
            <span class="gradient"></span>
        </div>
    </div>
</header>

