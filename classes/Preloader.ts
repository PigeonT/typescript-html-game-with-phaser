import {default as Resource} from  './Resource';
import * as Collections from '../typescript-collections';

abstract class Preloader {
    
    protected name : string;
    protected preloadCollectionResource : Array<Resource>;
    
    constructor(name : string) {
        this.name = name;
    }
    
    public setPreloadCollectionResource(preloadCollectionResource : Array<Resource>) : void {
        this.preloadCollectionResource = preloadCollectionResource;
    };
    
    protected abstract load() : void;
    
    public toString() : string {
        return this.name;
    }

}

export default Preloader;