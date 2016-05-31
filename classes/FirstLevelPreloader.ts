import Preloader from './Preloader';
import {default as Resource} from  './Resource';
import * as Collections from '../typescript-collections';


class FirstLevelPreloader extends Preloader{

    constructor(name : string) {
        super(name);
    }  
    
    public load() : void {
        for(let resource of this.preloadCollectionResource) {
            resource.loadResource();
        }
    };

}

export default FirstLevelPreloader;