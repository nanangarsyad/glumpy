// ----------------------------------------------------------------------------
// Copyright (c) 2014, Nicolas P. Rougier. All Rights Reserved.
// Distributed under the (new) BSD License.
// ----------------------------------------------------------------------------
#version 120

// Varyings
// ------------------------------------
varying float v_size;
varying vec4  v_color;

void main(void)
{
    <clipping.clip>;

    gl_FragColor = v_color;
}
