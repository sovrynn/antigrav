'use strict'
;(function (w) {
    w.tools = {}

    tools.replaceNode = function (node) {
        // 1.获取所有符合条件的 a标签
        var tableImg = tools.getElementByAttr('img', 'data-original')

        var aNodes = tools.getTableAttr(tableImg)
        // document.querySelectorAll('.Css_sac>.imgGroupCss_v a')

        // 2.获取所有的表格链接
        var tableHtml = [] // 动态的链接
        for (var iterator of aNodes) {
          var url = iterator.getAttribute('href').toString()
          if (url.includes('http')) {
            tableHtml.push(iterator.getAttribute('href'))
        } else {
            tableHtml.push('https:' + iterator.getAttribute('href'))
        }
}

    var connector = (function () {
        var connector = null
        if (window.XMLHttpRequest) {
            connector = new XMLHttpRequest()
        } else if (window.ActiveXObject) {
            connector = new ActiveXObject('Microsoft.XMLHTTP')
        }
        return connector
    })()
// var innerText = document.body.innerText ? 'innerText' : 'textContent'
var handler = function (response, i) {
    aNodes[i].parentNode['innerHTML'] = tools.stripscript(response)
}

for (var i = 0; i < tableHtml.length; i++) {
    connector.onreadystatechange = (function (callback, i) {
        return function () {
            if (connector.readyState == 4) {
                callback.call(connector, connector.responseText, i)
            }
        }
    })(handler, i)
    connector.open('GET', tableHtml[i], false) //发送到本页面
    connector.send()
}
}

tools.stripscript = function (s) {
    // 删除 script
    return s.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}

tools.currDevice = function () {
    var u = navigator.userAgent
    var app = navigator.appVersion //appVersion 可返回浏览器的平台和版本信息。该属性是一个只读的字符串。
    var browserLang = (
      navigator.browserLanguage || navigator.language
    ).toLowerCase() // 获取浏览器语言

    return (function () {
        return {
            trident: u.indexOf('Trident') > -1, //IE 内核
            presto: u.indexOf('Presto') > -1, //opera 内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
            isMobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
            ios: !!u.match(/\(i [^;]+;( U;)? CPU.Mac OS X/), //ios 终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android 终端或者 uc 浏览器
            iPhone: u.indexOf('iPhone') > -1, // 是否为 iPhone 或者 QQHD 浏览器
            iPad: u.indexOf('iPad') > -1, // 是否 iPad
            webApp: u.indexOf('Safari') == -1, // 是否 web 应用程序，没有头部和底部
            weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
            qq: u.match(/\sQQ/i) == 'qq' // 是否 QQ
        }
    })()
}

tools.getElementByAttr = function (tag, dataAttr) {
    // 获取table图
    var aElements = document.getElementsByTagName(tag)
    var aEle = []
    for (const iterator of aElements) {
      if (iterator.getAttribute(dataAttr) === 'Images/Table_Tmp.jpg') {
        aEle.push(iterator)
    }
}
return aEle
}

tools.getTableAttr = function (tableImg) {
    var aNodes = []
    for (const iterator of tableImg) {
      aNodes.push(iterator.parentNode)
    }

return aNodes
}
})(window)
