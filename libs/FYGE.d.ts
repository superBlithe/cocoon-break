declare namespace FYGE{export  const VERSION = "2.0.21";

export  const osType: "ios" | "android" | "pc";

export  function cos(angle: number): number;

export  function sin(angle: number): number;

export  const PI_2: number;

export  const RAD_TO_DEG: number;

export  const DEG_TO_RAD: number;

export  enum RENDERER_TYPE {
    UNKNOWN = 0,
    WEBGL = 1,
    CANVAS = 2
}

export  enum SHAPES {
    POLY = 0,
    RECT = 1,
    CIRC = 2,
    ELIP = 3,
    RREC = 4
}

export  enum PRECISION {
    LOW = "lowp",
    MEDIUM = "mediump",
    HIGH = "highp"
}

export  enum TEXT_GRADIENT {
    LINEAR_VERTICAL = 0,
    LINEAR_HORIZONTAL = 1
}

export  enum TEXT_ALIGN {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right"
}

export  enum VERTICAL_ALIGN {
    MIDDLE = "middle",
    UP = "up",
    DOWN = "down"
}

export  enum TEXT_lINETYPE {
    SINGLE = "single",
    MULTI = "multi"
}

export  enum LINE_ALIGNMENT {
    middle = 0.5,
    outter = 1,
    inner = 0
}

export  enum LINE_CAP {
    BUTT = "butt",
    ROUND = "round",
    SQUARE = "square"
}

export  enum LINE_JOIN {
    MITER = "miter",
    ROUND = "round",
    BEVEL = "bevel"
}

export  enum BLEND_MODES {
    NORMAL = 0,
    ADD = 1,
    MULTIPLY = 2,
    SCREEN = 3,
    OVERLAY = 4,
    DARKEN = 5,
    LIGHTEN = 6,
    COLOR_DODGE = 7,
    COLOR_BURN = 8,
    HARD_LIGHT = 9,
    SOFT_LIGHT = 10,
    DIFFERENCE = 11,
    EXCLUSION = 12,
    HUE = 13,
    SATURATION = 14,
    COLOR = 15,
    LUMINOSITY = 16,
    NORMAL_NPM = 17,
    ADD_NPM = 18,
    SCREEN_NPM = 19,
    NONE = 20,
    SRC_OVER = 21,
    SRC_IN = 22,
    SRC_OUT = 23,
    SRC_ATOP = 24,
    DST_OVER = 25,
    DST_IN = 26,
    DST_OUT = 27,
    DST_ATOP = 28,
    ERASE = 29,
    SUBTRACT = 30
}

export  enum DRAW_MODES {
    POINTS = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6
}

export  enum SCALE_MODES {
    LINEAR = 0,
    NEAREST = 1
}

export  enum WRAP_MODES {
    CLAMP = 33071,
    REPEAT = 10497,
    MIRRORED_REPEAT = 33648
}

export  enum GC_MODES {
    AUTO = 0,
    MANUAL = 1
}

export  abstract class HashObject {
    protected _instanceId: number;
    protected _instanceType: string;
    protected static _object_id: number;
    constructor();
    /**
     * 每一个对象都会有一个唯一的id码。
     * @property instanceId
     * @public
     * @since 1.0.0
     * @return {number}
     * @readonly
     * @example
     *      //获取 对象唯一码
     *      console.log(this.instanceId);
     */
    get instanceId(): number;
    /**
     * 每一个类都有一个实例类型字符串，通过这个字符串，你能知道这个实例是从哪个类实例而来
     * @property instanceType
     * @since 1.0.0
     * @public
     * @return {string}
     * @readonly
     */
    get instanceType(): string;
    /**
     * 抽象方法，销毁一个对象，子类写
     * @method destroy
     * @since 1.0.0
     * @public
     * @return {void}
     */
    abstract destroy(): void;
}

export  class Event extends HashObject {
    /**
     * 舞台尺寸发生变化时触发
     * @Event
     * @property RESIZE
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static RESIZE: string;
    /**
     * ScrollPage组件滑动到开始位置事件
     * @property SCROLL_TO_HEAD
     * @static
     * @since 1.1.0
     * @type {string}
     */
    static SCROLL_TO_HEAD: string;
    /**
     * ScrollPage组件停止滑动事件
     * @property SCROLL_STOP
     * @static
     * @since 1.1.0
     * @type {string}
     */
    static SCROLL_STOP: string;
    /**
     * ScrollPage组件开始滑动事件
     * @property SCROLL_START
     * @static
     * @since 1.1.0
     * @type {string}
     */
    static SCROLL_START: string;
    /**
     * ScrollPage组件滑动到结束位置事件
     * @property ON_SCROLL_TO_END
     * @static
     * @since 1.1.0
     * @type {string}
     */
    static SCROLL_TO_END: string;
    /**
     * 舞台初始化完成后会触发的事件
     * @property INIT_STAGE
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static INIT_STAGE: string;
    /**
     * 显示对象加入到舞台事件
     * @Event
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static ADDED_TO_STAGE: string;
    /**
     * 显示对象从舞台移出事件
     * @Event
     * @property REMOVE_TO_STAGE
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static REMOVED_FROM_STAGE: string;
    /**
     * 显示对象 循环帧事件
     * @Event
     * @property ENTER_FRAME
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static ENTER_FRAME: string;
    /**
     * MovieClip 播放完成事件
     * @Event
     * @property END_FRAME
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static END_FRAME: string;
    /**
     * MovieClip 帧标签事件
     * @Event
     * @property CALL_FRAME
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static CALL_FRAME: string;
    /**
     * 完成事件
     * @Event
     * @property COMPLETE
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static COMPLETE: string;
    /**
     * 加载过程事件
     * @Event
     * @property PROGRESS
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static PROGRESS: string;
    /**
     * 出错事件
     * @Event
     * @property ERROR
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static ERROR: string;
    /**
     * 中断事件
     * @Event
     * @property ABORT
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static ABORT: string;
    /**
     * 开始事件
     * @Event
     * @property START
     * @type {string}
     * @static
     * @public
     * @since 1.0.0
     */
    static START: string;
    /**
     * 定时器触发事件
     * @property TIMER
     * @static
     * @since 1.0.9
     * @public
     * @type {string}
     */
    static TIMER: string;
    /**
     * 定时器完成事件
     * @property TIMER_COMPLETE
     * @since 1.0.9
     * @static
     * @public
     * @type {string}
     */
    static TIMER_COMPLETE: string;
    /**
     * 事件类型名
     * @property type
     * @type {string}
     * @public
     * @since 1.0.0
     */
    type: string;
    /**
     * 触发此事件的对象
     * @property target
     * @public
     * @since 1.0.0
     * @type {any}
     */
    target: any;
    /**
     * 随着事件一起附带的信息对象
     * 所有需要随事件一起发送的信息都可以放在此对象中
     * @property data
     * @public
     * @since 1.0.0
     * @type {any}
     * @default null
     */
    data: any;
    /**
     * @method Event
     * @param {string} type 事件类型
     * @public
     * @since 1.0.0
     */
    constructor(type: string);
    /**
     * 防止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。
     * @method stopPropagation
     * @public
     * @since 2.0.0
     * @return {void}
     */
    stopPropagation(): void;
    /**
     * 是否阻止事件向下冒泡
     * @property _pd
     * @type {boolean}
     * @private
     * @since 1.0.0
     */
    private _pd;
    destroy(): void;
    /**
     * 重围事件到初始状态方便重复利用
     * @method reset
     * @param {string} type
     * @param target
     * @since 2.0.0
     * @return {void}
     * @public
     */
    reset(type: string, target: any): void;
}

export  class EventDispatcher extends HashObject {
    /**
     * 捕获阶段事件名
     */
    protected eventTypes: any;
    /**
     * 冒泡阶段事件名
     */
    protected eventTypes1: any;
    constructor();
    /**
     * 全局的鼠标事件的监听数对象表，比如{"onMouseMove":9,"onMouseDown":7}
     * @property _MECO
     * @private
     * @since 1.0.0
     */
    private static _MECO;
    /**
     * 所有鼠标事件的数量
     */
    static _totalMEC: number;
    /**
     * 看看有多少mouse或者touch侦听数
     * @method getMouseEventCount
     * @return {number}
     * @static
     * @private
     * @since 1.0.0
     * @param {string} type 获取事件类型，默认是所有
     */
    static getMouseEventCount(type?: string): number;
    /**
     * 给对象添加一个侦听
     * @method addEventListener
     * @public
     * @since 1.0.0
     * @param {string} type 侦听类形
     * @param {Function}listener 侦听后的回调方法,如果这个方法是类实例的方法
     * @param context thisObject
     * @param {boolean} useCapture true 捕获阶段 false 冒泡阶段 默认 true
     * @example
     *      this.addEventListener(Event.ADD_TO_STAGE,function(e){trace(this);},this);
     */
    addEventListener(type: string, listener: Function, context?: any, useCapture?: boolean): this;
    /**
     * 监听一次
     * @param type
     * @param listener
     * @param context
     * @param useCapture
     */
    once(type: string, listener: Function, context?: any, useCapture?: boolean): this;
    /**
     * 增加或删除相应mouse或touch侦听记数
     * @method _changeMouseCount
     * @private
     * @since 1.0.0
     * @param {string} type
     * @param {boolean} isAdd
     */
    private _changeMouseCount;
    private _defaultEvent;
    /**
     * 广播侦听
     * @method dispatchEvent
     * @public
     * @since 1.0.0
     * @param {Event|string} event 广播所带的事件对象,如果传的是字符串则直接自动生成一个的事件对象,事件类型就是你传入进来的字符串的值
     * @param {Object} data 广播后跟着事件一起传过去的其他任信息,默认值为null，在传参中
     * @param {boolean} useCapture true 捕获阶段 false 冒泡阶段 默认 true
     * @return {boolean} 如果有收听者则返回true
     * @example
     *      var mySprite=new Sprite(),
     *          yourEvent=new Event("yourCustomerEvent");
     *       yourEvent.data='false2x';
     *       mySprite.addEventListener("yourCustomerEvent",function(e){
     *          trace(e.data);
     *        })
     *       mySprite.dispatchEvent(yourEvent);
     */
    dispatchEvent(event: any, data?: any, useCapture?: boolean): boolean;
    /**
     * 是否有添加过此类形的侦听
     * @method hasEventListener
     * @public
     * @since 1.0.0
     * @param {string} type 侦听类形
     * @param {boolean} useCapture true 捕获阶段 false 冒泡阶段 默认 true
     * @return {boolean} 如果有则返回true
     */
    hasEventListener(type: string, useCapture?: boolean): boolean;
    /**
     * 清除某一类型的所有事件
     * @param type
     * @param useCapture true 捕获阶段 false 冒泡阶段 默认 true
     * @return 返回自己
     */
    removeAllEventListenerByType(type: string, useCapture?: boolean): this;
    /**
     * 移除对应类型的侦听
     * @method removeEventListener
     * @public
     * @since 1.0.0
     * @param {string} type 要移除的侦听类型
     * @param {Function} listener 及侦听时绑定的回调方法
     * @param context listener和context都相等的才移除，默认自身
     * @param {boolean} useCapture true 捕获阶段 false 冒泡阶段 默认 true
     */
    removeEventListener(type: string, listener: Function, context?: any, useCapture?: boolean): this;
    /**
     * 移除对象中所有的侦听
     * @method removeAllEventListener
     * @public
     * @since 1.0.0
     */
    removeAllEventListener(): void;
    destroy(): void;
}

export  class Point extends HashObject {
    destroy(): void;
    /**
     * 构造函数
     * @method Point
     * @public
     * @since 1.0.0
     * @param x
     * @param y
     */
    constructor(x?: number, y?: number);
    /**
     * 水平坐标
     * @property x
     * @public
     * @since 1.0.0
     * @type{number}
     */
    x: number;
    /**
     * 垂直坐标
     * @property y
     * @since 1.0.0
     * @public
     * @type {number}
     */
    y: number;
    /**
     * 求两点之间的距离
     * @method distance
     * @param args 可变参数 传两个参数的话就是两个Point类型 传四个参数的话分别是两个点的x y x y
     * @return {number}
     * @static
     */
    static distance(...args: any[]): number;
    set(x: number, y: number): void;
}

export  class ObservablePoint extends HashObject {
    _x: number;
    _y: number;
    cb: any;
    scope: any;
    /**
     * @param {Function} cb - 值改变时的回调
     * @param {object} scope - 回调里的上下文this
     * @param {number} [x=0] - x
     * @param {number} [y=0] - y
     */
    constructor(cb: Function, scope: any, x?: number, y?: number);
    /**
     * 设置xy
     * @param {number} [x=0]
     * @param {number} [y=0]
     */
    set(x?: number, y?: number): void;
    /**
     * 从一个点复制xy
     *
     * @param {Point|ObservablePoint} point
     */
    copy(point: Point | ObservablePoint): void;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    destroy(): void;
}

export  class Transform extends HashObject {
    /**
     * 世界矩阵
     */
    worldMatrix: Matrix;
    /**
     * 本地矩阵
     */
    localMatrix: Matrix;
    /**
     * 记录子级是否更新worldMatrix，需要保证子级修改设置_worldID++
     */
    _worldID: number;
    /**
     * 记录是否和父级更新的_worldID一致，需要保证跟随父级修改设置_parentID=-1
     */
    _parentID: number;
    /**
    * 位置
    */
    position: ObservablePoint;
    /**
     * 缩放
     */
    scale: ObservablePoint;
    /**
     * 锚点
     * 不改变坐标原点
     */
    anchor: ObservablePoint;
    /**
     * 斜切值
     */
    skew: ObservablePoint;
    /**
     * 弧度制
     */
    _rotation: number;
    _cx: number;
    _sx: number;
    _cy: number;
    _sy: number;
    /**
     * 记录的本地坐标id；需要保证本地矩阵修改设置_localID++
     */
    _localID: number;
    /**
     * 当前本地坐标id
     */
    _currentLocalID: number;
    constructor();
    /**
     * 任何属性更改
     * @private
     */
    onChange(): void;
    /**
     * 当斜切改变时，先记录，优化计算
     * @private
     */
    updateSkew(): void;
    /**
     * 更新本地矩阵
     */
    updateLocalMatrix(): void;
    /**
     * 更新世界矩阵,跟随父级修改
     * @param {Transform} parentTransform - 父级矩阵
     */
    updateWorldMatrix(parentTransform: Transform): void;
    /**
     * 弧度制
     *
     * @member {number}
     */
    get rotation(): number;
    set rotation(value: number);
    destroy(): void;
}

export  class Matrix extends HashObject {
    /**
     * @property a
     * @type {number}
     * @public
     * @default 1
     * @since 1.0.0
     */
    a: number;
    /**
     * @property b
     * @public
     * @since 1.0.0
     * @type {number}
     */
    b: number;
    /**
     * @property c
     * @type {number}
     * @public
     * @since 1.0.0
     */
    c: number;
    /**
     * @property d
     * @type {number}
     * @public
     * @since 1.0.0
     */
    d: number;
    /**
     * @property tx
     * @type {number}
     * @public
     * @since 1.0.0
     */
    tx: number;
    /**
     * @property ty
     * @type {number}
     * @since 1.0.0
     * @public
     */
    ty: number;
    array: any;
    /**
     * 构造函数
     * @method Matrix
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} tx
     * @param {number} ty
     * @public
     * @since 1.0.0
     */
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    /**
     * 复制一个矩阵
     * @method clone
     * @since 1.0.0
     * @public
     * @return {Matrix}
     */
    clone(): Matrix;
    /**
     * 复制一个矩阵的所有属性
     * @param matrix
     */
    copy(matrix: Matrix | any): this;
    /**
     * 将一个点通过矩阵变换后的点，世界矩阵应用于局部坐标，转化为世界坐标
     * @method transformPoint
     * @param {number} x
     * @param {number} y
     * @param {Point} 默认为空，如果不为null，则返回的是Point就是此对象，如果为null，则返回来的Point是新建的对象
     * @return {Point}
     * @public
     * @since 1.0.0
     */
    transformPoint(x: number, y: number, bp?: Point): Point;
    /**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     * 用于世界坐标转化为局部坐标
     * @param {number} x
     * @param {number} y
     * @param {Point} 默认为空，如果不为null，则返回的是Point就是此对象，如果为null，则返回来的Point是新建的对象
     * @return {Point}
     */
    transformPointInverse(x: number, y: number, bp?: Point): Point;
    /**
     * 从一个矩阵里赋值给这个矩阵
     * @method setFrom
     * @param {Matrix} mtx
     * @public
     * @since 1.0.0
     */
    setFrom(mtx: Matrix): void;
    /**
     * 将矩阵恢复成原始矩阵
     * @method identity
     * @public
     * @since 1.0.0
     */
    identity(): void;
    /**
     * 反转一个矩阵
     * @method invert
     * @return {Matrix}
     * @since 1.0.0
     * @public
     */
    invert(): Matrix;
    /**
     * 设置一个矩阵通过普通的显示对象的相关九大属性，锚点不影响坐标原点,暂时不用
     * @method createBox
     * @param {number} x
     * @param {number} y
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {number} rotation 角度制
     * @param {number} skewX 角度制
     * @param {number} skewY 角度制
     * @param {number} ax
     * @param {number} ay
     * @since 1.0.0
     * @public
     */
    createBox(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, ax: number, ay: number): void;
    /**
     * 矩阵相乘
     * @method prepend
     * @public
     * @since 1.0.0
     * @param {Matrix} mtx
     */
    prepend: (mtx: Matrix) => void;
    /**
    * Appends the given Matrix to this Matrix.
    *
    * @param {Matrix} matrix - The matrix to append.
    * @return {Matrix} This matrix. Good for chaining method calls.
    */
    append(matrix: Matrix): void;
    /**
     * 判断两个矩阵是否相等
     * @method isEqual
     * @static
     * @public
     * @since 1.0.0
     * @param {Matrix} m1
     * @param {Matrix} m2
     * @return {boolean}
     */
    static isEqual(m1: Matrix, m2: Matrix): boolean;
    concat(mtx: Matrix): void;
    /**
     * 对矩阵应用旋转转换。
     * @method rotate
     * @param angle 弧度制
     * @since 1.0.3
     * @public
     */
    rotate(angle: number): void;
    /**
     * 对矩阵应用缩放转换。
     * @method scale
     * @param {Number} sx 用于沿 x 轴缩放对象的乘数。
     * @param {Number} sy 用于沿 y 轴缩放对象的乘数。
     * @since 1.0.3
     * @public
     */
    scale(sx: number, sy: number): void;
    /**
     * 沿 x 和 y 轴平移矩阵，由 dx 和 dy 参数指定。
     * @method translate
     * @public
     * @since 1.0.3
     * @param {Number} dx 沿 x 轴向右移动的量（以像素为单位
     * @param {Number} dy 沿 y 轴向右移动的量（以像素为单位
     */
    translate(dx: number, dy: number): void;
    set(a: any, b: any, c: any, d: any, tx: any, ty: any): this;
    /**
     * 获得角度,角度制,
     * 其他的x,y,就是tx,ty
     * scale就是a,d
     * skew基本不用
     */
    getRotation(): number;
    /**
     * Creates an array from the current Matrix object.与glsl中的mat3对应,注意行列主序执行transpose;
     *
     * @param {boolean} transpose - Whether we need to transpose the matrix or not
     * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @return {number[]} the newly created array which contains the matrix
     */
    toArray(transpose?: boolean, out?: any): any;
    /**
     * 从矩阵数据转成tansform的数据
     * @param transform
     */
    decompose(transform: Transform): Transform;
    /**
     * A default (identity) matrix
     *
     * @static
     * @const
     */
    static get IDENTITY(): Matrix;
    /**
     * A temp matrix
     *
     * @static
     * @const
     */
    static get TEMP_MATRIX(): Matrix;
    destroy(): void;
}

export  class Rectangle extends HashObject {
    /**
     * 类型
     */
    type: number;
    /**
     * 构造函数
     * @method Rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    clear(): void;
    copy(rect: Rectangle): this;
    clone(): Rectangle;
    /**
     * 矩形左上角的 x 坐标
     * @property x
     * @public
     * @since 1.0.0
     * @type{number}
     * @default 0
     */
    x: number;
    /**
     * 矩形左上角的 y 坐标
     * @property y
     * @public
     * @since 1.0.0
     * @type{number}
     * @default 0
     */
    y: number;
    /**
     * 矩形的宽度（以像素为单位）
     * @property width
     * @public
     * @since 1.0.0
     * @type{number}
     * @default 0
     */
    width: number;
    /**
     * 矩形的高度（以像素为单位）
     * @property height
     * @public
     * @since 1.0.0
     * @type{number}
     * @default 0
     */
    height: number;
    /**
     * returns the left edge of the rectangle
     */
    get left(): number;
    /**
     * returns the right edge of the rectangle
     */
    get right(): number;
    /**
     * returns the top edge of the rectangle
     */
    get top(): number;
    /**
     * returns the bottom edge of the rectangle
     */
    get bottom(): number;
    /**
     * 判断一个点是否在矩形内包括边
     * @method isPointIn
     * @param {Point} point
     * @return {boolean}
     * @public
     * @since 1.0.0
     */
    isPointIn(point: Point): boolean;
    /**
     * Fits this rectangle around the passed one.
     *
     * @param {Rectangle} rectangle - The rectangle to fit.
     */
    fit(rectangle: Rectangle): void;
    /**
     * Pads the rectangle making it grow in all directions.
     *
     * @param {number} paddingX - The horizontal padding amount.
     * @param {number} [paddingY] - The vertical padding amount.
     */
    pad(paddingX: number, paddingY?: number): void;
    /**
     * 将多个矩形合成为一个矩形,并将结果存到第一个矩形参数，并返回
     * @method createFromRects
     * @param {Rectangle} rect
     * @param {..arg} arg
     * @public
     * @since 1.0.0
     * @static
     */
    static createFromRects(...arg: Rectangle[]): Rectangle;
    /**
     * 通过一系列点来生成一个矩形
     * 返回包含所有给定的点的最小矩形
     * @method createFromPoints
     * @static
     * @public
     * @since 1.0.0
     * @param {Point} p1
     * @param {..arg} ary
     * @return {Rectangle}
     */
    static createFromPoints(rect: Rectangle, ...arg: Point[]): Rectangle;
    /**
     * 通过顶点数据  [0,1,
     *               2,3,
     *               1,3,
     *               1,0]
     * @param rect
     * @param vertexData 一般为8长度
     */
    static createFromVertexData(rect: Rectangle, vertexData: Float32Array, matrix?: Matrix): Rectangle;
    /**
     * 通过两个点来确定一个矩形
     * @method createRectform2Point
     * @static
     * @param rect
     * @param p1
     * @param p2
     * @return
     */
    static createRectfrom2Point(rect: Rectangle, p1: Point, p2: Point): Rectangle;
    /**
     * 判读两个矩形是否相交
     * @method testRectCross
     * @public
     * @since 1.0.2
     * @param r1
     * @param r2
     * @return {boolean}
     */
    static testRectCross(ra: Rectangle, rb: Rectangle): boolean;
    destroy(): void;
}

export const GroupD8: {
    E: number;
    SE: number;
    S: number;
    SW: number;
    W: number;
    NW: number;
    N: number;
    NE: number;
    MIRROR_VERTICAL: number;
    MIRROR_HORIZONTAL: number;
    uX: (ind: any) => number;
    uY: (ind: any) => number;
    vX: (ind: any) => number;
    vY: (ind: any) => number;
    inv: (rotation: any) => number;
    add: (rotationSecond: any, rotationFirst: any) => any;
    sub: (rotationSecond: any, rotationFirst: any) => any;
    /**
     * Adds 180 degrees to rotation. Commutative operation.
     *
     * @memberof GroupD8
     * @param {number} rotation - The number to rotate.
     * @returns {number} rotated number
     */
    rotate180: (rotation: any) => number;
    /**
     * Direction of main vector can be horizontal, vertical or diagonal.
     * Some objects work with vertical directions different.
     *
     * @memberof GroupD8
     * @param {number} rotation - The number to check.
     * @returns {boolean} Whether or not the direction is vertical
     */
    isVertical: (rotation: any) => boolean;
    /**
     * @memberof GroupD8
     * @param {number} dx - TODO
     * @param {number} dy - TODO
     *
     * @return {number} TODO
     */
    byDirection: (dx: any, dy: any) => number;
    /**
     * Helps sprite to compensate texture packer rotation.
     *
     * @memberof GroupD8
     * @param {Matrix} matrix - sprite world matrix
     * @param {number} rotation - The rotation factor to use.
     * @param {number} tx - sprite anchoring
     * @param {number} ty - sprite anchoring
     */
    matrixAppendRotationInv: (matrix: any, rotation: any, tx?: number, ty?: number) => void;
}

export  class Circle {
    /**
     * @member {number}
     * @default 0
     */
    x: number;
    /**
     * @member {number}
     * @default 0
     */
    y: number;
    /**
     * @member {number}
     * @default 0
     */
    radius: number;
    /**
     * 类型
     * @member {number}
     * @readOnly
     * @default SHAPES.CIRC
     * @see SHAPES
     */
    type: number;
    /**
     * @param {number} [x=0] - The X coordinate of the center of this circle
     * @param {number} [y=0] - The Y coordinate of the center of this circle
     * @param {number} [radius=0] - The radius of the circle
     */
    constructor(x?: number, y?: number, radius?: number);
    /**
     * Creates a clone of this Circle instance
     *
     * @return {Circle} a copy of the Circle
     */
    clone(): Circle;
    /**
     * @param {Point} point - The point to test
     * @return {boolean} Whether the x/y coordinates are within this Circle
     */
    isPointIn(point: Point): boolean;
    /**
    * Returns the framing rectangle of the circle as a Rectangle object
    *
    * @return {Rectangle} the framing rectangle
    */
    getBounds(): Rectangle;
}

export  class Ellipse {
    /**
     * @member {number}
     * @default 0
     */
    x: number;
    /**
     * @member {number}
     * @default 0
     */
    y: number;
    /**
     * @member {number}
     * @default 0
     */
    width: number;
    /**
     * @member {number}
     * @default 0
     */
    height: number;
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default SHAPES.ELIP
     * @see SHAPES
     */
    type: number;
    /**
     * @param {number} [x=0] - The X coordinate of the center of this circle
     * @param {number} [y=0] - The Y coordinate of the center of this circle
     * @param {number} [width=0] - The half width of this ellipse
     * @param {number} [height=0] - The half height of this ellipse
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * Creates a clone of this Ellipse instance
     *
     * @return {Ellipse} a copy of the ellipse
     */
    clone(): Ellipse;
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param {Point} point - The  point to test
     * @return {boolean} Whether the x/y coords are within this ellipse
     */
    isPointIn(point: Point): boolean;
    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     *
     * @return {Rectangle} the framing rectangle
     */
    getBounds(): Rectangle;
}

export  class Polygon {
    /**
     * 是否闭合
     */
    closed: boolean;
    /**
     * [0,1, 2,3, 2,3, 2,3]
     * An array of the points of this polygon
     * @member {number[]}
     */
    points: number[];
    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default SHAPES.POLY
     * @see SHAPES
     */
    type: number;
    /**
     * new Polygon(new Point(), new Point(), ...)
     *
     * new Polygon([x,y, x,y, ...])
     * new Polygon(x,y, x,y, x,y, ...)
     * @param {Point[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    constructor(...points: any[]);
    /**
     * Creates a clone of this polygon
     *
     * @return {Polygon} a copy of the polygon
     */
    clone(): Polygon;
    /**
     * Closes the polygon, adding points if necessary.
     *
     */
    close(): void;
    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {Point} point - The  point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */
    isPointIn(point: Point): boolean;
}

export  class RoundedRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * @member {number}
     * @default 20
     */
    radius: number;
    type: number;
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);
    /**
     * Creates a clone of this Rounded Rectangle
     *
     * @return {RoundedRectangle} a copy of the rounded rectangle
     */
    clone(): RoundedRectangle;
    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param {Point} point - The  point to test
     * @return {boolean} Whether the x/y coords are within this ellipse
     */
    isPointIn(point: Point): boolean;
}

export  function mapPremultipliedBlendModes(): any[];

export  function getEnv(): "tb" | "web";

export  function createCanvas(): HTMLCanvasElement;

export  function initedByCanvas(canvas: any): void;

export  function destroyCanvasContent(): void;

export  function createImage(): HTMLImageElement;

export  function getRequestAnimationFrame(): any;

export  function getCancelAnimationFrame(): any;

export  const INT_BITS1 = 32;

export  const INT_MAX = 2147483647;

export  const INT_MIN: number;

export  function abs(v: any): number;

export  function min(x: any, y: any): number;

export  function max(x: any, y: any): number;

export  function isPow2(v: any): boolean;

export  function log2(v: any): number;

export  function log10(v: any): 1 | 0 | 2 | 4 | 3 | 9 | 5 | 6 | 7 | 8;

export  function popCount(v: any): number;

export  function countTrailingZeros(v: any): number;

export  function nextPow2(v: any): any;

export  function prevPow2(v: any): number;

export  function parity(v: any): number;

export  function reverse(v: any): number;

export  function interleave2(x: any, y: any): number;

export  function deinterleave2(v: any, n: any): number;

export  function interleave3(x: any, y: any, z: any): number;

export  function deinterleave3(v: any, n: any): number;

export  function nextCombination(v: any): number;

export  class CanvasGraphicsRenderer {
    renderer: CanvasRenderer;
    /**
     * @param {CanvasRenderer} renderer - The current renderer.
     */
    constructor(renderer: CanvasRenderer);
    /**
     * Renders a Graphics object to a canvas.
     *
     * @param {Graphics} graphics - the actual graphics object to render
     */
    render(graphics: Graphics): void;
    /**
     * destroy graphics object
     *
     */
    destroy(): void;
}

export  function holePath(graphicsData: GraphicsData, context: CanvasRenderingContext2D, ccw?: boolean): void;

export  function judgeCcw(points: number[]): boolean;

export  class CanvasMaskManager extends HashObject {
    renderer: any;
    /**
     * @param {CanvasRenderer} renderer - The canvas renderer.
     */
    constructor(renderer: CanvasRenderer);
    /**
     * This method adds it to the current stack of masks.
     *
     * @param {object} maskData - the maskData that will be pushed
     */
    pushMask(maskData: Graphics): void;
    /**
     * Renders a Graphics shape.
     *
     * @param {Graphics} graphics - The object to render.
     */
    renderGraphicsShape(graphics: Graphics): void;
    /**
     * Restores the current drawing context to the state it was before the mask was applied.
     *
     * @param {CanvasRenderer} renderer - The renderer context to use.
     */
    popMask(renderer: CanvasRenderer): void;
    /**
     * Destroys this canvas mask manager.
     *
     */
    destroy(): void;
}

export  class BatchDrawCall {
    /**
     * 存储基础图片
     */
    textures: BaseTexture[];
    /**
     * 混色模式
     */
    blend: BLEND_MODES;
    /**
     * 图片总数
     */
    textureCount: number;
    /**
     * 索引起始
     */
    start: number;
    /**
     * 总数
     */
    size: number;
    /**
     * 绘制类型
     */
    type: number;
    constructor();
}

export  class ObjectRenderer {
    /**
     * The renderer this manager works for.
     *
     * @member {Renderer}
     */
    renderer: WebglRenderer;
    constructor(renderer: WebglRenderer);
    /**
     * Generic method called when there is a WebGL context change.
     *
     * @param {WebGLRenderingContext} gl new webgl context
     */
    onContextChange(): void;
    /**
     * Starts the renderer and sets the shader
     *
     */
    start(): void;
    /**
     * Stops the renderer
     *
     */
    stop(): void;
    /**
     * Stub method for rendering content and emptying the current batch.
     *
     */
    flush(): void;
    /**
     * Renders an object
     *
     */
    render(object: any): void;
    /**
     * Generic destroy methods to be overridden by the subclass
     */
    destroy(): void;
}

export  function createContext(canvas: HTMLCanvasElement, options?: any): WebGLRenderingContext;

export  function checkMaxIfStatementsInShader(maxIfs: number, gl: WebGLRenderingContext): number;

