define(['phaser'], function(Phaser) {
	'use strict'
	var GameLogic = GameLogic || {};
	
	var hero,
		map,
		background_layer,
		world_layer,
		cursors,
		onGround = false,
		animalGroup,
		score = 0,
		scroeText,
		fishGroup,
		tintTime = 0,
	    e_penguin,
	  	e_monkey,
	  	e_rabbit,
	  	e_pig,
	  	e_snake,
	  	e_elephant,
	  	e_hippo,
	  	e_parrot,
	  	e_panda,
	  	e_array,
	  	splash_layer;

	const COLLISION_ARRAY = [267, 268, 269, 270, 271, 83, 84, 39, 405, 281, 282, 369, 455, 370, 451, 456, 457, 458, 807, 808, 809, 367, 368, 369, 691, 692, 867, 868, 895, 896, 897, 898];
	
	const KEYS = {'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D, 'up': Phaser.KeyCode.W};

	GameLogic.touchGround = function() {
		if (cursors.left.isDown && cursors.up.isDown)
		{
		        hero.body.velocity.x = -350;
		        hero.body.velocity.y = -485;

		        hero.animations.play('left');
		}else if (cursors.right.isDown && cursors.up.isDown)
		{
		        hero.body.velocity.x = 350;
		        hero.body.velocity.y = -485;

		        hero.animations.play('right');
		}else if(cursors.up.isDown) 
		{
			hero.body.velocity.y = -485;
		}
	}


	GameLogic.collideAnimal = function(hero, animal) {

		var game = this;
		score -= 5;
    	scoreText.text = 'Score: ' + score;
    	// game.add.tween(hero).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
    	hero.alpha = 0.5;
    	game.time.events.add(100, GameLogic.resetHero, GameLogic);
	}

	GameLogic.resetHero = function() {

		hero.alpha = 1;
	}

	GameLogic.getFish = function(hero, animal) {

		animal.kill();
		if(animal.fishType == 20) {
			score += 20;
		}else if(animal.fishType == 10) {
			score += 10;
		}
		scoreText.text = 'Score: ' + score;
	}


	GameLogic.bootstrap = {
		preload : function() {
			this.game.load.tilemap('splash', '../htmlGame/resources/maps/splash.json', null, Phaser.Tilemap.TILED_JSON);
			this.game.load.image('tilesheet', '../htmlGame/resources/img/tilesheet.png');
			this.game.load.image('bg_layer', '../htmlGame/resources/img/bg_layer.png');
			this.game.load.image('speechBubble', '../htmlGame/resources/img/speechBubble.png');

			//this.game.load.image('animal_panda', '../htmlGame/resources/img/panda.png');

			this.game.load.spritesheet('hero', '../htmlGame/resources/img/hero.png', 61.5, 65);	
		},

		create : function() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			map = this.game.add.tilemap('splash');
		 
 		    map.addTilesetImage('t_bg_layer', 'bg_layer');
		    map.addTilesetImage('t_tilesheet', 'tilesheet');

		    splash_layer = map.createLayer('splash');

		    splash_layer.resizeWorld();

 		    hero = this.game.add.sprite(180, 290, 'hero');
		    hero.frame = 4;	

 			this.game.physics.arcade.enable(hero);
 			hero.body.immovable = true;

 			var speechBubble = this.game.add.sprite(220, 170, 'speechBubble');

 			speechBubble.scale.setTo(0.1,0.1);
 			this.game.add.text(230, 210, 'Click me', { fontSize: '32px', fill: '#4A3632' });

			hero.inputEnabled = true;
    		hero.input.useHandCursor = true;

    		hero.events.onInputDown.add(function() {
				this.game.state.start('Play');
    		}, this);

		    this.game.add.text(50, 25, 'control', { fontSize: '32px', fill: "#4A3632"});					
   		    this.game.add.text(90, 80, 'W', { fontSize: '32px', fill: '#4A3632' });					
   		    this.game.add.text(60, 110, 'A', { fontSize: '32px', fill: '#4A3632' });					
   		    this.game.add.text(130, 110, 'D', { fontSize: '32px', fill: '#4A3632' });					
			
			// function getMousePos(canvas, evt) {
		 //        var rect = canvas.getBoundingClientRect();
		 //        return {
		 //          x: evt.clientX - rect.left,
		 //          y: evt.clientY - rect.top
		 //        };
		 //    }

		 //    var c = this.game.canvas;
			// this.game.canvas.addEventListener('mouseover', function(e) {
			// 	// console.log(e.currentTarget.client.x);
			// 	var mousePos = getMousePos(c, e);
			// 	console.log(mousePos);
			// });

		},

		update : function() {
			// var pos = this.game.input.activePointer.position;

			// var startTextArea = {
			// 	x : [285, 575],
			// 	y : [95, 225]
			// }

			// function betweenRange(number, rangeArray) {
			// 	return number >= rangeArray[0] && number <= rangeArray[1];
			// }

			// if(betweenRange(pos.x, startTextArea.x)
			// 	&& betweenRange(pos.y, startTextArea.y)) {

			// 	this.game.input.activePointer.handCursor = true;
			// 	if(this.game.input.activePointer.leftButton.isDown) {
			// 		// this.game.state.start('Play');
			// 	}
			// }

   //      	this.game.debug.text("x:" + pos.x + " y:" + pos.y, 180, 200);
		}
	}

	GameLogic.gameOver = {
		preload : function() {
			this.game.load.tilemap('gameover', '../htmlGame/resources/maps/gameover.json', null, Phaser.Tilemap.TILED_JSON);
			this.game.load.image('tilesheet', '../htmlGame/resources/img/tilesheet.png');
			this.game.load.image('bg_layer', '../htmlGame/resources/img/bg_layer.png');
			this.game.load.image('speechBubble', '../htmlGame/resources/img/speechBubble.png');

			//this.game.load.image('animal_panda', '../htmlGame/resources/img/panda.png');

			this.game.load.spritesheet('hero', '../htmlGame/resources/img/hero.png', 61.5, 65);	
		},

		create : function() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			map = this.game.add.tilemap('gameover');
		 
 		    map.addTilesetImage('t_bg_layer', 'bg_layer');
		    map.addTilesetImage('t_tilesheet', 'tilesheet');

		    splash_layer = map.createLayer('splash');

		    splash_layer.resizeWorld();

 		    hero = this.game.add.sprite(180, 290, 'hero');
		    hero.frame = 4;	

 			this.game.physics.arcade.enable(hero);
 			hero.body.immovable = true;

 			var speechBubble = this.game.add.sprite(220, 170, 'speechBubble');

 			speechBubble.scale.setTo(0.1,0.1);
 			this.game.add.text(230, 210, 'Restart', { fontSize: '32px', fill: '#4A3632' });

			hero.inputEnabled = true;
    		hero.input.useHandCursor = true;

    		hero.events.onInputDown.add(function() {
				this.game.state.start('Play');
    		}, this);

		},

		update : function() {

		}
	}

	GameLogic.win = {
		preload : function() {
			this.game.load.tilemap('win', '../htmlGame/resources/maps/win.json', null, Phaser.Tilemap.TILED_JSON);
			this.game.load.image('tilesheet', '../htmlGame/resources/img/tilesheet.png');
			this.game.load.image('bg_layer', '../htmlGame/resources/img/bg_layer.png');
			this.game.load.image('speechBubble', '../htmlGame/resources/img/speechBubble.png');

			//this.game.load.image('animal_panda', '../htmlGame/resources/img/panda.png');

			this.game.load.spritesheet('hero', '../htmlGame/resources/img/hero.png', 61.5, 65);	
		},

		create : function() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			map = this.game.add.tilemap('win');
		 
 		    map.addTilesetImage('t_bg_layer', 'bg_layer');
		    map.addTilesetImage('t_tilesheet', 'tilesheet');

		    splash_layer = map.createLayer('splash');

		    splash_layer.resizeWorld();

 		    hero = this.game.add.sprite(180, 290, 'hero');
		    hero.frame = 4;	

 			this.game.physics.arcade.enable(hero);
 			hero.body.immovable = true;

 			var speechBubble = this.game.add.sprite(220, 170, 'speechBubble');

 			speechBubble.scale.setTo(0.1,0.1);
 			this.game.add.text(260, 210, 'Cool', { fontSize: '32px', fill: '#4A3632' });

			var starScoreText = this.game.add.text(530, 200, 'Fish: ' + score, { fontSize: '32px', fill: '#4A3632' });	

			hero.inputEnabled = true;
    		hero.input.useHandCursor = true;

    		hero.events.onInputDown.add(function() {
				this.game.state.start('Play');
    		}, this);

		},

		update : function() {

		}
	}

	// this function will set the enemy to move, this is first version, it should be upgraded in future
	// @param enemy this enemy
	// @param dir move this enemy horizotally or vertically, e.g.: x or y
	// @param speed move speed
	// @param boundArray a array to specify the range of the movement, e.g.: [MIN = 23, MAX = 59]
	GameLogic.enemyMovePath = function(enemy) {
		if(enemy._dir_ == 'x') {
			enemy.body.velocity.x = enemy._speed_;
			// if(enemy.x < boundArray['MIN']) {
			// 	enemy.body.velocity.x = -speed;
			// }else if (enemy.y > boundArray['MAX']) {
			// 	nemy.body.velocity.x = -speed;
			// }
		}else if(enemy._dir_ == 'y') {
			enemy.body.velocity.y = enemy._speed_;
		}
	}

	GameLogic.play = {
		preload : function() {
			this.game.load.tilemap('game_world', '../htmlGame/resources/maps/world.json', null, Phaser.Tilemap.TILED_JSON);
			this.game.load.image('tilesheet', '../htmlGame/resources/img/tilesheet.png');
			this.game.load.image('bg_layer', '../htmlGame/resources/img/bg_layer.png');

			this.game.load.image('animal_panda', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_giraffe', '../htmlGame/resources/img/giraffe.png');
			this.game.load.image('animal_monkey', '../htmlGame/resources/img/monkey.png');
			this.game.load.image('animal_penguin', '../htmlGame/resources/img/penguin.png');
            this.game.load.image('animal_giraffe', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_rabbit', '../htmlGame/resources/img/rabbit.png');
			this.game.load.image('animal_pig', '../htmlGame/resources/img/pig.png');
            this.game.load.image('animal_giraffe', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_snake', '../htmlGame/resources/img/snake.png');
			this.game.load.image('animal_elephant', '../htmlGame/resources/img/elephant.png');
            this.game.load.image('animal_snake', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_hippo', '../htmlGame/resources/img/hippo.png');
            this.game.load.image('animal_snake', '../htmlGame/resources/img/panda.png');
			this.game.load.image('animal_parrot', '../htmlGame/resources/img/parrot.png');

			this.game.load.image('20Fish', '../htmlGame/resources/img/20Fish.png');
			this.game.load.image('10Fish', '../htmlGame/resources/img/10Fish.png');

			this.game.load.spritesheet('hero', '../htmlGame/resources/img/hero.png', 61.5, 65);	
			this.game.load.spritesheet('sun', '../htmlGame/resources/img/sun.png', 400.5, 400);		

		},
		create : function() {

			function initialAnimalPosition(x, y, image) {

			    var animal = animalGroup.create(x, y, image);

			    animal.width=32;
	   		    animal.height=28;
	   		    return animal;
			}

			function initialFishPosition(x, y, image, type) {

			    var fish = fishGroup.create(x, y, image);

			    fish.body.immovable = true;

			    fish.width=32;
	   		    fish.height=32;
	   		    fish.fishType = type;
			}

			function setTileCollision(mapLayer, idxOrArray, dirs) {
			 
			    var mFunc; // tile index matching function
			    if (idxOrArray.length) {
			        // if idxOrArray is an array, use a function with a loop
			        mFunc = function(inp) {
			            for (var i = 0; i < idxOrArray.length; i++) {
			                if (idxOrArray[i] === inp) {
			                    return true;
			                }
			            }
			            return false;
			        };
			    } else {
			        // if idxOrArray is a single number, use a simple function
			        mFunc = function(inp) {
			            return inp === idxOrArray;
			        };
			    }
			 
			    // get the 2-dimensional tiles array for this layer
			    var d = mapLayer.map.layers[mapLayer.index].data;
			     
			    for (var i = 0; i < d.length; i++) {
			        for (var j = 0; j < d[i].length; j++) {
			            var t = d[i][j];
			            if (mFunc(t.index)) {
			                 
			                t.collideUp = dirs.top;
			                t.collideDown = dirs.bottom;
			                t.collideLeft = dirs.left;
			                t.collideRight = dirs.right;
			                 
			                t.faceTop = dirs.top;
			                t.faceBottom = dirs.bottom;
			                t.faceLeft = dirs.left;
			                t.faceRight = dirs.right;
			                 
			            }
			        }
			    }
			 
			}

			score = 0;

			this.game.physics.startSystem(Phaser.Physics.ARCADE);

		    map = this.game.add.tilemap('game_world');
		 
 		    map.addTilesetImage('background_color', 'bg_layer');
		    map.addTilesetImage('world', 'tilesheet');

		    background_layer = map.createLayer('background_layer');
		    world_layer = map.createLayer('background');

		    world_layer.resizeWorld();

		    // world_layer.checkCollision.left = false;
		    // world_layer.checkCollision.right = false;
		    // world_layer.checkCollision.down = false;
				 
 		    hero = this.game.add.sprite(80, 90, 'hero');
		    hero.frame = 4;		    

		    // hero.frame = 4;		    

		    // map.setCollision(COLLISION_ARRAY, true, 'background');

		    setTileCollision(world_layer, COLLISION_ARRAY, {
		    	top: true,
		        bottom: false,
		        left: false,
		        right: false
		    });

		    this.game.physics.arcade.enable(hero);

		    hero.body.gravity.y = 950;

		    hero.body.setSize(53, 65);

		    this.game.camera.follow(hero);

		    animalGroup = this.game.add.group();

		    animalGroup.enableBody = true;

		    e_penguin = initialAnimalPosition(800, 200, 'animal_penguin');
		  	//initialAnimalPosition(2000, 800, 'animal_giraffe');
		  	e_monkey = initialAnimalPosition(1650, 50, 'animal_monkey');
		  	e_rabbit = initialAnimalPosition(1400, 200, 'animal_rabbit');
		  	e_pig = initialAnimalPosition(1850, 100, 'animal_pig');
		  	e_snake = initialAnimalPosition(3400, 300, 'animal_snake');
		  	e_elephant = initialAnimalPosition(2500, 350, 'animal_elephant');
		  	e_hippo = initialAnimalPosition(3000, 50, 'animal_hippo');
		  	e_parrot = initialAnimalPosition(3500, 50, 'animal_parrot');
		  	e_panda = initialAnimalPosition(3750, 300, 'animal_panda');
		  	e_panda_2 = initialAnimalPosition(2547, 447, 'animal_panda');


		  	e_penguin._boundArray_ = [50, 350];
		  	e_penguin._dir_ = 'y';
		  	e_penguin._speed_ = 70;

		  	e_panda_2._boundArray_ = [e_panda_2.x - 200, e_panda_2.x + 200];
		  	e_panda_2._dir_ = 'x';
		  	e_panda_2._speed_ = 70;

		  	e_monkey._boundArray_ = [50, 350];
		  	e_monkey._dir_ = 'y';
		  	e_monkey._speed_ = 70;

		  	e_rabbit._boundArray_ = [e_rabbit.x - 300, e_rabbit.x + 300];
		  	e_rabbit._dir_ = 'x';
		  	e_rabbit._speed_ = 70;

		  	e_pig._boundArray_ = [50, 350];
		  	e_pig._dir_ = 'y';
		  	e_pig._speed_ = 70;

		  	e_snake._boundArray_ = [e_snake.x - 300, e_snake + 300];
		  	e_snake._dir_ = 'x';
		  	e_snake._speed_ = 70;

		  	e_elephant._boundArray_ = [e_elephant.x - 300, e_elephant.x + 300];
		  	e_elephant._dir_ = 'x';
		  	e_elephant._speed_ = 70;

		  	e_hippo._boundArray_ = [e_hippo.x - 300, e_hippo.x + 300];
		  	e_hippo._dir_ = 'x';
		  	e_hippo._speed_ = 70;

		  	e_parrot._boundArray_ = [50, 350];
		  	e_parrot._dir_ = 'y';
		  	e_parrot._speed_ = 70;

		  	e_panda._boundArray_ = [50, 350];
		  	e_panda._dir_ = 'y';
		  	e_panda._speed_ = 70;

	  		e_array = [ e_penguin, e_monkey,e_rabbit,e_pig,e_snake,e_elephant,e_hippo,e_parrot,e_panda,e_panda_2 ];

		  	e_array.forEach(function(value) {
				GameLogic.enemyMovePath(value);
		  	}, this.game);
		  	
		  	fishGroup = this.game.add.group();
		    fishGroup.enableBody = true;
		    initialFishPosition(645, 150, '20Fish', 20);
		    initialFishPosition(925, 300, '10Fish', 10);
		    initialFishPosition(1153, 300, '20Fish', 20);
		    initialFishPosition(1850, 290, '10Fish', 10);
		    initialFishPosition(2337, 350, '20Fish', 20);
		    initialFishPosition(2500, 150, '10Fish', 10);
		    initialFishPosition(3002, 383, '20Fish', 20);
		    initialFishPosition(3195, 450, '10Fish', 10);
		    initialFishPosition(1637, 200, '20Fish', 20);
		    initialFishPosition(2267, 511, '20Fish', 20);
		    initialFishPosition(3130, 0, '10Fish', 10);
		    initialFishPosition(3580, 40, '20Fish', 20);
		    // initialFishPosition(645, 150, '10Fish', 10);
		    // initialFishPosition(645, 150, '20Fish', 20);
		    // initialFishPosition(645, 150, '10Fish', 10);

			// var sunImg = this.game.add.sprite(25, 25, 'sun');
			var sun = this.game.add.sprite(0, 0, 'sun');
		    sun.scale.setTo(0.2,0.2);
		    sun.animations.add('shine', [0, 1, 2, 3, 4], 10, true);
		    // sun.animations.play('shine');
		    sun.fixedToCamera = true;
 		// 	sunImg.scale.setTo(0.20,0.2);

 		// 	sunImg.fixedToCamera = true;

			var bounds = new Phaser.Rectangle(0, 0, 3780, 600);

		    // hero.input.boundsRect = bounds;
			// this.game.setBounds(0, 0, 3780, 600, true, true, true, true, false);
			// this.game.physics.setBoundsToWorld(true, true, true, true, false);
            this.game.world.setBounds(0, 0, 3780, 600);
			hero.body.collideWorldBounds = true;

   		    scoreText = this.game.add.text(50, 50, 'score: 0', { fontSize: '32px', fill: '#4A3632' });		
   		    scoreText.fixedToCamera = true

   		    hero.belowground = function() {
   		    	const GROUND_POSITION_Y = 530;
   		    	return (hero.position.y >= GROUND_POSITION_Y);
   		    };

		    hero.animations.add('left', [0, 1, 2, 3], 10, false);
		    hero.animations.add('right', [5, 6, 7, 8], 10, false);

		},

		update : function() {
		    this.game.physics.arcade.collide(hero, world_layer, GameLogic.touchGround);
		    this.game.physics.arcade.overlap(hero, animalGroup, GameLogic.collideAnimal, null, this.game);
		    this.game.physics.arcade.overlap(hero, fishGroup, GameLogic.getFish, null, this.game);


		    cursors = this.game.input.keyboard.addKeys(KEYS);

		    if(score < 0 || hero.y > 530) {
				this.game.state.start('GameOver');

		    }
		    if(hero.x > 3714 && hero.y == 319) {
				this.game.state.start('Win');

		    }
		    hero.body.velocity.x = 0;
		    if(hero.belowground()) return;
		    if (cursors.left.isDown && cursors.up.isDown)
		    {
		        hero.body.velocity.x = -350;
		        hero.animations.play('left');
		    }else if (cursors.left.isDown)
		    {
		        hero.body.velocity.x = -350;
		        hero.animations.play('left');

		    }else if (cursors.right.isDown && cursors.up.isDown)
		    {
		        hero.body.velocity.x = 350;
				onGround = false;

		        hero.animations.play('right');
		    }else if (cursors.right.isDown)
		    {
		        hero.body.velocity.x = 350;

		        hero.animations.play('right');
		    }

		    GameLogic.enemyUpdate();
		},
		render : function() {
			// this.game.debug.spriteInfo(hero);
			// this.game.debug.body(hero);
		}
		
	},

	GameLogic.enemyUpdate = function() {
		
		e_array.forEach(function(currentValue, index, array) {
			if(currentValue._dir_ == 'x') {
				if(currentValue.x < currentValue._boundArray_[0]) {
					currentValue.body.velocity.x = currentValue._speed_;
				}else if (currentValue.x > currentValue._boundArray_[1]) {
					currentValue.body.velocity.x = -currentValue._speed_;
				}
			}else if(currentValue._dir_ == 'y') {
				if(currentValue.y < currentValue._boundArray_[0]) {
					currentValue.body.velocity.y = currentValue._speed_;
				}else if (currentValue.y > currentValue._boundArray_[1]) {
					currentValue.body.velocity.y = -currentValue._speed_;
				}			
			}
		}, this.game);		
	}


	return GameLogic;
});
