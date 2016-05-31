///<reference path='../libs/phaser.d.ts' />

abstract class Resource {
        protected phaser : Phaser; 
        protected name : string;
        protected path : string;
        
        constructor(name : string, path : string) {
                this.name = name;
                this.path = path;
                this.setPhaser(Phaser);
        }       
                
        public toString() : string {
                return this.name + "\t" + "@" + this.path;
        } 
        
        public abstract loadResource() : void;
        
        private setPhaser(phaser : Phaser) : void {
                this.phaser = phaser;
        }
}

export default Resource;