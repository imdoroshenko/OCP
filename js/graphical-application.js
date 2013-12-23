var GraphicalApplication = function(){
    this.ctx = null;

    this.setContext = function(ctx){
        this.ctx = ctx;
        return this;
    };

    this.renderShapes = function(shapesCollection){
        shapesCollection.forEach(function(shape){
            switch (shape.type){
                case 'rectangle':
                    this.ctx.beginPath();
                    this.ctx.rect(
                        shape.path[0].x,
                        shape.path[0].y,
                        shape.path[1].x - shape.path[0].x,
                        shape.path[1].y - shape.path[0].y);
                    this.ctx.stroke();
                    break;
                case 'cubic_bezier':
                    this.ctx.beginPath();
                    this.ctx.moveTo(shape.path[0].x,shape.path[0].y);
                    this.ctx.bezierCurveTo(
                        shape.path[1].x, shape.path[1].y,
                        shape.path[2].x, shape.path[2].y,
                        shape.path[3].x, shape.path[3].y);
                    this.ctx.stroke();
                    break;
                case 'polygon':
                    this.ctx.beginPath();
                    this.ctx.moveTo(shape.path[0].x, shape.path[0].y);
                    for(var i = 1, ln = shape.path.length; i < ln; i++){
                        this.ctx.lineTo(shape.path[i].x, shape.path[i].y);
                    }
                    this.ctx.closePath();
                    this.ctx.stroke();
                    break;
            }
        }.bind(this));
        return this;
    };
};