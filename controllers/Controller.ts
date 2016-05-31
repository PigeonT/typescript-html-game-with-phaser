interface Controller<T extends Controller<T>> {
    preload() : void;
    create() : void;
    update() : void;
    render?() : void;
}

export default Controller;