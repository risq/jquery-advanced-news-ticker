JQuery Advanced News Ticker 1.0.11
===========================

A powerful, flexible and animated vertical news ticker plugin for JQuery.
JQuery Advanced News Ticker provides multiple callbacks and methods to allow a maximum flexibility and an easy implementation into any project.

DEMO
===========================
[JQuery Advanced News Ticker 1.0.1 Demo](http://risq.github.io/jquery-advanced-news-ticker)

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

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="js/newsTicker.js"></script>
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
    duration: 4000,
    autostart: 1,
    pauseOnHover: 0
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
    duration: 6000,
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
With methods :
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

Options & Callbacks
===========================
| Parameter       | Usage                                                                               | Type/Values     | Default value |
| --------------- | ----------------------------------------------------------------------------------- | --------------- | ------------- |
| `row_height`    | defines the height (in px) of one row                                               | `int`           | *22*
| `max_row`       | defines the number of rows displayed at the same time                               | `int`           | *3*
| `speed`         | defines the animation speed (in ms)of the rows moving up or down                    | `int` *(in ms)* | *400*
| `duration`      | defines the times (in ms) before the rows automatically move                        | `int` *(in ms)* | *2500*
| `direction`     | defines the direction of the rows movement                                          | `up` *or* `down`| *'up'*
| `autostart`     | enable/disable auto start on load                                                   | `0` *or* `1`    | *1*
| `pauseOnHover`  | enable/disable pause when mouse hovers the newsTicker element                       | `0` *or* `1`    | *1*
| `nextButton`    | set the element triggering `next` action on click                                   | `JQuery element`| *null*
| `prevButton`    | set the element triggering `prev` action on click                                   | `JQuery element`| *null*
| `startButton`   | set the element triggering `start` action on click                                  | `JQuery element`| *null*
| `stopButton`    | set the element triggering `stop` action on click                                   | `JQuery element`| *null*
| `hasMoved`      | `callback` called at the end of every movement animation                            | `function`      | 
| `movingUp`      | `callback` called before launching `moving up` action                               | `function`      | 
| `movingDown`    | `callback` called before launching `moving down` action                             | `function`      | 
| `start`         | `callback` called on `start` action                                                 | `function`      | 
| `stop`          | `callback` called on `stop` action                                                  | `function`      | 
| `pause`         | `callback` called on `pause` action (triggered on `mouseOver` if `pauseOnHover=1`)   | `function`      | 
| `unpause`       | called on `unpause` action (triggered on `mouseOut` if `pauseOnHover=1`)             | `function`      | 

Methods
===========================
After initializing a newsTicker instance, methods are called with `.newsTicker('methodName', 'param1', 'param2', ... )`

Example :
`````javascript
var nt = $('.newsticker').newsTicker();
nt.newsTicker('stop');
nt.newsTicker('updateOption','direction','down');
var state = nt.newsTicker('getState');
`````

<h3>Methods list</h3>
| Method        | Parameter(s)         | Action                                                             |
| -----------   | -------------------- | ------------------------------------------------------------------ |
| `start`       |                      | starts moving newsTicker elements                                  |
| `stop`        |                      | stops moving newsTicker elements                                   |
| `updateOption`|`optionName`, `value` | update an option (see **Options & Callbacks** for options list)        |
| `getState`    |                      | returns current state : `0` = stopped, `1` = started, `2` = paused (and started) |
| `pause`       |                      | pauses newsTicker elements without stopping them - the newsTicker has to be started to be able to pause it  (the `pause` method is called on `mouseOver` if `pauseOnHover` = 1)|
| `unpause`     |                      | unpauses newsTicker elements - the newsTicker has to be started & paused to be able to unpause it  (the `unpause` method is called on `mouseOut` if `pauseOnHover` = 1)|
| `moveDown`    |                      | moves elements down                                                |
| `moveUp`      |                      | moves elements up                                                  |
| `moveNext`    |                      | moves up or down according to the current `direction` option       |
| `movePrev`    |                      | moves up or down according to the current `direction` option       |
| `move`        |                      | equivalent to `moveNext`, but will not move if `paused`            |
| `add`         | `content`            | adds a ticker row                                                  |



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/risq/jquery-advanced-news-ticker/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

