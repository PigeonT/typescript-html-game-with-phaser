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

require(['phaser', 'config', 'GameLogic', 'Controller'], function(Phaser, Config, GameLogic, Controller) {
    const game = Config.init();

    game.state.add('Bootstrap', GameLogic.bootstrap);
    game.state.add('Play', GameLogic.play);
    game.state.add('GameOver', GameLogic.gameOver);
    game.state.add('Win', GameLogic.win);
    


    game.state.start('Bootstrap');

});
