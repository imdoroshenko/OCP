var PolygonRenderRule = function(){
    this.type = 'polygon';
    this.render = function(shape, ctx){
        ctx.beginPath();
        ctx.moveTo(shape.path[0].x, shape.path[0].y);
        for(var i = 1, ln = shape.path.length; i < ln; i++){
            ctx.lineTo(shape.path[i].x, shape.path[i].y);
        }
        ctx.closePath();
        ctx.stroke();
        return this;
    };
    this.match = function(shape){
        return this.type === shape.type;
    };
};