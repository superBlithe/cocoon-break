export const positionToCanmerCenter = (target:Phaser.GameObjects.Sprite | Phaser.GameObjects.Image, scene: Phaser.Scene):void => {
  target.setPosition((scene.cameras.main.width - target.width)/2, (scene.cameras.main.height - target.height)/2)
}