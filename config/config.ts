///<reference path="../libs/phaser.d.ts" />

class Config {
	static CANVAS_WIDTH : number;
	static CANVAS_HEIGHT : number;
	static CANVAS_RENDERER : number;
	static CANVAS_WRAPPER : string;
	
	constructor() {
		Config.CANVAS_WIDTH = 800;
		Config.CANVAS_HEIGHT = 600;
		Config.CANVAS_RENDERER = Phaser.AUTO;
		Config.CANVAS_WRAPPER = 'game-wrapper';
	}
	public static gameFactory() : Phaser.Game{
		 return new Phaser.Game(Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT, Config.CANVAS_RENDERER, Config.CANVAS_WRAPPER, '');		
	}
}

export = Config;

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