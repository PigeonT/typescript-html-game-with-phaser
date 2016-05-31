///<reference path="../libs/phaser.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Config = (function () {
        function Config() {
            Config.CANVAS_WIDTH = 800;
            Config.CANVAS_HEIGHT = 600;
            Config.CANVAS_RENDERER = Phaser.AUTO;
            Config.CANVAS_WRAPPER = 'game-wrapper';
        }
        Config.gameFactory = function () {
            return new Phaser.Game(Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT, Config.CANVAS_RENDERER, Config.CANVAS_WRAPPER, '');
        };
        return Config;
    }());
    return Config;
});
/*define(['phaser'], function(Phaser) {

    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 600;
    const CANVAS_RENDERER = Phaser.AUTO;
    const CANVAS_WRAPPER = 'game-wrapper';
    function _init() {
         return new Phaser.Game(CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_RENDERER, CANVAS_WRAPPER, '');
    }

    return {
        init : _init
    }
})*/ 
