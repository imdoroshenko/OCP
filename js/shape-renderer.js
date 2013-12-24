var ShapeRenderer = function(context, renderRulesList){
    this.renderRules = [];
    this.ctx = context;

    renderRulesList.forEach(function(rule){
        this.renderRules.push(new rule);
    }.bind(this));

    this.render = function(shape){
        return this.renderRules.some(function(rule){
            return rule.match(shape) && rule.render(shape, this.ctx);
        }.bind(this));
    };
};
register.registerClass('ShapeRenderer', ShapeRenderer);