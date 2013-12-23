var GraphicalApplication = function(){
    this.shapeRenderer = null;

    this.setShapeRenderer = function(shapeRenderer){
        this.shapeRenderer = shapeRenderer;
        return this;
    };

    this.renderShapes = function(shapesCollection){
        shapesCollection.forEach(this.shapeRenderer.render.bind(this.shapeRenderer));
        return this;
    };
};