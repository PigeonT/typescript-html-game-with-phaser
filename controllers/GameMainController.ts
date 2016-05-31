import Controller from './Controller';
import {Hero} from '../classes/Hero';
import {default as Preloader} from '../classes/Preloader';
import {default as Creater} from '../classes/Creater';


class GameMainController implements Controller<GameMainController> {

    private preloader : Preloader;
    private creater :  Creater;


    constructor(preload : Preloader, creater : Creater) {
        this.preloader = preload;
        this.creater = creater;
    }

    preload() : void {
        
    }

    create() : void {
        
    }

    update() :void {
        
    }
}