export  class BatchBuffer {
    /**
     * 顶点数据,类型化数组
     * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
     */
    vertices: ArrayBuffer;
    /**
     * 顶点的位置信息视图，浮点数
     * View on the vertices as a Float32Array for positions
     */
    float32View: Float32Array;
    /**
     * uv及颜色值的信息视图，整数
     * View on the vertices as a Uint32Array for uvs
     */
    uint32View: Uint32Array;
    /**
     * positions,uvs,colors暂时不用做单独记录
     */
    positions: any;
    uvs: any;
    colors: any;
    /**
     * @param {number} size - The size of the buffer in bytes.
     */
    constructor(size: number);
    /**
     * Destroys the buffer.
     *
     */
    destroy(): void;
}

export  class GLTexture {
    /**
     * 当前上下文
     * The current WebGL rendering context
     */
    gl: WebGLRenderingContext;
    texture: WebGLTexture;
    /**
     * If mipmapping was used for this texture, enable and disable with enableMipmap()
     * 是否对纹理进行存储缩小的各种尺寸纹理，比如原图1024*1024，存储512*512，256*256，128*128等一直到1*1;为了纹理的缩放时处理，是取相邻或线性插值
     */
    mipmap: boolean;
    /**
     * Set to true to enable pre-multiplied alpha
     * 设置纹理预乘透明值，为true，https://blog.csdn.net/mydreamremindme/article/details/50817294
     */
    premultiplyAlpha: any;
    /**
     * 纹理宽度
     */
    width: number;
    /**
     * 纹理高度
     */
    height: number;
    /**
     * {number} the pixel format of the texture. defaults to gl.RGBA
     * 纹理格式，默认gl.RGBA  还有gl.RGB
     */
    format: any;
    /**
     * {number} the gl type of the texture. defaults to gl.UNSIGNED_BYTE
     * 纹理类型，默认gl.UNSIGNED_BYTE   //https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/texImage2D
     */
    type: any;
    constructor(gl: WebGLRenderingContext, width?: number, height?: number, format?: any, type?: any);
    /**
     * Uploads this texture to the GPU
     * GPU存储纹理数据
     * @param source {HTMLImageElement|ImageData|HTMLVideoElement} the source image of the texture
     */
    upload(source: any): void;
    /**
     * Use a data source and uploads this texture to the GPU
     * 数据类型的纹理
     * @param data {TypedArray} the data to upload to the texture
     * @param width {number} the new width of the texture
     * @param height {number} the new height of the texture
     */
    uploadData: (data: any, width: any, height: any) => void;
    /**
     * Binds the texture
     * 绑定纹理，不传location表示不激活额外纹理，绑定的纹理位置与原状态相同
     * @param  location
     */
    bind(location?: number): void;
    /**
     * Unbinds the texture
     * 解除纹理绑定，解除位置与原状态相同
     */
    unbind(): void;
    /**
     * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
     * 缩小的纹理像素 按线性插值，还是按钮邻近原则
     */
    minFilter(linear: boolean): void;
    /**
     * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
     * 放大的纹理像素 按线性插值，还是按钮邻近原则
     */
    magFilter(linear: boolean): void;
    /**
     * Enables mipmapping
     * 生成缩小的纹理集，只能在图片宽高满足2的指数时使用
     */
    enableMipmap(): void;
    /**
     * Enables linear filtering
     * 设置线性
     */
    enableLinearScaling(): void;
    /**
     * Enables nearest neighbour interpolation
     * 设置邻近
     */
    enableNearestScaling(): void;
    /**
     * Enables clamping on the texture so WebGL will not repeat it
     * 如果纹理不满足2的指数时必设，以边缘像素延申
     */
    enableWrapClamp(): void;
    /**
     * Enable tiling on the texture
     * 允许纹理重复，地砖模式
     */
    enableWrapRepeat(): void;
    /**
     * 镜像形式重复
     */
    enableWrapMirrorRepeat(): void;
    /**
     * Destroys this texture
     */
    destroy(): void;
    /**
     * 从图片数据创建纹理
     * @static
     * @param gl {WebGLRenderingContext} The current WebGL context
     * @param source {HTMLImageElement|ImageData} the source image of the texture
     * @param premultiplyAlpha {Boolean} If we want to use pre-multiplied alpha
     */
    static fromSource(gl: WebGLRenderingContext, source: HTMLImageElement | ImageData, premultiplyAlpha?: boolean): GLTexture;
    /**
     * @static
     * @param gl {WebGLRenderingContext} The current WebGL context
     * @param data {TypedArray} the data to upload to the texture
     * @param width {number} the new width of the texture
     * @param height {number} the new height of the texture
     */
    static fromData(gl: any, data: any, width: any, height: any): GLTexture;
}

export  class GLBuffer {
    /**
     * 当前上下文
     * @member {WebGLRenderingContext}
     */
    gl: any;
    /**
     * The WebGL buffer, created upon instantiation
     * @member {WebGLBuffer}
     */
    buffer: any;
    /**
     * buffer类型
     * 顶点或索引
     * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
     */
    type: any;
    /**
     * The draw type of the buffer
     * 绘制类型
     * gl.STATIC_DRAW: 缓冲区的内容可能经常使用，而不会经常更改
     * gl.DYNAMIC_DRAW: 缓冲区的内容可能经常被使用，并且经常更改
     * gl.STREAM_DRAW: 缓冲区的内容可能不会经常使用,且不会经常更改
     * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
     */
    drawType: any;
    /**
     * The data in the buffer, as a typed array
     * 用来表示通用的、固定长度的原始二进制数据缓冲区。ArrayBuffer 不能直接操作，
     * 而是要通过类型数组对象或 DataView 对象来操作，
     * 它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。
     * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
     */
    data: any;
    /**
     * 更新ID
     */
    _updateID: number;
    constructor(gl: any, type?: any, data?: any, drawType?: any);
    /**
     * 上传数据
     * Uploads the buffer to the GPU
     * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data to upload
     * @param offset {Number} if only a subset of the data should be uploaded, this is the amount of data to subtract
     * @param dontBind {Boolean} whether to bind the buffer before uploading it  是否不绑定buffer
     */
    upload(data: any, offset?: number, dontBind?: boolean): void;
    /**
     * Binds the buffer
     * 状态机接下来使用的buffer
     *
     */
    bind(): void;
    /**
     * Destroys the buffer
     *
     */
    destroy: () => void;
    /**
     * 创建顶点缓存
     * @param gl
     * @param data
     * @param drawType
     */
    static createVertexBuffer(gl: any, data?: any, drawType?: any): GLBuffer;
    /**
     * 创建索引缓存
     * @param gl
     * @param data
     * @param drawType
     */
    static createIndexBuffer(gl: any, data?: any, drawType?: any): GLBuffer;
    static create(gl: any, type: any, data: any, drawType: any): GLBuffer;
}

export  function setVertexAttribArrays(gl: any, attribs: any, state?: any): void;

export  class VertexArrayObject {
    nativeVaoExtension: any;
    nativeState: any;
    nativeVao: any;
    /**
     * 当前上下文
     */
    gl: WebGLRenderingContext;
    /**
     * An array of attributes
     * attributes数组
     */
    attributes: any[];
    /**
     * 索引buffer
     *  @member {GLBuffer}
     */
    indexBuffer: any;
    /**
     * A boolean flag
     */
    dirty: boolean;
    constructor(gl: WebGLRenderingContext, state: any);
    /**
     * Binds the buffer
     * 绑定数据
     */
    bind(): this;
    /**
     * Unbinds the buffer
     * 解绑数据
     */
    unbind(): this;
    /**
     * Uses this vao
     * 激活vao
     */
    activate(): this;
    /**
     * 添加attribute
     * @param buffer     {gl.GLBuffer}
     * @param attribute  {*}
     * @param type       {String}
     * @param normalized {Boolean}
     * @param stride     {Number}
     * @param start      {Number}
     * @param name       {string} 名字，用于移除，否则不需要传
     */
    addAttribute(buffer: any, attribute: any, type?: any, normalized?: any, stride?: any, start?: any, name?: string): this;
    /**
     * 移除attribute，暂时attributes是数组，是否考虑变成对象，现在按数组遍历移除，到时重名可能还有问题TODO
     * @param name
     * @param onlyOne
     */
    removeAttribute(name: string, onlyOne?: boolean): this;
    /**
     * 添加索引数据
     * @param buffer   {gl.GLBuffer}
     */
    addIndex(buffer: any): this;
    /**
     * Unbinds this vao and disables it
     * 解绑废弃vao
     */
    clear(): this;
    /**
     * 执行绘制
     * @param type  {Number} gl.TRIANGLES\gl.TRIANGLE_STRIP等
     * @param size  {Number} 个数
     * @param start {Number} 偏移
     */
    draw(type: any, size?: any, start?: any): this;
    /**
     * Destroy this vao
     */
    destroy(): void;
    getSize(): number;
    /**
    * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
    * If you find on older devices that things have gone a bit weird then set this to true.
    */
    /**
     * Lets the VAO know if you should use the WebGL extension or the native methods.
     * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
     * If you find on older devices that things have gone a bit weird then set this to true.
     * @static
     * @property {Boolean} FORCE_NATIVE
     */
    static FORCE_NATIVE: boolean;
}

export  class GLFramebuffer {
    /**
     * 当前渲染上下文
     */
    gl: WebGLRenderingContext;
    /**
     * 帧缓存
     */
    framebuffer: WebGLFramebuffer;
    /**
     * 模板缓存
     */
    stencil: WebGLRenderbuffer;
    texture: GLTexture;
    width: number;
    height: number;
    constructor(gl: WebGLRenderingContext, width: number, height: number);
    /**
     * Adds a texture to the frame buffer
     * @param texture {glCore.GLTexture}
     */
    enableTexture(texture?: GLTexture): void;
    /**
     * Initialises the stencil buffer
     */
    enableStencil(): void;
    /**
     * Erases the drawing area and fills it with a colour
     * @param  r {Number} the red value of the clearing colour
     * @param  g {Number} the green value of the clearing colour
     * @param  b {Number} the blue value of the clearing colour
     * @param  a {Number} the alpha value of the clearing colour
     */
    clear(r: number, g: number, b: number, a: number): void;
    /**
     * Binds the frame buffer to the WebGL context
     */
    bind(): void;
    /**
     * Unbinds the frame buffer to the WebGL context
     */
    unbind(): void;
    /**
     * Resizes the drawing area of the buffer to the given width and height
     * @param  width  {Number} the new width
     * @param  height {Number} the new height
     */
    resize(width: number, height: number): void;
    /**
     * Destroys this buffer
     */
    destroy(): void;
    /**
     * Creates a frame buffer with a texture containing the given data
     * @static
     * @param gl {WebGLRenderingContext} The current WebGL rendering context
     * @param width {Number} the width of the drawing area of the frame buffer
     * @param height {Number} the height of the drawing area of the frame buffer
     * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
     */
    static createRGBA(gl: WebGLRenderingContext, width: number, height: number, data?: any): GLFramebuffer;
    /**
     * Creates a frame buffer with a texture containing the given data
     * @static
     * @param gl {WebGLRenderingContext} The current WebGL rendering context
     * @param width {Number} the width of the drawing area of the frame buffer
     * @param height {Number} the height of the drawing area of the frame buffer
     * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
     */
    static createFloat32(gl: WebGLRenderingContext, width: number, height: number, data: any): GLFramebuffer;
}

export  function compileProgram(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, attributeLocations?: any): WebGLProgram;

export  function mapType(gl: any, type: any): any;

export  function mapSize(type: string): number;

export  function extractAttributes(gl: WebGLRenderingContext, program: WebGLProgram): {};

export  function defaultValue(type: string, size: number): false | any[] | Int32Array | 0;

export  function extractUniforms(gl: WebGLRenderingContext, program: WebGLProgram): {};

export  function setPrecision(src: string, precision: string): string;

export  function generateUniformAccessObject(gl: WebGLRenderingContext, uniformData: any): {
    data: {};
}

export  class GLShader {
    /**
     * The current WebGL rendering context
     * @member {WebGLRenderingContext}
     */
    gl: WebGLRenderingContext;
    /**
     * The shader program
     * @member {WebGLProgram}
     */
    program: WebGLProgram;
    /**
     *  The attributes of the shader as an object containing the following properties
     * {
     * 	type,
     * 	size,
     * 	location,
     * 	pointer
     * }
     * @member {Object}
     */
    attributes: any;
    uniformData: any;
    /**
     * The uniforms of the shader as an object containing the following properties
     * {
     * 	gl,
     * 	data
     * }
     * @member {Object}
     */
    uniforms: any;
    constructor(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string, precision?: string, attributeLocations?: any);
    /**
     * Uses this shader
     * 状态机当前使用的shader
     * @return {glCore.GLShader} Returns itself.
     */
    bind(): this;
    /**
     * Destroys this shader
     * TODO
     */
    destroy(): void;
}

export  function generateMultiTextureShader(gl: any, maxTextures: any): GLShader;

export  class BatchRenderer extends ObjectRenderer {
    vertSize: number;
    vertByteSize: number;
    size: number;
    /**
     * 当前顶点数量
     */
    currentSize: number;
    /**
     * 当前索引数量
     */
    currentIndexSize: number;
    /**
     * 顶点数据
     */
    aBuffers: {};
    /**
     * 索引数据
     */
    iBuffers: {};
    /**
     * The default shaders that is used if a sprite doesn't have a more specific one.
     * there is a shader for each number of textures that can be rendered.
     * These shaders will also be generated on the fly as required.
     */
    shader: GLShader;
    /**
     * 当前累计的绘制对象数量
     */
    currentIndex: number;
    groups: BatchDrawCall[];
    /**
     * 绘制对象数组
     * 包括图片的和矢量图的
     */
    elements: batchElementInterface[];
    vaos: VertexArrayObject[];
    vaoMax: number;
    vertexCount: number;
    MAX_TEXTURES: number;
    vertexBuffers: GLBuffer[];
    indexBuffers: GLBuffer[];
    constructor(renderer: WebglRenderer);
    /**
     * Sets up the renderer context and necessary buffers.
     */
    onContextChange(): void;
    /**
     * Called before the renderer starts rendering.
     *
     */
    onPreRender(): void;
    /**
     * Renders the sprite object.
     * element必须的属性
     *
     * _texture  里面有.BaseTexture
     * _vertexData
     * _indices
     * _worldAlpha
     * _tintRGB
     * _uvs
     *
     * the sprite to render when using this spritebatch
     */
    render(element: batchElementInterface): void;
    /**
     * 获得索引buffer
     * @param size
     */
    getIndexBuffer(size: any): any;
    /**
     * 获取相应的顶点数据buffer
     * @param size
     */
    getAttributeBuffer(size: number): any;
    /**
     * Renders the content and empties the current batch.
     *
     */
    flush(): void;
    packGeometry(element: batchElementInterface, float32View: any, uint32View: any, indexBuffer: any, index: any, indexCount: any): void;
    /**
     * Starts a new sprite batch.
     */
    start(): void;
    /**
     * Stops and flushes the current batch.
     *
     */
    stop(): void;
    /**
     * Destroys the SpriteRenderer.
     *
     */
    destroy(): void;
}

export {};

export  class SystemRenderer extends EventDispatcher {
    /**
     * 渲染类型
     *
     * @member {number}
     * @default RENDERER_TYPE.UNKNOWN
     * @see RENDERER_TYPE
     */
    type: RENDERER_TYPE;
    width: number;
    height: number;
    /**
     * 是否透明
     */
    transparent: boolean;
    /**
     * 背景色，十六进制数值
     * @member {number}
     */
    protected _backgroundColor: number;
    /**
     * 背景色，rgba值
     * @member {number[]}
     */
    protected _backgroundColorRgba: number[];
    /**
     * 背景色，字符串
     */
    protected _backgroundColorString: string;
    /**
     * 临时父级对象，用于更新updateTransform
     */
    protected _tempDisplayObjectParent: Container;
    /**
     * 上一个被渲染的根显示对象
     */
    _lastObjectRendered: DisplayObject;
    constructor();
    /**
     * 尺寸重置，暂时根据屏幕分辨率
     * @param {number} screenWidth
     * @param {number} screenHeight
     */
    resize(width: number, height: number): void;
    /**
     * 核心渲染方法，子级重写
     */
    render(displayObject: any, renderTexture?: any, transform?: any): void;
    /**
     * 销毁方法
     */
    destroy(): void;
    /**
     * 背景色，十六进制颜色
     * @member {number}
     */
    get backgroundColor(): number;
    /**
     * 背景色，十六进制颜色
     */
    set backgroundColor(value: number);
}

export  class RenderTarget {
    /**
     * The current WebGL drawing context.
     *
     */
    gl: WebGLRenderingContext;
    /**
     * A frame buffer
     */
    frameBuffer: GLFramebuffer;
    /**
     * The texture
     */
    texture: GLTexture;
    /**
     * The background colour of this render target, as an array of [r,g,b,a] values
     *
     */
    clearColor: number[];
    /**
     * The size of the object as a rectangle
     */
    size: Rectangle;
    /**
     * The projection matrix
     */
    projectionMatrix: Matrix;
    /**
     * The object's transform
     */
    transform: Matrix;
    /**
     * The frame.
     *
     */
    frame: Rectangle;
    defaultFrame: Rectangle;
    destinationFrame: any;
    sourceFrame: any;
    /**
     * The stencil buffer stores masking data for the render target
     *
     */
    stencilBuffer: GLBuffer;
    /**
     * The data structure for the stencil masks
     */
    stencilMaskStack: Graphics[];
    /**
     * The scale mode.
     *
     */
    scaleMode: number;
    /**
     * Whether this object is the root element or not
     */
    root: boolean;
    /**
     * Stores filter data for the render target
     *
     * @member {object[]}
     */
    filterData: any;
    /**
     * The key for pooled texture of FilterSystem
     * @private
     * @member {string}
     */
    filterPoolKey: string;
    /**
     * @param {WebGLRenderingContext} gl - The current WebGL drawing context
     * @param {number} [width=0] - the horizontal range of the filter
     * @param {number} [height=0] - the vertical range of the filter
     * @param {number} [scaleMode=SCALE_MODES.LINEAR] - See {@link SCALE_MODES} for possible values
     * @param {boolean} [root=false] - Whether this object is the root element or not
     */
    constructor(gl: WebGLRenderingContext, width?: number, height?: number, scaleMode?: number, root?: boolean);
    /**
     * Clears the filter texture.
     *
     * @param {number[]} [clearColor=this.clearColor] - Array of [r,g,b,a] to clear the framebuffer
     */
    clear(clearColor?: number[]): void;
    /**
     * Binds the stencil buffer.
     *
     */
    attachStencilBuffer(): void;
    /**
     * Sets the frame of the render target.
     *
     * @param {Rectangle} destinationFrame - The destination frame.
     * @param {Rectangle} sourceFrame - The source frame.
     */
    setFrame(destinationFrame?: Rectangle, sourceFrame?: Rectangle): void;
    /**
     * Binds the buffers and initialises the viewport.
     *
     */
    activate(): void;
    /**
     * Updates the projection matrix based on a projection frame (which is a rectangle)
     *
     * @param {Rectangle} destinationFrame - The destination frame.
     * @param {Rectangle} sourceFrame - The source frame.
     */
    calculateProjection(destinationFrame: Rectangle, sourceFrame?: Rectangle): void;
    /**
     * Resizes the texture to the specified width and height
     *
     * @param {number} width - the new width of the texture
     * @param {number} height - the new height of the texture
     */
    resize(width: number, height: number): void;
    /**
     * 销毁方法
     */
    destroy(): void;
}

export  class TextureManager {
    boundTextures: any;
    renderer: WebglRenderer;
    emptyTextures: any;
    _nextTextureLocation: number;
    currentLocation: number;
    gl: WebGLRenderingContext;
    /**
     * Track textures in the renderer so we can no longer listen to them on destruction.
     */
    _managedTextures: Array<any>;
    /**
     * @param {WebGLRenderer} renderer - A reference to the current renderer
     */
    constructor(renderer: WebglRenderer);
    onContextChange(): void;
    /**
     * Binds the texture. This will return the location of the bound texture.
     * It may not be the same as the one you pass in. This is due to optimisation that prevents
     * needless binding of textures. For example if the texture is already bound it will return the
     * current location of the texture instead of the one provided. To bypass this use force location
     *
     * @param {Texture} texture - the new texture
     * @param {number} location - the suggested texture location
     * @param {boolean} forceLocation - force the location
     * @return {number} bound texture location
     */
    bindTexture(texture: any, location?: number, forceLocation?: boolean): number;
    /**
     * Gets a texture.
     *
     */
    getTexture(): void;
    /**
     * Updates and/or Creates a WebGL texture for the renderer's context.
     *
     * @param {BaseTexture|Texture} texture - the texture to update
     * @param {number} location - the location the texture will be bound to.
     * @return {GLTexture} The gl texture.
     */
    updateTexture(texture: any, location?: number): GLTexture;
    /**
     * unbinds the texture ...
     *
     * @param {Texture} texture - the texture to unbind
     */
    unbindTexture(texture: any): void;
    /**
     * Deletes the texture from WebGL
     *
     * @param {BaseTexture|Texture} texture - the texture to destroy
     * @param {boolean} [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
     */
    destroyTexture(texture: any, skipRemove: any): void;
    /**
     * Deletes all the textures from WebGL
     */
    removeAll(): void;
    /**
     * Destroys this manager and removes all its textures
     */
    destroy(): void;
}

export  class TextureGarbageCollector {
    renderer: WebglRenderer;
    count: number;
    checkCount: number;
    maxIdle: number;
    checkCountMax: number;
    mode: number;
    /**
     * @param {WebGLRenderer} renderer - The renderer this manager works for.
     */
    constructor(renderer: WebglRenderer);
    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */
    update(): void;
    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */
    run(): void;
    /**
     * Removes all the textures within the specified displayObject and its children from the GPU
     *
     * @param {DisplayObject} displayObject - the displayObject to remove the textures from.
     */
    unload(displayObject: any): void;
}

export  class WebGLState {
    blendModes: any;
    /**
     * The current active state
     *
     */
    activeState: Uint8Array;
    /**
     * The default state
     *
     */
    defaultState: Uint8Array;
    gl: any;
    maxAttribs: any;
    attribState: {
        tempAttribState: any[];
        attribState: any[];
    };
    nativeVaoExtension: any;
    /**
     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
     */
    constructor(gl: WebGLRenderingContext);
    /**
     * Sets the current state
     *
     * @param {*} state - The state to set.
     */
    setState(state: any): void;
    /**
     * Enables or disabled blending.
     *
     * @param {boolean} value - Turn on or off webgl blending.
     */
    setBlend(value: any): void;
    /**
     * Sets the blend mode.
     *
     * @param {number} value - The blend mode to set to.
     */
    setBlendMode(value: any): void;
    /**
     * Sets whether to enable or disable depth test.
     *
     * @param {boolean} value - Turn on or off webgl depth testing.
     */
    setDepthTest(value: any): void;
    /**
     * 设置是否开启剔除功能
     * @param {boolean} value - Turn on or off webgl cull face.
     */
    setCullFace(value: any): void;
    /**
     * 设置剔除的面，基本不设置，因为设置正方面就行setFrontFace
     * gl.FRONT
     * gl.BACK 默认
     * gl.FRONT_AND_BACK
     */
    /**
     * 设置gl的正面的绘制顺序，
     * @param {boolean} value - true是顺时针，false是逆时针
     */
    setFrontFace(value: any): void;
    /**
     * Disables all the vaos in use
     *
     */
    resetAttributes(): void;
    /**
     * Resets all the logic and disables the vaos
     */
    resetToDefault(): void;
    /**
     *
     */
    resetTo3D(): void;
}

export  class BatchManager {
    /**
     *
     */
    renderer: WebglRenderer;
    /**
     * 空
     */
    emptyRenderer: ObjectRenderer;
    /**
     * 当前使用的ObjectRenderer
     * @member {ObjectRenderer}
     */
    currentRenderer: ObjectRenderer;
    constructor(renderer: WebglRenderer);
    /**
     * Changes the current renderer to the one given in parameter
     *
     * @param {ObjectRenderer} objectRenderer - The object renderer to use.
     */
    setObjectRenderer(objectRenderer: ObjectRenderer): void;
    /**
     * This should be called if you wish to do some custom rendering
     * It will basically render anything that may be batched up such as sprites
     */
    flush(): void;
    /**
     * Reset the system to an empty renderer
     */
    reset(): void;
}

export  class Filter {
    vertexSrc: string;
    fragmentSrc: string;
    private _blendMode;
    get blendMode(): BLEND_MODES;
    /**
     * 别用先
     */
    set blendMode(value: BLEND_MODES);
    uniformData: any;
    /**
     * An object containing the current values of custom uniforms.
     * @example <caption>Updating the value of a custom uniform</caption>
     * filter.uniforms.time = performance.now();
     *
     * @member {object}
     */
    uniforms: any;
    glShaders: any;
    glShaderKey: string;
    /**
     * The padding of the filter. Some filters require extra space to breath such as a blur.
     * Increasing this will add extra width and height to the bounds of the object that the
     * filter is applied to.
     *
     * @member {number}
     */
    padding: number;
    /**
     * The resolution of the filter. Setting this to be lower will lower the quality but
     * increase the performance of the filter.
     *
     * @member {number}
     */
    resolution: number;
    /**
     * If enabled is true the filter is applied, if false it will not.
     *
     * @member {boolean}
     */
    enabled: boolean;
    /**
     * If enabled, PixiJS will fit the filter area into boundaries for better performance.
     * Switch it off if it does not work for specific shader.
     *
     * @member {boolean}
     */
    autoFit: boolean;
    /**
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     */
    constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: any);
    /**
     * Applies the filter
     *
     * @param {FilterManager} filterManager - The renderer to retrieve the filter from
     * @param {RenderTarget} input - The input render target.
     * @param {RenderTarget} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it
     * @param {object} [currentState] - It's current state of filter.
     *        There are some useful properties in the currentState :
     *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
     */
    apply(filterManager: any, input: RenderTarget, output: RenderTarget, clear: boolean): void;
    /**
     * The default vertex shader source
     *
     * @static
     * @constant
     */
    private static get defaultVertexSrc();
    /**
     * The default fragment shader source
     *
     * @static
     * @constant
     */
    private static get defaultFragmentSrc();
}

export  class FXAAFilter extends Filter {
    constructor();
}

export  const defaultVert: string;

export  const defaultFilterMatrix: string;

export  class NoiseFilter extends Filter {
    /**
     * @param {number} noise - The noise intensity, should be a normalized value in the range [0, 1].
     * @param {number} seed - A random seed for the noise generation. Default is `Math.random()`.
     */
    constructor(noise?: number, seed?: number);
    /**
     * The amount of noise to apply, this value should be in the range (0, 1].
     *
     * @member {number}
     * @default 0.5
     */
    get noise(): any;
    set noise(value: any);
    /**
     * A seed value to apply to the random noise generation. `Math.random()` is a good value to use.
     *
     * @member {number}
     */
    get seed(): any;
    set seed(value: any);
}

export  class DisplacementFilter extends Filter {
    maskSprite: Sprite;
    maskMatrix: Matrix;
    scale: Point;
    /**
     * @param {Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
     * @param {number} scale - The scale of the displacement
     */
    constructor(sprite: Sprite, scale?: number);
    /**
     * Applies the filter.
     *
     * @param {FilterManager} filterManager - The manager.
     * @param {RenderTarget} input - The input target.
     * @param {RenderTarget} output - The output target.
     */
    apply(filterManager: any, input: any, output: any): void;
    /**
     * The texture used for the displacement map. Must be power of 2 sized texture.
     *
     * @member {Texture}
     */
    get map(): any;
    set map(value: any);
}

export  class BlurXFilter extends Filter {
    strength: number;
    /**
     * Sets the strength of both the blur.
     *
     * @member {number}
     * @default 16
     */
    get blur(): number;
    set blur(value: number);
    private _quality;
    private passes;
    /**
    * Sets the quality of the blur by modifying the number of passes. More passes means higher
    * quaility bluring but the lower the performance.
    *
    * @member {number}
    * @default 4
    */
    get quality(): number;
    set quality(value: number);
    private firstRun;
    /**
     * @param {number} strength - The strength of the blur filter.
     * @param {number} quality - The quality of the blur filter.
     * @param {number} resolution - The resolution of the blur filter.
     * @param {number} [kernelSize=5] - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
     */
    constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);
    /**
     * Applies the filter.
     *
     * @param {FilterManager} filterManager - The manager.
     * @param {RenderTarget} input - The input target.
     * @param {RenderTarget} output - The output target.
     * @param {boolean} clear - Should the output be cleared before rendering?
     */
    apply(filterManager: any, input: any, output: any, clear: any): void;
}

export  function createIndicesForQuads(size: number): Uint16Array;

export  class Quad {
    /**
     * 当前gl上下文
     */
    gl: WebGLRenderingContext;
    /**
     * 顶点数据
     */
    vertices: Float32Array;
    /**
     * uv数据
     */
    uvs: Float32Array;
    /**
     * 顶点和uv干一起
     */
    interleaved: Float32Array;
    /**
     * 索引数据
     */
    indices: Uint16Array;
    vertexBuffer: GLBuffer;
    indexBuffer: GLBuffer;
    vao: VertexArrayObject;
    /**
     * @param {WebGLRenderingContext} gl - The gl context for this quad to use.
     * @param {object} state - TODO: Description
     */
    constructor(gl: WebGLRenderingContext, state: any);
    /**
     * 用shader初始化vao
     */
    initVao(shader: GLShader): void;
    /**
     * Maps two Rectangle to the quad.
     * @param {Rectangle} targetTextureFrame - the first rectangle
     * @param {Rectangle} destinationFrame - the second rectangle
     * @return {Quad} Returns itself.
     */
    map(targetTextureFrame: Rectangle, destinationFrame: Rectangle): Quad;
    /**
     * 上传绑定数据
     * @return {Quad} Returns itself.
     */
    upload(): Quad;
    destroy(): void;
}

export  function calculateScreenSpaceMatrix(outputMatrix: any, filterArea: any, textureSize: any): any;

export  function calculateNormalizedScreenSpaceMatrix(outputMatrix: any, filterArea: any, textureSize: any): any;

export  function calculateSpriteMatrix(outputMatrix: any, filterArea: any, textureSize: any, sprite: Sprite): Matrix;

export  class FilterManager {
    gl: WebGLRenderingContext;
    renderer: WebglRenderer;
    quad: Quad;
    shaderCache: any;
    pool: any;
    filterData: any;
    managedFilters: Filter[];
    _screenWidth: number;
    _screenHeight: number;
    /**
     * @param {WebGLRenderer} renderer - The renderer this manager works for.
     */
    constructor(renderer: WebglRenderer);
    /**
     * Adds a new filter to the manager.
     *
     * @param {DisplayObject} target - The target of the filter to render.
     * @param {Filter[]} filters - The filters to apply.
     */
    pushFilter(target: DisplayObject, filters: Filter[]): void;
    /**
     * Pops off the filter and applies it.
     *
     */
    popFilter(): void;
    /**
     * Draws a filter.
     *
     * @param {Filter} filter - The filter to draw.
     * @param {RenderTarget} input - The input render target.
     * @param {RenderTarget} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it
     */
    applyFilter(filter: Filter, input: RenderTarget, output: RenderTarget, clear?: boolean): void;
    /**
     * Uploads the uniforms of the filter.
     *
     * @param {GLShader} shader - The underlying gl shader.
     * @param {Filter} filter - The filter we are synchronizing.
     */
    syncUniforms(shader: GLShader, filter: Filter): void;
    /**
     * Gets a render target from the pool, or creates a new one.
     *
     * @param {boolean} clear - Should we clear the render texture when we get it?
     * @param {number} resolution - The resolution of the target.
     * @return {RenderTarget} The new render target
     */
    getRenderTarget(clear?: boolean, resolution?: number): RenderTarget;
    /**
     * Returns a render target to the pool.
     *
     * @param {RenderTarget} renderTarget - The render target to return.
     */
    returnRenderTarget(renderTarget: RenderTarget): void;
    /**
     * Calculates the mapped matrix.
     *
     * TODO playing around here.. this is temporary - (will end up in the shader)
     * this returns a matrix that will normalise map filter cords in the filter to screen space
     *
     * @param {Matrix} outputMatrix - the matrix to output to.
     * @return {Matrix} The mapped matrix.
     */
    calculateScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
    /**
     * Multiply vTextureCoord to this matrix to achieve (0,0,1,1) for filterArea
     *
     * @param {Matrix} outputMatrix - The matrix to output to.
     * @return {Matrix} The mapped matrix.
     */
    calculateNormalizedScreenSpaceMatrix(outputMatrix: any): any;
    /**
     * This will map the filter coord so that a texture can be used based on the transform of a sprite
     *
     * @param {Matrix} outputMatrix - The matrix to output to.
     * @param {Sprite} sprite - The sprite to map to.
     * @return {Matrix} The mapped matrix.
     */
    calculateSpriteMatrix(outputMatrix: any, sprite: any): Matrix;
    /**
     * Destroys this Filter Manager.
     *
     * @param {boolean} [contextLost=false] context was lost, do not free shaders
     *
     */
    destroy(contextLost?: boolean): void;
    /**
     * Gets a Power-of-Two render texture.
     *
     * TODO move to a seperate class could be on renderer?
     * also - could cause issue with multiple contexts?
     *
     * @private
     * @param {WebGLRenderingContext} gl - The webgl rendering context
     * @param {number} minWidth - The minimum width of the render target.
     * @param {number} minHeight - The minimum height of the render target.
     * @param {number} resolution - The resolution of the render target.
     * @return {RenderTarget} The new render target.
     */
    getPotRenderTarget(gl: any, minWidth: any, minHeight: any, resolution: any): RenderTarget;
    /**
     * Empties the texture pool.
     *
     */
    emptyPool(): void;
    /**
     * Frees a render target back into the pool.
     *
     * @param {RenderTarget} renderTarget - The renderTarget to free
     */
    freePotRenderTarget(renderTarget: any): void;
    /**
     * Called before the renderer starts rendering.
     *
     */
    onPreRender(): void;
}

