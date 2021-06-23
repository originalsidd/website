import {Component} from 'react';
import './Box.css'
import * as THREE from "three";

class Box extends Component {
	componentDidMount() {
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth/2, window.innerHeight/2);
		this.mount.appendChild(renderer.domElement);

		var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
		var material = new THREE.MeshStandardMaterial({ color: 0xbbbbbb });
		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		const light = new THREE.HemisphereLight(0x00bb00, 0x77ff77, 1);
		scene.add(light);
		camera.position.z = 2;
		var animate = function () {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			cube.rotation.z += 0.01;
			renderer.render(scene, camera);
		};
		animate();
	}
	render() {
		return (
			<div className="box" ref={ref => (this.mount = ref)} />
		)
	}
};

export default Box;