export const SoundType = {
    boom: "//yun.duiba.com.cn/aurora/assets/e3c91bdea3e14eff8cc042a7481f61355edb8b13.mp3",
    light: "//yun.duiba.com.cn/aurora/assets/739c5aef1331b32894473ec888d7b7d5220b4ede.mp3",
    pick: "//yun.duiba.com.cn/aurora/assets/b4250ad1e151dd796a62cc94ebb704e65bdc3f8a.mp3"
}
let _isFlag = false;
/**
 * 提前加载音频
 * @param type
 */
export function preloadSound() {
    for (let item in SoundType) {
        soundHash[SoundType[item]] = new Howl({
            src: SoundType[item],
            preload: true,
        });
    }

}

/**
 * 根据路径记录
 */
const soundHash: { [key: string]: Howl } = {};

export function playSound(src: string, loop: boolean = false) {
    console.log("999---2222",_isFlag);
    if (_isFlag) return;
    //console.log('测试音效',src);

    let sound: Howl;
    //循环的，且有缓存，取缓存的
    if (soundHash[src] && loop) sound = soundHash[src]
    //没有就新建
    if (!sound) sound = new Howl({ src: [src], autoplay: false, loop });
    //记录下，方便停止
    soundHash[src] = sound;
    //不循环删除缓存
    if (!loop) sound.on('stop', function () {
        delete soundHash[src]
    });
    //播放
    sound.play();
    //console.log('测试是否播放音效',src);
    //返回一个，可以自行控制
    return sound;
}

export function stopSound(src: string) {
    if (soundHash[src]) soundHash[src].stop();
}

export function stopAllSound() {
    _isFlag = true;
    console.log("999---1111",_isFlag);
    for (let key in soundHash) soundHash[key].stop();
}

export function playAllSound() {
    _isFlag = false;
    // for (let key in soundHash) soundHash[key].play();
}


//设置隐藏属性和改变可见属性的事件的名称
let hidden: string, visibilityChange: string;
if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
} else if (typeof document['msHidden'] !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
} else if (typeof document['webkitHidden'] !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
}

const handleVisibilityChange = (e) => {
    if (document.visibilityState == "visible") {
        playAllSound();
        console.log("网页显示")
    } else if (document.visibilityState == "hidden") {
        stopAllSound()
        console.log("网页隐藏")
    }
};

document.addEventListener(
    visibilityChange,
    handleVisibilityChange,
    false
);

window.onbeforeunload = function () {
    //发接口
}