export  class BlurYFilter extends Filter {
    strength: number;
    /**
     * Sets the strength of both the blur.
     *
     * @member {number}
     * @default 2
     */
    get blur(): number;
    set blur(value: number);
    private _quality;
    private passes;
    /**
     * Sets the quality of the blur by modifying the number of passes. More passes means higher
     * quaility bluring but the lower the performance.
     *
     * @member {number}
     * @default 4
     */
    get quality(): number;
    set quality(value: number);
    private firstRun;
    /**
     * @param {number} strength - The strength of the blur filter.
     * @param {number} quality - The quality of the blur filter.
     * @param {number} resolution - The resolution of the blur filter.
     * @param {number} [kernelSize=5] - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
     */
    constructor(strength?: any, quality?: any, resolution?: any, kernelSize?: any);
    /**
     * Applies the filter.
     *
     * @param {FilterManager} filterManager - The manager.
     * @param {RenderTarget} input - The input target.
     * @param {RenderTarget} output - The output target.
     * @param {boolean} clear - Should the output be cleared before rendering?
     */
    apply(filterManager: FilterManager, input: any, output: any, clear: any): void;
}

export  class BlurFilter extends Filter {
    private blurXFilter;
    private blurYFilter;
    /**
     * @param {number} strength - The strength of the blur filter.
     * @param {number} quality - The quality of the blur filter.
     * @param {number} resolution - The resolution of the blur filter.
     * @param {number} [kernelSize=5] - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
     */
    constructor(strength?: any, quality?: any, resolution?: any, kernelSize?: any);
    /**
     * Applies the filter.
     *
     * @param {FilterManager} filterManager - The manager.
     * @param {RenderTarget} input - The input target.
     * @param {RenderTarget} output - The output target.
     */
    apply(filterManager: any, input: any, output: any): void;
    /**
     * Sets the strength of both the blurX and blurY properties simultaneously
     *
     * @member {number}
     * @default 2
     */
    get blur(): number;
    set blur(value: number);
    /**
     * Sets the number of passes for blur. More passes means higher quaility bluring.
     *
     * @member {number}
     * @default 1
     */
    get quality(): number;
    set quality(value: number);
    /**
     * Sets the strength of the blurX property
     *
     * @member {number}
     * @default 2
     */
    get blurX(): number;
    set blurX(value: number);
    /**
     * Sets the strength of the blurY property
     *
     * @member {number}
     * @default 2
     */
    get blurY(): number;
    set blurY(value: number);
    /**
     * Sets the blendmode of the filter
     *
     * @member {number}
     * @default BLEND_MODES.NORMAL
     */
    get blendMode(): import("../../const").BLEND_MODES;
    set blendMode(value: import("../../const").BLEND_MODES);
}

export  class ColorMatrixFilter extends Filter {
    grayscale: (scale: any, multiply: any) => void;
    /**
     *
     */
    constructor(colorMatrix?: number[]);
    /**
     * Transforms current matrix and set the new one
     *
     * @param {number[]} matrix - 5x4 matrix
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    _loadMatrix(matrix: any, multiply?: boolean): void;
    /**
     * Multiplies two mat5's
     *
     * @private
     * @param {number[]} out - 5x4 matrix the receiving matrix
     * @param {number[]} a - 5x4 matrix the first operand
     * @param {number[]} b - 5x4 matrix the second operand
     * @returns {number[]} 5x4 matrix
     */
    _multiply(out: any, a: any, b: any): any;
    /**
     * Create a Float32 Array and normalize the offset component to 0-1
     *
     * @private
     * @param {number[]} matrix - 5x4 matrix
     * @return {number[]} 5x4 matrix with all values between 0-1
     */
    _colorMatrix(matrix: any): Float32Array;
    /**
     * Adjusts brightness
     *
     * @param {number} b - value of the brigthness (0-1, where 0 is black)
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    brightness(b: any, multiply: any): void;
    /**
     * Set the matrices in grey scales
     *
     * @param {number} scale - value of the grey (0-1, where 0 is black)
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    greyscale(scale: any, multiply: any): void;
    /**
     * Set the black and white matrice.
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    blackAndWhite(multiply: any): void;
    /**
     * Set the hue property of the color
     *
     * @param {number} rotation - in degrees
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    hue(rotation: any, multiply: any): void;
    /**
     * Set the contrast matrix, increase the separation between dark and bright
     * Increase contrast : shadows darker and highlights brighter
     * Decrease contrast : bring the shadows up and the highlights down
     *
     * @param {number} amount - value of the contrast (0-1)
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    contrast(amount: any, multiply?: any): void;
    /**
     * Set the saturation matrix, increase the separation between colors
     * Increase saturation : increase contrast, brightness, and sharpness
     *
     * @param {number} amount - The saturation amount (0-1)
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    saturate(amount?: number, multiply?: boolean): void;
    /**
     * Desaturate image (remove color)
     *
     * Call the saturate function
     *
     */
    desaturate(): void;
    /**
     * Negative image (inverse of classic rgb matrix)
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    negative(multiply: any): void;
    /**
     * Sepia image
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    sepia(multiply: any): void;
    /**
     * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    technicolor(multiply: any): void;
    /**
     * Polaroid filter
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    polaroid(multiply: any): void;
    /**
     * Filter who transforms : Red -> Blue and Blue -> Red
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    toBGR(multiply: any): void;
    /**
     * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    kodachrome(multiply: any): void;
    /**
     * Brown delicious browni filter (thanks Dominic Szablewski)
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    browni(multiply: any): void;
    /**
     * Vintage filter (thanks Dominic Szablewski)
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    vintage(multiply: any): void;
    /**
     * We don't know exactly what it does, kind of gradient map, but funny to play with!
     *
     * @param {number} desaturation - Tone values.
     * @param {number} toned - Tone values.
     * @param {string} lightColor - Tone values, example: `0xFFE580`
     * @param {string} darkColor - Tone values, example: `0xFFE580`
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    colorTone(desaturation: any, toned: any, lightColor: any, darkColor: any, multiply: any): void;
    /**
     * Night effect
     *
     * @param {number} intensity - The intensity of the night effect.
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    night(intensity: any, multiply: any): void;
    /**
     * Predator effect
     *
     * Erase the current matrix by setting a new indepent one
     *
     * @param {number} amount - how much the predator feels his future victim
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    predator(amount: any, multiply: any): void;
    /**
     * LSD effect
     *
     * Multiply the current matrix
     *
     * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */
    lsd(multiply: any): void;
    /**
     * Erase the current matrix by setting the default one
     *
     */
    reset(): void;
    /**
     * The matrix of the color matrix filter
     *
     * @member {number[]}
     * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
     */
    get matrix(): any;
    set matrix(value: any);
    /**
     * The opacity value to use when mixing the original and resultant colors.
     *
     * When the value is 0, the original color is used without modification.
     * When the value is 1, the result color is used.
     * When in the range (0, 1) the color is interpolated between the original and result by this amount.
     *
     * @member {number}
     * @default 1
     */
    get alpha(): any;
    set alpha(value: any);
}

export  class AlphaFilter extends Filter {
    /**
     * @param {number} [alpha=1] Amount of alpha from 0 to 1, where 0 is transparent
     */
    constructor(alpha?: number);
    /**
     * Coefficient for alpha multiplication
     *
     * @member {number}
     * @default 1
     */
    get alpha(): number;
    set alpha(value: number);
}

export  class TextureMatrix {
    _texture: Texture;
    mapCoord: Matrix;
    uClampFrame: Float32Array;
    uClampOffset: Float32Array;
    _lastTextureID: number;
    /**
     * Changes frame clamping
     * Works with TilingSprite and Mesh
     * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
     *
     * @default 0
     * @member {number}
     */
    clampOffset: number;
    /**
     * Changes frame clamping
     * Works with TilingSprite and Mesh
     * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
     *
     * @default 0.5
     * @member {number}
     */
    clampMargin: number;
    /**
     *
     * @param {Texture} texture observed texture
     * @param {number} [clampMargin] Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
     * @constructor
     */
    constructor(texture: Texture, clampMargin?: number);
    /**
     * texture property
     * @member {Texture}
     */
    get texture(): Texture;
    set texture(value: Texture);
    /**
     * Multiplies uvs array to transform
     * @param {Float32Array} uvs mesh uvs
     * @param {Float32Array} [out=uvs] output
     * @returns {Float32Array} output
     */
    multiplyUvs(uvs: any, out?: any): any;
    /**
     * updates matrices if texture was changed
     * @param {boolean} forceUpdate if true, matrices will be updated any case
     * @returns {boolean} whether or not it was updated
     */
    update(forceUpdate?: boolean): boolean;
}

export  class SpriteMaskFilter extends Filter {
    maskSprite: Sprite;
    maskMatrix: Matrix;
    /**
     * @param {Sprite} sprite - the target sprite
     */
    constructor(sprite: Sprite);
    /**
     * Applies the filter
     *
     * @param {FilterManager} filterManager - The renderer to retrieve the filter from
     * @param {RenderTarget} input - The input render target.
     * @param {RenderTarget} output - The target to output to.
     */
    apply(filterManager: FilterManager, input: any, output: any): void;
}

export  class BlurFilterNew extends Filter {
    private _blur;
    get blur(): number;
    /**
     * 系数0到1
     */
    set blur(value: number);
    /**
     *
     * @param blur 模糊系数 0到1
     */
    constructor(blur?: number);
}

export  class ExtractBrightnessFilter extends Filter {
    constructor(threshold?: number);
    /**
     * Defines how bright a color needs to be extracted.
     *
     * @member {number}
     * @default 0.5
     */
    get threshold(): any;
    set threshold(value: any);
}

export  class KawaseBlurFilter extends Filter {
    private _pixelSize;
    private _clamp;
    private _kernels;
    private _blur;
    private _quality;
    constructor(blur?: number, quality?: number, clamp?: boolean);
    /**
     * Overrides apply
     * @private
     */
    apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget, clear: any): void;
    /**
     * Auto generate kernels by blur & quality
     * @private
     */
    _generateKernels(): void;
    /**
     * The kernel size of the blur filter, for advanced usage.
     *
     * @member {number[]}
     * @default [0]
     */
    get kernels(): any;
    set kernels(value: any);
    /**
     * Get the if the filter is clampped.
     *
     * @readonly
     * @member {boolean}
     * @default false
     */
    get clamp(): boolean;
    /**
     * Sets the pixel size of the filter. Large size is blurrier. For advanced usage.
     *
     * @member {Point|number|number[]}
     * @default [1, 1]
     */
    set pixelSize(value: any);
    get pixelSize(): any;
    /**
     * The quality of the filter, integer greater than `1`.
     *
     * @member {number}
     * @default 3
     */
    get quality(): number;
    set quality(value: number);
    /**
     * The amount of blur, value greater than `0`.
     *
     * @member {number}
     * @default 4
     */
    get blur(): number;
    set blur(value: number);
}

export  class AdvancedBloomFilter extends Filter {
    private _extractFilter;
    private _blurFilter;
    bloomScale: number;
    brightness: number;
    private _resolution;
    constructor(options?: OptionsInt);
    /**
     * Override existing apply method in Filter
     * @private
     */
    apply(filterManager: FilterManager, input: any, output: any, clear: any): void;
    /**
     * The resolution of the filter.
     *
     * @member {number}
     */
    get resolution(): number;
    set resolution(value: number);
    /**
     * Defines how bright a color needs to be to affect bloom.
     *
     * @member {number}
     * @default 0.5
     */
    get threshold(): any;
    set threshold(value: any);
    /**
     * Sets the kernels of the Blur Filter
     *
     * @member {number}
     * @default 4
     */
    get kernels(): any;
    set kernels(value: any);
    /**
     * Sets the strength of the Blur properties simultaneously
     *
     * @member {number}
     * @default 2
     */
    get blur(): number;
    set blur(value: number);
    /**
     * Sets the quality of the Blur Filter
     *
     * @member {number}
     * @default 4
     */
    get quality(): number;
    set quality(value: number);
    /**
     * Sets the pixelSize of the Kawase Blur filter
     *
     * @member {number|number[]|Point}
     * @default 1
     */
    get pixelSize(): any;
    set pixelSize(value: any);
}

export {};

export  class MaskManager {
    renderer: WebglRenderer;
    scissor: boolean;
    scissorData: any;
    scissorRenderTarget: RenderTarget;
    enableScissor: boolean;
    alphaMaskPool: any[];
    alphaMaskIndex: number;
    /**
     * - The renderer this manager works for.
     */
    constructor(renderer: WebglRenderer);
    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {DisplayObject} target - Display Object to push the mask to
     * @param {Sprite|Graphics} maskData - The masking data.
     */
    pushMask(target: any, maskData: any): void;
    /**
     * Removes the last mask from the mask stack and doesn't return it.
     *
     * @param {DisplayObject} target - Display Object to pop the mask from
     * @param {Sprite|Graphics} maskData - The masking data.
     */
    popMask(target: any, maskData: any): void;
    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {RenderTarget} target - Display Object to push the sprite mask to
     * @param {Sprite} maskData - Sprite to be used as the mask
     */
    private pushSpriteMask;
    /**
     * Removes the last filter from the filter stack and doesn't return it.
     *
     */
    private popSpriteMask;
    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {Graphics} maskData - The masking data.
     */
    private pushStencilMask;
    /**
     * Removes the last filter from the filter stack and doesn't return it.
     *
     */
    private popStencilMask;
    /**
     * 有bug暂不用
     * @param {DisplayObject} target - Display Object to push the mask to
     * @param {Graphics} maskData - The masking data.
     */
    pushScissorMask(target: any, maskData: Graphics): void;
    /**
     *有bug暂不用
     *
     */
    private popScissorMask;
    destroy(): void;
}

export  class StencilManager {
    renderer: WebglRenderer;
    stencilMaskStack: Graphics[];
    /**
     * @param {WebGLRenderer} renderer - The renderer this manager works for.
     */
    constructor(renderer: WebglRenderer);
    /**
     * Changes the mask stack that is used by this manager.
     *
     * @param {Graphics[]} stencilMaskStack - The mask stack
     */
    setMaskStack(stencilMaskStack: Graphics[]): void;
    /**
     * Applies the Mask and adds it to the current stencil stack. @alvin
     *
     * @param {Graphics} graphics - The mask
     */
    pushStencil(graphics: Graphics): void;
    /**
     * Removes the last mask from the stencil stack. @alvin
     */
    popStencil(): void;
    /**
     * Setup renderer to use the current stencil data.
     */
    private _useCurrent;
    /**
     * Fill 1s equal to the number of acitve stencil masks.
     *
     * @return {number} The bitwise mask.
     */
    _getBitwiseMask(): number;
    /**
     * Destroys the mask stack.
     *
     */
    destroy(): void;
}

export  class BaseRenderTexture extends BaseTexture {
    /**
     * A map of renderer IDs to webgl renderTargets
     * 画在他的帧缓存中
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _glRenderTargets: {};
    /**
     * A reference to the canvas render target (we only need one as this can be shared across renderers)
     * 画在他的上下文中canvas中
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _canvasRenderTarget: any;
    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     */
    valid: boolean;
    /**
     * @param {number} [width=100] - The width of the base render texture
     * @param {number} [height=100] - The height of the base render texture
     * @param {number} [scaleMode=SCALE_MODES.LINEAR] - See {@link SCALE_MODES} for possible values
     */
    constructor(width?: number, height?: number, scaleMode?: number);
    /**
     * Resizes the BaseRenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     */
    resize(width: number, height: number): void;
    /**
     * Destroys this texture
     *
     */
    destroy(): void;
}

export  class RenderTexture extends Texture {
    baseTexture: BaseRenderTexture;
    /**
     * @param {BaseRenderTexture} baseRenderTexture - The renderer used for this RenderTexture
     * @param {Rectangle} [frame] - The rectangle frame of the texture to show
     */
    constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);
    /**
     * Resizes the RenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     * @param {boolean} doNotResizeBaseTexture - Should the baseTexture.width and height values be resized as well?
     */
    resize(width: number, height: number, doNotResizeBaseTexture?: boolean): void;
    /**
     * A short hand way of creating a render texture.
     *
     * @param {number} [width=100] - The width of the render texture
     * @param {number} [height=100] - The height of the render texture
     * @param {number} [scaleMode=settings.SCALE_MODE] - See {@link SCALE_MODES} for possible values
     * @return {RenderTexture} The new render texture
     */
    static create(width: number, height: number, scaleMode?: number): RenderTexture;
}

export  class WebglRenderer extends SystemRenderer {
    /**
     * 所有插件列表，目前只有batch
     */
    plugins: {};
    /**
     * webgl上下文
     */
    gl: WebGLRenderingContext;
    /**
     * 渲染器位移标识
     */
    CONTEXT_UID: number;
    /**
     * 遮罩管理
     */
    maskManager: MaskManager;
    /**
     * 模板管理
     */
    stencilManager: StencilManager;
    /**
     * 滤镜管理器
     */
    filterManager: FilterManager;
    /**
     * 批处理管理
     */
    batchManager: BatchManager;
    /**
     * 纹理管理
     */
    textureManager: TextureManager;
    /**
     * 纹理回收器，对于长期未使用的纹理，从gpu移除
     */
    textureGC: TextureGarbageCollector;
    /**
     * 状态机，暂时不需要切换，以后有3d再说
     */
    state: WebGLState;
    /**
     * 是否渲染到主画布
     */
    renderingToScreen: boolean;
    /**
     * 当前着色器对象
     */
    _activeShader: GLShader;
    /**
     * 当前vao
     */
    _activeVao: VertexArrayObject;
    /**
     * 当前渲染对象，不是帧缓存时就是root
     */
    _activeRenderTarget: RenderTarget;
    /**
     * 主画布
     */
    rootRenderTarget: RenderTarget;
    /**
     * 直接传入的尺寸
     * @param gl
     * @param width
     * @param height
     */
    constructor(gl: WebGLRenderingContext, width: number, height: number);
    _initContext(): void;
    render(displayObject: DisplayObject, renderTexture?: RenderTexture, transform?: Matrix): void;
    /**
     * Erases the active render target and fills the drawing area with a colour
     *
     * @param {number[]} [clearColor] - The colour
     */
    clear(clearColor?: number[]): void;
    /**
     * Sets the transform of the active render target to the given matrix
     *
     * @param {Matrix} matrix - The transformation matrix
     */
    setTransform(matrix: Matrix): void;
    /**
     * Erases the render texture and fills the drawing area with a colour
     *
     * @param {RenderTexture} renderTexture - The render texture to clear
     * @param {number} [clearColor] - The colour
     * @return {WebGLRenderer} Returns itself.
     */
    clearRenderTexture(renderTexture: RenderTexture, clearColor: number[]): WebglRenderer;
    /**
     * Changes the current shader to the one given in parameter
     *
     * @param {Shader} shader - the new shader
     * @param {boolean} [autoProject=true] - Whether automatically set the projection matrix
     * @return {WebGLRenderer} Returns itself.
     */
    bindShader(shader: GLShader, autoProject?: boolean): WebglRenderer;
    /**
     * Creates a new VAO from this renderer's context and state.
     *
     * @return {VertexArrayObject} The new VAO.
     */
    createVao(): VertexArrayObject;
    /**
     * Changes the current Vao to the one given in parameter
     *
     * @param {VertexArrayObject} vao - the new Vao
     * @return {WebGLRenderer} Returns itself.
     */
    bindVao(vao: VertexArrayObject, force?: boolean): WebglRenderer;
    /**
     * Resets the WebGL state so you can render things however you fancy!
     *
     * @return {WebGLRenderer} Returns itself.
     */
    reset(): WebglRenderer;
    /**
     * Binds a render texture for rendering
     *
     * @param {RenderTexture} renderTexture - The render texture to render
     * @param {Matrix} transform - The transform to be applied to the render texture
     * @return {WebGLRenderer} Returns itself.
     */
    bindRenderTexture(renderTexture: RenderTexture, transform: Matrix): WebglRenderer;
    /**
     * 绑定当前渲染对象
     * @param {RenderTarget} renderTarget - the new render target
     * @return {WebglRenderer} Returns itself.
     */
    bindRenderTarget(renderTarget: RenderTarget): WebglRenderer;
    /**
     * Resizes the webGL view to the specified width and height.
     *
     * @param {number} blendMode - the desired blend mode
     */
    setBlendMode(blendMode: BLEND_MODES): void;
    /**
     * 传入真实的canvas尺寸
     * @param screenWidth
     * @param screenHeight
     */
    resize(screenWidth: number, screenHeight: number): void;
    /**
     * 渲染器销毁方法
     */
    destroy(): void;
    /**
     * webgl上下文恢复时
     * @private
     */
    handleContextRestored(): void;
    /**
     * webgl上下文丢失时
     * @private
     * @param {WebGLContextEvent} event - The context lost event.
     */
    handleContextLost(event: any): void;
    /**
     * 初始化插件
     * @protected
     * @param {object} staticMap - The dictionary of statically saved plugins.
     */
    initPlugins(staticMap: any): void;
    destroyPlugins(): void;
    static __plugins: any;
    /**
     * Adds a plugin to the renderer.
     *
     * @method
     * @param {string} pluginName - The name of the plugin.
     * @param {Function} ctor - The constructor function or class for the plugin.
     */
    static registerPlugin(pluginName: any, ctor: any): void;
}

export  class Sprite extends Container {
    /**
     * 混色模式
     * @default BLEND_MODES.NORMAL
     */
    _blendMode: BLEND_MODES;
    get blendMode(): BLEND_MODES;
    /**
     * 很多效果暂时无效，再查原因，先不能设置吧
     */
    set blendMode(value: BLEND_MODES);
    /**
     * 关于贴图的锚点，0到1，默认为texture自己的
     *
     */
    private _anchorTexture;
    /**
     * 色值调色
     */
    private _tint;
    /**
     * RGB形式色值，webgl用
     */
    _tintRGB: number;
    /**
     * 和_tint比较用，用于canvas调色缓存
     */
    _cachedTint: number;
    /**
     * 使用的贴图
     * @member {Texture}
     */
    _texture: Texture;
    /**
     * 初始化为texture的宽度
     */
    _width: number;
    /**
     * 初始化为texture的宽度
     */
    _height: number;
    /**
     * 标记更新transform
     */
    _transformID: number;
    /**
     * 标记更新过texture
     */
    _textureID: number;
    _transformTrimmedID: number;
    _textureTrimmedID: number;
    /**
     * 指定渲染用的渲染器插件
     */
    pluginName: string;
    /**
     * 顶点索引，下面几个均为webgl用到
     */
    _indices: Uint16Array;
    _uvs: Float32Array;
    /**
     * 顶点数据，长度8
     */
    _vertexData: Float32Array;
    /**
     * Trimmed的顶点数据，用于裁剪掉过透明像素的texture
     */
    _vertexTrimmedData: Float32Array;
    /**
     * @param {Texture} texture
     */
    constructor(texture?: Texture);
    /**
     * texture更新时触发
     *
     * @private
     */
    protected _onTextureUpdate(): void;
    /**
     * 当贴图锚点修改时
     *
     * @private
     */
    private _onAnchorUpdate;
    /**
     * 通过自身贴图修改自身盒子
     * 子类可修改，比如文本不需要padding的话，暂时还没做
     */
    protected updateLocalBoundsSelf(): void;
    /**
     * 01——23
     * |   |
     * 67——45
     * calculates worldTransform * vertices, store it in vertexData
     */
    calculateVertices(): void;
    /**
     * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
     * This is used to ensure that the true width and height of a trimmed texture is respected
     */
    calculateTrimmedVertices(): void;
    /**
    * 自身webgl绘制方法
    * @private
    * @param {WebglRenderer} renderer
    */
    _renderWebGL(renderer: WebglRenderer): void;
    /**
    * 自身canvas绘制方法
    * @private
    * @param {CanvasRenderer} renderer
    */
    _renderCanvas(renderer: CanvasRenderer): void;
    /**
     * 更新自己的bounds，计算全局
     * @private
     */
    _calculateBounds(): void;
    /**
     * 重写父类
     * @param {Rectangle} rect - The output rectangle.
     * @return {Rectangle} The bounds.
     */
    getLocalBounds(rect?: Rectangle): Rectangle;
    /**
     * 重写碰撞检测方法
     * @param globalPoint
     * @param isMouseEvent
     */
    hitTestPoint(globalPoint: Point, isMouseEvent?: boolean): any;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 重写Container父类
     * texture的宽度和缩放乘积
     * @member {number}
     */
    get width(): number;
    set width(value: number);
    /**
     * texture的高度和缩放乘积
     * @member {number}
     */
    get height(): number;
    set height(value: number);
    /**
     * 0，0标识左上角，0.5，0.5表示中间，1，1表示右下角
     * @member {ObservablePoint}
     */
    get anchorTexture(): any;
    set anchorTexture(value: any);
    /**
     * @member {Texture}
     */
    get texture(): Texture;
    set texture(value: Texture);
    get tint(): number;
    set tint(value: number);
    /**
     * 网络图片
     * @param url
     */
    static fromUrl(url: string): Sprite;
    /**
     * TextureCache缓存里取得frameId，通常图集里得名字
     * @static
     * @param {string} frameId - The frame Id of the texture in the cache
     * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId
     */
    static fromFrame(frameId: string): Sprite;
}

export  class CanvasSpriteRenderer {
    renderer: CanvasRenderer;
    /**
     * @param {CanvasRenderer} renderer -The renderer sprite this batch works for.
     */
    constructor(renderer: CanvasRenderer);
    /**
     * Renders the sprite object.
     * 渲染带texture的显示对象，Sprite,Graphic
     * @param {Sprite} sprite - the sprite to render when using this spritebatch
     */
    render(sprite: any): void;
    /**
     * destroy the sprite object.
     *
     */
    destroy(): void;
}

export  class CanvasRenderTarget {
    /**
     * The Canvas object that belongs to this CanvasRenderTarget.
     */
    canvas: HTMLCanvasElement;
    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     */
    context: CanvasRenderingContext2D;
    /**
     * @param {number} width - the width for the newly created canvas
     * @param {number} height - the height for the newly created canvas
     */
    constructor(width: number, height: number);
    /**
     * Clears the canvas that was created by the CanvasRenderTarget class.
     *
     * @private
     */
    clear(): void;
    /**
     * Resizes the canvas to the specified width and height.
     *
     * @param {number} width - the new width of the canvas
     * @param {number} height - the new height of the canvas
     */
    resize(width: number, height: number): void;
    /**
     * Destroys this canvas.
     *
     */
    destroy(): void;
    /**
     * The width of the canvas buffer in pixels.
     *
     * @member {number}
     */
    get width(): number;
    set width(val: number);
    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     */
    get height(): number;
    set height(val: number);
}

export  class Mesh extends Container {
    /**
     * 混色模式
     * @default BLEND_MODES.NORMAL
     */
    private _blendMode;
    get blendMode(): BLEND_MODES;
    /**
     * 很多效果暂时无效，再查原因，先不能设置吧
     */
    set blendMode(value: BLEND_MODES);
    /**
     * The texture of the Mesh
     *
     * @member {Texture}
     * @default Texture.EMPTY
     * @private
     */
    private _texture;
    /**
     * 原先自身的顶点数据,到时候封装几何全进
     */
    _vertices: Float32Array;
    /**
     * 是否要更新执行_refresh
     */
    protected _needRefresh: boolean;
    _indices: Uint16Array;
    _uvs: Float32Array;
    /**
     * 要传入批的顶点数据
     */
    _vertexData: Float32Array;
    /**
     * 传入批处理的永远是上面三个，上面三个的计算需要记录dirty
     * 但是每次都需要传Gpu,性能再说吧
     * Version of mesh verticies are dirty or not
     * 原来是dirty，
     * @member {number}
     */
    protected _vertexDirty: number;
    /**
     * 记录顶点原标记Id，确保与_vertexDirty保持一致
     * 默认-1，保证算一次
     */
    private _vertexId;
    /**
     * 记录LocalBoundsSelf的id，确保与_vertexDirty保持一致
     * 默认-1，保证算一次
     */
    private _localBoundsSelfId;
    /**
     * 需要与transform._worldID的保持一致
     * 用于标记计算顶点数据
     */
    private _transformID;
    /**
     * Triangles in canvas mode are automatically antialiased, use this value to force triangles
     * to overlap a bit with each other.
     *
     * @member {number}
     */
    canvasPadding: number;
    /**
     * 色值调色
     * The tint applied to the mesh. This is a [r,g,b] value. A value of [1,1,1] will remove any
     * tint effect.
     */
    private _tint;
    /**
     * RGB形式色值，webgl用
     */
    private _tintRGB;
    /**
     * transform that is applied to UV to get the texture coords
     * its updated independently from texture uvTransform
     * updates of uvs are tied to that thing
     *
     * @member {TextureMatrix}
     * @private
     */
    private _uvTransform;
    /**
     * @param {Texture} texture - The texture to use
     * @param {Float32Array} [vertices] - if you want to specify the vertices
     * @param {Float32Array} [uvs] - if you want to specify the uvs
     * @param {Uint16Array} [indices] - if you want to specify the indices
     */
    constructor(texture?: Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array);
    /**
     * Renders the object using the WebGL renderer
     *
     * @private
     * @param {WebGLRenderer} renderer - a reference to the WebGL renderer
     */
    _renderWebGL(renderer: WebglRenderer): void;
    /**
     * Renders the object using the Canvas renderer
     *
     * @private
     * @param {CanvasRenderer} renderer - The canvas renderer.
     */
    _renderCanvas(renderer: CanvasRenderer): void;
    /**
     * When the texture is updated, this event will fire to update the scale and frame
     *
     * @private
     */
    private _onTextureUpdate;
    /**
     * 重新计算uv，为了图集上的uv和自身uv
     */
    multiplyUvs(): void;
    /**
     * Refreshes uvs for generated meshes (rope, plane)
     * sometimes refreshes vertices too
     *
     * @param {boolean} [forceUpdate=false] if true, matrices will be updated any case
     */
    refresh(forceUpdate?: boolean): void;
    /**
     * 子类重写，用来计算 顶点，uv，索引
     * @protected
     */
    protected _refresh(): void;
    /**
     * 计算一边全局的顶点
     */
    calculateVertices(): void;
    /**
     * Returns the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
     *
     */
    _calculateBounds(): void;
    /**
     * 更新自身包围盒
     * 通过原先的顶点数据玩，不经过transform
     */
    updateLocalBoundsSelf(): void;
    /**
     *
     * @param point 全局点
     * @param isMouseEvent
     */
    hitTestPoint(point: Point, isMouseEvent?: boolean): DisplayObject;
    private hitTestPointAccuratly;
    /**
     * The texture that the mesh uses.
     *
     * @member {Texture}
     */
    get texture(): Texture;
    set texture(value: Texture);
    get tint(): number;
    set tint(value: number);
    /**
     * Destroys the Mesh object.
     *
     */
    destroy(): void;
}

