/**
 * Created by _xdq on 2021/04/07.
 * 静态方法
 * @export
 * @class GameCfg
 */
export class GameCfg {
    private static _instance: GameCfg;

    public static get Ins(): GameCfg {
        if (!this._instance)
            this._instance = new GameCfg();
        return this._instance;
    }

    /**
     * 获得texture纹理
     * @param {string} url
     * @memberof GameCfg
     */
    createTexture(url: string) {
        let _texture: FYGE.Texture = url ? FYGE.Texture.fromUrl(url) : null;
        _texture.baseTexture.premultipliedAlpha = false;
        return _texture;
    }
}