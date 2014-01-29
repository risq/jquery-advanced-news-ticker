jquery-advanced-news-ticker
===========================

An powerful and flexible animated vertical news ticker plugin for JQuery.
JQuery Advanced News Ticker provides multiple callbacks and actions to allow a maximum flexibility and an easy implementation into any project.

DEMO
===========================

Usage
===========================
HTML: a simple list, which may be fully customized.
`````html
<ul class="newsticker">
    <li>Etiam imperdiet volutpat libero eu tristique.</li>
    <li>Curabitur porttitor ante eget hendrerit adipiscing.</li>
    <li>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</li>
    <li>Nunc ultrices tortor eu massa placerat posuere.</li>
</ul>
`````
Basic usage :
`````javascript
$('.newsticker').newsTicker();
`````
With custom parameters :
`````javascript
$('.newsticker').newsTicker({
    row_height: 48,
    max_rows: 2,
    speed: 600,
    direction: 'up',
    time: 4000,
    autostart: 1,
    stopOnHover: 0
});
`````
With (custom) control buttons :
`````javascript
$('.newsticker').newsTicker({
    row_height: 64,
    speed: 800,
    prevButton:  $('#prev-button'),
    nextButton:  $('#next-button'),
    stopButton:  $('#stop-button'),
    startButton: $('#start-button')
});
`````
With callbacks :
`````javascript
$('.newsticker').newsTicker({
    max_rows: 1,
    time: 6000,
    startButton: $('.start'),
    hasMoved: updateInfos,
    start: function() {
        console.log('newsTicker just started !');
    },
    pause: function() {
        console.log('newsTicker has been paused.');
    }
});

function updateInfos() {
    //...
}
`````
With actions :
`````javascript
var nt = $('.newsticker').newsTicker({
    autostart: 0,
    speed: 400
});

nt.newsTicker('start');

$('.newsTicker-header').hover(function() {
    nt.newsTicker('pause');
}, function() {
    nt.newsTicker('unpause');
});

nt.newsTicker('updateOption','speed',1000);
nt.newsTicker('updateOption','direction','down');
`````

Parameters & Callbacks
===========================
| Parameter     | Usage         | Type/Values   | Default value |
| ------------- | ------------- | ------------- | ------------- |
| row_height    |
| max_row       |
| speed         |
| direction     |
| time
| autostart
| stopOnHover
| nextButton
| prevButton
| startButton
| stopButton
| hasMoved
| 
| 
| 
| 