export  function createTextureSheet(baseTexture: BaseTexture, altaData: any): {
    [key: string]: Texture;
}

export  class Plane extends Mesh {
    verticesX: number;
    verticesY: number;
    /**
     * @param {Texture} texture - The texture to use on the Plane.
     * @param {number} [verticesX=10] - The number of vertices in the x-axis
     * @param {number} [verticesY=10] - The number of vertices in the y-axis
     */
    constructor(texture: Texture, verticesX?: number, verticesY?: number);
    /**
     * Refreshes plane coordinates
     *
     */
    _refresh(): void;
}

export  function calculatePlaneIndices(verticesX: number, verticesY: number): Uint16Array;

export  class NineSlicePlane extends Mesh {
    /**
     * 原始宽度
     */
    private _origWidth;
    /**
     * 原始高度
     */
    private _origHeight;
    /**
     * 左边宽度
     */
    private _leftWidth;
    /**
     * 右边宽度
     */
    private _rightWidth;
    /**
     * 上边高度
     */
    private _topHeight;
    /**
     * 下边高度
     */
    private _bottomHeight;
    /**
     * @param {Texture} texture - The texture to use on the NineSlicePlane.
     * @param {int} [leftWidth=10] size of the left vertical bar (A)
     * @param {int} [topHeight=10] size of the top horizontal bar (C)
     * @param {int} [rightWidth=10] size of the right vertical bar (B)
     * @param {int} [bottomHeight=10] size of the bottom horizontal bar (D)
     */
    constructor(texture: Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);
    /**
     * Updates the horizontal vertices.
     *
     */
    private updateHorizontalVertices;
    /**
     * Updates the vertical vertices.
     *
     */
    private updateVerticalVertices;
    /**
     * Renders the object using the Canvas renderer
     * 考虑是否用缓存，不然每次相当于9次绘制，到时应该是集成到一个插件里的
     * @private
     * @param {CanvasRenderer} renderer - The canvas renderer to render with.
     */
    _renderCanvas(renderer: CanvasRenderer): void;
    /**
     * Renders one segment of the plane.
     * to mimic the exact drawing behavior of stretching the image like WebGL does, we need to make sure
     * that the source area is at least 1 pixel in size, otherwise nothing gets drawn when a slice size of 0 is used.
     *
     * @private
     * @param {CanvasRenderingContext2D} context - The context to draw with.
     * @param {CanvasImageSource} textureSource - The source to draw.
     * @param {number} w - width of the texture
     * @param {number} h - height of the texture
     * @param {number} x1 - x index 1
     * @param {number} y1 - y index 1
     * @param {number} x2 - x index 2
     * @param {number} y2 - y index 2
     */
    private drawSegment;
    /**
     * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
     *
     * @member {number}
     */
    get width(): number;
    /**
     * 不再修改缩放，修改uv和顶点
     */
    set width(value: number);
    /**
     * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
     *
     * @member {number}
     */
    get height(): number;
    set height(value: number);
    /**
     * The width of the left column
     *
     * @member {number}
     */
    get leftWidth(): number;
    set leftWidth(value: number);
    /**
     * The width of the right column
     *
     * @member {number}
     */
    get rightWidth(): number;
    set rightWidth(value: number);
    /**
     * The height of the top row
     *
     * @member {number}
     */
    get topHeight(): number;
    set topHeight(value: number);
    /**
     * The height of the bottom row
     *
     * @member {number}
     */
    get bottomHeight(): number;
    set bottomHeight(value: number);
    /**
     * Refreshes NineSlicePlane coords. All of them.
     */
    _refresh(): void;
}

export  class Rope extends Mesh {
    /**
     * 一组点
     */
    points: Point[];
    /**
     * 是否自动更新顶点，为true,自动更新顶点，否则在points里顶点修改后，自行refreshVertices
     */
    autoUpdateVertices: boolean;
    /**
     * 以横向的为基准，纹理高度
     */
    private textureHeight;
    /**
     * @param {Texture} texture
     * @param {Point[]} points
     */
    constructor(texture: Texture, points: Point[]);
    /**
     * 计算索引和uv，和顶点计算的要分开
     */
    _refresh(): void;
    /**
     * 根据points刷新顶点
     */
    refreshVertices(): void;
    update(): void;
}

export  class CanvasMeshRenderer {
    renderer: CanvasRenderer;
    constructor(renderer: CanvasRenderer);
    render(mesh: Mesh): void;
    private _renderTriangles;
    private _renderDrawTriangle;
    destroy(): void;
}

export  class CanvasRenderer extends SystemRenderer {
    /**
     * 主屏幕渲染上下文
     */
    rootContext: CanvasRenderingContext2D;
    /**
     * 当前使用的上下文
     */
    context: CanvasRenderingContext2D;
    /**
     * 遮罩管理类
     */
    maskManager: CanvasMaskManager;
    /**
     * 插件，暂时只有图形和图片的
     */
    plugins: any;
    /**
     * 当前使用的混色模式
     */
    _activeBlendMode: BLEND_MODES;
    /**
     * 是否影响外部混色
     */
    _outerBlend: boolean;
    /**
     * 所有对应值
     */
    private blendModes;
    constructor(context: CanvasRenderingContext2D, width: number, height: number);
    /**
     * 渲染方法
     * @param {DisplayObject} displayObject - 渲染对象
     * @param {RenderTexture} [renderTexture] -离屏渲染纹理
     * @param {Matrix} [transform] - 矩阵偏移
     */
    render(displayObject: DisplayObject, renderTexture?: any, transform?: Matrix): void;
    /**
     * 设置混色模式
     * @param {number} blendMode
     * @param {boolean} [readyForOuterBlend=false] 部分混色会改变渲染边缘,所以是否要改变得确定传值,默认false,这些混色方式当作normal处理
     */
    setBlendMode(blendMode: BLEND_MODES, readyForOuterBlend?: boolean): void;
    /**
     * 销毁
     */
    destroy(): void;
    destroyPlugins(): void;
}

export  function canUseNewCanvasBlendModes(): boolean;

export  function getTintedTexture(texture: Texture, color: number): HTMLCanvasElement;

export  function mapWebGLBlendModes(gl: WebGLRenderingContext, array?: any[]): any[];

export  function mapCanvasBlendModes(array?: any[]): any[];

export  const premultiplyBlendMode: any[];

export  function uid(): number;

export  function getBackupCanvasCtx(): CanvasRenderingContext2D;

export  function getGradientColor(points: number[], colors: [number, string, number][]): any;

export  function getCanvasBitmapStyle(image: any): any;

export  function hex2rgb(hex: number, out?: number[] | Float32Array): number[] | Float32Array;

export  function hex2string(hex: any): string;

export  function string2hex(string: string): number;

export  function rgb2hex(rgb: number[]): number;

export  function getRGBA(color: string, alpha: number): string;

export  function decomposeDataUri(dataUri: any): {
    mediaType: any;
    subType: any;
    charset: any;
    encoding: any;
    data: any;
}

export  function getUrlFileExtension(url: string): string;

export  function sign(n: number): number;

export  function premultiplyTint(tint: number, alpha: number): number;

export  const TextureCache: any;

export  const BaseTextureCache: any;

export  const TextureSheetCache: any;

export  function destroyTextureCache(): void;

export  function clearTextureCache(): void;

export  const GlobalPro: {
    /**
     * 舞台渲染类型，
     */
    stageRenderType: typeof RENDERER_TYPE;
    /**
     * 实际渲染分辨率
     */
    dpi: number;
    /**
     * 图集间隙
     */
    padding: number;
}

export  function isWebGLSupported(): boolean;

export  function removeItems(arr: Array<any>, startIdx: number, removeCount: number): void;

export  function clamp(value: number, min: number, max: number): number;

export  function ArrayBufferToBase64(buff: ArrayBuffer): string;

export  function decodeText(array: Uint8Array): string;

export  class Loader extends EventDispatcher {
    /**
     * 记录原始数据，json和image，贴图在建立时会被缓存
     * 需要缓存的都用在回调里自行缓存，比如弄个RES
     */
    private caches;
    /**
     *
     */
    constructor();
    /**
     * 加载图集
     * @param callback
     * @param url 图集一般是png格式,传的是json,在callback自行拆分
     */
    loadSheet(callback: (success: boolean, sheet?: {
        json: any;
        img: HTMLImageElement;
    }) => void, url: string): void;
    /**
     * 加载json文件
     * @param callback
     * @param url
     */
    loadJson(callback: (s: boolean, res: any) => void, url: string): void;
    /**
     * 加载ArrayBuffer
     * @param callback
     * @param url
     */
    loadAB(callback: (s: boolean, res: ArrayBuffer) => void, url: string): void;
    /**
     * web环境原生加载方式
     * @param callback
     * @param url
     * @param type
     */
    loadRawWeb(callback: (s: boolean, res: any) => void, url: string, type?: 'text' | 'json' | 'arraybuffer'): void;
    /**
     * 加载图片
     * @param callback
     * @param url
     */
    loadImage(callback: (s: boolean, image?: HTMLImageElement) => void, url: string): void;
    /**
     * 加载小程序的音频，暂时不用，完全废弃
     * @param callback
     * @param url
     */
    loadAudio(callback: (s: boolean, audio?: any) => void, url: any): void;
    /**
     * 淘宝加载方式
     * @param callback
     * @param url 云存储链接cloud或者阿里系白名单域名
     */
    tbLoad(callback: (s: boolean, res?: any) => void, url: string, type?: "utf8" | "ArrayBuffer"): void;
    /**
     * 淘宝小程序，获取云存储临时cdn地址
     * @param callback
     * @param url
     */
    private getTbTempUrl;
    /**
     *
     * @param callback
     * @param url
     * @param type 指定的字符编码，不传表示以 ArrayBuffer 格式读取文件的二进制内容
     */
    private downloadReadFile;
    private cache;
}

export  const GlobalLoader: Loader;

export  class BaseTexture extends EventDispatcher {
    /**
     * 贴图回收时用到，
     * 标记是否被使用过
     */
    _touchedId: number;
    /**
     * 批处理时用到的标志位
     * 被使用着的id
     */
    _enabledId: number;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * SCALE_MODES，一般是线性
     * 用于glTexture
     */
    scaleMode: SCALE_MODES;
    /**
     * 加载完成会设置为true
     * 加载失败或没有贴图数据则为false，
     * 通常用于标记基础纹理是否可用
     */
    hasLoaded: boolean;
    /**
     * 正在加载
     */
    private _isLoading;
    /**
     * image类型 eg. `png`
     * 暂时不考虑svg
     * @readonly
     */
    imageType: string;
    /**
     * rgb预乘alpha，webgl用到，png图片设置必为true，否则色值会出问题
     * @default true
     */
    premultipliedAlpha: boolean;
    /**
     * 图片路径
     * @member {string}
     */
    imageUrl: string;
    /**
     * 是否尺寸为2的次方，尽可能图集尺寸都为2的次方，gpu处理方便，并且能做mipmap缓存，性能更好
     */
    isPowerOfTwo: boolean;
    /**
     * 尺寸是2的次方下才能设置true，用于生成mipmap缓存
     * @default true
     */
    mipmap: boolean;
    /**
     * 非2的次方时要设置CLAMP
     * WebGL Texture wrap mode
     * @default WRAP_MODES.CLAMP
     */
    wrapMode: WRAP_MODES;
    /**
     * A map of renderer IDs to webgl textures
     * 不同渲染器对应的记录，暂时应该只需要一个
     * @member {object<number, WebGLTexture>}
     */
    _glTextures: {};
    /**
     * The ids under which this BaseTexture has been added to the base texture cache. This is
     * automatically set as long as BaseTexture.addToCache is used, but may not be set if a
     * BaseTexture is added directly to the BaseTextureCache array.
     * @member {string[]}
     */
    textureCacheIds: string[];
    /**
     *
     * 小程序里用得是imageData，文本多数用这个，改成canvas;
   * {
   * data:Uint8Array,
   * width:number,
   * height:number,
   * type:string,
   * path:string
   * }
   * 或者是canvas.createImage()对象，用source.data区分
   * 加一个离屏的canvas
     */
    source: any;
    /**
     * @param {} [source] - 源数据
     * @param {number} - possible values
     */
    constructor(source?: any, scaleMode?: SCALE_MODES);
    /**
     * 会触发更新事件
     * @fires BaseTexture#update
     */
    update(): void;
    /**
     *
     */
    _sourceChange(source: any): void;
    /**
     * 销毁 base texture
     * 基本不会销毁纹理
     */
    destroy(): void;
    /**
     * 用于释放gpu缓存，并不销毁纹理，需要时可再上传到GPU
     * @fires BaseTexture#dispose
     */
    dispose(): void;
    /**
     * 根据路径
     * @param {string} url  路径
     */
    static fromUrl(url: string): any;
    /**
     * 随便啥形式的，比如data，
     * @param data
     */
    static fromData(data: any): BaseTexture;
    /**
     * 从离屏canvas创建的
     */
    static fromCanvas(canvas: HTMLCanvasElement, origin?: string): any;
    /**
     * 根据图片
     * @param image
     */
    static fromImage(image: HTMLImageElement): any;
    static from(anything: string | HTMLCanvasElement | HTMLImageElement): any;
    /**
     * 加入缓存
     * @static
     * @param {BaseTexture} baseTexture
     * @param {string} id
     */
    static addToCache(baseTexture: BaseTexture, id: string): void;
    /**
     * 移除缓存
     * @static
     * @param {string|BaseTexture} baseTexture id或者BaseTexture
     * @return {BaseTexture|null} 移除的BaseTexture或null
     */
    static removeFromCache(baseTexture: string | BaseTexture): BaseTexture | null;
}

export  class TextureUvs {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    uvsUint32: Uint32Array;
    uvsFloat32: Float32Array;
    /**
     * 用于记录图片的uv
     * 00.....10
     * .      .
     * .      .
     * 01.....11
     */
    constructor();
    /**
     * Sets the texture Uvs based on the given frame information.
     *
     * @private
     * @param {Rectangle} frame - The frame of the texture
     * @param {Rectangle} baseFrame - The base frame of the texture
     * @param {number} rotate - Rotation of frame, see {@link GroupD8}
     */
    set(frame: Rectangle, baseFrame: Rectangle | BaseTexture, rotate: number): void;
}

export  class Texture extends EventDispatcher {
    /**
     * 标记texture没有frame
     * 表示不是从图集来的固定frame。需要根据BaseTexture的更新而改变frame
     */
    private noFrame;
    /**
     * BaseTexture，必有
     */
    baseTexture: BaseTexture;
    /**
     * 实际绘制矩形框，对于有trimmed的纹理很重要
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     */
    _frame: Rectangle;
    /**
     * 如果矩形边缘有透明像素被裁减后的缩小的区域
     * This is the trimmed area of original texture, before it was put in atlas
     * Please call `updateUvs()` after you change coordinates of `trim` manually.
     */
    trim: Rectangle;
    /**
     * 贴图是否可用，true为可用
     */
    valid: boolean;
    /**
     * 对应贴图uv
     * The WebGL UV data cache.
     */
    _uvs: TextureUvs;
    /**
     * 原始尺寸，放入图集前
     * This is the area of original texture, before it was put in atlas
     */
    orig: Rectangle;
    /**
     * 贴图旋转及镜像
     */
    _rotate: number;
    /**
     * 贴图的锚点，默认0，0，左上角，范围0到1
     *
     * @default {0,0}
     */
    defaultAnchor: Point;
    /**
     * 更新的id标志
     */
    _updateID: number;
    /**
     * 一般不用，需要时再说
     * Contains data for uvs. May contain clamp settings and some matrices.
     * Its a bit heavy, so by default that object is not created.
     * @member {TextureMatrix}
     * @default null
     */
    transform: TextureMatrix;
    /**
     * The ids under which this Texture has been added to the texture cache. This is
     * automatically set as long as Texture.addToCache is used, but may not be set if a
     * Texture is added directly to the TextureCache array.
     *
     * @member {string[]}
     */
    textureCacheIds: string[];
    /**
     * 空纹理
     */
    static EMPTY: Texture;
    /**
     * 白贴图
     */
    static WHITE: Texture;
    /**
     * @param {BaseTexture} baseTexture - The base texture source to create the texture from
     * @param {Rectangle} [frame] - The rectangle frame of the texture to show
     * @param {Rectangle} [orig] - The area of original texture
     * @param {Rectangle} [trim] - Trimmed rectangle of original texture
     * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link GroupD8}
     * @param {Point} [anchor] - Default anchor point used for sprite placement / rotation
     * 暂时不需要rotate
     */
    constructor(baseTexture: BaseTexture | Texture, frame?: Rectangle, orig?: Rectangle, trim?: Rectangle, rotate?: number, anchor?: Point);
    /**
     * 更新方法，直接调用base的，source尺寸有改变，或内容有改变，基本用于Shape和TextField
     * 在base更新时会触发自己的
     */
    update(): void;
    /**
     *
     * @private
     * @param {BaseTexture} baseTexture - The base texture.
     */
    private onBaseTextureLoaded;
    /**
     *
     * @private
     * @param {BaseTexture} baseTexture - The base texture.
     */
    private onBaseTextureUpdated;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 克隆
     * @return {Texture} The new texture
     */
    clone(): Texture;
    /**
     *
     * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
     */
    updateUvs(): void;
    /**
      * The frame specifies the region of the base texture that this texture uses.
      * Please call `updateUvs()` after you change coordinates of `frame` manually.
      *
      * @member {Rectangle}
      */
    get frame(): Rectangle;
    set frame(frame: Rectangle);
    /**
     * Indicates whether the texture is rotated inside the atlas
     * set to 2 to compensate for texture packer rotation
     * set to 6 to compensate for spine packer rotation
     * can be used to rotate or mirror sprites
     * See {@link GroupD8} for explanation
     *
     * @member {number}
     */
    get rotate(): number;
    set rotate(rotate: number);
    /**
     * 宽高都是贴图真实的宽高，不管trim
     * The width of the Texture in pixels.
     *
     * @member {number}
     */
    get width(): number;
    /**
     * The height of the Texture in pixels.
     *
     * @member {number}
     */
    get height(): number;
    /**
     * 会缓存
     * @param {string} url
     */
    static fromUrl(url: string): any;
    static fromCanvas(canvas: HTMLCanvasElement, origin?: string): Texture;
    static fromData(data: any): Texture;
    static fromImage(image: HTMLImageElement): Texture;
    static from(anything: string | HTMLCanvasElement | HTMLImageElement): any;
    /**
     * 加入全局缓存，TextureCache[name]调用
     * @static
     * @param {Texture} texture - The Texture to add to the cache.
     * @param {string} id - The id that the Texture will be stored against.
     */
    static addToCache(texture: Texture, id: string): void;
    /**
     * 从全局缓存中移除
     * @static
     * @param {string|Texture} texture - id of a Texture to be removed, or a Texture instance itself
     * @return {Texture|null} The Texture that was removed
     */
    static removeFromCache(texture: any): Texture;
}

export  class FillStyle {
    /**
     * 十六进制颜色
     * 默认0xFFFFFF 白色
     */
    color: number;
    /**
     * 透明度0到1
     * 默认1
     */
    alpha: number;
    /**
     * 纹理，
     * 默认Texture.WHITE
     */
    texture: Texture;
    /**
     * 纹理应用的矩阵
     * 默认null
     */
    matrix: Matrix;
    /**
     * 是否绘制
     * 默认false
     */
    visible: boolean;
    /**
     * 用于设置alpha为0做点击触发用
     */
    alphaBlock: boolean;
    constructor();
    clone(): FillStyle;
    /**
     * 重置
     */
    reset(): void;
    /**
     * 销毁
     */
    destroy(): void;
}

export  class LineStyle extends FillStyle {
    /**
     * webgl的画线模式
     * 默认false
     */
    native: boolean;
    /**
     * 线宽度
     * 默认0
     */
    width: number;
    /**
     * 线的对齐方式
     * 默认LINE_ALIGNMENT.middle  0.5
     */
    alignment: LINE_ALIGNMENT;
    /**
     * Clones the object
     *
     * @return {LineStyle}
     */
    clone(): LineStyle;
    /**
     * 重置
     */
    reset(): void;
}

export  class GraphicsData extends HashObject {
    fillStyle: FillStyle;
    lineStyle: LineStyle;
    matrix: Matrix;
    holes: any[];
    /**
     * The shape object to draw.
     * @member {Circle|Ellipse|Polygon|Rectangle|RoundedRectangle}
     */
    shape: any;
    /**
     * The type of the shape, see the Const.Shapes file for all the existing types,
     * @member {number}
     */
    type: number;
    /**
     * 点的一维数组[x,y,x1,y1,x2,y2]
     * 存下shape的点数据，因为如果shape不是poly不会特意存下points
     */
    points: number[];
    /**
     *
     */
    constructor(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle, fillStyle?: FillStyle, lineStyle?: LineStyle, matrix?: Matrix);
    /**
     * Creates a new GraphicsData object with the same values as this one.
     *
     * @return {GraphicsData} Cloned GraphicsData object
     */
    clone(): GraphicsData;
    /**
     * Destroys the Graphics data.
     */
    destroy(): void;
}

export  function earcut(data: any, holeIndices: any, dim: any): any[];

export const _default: {
    build(graphicsData: GraphicsData): void;
    triangulate(graphicsData: GraphicsData, graphicsGeometry: Graphics): void;
}

export const _default: {
    build(graphicsData: GraphicsData): void;
    triangulate(graphicsData: any, graphicsGeometry: Graphics): void;
}

export const _default: {
    build(graphicsData: GraphicsData): void;
    triangulate(graphicsData: GraphicsData, graphics: Graphics): void;
}

export const _default: {
    build(graphicsData: GraphicsData): void;
    triangulate(graphicsData: GraphicsData, graphicsGeometry: Graphics): void;
}

export  function bezierCurveControlPoint(points: any): {
    A: any[];
    B: any[];
}

export  const GRAPHICS_CURVES: {
    adaptive: boolean;
    maxLength: number;
    minSegments: number;
    maxSegments: number;
    segmentsCount: Function;
}

export  class Graphics extends Container {
    /**
     * 混色模式
     * @default BLEND_MODES.NORMAL
     */
    _blendMode: BLEND_MODES;
    get blendMode(): BLEND_MODES;
    /**
     * 很多效果暂时无效，再查原因，先不能设置吧
     */
    set blendMode(value: BLEND_MODES);
    /**
     * 当前的填充样式
     * @member {FillStyle}
     */
    private _fillStyle;
    /**
     * 当前的画线样式
     * @member {LineStyle}
     */
    private _lineStyle;
    /**
     * @member {FillStyle}
     * @readonly
     */
    get fill(): FillStyle;
    /**
     * @member {LineStyle}
     * @readonly
     */
    get line(): LineStyle;
    /**
     * 图形默认色调
     * 默认白色，不会有任何影响
     * @member {number}
     * @default 0xFFFFFF
     */
    private _tint;
    get tint(): number;
    set tint(value: number);
    /**
     * 判断是否更新色值
     */
    private batchTint;
    /**
     * 当前图形应用的矩阵，一般用不着
     *
     * @member {Matrix}
     */
    private _matrix;
    get matrix(): Matrix;
    set matrix(matrix: Matrix);
    hitTestByPixel: boolean;
    /**
     * 当前是否是画洞
     * @member {boolean}
     * @default false
     * @protected
     */
    private _holeMode;
    /**
     * Current path
     * 只用于画多边形时用
     * @member {Polygon}
     */
    private _currentPath;
    /**
     * 图形数据，为了一个Graphics里能绘制多个
     * @member {GraphicsData[]}
     */
    graphicsData: GraphicsData[];
    /**
     * 是否用作mask
     * @member {boolean}
     */
    isUsedToMask: boolean;
    /**
     * The bounds' padding used for bounds calculation.
     * @member {number}
     */
    boundsPadding: number;
    /**
     * Used to detect if the graphics object has changed. If this is set to true then the graphics
     * object will be recalculated.
     * 通过比对确定是否该刷新
     * @member {boolean}
     * @private
     */
    private dirty;
    /**
     * 与dirty对比是否重算bounds
     * Used to detect if we we need to recalculate local bounds
     * @type {Number}
     */
    private boundsDirty;
    /**
     * canvas必用缓存
     * renderCanvas默认用缓存,也就canvas上使用，如果经常需要重绘，设置为false
     * webgl上用贴图占用GPU空间太大，用其他方法实现,贴图是白图就一张，用几何方法实现
     * @name cacheAsBitmap
     * @member {boolean}
     * @memberof Graphics#
     * @default false
     */
    cacheAsBitmap: boolean;
    /**
     * 需与dirty一致
     */
    private cacheDirty;
    private _canvasBuffer;
    _texture: Texture;
    offsetX: number;
    offsetY: number;
    verts: any;
    indices: any;
    private batches;
    private geoBatches;
    private batchDirty;
    private uvs;
    private vertexData;
    private shapeIndex;
    private _transformID;
    constructor();
    /**
     * 克隆该Graphics的几何绘制，不包括它自身的transform
     * @return {Graphics} A clone of the graphics object
     */
    clone(): Graphics;
    /**
     * line属于附属属性，暂不写beginStroke，只要没调用过beginFill就是纯stroke
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     * @param {number} [lineWidth=0] - width of the line to draw, will update the objects stored style
     * @param {number} [color=0] - color of the line to draw, will update the objects stored style
     * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    lineStyle(lineWidth?: number, color?: number, alpha?: number, alignment?: number, native?: boolean): Graphics;
    lineTextureStyle(width?: number, texture?: Texture, color?: number, alpha?: number, matrix?: any, alignment?: number, native?: boolean): this;
    private startPoly;
    private finishPoly;
    moveTo(x: number, y: number): Graphics;
    lineTo(x: number, y: number): Graphics;
    /**
     * 初始化曲线
     * @param x
     * @param y
     */
    private _initCurve;
    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @param {number} x1 - The x-coordinate of the beginning of the arc
     * @param {number} y1 - The y-coordinate of the beginning of the arc
     * @param {number} x2 - The x-coordinate of the end of the arc
     * @param {number} y2 - The y-coordinate of the end of the arc
     * @param {number} radius - The radius of the arc
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @param {number} cx - The x-coordinate of the center of the circle
     * @param {number} cy - The y-coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param {number} endAngle - The ending angle, in radians
     * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics;
    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     *
     * @param {number | string} [color=0] - the color of the fill 十六进制颜色0xffffff
     * @param {number} [alpha=1] - the alpha of the fill
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    beginFill(color?: number | string, alpha?: number): Graphics;
    beginTextureFill(texture?: Texture, color?: number, alpha?: number, matrix?: Matrix): this;
    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     *
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    endFill(): Graphics;
    /**
     * 先加上吧
     */
    endStroke(): Graphics;
    /**
     * Closes the current path.
     * 只用在多边形的路径里
     * @return {Graphics} Returns itself.
     */
    closePath(): Graphics;
    /**
     * 开始画洞
     */
    beginHole(): this;
    /**
     * 结束画洞
     */
    endHole(): this;
    /**
     * 画矩形
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    drawRect(x: number, y: number, width: number, height: number): Graphics;
    /**
     * 画圆角矩形
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @param {number} radius - Radius of the rectangle corners
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
    /**
     * 画圆形
     * @param {number} x - The X coordinate of the center of the circle
     * @param {number} y - The Y coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    drawCircle(x: number, y: number, radius: number): Graphics;
    /**
     * 画椭圆
     * @param {number} x - The X coordinate of the center of the ellipse
     * @param {number} y - The Y coordinate of the center of the ellipse
     * @param {number} width - The half width of the ellipse
     * @param {number} height - The half height of the ellipse
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    drawEllipse(x: number, y: number, width: number, height: number): Graphics;
    /**
     * 画多边形
     * @param {number[]|Point[]|Polygon} path - The path data used to construct the polygon.
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    drawPolygon(path: number[] | Point[] | Polygon): Graphics;
    /**
     * 画任意多角形。points为数量
     * @param {number} x - Center X position of the star
     * @param {number} y - Center Y position of the star
     * @param {number} points - The number of points of the star, must be > 1
     * @param {number} radius - The outer radius of the star
     * @param {number} [innerRadius] - The inner radius between points, default half `radius`
     * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    drawStar(x: number, y: number, points: number, radius: number, innerRadius: number, rotation?: number): Graphics;
    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {Circle|Ellipse|Polygon|Rectangle|RoundedRectangle} shape - The shape object to draw.
     * @return {Graphics}
     */
    private drawShape;
    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {Graphics} This Graphics object. Good for chaining method calls
     */
    clear(): Graphics;
    /**
     * 暂时不用
     * @returns {boolean} True if only 1 rect.
     */
    isFastRect(): boolean;
    _renderWebGL(renderer: WebglRenderer): void;
    /**
     * 根据GraphicsData分出batch，主要根据透明度和颜色
     * _texture  里面有.BaseTexture
     * _vertexData
     * _indices
     * graAlpha 图形透明度自身计算需要
     * _worldAlpha
     * _batchRGB  图形颜色自身计算需要
     * _tintRGB
     * _uvs
     */
    private updateBatch;
    /**
     * 对每个batch计算颜色
     * @protected
     */
    private calculateTints;
    /**
     * If there's a transform update or a change to the shape of the
     * geometry, recaculate the vertices.
     * @protected
     */
    private calculateVertices;
    private transformPoints;
    /**
     * canvas渲染
     * @private
     * @param {CanvasRenderer} renderer - The renderer
     */
    _renderCanvas(renderer: any): void;
    /**
     * _boundsId不知道怎么改，暂时不管，少用
     * 计算全局bounds，_localBoundsSelf做个全局转换就行
     * @private
     */
    _calculateBounds(): void;
    /**
     * 碰撞检测方法重写
     * @param {Point} point - the point to test
     */
    hitTestPoint(point: Point, isMouseEvent?: boolean): DisplayObject;
    /**
     * 精确检测
     * 用几何方法
     * 不像shape里用的像素值
     * @param point
     */
    private hitTestPointAccuratly;
    /**
     * 更新自身包围盒
     */
    updateLocalBoundsSelf(): void;
    /**
     * Generates a canvas texture.
     * 不包括变形的，只根据图形数据产生的原生贴图，经过变形的，考虑，是否新建方法，这个暂时只为canvas缓存
     * 也不考虑遮罩
     * @param {number} scaleMode - The scale mode of the texture.
     * @param {number} resolution - The resolution of the texture.
     * @return {Texture} The new texture.
     */
    private generateCanvasTexture;
    /**
     *
     */
    destroy(): void;
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     * @member {number}
     */
    get width(): number;
    set width(value: number);
    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    get height(): number;
    set height(value: number);
    /**
     * Process the holes data.
     *
     * @param {GraphicsData[]} holes - Holes to render
     * @protected
     */
    private proccessHoles;
    /**
     * Generates the UVs for a shape.
     * 不支持纹理填充，所以uv都时0
     * @protected
     * @param {number[]} verts - Vertices
     * @param {number[]} uvs - UVs
     * @param {Texture} texture - Reference to Texture
     * @param {number} start - Index buffer start index.
     * @param {number} size - The size/length for index buffer.
     * @param {Matrix} [matrix] - Optional transform for all points.
     */
    private addUvs;
    /**
     * Modify uvs array according to position of texture region
     * Does not work with rotated or trimmed textures
     * @param {number[]} uvs array
     * @param {Texture} texture region
     * @param {number} start starting index for uvs
     * @param {number} size how many points to adjust
     */
    private adjustUvs;
}

