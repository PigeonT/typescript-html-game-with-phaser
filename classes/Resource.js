///<reference path='../libs/phaser.d.ts' />
"use strict";
var Resource = (function () {
    function Resource(name, path) {
        this.name = name;
        this.path = path;
        this.setPhaser(Phaser);
    }
    Resource.prototype.toString = function () {
        return this.name + "\t" + "@" + this.path;
    };
    Resource.prototype.setPhaser = function (phaser) {
        this.phaser = phaser;
    };
    return Resource;
}());
exports.__esModule = true;
exports["default"] = Resource;
