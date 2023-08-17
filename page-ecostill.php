<?php

/**
 * Template Name: EcoStill
 */
?>

<?php get_header(); ?>

<header class="hero js-model">
    <div class="container grid">
        <h1>Next Level <em>Cannabis Production technology</em></h1>
        <p class="subtitle">Regenerative Biomass Microfactory<br />Optimizes Operations with Circular Production and Upcycling<br />Maximize Profitability • Revitalize Ecosystem • Support Community</p>
        <div>
            <p>EcoStill</p>
            <p>XL</p>
        </div>
    </div>

    <div class="model">
        <div>
            <canvas id="model"></canvas>
            <span class="circle"></span>
            <p class="text1">
                <span></span>
                Add a competitive advantage<br />to your business through<br />regenerative design
            </p>
            <p class="text2">Use the CO2 to <em>cultivate</em><br />& grow <em>cannabis</em></p>
            <p class="text3">While producing<br /><em>ethanol</em>!</p>
            <span class="gradient"></span>
        </div>
    </div>
</header>

<section class="slider">
    <div class="dots">
        <span class="active"></span>
        <span></span>
        <span></span>
    </div>
    <div class="slides">
        <div class="slide active">
            <canvas id="loop1"></canvas>
            <p>Replace Overhead with New Revenue<br />Convert Costs to Profits</p>
        </div>
        <div class="slide">
            <canvas id="loop2"></canvas>
            <p>Transform Byproducts & Waste Into<br />Additional Product & Co-products</p>
        </div>
        <div class="slide">
            <canvas id="loop3"></canvas>
            <p>The EcoStill XL is fully automated,<br />self-cleaning</p>
        </div>
    </div>
</section>

<section class="section">
    <div class="container grid">
        <div class="content">
            <div>
                <p class="overtitle">What it is</p>
                <h2>Regenerative Biomass Microfactory</h2>
                <p class="subtitle">Ethanol Microdistillery • CO2 Generator • Power Plant • Fertilization Unit</p>
            </div>
            <div class="cards">
                <div class="card">
                    <p>Compact</p>
                </div>
                <div class="card">
                    <p>Automated</p>
                </div>
                <div class="card">
                    <p>Multifonctional</p>
                </div>
                <div class="card">
                    <p>Circular</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container grid">
        <div class="content">
            <div>
                <p class="overtitle">turnkey operational upgrade</p>
                <h2>Complete Biomass Upcycling</h2>
                <p class="subtitle">Multiple Commercial Outputs </p>
            </div>
            <div class="comparator">
                <div>
                    <h3><strong>Ethanol</strong> <br />Microdistillery</h3>
                    <p><strong>Produces</strong> premium bio-ethanol.</p>
                    <ul>
                        <li>From Starch or Sugar</li>
                        <li>From Cellulose</li>
                    </ul>
                </div>
                <div>
                    <h3><strong>CO2 Gas</strong> <br />Generator</h3>
                    <p><strong>Coproduces & Collects</strong> carbon dioxide.</p>
                    <ul>
                        <li>Crop Fertilization</li>
                        <li>Commodity Resale</li>
                    </ul>
                </div>
                <div>
                    <h3><strong>Biochar</strong> <br />power Plant</h3>
                    <p><strong>Generates</strong> heat and biochar.</p>
                    <ul>
                        <li>Gasifier</li>
                        <li>Oil Heater</li>
                    </ul>
                </div>
                <div>
                    <h3><strong>Plant Waste</strong> <br />Upcycler</h3>
                    <p><strong>Regenerates</strong> biomass completely.</p>
                    <ul>
                        <li>Upcycles New Products</li>
                        <li>Disposes Costly Harmful Waste</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="container grid">
        <div class="content">
            <div>
                <p class="overtitle">ECONOMICALLY REGENERATIVE</p>
                <h2>Return On Investment<br />50 Cycles / 1 Year</h2>
                <p class="subtitle">Benefits</p>
                <p class="small-title">Ethanol Micro Distillery • CO2 Power Plant • Fertilizer</p>
            </div>
            <div class="cards">
                <div class="card">
                    <p>Compact</p>
                </div>
                <div class="card">
                    <p>Automated</p>
                </div>
                <div class="card">
                    <p>Multifonctional</p>
                </div>

            </div>
        </div>
    </div>
</section>

<section class="contact">
    <div class="container grid">
        <div>
            <p class="overtitle">Contact</p>
            <h2><em>Connect With Us</em></h2>
        </div>
        <?= do_shortcode('[contact-form-7 id="e55876e" title="Contact"]'); ?>
    </div>
</section>

<?php get_footer(); ?>