export  class MouseEvent extends Event {
    /**
     * 鼠标或者手指按下事件
     * @property MOUSE_DOWN
     * @static
     * @public
     * @since 1.0.0
     * @type {string}
     */
    static MOUSE_DOWN: string;
    /**
     * 鼠标或者手指抬起事件
     * @property MOUSE_UP
     * @static
     * @public
     * @since 1.0.0
     * @type {string}
     */
    static MOUSE_UP: string;
    /**
     * 鼠标或者手指单击
     * @property CLICK
     * @static
     * @public
     * @since 1.0.0
     * @type {string}
     */
    static CLICK: string;
    /**
     * 鼠标或者手指移动事件
     * @property MOUSE_MOVE
     * @static
     * @public
     * @since 1.0.0
     * @type {string}
     */
    static MOUSE_MOVE: string;
    /**
     * 鼠标或者手指移入到显示对象上里触发的事件
     * @property MOUSE_OVER
     * @static
     * @public
     * @since 1.0.0
     * @type {string}
     */
    static MOUSE_OVER: string;
    /**
     * 鼠标或者手指移出显示对象边界触发的事件
     * @property MOUSE_OUT
     * @static
     * @public
     * @since 1.0.0
     * @type {string}
     */
    static MOUSE_OUT: string;
    /**
     * mouse或touch事件时rootDiv坐标x点
     * @property clientX
     * @public
     * @since 1.0.0
     * @type {number}
     */
    clientX: number;
    /**
     * mouse或touch事件时rootDiv坐标y点
     * @property clientY
     * @public
     * @since 1.0.0
     * @type {number}
     */
    clientY: number;
    /**
     * mouse或touch事件时全局坐标x点
     * @property stageX
     * @public
     * @since 1.0.0
     * @type {number}
     */
    stageX: number;
    /**
     * mouse或touch事件时全局坐标y点
     * @property stageY
     * @public
     * @since 1.0.0
     * @type {number}
     */
    stageY: number;
    /**
     * mouse或touch事件时本地坐标x点
     * @property localX
     * @public
     * @since 1.0.0
     * @type {number}
     */
    localX: number;
    /**
     * mouse或touch事件时本地坐标y点
     * @property localY
     * @public
     * @since 1.0.0
     * @type {number}
     */
    localY: number;
    /**
     * 触发事件的终点对象
     * @property currentTarget
     * @public
     * @since 1.0.0
     * @type{DisplayObject}
     * @default null
     */
    currentTarget: DisplayObject;
    /**
     * 触摸或者鼠标事件的手指唯一标识
     * @property identifier
     * @type {number}
     * @since 1.1.2
     * @public
     */
    identifier: any;
    /**
     * @method MouseEvent
     * @public
     * @since 1.0.0
     * @param {string} type
     */
    constructor(type: string);
    /**
     * 事件后立即更新显示列表状态
     * @method updateAfterEvent
     * @since 1.0.9
     * @public
     */
    updateAfterEvent(): void;
    destroy(): void;
}

export  class Stage extends Container {
    /**
     * 当前stage所使用的渲染器
     * 渲染器有两种,一种是canvas 一种是webGl
     * @property renderObj
     * @public
     * @since 1.0.0
     * @type {IRender}
     * @default null
     */
    renderObj: SystemRenderer;
    /**
     * 直接获取stage的引用，避免总是从Event.ADD_TO_STAGE 事件中去获取stage引用
     * @property getStage
     * @param {string} stageName
     * @return {any}
     * @since 2.0.0
     */
    static getStage(stageName?: string): Stage;
    /**
     * @property _stageList
     * @static
     * @type {Object}
     * @private
     */
    private static _stageList;
    /**
     * 舞台在设备里截取后的可见区域,有些时候知道可见区域是非常重要的,因为这样你就可以根据舞台的可见区域做自适应了。
     * @property viewRect
     * @public
     * @readonly
     * @since 1.0.0
     * @type {Rectangle}
     * @default {x:0,y:0,width:0,height:0}
     * @readonly
     */
    viewRect: Rectangle;
    /**
     * 舞台的尺寸宽,也就是我们常说的设计尺寸
     * @property desWidth
     * @public
     * @since 1.0.0
     * @default 320
     * @type {number}
     * @readonly
     */
    desWidth: number;
    /**
     * 舞台的尺寸高,也就是我们常说的设计尺寸
     * @property desHeight
     * @public
     * @since 1.0.0
     * @default 240
     * @type {number}
     * @readonly
     */
    desHeight: number;
    /**
     * 舞台在当前设备中的真实高
     * @property divHeight
     * @public
     * @since 1.0.0
     * @default 320
     * @type {number}
     * @readonly
     */
    divHeight: number;
    /**
     * 舞台在当前设备中的真实宽
     * @property divWidth
     * @public
     * @since 1.0.0
     * @default 240
     * @readonly
     * @type {number}
     */
    divWidth: number;
    /**
     * 舞台的背景色
     * 默认就是透明背景
     * 可能设置一个颜色值改变舞台背景
     * @property bgColor
     * @public
     * @since 1.0.0
     * @type {number}
     * @default "";
     */
    private _bgColor;
    get bgColor(): number;
    /**
     * 设置颜色，即改变渲染器颜色
     */
    set bgColor(value: number);
    /**
     * 上一次鼠标或触碰经过的显示对象列表
     * @property _lastDpList
     * @type {Object}
     * @private
     */
    private _lastDpList;
    private _dpi;
    /**
     *
     */
    private canvas;
    /**
     * 淘宝小程序环境canvas的偏移,淘宝环境才用,web环境实时,字段保留,但是不会计算了
     */
    private canvasOffsetTb;
    private offsetTimeId;
    get stageWidth(): number;
    get stageHeight(): number;
    /**
     * 缩放模式
     */
    private _scaleMode;
    /**
     * 舞台是否居中
     */
    private _stageCenter;
    /**
     * canvas的实际宽高及显示宽高外部自己设定,stage内部不对尺寸做任何修改
     * 且需要根据实际尺寸和显示尺寸确定dpi
     * @param canvas canvas标签
     * @param desWidth 舞台设计宽
     * @param desHeight 舞台设计高
     * @param divWidth canvas显示宽
     * @param divHeight canvas显示高
     * @param renderType 渲染类型,默认canvas
     * @param stageCenter 舞台是否根据设计尺寸居中,默认false(左上角置顶)
     * @param fixedHeight 是否定高,默认false(定宽)
     */
    constructor(canvas: HTMLCanvasElement, desWidth: number, desHeight: number, divWidth: number, divHeight: number, renderType?: RENDERER_TYPE, stageCenter?: boolean, fixedHeight?: boolean);
    /**
     * 暂时不存在外部调用的情况
     */
    private _setAlign;
    /**
     * 移动端不常用
     * 微信浏览器使用情景:ios返回页面下面出现操作栏
     * window.addEventListener('resize', () => {stage.resize()});
     * 这里会按照原_dpi修改canvas的实际尺寸
     * 一般设备的dpi不会改变,
     * web全屏环境可不传参数,否则自行计算显示尺寸传入
     * @param divWidth
     * @param divHeight
     */
    resize(divWidth?: number, divHeight?: number): void;
    /**
     * 这个是鼠标事件的MouseEvent对象池,因为如果用户有监听鼠标事件,如果不建立对象池,那每一秒将会new Fps个数的事件对象,影响性能
     * @property _ml
     * @type {Array}
     * @private
     */
    private _ml;
    /**
     * 这个是事件中用到的Point对象池,以提高性能
     * @property _mp
     * @type {Array}
     * @private
     */
    private _mp;
    /**
     * 刷新mouse或者touch事件
     * @method _initMouseEvent
     * @private
     */
    private _initMouseEvent;
    /**
     * @property _mouseDownPoint
     * @type {Object}
     * @private
     */
    private _mouseDownPoint;
    /**
     * 循环刷新页面的函数
     * @method flush
     * @private
     * @return {void}
     */
    flush(): void;
    /**
     * html的鼠标或单点触摸对应的引擎事件类型名
     * touchcancel:"onMouseUp"不常用，先不加
     * @property _mouseEventTypes
     * @type {{mousedown: string, mouseup: string, mousemove: string, touchstart: string, touchmove: string, touchend: string}}
     * @private
     */
    private _mouseEventTypes;
    /**
     * 无多指，无拖动
     * @method onMouseEvent
     * @param e
     * @private
     */
    onMouseEvent(e: any): void;
    getBounds(): Rectangle;
    destroy(): void;
}

export  class DisplayObject extends EventDispatcher {
    /**
     * 基础信息
     */
    transform: Transform;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 是否可绘制
     * 自身不绘制，但是参与updateTransform
     * 在有些时候的遮罩处理
     */
    renderable: boolean;
    /**
     * 父级
     * @member {Container}
     * @readonly
     */
    parent: Container;
    /**
     * 舞台
     */
    stage: Stage;
    /**
     * 名字,预留
     */
    name: string;
    /**
     * 全局透明度
     */
    _worldAlpha: number;
    /**
     * 用于只管局部自己,不包括子级，用于各继承修改自身，hitTest检测自己用
     */
    protected _localBoundsSelf: Rectangle;
    /**
     * 用于计算世界bounds，包括自身和子级，一般只在获取宽高时使用，变形后的
     */
    protected _bounds: Rectangle;
    protected _boundsID: number;
    protected _lastBoundsID: number;
    /**
     * 遮罩
     * @member {Graphics}
     * @private
     */
    private _mask;
    /**
     * 滤镜区域，暂时别用，用了也没效
     */
    filterArea: Rectangle;
    /**
     * 滤镜数组
     */
    private _filters;
    get filters(): Filter[];
    set filters(value: Filter[]);
    /**
     * 可用的滤镜数据，_filters筛选过的
     */
    protected _enabledFilters: Filter[];
    /**
     * 透明度
     * 0到1
     */
    private _alpha;
    /**
     * 是否已销毁
     * @member {boolean}
     * @readonly
     */
    destroyed: boolean;
    /**
     * 是否可响应鼠标事件
     */
    mouseEnable: boolean;
    /**
     * 临时父级,特殊用处
     */
    private tempDisplayObjectParent;
    /**
     * 特殊用处
     * 缓存的DisplayObject的updateTransform
     */
    displayObjectUpdateTransform: any;
    /**
     * 特殊用处
     * 缓存的DisplayObject的hitTestPoint
     */
    displayObjectHitTestPoint: any;
    protected _width: number;
    protected _height: number;
    constructor();
    /**
     * @private
     * @member {DisplayObject}
     */
    private get _tempDisplayObjectParent();
    /**
     * 更新矩阵
     */
    updateTransform(): void;
    static _bp: Point;
    static _p1: Point;
    static _p2: Point;
    static _p3: Point;
    static _p4: Point;
    static temBounds: Rectangle;
    /**
     * 点击碰撞测试,就是舞台上的一个point是否在显示对象内,在则返回该对象，不在则返回null
     * 对于那些不是继承container，而直接继承displayObject的不用重写，如Bitmap
     * @method hitTestPoint
     * @public
     * @since 1.0.0
     * @param {Point} point 需要碰到的坐标点
     * @param {boolean} isMouseEvent 是否是鼠标事件调用此方法,一般都为true
     * @return {DisplayObject}
     */
    hitTestPoint(point: Point, isMouseEvent?: boolean): DisplayObject;
    /**
     * 递归更新矩阵方法
     */
    private _recursivePostUpdateTransform;
    /**
     * 获取全局的bounds，变形后的
     * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost
     * @param {Rectangle} rect - Optional rectangle to store the result of the bounds calculation
     * @return {Rectangle} the rectangular bounding area
     */
    getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
    /**
     * 以自身为世界坐标系的本地包围盒
     * @param {Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation
     * @return {Rectangle} the rectangular bounding area
     */
    getLocalBounds(rect?: Rectangle): Rectangle;
    calculateBounds(): void;
    /**
     *将全局坐标转换到本地坐标值
     * @method globalToLocal
     * @since 1.0.0
     * @public
     * @param {Point} point
     * @return {Point}
     */
    globalToLocal(point: Point, bp?: Point): Point;
    /**
     *将本地坐标转换到全局坐标值
     * @method localToGlobal
     * @public
     * @since 1.0.0
     * @param {Point} point
     * @return {Point}
     */
    localToGlobal(point: Point, bp?: Point): Point;
    /**
     * 调用些方法会冒泡的将事件向显示列表下方传递，主要用于移除舞台，和添加进舞台事件，修改stage
     * @method _onDispatchBubbledEvent
     * @public
     * @since 1.0.0
     * @param {string} type
     * @return {void}
     */
    _onDispatchBubbledEvent(type: string): void;
    /**
     * webgl渲染
     * @param {WebGLRenderer} renderer - The renderer
     */
    renderWebGL(renderer: any): void;
    /**
     * canvas渲染
     * @param {CanvasRenderer} renderer - The renderer
     */
    renderCanvas(renderer: any): void;
    /**
     * 设置父级
     * @param {Container} container - The Container to add this DisplayObject to
     * @return {Container} The Container that this DisplayObject was added to
     */
    setParent(container: any): any;
    /**
     *根据常规属性 设置矩阵属性，弧度制
     * @param {number} [x=0] - The X position
     * @param {number} [y=0] - The Y position
     * @param {number} [scaleX=1] - The X scale value
     * @param {number} [scaleY=1] - The Y scale value
     * @param {number} [rotation=0] - The rotation
     * @param {number} [skewX=0] - The X skew value
     * @param {number} [skewY=0] - The Y skew value
     * @param {number} [anchorX=0] - The X anchor value
     * @param {number} [anchorY=0] - The Y anchor value
     * @return {DisplayObject} The DisplayObject instance
     */
    setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, anchorX?: number, anchorY?: number): DisplayObject;
    /**
     * 基本销毁方法
     */
    destroy(): void;
    get alpha(): number;
    set alpha(value: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    /**
     * 获取世界矩阵
     * 手动修改时，this.transform._worldID++,保证子级的worldMatrix会修改，尽量别那么做
     * @member {Matrix}
     * @readonly
     */
    get worldMatrix(): Matrix;
    /**
     * 获取本地矩阵
     * 手动修改时this.transform._parentID=-1;保证其worldMatrix会更新
     * @member {Matrix}
     * @readonly
     */
    get localMatrix(): Matrix;
    /**
     * 获取位置对象
     * @member {Point|ObservablePoint}
     */
    get position(): ObservablePoint;
    /**
     * 设置位置对象
     */
    set position(value: ObservablePoint);
    /**
     * 获取缩放对象
     * @member {Point|ObservablePoint}
     */
    get scale(): ObservablePoint;
    /**
     * 设置缩放对象
     */
    set scale(value: ObservablePoint);
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    /**
     * 获取锚点对象
     * @member {Point|ObservablePoint}
     */
    get anchor(): ObservablePoint;
    set anchor(value: ObservablePoint);
    get anchorX(): number;
    set anchorX(value: number);
    get anchorY(): number;
    set anchorY(value: number);
    /**
     * 获取斜切对象
     * @member {ObservablePoint}
     */
    get skew(): ObservablePoint;
    set skew(value: ObservablePoint);
    /**
     * 角度制
     */
    get skewX(): number;
    /**
     * 角度制
     */
    set skewX(value: number);
    /**
     * 角度制
     */
    get skewY(): number;
    /**
     * 角度制
     */
    set skewY(value: number);
    /**
     * 获取旋转值,顺时针,角度制
     * @member {number}
     */
    get rotation(): number;
    /**
     * 角度制
     */
    set rotation(value: number);
    /**
     * 自身是否可见,检测所有父级的visible
     * @member {boolean}
     * @readonly
     */
    get worldVisible(): boolean;
    /**
     * 获取遮罩
     * @member {Graphics}
     */
    get mask(): any;
    set mask(value: any);
    /**
     * 子类必重写，
     */
    get width(): number;
    /**
     * 子类必重写，如果设置过宽高_width有值且不为0，子类在更新texture时需设置scale
     */
    set width(value: number);
    get height(): number;
    set height(value: number);
    /**
     * 更新方法，帧循环的监听事件放在这
     */
    update(): void;
}

export  class Container extends DisplayObject {
    /**
     * 为false鼠标事件不再向下传递
     */
    mouseChildren: boolean;
    /**
     * 儿子们
     * @member {DisplayObject[]}
     * @readonly
     */
    children: DisplayObject[];
    /**
     * 特殊用处
     * 缓存的Container的updateTransform
     */
    containerUpdateTransform: any;
    constructor();
    /**
     * children改变时
     * @private
     */
    onChildrenChange(index: any): void;
    /**
     * 添加child
     * @param {DisplayObject} child
     * @return {DisplayObject}
     */
    addChild<T extends DisplayObject>(child: T): T;
    /**
     * 批量添加child
     * @param children
     */
    addChildren<T extends DisplayObject>(...children: T[]): T[];
    /**
     * 在相应index处添加child
     * @param {DisplayObject} child - The child to add
     * @param {number} index - The index to place the child in
     * @return {DisplayObject} The child that was added.
     */
    addChildAt<T extends DisplayObject>(child: T, index: number): T;
    /**
     * 只用于交换索引
     * @param {DisplayObject} child - First display object to swap
     * @param {DisplayObject} child2 - Second display object to swap
     */
    swapChildren(child1: DisplayObject, child2: DisplayObject): boolean;
    /**
     * 获取child的层级索引index
     * @param {DisplayObject} child - The DisplayObject instance to identify
     * @return {number} The index position of the child display object to identify
     */
    getChildIndex(child: DisplayObject): number;
    /**
     * 设置child的层级
     * @param {DisplayObject} child
     * @param {number} index
     */
    setChildIndex(child: DisplayObject, index: number): void;
    /**
     * Returns the child at the specified index
     * @param {number} index - The index to get the child at
     * @return {DisplayObject} The child at the given index, if any.
     */
    getChildAt(index: number): DisplayObject;
    /**
     * 通过名字获取子级
     * @param name
     * @param isOnlyOne
     * @param isRecursive
     */
    getChildByName(name: string | RegExp, isOnlyOne?: boolean, isRecursive?: boolean): any;
    /**
     * 移除child
     * @param {DisplayObject} child
     * @return {DisplayObject}
     */
    removeChild(child: DisplayObject): DisplayObject;
    /**
     * 在index处移除child
     * @param {number} index - The index to get the child from
     * @return {DisplayObject} The child that was removed.
     */
    removeChildAt(index: number): DisplayObject;
    /**
     * 批量移除child，
     * @param children 不传参数，表示全部移除
     */
    removeChildren<T extends DisplayObject>(...children: T[]): T[];
    /**
     * 移除所有子级
     * @returns 返回移除的子级的数组
     */
    removeAllChildren<T extends DisplayObject>(): T[];
    /**
     * 通过索引批量移除child
     * @param {number} [beginIndex=0]
     * @param {number} [endIndex=this.children.length]
     * @returns {DisplayObject[]} List of removed children
     */
    removeChildrenAt(beginIndex?: number, endIndex?: number): DisplayObject[];
    /**
     * 类比splice方法
     * @param beginIndex
     * @param count
     */
    spliceChildren<T extends DisplayObject>(beginIndex?: number, count?: number): T[];
    /**
     * 更新矩阵
     */
    updateTransform(): void;
    /**
     * 父类重写
     * 都是全局的
     */
    calculateBounds(): void;
    /**
     * 加"_"的方法基本是为了自己特殊处理
     */
    protected _calculateBounds(): void;
    /**
     * 检测点是否在任何child上
     * 重写父类方法
     */
    hitTestPoint(globalPoint: Point, isMouseEvent?: boolean): any;
    /**
     * webgl渲染
     * @param {WebglRenderer} renderer - The renderer
     */
    renderWebGL(renderer: WebglRenderer): void;
    /**
     * 高级渲染方法
     *
     * @private
     * @param {WebGLRenderer} renderer - The renderer
     */
    private renderAdvancedWebGL;
    /**
     * 自身渲染方式
     * @private
     * @param {WebglRenderer} renderer - The renderer
     */
    protected _renderWebGL(renderer: WebglRenderer): void;
    /**
     * canvas渲染方式
     * @param {CanvasRenderer} renderer - The renderer
     */
    renderCanvas(renderer: CanvasRenderer): void;
    /**
     * 自身渲染方法
     *
     * @private
     * @param {CanvasRenderer} renderer - The renderer
     */
    protected _renderCanvas(renderer: CanvasRenderer): void;
    /**
     * 更新方法
     */
    update(): void;
    /**
     * 调用此方法对自己及其child触发一次指定事件
     * @method _onDispatchBubbledEvent
     * @public
     * @param {string} type
     * @since 1.0.0
     */
    _onDispatchBubbledEvent(type: string): void;
    /**
     *
     */
    destroy(): void;
    /**
     * 一般用于获取宽高并设置
     * 包括子级的,容器的尽量少用，子类可重写
     * @member {number}
     */
    get width(): number;
    set width(value: number);
    /**
     * 高度同width
     * @member {number}
     */
    get height(): number;
    set height(value: number);
    /**
     * @method _getElementsByName
     * @param {RegExp} rex
     * @param {Container} root
     * @param {boolean} isOnlyOne
     * @param {boolean} isRecursive
     * @param {Array<DisplayObject>} resultList
     * @private
     * @static
     */
    private static _getElementsByName;
}

export  class FloatDisplay extends DisplayObject {
    /**
     * 需要封装起来的html元素的引用。你可以通过这个引用来调用或设置此元素自身的属性方法和事件,甚至是样式
     * @property htmlElement
     * @public
     * @since 1.0.0
     * @type{HtmlElement}
     */
    htmlElement: any;
    /**
     * 是否已经添加了舞台事件
     * @property _isAdded
     * @since 1.0.0
     * @type {boolean}
     * @private
     */
    private _isAdded;
    /**
     * 记录是否需要修改位置矩阵
     */
    private _transformID;
    /**
     * 构造函数
     * @method FloatDisplay
     * @since 1.0.0
     * @public
     * @example
     *      var floatDisplay = new FloatDisplay();
     *      floatDisplay.init(document.getElementById('aaa'));
     *      s.addChild(floatDisplay);
     *
     * <p><a href="" target="_blank">测试链接</a></p>
     *
     * @example
     *  //创建悬浮的html元素
     *  var section = document.createElement('section');
     *   section.id = "rule";
     *   section.style.overflowX = "hidden";
     *   section.style.overflowY = "auto";
     *   section.style.width = w + "px";
     *   section.style.height = h + "px";
     *   section.style.lineHeight = lh + "px";
     *   section.style.fontFamily = '微软雅黑';
     *   section.style.fontSize = fs + 'px';
     *   section.style.color = "#ffffff";
     *   //创建Floatview 把我们要悬浮的元素封装进去
     *   var rule = new FloatDisplay();
     *   stage.addChild(rule);
     *   rule.x = ox;
     *   rule.y = oy;
     *   rule.init(this.section);
     *   section.innerHTML = DataManager.ins.getData("ajaxElement").data.rule;
     *
     */
    constructor();
    /**
     * 初始化方法,htmlElement 一定要设置width和height样式,并且一定要用px单位
     * @method init
     * @public
     * @since 1.0.0
     * @param {HtmlElement} htmlElement 需要封装起来的html元素的引用。你可以通过这个引用来调用或设置此元素自身的属性方法和事件,甚至是样式
     */
    init(htmlElement: any): void;
    /**
     * @method getStyle
     * @param {HTMLElement} elem
     * @param cssName
     * @return {any}
     */
    private getStyle;
    /**
     * @method updateStyle
     * @public
     * @since 1.1.4
     */
    private updateStyle;
    /**
     * 移除htmlElement
     */
    private removeHtmlElement;
    renderCanvas(): void;
    renderWebGL(): void;
    destroy(): void;
}

export  const GDispatcher: EventDispatcher;

export  class Shape extends Sprite {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    dirty: boolean;
    offsetX: number;
    offsetY: number;
    constructor();
    /**
     * 一个数组，每个元素也是一个数组[类型 0是属性,1是方法,名字 执行的属性或方法名,参数]
     *
     * @property _command
     * @private
     * @since 1.0.0
     * @type {Array}
     * @default []
     */
    private _command;
    /**
     * @property _isBitmapStroke
     * @private
     * @since 1.0.0
     */
    private _isBitmapStroke;
    /**
     * @property _isBitmapFill
     * @private
     * @since 1.0.0
     */
    private _isBitmapFill;
    /**
     * 是否对矢量使用像素碰撞 默认开启
     * @property hitTestByPixel
     * @type {boolean}
     * @default true
     * @since 1.1.0
     */
    hitTestByPixel: boolean;
    /**
     * 画一个带圆角的矩形
     * @method drawRoundedRect
     * @param {number} x 点x值
     * @param {number} y 点y值
     * @param {number} w 宽
     * @param {number} h 高
     * @param {number} rTL 左上圆角半径
     * @param {number} rTR 右上圆角半径
     * @param {number} rBL 左下圆角半径
     * @param {number} rBR 右上圆角半径
     * @public
     * @since 1.0.0
     */
    drawRoundedRect(x: number, y: number, w: number, h: number, rTL?: number, rTR?: number, rBL?: number, rBR?: number): this;
    /**
     * 绘画时移动到某一点
     * @method moveTo
     * @param {number} x
     * @param {number} y
     * @public
     * @since 1.0.0
     */
    moveTo(x: number, y: number): this;
    /**
     * 从上一点画到某一点,如果没有设置上一点，则上一点默认为(0,0)
     * @method lineTo
     * @param {number} x
     * @param {number} y
     * @public
     * @since 1.0.0
     */
    lineTo(x: number, y: number): this;
    /**
     *
     * https://www.jianshu.com/p/e8ea5996cd79
     * @method arcTo
     * @param {number} x1 圆弧外一点，由它连接两切点
     * @param {number} y1
     * @param {number} x2 结束点 没啥用，设啥都是那个切点
     * @param {number} y2
     * @param {number} radius 半径
     * @public
     * @since 1.0.0
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    /**
     * 二次贝赛尔曲线
     * 从上一点画二次贝赛尔曲线到某一点,如果没有设置上一点，则上一占默认为(0,0)
     * @method quadraticCurveTo
     * @param {number} cpX 控制点X
     * @param {number} cpX 控制点Y
     * @param {number} x 终点X
     * @param {number} y 终点Y
     * @public
     * @since 1.0.0
     */
    quadraticCurveTo(cpX: number, cpY: number, x: number, y: number): this;
    /**
     * 三次贝赛尔曲线
     * 从上一点画二次贝赛尔曲线到某一点,如果没有设置上一点，则上一占默认为(0,0)
     * @method bezierCurveTo
     * @param {number} cp1X 1控制点X
     * @param {number} cp1Y 1控制点Y
     * @param {number} cp2X 2控制点X
     * @param {number} cp2Y 2控制点Y
     * @param {number} x 终点X
     * @param {number} y 终点Y
     * @public
     * @since 1.0.0
     */
    bezierCurveTo(cp1X: number, cp1Y: number, cp2X: number, cp2Y: number, x: number, y: number): this;
    /**
     * 闭合一个绘画路径
     * @method closePath
     * @public
     * @since 1.0.0
     */
    closePath(): this;
    /**
     * 画一个矩形
     * @method drawRect
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @public
     * @since 1.0.0
     */
    drawRect(x: number, y: number, w: number, h: number): this;
    /**
     * 画一个弧形
     * https://www.w3school.com.cn/tags/canvas_arc.asp
     *
     * @method drawArc
     * @param {number} x 起始点x
     * @param {number} y 起始点y
     * @param {number} radius 半径
     * @param {number} start 开始角度 弧度
     * @param {number} end 结束角度 弧度
     * @param {number} counterclockwise False = 顺时针，true = 逆时针
     * @public
     * @since 1.0.0
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): this;
    /**
     * 画一个圆
     * @method drawCircle
     * @param {number} x 圆心x
     * @param {number} y 圆心y
     * @param {number} radius 半径
     * @param {boolean} counterclockwise 半径
     * @public
     * @since 1.0.0
     */
    drawCircle(x: number, y: number, radius: number, counterclockwise?: boolean): this;
    /**
     * 画一个椭圆
     * @method drawEllipse
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @public
     * @since 1.0.0
     */
    drawEllipse(x: number, y: number, w: number, h: number): this;
    /**
     * 清除掉之前所有绘画的东西
     * @method clear
     * @public
     * @since 1.0.0
     */
    clear(): this;
    /**
     * 开始绘画填充,如果想画的东西有颜色填充,一定要从此方法开始
     * @method beginFill
     * @param {number|string} color 颜色值 单色和RGBA格式
     * @public
     * @since 1.0.0
     */
    beginFill(color?: number | string, alpha?: number): this;
    /**
     * 线性或径向渐变填充
     * @method beginGradientFill
     * @param {Array} points 四个数字表示线性渐变参考createLinearGradient，六个数字表示径向渐变参考createRadialGradient
     * @param {Array} colors [系数, #式颜色值, 透明度]的数组，比如[[0, "#ff0000", 1],[0.5, "#00ff00", 1],[1, "#0000ff", 1]]
     * @public
     * @since 1.0.0
     */
    beginGradientFill(points: number[], colors: [number, string, number][]): this;
    /**
     * 位图填充
     * @method beginBitmapFill
     * @param {Image} image
     * @param { Array} matrix
     * @public
     * @since 1.0.0
     */
    beginBitmapFill(image: any, matrix: Array<number>): this;
    private _fill;
    /**
     * 给线条着色
     * @method beginStroke
     * @param {number} color  颜色值
     * @param {number} lineWidth 宽度
     * @param {number} cap 线头的形状 0 butt 1 round 2 square 默认 butt
     * @param {number} join 线与线之间的交接处形状 0 miter 1 bevel 2 round  默认miter
     * @param {number} miter 正数,规定最大斜接长度,如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示 默认10
     * @public
     * @since 1.0.0
     */
    beginStroke(color: number, lineWidth?: number, cap?: LINE_CAP, join?: LINE_JOIN, miter?: number, alpha?: number): this;
    /**
     * 画线性或径向渐变的线条
     * @method beginGradientStroke
     * @param {Array} points 四个数字表示线性渐变参考createLinearGradient，六个数字表示径向渐变参考createRadialGradient
     * @param {Array} colors [系数, #式颜色值, 透明度]的数组，比如[[0, "#ff0000", 1],[0.5, "#00ff00", 1],[1, "#0000ff", 1]]
     * @param {number} lineWidth
     * @param {number} cap 线头的形状 0 butt 1 round 2 square 默认 butt
     * @param {number} join 线与线之间的交接处形状 0 miter 1 bevel 2 round  默认miter
     * @param {number} miter 正数,规定最大斜接长度,如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示 默认10
     * @public
     * @since 1.0.0
     */
    beginGradientStroke(points: Array<number>, colors: any, lineWidth?: number, cap?: LINE_CAP, join?: LINE_JOIN, miter?: number): this;
    /**
     * 线条位图填充 一般给Flash2x用
     * @method beginBitmapStroke
     * @param {Image} image
     * @param {Array} matrix
     * @param {number} lineWidth
     * @param {string} cap 线头的形状 butt round square 默认 butt
     * @param {string} join 线与线之间的交接处形状 bevel round miter 默认miter
     * @param {number} miter 正数,规定最大斜接长度,如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示 默认10
     * @public
     * @since 1.0.0
     */
    beginBitmapStroke(image: any, matrix: Array<number>, lineWidth?: number, cap?: LINE_CAP, join?: LINE_JOIN, miter?: number): this;
    /**
     * @method _stroke
     * @param strokeStyle
     * @param {number} width
     * @param {number} cap
     * @param {number} join
     * @param {number} miter
     * @private
     * @since 1.0.0
     */
    private _stroke;
    /**
     * 结束填充
     * @method endFill
     * @public
     * @since 1.0.0
     */
    endFill(): this;
    /**
     * 结束画线
     * @method endStroke
     * @public
     * @since 1.0.0
     */
    endStroke(): this;
    /**
     * 重写刷新
     * @method update
     * @public
     * @since 1.0.0
     */
    updateShape(): void;
    /**
     * @method _drawShape
     * @param ctx
     * @private
     * @return {void}
     */
    private _drawShape;
    /**
     * 重写hitTestPoint
     * @method  hitTestPoint
     * @param {Point} globalPoint
     * @param {boolean} isMouseEvent
     * @return {any}
     * @public
     * @since 1.0.0
     */
    hitTestPoint(globalPoint: Point, isMouseEvent?: boolean): DisplayObject;
    /**
     * 如果有的话,改变矢量对象的边框或者填充的颜色.
     * @method changeColor
     * @param {Object} infoObj
     * @param {string|any} infoObj.fillColor 填充颜色值，如"#fff" 或者 "rgba(255,255,255,1)"或者是Shape.getGradientColor()方法返回的渐变对象;
     * @param {string} infoObj.strokeColor 线条颜色值，如"#fff" 或者 "rgba(255,255,255,1)";
     * @param {number} infoObj.lineWidth 线条的粗细，如"1,2,3...";
     * @public
     * @since 1.0.2
     */
    changeColor(infoObj: any): void;
    /**
     * 计算自身盒子前要更新shape
     */
    calculateBounds(): void;
    _renderCanvas(renderer: any): void;
    _renderWebGL(renderer: any): void;
    destroy(): void;
}

