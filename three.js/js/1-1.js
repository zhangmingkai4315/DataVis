var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);　　
var renderer=new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);  //设置render尺寸
document.body.appendChild(renderer.domElement);   //增加一个ｃａｎｖａｓ对象到body区域


var geometry=new THREE.BoxGeometry(2,2,3);

var material=new THREE.MeshBasicMaterial({
  color:0x00ffff
});

var cube=new THREE.Mesh(geometry,material);

scene.add(cube);
camera.position.z=5;

function render() {
	requestAnimationFrame( render );   //以每秒６０帧的频率刷新内容，当用户导向其他的页面的时候，暂停处理
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render( scene, camera );

}
render();
