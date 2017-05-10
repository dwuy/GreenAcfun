// ==UserScript==
// @name         Green Acfun
// @namespace    *://*.acfun.*/*
// @version      1.0.3
// @description  Change Ac avatar to greeeeeeen
// @author       Rekkles
// @match        *://*.acfun.cn/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var bool = false;
    var isset = true;

    function MakeGreen() {
        if (isset) {
            $(".edui-btn-emotion").click(function () {
                if (!bool) {
                    var arr = [
                        [],
                        [54, '', '绿娘', 'https://pan.baidu.com/s/1i5gd8gt', 'jgad', 'png'],
                        [40, '10', '匿名绿娘', 'https://pan.baidu.com/s/1hr8VHVQ', 'v8cs', 'png'],
                        [55, '20', '新娘绿娘', 'https://pan.baidu.com/s/1hr8VHVQ', 'v8cs', 'png'],
                        [41, 'ColorG', '动态彩娘', 'https://pan.baidu.com/s/1gfLzAtt', 'ttki', 'gif'],
                        [114, 'AcColor', '旧版彩娘', 'https://pan.baidu.com/s/1gfLzAtt', 'ttki', 'png'],
                    ];
                    for (var s = 1; s <= arr.length - 1; s++) {
                        var num = 0;
                        var index = $('.edui-emotion-Jtabnav .edui-tab-item').length;
                        $('.edui-tab-item:last').after("<li class='edui-tab-item'><a data-context='.edui-emotion-Jtab" + index + "' hidefocus='true' class='edui-tab-text'>" + arr[s][2] + "</a></li>");
                        var html = '<div class="edui-emotion-Jtab' + index + ' edui-tab-pane">';
                        html += '<table border="1" class="edui-emotion-smileytable"><tbody>';
                        var baseURL = 'http://opgpv8oqj.bkt.clouddn.com/umeditor/dialogs/emotion/images/ac/' + arr[s][1];
                        for (var i = 1; i <= arr[s][0]; i++) {
                            if (i == 1 || (i + num) % 12 === 0) {
                                html += '<tr>';
                            }
                            var posflag = 1;
                            var str = i < 10 ? '0' : '';
                            var url = baseURL + str + i + '.' + arr[s][5];
                            var po = posflag < 5 ? 0 : 1;
                            html += '<td class="edui-emotion-ac" data-surl="' + url + '?v=0.1" data-realurl="' + url + '" data-posflag="' + po + '" align="center"';
                            html += ' style="background-color: transparent;"><span><img title="' + i + '" src="' + url + '"></span></td>';
                            if (i % 11 === 0) {
                                html += '</tr>';
                                num++;
                            }
                            if (i == 11 || i == 22 || i == 33 || i == 44 || i == 55) {
                                posflag = 1;
                            }
                            posflag++;
                        }
                        html += "</tbody> </table><a style='color:red;position:relative;top:10px;' href='javascript:;' onclick=window.open('" + arr[s][3] + "')>当前表情包<span style='font-size:25px;'>点我下载！</span> 密码: " + arr[s][4] + "</a><a href='javascript:;' style='color:green;position:relative;top:10px;font-size: 20px;' onclick=window.open('https://github.com/justcodingnobb/GreenAcfun')>&nbsp;&nbsp;代码地址点我&nbsp;&nbsp;&nbsp;&nbsp;</a><span style='position:relative;top:10px;color:#00aaee'>喜欢的可以<a href='javascript:;' onclick=window.open('http://rekkles.xyz/2017/04/26/GreenAcFun2-0/')>捐助</a></span></div>";
                        $('.edui-tab-pane:last').after(html);
                        $('.edui-tab-item:last').click();
                    }
                    bool = true;
                }
            });
            isset = false;
        }
    }

    function setImgClass() {
        $('img').each(function () {
            if ($(this).attr('src') !== '' && $(this).attr('src') !== null && $(this).attr('src') !== undefined) {
                var str = $(this).attr('src');
                if (str.indexOf('http://opgpv8oqj.bkt.clouddn.com') >= 0) {
                    $(this).attr('class', 'emotion');
                }
            }
        });

        $('#area-comment-inner  .avatar').css('border-radius', '50%');

        if (window.location.href == 'http://www.acfun.cn/member/#area=mention') {
            $('.btn-img').each(function () {
                var href = $(this).attr('href');
                if (href.indexOf('http://opgpv8oqj.bkt.clouddn.com') >= 0) {
                    $(this).after('<img class="emotion" src="' + href + '">');
                    $(this).remove();
                }
            })
        }
    }


    window.setInterval(MakeGreen, 2000);

    window.setInterval(setImgClass, 1500);
})();