export  class TextField extends Sprite {
    private static shareCanvas;
    private static shareContext;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    /**
     * 与其他类不同，用了Boolean，再考虑
     */
    dirty: boolean;
    offsetX: number;
    offsetY: number;
    constructor();
    /**
     * @property textAlpha
     * @since 2.0.0
     * @public
     */
    set textAlpha(value: number);
    get textAlpha(): number;
    private _textAlpha;
    /**
     * 文本的水平对齐方式 left center right
     * 设置过textHeight才有效，如果是多行的，对排版有作用
     * @property textAlign
     * @public
     * @since 1.0.0
     * @type {string}
     * @default left
     */
    set textAlign(value: TEXT_ALIGN);
    get textAlign(): TEXT_ALIGN;
    private _textAlign;
    /**
     * 垂直对齐方式
     * 设置过textHeight才有效
     */
    set verticalAlign(value: VERTICAL_ALIGN);
    get verticalAlign(): VERTICAL_ALIGN;
    private _verticalAlign;
    /**
     * 文本的宽，
     * @property textWidth
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 0
     */
    set textWidth(value: number);
    get textWidth(): number;
    private _textWidth;
    /**
     * 文本的行高，设置过能进行垂直适配，
     * 文本超出行高会被裁切
     * @property textHeight
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 0
     */
    set textHeight(value: number);
    get textHeight(): number;
    private _textHeight;
    /**
     * 行间距
     * @property lineSpacing
     * @public
     * @since 1.0.0
     * @param {number} value
     */
    set lineSpacing(value: number);
    get lineSpacing(): number;
    private _lineSpacing;
    /**
     * 文本类型,单行还是多行 single multi
     * @property lineType
     * @public
     * @since 1.0.0
     * @type {string} 两种 single和multi
     * @default single
     */
    set lineType(value: TEXT_lINETYPE);
    get lineType(): TEXT_lINETYPE;
    private _lineType;
    /**
     * 文本内容
     * @property text
     * @type {string}
     * @public
     * @default ""
     * @since 1.0.0
     */
    set text(value: string);
    get text(): string;
    private _text;
    /**
     * 文本的css字体样式
     * @property font
     * @public
     * @since 1.0.0
     * @type {string}
     * @default 12px Arial
     */
    set font(value: string);
    get font(): string;
    private _font;
    /**
     * 文本的size
     * @property size
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 12
     */
    set size(value: number);
    get size(): number;
    private _size;
    /**
     * 文本的填充颜色值
     * @property fillColor
     * @type {string}
     * @public
     * @since 1.0.0
     * @default #fff
     */
    set fillColor(value: string);
    get fillColor(): string;
    private _fillColor;
    /**
     * 文本的描边颜色值
     * @property strokeColor
     * @type {string}
     * @public
     * @since 1.0.0
     * @default #fff
     */
    set strokeColor(value: string);
    get strokeColor(): string;
    private _strokeColor;
    /**
     * 文本描边宽度,为0则不描边
     * @property stroke
     * @public
     * @since
     * @default 0
     * @type {number}
     */
    set stroke(value: number);
    get stroke(): number;
    private _stroke;
    /**
     * 文本是否倾斜
     * @property italic
     * @public
     * @since
     * @default false
     * @type {boolean}
     */
    set italic(value: boolean);
    get italic(): boolean;
    private _italic;
    /**
     * 文本是否加粗
     * @property bold
     * @public
     * @since
     * @default false
     * @type {boolean}
     */
    set bold(value: boolean);
    get bold(): boolean;
    _bold: boolean;
    /**
     * 设置或获取是否有边框
     * @property property
     * @param {boolean} show true或false
     * @public
     * @since 1.0.6
     */
    set border(value: boolean);
    get border(): boolean;
    private _border;
    /**
     * 设置文本在canvas里的渲染样式
     * @method _prepContext
     * @param ctx
     * @private
     * @since 1.0.0
     */
    private _prepContext;
    /**
     * 获取当前文本中单行文字的宽，注意是文字的不是文本框的宽
     * 暂不用，可能有问题
     * @method getTextWidth
     * @param {number} lineIndex 获取的哪一行的高度 默认是第1行
     * @since 2.0.0
     * @public
     * @return {number}
     */
    getTextWidth(lineIndex?: number): number;
    /**
     * @property _lines 获取当前文本行数
     * @type {number}
     * @public
     * @readonly
     * @since 2.0.0
     */
    get lines(): number;
    /**
     * 获取文本宽
     * @method _getMeasuredWidth
     * @param text
     * @return {number}
     * @private
     * @since 1.0.0
     */
    private _getMeasuredWidth;
    private realLines;
    private callback;
    /**
     * 更新文本，主要重画canvas，回调是很有问题的
     */
    updateText(): void;
    /**
     * 为了计算包围盒，需要计算一边文本，
     * 重写calculateBounds不好，应该只改_calculateBounds，考虑_boundID，以后再说，和shape的一样
     * 暂时只有两个类重写了calculateBounds，Shape和TextField
     */
    calculateBounds(): void;
    _renderCanvas(renderer: any): void;
    _renderWebGL(renderer: any): void;
    destroy(): void;
}

export  class EditableText extends TextField {
    htmlElement: any;
    private _prompt;
    /**
     * 未输入文本时显示的文字
     */
    get prompt(): string;
    set prompt(value: string);
    private _promptColor;
    /**
     * 未输入文本时显示文字的颜色
     */
    get promptColor(): string;
    set promptColor(value: string);
    private _textColor;
    /**
     * 文本颜色，不用fillColor为了和父类区分
     */
    get textColor(): string;
    set textColor(value: string);
    /**
     * 获取输入框内容
     */
    get inputValue(): string;
    set inputValue(v: string);
    constructor();
    private initElement;
}

export  class InputText extends FloatDisplay {
    /**
     * 输入文本的类型.
     * @property inputType
     * @public
     * @since 1.0.0
     * @type {number} 0 input 1 password 2 mulit
     * @default 0
     */
    inputType: number;
    /**
     * 在手机端是否需要自动收回软键盘，在pc端此参数无效
     * @property isAutoDownKeyBoard
     * @type {boolean}
     * @since 1.0.3
     * @default true
     */
    isAutoDownKeyBoard: boolean;
    /**
     * @property _inputTypeList
     * @static
     * @type {string[]}
     * @private
     * @since 2.0.0
     */
    private static _inputTypeList;
    /**
     * @method InputText
     * @public
     * @since 1.0.0
     * @param {number} inputType 0 input 1 password 2 multiline
     * @example
     *      var inputText=new InputText();
     *      inputText.initInfo('aa','#ffffff','left',14,'微软雅黑',100,20);
     */
    constructor(inputType?: number);
    /**
     * 初始化输入文本
     * @method init
     * @param htmlElement
     * @public
     * @return {void}
     * @since 1.0.0
     */
    init(htmlElement: any): void;
    /**
     * 被始化输入文件的一些属性
     * @method initInfo
     * @public
     * @since 1.0.0
     * @param {string} text 默认文字
     * @param {string}color 文字颜色
     * @param {string}align 文字的对齐方式
     * @param {number}size  文字大小
     * @param {string}font  文字所使用的字体
     * @param {number}textWidth 文本宽
     * @param {number}textHeight 文本高
     * @param {number}lineHeight 如果是多行,请设置行高
     * @param {boolean}showBorder 是否需要显示边框
     */
    initInfo(text: string, color: string, align: string, size: number, font: string, textWidth: number, textHeight: number, lineHeight?: number, showBorder?: boolean): void;
    /**
     * @property lineSpacing
     * @public
     * @since 2.0.0
     * @param {number} value
     */
    set lineSpacing(value: number);
    get lineSpacing(): number;
    /**
     * 设置文本是否为粗体
     * @property bold
     * @param {boolean} bold true或false
     * @public
     * @since 1.0.3
     */
    set bold(bold: boolean);
    get bold(): boolean;
    /**
     * 设置文本是否倾斜
     * @property italic
     * @param {boolean} italic true或false
     * @public
     * @since 1.0.3
     */
    set italic(italic: boolean);
    get italic(): boolean;
    /**
     * 文本的行高
     * @property textHeight
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 0
     */
    set textHeight(value: number);
    get textHeight(): number;
    /**
     * 文本的宽
     * @property textWidth
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 0
     */
    set textWidth(value: number);
    get textWidth(): number;
    /**
     * 设置文本颜色
     * @property color
     * @param {boolean} italic true或false
     * @public
     * @since 1.0.3
     */
    set color(value: string);
    get color(): string;
    /**
     * 设置或获取是否有边框
     * @property property
     * @param {boolean} show true或false
     * @public
     * @since 1.0.3
     */
    set border(show: boolean);
    get border(): boolean;
    /**
     * 获取或设置输入文本的值
     * 之前的getText 和setText 已废弃
     * @property text
     * @public
     * @since 1.0.3
     * @return {string}
     */
    get text(): string;
    set text(value: string);
    /**
     * 输入文本的最大输入字数
     * @public
     * @since 1.1.0
     * @property maxCharacters
     * @return {number}
     */
    get maxCharacters(): number;
    set maxCharacters(value: number);
    /**
     * 转换为动态文本，位置上下会有偏差，再说，基本用于截图时，需要截到输入文本时
     * @param textField
     */
    convertToTextField(textField?: TextField): TextField;
}

export  class BitmapText extends Container {
    private textures;
    /**
     * 水平对齐方式，默认居中
     * 改变x坐标原点
     */
    get textAlign(): TEXT_ALIGN;
    set textAlign(value: TEXT_ALIGN);
    private _textAlign;
    /**
     * 垂直居中方式，默认居中
     * 改变y坐标原点
     */
    get verticalAlign(): VERTICAL_ALIGN;
    set verticalAlign(value: VERTICAL_ALIGN);
    private _verticalAlign;
    /**
     * 文字间隙，为了有些文本不能紧贴（切图问题），可设置负数解决
     */
    get gap(): number;
    set gap(value: number);
    private _gap;
    /**
     * 文本
     */
    private _text;
    get text(): string;
    /**
     * 设置文本
     */
    set text(value: string);
    /**
     *
     * @param textures 0到9的贴图
     */
    constructor(textures: {
        [text: string]: Texture;
    });
    /**
     * 适配，
     */
    private adaptate;
}

export  class Tween {
    /**
     * 不做特殊处理
     * @constant {number} Tween.NONE
     * @private
     */
    private static NONE;
    /**
     * 循环
     * @constant {number} Tween.LOOP
     * @private
     */
    private static LOOP;
    /**
     * 倒序
     * @constant {number} Tween.REVERSE
     * @private
     */
    private static REVERSE;
    /**
     * @private
     */
    private static _tweens;
    /**
     * @private
     */
    private static IGNORE;
    /**
     * @private
     */
    private static _plugins;
    /**
     * @private
     */
    private static _inited;
    /**
     * @private
     */
    private _target;
    /**
     * @private
     */
    private _useTicks;
    /**
     * @private
     */
    private ignoreGlobalPause;
    /**
     * @private
     */
    private loop;
    /**
     * @private
     */
    private pluginData;
    /**
     * @private
     */
    private _curQueueProps;
    /**
     * @private
     */
    private _initQueueProps;
    /**
     * @private
     */
    private _steps;
    /**
     * @private
     */
    private paused;
    /**
     * @private
     */
    private duration;
    /**
     * @private
     */
    private _prevPos;
    /**
     * @private
     */
    private position;
    /**
     * @private
     */
    private _prevPosition;
    /**
     * @private
     */
    private _stepPosition;
    /**
     * @private
     */
    private passive;
    /**
     * Activate an object and add a Tween animation to the object
     * @param target {any} The object to be activated
     * @param props {any} Parameters, support loop onChange onChangeObj
     * @param pluginData {any} Write realized
     * @param override {boolean} Whether to remove the object before adding a tween, the default value false
     * Not recommended, you can use Tween.removeTweens(target) instead.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 激活一个对象，对其添加 Tween 动画
     * @param target {any} 要激活 Tween 的对象
     * @param props {any} 参数，支持loop(循环播放) onChange(变化函数) onChangeObj(变化函数作用域)
     * @param pluginData {any} 暂未实现
     * @param override {boolean} 是否移除对象之前添加的tween，默认值false。
     * 不建议使用，可使用 Tween.removeTweens(target) 代替。
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static get(target: any, props?: {
        loop?: boolean;
        onChange?: Function;
        onChangeObj?: any;
    }, pluginData?: any, override?: boolean): Tween;
    /**
     * Delete all Tween animations from an object
     * @param target The object whose Tween to be deleted
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 删除一个对象上的全部 Tween 动画
     * @param target  需要移除 Tween 的对象
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static removeTweens(target: any): void;
    /**
     * 移除tween
     * @param tween get返回的Tween实例
     */
    static removeTweenSelf(tween: Tween): void;
    /**
     * Pause all Tween animations of a certain object
     * @param target The object whose Tween to be paused
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 暂停某个对象的所有 Tween
     * @param target 要暂停 Tween 的对象
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static pauseTweens(target: any): void;
    /**
     * Resume playing all easing of a certain object
     * @param target The object whose Tween to be resumed
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 继续播放某个对象的所有缓动
     * @param target 要继续播放 Tween 的对象
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static resumeTweens(target: any): void;
    /**
     * @private
     *
     * @param delta
     * @param paused
     */
    private static tick;
    /**
     * flush方法，为了能加入总循环
     * 默认是锁步的
     * @param delta
     * @param paused ,暂时不用，全局禁止
     */
    static flush(): void;
    private static _lastTime;
    /**
     * @private
     *
     * @param tween
     * @param value
     */
    private static _register;
    /**
     * Delete all Tween
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 删除所有 Tween
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static removeAllTweens(): void;
    /**
     * 创建一个 Tween 对象
     * @private
     * @version
     * @platform Web,Native
     */
    constructor(target: any, props: any, pluginData: any);
    onChange: Function;
    /**
     * @private
     *
     * @param target
     * @param props
     * @param pluginData
     */
    private initialize;
    /**
     * @private
     *
     * @param value
     * @param actionsMode
     * @returns
     */
    setPosition(value: number, actionsMode?: number): boolean;
    /**
     * @private
     *
     * @param startPos
     * @param endPos
     * @param includeStart
     */
    private _runAction;
    /**
     * @private
     *
     * @param step
     * @param ratio
     */
    private _updateTargetProps;
    /**
     * Whether setting is paused
     * @param value {boolean} Whether to pause
     * @returns Tween object itself
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 设置是否暂停
     * @param value {boolean} 是否暂停
     * @returns Tween对象本身
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    setPaused(value: boolean): Tween;
    /**
     * @private
     *
     * @param props
     * @returns
     */
    private _cloneProps;
    /**
     * @private
     *
     * @param o
     * @returns
     */
    private _addStep;
    /**
     * @private
     *
     * @param o
     * @returns
     */
    private _appendQueueProps;
    /**
     * @private
     *
     * @param o
     * @returns
     */
    private _addAction;
    /**
     * @private
     *
     * @param props
     * @param o
     */
    private _set;
    /**
     * Wait the specified milliseconds before the execution of the next animation
     * @param duration {number} Waiting time, in milliseconds
     * @param passive {boolean} Whether properties are updated during the waiting time
     * @returns Tween object itself
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 等待指定毫秒后执行下一个动画
     * @param duration {number} 要等待的时间，以毫秒为单位
     * @param passive {boolean} 等待期间属性是否会更新
     * @returns Tween对象本身
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    wait(duration: number, passive?: boolean): Tween;
    /**
     * Modify the property of the specified object to a specified value
     * @param props {Object} Property set of an object
     * @param duration {number} Duration
     * @param ease {Ease} Easing algorithm
     * @returns {Tween} Tween object itself
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 将指定对象的属性修改为指定值
     * @param props {Object} 对象的属性集合
     * @param duration {number} 持续时间
     * @param ease {Ease} 缓动算法
     * @returns {Tween} Tween对象本身
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    to(props: any, duration?: number, ease?: Function): Tween;
    /**
     * by
     * @param props
     * @param duration
     * @param ease
     */
    by(props: any, duration?: number, ease?: Function): Tween;
    /**
     * Execute callback function
     * @param callback {Function} Callback method
     * @param thisObj {any} this action scope of the callback method
     * @param params {any[]} Parameter of the callback method
     * @returns {Tween} Tween object itself
     * @version
     * @platform Web,Native
     * @example
     * <pre>
     *  Tween.get(display).call(function (a:number, b:string) {
     *      console.log("a: " + a); // the first parameter passed 233
     *      console.log("b: " + b); // the second parameter passed “hello”
     *  }, this, [233, "hello"]);
     * </pre>
     * @language en_US
     */
    /**
     * 执行回调函数
     * @param callback {Function} 回调方法
     * @param thisObj {any} 回调方法this作用域
     * @param params {any[]} 回调方法参数
     * @returns {Tween} Tween对象本身
     * @version
     * @platform Web,Native
     * @example
     * <pre>
     *  Tween.get(display).call(function (a:number, b:string) {
     *      console.log("a: " + a); //对应传入的第一个参数 233
     *      console.log("b: " + b); //对应传入的第二个参数 “hello”
     *  }, this, [233, "hello"]);
     * </pre>
     * @language zh_CN
     */
    call(callback: Function, thisObj?: any, params?: any[]): Tween;
    /**
     * Now modify the properties of the specified object to the specified value
     * @param props {Object} Property set of an object
     * @param target The object whose Tween to be resumed
     * @returns {Tween} Tween object itself
     * @version
     * @platform Web,Native
     */
    /**
     * 立即将指定对象的属性修改为指定值
     * @param props {Object} 对象的属性集合
     * @param target 要继续播放 Tween 的对象
     * @returns {Tween} Tween对象本身
     * @version
     * @platform Web,Native
     */
    set(props: any, target?: any): Tween;
    /**
     * Execute
     * @param tween {Tween} The Tween object to be operated. Default: this
     * @returns {Tween} Tween object itself
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 执行
     * @param tween {Tween} 需要操作的 Tween 对象，默认this
     * @returns {Tween} Tween对象本身
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    play(tween?: Tween): Tween;
    /**
     * Pause
     * @param tween {Tween} The Tween object to be operated. Default: this
     * @returns {Tween} Tween object itself
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 暂停
     * @param tween {Tween} 需要操作的 Tween 对象，默认this
     * @returns {Tween} Tween对象本身
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    pause(tween?: Tween): Tween;
    /**
     * @method Tween#tick
     * @param delta {number}
     * @private
     * @version
     * @platform Web,Native
     */
    $tick(delta: number): void;
}

export  class Button extends Sprite {
    private textureUp;
    private textureDown;
    private textureDisable;
    constructor(tUp: Texture, tDown?: Texture, tDisable?: Texture);
    /**
     * 修改纹理
     * @param tUp
     * @param tDown
     * @param tDisable
     */
    changeTexture(tUp: Texture, tDown?: Texture, tDisable?: Texture): void;
    /**
     * @method  _mouseEvent
     * @param e
     * @private
     */
    private _mouseEvent;
    initButton(): void;
    /**
     * 设置是否为点击状态
     * @property clicked
     * @param {boolean} value
     * @public
     * @since 2.0.0
     * @default false
     */
    set clicked(value: boolean);
    get clicked(): boolean;
    private _clicked;
    set textureStatusEnable(value: boolean);
    set enabled(value: boolean);
    destroy(): void;
}

export  class FrameAni extends Container {
    private showImage;
    /**
     * 所有的纹理
     */
    private texturesAll;
    /**
     * 从0开始 锁步会跳帧
     * 每一帧就是一张图片，从0开始
     */
    private set currentFrame(value);
    /**
     * 不开放currentFrame的get方法，因为权限要一致的话set也要变public，
     * 但其实外部set赋值是无效的，用reset才有效，所以这里同步给一个方法
     * 返回0到totalFrames-1
     */
    getCurrentFrame(): number;
    /**
     * 所有帧数
     */
    get totalFrames(): number;
    /**
     * 是否运行中
     */
    private isPlay;
    /**
     * 循环次数
     */
    private loop;
    /**
     * 开始时间
     */
    private startTime;
    /**
     * 所有时间,播完所用时间
     */
    private allTime;
    /**
     * 播放完的回调
     */
    private callback;
    /**
     * 每秒的帧数，默认30帧
     */
    private _frameRate;
    get frameRate(): number;
    set frameRate(value: number);
    /**
     *
     * @param texturesAll 所有的资源数组
     */
    constructor(texturesAll: Texture[]);
    private count;
    private onEnterFrame;
    /**
     * 从0开始播放
     */
    play(loop?: number, callback?: Function): void;
    /**
     * 重置为frame，不播放
     */
    reset(frame?: number): void;
    /**
     * 重置所有贴图，会置0停止，不设置播放，否则原先的play里的startTime及loop不好维护
     * @param texturesAll
     */
    resetTexturesAll(texturesAll: Texture[]): void;
}

export  class Ease {
    /**
     * @version
     * @platform Web,Native
     */
    constructor();
    /**
     * get.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static get(amount: number): (t: number) => number;
    /**
     * get pow in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getPowIn(pow: number): (t: number) => number;
    /**
     * get pow out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getPowOut(pow: number): (t: number) => number;
    /**
     * get pow in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getPowInOut(pow: number): (t: number) => number;
    /**
     * quad in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quadIn: (t: number) => number;
    /**
     * quad out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quadOut: (t: number) => number;
    /**
     * quad in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quadInOut: (t: number) => number;
    /**
     * cubic in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static cubicIn: (t: number) => number;
    /**
     * cubic out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static cubicOut: (t: number) => number;
    /**
     * cubic in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static cubicInOut: (t: number) => number;
    /**
     * quart in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quartIn: (t: number) => number;
    /**
     * quart out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quartOut: (t: number) => number;
    /**
     * quart in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quartInOut: (t: number) => number;
    /**
     * quint in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quintIn: (t: number) => number;
    /**
     * quint out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quintOut: (t: number) => number;
    /**
     * quint in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static quintInOut: (t: number) => number;
    /**
     * sine in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static sineIn(t: number): number;
    /**
     * sine out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static sineOut(t: number): number;
    /**
     * sine in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static sineInOut(t: number): number;
    /**
     * get back in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getBackIn(amount: number): (t: number) => number;
    /**
     * back in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static backIn: (t: number) => number;
    /**
     * get back out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getBackOut(amount: number): (t: any) => number;
    /**
     * back out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static backOut: (t: any) => number;
    /**
     * get back in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getBackInOut(amount: number): (t: number) => number;
    /**
     * back in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static backInOut: (t: number) => number;
    /**
     * circ in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static circIn(t: number): number;
    /**
     * circ out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static circOut(t: number): number;
    /**
     * circ in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static circInOut(t: number): number;
    /**
     * bounce in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static bounceIn(t: number): number;
    /**
     * bounce out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static bounceOut(t: number): number;
    /**
     * bounce in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static bounceInOut(t: number): number;
    /**
     * get elastic in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getElasticIn(amplitude: number, period: number): (t: number) => number;
    /**
     * elastic in.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic in。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static elasticIn: (t: number) => number;
    /**
     * get elastic out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getElasticOut(amplitude: number, period: number): (t: number) => number;
    /**
     * elastic out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static elasticOut: (t: number) => number;
    /**
     * get elastic in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static getElasticInOut(amplitude: number, period: number): (t: number) => number;
    /**
     * elastic in out.See example.
     * @version
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic in out。请查看示例
     * @version
     * @platform Web,Native
     * @language zh_CN
     */
    static elasticInOut: (t: number) => number;
}

export  class ScrollPage extends Container {
    /**
     * 横向还是纵向 默认为纵向
     * @property isVertical
     * @type {boolean}
     * @private
     * @since 1.0.0
     * @default true
     */
    protected isVertical: boolean;
    /**
     * 可见区域的宽
     * @property viewWidth
     * @type {number}
     * @private
     * @since 1.0.0
     * @default 0
     */
    private viewWidth;
    /**
     * 可见区域的高
     * @property viewHeight
     * @type {number}
     * @private
     * @since 1.0.0
     * @default 0
     */
    private viewHeight;
    private _tweenId;
    /**
     * 整个滚动的最大距离值
     * @property maxDistance
     * @type {number}
     * @public
     * @since 1.0.0
     * @default 1040
     */
    maxDistance: number;
    /**
     * @property 滚动距离
     * @type {number}
     * @protected
     * @default 0
     * @since 1.0.0
     */
    protected distance: number;
    /**
     * 最小鼠标滑动距离
     * @type {number}
     */
    private minDis;
    /**
     * 遮罩对象
     * @property maskObj
     * @since 1.0.0
     * @private
     * @type {Graphics}
     */
    private maskObj;
    /**
     * 真正的容器对象，所有滚动的内容都应该是添加到这个容器中
     * @property view
     * @public
     * @since 1.0.0
     * @type {Container}
     */
    view: Container;
    /**
     * 最后鼠标经过的坐标值
     * @property lastValue
     * @private
     * @since 1.0.0
     * @type {number}
     */
    private lastValue;
    /**
     * 速度
     * @property speed
     * @protected
     * @since 1.0.0
     * @type {number}
     */
    protected speed: number;
    /**
     * 加速度
     * @property addSpeed
     * @private
     * @since 1.0.0
     * @type {number}
     */
    private addSpeed;
    /**
     * 是否是停止滚动状态
     * @property isStop
     * @public
     * @since 1.0.0
     * @type {boolean}
     * @default true
     */
    isStop: boolean;
    /**
     * 滚动的最大速度，直接影响一次滑动之后最长可以滚多远
     * @property maxSpeed
     * @public
     * @since 1.0.0
     * @default 100
     * @type {number}
     */
    maxSpeed: number;
    /**
     * 摩擦力,值越大，减速越快
     * @property fSpeed
     * @public
     * @since 1.0.0
     * @default 20
     * @type {number}
     */
    fSpeed: number;
    protected paramXY: string;
    private stopTimes;
    private isMouseDownState;
    /**
     * 是否是通过scrollTo方法在滑动中
     * @property autoScroll
     * @since 1.0.2
     * @type {boolean}
     * @private
     * @default false
     */
    private autoScroll;
    isSpringBack: boolean;
    /**
     * 构造函数
     * @method  ScrollPage
     * @param {number} vW 可视区域宽
     * @param {number} vH 可视区域高
     * @param {number} maxDistance 最大滚动的长度
     * @param {boolean} isVertical 是纵向还是横向，也就是说是滚x还是滚y,默认值为沿y方向滚动
     * @example
     *      var sPage=new ScrollPage(640,s.stage.viewRect.height,4943);
     *      sPage.isSpringBack = false;//是否回弹
     *      stage.addChild(sPage);
     *      sPage.view.addChild(view);
     *      sPage.y=stage.viewRect.y;
     *
     */
    constructor(vW: number, vH: number, maxDistance: number, isVertical?: boolean, isFull?: boolean);
    /**
     * 设置可见区域，可见区域的坐标始终在本地坐标中0,0点位置
     * @method setViewRect
     * @param {number}w 设置可见区域的宽
     * @param {number}h 设置可见区域的高
     * @param {boolean} isVertical 方向
     * @public
     * @since 1.1.1
     */
    setViewRect(w: number, h: number, isVertical: boolean): void;
    private onMouseEvent;
    /**
     * 滚到指定的坐标位置
     * @method scrollTo
     * @param {number} dis 需要去到的位置,初始位置0,最大为maxDistance- s.viewWidth : s.viewHeight
     * @param {number} time 滚动需要的时间 默认为0 即没有动画效果直接跳到指定页，毫秒
     * @since 1.1.1
     * @public
     */
    scrollTo(dis: number, time?: number): void;
    destroy(): void;
}

export interface IScrollListItem extends DisplayObject {
    initData(id: number, data: any): void;
    id: number;
    data: number;
}

export  class ScrollList extends ScrollPage {
    private _items;
    private _itemW;
    private _itemH;
    private _itemRow;
    private _itemCol;
    private _itemCount;
    private _itemClass;
    private _isInit;
    data: Array<any>;
    private downL;
    private _cols;
    private _disParam;
    private _lastFirstId;
    /**
     * 获取下拉滚动的loadingView对象
     * @property loadingView
     * @since 1.0.9
     * @return {DisplayObject}
     */
    get loadingView(): DisplayObject;
    /**
     * 构造函数
     * @method ScrollList
     * @param {Class} itemClassName 可以做为Item的类
     * @param {number} itemWidth item宽
     * @param {number} itemHeight item高
     * @param {number} vW 列表的宽
     * @param {number} vH 列表的高
     * @param {boolean} isVertical 是横向滚动还是纵向滚动 默认是纵向
     * @param {number} cols 分几列，默认是1列
     * @since 1.0.9
     */
    constructor(itemClassName: any, itemWidth: number, itemHeight: number, vW: number, vH: number, isVertical?: boolean, cols?: number);
    /**
     * 更新列表数据
     * @method updateData
     * @param {Array} data
     * @param {boolean} isReset 是否重围数据列表。默认为true
     * @since 1.0.9
     */
    updateData(data: Array<any>, isReset?: boolean): void;
    private _updateId;
    private flushData;
    /**
     * 设置可见区域，可见区域的坐标始终在本地坐标中0,0点位置
     * @method setViewRect
     * @param {number}w 设置可见区域的宽
     * @param {number}h 设置可见区域的高
     * @param {boolean} isVertical 方向
     * @public
     * @since 1.1.1
     */
    setViewRect(w: number, h: number, isVertical: boolean): void;
    private _updateViewRect;
    /**
     * 设置加载数据时显示的loading对象
     * @since 1.0.9
     * @method setLoading
     * @param {DisplayObject} downLoading
     */
    setLoading(downLoading: DisplayObject): void;
    destroy(): void;
}

export  class ShowWord extends TextField {
    /**
     *
     * @param text 文本 例子：这里是生命值，闯关失败后\n都会扣除一点生命值
     * @param deltaTime 文字间隔时间，毫秒计
     * @param callback 播放完后的回调
     */
    playWords(text: string, deltaTime?: number, callback?: Function): void;
}

