JQuery Advanced News Ticker
===========================

A powerful, flexible and animated vertical news ticker plugin for JQuery.
JQuery Advanced News Ticker provides multiple callbacks and actions to allow a maximum flexibility and an easy implementation into any project.

DEMO
===========================
[One Line & Multilines Examples](http://risq.github.io/jquery-advanced-news-ticker/demo.html)

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
| Parameter       | Usage                                                              | Type/Values   | Default value |
| --------------- | ------------------------------------------------------------------ | ------------- | ------------- |
| `row_height`    | defines the height (in px) of one row                              | `int`           | *22*
| `max_row`       | defines the number of rows displayed at the same time              | `int`           | *3*
| `speed`         | defines the animation speed (in ms)of the rows moving up or down   | `int` *(in ms)* | *400*
| `direction`     | defines the direction of the rows movement                         | `up` *or* `down`| *'up'*
| `time`          | defines the times (in ms) before the rows automatically move       | `int` *(in ms)* | *2500*
| `autostart`     | enable/disable auto start on load                                  | `0` *or* `1`    | *1*
| `stopOnHover`   | enable/disable pause when mouse hovers the newsTicker element      | `0` *or* `1`    | *1*
| `nextButton`    | set the element triggering `next` action on click                  | `JQuery element`| *null*
| `prevButton`    | set the element triggering `prev` action on click                  | `JQuery element`| *null*
| `startButton`   | set the element triggering `start` action on click                 | `JQuery element`| *null*
| `stopButton`    | set the element triggering `stop` action on click                  | `JQuery element`| *null*
| `hasMoved`      | `callback` called at the end of every movement animation           | `function`      | 
| `movingUp`      | `callback` called before launching `moving up` action              | `function`      | 
| `movingDown`    | `callback` called before launching `moving down` action            | `function`      | 
| `start`         | `callback` called on `start` action                                | `function`      | 
| `stop`          | `callback` called on `stop` action                                 | `function`      | 
| `pause`         | `callback` called on `pause` action (triggered on `mouseOver` if `stopOnHover=1`) | `function`      | 
| `unpause`       | called on `unpause` action (triggered on `mouseOut` if `stopOnHover=1`)| `function`      | 

Actions
===========================
After initializing a newsTicker instance, actions are called with `.newsTicker('actionName', 'param1', 'param2', ... )`

Example :
`````javascript
var nt = $('.newsticker').newsTicker();
nt.newsTicker('stop');
nt.newsTicker('updateOption','direction','down');
var state = nt.newsTicker('getState');
`````

<h4>Actions list</h4>
| Name       | Parameter(s)         | Action                                             |
| ---------- | -------------------- | -------------------------------------------------- |
| `start`    |                      | start moving the elements                          |
| `stop`     |                      | stop moving the elements                           |
| ``     |                      |                            |
| ``     |                      |                            |
| ``     |                      |                            |

