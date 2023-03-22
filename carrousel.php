<?php
/**
* Extension carrousel permet d'afficher dans une boîte modale 
* les images d'une galerie
* Package name : Carrousel
* Version: 1.0.0
*/
/*
Plugin name: Carrousel
Author: Xavier Paulin
Plugin URI: https://github.com/e2194727Xavier/carrousel_31w/tree/tp1
Description: Permet d'afficher dans une boîte modale les images d'une galerie avec un système de navigation
*/


function carrousel_enqueue(){

$version_css = filemtime(plugin_dir_path(__FILE__ ) . "style.css");
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

wp_enqueue_style(   'em_plugin_carrousel_css',
plugin_dir_url(__FILE__) . "style.css",
array(),
$version_css);

wp_enqueue_script(  'em_plugin_carrousel_js',
plugin_dir_url(__FILE__) ."js/carrousel.js",
array(),
$version_js,
true);
}

add_action('wp_enqueue_scripts', 'carrousel_enqueue');

function creation_carrousel()
{
return '
    <div class="carrousel">
    <button class="bouton__x">X</button>
    <figure class="carrousel__figure"></figure>
    <div class="controls">
    <button class="bouton__precedent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg></button>
        <button class="bouton__prochain"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></button>
    </div>
    <form class="carrousel__form"></form>
    </div>';
}  

add_shortcode('carrousel', 'creation_carrousel');