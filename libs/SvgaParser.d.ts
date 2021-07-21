
declare module SvgaParser {
    /**
     * 加载方法
     * @param url 资源路径
     * @param success 
     * @param failure 
     */
    export function loadSvga(url: string, success: (videoItem: VideoEntity) => void, failure?: (err: string) => void): void;
    /**
     * 导出只是当作类型接口用
     */
    export interface VideoEntity {
        /**
         * SVGA 文件版本
         */
        version: string;
        /**
         * 影片尺寸
         */
        videoSize: {
            width: number;
            height: number;
        };
        /**
         * 帧率，60，30等每秒
         */
        FPS: number;
        /**
         * 总帧数
         */
        frames: number;
        /**
         * base64图片数据记录
         */
        images: {
            [key: string]: string
        };
        /**
         * 图片是否已被缓存，缓存全局，注意名字覆盖
         */
        hasBeenCached: boolean;
        /**
         * sprite对象数据
         */
        sprites: SpriteEntity[];

    }
    interface SpriteEntity {
        /**
         * 标识
         */
        matteKey: string;
        /**
         * 图片key值
         */
        imageKey: string;
        /**
         * 帧数据数组
         */
        frames: FrameEntity[];
    }
    /**
     * 还有很多其他数据，暂不需要，比如矢量路径和遮罩路径暂时都无
     */
    interface FrameEntity {
        /**
         * 透明度
         */
        alpha: number;
        /**
         * 2维矩阵数据
         */
        transform: {
            a: number,
            b: number,
            c: number,
            d: number,
            tx: number,
            ty: number,
        };
    }
}

declare module "svga-parser" { export = SvgaParser; }