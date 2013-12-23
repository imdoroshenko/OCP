var CircleRenderRule = function(){
    this.type = 'circle';
    this.render = function(shape, ctx){
        var x0 = shape.path[0].x, x1 = shape.path[1].x, y0 = shape.path[0].y, y1 = shape.path[1].y;
        var r = Math.pow( Math.pow(y1 - y0, 2) + Math.pow(x1 - x0, 2), 0.5);
        ctx.beginPath();
        ctx.arc(x0, y0, r, 0, 2*Math.PI);
        ctx.stroke();
        return this;
    };
    this.match = function(shape){
        return this.type === shape.type;
    };
};