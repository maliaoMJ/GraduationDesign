// 时间统一格式方法

export function formatTime(str){
    if (!str) {
        return ''
    }
    const date = new Date(str);
    const time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';//我也想这件事可能发生
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if ((time / 60000) < 60) {
        return Number.parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return Number.parseInt(time / 3600000) + '小时前';
    } else if ((time / 86400000) < 31) {
        return Number.parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
        return Number.parseInt(time / 2592000000) + '月前';
    } else {
        return Number.parseInt(time / 31536000000) + '年前';
    }
}