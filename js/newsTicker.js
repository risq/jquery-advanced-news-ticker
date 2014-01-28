/* global jQuery: true*/
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;
(function($, window, document, undefined) {
        'use strict';
        // undefined is used here as the undefined global variable in ECMAScript 3 is
        // mutable (ie. it can be changed by someone else). undefined isn't really being
        // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
        // can no longer be modified.

        // window and document are passed through as local variable rather than global
        // as this (slightly) quickens the resolution process and can be more efficiently
        // minified (especially when both are regularly referenced in your plugin).

        // Create the defaults once
        var pluginName = 'newsTicker',
                defaults = {
                        row_height: 78,
                        max_items: 3,
                        speed: 400,
                        direction: 'up',
                        time: 2500,
                        autostart: 1,
                        stopOnHover: 1,
                        nextButton: null,
                        prevButton: null,
                        startButton: null,
                        stopButton: null,
                        movingUp: function() {},
                        movingDown: function() {},
                        start: function() {},
                        stop: function() {}
                };

        // The actual plugin constructor
        function Plugin(element, options) {
                this.element = element;
                this.$el = $(element);
                this.options = $.extend({}, defaults, options);
                this._defaults = defaults;
                this._name = pluginName;
                this.moveInterval;
                this.state = 0;
                this.paused = 0;
                if (this.$el.is('ul')) {
                        this.init();
                }
        }

        Plugin.prototype = {
                init: function() {
                        if (this.options.time < this.options.speed)
                                this.options.time = this.options.speed;
                        this.$el.addClass('newsticker-container')
                                .height(this.options.row_height * this.options.max_items)
                                .css({overflowY : 'hidden'})
                                //.children('li').height(this.options.row_height);
                        if(this.options.nextButton && typeof(this.options.nextButton[0]) !== 'undefined')
                                this.options.nextButton.click(function(e) {
                                        this.moveNext()
                                }.bind(this));
                        if(this.options.prevButton && typeof(this.options.prevButton[0]) !== 'undefined')
                                this.options.prevButton.click(function(e) {
                                        this.movePrev()
                                }.bind(this));
                        if(this.options.stopButton && typeof(this.options.stopButton[0]) !== 'undefined')
                                this.options.stopButton.click(function(e) {
                                        this.stop()
                                }.bind(this));
                        if(this.options.startButton && typeof(this.options.startButton[0]) !== 'undefined')
                                this.options.startButton.click(function(e) {
                                        this.start()
                                }.bind(this));
                        
                        if(this.options.stopOnHover) {
                                var base = this;
                                base.$el.hover(function() {
                                        if (base.state)
                                                base.paused = 1;
                                }, function() {
                                        if (base.state)
                                                base.paused = 0;
                                });
                        }
                        if(this.options.autostart)
                                this.start();
                },

                start: function() {
                        if (!this.state) {
                                clearInterval(this.moveInterval);
                                this.moveInterval = setInterval(function() {this.moveNext()}.bind(this), this.options.time);
                                this.state = 1;
                                this.options.start();
                        }
                },

                stop: function() {
                        if (this.state) {
                                clearInterval(this.moveInterval);
                                this.state = 0;
                                this.options.stop();
                        }
                },

                moveNext: function() {
                        if (!this.paused) {
                                if (this.options.direction === 'down')
                                        this.moveDown();
                                else if (this.options.direction === 'up')
                                        this.moveUp();
                        }
                },

                movePrev: function() {
                        if (!this.paused) {
                                if (this.options.direction === 'down')
                                        this.moveUp();
                                else if (this.options.direction === 'up')
                                        this.moveDown();
                        }
                },

                moveDown: function() {
                        this.options.movingDown();
                        this.$el.children('li:last').detach().prependTo(this.$el).css('marginTop', '-' + this.options.row_height + 'px')
                                .animate({marginTop: '0px'}, this.options.speed);
                },

                moveUp: function() {
                        var element = this.$el;
                        this.options.movingUp();
                        this.$el.children('li:first').animate({marginTop: '-' + this.options.row_height + 'px'}, this.options.speed,
                                function(){
                                        $(this).detach().css('marginTop', '0').appendTo(element);
                                });
                },

                updateOption: function(option, value) {
                        if (typeof(this.options[option]) !== 'undefined')
                                this.options[option] = value;
                },

                getState: function() {
                        return this.state;//0 = stopped, 1 = started
                }
        };


        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[pluginName] = function(option) {
                var args = arguments;
                
                return this.each(function() {
                        var $this = $(this),
                                data = $.data(this, 'plugin_' + pluginName),
                                options = typeof option === 'object' && option;
                        if (!data) {
                                $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
                        }
                        // if first argument is a string, call silimarly named function
                        // this gives flexibility to call functions of the plugin e.g.
                        //   - $('.dial').plugin('destroy');
                        //   - $('.dial').plugin('render', $('.new-child'));
                        if (typeof option === 'string') {
                                data[option].apply(data, Array.prototype.slice.call(args, 1));
                        }
                });
        };

})(jQuery, window, document);