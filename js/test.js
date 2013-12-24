window.addEventListener('load', function(){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    var shapesCollection = [
        new Shape('rectangle', [{ x : 20 , y : 20}, { x : 150, y : 100}]),
        new Shape('polygon', [{ x : 5 , y : 5}, { x : 50, y : 5}, { x : 75, y : 90}, { x : 5, y : 90}]),
        new Shape('cubic_bezier', [{ x : 20 , y : 20}, { x : 20, y : 100}, { x : 200, y : 100}, { x : 200, y : 20}]),
        new Shape('circle', [{ x : 250 , y : 250}, { x : 300, y : 250}]),
    ];

    register.registerInjections({
        renderRulesList : [
            PolygonRenderRule,
            CubicBezierRenderRule,
            RectangleRenderRule,
            CircleRenderRule
        ],
        context : ctx
    });

    register.getInstance('GraphicalApplication').renderShapes(shapesCollection);

    document.body.appendChild(canvas);
}, false);