import { Message, Notification, MessageBox } from 'element-ui'

/**
 * 顶部提示处理
 * @param text - 提示的文字
 * @param type - 弹出类型，默认info，可选success/warning/info/error
 */
function customToast( text = '网络问题，请重新刷新页面！' , type = 'success' ) {
    Message({
        message: text,
        type: type,
    })
}

/**
 * 弹框输出
 * @param string - 提示的文字
 * @param title - 标题
 * @param value - 初始文本
 */
function prompt( string = '输入文字！' , title = '提示' , value = undefined , pattern = /\S/ ) {
    return MessageBox.prompt(string, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: pattern,
        inputValue: value,
        inputErrorMessage: '不能为空',
    })
}

/**
 * 自定义内容弹框
 * @param title - 标题
 */
function msgbox( title = '提示', message = '') {
    return MessageBox.msgbox(
        string,
        title,
        message,
        {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    })
}


/**
 * 弹框确定
 * @param text - 提示的文字
 * @param type - 弹出类型，默认info，可选success/warning/info/error
 */
function confirmWin( title='删除' , text = '确定删除?' , type = 'warning' ) {
    return MessageBox.confirm(
        text,
        title, {
            cancelButtonText: '取消',
            confirmButtonText: '确认',
            type: type,
        }
    )
}

/**
 * 侧面提示处理
 * @param text - 提示的文字
 * @param type - 弹出类型，默认info，可选success/warning/info/error
 */
function notify( title='提示', message = '网络问题，请重新刷新页面！' , type = 'success' ) {
    Notification({
        title: title,
        message: message,
        type: type,
    })
}

export {
    customToast,
    prompt,
    msgbox,
    confirmWin,
    notify
}
