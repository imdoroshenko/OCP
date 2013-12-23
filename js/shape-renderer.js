var ShapeRenderer = function(){
    this.renderRules = [];
    this.ctx = null;

    this.setRenderRules = function(rules){
        rules.forEach(function(rule){
            this.renderRules.push(new rule);
        }.bind(this));
        return this;
    };

    this.setContext = function(ctx){
        this.ctx = ctx;
        return this;
    };

    this.render = function(shape){
        return this.renderRules.some(function(rule){
            return rule.match(shape) && rule.render(shape, this.ctx);
        }.bind(this));
    };
};