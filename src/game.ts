/*
 * @Author: your name
 * @Date: 2021-07-18 22:04:30
 * @LastEditTime: 2021-07-20 22:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\snake\src\game.ts
 */
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
      debug: true,
      gravity: { y: 0 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
