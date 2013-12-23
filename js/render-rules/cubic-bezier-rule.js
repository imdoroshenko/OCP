var CubicBezierRenderRule = function(){
    this.type = 'cubic_bezier';
    this.render = function(shape, ctx){
        ctx.beginPath();
        ctx.moveTo(shape.path[0].x,shape.path[0].y);
        ctx.bezierCurveTo(
            shape.path[1].x, shape.path[1].y,
            shape.path[2].x, shape.path[2].y,
            shape.path[3].x, shape.path[3].y);
        ctx.stroke();
        return this;
    };
    this.match = function(shape){
        return this.type === shape.type;
    };
};