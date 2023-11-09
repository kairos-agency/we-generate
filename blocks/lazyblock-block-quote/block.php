<section class="section17">
    <div class="container max grid">
        <?php if (!empty($attributes['quote'])) : ?>
            <p class="text-big"><?php echo $attributes['quote']; ?></p>
        <?php endif; ?>
        <?php if (!empty($attributes['author'])) : ?>
            <p class="subtitle text"><?php echo $attributes['author']; ?></p>
        <?php endif; ?>
    </div>
</header>