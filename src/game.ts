import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import ModalScene from './scenes/ModalScene'

const DEFAULT_WIDTH = 750
const DEFAULT_HEIGHT = 1624

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#73ad45',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene, ModalScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
