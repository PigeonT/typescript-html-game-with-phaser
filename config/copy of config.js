define(['phaser'], function(Phaser) {

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
})