export  class MovieClip extends Container {
    /**
     * 原始数据，接口在解析类上，不搞先
     */
    private rawData;
    /**
     * 锁步将按时间间隔来执行动画
     */
    lockStep: boolean;
    /**
     * mc的当前帧,从1开始
     * @property currentFrame
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 1
     * @readonly
     */
    get currentFrame(): number;
    /**
     * @property _curFrame
     * @type {number}
     * @private
     * @since 2.0.0
     * @default 1
     */
    private _curFrame;
    /**
     * 当前动画是否处于播放状态
     * @property isPlaying
     * @readOnly
     * @public
     * @since 1.0.0
     * @type {boolean}
     * @default true
     * @readonly
     */
    get isPlaying(): boolean;
    /**
     * @property _isPlaying
     * @type {boolean}
     * @private
     * @since 2.0.0
     * @default true
     */
    private _isPlaying;
    /**
     * 动画的播放方向,是顺着播还是在倒着播
     * @property isFront
     * @public
     * @since 1.0.0
     * @type {boolean}
     * @default true
     * @readonly
     */
    get isFront(): boolean;
    /**
     * @property _isFront
     * @type {boolean}
     * @private
     * @default true
     */
    private _isFront;
    /**
     * 当前动画的总帧数
     * @property totalFrames
     * @public
     * @since 1.0.0
     * @type {number}
     * @default 0
     * @readonly
     */
    get totalFrames(): number;
    get videoWidth(): number;
    get videoHeight(): number;
    /**
     * 锁步的时间间隔，按fps定,毫秒
     */
    private timeInterval;
    /**
     * 前提引擎按60设置
     */
    private deltaFrame;
    /**
     * 中间帧计时
     */
    private frameCount;
    /**
     * 构造函数
     * @method MovieClip
     * @public
     * @param mv VideoEntity格式，这里不给了
     */
    constructor(mv?: any);
    /**
     * 可以手动用init，
     * @param mv
     */
    init(mv: any): void;
    private initChildren;
    /**
     *
     * @param imagekey 对应的imagekey
     * @param imageUrl 图片路径，以后考虑支持多种形式
     */
    setImage(imagekey: string, imageUrl: string): void;
    /**
     * 调用止方法将停止当前帧
     * @method stop
     * @public
     * @since 1.0.0
     */
    stop(): void;
    /**
     * 将播放头向后移一帧并停在下一帧,如果本身在最后一帧则不做任何反应
     * @method nextFrame
     * @since 1.0.0
     * @public
     */
    nextFrame(): void;
    /**
     * 将播放头向前移一帧并停在下一帧,如果本身在第一帧则不做任何反应
     * @method prevFrame
     * @since 1.0.0
     * @public
     */
    prevFrame(): void;
    /**
     * 将播放头跳转到指定帧并停在那一帧,如果本身在第一帧则不做任何反应
     * @method gotoAndStop
     * @public
     * @since 1.0.0
     * @param {number} frameIndex 批定帧的帧数或指定帧的标签名
     */
    gotoAndStop(frameIndex: number): void;
    /**
     * 如果当前时间轴停在某一帧,调用此方法将继续播放.
     * @method play
     * @public
     * @since 1.0.0
     */
    play(isFront?: boolean): void;
    /**
     * @property _lastFrame
     * @type {number}
     * @private
     * @default 0
     */
    private _lastFrame;
    /**
     * 刚执行到的帧数，用于帧监听时判断用，刚好执行到当前帧，而不是之前保留的状态
     * 不是60fps的videoItem的中间有几帧curFrame会不变，判断只执行一次监听时会出错，刚好动画满帧60fps时就无所谓
     */
    get isInTimeFrame(): boolean;
    /**
     * 将播放头跳转到指定帧并从那一帧开始继续播放
     * @method gotoAndPlay
     * @public
     * @since 1.0.0
     * @param {number} frameIndex 批定帧的帧数或指定帧的标签名
     * @param {boolean} isFront 跳到指定帧后是向前播放, 还是向后播放.不设置些参数将默认向前播放
     */
    gotoAndPlay(frameIndex: number, isFront?: boolean): void;
    /**
     * 记录的startAniRange对应的fun
     */
    private startAniRangeFun;
    /**
     * 优先级最高，会覆盖
     * @param beginFrame 默认1
     * @param endFrame 默认 this.totalFrames
     * @param loops 默认1 小于等于0为无线循环，
     * @param callback 动画循环次数播放结束时回调，无限循环时不会有回调
     */
    startAniRange(beginFrame?: number, endFrame?: number, loops?: number, callback?: Function): void;
    /**
     * 开始时间，每次有play的时候就需要重置now
     * 锁步思想，设置开始时间，后面每帧实际时间与开始时间相减，得到当前帧数
     *
     */
    private startTime;
    /**
     * 开始时的frame
     */
    private startFrame;
    /**
     * 与startFrame相间隔的帧数量，绝对值
     */
    private lastDeltaFrame;
    /**
     * 锁步时的每次end的标识
     */
    private _endMark;
    commonDeltaTime: number;
    updateFrame(): void;
    private getCurFrameWhenLockStep;
    /**
     * 重写刷新
     * @method update
     * @public
     * @since 1.0.0
     */
    update(): void;
    destroy(): void;
    private updateMask;
    /**
     * 用源数据拷贝一份，用相应参数
     * @param frames 源数据
     * @param x 偏移x，默认0
     * @param y 偏移y，默认0
     * @param scaleX 相对缩放x，默认1
     * @param scaleY 相对缩放y，默认1
     * @param rotation 相对旋转,角度制，默认0
     * @param anchorX 相对锚点x，默认0
     * @param anchorY 相对锚点y，默认0
     */
    static deepCopyFrames(frames: any, x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, anchorX?: number, anchorY?: number): any[];
}

export  const getBezierEasing: (a: any, b: any, c: any, d: any, nm?: any) => any;

export  function buildBezierProps(pt1: any, pt2: any, pt3: any, pt4: any, startIndex: any, endIndex: any, points: any, fnc: any, limit?: number): void;

export  function buildBezierEaserProps(startValue: number[], endValue: number[], outV: any, inV: any, startIndex: number, endIndex: number, points: any, useH: boolean, limit?: number): void;

export  class Lottie extends Container {
    /**
     * 原始数据，尽量只获取，不修改
     */
    private rawData;
    /**
     * 总帧数
     */
    get totalFrames(): number;
    /**
     * 锁步的时间间隔，按fps定,毫秒
     */
    private timeInterval;
    /**
     * 按帧率计算，60为1，30为2，
     */
    private deltaFrame;
    get videoWidth(): number;
    get videoHeight(): number;
    /**
     * 供循环用
     */
    private loops;
    private callback;
    constructor(data: any);
    /**
     * 暂时不考虑重复init
     * @param data
     */
    init(data: LottieData): void;
    private initChildren;
    private initState;
    /**
     * 为了那啥 修改 loop默认0
     */
    play(loop?: number, callback?: () => void): void;
    /**
     * 移除所有的Tween，临时方法
     * @param isReset 是否回到初始状态，默认否
     */
    stop(isReset?: boolean): void;
    private addTweens;
    /**
     * 来吧重写，，。专干loopOut和loopIn
     * @param dis
     * @param type
     */
    private addTween;
    /**
     * 对所有的进行刷新，，根据cParent进行迭代刷新
     * 层级有问题，只能平铺，手动计算矩阵
     * 因为要平铺，所以记录cParent和ind  从1开始，也许只需要+1就行，还是用ind记录查找吧
     * 遍历找
     */
    updateTransform(): void;
    private findChildByInd;
    private _recursivePostUpdateTransformAA;
    /**
     * 加个方法，前两个参数都没用，为了一头牛
     * @param beginFrame
     * @param endFrame
     * @param loops
     * @param callback
     */
    startAniRange(beginFrame?: number, endFrame?: number, loops?: number, callback?: () => void): void;
    destroy(): void;
}

export  function lottieToSvgaData(data: LottieData): any;

export {};

export  class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): this;
    copy(v: Vector3): this;
    clone(): Vector3;
    add(v: Vector3): this;
    addScalar(s: number): this;
    addVectors(a: Vector3, b: Vector3): this;
    addScaledVector(v: Vector3, s: number): this;
    sub(v: Vector3): this;
    subScalar(s: any): this;
    subVectors(a: Vector3, b: Vector3): this;
    multiplyScalar(scalar: number): this;
    multiplyVectors(a: Vector3, b: Vector3): this;
    divide(v: Vector3): this;
    divideScalar(scalar: number): this;
    cross(v: Vector3): this;
    crossVectors(a: Vector3, b: Vector3): this;
    dot(v: Vector3): number;
    /**
     * 长度
     */
    length(): number;
    lengthSq(): number;
    /**
     * 标准化，长度为1
     */
    normalize(): this;
    distanceTo(v: Vector3): number;
    distanceToSquared(v: Vector3): number;
    min(v: Vector3): this;
    max(v: Vector3): this;
    clamp(min: Vector3, max: Vector3): this;
    clampScalar(minVal: number, maxVal: number): this;
    clampLength(min: number, max: number): this;
    /**
     *
     * @param m
     */
    applyMatrix4(m: Matrix4): this;
    /**
     * 从矩阵获得位置
     * @param m
     */
    setFromMatrixPosition(m: Matrix4): this;
    /**
     * 从矩阵获得缩放值
     * @param m
     */
    setFromMatrixScale(m: Matrix4): this;
    setFromMatrixColumn(m: Matrix4, index: number): this;
    transformDirection(m: Matrix4): this;
    /**
     * 转换成屏幕坐标，范围-1到1，可根据stage转换成stage上坐标，或者canvas坐标
     * @param camera
     */
    project(camera: Camera): this;
    unproject(camera: Camera): this;
    equals(v: Vector3): boolean;
    fromArray(array: number[] | Float32Array, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
}

export  class Quaternion {
    private _x;
    private _y;
    private _z;
    private _w;
    constructor(x?: number, y?: number, z?: number, w?: number);
    static slerp(qa: any, qb: any, qm: any, t: any): any;
    static slerpFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any, t: any): void;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    set(x: any, y: any, z: any, w: any): this;
    clone(): Quaternion;
    copy(quaternion: any): this;
    setFromEuler(euler: any, update?: any): this;
    setFromAxisAngle(axis: any, angle: any): this;
    setFromRotationMatrix(m: any): this;
    setFromUnitVectors: (vFrom: any, vTo: any) => any;
    angleTo(q: any): number;
    rotateTowards(q: any, step: any): this;
    inverse(): this;
    conjugate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    normalize(): this;
    multiply(q: any, p: any): this;
    premultiply(q: any): this;
    multiplyQuaternions(a: any, b: any): this;
    slerp(qb: any, t: any): this;
    equals(quaternion: any): boolean;
    fromArray(array: number[] | Float32Array, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    onChange(callback: any): this;
    private onChangeCallback;
}

export  class Matrix4 {
    elements: Float32Array;
    constructor();
    /**
     * 初始化本矩阵
     */
    setIdentity(): this;
    set(n11: any, n12: any, n13: any, n14: any, n21: any, n22: any, n23: any, n24: any, n31: any, n32: any, n33: any, n34: any, n41: any, n42: any, n43: any, n44: any): this;
    copy(src: Matrix4): this;
    clone(): Matrix4;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    /**
     * Multiply the matrix from the right.
     * @param other The multiply matrix
     * @return this
     */
    concat(other: Matrix4): this;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    /**
     * Multiply the three-dimensional vector.
     * @param pos  The multiply vector
     * @return The result of multiplication(Float32Array)
     */
    multiplyVector3(pos: Vector3): Vector3;
    /**
     * Multiply the four-dimensional vector.
     * @param pos  The multiply vector
     * @return The result of multiplication(Float32Array)
     */
    /**
     * Transpose the matrix.转置
     * @return this
     */
    transpose(): this;
    /**
     * Calculate the inverse matrix of specified matrix, and set to this.将一矩阵的逆赋给自己
     * @param other The source matrix
     * @return this
     */
    setInverseOf(other: Matrix4): this;
    /**
     * Calculate the inverse matrix of this, and set to this.
     * @return this
     */
    invert(): this;
    /**
     * 设置为正交投影矩阵
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @return this
     */
    setOrtho(left: number, right: number, top: number, bottom: number, near: number, far: number): this;
    /**
     * Multiply the orthographic projection matrix from the right.
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
     * @return this
     */
    ortho(left: any, right: any, top: any, bottom: any, near: any, far: any): this;
    /**
     * Set the perspective projection matrix.
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    setFrustum(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
    /**
     * Multiply the perspective projection matrix from the right.
     * @param left The coordinate of the left of clipping plane.
     * @param right The coordinate of the right of clipping plane.
     * @param bottom The coordinate of the bottom of clipping plane.
     * @param top The coordinate of the top top clipping plane.
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    frustum(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
    /**
     * Set the perspective projection matrix by fovy and aspect.
     * @param fovy The angle between the upper and lower sides of the frustum.
     * @param aspect The aspect ratio of the frustum. (width/height)
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    setPerspective(fovy: number, aspect: number, near: number, far: number): this;
    makePerspective(left: any, right: any, top: any, bottom: any, near: any, far: any): this;
    /**
     * Multiply the perspective projection matrix from the right.
     * @param fovy The angle between the upper and lower sides of the frustum.
     * @param aspect The aspect ratio of the frustum. (width/height)
     * @param near The distances to the nearer depth clipping plane. This value must be plus value.
     * @param far The distances to the farther depth clipping plane. This value must be plus value.
     * @return this
     */
    perspective(fovy: any, aspect: any, near: any, far: any): this;
    /**
     * Set the matrix for scaling.
     * @param x The scale factor along the X axis
     * @param y The scale factor along the Y axis
     * @param z The scale factor along the Z axis
     * @return this
     */
    setScale(x: any, y: any, z: any): this;
    /**
     * Multiply the matrix for scaling from the right.
     * @param x The scale factor along the X axis
     * @param y The scale factor along the Y axis
     * @param z The scale factor along the Z axis
     * @return this
     */
    scale(x: any, y: any, z: any): this;
    getMaxScaleOnAxis(): number;
    /**
     * Set the matrix for translation.
     * @param x The X value of a translation.
     * @param y The Y value of a translation.
     * @param z The Z value of a translation.
     * @return this
     */
    setTranslate(x: any, y: any, z: any): this;
    /**
     * Multiply the matrix for translation from the right.
     * @param x The X value of a translation.
     * @param y The Y value of a translation.
     * @param z The Z value of a translation.
     * @return this
     */
    translate(x: any, y: any, z: any): this;
    /**
     * Set the matrix for rotation.
     * The vector of rotation axis may not be normalized.
     * @param angle The angle of rotation (degrees)
     * @param x The X coordinate of vector of rotation axis.
     * @param y The Y coordinate of vector of rotation axis.
     * @param z The Z coordinate of vector of rotation axis.
     * @return this
     */
    setRotate(angle: any, x: any, y: any, z: any): this;
    /**
     * Multiply the matrix for rotation from the right.
     * The vector of rotation axis may not be normalized.
     * @param angle The angle of rotation (degrees)
     * @param x The X coordinate of vector of rotation axis.
     * @param y The Y coordinate of vector of rotation axis.
     * @param z The Z coordinate of vector of rotation axis.
     * @return this
     */
    rotate(angle: any, x: any, y: any, z: any): this;
    /**
     * Set the viewing matrix.
     * @param eyeX, eyeY, eyeZ The position of the eye point.
     * @param centerX, centerY, centerZ The position of the reference point.
     * @param upX, upY, upZ The direction of the up vector.
     * @return this
     */
    setLookAt(eyeX: any, eyeY: any, eyeZ: any, centerX: any, centerY: any, centerZ: any, upX: any, upY: any, upZ: any): this;
    lookAt(eye: Vector3, target: Vector3, up: Vector3): this;
    /**
     * Multiply the matrix for project vertex to plane from the right.
     * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
     * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
     * @return this
     */
    dropShadow(plane: any, light: any): this;
    /**
     * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
     * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
     * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
     * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
     * @return this
     */
    dropShadowDirectionally(normX: any, normY: any, normZ: any, planeX: any, planeY: any, planeZ: any, lightX: any, lightY: any, lightZ: any): this;
    makeRotationFromQuaternion(q: any): this;
    compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
    decompose(position: any, quaternion: any, scale: any): this;
    determinant(): number;
    extractRotation(m: any): this;
}

export  class Camera extends Object3D {
    worldMatrixInverse: Matrix4;
    projectionMatrix: Matrix4;
    projectionMatrixInverse: Matrix4;
    constructor();
    /**
     * 重写
     * @param recursive
     */
    clone(): Camera;
    copy(source: any, recursive?: any): this;
    getWorldDirection(target: Vector3): Vector3;
    updateWorldMatrix(): void;
}

export  class PerspectiveCamera extends Camera {
    fov: number;
    aspect: number;
    near: number;
    far: number;
    zoom: number;
    focus: number;
    /**
     *
     * @param fov 张角
     * @param aspect 长宽比例width/height
     * @param near 最近近距离
     * @param far 最远远距离
     */
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    set(fov?: number, aspect?: number, near?: number, far?: number): void;
    copy(source: PerspectiveCamera, recursive?: boolean): this;
    /**
     * 更新
     */
    updateProjectionMatrix(): void;
}

export  class BaseShader extends GLShader {
    /**
     * 作为该着色器的标识
     */
    _glShaderKey: string;
    constructor(gl: WebGLRenderingContext);
}

export  enum shaderReplaceStr {
    POINT_LIGHTS_NUM = "POINT_LIGHTS_NUM",
    DIR_LIGHTS_NUM = "DIR_LIGHTS_NUM"
}

export  class LightShader extends GLShader {
    /**
     * 作为该着色器的标识
     */
    _glShaderKey: string;
    constructor(gl: WebGLRenderingContext, pointLightsNum?: number, dirLightsNum?: number);
}

export  enum EnvBlendType {
    ENVMAP_BLENDING_MULTIPLY = "ENVMAP_BLENDING_MULTIPLY",
    ENVMAP_BLENDING_MIX = "ENVMAP_BLENDING_MIX",
    ENVMAP_BLENDING_ADD = "ENVMAP_BLENDING_ADD"
}

export  enum RenderSideType {
    /**
     * 正面才渲染，逆时针顶点
     */
    FrontSide = 0,
    /**
     * 反面才渲染，顺时针顶点顺序
     */
    BackSide = 1,
    /**
     * 两面都渲染
     */
    DoubleSide = 2
}

export  class BaseMaterial extends HashObject {
    /**
     * 十六进制 hex2rgb ,转成0到1的数组
     */
    private _color;
    private _colorArr;
    get color(): number;
    set color(value: number);
    get colorArr(): Float32Array;
    /**
     * 透明度0到1
     */
    alpha: number;
    /**
     * 漫反射贴图，一般贴图
     */
    map: Texture;
    /**
     * 环境贴图
     */
    envMap: Texture;
    combine: EnvBlendType;
    reflectivity: number;
    morphTargets: boolean;
    morphNormals: boolean;
    skinning: boolean;
    /**
     * 是否使用顶点颜色
     */
    useVertexColor: boolean;
    /**
     * 是否用线框形式绘制
     */
    wireframe: boolean;
    /**
     * 材质渲染面
     */
    side: RenderSideType;
    /**
     * 场景的雾化是否对材质有效
     */
    useFog: boolean;
    /**
     * 是否光照影响
     */
    _lightAffect: boolean;
    constructor(parameters?: BaseMaterialParamsInt);
    copy(material: BaseMaterial): this;
    clone(): BaseMaterial;
    destroy(): void;
}

export interface BaseMaterialParamsInt {
    color?: number;
    alpha?: number;
    map?: Texture;
    wireframe?: boolean;
    side?: RenderSideType;
    envMap?: Texture;
    reflectivity?: number;
    useVertexColor?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
    skinning?: boolean;
}

export  function getCusShader(render: WebglRenderer, material: BaseMaterial, lights: LightsConfig, mesh: Mesh3D, maxBones?: number, useVertexTexture?: boolean, fog?: any): CusShader;

export class CusShader extends GLShader {
    /**
     * 以后回收时用TODO
     */
    usedTimes: number;
    /**
     * 作为该着色器的标识
     */
    _glShaderKey: string;
    /**
     *
     * @param gl
     * @param parameters
     */
    constructor(gl: WebGLRenderingContext, parameters: ShaderParametersInt);
}

export {};

export  class Bone3D extends Object3D {
    par: number;
    pos: any;
    rotq: any;
    scl: any;
    constructor();
}

export  class Skeleton3D extends HashObject {
    bones: Bone3D[];
    boneMatrices: Float32Array;
    boneInverses: Matrix4[];
    boneTexture: BaseTexture;
    boneTextureSize: number;
    constructor(bones?: Bone3D[], boneInverses?: Matrix4[]);
    calculateInverses(): void;
    pose(): void;
    /**
     * skinnedMesh3D里面调用
     */
    update(): void;
    clone(): Skeleton3D;
    getBoneByName(name: string): Bone3D;
    destroy(): void;
}

export  class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): this;
    copy(v: Vector2): this;
    clone(): Vector2;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    applyMatrix3(m: any): this;
    dot(v: any): number;
    cross(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    angle(): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset: any): this;
    toArray(array?: any[], offset?: number): any[];
}

export  class Sphere {
    center: Vector3;
    radius: number;
    constructor(center?: Vector3, radius?: number);
    set(center: Vector3, radius: number): this;
    setFromPoints(points: Vector3[], optionalCenter?: Vector3): this;
    clone(): Sphere;
    copy(sphere: Sphere): this;
    empty(): boolean;
    containsPoint(point: Vector3): boolean;
    distanceToPoint(point: Vector3): number;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Sphere): boolean;
    clampPoint(point: Vector3, target?: Vector3): Vector3;
    getBoundingBox(target?: Box3): Box3;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(sphere: Sphere): boolean;
}

export  class Box3 {
    min: Vector3;
    max: Vector3;
    constructor(min?: Vector3, max?: Vector3);
    set(min: Vector3, max: Vector3): this;
    clone(): Box3;
    copy(box: Box3): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    /**
     * 获取中心点
     * @param out
     */
    getCenter(out?: Vector3): Vector3;
    /**
     * 获取对角线向量
     * @param out
     */
    getSize(out?: Vector3): Vector3;
    /**
     *
     * @param array 一般是顶点一维数组
     */
    setFromArray(array: number[] | Float32Array): this;
    setFromCenterAndSize(center: Vector3, size: Vector3): this;
    setFromPoints(points: Vector3[]): this;
    setFromObject(object: Object3D): this;
    /**
     * 为了包含该点坐标
     * @param point
     */
    expandByPoint(point: Vector3): this;
    /**
     * 为了xyz分别根据vector进行扩展
     * @param vector
     */
    expandByVector(vector: Vector3): this;
    expandByScalar(scalar: number): this;
    expandByObject(object: Object3D): this;
    containsPoint(point: Vector3): boolean;
    containsBox(box: Box3): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    clampPoint(point: Vector3, out?: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    getBoundingSphere(out?: Sphere): Sphere;
    intersect(box: Box3): this;
    union(box: Box3): this;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(box: Box3): boolean;
}

export  class Geometry extends HashObject {
    /**
     * 顶点坐标3，颜色3，uv2，法线3，到时还是搞成three的那种方式，多属性对象，统一放到vao上
     */
    _vertByteSize: number;
    _vertices: Float32Array | number[];
    _colors: Float32Array | number[];
    _uvs: Float32Array | number[];
    _normals: Float32Array | number[];
    _indices: Uint16Array | number[];
    _skinWeight: Float32Array | number[];
    _skinIndex: Float32Array | number[];
    bones: Bone3D[];
    boundingBox: Box3;
    boundingSphere: Sphere;
    /**
     * 是否按面检测
     */
    doHitFace: boolean;
    /**
     * 为了不同渲染器上下文对应自己的vao，不管program吧，可能不同着色器程序，带的attr可能不一样，
     * 在3d的插件上处理
     * 建vao，添加attr属性
     * 激活绑定vao
     * 绑定buffer，
     * 上传buffer数据
     * 绘制
     *
     */
    _glVaoBuffer: {
        [key: number]: VaoBufferInt;
    };
    /**
     * 记录顶点数据用，包括坐标，颜色，uv，法线
     */
    _attrBuffer: BatchBuffer;
    /**
     * 顶点变形数据数组
     */
    _morphPositions: Float32Array[] | number[][];
    /**
     * 法线变形数据数组
     */
    _morphNormals: Float32Array[] | number[][];
    /**
     *
     * @param vertices
     * @param indices
     * @param normals
     * @param colors
     * @param uvs
     */
    constructor(vertices: Float32Array | number[], indices?: Uint16Array | number[], normals?: Float32Array | number[], colors?: Float32Array | number[], uvs?: Float32Array | number[]);
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    destroy(): void;
}

export interface VaoBufferInt {
    /**
     * 索引
     */
    indexBuffer?: GLBuffer;
    /**
     * 顶点相关属性，位置，颜色，uv，法线
     */
    attrBuffer: GLBuffer;
    /**
     * 变形位置数据，数组，最大长度8
     */
    morphTargetBuffers?: GLBuffer[];
    /**
     * 变形法线数据，数组，最大长度4
     */
    morphNormalBuffers?: GLBuffer[];
    /**
     * 这两个buffer用于骨骼
     */
    skinWeightBuffer?: GLBuffer;
    skinIndexBuffer?: GLBuffer;
    /**
     * 需要根据着色器程序id作为指向，
     * 灯光重置过着色器，基本要重来一次，上面的buffer可以留着，重新addAttr到新的vao
     */
    vaos: {
        [key: string]: VertexArrayObject;
    };
}

export  class LightMaterial extends BaseMaterial {
    constructor(parameters?: any);
    clone(): any;
}

export  const defaultVertexShader3d = "attribute vec3 aPosition;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uModelMatrix;\nvoid main() {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4( aPosition, 1.0 );\n}";

export  const defaultFragmentShader3d = "void main() {\n    gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

export  class ShaderMaterial extends HashObject {
    protected vertexShader: string;
    protected fragmentShader: string;
    uniforms: {
        [key: string]: {
            type: UniformType;
            value: any;
        };
    };
    /**
     * key就是渲染器唯一id
     */
    protected shaders: {
        [key: string]: GLShader;
    };
    /**
     * 标记下。
     * 本来想直接用_instanceType判断，但是后续考虑到SpriteMaterial，SkyMaterial都会继承这个，会重写_instanceType
     */
    isShaderMaterial: boolean;
    constructor(vertexShader?: string, fragmentShader?: string, uniforms?: {
        [key: string]: {
            type: UniformType;
            value: any;
        };
    });
    /**
     * 自定义着色器不考虑缓存了，自己注意，
     * 多个完全一样的自定义材质，用同一个就行了
     * @param renderer
     */
    getShader(renderer: WebglRenderer): GLShader;
    destroy(): void;
}

export  enum UniformType {
    float = "f",
    /**
     * 纹理对象
     */
    texture = "t",
    /**
     * 十六进制数字
     */
    color = "c",
    /**
     * v2对象
     */
    vector2 = "v2",
    /**
     * v3对象
     */
    vector3 = "v3",
    /**
     * v4对象
     */
    vector4 = "v4",
    /**
     * m4对象
     */
    matrix4 = "m4"
}

export  class Sprite3dMaterial extends ShaderMaterial {
    sizeAttenuation: boolean;
    constructor();
    getShader(renderer: WebglRenderer): GLShader;
    get center(): Vector2;
    set center(v: Vector2);
    get rotation(): number;
    set rotation(v: number);
    get color(): number;
    set color(v: number);
    get alpha(): number;
    set alpha(v: number);
    get map(): Texture;
    set map(v: Texture);
}

export  class SkinnedMesh3D extends Mesh3D {
    bindMode: "attached" | "detached";
    bindMatrix: Matrix4;
    bindMatrixInverse: Matrix4;
    skeleton: Skeleton3D;
    constructor(geometry: Geometry, material: BaseMaterial);
    initBones(): Bone3D[];
    bind(skeleton: Skeleton3D, bindMatrix: Matrix4): void;
    pose(): void;
    normalizeSkinWeights(): void;
    updateWorldMatrix(): void;
    update(): void;
    clone(): any;
}

export  const vertex = "uniform mat4 uLightSpaceMatrix;\nuniform mat4 uModelMatrix;\nvoid main() {\n    gl_Position = uLightSpaceMatrix * uModelMatrix * vec4( aPosition, 1.0 );\n}";

export  const fragment = "void main() {\n    // gl_FragDepth = gl_FragCoord.z;\n}";

export  class ShadowShader extends GLShader {
    constructor(gl: WebGLRenderingContext);
}

export  class OrthographicCamera extends Camera {
    private left;
    private right;
    private top;
    private bottom;
    private near;
    private far;
    zoom: number;
    constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number);
    set(left: number, right: number, top: number, bottom: number, near?: number, far?: number): void;
    copy(source: OrthographicCamera, recursive?: boolean): this;
    updateProjectionMatrix(): void;
}

export  class D3Renderer extends ObjectRenderer {
    /**
     * 赋值的相机，需要里面的worldMatrixInverse和projectionMatrix
     */
    camera: Camera;
    /**
     * 灯光数据，用来初始化着色器和着色器传值
     */
    lightsConfig: LightsConfig;
    /**
     * 雾化参数
     */
    fog: {
        color: Float32Array;
        near: number;
        far: number;
    };
    /**
     * 顶点着色器可传的最大uniform通道
     */
    maxVertexUniforms: number;
    floatVertexTextures: boolean;
    private curLightkey;
    constructor(renderer: WebglRenderer);
    onContextChange(): void;
    start(): void;
    stop(): void;
    private meshes;
    render(obj: Mesh3D): void;
    flush(): void;
    private getMaxBones;
}

export  class Light extends Object3D {
    intensity: number;
    private _color;
    private _colorArr;
    private _colorVec3;
    get color(): number;
    set color(value: number);
    get colorArr(): Float32Array;
    get colorVec3(): Vector3;
    /**
     *
     * @param color rgb三分量的矢量，每个分量0到1，颜色方面后续优化
     * @param intensity 光照强度 0到1 ,直接影响颜色值，不进uniform
     */
    constructor(color: number, intensity?: number);
    copy(light: Light): this;
}

export  class PointLight extends Light {
    distance: number;
    decay: number;
    /**
     *
     * @param color 颜色值，0到1的矢量
     * @param intensity 强度
     * @param distance 最大影响距离
     * @param decay 衰减系数，//多试试2
     */
    constructor(color: number, intensity: number, distance?: number, decay?: number);
    get power(): number;
    set power(value: number);
    copy(pointLight: PointLight): this;
}

export  class DirectionalLight extends Light {
    /**
     * 目标对象
     */
    target: Object3D;
    constructor(color: number, intensity: number);
    copy(directionalLight: DirectionalLight): this;
}

export  class Ray {
    origin: Vector3;
    direction: Vector3;
    constructor(origin?: Vector3, direction?: Vector3);
    set(origin: Vector3, direction: Vector3): this;
    clone(): Ray;
    copy(ray: Ray): this;
    at(t: number, target: Vector3): Vector3;
    lookAt(v: Vector3): this;
    recast(t: number): this;
    closestPointToPoint(point: Vector3, out?: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    distanceSqToPoint(point: Vector3): number;
    intersectSphere(sphere: Sphere, out: Vector3): Vector3;
    intersectsSphere(sphere: Sphere): boolean;
    intersectBox(box: Box3, out: Vector3): Vector3;
    intersectsBox(box: Box3): boolean;
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, out: Vector3): Vector3;
    applyMatrix4(matrix4: Matrix4): this;
    equals(ray: Ray): boolean;
}

export  class Raycaster {
    near: number;
    far: number;
    ray: Ray;
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);
    set(origin: Vector3, direction: Vector3): void;
    setFromCamera(coords: Vector3, camera: Camera): void;
    intersectObject(object: Object3D, optionalTarget?: IntersectData[]): IntersectData[];
}

export interface IntersectData {
    distance: number;
    point?: Vector3;
    object: Object3D;
    uv?: Vector2;
}

export  class Scene3D extends Object3D {
    private _viewId;
    /**
     * gl的视窗数据记录，是左下角开始，以防混淆不用Rectangle
     */
    private _viewport;
    private _viewX;
    get viewX(): number;
    set viewX(value: number);
    private _viewY;
    get viewY(): number;
    set viewY(value: number);
    private _viewWidth;
    get viewWidth(): number;
    set viewWidth(value: number);
    private _viewHeight;
    get viewHeight(): number;
    set viewHeight(value: number);
    setViewRect(x: number, y: number, width: number, height: number): void;
    private _fog;
    setFog(color?: number, near?: number, far?: number): void;
    removeFog(): void;
    /**
     * 父级是2d元素，用于修改视窗位置
     */
    parent: any;
    visible: boolean;
    /**
     * 相机
     */
    camera: Camera;
    private raycaster;
    /**
     * 滤镜数组
     */
    private _filters;
    get filters(): Filter[];
    set filters(value: Filter[]);
    /**
     * 可用的滤镜数据，_filters筛选过的
     */
    protected _enabledFilters: Filter[];
    constructor();
    updateTransform(): void;
    renderWebGL(renderer: WebglRenderer): void;
    setViewport(renderer: WebglRenderer): void;
    getBounds(): Rectangle;
    getLightConfig(con?: Object3D, arr?: LightsConfig): LightsConfig;
    /**
     * 点击事件，只算场景的先，待mesh等写完所有2d包围盒再说，将几何转成2d的点后，根据索引的所有三角面计算是否选中
     * @param globalPoint
     * @param isMouseEvent
     */
    hitTestPoint(globalPoint: Point, isMouseEvent?: boolean): Object3D | this;
    private orbitControlConfig;
    setOrbCtrCfg(options: IOrbitControlConfig): void;
    setOrbitControl(options?: IOrbitControlConfig): void;
}

export interface IOrbitControlConfig {
    enabled?: boolean;
    enableDamping?: boolean;
    dampingFactor?: number;
    userZoom?: boolean;
    userZoomSpeed?: number;
    userRotate?: boolean;
    userRotateSpeed?: number;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    minPolarAngle?: number;
    maxPolarAngle?: number;
    minDistance?: number;
    maxDistance?: number;
    enablePitch?: boolean;
}

export interface LightsConfig {
    pointLights: PointLightConfig[];
    directionalLights: DirectionalLightConfig[];
    ambientLightColor: number[];
}

