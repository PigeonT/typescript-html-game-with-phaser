"use strict";
var Preloader = (function () {
    function Preloader(name) {
        this.name = name;
    }
    Preloader.prototype.setPreloadCollectionResource = function (preloadCollectionResource) {
        this.preloadCollectionResource = preloadCollectionResource;
    };
    ;
    Preloader.prototype.toString = function () {
        return this.name;
    };
    return Preloader;
}());
exports.__esModule = true;
exports["default"] = Preloader;
