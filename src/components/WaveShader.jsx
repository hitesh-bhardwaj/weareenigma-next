"use client"
import React, { useRef, useEffect, useMemo } from "react";

export default function WaveShader({ 
  topColor, 
  middleColor, 
  bottomColor,
  amplitude = 0.1,
  frequency = 10.0,
  reverse=false
}) {
  const canvasRef = useRef();

  const colors = useMemo(() => ({
    top: topColor,
    middle: middleColor,
    bottom: bottomColor
  }), [topColor[0], topColor[1], topColor[2], middleColor[0], middleColor[1], middleColor[2], bottomColor[0], bottomColor[1], bottomColor[2]]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }


    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;

varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_amplitude;
uniform float u_frequency;
uniform vec3 u_topColor;
uniform vec3 u_middleColor;
uniform vec3 u_bottomColor;
uniform float u_reverse;
float wave(vec2 uv, float frequency, float amplitude, float speed) {
  return sin(uv.x * frequency + (u_time * .3) * speed) * amplitude;
}
void main() {
  vec2 uv = v_uv;
  if (u_reverse == 1.0) {
    uv.y = 1.0 - uv.y;
  }
  float wave1 = wave(uv, u_frequency * 0.5, u_amplitude * 1.0, 2.5);
  float bottomEdge = smoothstep(0.0, 0.3, uv.y + wave1);
  float topEdge = smoothstep(0.1, 0.5, uv.y + wave1);

  vec3 lowerColor = mix(u_bottomColor, u_middleColor, bottomEdge);
  vec3 finalColor = mix(lowerColor, u_topColor, topEdge);

  gl_FragColor = vec4(finalColor, 1.0);
}

    `;

    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
      }
      return shader;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const a_position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(a_position);
    gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);


    const u_time = gl.getUniformLocation(program, "u_time");
    const u_resolution = gl.getUniformLocation(program, "u_resolution");
    const u_amplitude = gl.getUniformLocation(program, "u_amplitude");
    const u_frequency = gl.getUniformLocation(program, "u_frequency");
    const u_topColor = gl.getUniformLocation(program, "u_topColor");
    const u_middleColor = gl.getUniformLocation(program, "u_middleColor");
    const u_bottomColor = gl.getUniformLocation(program, "u_bottomColor");
    const u_reverse = gl.getUniformLocation(program, "u_reverse");


    let startTime = Date.now();
    function draw() {
      const currentTime = (Date.now() - startTime) * 0.001;

      gl.uniform1f(u_time, currentTime);
      gl.uniform2f(u_resolution, canvas.width, canvas.height);
      gl.uniform1f(u_amplitude, amplitude);
      gl.uniform1f(u_frequency, frequency);
      gl.uniform3f(u_topColor, colors.top[0], colors.top[1], colors.top[2]);
      gl.uniform3f(u_middleColor, colors.middle[0], colors.middle[1], colors.middle[2]);
      gl.uniform3f(u_bottomColor, colors.bottom[0], colors.bottom[1], colors.bottom[2]);
      gl.uniform1f(u_reverse, reverse ? 1.0 : 0.0);


      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors, amplitude, frequency]);

  return (
   
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
      />
   
  );
}