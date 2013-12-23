var RectangleRenderRule = function(){
    this.type = 'rectangle';
    this.render = function(shape, ctx){
        ctx.beginPath();
        ctx.rect(
            shape.path[0].x,
            shape.path[0].y,
            shape.path[1].x - shape.path[0].x,
            shape.path[1].y - shape.path[0].y);
        ctx.stroke();
        return this;
    };
    this.match = function(shape){
        return this.type === shape.type;
    };
};
