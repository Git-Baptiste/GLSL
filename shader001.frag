#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.0078, 0.0, 0.5882);
vec3 colorB = vec3(0.8275, 0.4392, 0.0);

// float plot (vec2 st, float pct){
//   return  smoothstep( pct-0.01, pct, st.y) -
//           smoothstep( pct, pct+0.01, st.y);
// }

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float y = st.x;
    vec3 color = vec3(0.0);
    

    vec3 pct = vec3(st.x);

    pct.r *= u_resolution.x/u_resolution.y;
    pct.g = sin(st.y*PI) * sin(u_time *0.5);
    pct.b = pow(y, 1.0) * cos(u_time *0.5);

    color = mix(colorA, colorB, pct);

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4(color,1.0);
}