/// <reference path='typings/requirejs/require.d.ts' />


require.config({
    paths: {
        'config' : ['config/config'],
        'phaser' : ['libs/phaser'],
        'Controller' : ['controllers/Controller']
    },

    shim: {
        'phaser' : {
            exports : 'Phaser'
        }
    }
});

require(['config'], function(Config) {
    const game = Config.gameFactory();

    /*game.state.add('Bootstrap', GameLogic.bootstrap);
    game.state.add('Play', GameLogic.play);
    game.state.add('GameOver', GameLogic.gameOver);
    game.state.add('Win', GameLogic.win);
    game.state.start('Bootstrap');*/
});
