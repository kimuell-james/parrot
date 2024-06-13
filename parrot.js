var gl;
var points;

window.onload = function init(){
    var canvas = document.getElementById( "gl-canvas" );
     gl = WebGLUtils.setupWebGL( canvas );
     if ( !gl ) { alert( "WebGL isn't available" );
}
//beak
var vertices1 = [
        vec2( -.5, .65),
        vec2( -.35, .4),
        vec2( -.5, .45)
];
//face
var vertices2 = [
        vec2( -.5, .65),
        vec2( -.3, .6),
        vec2( -.3, .5),
        vec2( -.45, .5)
];
//head
var vertices3 = [
        vec2( -.05, .65),
        vec2( 0, .15),
        vec2( -.25, .35),
        vec2( -.3, .5),
        vec2( -.3, .6),
        vec2( -.5, .65),
        vec2( -.3, .7)
];
//body
var vertices4 = [
        vec2( -.25, .35),
        vec2( .05, .15),
        vec2( .05, 0),
        vec2( -.05, .1)
];
//wings-red
var vertices5 = [
        vec2( -.05, .65),
        vec2( .45, .05),
        vec2( .3, .1)
];
//wings-yellow
var vertices6 = [
        vec2( -.05, .65),
        vec2( .45, -.1),
        vec2( .3, -.05)
];
//wings-blue
var vertices7 = [
        vec2( -.05, .65),
        vec2( .45, -.25),
        vec2( 0, .15)
];
//tail
var vertices8 = [
        vec2( .05, .15),
        vec2( .25, -.05),
        vec2( 0, -.85)
];
//claw
var vertices9 = [
        vec2( -.15, .05),
        vec2( -.05, .1),
        vec2( .05, 0),
        vec2( -.1, 0),
        vec2( -.2, -.05)
];
//stick
var vertices10 = [
        vec2( -1, 0),
        vec2( 1, 0),
        vec2( 1, -.02),
        vec2( -1, -.02)
];

//  Configure WebGL

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    renderShape("face", vertices2, 4);
    renderShape("beak", vertices1, 3);
    renderShape("head", vertices3, 7);
    renderShape("body", vertices4, 4);
    renderShape("wings-red", vertices5, 3);
    renderShape("claw", vertices9, 5);
    renderShape("stick", vertices10, 4);
    renderShape("wings-yellow", vertices6, 3);
    renderShape("tail", vertices8, 3);
    renderShape("wings-blue", vertices7, 3);
    
};

function renderShape(id, vertices, v){
    var program = initShaders( gl, "vertex-shader", id );
    gl.useProgram( program );

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, v );
}