export {};

export  enum RotationOrders {
    XYZ = "XYZ",
    YZX = "YZX",
    ZXY = "ZXY",
    XZY = "XZY",
    YXZ = "YXZ",
    ZYX = "ZYX"
}

export  class Euler {
    private _x;
    private _y;
    private _z;
    private _order;
    constructor(_x?: number, _y?: number, _z?: number, _order?: RotationOrders);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get order(): RotationOrders;
    set order(value: RotationOrders);
    set(x: any, y: any, z: any, order: any): this;
    clone(): Euler;
    copy(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4, order: RotationOrders, update: any): this;
    setFromQuaternion: (q: Quaternion, order: any, update: any) => any;
    setFromVector3(v: any, order: RotationOrders): this;
    reorder: (newOrder: any) => any;
    equals(euler: any): boolean;
    fromArray(array: any): this;
    toArray(array: any, offset: any): any;
    toVector3(optionalResult: any): any;
    onChange(callback: any): this;
    onChangeCallback(): void;
}

export  class Object3D extends EventDispatcher {
    static DefaultUp: Vector3;
    /**
     * 名字
     */
    name: string;
    /**
     * 是否可见
     */
    visible: boolean;
    mouseEnable: boolean;
    mouseChildren: boolean;
    /**
     * 是否投射影子，针对光源和物体
     */
    castShadow: boolean;
    /**
     * 是否接收影子，针对物体，考虑包括光感与非光感吗？
     */
    receiveShadow: boolean;
    /**
     * 场景
     */
    scene: Scene3D;
    /**
     * 子级
     */
    children: Object3D[];
    /**
     * 父级
     */
    parent: Object3D;
    /**
     * 世界矩阵
     */
    _worldMatrix: Matrix4;
    /**
     * 本地矩阵
     */
    _localMatrix: Matrix4;
    up: Vector3;
    position: Vector3;
    scale: Vector3;
    rotation: Euler;
    quaternion: Quaternion;
    constructor();
    addChild<T extends Object3D>(object: T): T;
    addChildAt<T extends Object3D>(child: T, index: number): T;
    addChildren<T extends Object3D>(...children: T[]): T[];
    removeChild<T extends Object3D>(object: T): T;
    /**
     * FYGE. Event得加上属性REMOVED_FROM_SCENE，ADDED_TO_SCENE
     * @param type
     */
    private _onDispatchBubbledEvent;
    clone(recursive?: boolean): Object3D;
    copy(source: Object3D, recursive?: boolean): this;
    lookAt(x: number, y: number, z: number): void;
    applyMatrix(matrix: Matrix4): void;
    applyQuaternion(q: Quaternion): this;
    localToGlobal(vector: Vector3): Vector3;
    globalToLocal(vector: Vector3): Vector3;
    /**
     * 获取该物体的舞台坐标
     */
    get stagePos(): {
        x: number;
        y: number;
    };
    updateLocalMatrix(): void;
    /**
     * 现在每帧都计算，以后考虑加标记，或手动设置标记更新
     * @param updateParents
     * @param updateChildren
     */
    updateWorldMatrix(updateParents?: boolean, updateChildren?: boolean): void;
    /**
     * 统一更新方法，子类可重写，基类用于派发监听事件
     */
    update(): void;
    /**
     * 通过名字获取子级
     * @param name
     * @param isOnlyOne
     * @param isRecursive
     */
    getChildByName(name: string | RegExp, isOnlyOne?: boolean, isRecursive?: boolean): any;
    /**
     *
     * @param rex
     * @param root
     * @param isOnlyOne
     * @param isRecursive
     * @param resultList
     */
    private static _getElementsByName;
    /**
     * 渲染绘制
     */
    render(renderer: any): void;
    /**
     * 子级重写，自身的渲染方式
     */
    protected _render(renderer: any): void;
    /**
     * 挂个空的吧，只对自己有效，子级的递归，Raycaster方法里已写
     * @param raycaster
     * @param intersects
     */
    raycast(raycaster: Raycaster, intersects: IntersectData[]): void;
    destroy(): void;
    /**
     * 位置信息
     */
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    /**
     * 缩放信息
     */
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    get scaleZ(): number;
    set scaleZ(value: number);
    /**
     * 旋转信息，角度制度
     */
    get rotationX(): number;
    /**
     * 角度制
     */
    set rotationX(value: number);
    /**
     * 旋转信息，角度制度
     */
    get rotationY(): number;
    /**
     * 角度制
     */
    set rotationY(value: number);
    /**
     * 旋转信息，角度制度
     */
    get rotationZ(): number;
    /**
     * 角度制
     */
    set rotationZ(value: number);
}

export  class Mesh3D extends Object3D {
    geometry: Geometry;
    material: BaseMaterial;
    /**
     * 用于变形权重，只能获取，修改只能内部修改
     */
    private _morphTargetInfluences;
    get morphTargetInfluences(): number[];
    constructor(geometry: Geometry, material: BaseMaterial);
    _render(renderer: any): void;
    updateMorphTargets(): void;
    raycast(raycaster: Raycaster, intersects: IntersectData[]): void;
    copy(source: Mesh3D, recursive?: boolean): this;
    /**
     * 克隆方法
     * @param recursive 默认克隆子级
     */
    clone(recursive?: boolean): Mesh3D;
}

export  class SphereGeometry extends Geometry {
    constructor(radius?: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);
}

export  class BoxGeometry extends Geometry {
    /**
     *
     * @param width x
     * @param height y
     * @param depth z
     * @param widthSegments
     * @param heightSegments
     * @param depthSegments
     */
    constructor(width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);
}

export  class PlaneGeometry extends Geometry {
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);
}

export  class CircleGeometry extends Geometry {
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);
}

export  class CylinderGeometry extends Geometry {
    constructor(
    /**
     * 上圆半径，默认1
     */
    radiusTop?: number, 
    /**
     * 下圆半径，默认1
     */
    radiusBottom?: number, 
    /**
     * 高度，默认1
     */
    height?: number, 
    /**
     * 径向分段数，整数，默认8
     */
    radialSegments?: number, 
    /**
     * 高度分段数，整数，默认1
     */
    heightSegments?: number, 
    /**
     * 是否开口，默认false
     */
    openEnded?: boolean, 
    /**
     * 圆柱开始角度，默认0
     */
    thetaStart?: number, 
    /**
     * 圆柱结束角度，默认Math.PI * 2
     */
    thetaLength?: number);
}

export  class RingGeometry extends Geometry {
    constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number);
}

export  class TorusGeometry extends Geometry {
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);
}

export  class AmbientLight extends Light {
    constructor(color: number, intensity: number);
}

export  class AxesHelper extends Mesh3D {
    constructor(size?: number);
}

export  class GridHelper extends Mesh3D {
    constructor(size?: number, divisions?: number, color1?: number, color2?: number);
}

export  class Box3Helper extends Mesh3D {
    box: Box3;
    constructor(box: Box3, color?: number);
    updateWorldMatrix(updateParents?: boolean, updateChildren?: boolean): void;
}

export  function isTypedArray(object: any): boolean;

export  function convertArray(array: any, type: any, forceClone?: boolean): any;

export  function flattenJSON(jsonKeys: any, times: any, values: any, valuePropertyName: any): void;

export  function getKeyframeOrder(times: any): any[];

export  function sortedArray(values: any, stride: any, order: any): any;

export  var InterpolateDiscrete: number;

export  var InterpolateLinear: number;

export  var InterpolateSmooth: number;

export interface IAnimationTrack {
    setValue: (time: number) => void;
    resetValue: () => void;
}

export  class AnimationClip extends EventDispatcher {
    name: string;
    /**
     * 所有的动画数据
     */
    protected tracks: IAnimationTrack[];
    private _totalTime;
    /**
     * 动画总时长，一般是所有tracks里时间最长的那个
     * @readonly
     */
    get totalTime(): number;
    /**
     *
     * @param tracks
     * @param totalTime 总时间自行传入，秒计，
     */
    constructor(tracks: IAnimationTrack[], totalTime: number);
    private _isPlaying;
    /**
     * 是否播放中
     * @readonly
     */
    get isPlaying(): boolean;
    private _isFront;
    /**
     * 是否正向播放
     * @readonly
     */
    get isFront(): boolean;
    /**
     * 上个时间，用来确定是否更新
     */
    protected lastTime: number;
    /**
     * 记录时间
     */
    protected curTime: number;
    private _endMark;
    /**
     * 需要挂在循环里的方法，传时间间隔
     * @param time 一般为秒计
     */
    update(time: number): void;
    /**
     * 从当前时间点播放
     * @param isFront 默认true正向
     */
    play(isFront?: boolean): void;
    /**
     * 停在当前时间
     */
    stop(): void;
    /**
     * 从某时刻开始播放
     * @param time
     * @param isFront 默认true，正向播放
     */
    gotoAndPlay(time: number, isFront?: boolean): void;
    /**
     * 停在指定时间
     * @param time
     * @param force 是否强制更新，默认false，如果发现没stop在指定位置，可以试试设置true
     */
    gotoAndStop(time: number, force?: boolean): void;
    private startAniRangeFun;
    /**
     * 在一个区间范围内播放
     * @param beginTime 开始时间，秒计，默认0，
     * @param endTime 结束时间，秒计，默认_totalTime
     * @param loops 循环次数，默认1
     * @param callback 参数loop表示还剩几次
     */
    startAniRange(beginTime?: number, endTime?: number, loops?: number, callback?: (loop: number) => void): void;
    /**
     * 矫正
     */
    protected rectify(): void;
    /**
     * 用于重置初始状态，因为每个track的0状态也不一定是初始状态
     * 所以各自track自行处理
     */
    resetState(): void;
}

export  enum AnimationType3D {
    /**
     * 旋转
     */
    quaternion = "quaternion",
    /**
     * 缩放
     */
    scale = "scale",
    /**
     * 顶点权重
     */
    morphTargetInfluences = "morphTargetInfluences",
    /**
     * 位移
     */
    position = "position"
}

export  class AnimationTrack3D extends HashObject implements IAnimationTrack {
    /**
     * 需要改变属性的节点对象
     */
    node: Object3D | Mesh3D;
    /**
     * 动画类型
     */
    animationType: AnimationType3D;
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: Float32Array | number[];
    /**
     * 上述时间要对应的数值，values.length/times.length就是步长
     */
    values: Float32Array | number[];
    constructor(
    /**
     * 需要改变属性的节点对象
     */
    node: Object3D | Mesh3D, 
    /**
     * 动画类型
     */
    animationType: AnimationType3D, 
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: Float32Array | number[], 
    /**
     * 上述时间要对应的数值，values.length/times.length就是步长
     */
    values: Float32Array | number[]);
    resetValue: () => void;
    /**
     * 传入时间设置对应的属性值，time大于所有动画总时间，外部处理
     * @param time
     */
    setValue(time: number): void;
    private getValue;
    private getValueSize;
    /**
     * 外部已经剔除了第一帧和最后一帧
     * @param time
     */
    private findPreIndex;
    destroy(): void;
}

export  class AnimationManager extends HashObject {
    private animationClips;
    protected currentClip: AnimationClip;
    /**
     * 传入
     * @param animationClips 所有的clip
     */
    constructor(animationClips: AnimationClip[]);
    /**
     * 获取一个AnimationClip，比如想自己控制
     * @param name
     */
    getAniClipByName(name: string): AnimationClip;
    /**
     * 切换动画，会停止当前播放的动画
     * 精细播放自己获取并控制，这个方法只针对多clip切换
     * @param name
     * @param times
     */
    showAni(name: string, loops?: number, callback?: (loop: number) => void): AnimationClip;
    /**
     * 停止
     */
    stop(): void;
    /**
     * 重置并停止
     */
    reset(): void;
    /**
     * 循环更新方法
     * @param deltaTime 按秒计，默认0.0167
     */
    update(deltaTime?: number): void;
    destroy(): void;
}

export interface GltfData {
    scene: Scene3D;
    scenes: Scene3D[];
    cameras: Camera[];
    animations: AnimationClip[];
    animationManager: AnimationManager;
    asset: {
        generator: string;
        version: string;
    };
    parser: GLTFParser;
}

export  function loadGltf(url: string, onLoad: (gltf: GltfData) => void, onError: (err: any) => void): void;

export class GLTFParser {
    json: any;
    extensions: {};
    options: {};
    cache: GLTFRegistry;
    primitiveCache: any[];
    multiplePrimitivesCache: any[];
    multiPassGeometryCache: any[];
    constructor(json?: any, extensions?: {}, options?: {});
    parse(onLoad: any, onError: any): void;
    /**
     * Marks the special nodes/meshes in json for efficient parse.
     */
    markDefs(): void;
    /**
     * Requests the specified dependency asynchronously, with caching.
     * @param {string} type
     * @param {number} index
     * @return {Promise<Object>}
     */
    getDependency(type: string, index: number): Promise<any>;
    /**
     * Requests all dependencies of the specified type asynchronously, with caching.
     * @param {string} type
     * @return {Promise<Array<Object>>}
     */
    getDependencies(type: string): Promise<any[]>;
    /**
     * Requests all multiple dependencies of the specified types asynchronously, with caching.
     * @param {Array<string>} types
     * @return {Promise<Object<Array<Object>>>}
     */
    getMultiDependencies(types: any): Promise<any>;
    /**
     * ok
     * @param {number} bufferIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBuffer(bufferIndex: number): Promise<ArrayBuffer>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     * @param {number} bufferViewIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBufferView(bufferViewIndex: number): Promise<ArrayBuffer>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
     * @param {number} accessorIndex
     * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
     */
    loadAccessor(accessorIndex: number): Promise<BufferAttribute | InterleavedBufferAttribute>;
    /**
     * ok
     * @param {number} textureIndex
     * @return {Promise<Texture>}
     */
    loadTexture(textureIndex: any): Promise<Texture>;
    /**
     * Asynchronously assigns a texture to the given material parameters.
     * @param {Object} materialParams
     * @param {string} textureName
     * @param {number} textureIndex
     * @return {Promise}
     */
    assignTexture(materialParams: any, textureName: any, textureIndex: any): Promise<void>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
     * @param {number} materialIndex
     * @return {Promise<Material>}
     */
    loadMaterial(materialIndex: number): Promise<BaseMaterial>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
     *
     * Creates BufferGeometries from primitives.
     * If we can build a single BufferGeometry with .groups from multiple primitives, returns one BufferGeometry.
     * Otherwise, returns BufferGeometries without .groups as many as primitives.
     *
     * @param {Array<Object>} primitives
     * @return {Promise<Array<BufferGeometry>>}
     */
    loadGeometries(primitives: any): Promise<Geometry[]>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
     * @param {number} meshIndex
     * @return {Promise<Object3D|Mesh3D>}
     */
    loadMesh(meshIndex: any): Promise<any>;
    /**
     * ok
     * @param {number} cameraIndex
     * @return {Promise<PerspectiveCamera>}
     */
    loadCamera(cameraIndex: number): Promise<PerspectiveCamera>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
     * @param {number} skinIndex
     * @return {Promise<Object>}
     */
    loadSkin(skinIndex: any): any;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
     * @param {number} animationIndex
     * @return {Promise<AnimationClip>}
     */
    loadAnimation(animationIndex: number): Promise<AnimationClip>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
     * @param {number} nodeIndex
     * @return {Promise<Object3D>}
     */
    loadNode(nodeIndex: number): Promise<Object3D>;
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
     * @param {number} sceneIndex
     * @return {Promise<THREE.Scene>}
     */
    loadScene: (sceneIndex: any) => any;
}

export class GLTFRegistry {
    private objects;
    constructor();
    get(key: string): any;
    add(key: string, object: any): void;
    remove(key: string): void;
    removeAll(): void;
}

export class BufferAttribute {
    array: any;
    itemSize: number;
    normalized: boolean;
    count: number;
    name: string;
    /**
     *
     * @param array Int8Array,Uint8Array, Int16Array,Uint16Array,Uint32Array,Float32Array
     * @param itemSize 步长，比如位置是3
     * @param normalized
     */
    constructor(array: any, itemSize: number, normalized?: boolean);
    /**
     * 重写覆盖
     * @param value 普通数组，或类型化数组
     * @param offset
     */
    set(value: any, offset?: number): this;
    /**
     * 重置数据
     * @param array
     */
    setArray(array: any): this;
    /**
     *
     * @param index 第几个点
     */
    getX(index: number): any;
    setX(index: number, x: number): this;
    getY(index: number): any;
    setY(index: number, y: number): this;
    getZ(index: number): any;
    setZ(index: number, z: number): this;
    getW(index: number): any;
    setW(index: number, w: number): this;
    setXY(index: number, x: number, y: number): this;
    setXYZ(index: number, x: number, y: number, z: number): this;
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;
    copy(source: BufferAttribute): this;
    clone(): BufferAttribute;
}

export class InterleavedBuffer {
    array?: any;
    stride?: number;
    count: number;
    constructor(array?: any, stride?: number);
    setArray(array: any): this;
    copy(source: InterleavedBuffer): this;
    set(value: any, offset?: number): this;
    clone(): InterleavedBuffer;
}

export class InterleavedBufferAttribute {
    itemSize: number;
    offset: number;
    normalized: boolean;
    data: InterleavedBuffer;
    isInterleavedBufferAttribute: boolean;
    constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized?: boolean);
    get count(): number;
    get array(): any;
    setX(index: any, x: any): this;
    setY(index: any, y: any): this;
    setZ(index: any, z: any): this;
    setW(index: any, w: any): this;
    getX(index: any): any;
    getY(index: any): any;
    getZ(index: any): any;
    getW(index: any): any;
    setXY(index: any, x: any, y: any): this;
    setXYZ(index: any, x: any, y: any, z: any): this;
    setXYZW(index: any, x: any, y: any, z: any, w: any): this;
}

export {};

export  class Sprite3D extends Mesh3D {
    constructor(material: Sprite3dMaterial);
}

export  class Bone extends Container {
    data: IBoneData;
    root: Container;
    static yDown: boolean;
    ax: number;
    ay: number;
    arotation: number;
    ascaleX: number;
    ascaleY: number;
    ashearX: number;
    ashearY: number;
    appliedValid: boolean;
    sorted: boolean;
    get matrix(): Matrix;
    private debugBone;
    constructor(data: IBoneData, root: Container);
    setToSetupPose(): void;
    updateTransform(): void;
}

export interface IBoneData {
    length: number;
    name: string;
    parent: string;
    rotation: number;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    shearX: number;
    shearY: number;
    transform: TransformType;
    skin: boolean;
}

export enum TransformType {
    normal = "normal",
    onlyTranslation = "onlyTranslation",
    noRotationOrReflection = "noRotationOrReflection",
    noScale = "noScale",
    noScaleOrReflection = "noScaleOrReflection"
}

export {};

export  abstract class Attachment {
    name: string;
    constructor(name: string);
}

export  abstract class VertexAttachment extends Attachment {
    private static nextID;
    id: number;
    bones: Array<number>;
    vertices: ArrayLike<number>;
    worldVerticesLength: number;
    deformAttachment: VertexAttachment;
    constructor(name: string);
    applyDeform(sourceAttachment: any): boolean;
    computeWorldVerticesOld(slot: Slot, worldVertices: ArrayLike<number>, skeletonBones: Bone[]): void;
    /** Transforms local vertices to world coordinates.
     * @param start The index of the first local vertex value to transform. Each vertex has 2 values, x and y.
     * @param count The number of world vertex values to output. Must be <= {@link #getWorldVerticesLength()} - start.
     * @param worldVertices The output world vertices. Must have a length >= offset + count.
     * @param offset The worldVertices index to begin writing values. */
    computeWorldVertices(slot: Slot, start: number, count: number, worldVertices: ArrayLike<number>, offset: number, stride: number, skeletonBones: Bone[]): void;
}

export  class SpineColor {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    set(r: any, g: any, b: any, a: any): this;
    setFromColor(c: SpineColor): this;
    setFromString(hex: string): this;
    add(r: any, g: any, b: any, a: any): this;
    clamp(): this;
    static WHITE: SpineColor;
    static RED: SpineColor;
    static GREEN: SpineColor;
    static BLUE: SpineColor;
    static MAGENTA: SpineColor;
    static fromString(hex: string): SpineColor;
}

export  class Slot extends Container {
    /**
     * 绑定的骨骼
     */
    bone: Bone;
    /**
     * 数据，用于恢复初始状态
     */
    data: ISlotData;
    private spine;
    currentMesh: Mesh;
    currentSprite: Sprite;
    currentGraphics: any;
    clippingContainer: any;
    meshes: {
        [key: string]: Mesh;
    };
    currentMeshName: string;
    sprites: {
        [key: string]: Sprite;
    };
    currentSpriteName: string;
    attachment: Attachment;
    deform: number[];
    color: SpineColor;
    constructor(
    /**
     * 绑定的骨骼
     */
    bone: Bone, 
    /**
     * 数据，用于恢复初始状态
     */
    data: ISlotData, spine: Spine);
    getAttachment(): Attachment;
    setAttachment(attachment: Attachment): void;
    setToSetupPose(): void;
}

export interface ISlotData {
    attachment: string;
    bone: string;
    name: string;
    blend: "normal" | "additive" | "multiply" | "screen";
    color: string;
    dark: string;
    sColor?: SpineColor;
}

export  class Skin {
    name: string;
    attachments: any[];
    constructor(name: string);
    addAttachment(slotIndex: number, name: string, attachment: Attachment): void;
    getAttachment(slotIndex: number, name: string): any;
    attachAll(slots: Slot[], oldSkin: Skin): void;
}

export  class RegionAttachment extends Attachment {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    width: number;
    height: number;
    texture: Texture;
    color: SpineColor;
    constructor(name: string, x: number, y: number, scaleX: number, scaleY: number, rotation: number, width: number, height: number, texture: Texture);
}

export  class MeshAttachment extends VertexAttachment {
    texture: Texture;
    path: string;
    regionUVs: Float32Array;
    uvs: ArrayLike<number>;
    triangles: Array<number>;
    color: SpineColor;
    width: number;
    height: number;
    hullLength: number;
    edges: Array<number>;
}

export  class Curve {
    static LINEAR: number;
    static STEPPED: number;
    static BEZIER: number;
    static BEZIER_SIZE: number;
    private curves;
    constructor(frameCount: number);
    /** The number of key frames for this timeline. */
    getFrameCount(): number;
    /** Sets the specified key frame to linear interpolation. */
    setLinear(frameIndex: number): void;
    /** Sets the specified key frame to stepped interpolation. */
    setStepped(frameIndex: number): void;
    /** Returns the interpolation type for the specified key frame.
     * @returns Linear is 0, stepped is 1, Bezier is 2. */
    getCurveType(frameIndex: number): number;
    /** Sets the specified key frame to Bezier interpolation. `cx1` and `cx2` are from 0 to 1,
     * representing the percent of time between the two key frames. `cy1` and `cy2` are the percent of the
     * difference between the key frame's values. */
    setCurve(frameIndex: number, cx1: number, cy1: number, cx2: number, cy2: number): void;
    /** Returns the interpolated percentage for the specified key frame and linear percentage. */
    getCurvePercent(frameIndex: number, percent: number): number;
}

export  function readCurve(map: any, curve: Curve, frameIndex: number): void;

export  enum MixBlend {
    setup = 0,
    first = 1,
    replace = 2,
    add = 3
}

export  enum MixDirection {
    in = 0,
    out = 1
}

export  function binarySearch(values: Float32Array | number[], target: number, step?: number): number;

export  function arrayCopy(source: any, sourceStart: any, dest: any, destStart: any, numElements: any): void;

export  function setArraySize(array: any, size: any, value?: number): any;

export  function newArray(size: number, defaultValue: any): any[];

export  class BaseTrack extends HashObject implements IAnimationTrack {
    setValue(time: number, alpha?: number, blend?: MixBlend, direction?: MixDirection): void;
    resetValue(): void;
    destroy(): void;
}

export interface IBoneAniData {
    time: number;
    angle: number;
    x: number;
    y: number;
    curve: "stepped" | [number, number, number, number];
}

export  enum SpineBoneAniType {
    rotate = "rotate",
    translate = "translate",
    scale = "scale",
    shear = "shear"
}

export  class SpineBoneAniTrack extends BaseTrack {
    /**
     * 需要改变属性的节点对象
     */
    bone: Bone;
    /**
     * 动画类型
     */
    animationType: SpineBoneAniType;
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: IBoneAniData[];
    curve: Curve;
    resetValue(): void;
    constructor(
    /**
     * 需要改变属性的节点对象
     */
    bone: Bone, 
    /**
     * 动画类型
     */
    animationType: SpineBoneAniType, 
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: IBoneAniData[]);
    /**
     * 传入时间设置对应的属性值，time大于所有动画总时间，外部处理   blend到时考虑要怎么传
     * @param time
     */
    setValue(time: number, alpha?: number, blend?: MixBlend, direction?: MixDirection): void;
    private setRotation;
    private setPosition;
    private setScale;
    private setShear;
    /**
     * 外部已经剔除了第一帧和最后一帧。到时试试二元法，估计更快点
     * @param time
     */
    private findPreIndex;
    destroy(): void;
}

export interface IColorAniData {
    curve: "stepped" | [number, number, number, number];
    color: string;
    time: number;
}

export  class SpineColorAniTrack extends BaseTrack {
    /**
     * 需要改变颜色的插槽
     */
    slot: Slot;
    resetValue(): void;
    private frames;
    curve: Curve;
    constructor(
    /**
     * 需要改变颜色的插槽
     */
    slot: Slot, 
    /**
     * 改一下到时记录进frams数组
     */
    times: IColorAniData[]);
    setValue(time: number, alpha?: number, blend?: MixBlend): void;
    static ENTRIES: number;
    static PREV_TIME: number;
    static PREV_R: number;
    static PREV_G: number;
    static PREV_B: number;
    static PREV_A: number;
    static R: number;
    static G: number;
    static B: number;
    static A: number;
}

export interface IDeformAniData {
    curve: "stepped" | [number, number, number, number];
    offset: number;
    time: number;
    vertices: number[];
}

export  class SpineDeformAniTrack extends BaseTrack {
    /**
     * 需要改变属性的节点对象
     */
    slot: Slot;
    /**
     * 皮肤上获取的，slot可能不一致
     */
    attachment: MeshAttachment;
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: IDeformAniData[];
    curve: Curve;
    frameTimes: Float32Array;
    private frameVertices;
    constructor(
    /**
     * 需要改变属性的节点对象
     */
    slot: Slot, 
    /**
     * 皮肤上获取的，slot可能不一致
     */
    attachment: MeshAttachment, 
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: IDeformAniData[]);
    setValue(time: number, alpha?: number, blend?: MixBlend): void;
}

export interface IAttachmentAniData {
    name?: string;
    time: number;
}

export  class AttachmentAniTrack extends BaseTrack {
    /**
     * 需要改变附件的插槽
     */
    slot: Slot;
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: IAttachmentAniData[];
    /**
     * 初始，原始数据中获取的
     */
    private spine;
    resetValue(): void;
    constructor(
    /**
     * 需要改变附件的插槽
     */
    slot: Slot, 
    /**
     * 记录所有时间的数组，按顺序递增，没有的按最后一个时间的数据
     */
    times: IAttachmentAniData[], 
    /**
     * 初始，原始数据中获取的
     */
    spine: Spine);
    setValue(time: number, alpha?: number, blend?: MixBlend, direction?: MixDirection): void;
}

export interface IDrawOrderAniData {
    time: number;
    offsets?: {
        slot: string;
        offset: number;
    }[];
    drawOrder?: number[];
}

export  class DrawOrderAniTrack extends BaseTrack {
    slots: Slot[];
    drawOrder: Slot[];
    times: IDrawOrderAniData[];
    constructor(slots: Slot[], drawOrder: Slot[], times: IDrawOrderAniData[]);
    setValue(time: number, alpha?: number, blend?: MixBlend, direction?: MixDirection): void;
}

export  class SpineAniClip extends AnimationClip {
    alpha: number;
    blend: MixBlend;
    direction: MixDirection;
    fromClip: SpineAniClip;
    toClip: SpineAniClip;
    /**
     * 已执行的过度时间
     */
    mixTime: number;
    /**
     * 过度总时间，上一个和自身的过度总时间
     */
    mixDuration: number;
    protected rectify(): void;
}

export  class SpineAniManager extends AnimationManager {
    currentClip: SpineAniClip;
    /**
     *
     * @param name
     * @param loops
     * @param callback
     * @param mix 带这个后，上一个动画的回调可能会失效，得看过度时间，对于有某些，a动画隐藏的皮肤，b动画没有处理该插槽，需要重置去掉a动画的效果,最好别赋值mix
     */
    showAni(name: string, loops?: number, callback?: (loop: number) => void, mix?: number): AnimationClip;
    update(deltaTime?: number): void;
    applyMixingFrom(to: SpineAniClip, deltaTime: number, blend: MixBlend): void;
    private resetFrom;
}

export interface ISkeletonData {
    skeleton: {
        images: string;
        spine: number;
    };
    bones: IBoneData[];
    skins: {
        [key: string]: {
            [key: string]: {
                [key: string]: ISkinData;
            };
        };
    };
    slots: ISlotData[];
    animations: {
        [key: string]: {
            bones: {
                [key: string]: {
                    rotate: IBoneAniData[];
                    translate: IBoneAniData[];
                    scale: IBoneAniData[];
                    shear: IBoneAniData[];
                };
            };
            deform: {
                [key: string]: {
                    [key: string]: {
                        [key: string]: IDeformAniData[];
                    };
                };
            };
            slots: {
                [key: string]: {
                    attachment: IAttachmentAniData[];
                    color: IColorAniData[];
                };
            };
            drawOrder: IDrawOrderAniData[];
            ik: {
                [key: string]: {
                    time: number;
                    mix: number;
                    bendPositive: boolean;
                }[];
            };
        };
    };
    transform: {
        bones: string[];
        name: string;
        order: number;
        rotateMix: number;
        rotation: number;
        scaleMix: number;
        shearMix: number;
        target: string;
        translateMix: number;
    }[];
    ik: {
        bendPositive: boolean;
        bones: string[];
        mix: number;
        name: string;
        order: number;
        target: string;
    }[];
}

export enum SkinType {
    region = "region",
    mesh = "mesh",
    clipping = "clipping",
    linkedmesh = "linkedmesh",
    path = "path",
    point = "point"
}

export  class Spine extends Container {
    private data;
    private textures?;
    private boneContainer;
    bones: Bone[];
    orderCalculations: Bone[];
    skins: Skin[];
    skin: Skin;
    defaultSkin: Skin;
    private slotContainer;
    slots: Slot[];
    drawOrder: Slot[];
    animationManager: AnimationManager;
    constructor(data: ISkeletonData, textures?: {
        [key: string]: Texture;
    }, showBones?: boolean);
    private findBone;
    private sortBone;
    private findSlot;
    private findSlotIndex;
    private findSkin;
    getAttachment(slotIndex: number, attachmentName: string): any;
    private lastTime;
    update(): void;
    updateTransform(): void;
    private updateSlots;
    /**
     * 遮罩的先不管，有了再说
     */
    private updateDrawOrder;
    private readAttachment;
    private readVertices;
    private createSprite;
    private createMesh;
    /**
     * 返回一个Spine，注意data原始数据不能修改，之前写了那些多，忘了里面有没有修改
     */
    clone(): Spine;
    setSkin(name: string): void;
    resetSkin(): void;
    /**
     * 原先是默认皮肤，然后添加新皮肤
     */
    private addSkin;
    /**
     * 获取所有皮肤名字
     */
    get skinNames(): string[];
    /**
     * 获取所有动画的名字
     */
    get aniNames(): string[];
}

export {};

export  function loadAtlas(url: string, onLoad: (textures: any) => void, onError?: (err: any) => void, imgUrl?: string): void;

export  function createTexturesByAtlas(baseTexture: BaseTexture, altaData: string): {
    [key: string]: Texture;
}

export interface SpineData {
    /**
     * 骨骼动画数据
     */
    skeletonData: ISkeletonData;
    /**
     * 纹理数据
     */
    textures: {
        [key: string]: Texture;
    };
    /**
     * 返回的一个显示对象实例
     */
    spine: Spine;
}

export  function loadSpine(url: string, onLoad: (spineData: SpineData) => void, onError?: (err: any) => void): void;}