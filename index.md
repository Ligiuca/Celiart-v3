---
title: Celiart
description: A Jekyll based shopping cart built with simpleCart(js).
sidebar_option: sidebar
featured_image_path:
facebook_image_path:
---

Bine ai venit în lumea artei. Pregătește-te să te bucuri de experiența ta aici, și de serviciile pe care noi ți le putem oferi. Am realizat acest magazin online pentru ca mulți să poată comanda artă, sub diferite forme. Fie că este vorba de realizarea unui portret, sau de lucururi personalizate, noi îți putem îndeplini dorința! Poți găsi în secțiunea products lucurile pe care le avem deja expuse, sau în secțiunea personalizări de unde poți comanda diferite obiecte care să aibă amprenta ta. Începe de acum călătoria artei!

<!-- carusel -->
<!-- css -->
<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Verdana, sans-serif;
    }

    .mySlides {
        display: none;
    }

    img {
        vertical-align: middle;
    }

    /* Slideshow container */
    .slideshow-container {
        max-width: 1000px;
        position: relative;
        margin: auto;
    }

    /* Caption text */
    .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
    }

    /* Number text (1/3 etc) */
    .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }

    /* The dots/bullets/indicators */
    .dot {
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active {
        background-color: #717171;
    }

    /* Fading animation */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    @keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    /* On smaller screens, decrease text size */
    @media only screen and (max-width: 300px) {
        .text {
            font-size: 11px
        }
    }

    /* custom */
    .slideshow-container {
        width: 100%;
        padding-top: 60%;
    }

    .mySlides {
        display: none;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0;
        overflow: hidden;
    }
</style>
<!-- html -->
<div class="slideshow-container">

    <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="../raw/img/carusel-1-papusi-v2.jpg" style="width:100%">
        <div class="text"></div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="../raw/img/carusel-1-material-roz-v2.jpg" style="width:100%">
        <div class="text"></div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="../raw/img/carusel-1-material-albastru-v2.jpg" style="width:100%">
        <div class="text"></div>
    </div>

</div>
<br>

<div style="text-align:center">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div>
<!-- js -->
<script>
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
</script>

<!-- /carusel -->
<!-- products -->
<!-- css -->
<style>
    .productsParent {
        background-color: white;
        padding: 30px 0 30px;
    }

    .products {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        max-width: 1200px;
        margin: auto;
    }

    * {
        z-index: 2;
        position: relative;
    }

    .produs {
        height: 300px;
        width: 350px;
        margin: 15px;
        padding: 20px 30px;
        position: relative;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(31, 0, 46, 0.35);
    }

    @media screen and (max-width: 600px) {
        .produs {
            margin: 12.5px 25px;
            width: 100%;
        }
    }

    h3 {
        text-align: center;
        margin: auto;
        letter-spacing: 1px;
        font-size: 26px !important;
        line-height: 28px;
        text-shadow: 1px 1px 1px black;
    }

    .products h3{
                color: #fff;
    }

    .overlay {
        width: 100%;
        height: 35%;
        position: absolute;
        top: 0;
        left: 0;
        // background-color: rgba(0,0,0,.13);
        background: linear-gradient(to bottom,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0) 100%);
        z-index: 1;
        border-radius: 4px;
    }

    .produs {
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
<!-- html -->
<!-- p1 -->
<h2>Personalizari</h2>
<div class="productsParent">
    <div class="products">
        <div style="background-image: url('raw/img/personalizari/pictura-jurnal.jpg');" class="produs">
            <div class="overlay"></div>
            <h3>Pictura jurnal</h3>
        </div>
        <div style="background-image: url('raw/img/personalizari/breloguri.jpg');" class="produs">
            <h3>Brelocuri</h3>
            <div class="overlay"></div>
        </div>
        <div style="background-image: url('raw/img/personalizari/ghiozdane.jpg');" class="produs">
            <h3>Ghiozdane</h3>
            <div class="overlay"></div>
        </div>
        <div style="background-image: url('raw/img/personalizari/caricaturi.jpg');" class="produs">
            <div class="overlay"></div>
            <h3>Caricaturi</h3>
        </div>
        <div style="background-image: url('raw/img/personalizari/tricouri.jpg');" class="produs">
            <div class="overlay"></div>
            <h3>Tricouri</h3>
        </div>
    </div>
</div>
<!-- p2 -->
<h2>Produse</h2>
<div class="productsParent">
    <div class="products">
        <div style="background-image: url('raw/img/tablouri/peisaj-de-toamna.jpg');" class="produs">
            <div class="overlay"></div>
            <h3>Peisaj de toamna</h3>
        </div>
        <div style="background-image: url('raw/img/tablouri/noapte-sinistra.jpg');" class="produs">
            <h3>Noapte sinistra</h3>
            <div class="overlay"></div>
        </div>
    </div>
</div>
<!-- /products -->
<!-- stiati ca -->
<h2>Știai că...?</h2>
<ol>
    <li>
        Leonardo da Vinci ar fi colaborat cu Verrocchio la realizarea “Botezului lui Cristos”, a pictat un înger care
        ridică roba lui Isus într-o manieră mult superioară de cea a maestrului său, încât Verrocchio, umilit, n-ar mai
        fi pictat niciodată.
    </li>
    <li>
        În 1472, după șase ani de studiu și muncă susținută, Leonardo da Vinci, la vârsta de numai 20 de ani, s-a
        calificat maestru.
    </li>
    <li>
        Ochiul uman poate distinge în jur de 10 milioane de culori diferite.
    </li>
    <li>
        Michelangelo a realizat Pietà(sculptură a Madonnei si fiului ei) la vârsta de 24 de ani.
    </li>
    <li>
        În anul 1549, Michelangelo a fost numit de Papă „arhitect-șef și constructor al bazilicii Sfântul Petru”
    </li>
</ol>
<!-- /stiati ca -->
<!-- De ce noi? -->
<!-- css -->
<style>
    .columns {
        display: flex;
        flex-flow: row;
    }

    @media screen and (max-width: 600px) {
        .columns {
            flex-flow: column;
        }
    }

    .column {
        width: 100%;
        max-width: 400px;
        margin: 15px;
    }
</style>
<!-- html -->
<h2>De ce noi?</h2>
<div class="columns">
    <div class="column">
        <img src="raw/img/de-ce-noi.jpg">
    </div>
    <div class="column">
        <h3>Alegere</h3>

        <p>Site-ul nostru oferă posibilitatea de achiziționare a artei deja expusă, și nu în ultimul rând îi dă
            posibilitatea cumpărătrului de a cumpăra tablouri/semne de carte/lucruri personalizate pe comandă. Aceasta
            însemnând că după preferințele cumpărătorului se va stabili tema tabloului(ex. Natură statică, portrete,
            artă abstractă) sau tema/citatul/desenul pentru personalizarea diferitelor obiecte(tricouri, semne de carte,
            etc.) și nu în ultimul rând stabilirea formelor pentru brelocuri.</p>

        <h3>Satisfacție garantată</h3>

        <p>Posibilitatea de ați primi banii înapoi în termen de 7 zile, îți oferă curajul de a cumpăra cu încredere de
            pe site-ul nostru. Dacă dintr-un anumit motiv, nu ești satisfăcut de achiziția realizată, returneaz-o și te
            vom ajuta să găsești o lucrare care să îți placă.</p>

        <h3>Artă originala și sustenabilă</h3>

        <p>Celiart.ro conține lucrări de artă realizate cu pasiune și din dorința de a crea frumosul. Lucrările expuse
            au fost făcute în timp și din materiale calitative ce vor rezista trecerii vremii. Astfel dorim să vă oferim
            cele mai frumoase products, executate cu măiestrie și rafinament destinate dumneavoastră, cumpărătorilor
            noștri.</p>

        <h3>Transportul</h3>

        <p>Ne ocupăm de toate aspectele transportului pentru o livrare cât mai facilă și utilă pentru dumneavoastră. Nu
            va dura mai mult de 4 zile ca produsul dorit să ajungă la dumneavoastră.</p>

        <h3>Realizare</h3>

        <p>Produsele noastre necesită timp, astfel că orice lucrare în funcție de gradul de dificultate va fi realizată
            în decursul a 3-5 zile. Perioadă în care artistul va creiona schița, va contopi culorile și va finaliza
            capodopera.</p>
    </div>
</div>
<!-- /De ce noi? -->