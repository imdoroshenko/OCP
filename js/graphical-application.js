var GraphicalApplication = function(ShapeRenderer){
    this.shapeRenderer = new ShapeRenderer();

    this.renderShapes = function(shapesCollection){
        shapesCollection.forEach(this.shapeRenderer.render.bind(this.shapeRenderer));
        return this;
    };
};
register.registerClass('GraphicalApplication', GraphicalApplication);