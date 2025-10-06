var dle_theme = 'topwar';

$.ajaxSetup({
    data: {user_hash: dle_login_hash}
});

document.addEventListener("notificationMenu", (e) => {
    $("html").addClass("mn")
})


// Воставноление коментария
RestoreComments = function (a, b) {
    var msg = 'Вы действительно хотите востановить? Данное действие можно будет отменить'
    DLEconfirm(msg, dle_confirm, function () {
        ShowLoading("");
        $.get(dle_root + "engine/ajax/controller.php?mod=deletecomments", {
            id: a,
            dle_allow_hash: b,
            action: 'restore'
        }, function (a) {
            HideLoading("");
            a = parseInt(a);
            if (!isNaN(a)) {
                var b = "1" == dle_tree_comm ? $("#comments-tree-item-" + a + " > div > div.comment") : $("#comment-id-" + a + " > div.comment");
                b.removeClass('disabled')
                $('.deleted', b).remove()
                $('.com-foot.com-foot-delete', b).remove()
                setTimeout(function () {
                    b.show("blind", {}, 1400)
                    //a = b.find(".com-foot .i__del")
                    // $(a).class('i__del')
                    // $(a).parent('a').attr('href', function () {
                    //     return this.href.replace('Restore', 'Delete')
                    // })
                }, 700)
            }
        })
    })
}

/***
 * Жалобы - нарушения
 */
var complaints = ['Мат', 'Оскорбления, хамство', 'Разжигание нацрозни',
    'ФЛУД, комментарии не относящиеся к тематике статьи',
    'Оскорбление религиозных убеждений',
    'Целая статья в комментарии',
    'Антироссийские высказывания',
    'Другое'
]

/**
 * Добавление жалобы с выпадающим списком
 */
function AddComplaint(id, action) {
    var b = {};
    var mailpromt = '';

    b[dle_act_lang[3]] = function () {
        $(this).dialog('close');
    };

    b[dle_p_send] = function () {
        if ($('#dle-promt-text').val().length < 1) {
            $('#dle-promt-text').addClass('ui-state-error');
        } else {
            var response = $("#dle-promt-subject").val() + ': ' + $("#dle-promt-text").val();
            var entermail = '';
            if ($('#dle-promt-mail').val()) {
                entermail = $('#dle-promt-mail').val();
            }

            ShowLoading('');

            $.post(dle_root + 'engine/ajax/controller.php?mod=complaint', {
                    id: id,
                    text: response,
                    action: action,
                    mail: entermail,
                    user_hash: dle_login_hash
                },
                function (data) {
                    HideLoading('');
                    if (data == 'ok') {
                        $('#dlecomplaint').remove();
                        DLEalert(dle_p_send_ok, dle_info);
                    } else {
                        DLEalert(data, dle_info);
                    }
                });

        }
    };

    var type_select = $('<select name="type" id="dle-promt-subject" />')
    $.each(complaints, function (i, v) {
        $(type_select).append($('<option />').text(v).val(v));
    })

    $('#dlecomplaint').remove();

    if (dle_group == 5) {
        mailpromt = dle_mail + "<br><input type=\"text\" name=\"dle-promt-mail\" id=\"dle-promt-mail\" class=\"ui-widget-content ui-corner-all\" style=\"width:100%;\" value=\"\">";
    }

    $('body').append("<div id='dlecomplaint' title='" + dle_c_title + "' style='display:none'><p>" + dle_complaint + "</p><p id='type'></p><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:100%;height:140px;'></textarea>" + mailpromt + "</div>");
    $('#type').append(type_select)
    $('#dlecomplaint').dialog({
        autoOpen: true,
        width: 600,
        resizable: false,
        dialogClass: "modalfixed dle-popup-complaint",
        buttons: b
    });

    $('.modalfixed.ui-dialog').css({position: "fixed"});
    $('#dlecomplaint').dialog("option", "position", {my: "center", at: "center", of: window});

};


// Лог голосования за коментарий
showCommentsRate = function (id) {
    $('#dlepopup').remove();
    ShowLoading('');
    $.get(dle_root + 'engine/ajax/controller.php?mod=rate_logs', {cid: id}, function (data) {
        HideLoading('');
        DLEalert(data, dle_info);
    });

    return false;
}


doCommentsRate = function (rate, id) {
    ShowLoading('');

    var rating = parseInt($('[data-comments-ratig-layer-id="' + id + '"] span').text()),
        i = "plus" == rate ? rating + 1 : rating - 1;
    i > 0 && (i = "+" + i),

        $.get(dle_root + "engine/ajax/controller.php?mod=ratingcomments", {
            go_rate: rate,
            c_id: id,
            skin: dle_skin,
            user_hash: dle_login_hash
        }, function (data) {
            HideLoading('');
            if (data.success) {
                var rating = data.rating;

                rating = rating.replace(/&lt;/g, "<");
                rating = rating.replace(/&gt;/g, ">");
                rating = rating.replace(/&amp;/g, "&");
                rating = rating.replace(/>[+-]?\d+</g, ">" + i + "<");

                $('[data-comments-ratig-layer-id="' + id + '"]').html(rating);
                $('[data-comments-vote-num-id="' + id + '"]').html(data.votenum);
                $('[data-comments-likes-id="' + id + '"]').html(data.likes);
                $('[data-comments-dislikes-id="' + id + '"]').html(data.dislikes);
            } else if (data.error) {
                DLEalert(data.errorinfo, dle_info);
            }

        }, "json");
};

/* comments go to and back */
comGoTo = function (obj, id_parent) {
    var save_com_back = obj.rel;
    $('html,body').stop(true, true).animate({scrollTop: $('#comment-id-' + id_parent).offset().top - 45}, 'slow');
    $('#comment-id-' + id_parent).find('.c_answer_back').css({visibility: 'visible'}).attr('rel', save_com_back);
    return false;
}

comGoBack = function (obj) {
    obj.style.visibility = 'hidden';
    var get_com_back = obj.rel;
    $('html,body').stop(true, true).animate({scrollTop: $('#comment-id-' + get_com_back).offset().top - 45}, 'slow');
    return false;
}


/*************************
 * Предупреждения
 **************************/

$(document).on('click', '.com-warnings, .puser-warnings', function (e) {
    var uid = $(this).data('user')
    showWarning(uid)
});

var warnings = [
    'Мат',
    'Оскорбления, хамство',
    'Разжигание нацрозни',
    'ФЛУД, комментарии не относящиеся к тематике статьи',
    'Оскорбление религиозных убеждений',
    'Целая статья в комментарии',
    'Оскорбление автора статьи',
    'Троллинг, провокация',
    'Другое'
]

warning = function (id, user_id) {
    var b = {};
    var mailpromt = '';

    b[dle_act_lang[3]] = function () {
        $(this).dialog('close');
    };

    b[dle_p_send] = function () {
        if ($('#dle-promt-text').val().length < 1) {
            $('#dle-promt-text').addClass('ui-state-error');
        } else {
            ShowLoading('');

            $.post(dle_root + 'engine/ajax/controller.php?mod=warning', {
                    id: id,
                    type: $('#dle-promt-subject').val(),
                    text: $('#dle-promt-text').val(),
                    post_id: $('#post_id').val(),
                    user_hash: dle_login_hash
                },
                function (data) {
                    HideLoading('');
                    if (data == 'ok') {
                        $('#dlecomplaint').remove();
                        DLEalert(dle_p_send_ok, dle_info);
                    } else {
                        DLEalert(data, dle_info);
                    }
                });
        }
    };

    $('#dlecomplaint').remove();

    var type_select = $('<select name="type" id="dle-promt-subject" />')
    $.each(warnings, function (i, v) {
        $(type_select).append($('<option />').text(v).val(v));
    })

    $('body').append("<div id='dlecomplaint' title='Предупреждение' style='display:none'><p>Предупреждение</p><p id='type'></p><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:100%;height:140px;'></textarea></div>");
    $('#type').append(type_select)
    $('#dlecomplaint').dialog({
        autoOpen: true,
        width: 600,
        resizable: false,
        dialogClass: "modalfixed dle-popup-complaint",
        buttons: b
    });

    $('.modalfixed.ui-dialog').css({position: "fixed"});
    $('#dlecomplaint').dialog("option", "position", {my: "center", at: "center", of: window});
};

var w_cache = [];

editWarning = function (id) {
    if (!w_cache[id] || w_cache[id] == '') {
        w_cache[id] = $('#area-warn-' + id).html();
    }
    var b = {};
    b[dle_act_lang[3]] = function () {
        $(this).dialog('close');
    };
    b[dle_p_send] = function () {
        if ($('#dle-promt-text').val().length < 1) {
            $('#dle-promt-text').addClass('ui-state-error');
        } else {
            var text = $('#dle-promt-text').val()
            $(this).dialog('close');
            $('#dlepopup').remove();
            $.post(dle_root + 'engine/ajax/controller.php?mod=warning_manage&action=edit', {
                id: id,
                text: text,
                action: 'edit'
            }, function (data) {
                w_cache[id] = '';
                DLEalert(data, dle_info);
            });
        }
    };
    $('#dlewarning').remove();
    $('body').append("<div id='dlewarning' title='Редактирование предупреждения' style='display:none'><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'>" + w_cache[id] + "</textarea></div>");
    $('#dlewarning').dialog({
        autoOpen: true,
        width: 600,
        resizable: false,
        dialogClass: "modalfixed dle-popup-complaint",
        buttons: b
    });
    $('.modalfixed.ui-dialog').css({position: "fixed"});
    $('#dlewarning').dialog("option", "position", {my: "center", at: "center", of: window});
};

showWarning = function (user) {
    $('#dlepopup').remove();
    ShowLoading('');
    $.post(dle_root + 'engine/ajax/controller.php?mod=warning_manage&action=show', {
        user: user,
        action: 'show'
    }, function (data) {
        HideLoading('');
        DLEalert(data, dle_info);
    });
};

deleteWarning = function (id) {
    $('#dlepopup').remove();
    ShowLoading('');
    $.post(dle_root + 'engine/ajax/controller.php?mod=warning_manage&action=delete', {
        id: id,
        action: 'delete'
    }, function (data) {
        HideLoading('');
        DLEalert(data, dle_info);
    });
};


/*************************
 * Другие функции
 **************************/
// (function ($) {
//     $.fn.extend({
//         limiter: function (limit, elem) {
//             $(this).on("keyup focus", function () {
//                 setCount(this, elem);
//             });
//
//             function setCount(src, elem) {
//                 var chars = src.value.length;
//                 if (chars > limit) {
//                     src.value = src.value.substr(0, limit);
//                     chars = limit;
//                 }
//                 elem.html(limit - chars);
//             }
//
//             setCount($(this)[0], elem);
//         }
//     });
// })(jQuery);
//
// DLEconfirm = function (message, title, callback) {
//
//     var b = {};
//
//     b[dle_act_lang[1]] = {
//         id: 'close', text: dle_act_lang[1], click: function () {
//             $(this).dialog("close");
//             $("#dlepopup").remove();
//         }, "class": "btn-secondary"
//     }
//
//     b[dle_act_lang[0]] = function () {
//         $(this).dialog("close");
//         $("#dlepopup").remove();
//         if (callback) callback();
//     };
//
//     $("#dlepopup").remove();
//
//     $("body").append("<div id='dlepopup' class='dle-confirm' title='" + title + "' style='display:none'>" + message + "</div>");
//
//     $('#dlepopup').dialog({
//         autoOpen: true,
//         width: 500,
//         minHeight: 160,
//         resizable: false,
//         buttons: b
//     });
// };
//
// DLEprompt = function (message, d, title, callback, allowempty) {
//     var b = {};
//
//     b[dle_act_lang[3]] = {
//         id: 'close', text: dle_act_lang[3], click: function () {
//             $(this).dialog("close");
//             $("#dlepopup").remove();
//         }, "class": "btn-secondary"
//     }
//
//     b[dle_act_lang[2]] = function () {
//         if (!allowempty && $("#dle-promt-text").val().length < 1) {
//             $("#dle-promt-text").addClass('ui-state-error');
//         } else {
//             var response = $("#dle-promt-text").val()
//             $(this).dialog("close");
//             $("#dlepopup").remove();
//             if (callback) callback(response);
//         }
//     };
//
//     $("#dlepopup").remove();
//
//     $("body").append("<div id='dlepopup' class='dle-promt' title='" + title + "' style='display:none'>" + message + "<br /><br /><input type='text' name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;' value='" + d + "'/></div>");
//
//     $('#dlepopup').dialog({
//         autoOpen: true,
//         width: 500,
//         resizable: false,
//         dialogClass: "modalfixed dle-popup-promt",
//         buttons: b
//     });
//
//     $('.modalfixed.ui-dialog').css({position: "fixed"});
//     $('#dlepopup').dialog("option", "position", ['0', '0']);
//
//     if (d.length > 0) {
//         $("#dle-promt-text").select().focus();
//     } else {
//         $("#dle-promt-text").focus();
//     }
// };
//
// /* Шапка в мобильной версии */
// if(dle_device == 'smartphone')
// {
//     var lastScrollTop = 0;
//     var delta = 300;
//     var headerHeight = $('#header').outerHeight();
//     var dummy = $('<div />', {'style': 'height:' + headerHeight + 'px'})
//     $(window).scroll(function() {
//         hasScrolled();
//     });
// }

/**
 * Страница пользователя, смена типа погон
 * @param rank
 * @returns {boolean}
 */
$('#rank-select .rank-select-drop li.rank-select-drop-item').on('click', function () {
    var rank = $(this).data('rank')
    $.post(dle_root + "engine/ajax/controller.php?mod=userchangeranktype", {
        type: rank,
        user_id: $('#userinfo input[name="id"]').val()
    }, function (a) {
        $('#rank-select .rank > img').fadeOut(function () {
            $('#rank_current').attr('src', '/templates/' + dle_skin + '/images/n-rank-' + rank + '.png')
        }).fadeIn(), $(".branding").fadeOut(function () {
            $(".rank-select-drop > li").each(function (i) {
                $(".branding").removeClass('bg-' + $(this).data("rank"))
            })
            $(".branding").addClass('bg-' + rank)
            $('.puser-bg.fit-cover > img').attr('src', '/templates/' + dle_skin + '/images/bg-user/bg-' + rank + '.jpg')

        }).fadeIn()
    })
})

// Фунции коментариев в шапке
$(function () {
    $('#comments_add').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $("#dle-" +
                "-form").offset().top - 60
        }, 2000);
    })

    // Добавить коментарий скрываем кнопку
    // if ($('#addcomment').length == 0) {
    //     $('#comments_add, #comments_subscribe').hide();
    // }

    // Обновляем данные при добавлении/удалении нового коментария
    $('.pages a').bind('click', function () {
        $(document).ajaxComplete(function (event, xhr, settings) {
            if (settings.url.indexOf('comemnts') !== -1) {
                calculateMyComments();
                calculateNewComments();
            }
        });
    })

    if ($('#full-comments').length) {
        calculateNewComments();
        calculateMyComments();
    }
})

// Мои коментарии
var comments_my = []
var i = 0;

calculateMyComments = function () {
    comments_my = $('[data-owner="true"]').parent('div')
    if (comments_my.length > 0) {
        $('.fcoms-menu-my').attr('data-num', comments_my.length).removeClass('disabled')
    } else {
        $('.fcoms-menu-my').addClass('disabled')
    }
    i = 0;
}

// Новые коментарии
var comments_new = []
var s = 0;

calculateNewComments = function () {
    comments_new = $('[data-new="true"]').parent('div')
    if (comments_new.length > 0) {
        $('.fcoms-menu-new').attr('data-num', comments_new.length).removeClass('disabled')
    } else {
        $('.fcoms-menu-new').addClass('disabled')
    }
    s = 0;
}

// Навигация - новые комментарии на страницу
goToNewComment = function () {
    $('html,body').stop().animate({scrollTop: $('#' + $(comments_new[s]).attr('id')).offset().top - 55}, 600);
    comments_new.splice(0, 1);
    $('.fcoms-menu-new').attr('data-num', comments_new.length - i)
    var new_com_count = comments_new.length;
    if (new_com_count > 0) $('.fcoms-menu-new').attr('data-num', new_com_count)
    else $('.fcoms-menu-new').addClass('disabled');
}

// Навигация - мои комментарии на страницу
goToMyComment = function () {
    if (comments_my.length == 0)
        return DLEalert('У Вас нет комментариев на этой странице.', 'Внимание');

    if (i < comments_my.length)
        $('.fcoms-menu-my').attr('data-num', comments_my.length - i)
    else
        i = 0;

    $('.fcoms-menu-my').attr('data-num', comments_my.length - i)
    $('html,body').stop(true, true).animate({scrollTop: $('#' + $(comments_my[i]).attr('id')).offset().top - 55}, 600);
    i++;
}

scrollToAddComment = function () {
    ajax_cancel_reply_vo();
    $("html,body").stop().animate({
        scrollTop: $("#dle-comments-form").offset().top - 40
    }, 1100);
}

//переопределяем цитирование
function dle_ins(e) {
    if (!document.getElementById("dle-comments-form")) return !1;

    var o = $("textarea[id^=comments].active:visible").length ? $("textarea[id^=comments].active") : $("#dle-comments-form #comments"),
        t = "", i = "";

    return "" != dle_txt ? ($(o).val($(o).val() + dle_txt + "\n") , setTimeout(function () {
            o.focus()
        }, 800), i = ".bb-editor") :
        (ShowLoading(""),
                $.get(dle_root + "engine/ajax/controller.php?mod=quote", {
                    id: e,
                    user_hash: dle_login_hash
                }, function (e) {
                    HideLoading(""),
                        e = (e = (e = (e = (e = (e = (e = e.replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&")).replace(/&quot;/g, '"')).replace(/&#039;/g, "'")).replace(/&#039;/g, "'")).replace(/&#34;/g, '"'),
                        $(o).val($(o).val() + e + "\n"),
                        setTimeout(function () {
                            o.focus()
                        }, 800)
                })
        )
}

function hide_main_comment_form() {
    $('#dle-comments-form').hide();
}

function show_main_comment_form() {
    $('#dle-comments-form').show();
}

function ajax_cancel_reply_vo() {
    show_main_comment_form()
    $("#dlefastreplycomments").hide("blind", {}, 1400)
}

function ajax_fast_reply_vo(e, o, t) {
    show_main_comment_form()
    ajax_fast_reply(e, o, t)
}

function dle_reply_vo(s, r, o) {
    $.when(hide_main_comment_form()).then(
        dle_reply(s, r, o)
    );
}


function DeleteComments(e, o) {
    DLEconfirm(dle_del_agree, dle_confirm, function () {
        ShowLoading(""),
            $.get(dle_root + "engine/ajax/controller.php?mod=deletecomments", {
                id: e,
                dle_allow_hash: o
            }, function (e) {
                var o;
                HideLoading(""),
                    e = parseInt(e), isNaN(e) || (o = null, o = $("#comment-id-" + e),
                    $("html,body").stop().animate({
                        scrollTop: o.offset().top - 70
                    }, 700),
                    setTimeout(function () {
                        o.hide("blind", {}, 1400)
                    }, 700))
            })
    })
}


$('#xf_rank').on('change', function () {
    let rank = $(this).val();

    DLEconfirm('Внимание сейчас будет произведена смена звания и сброс баллов!',
        'Смена звания', function () {
            $.post(dle_root + "engine/ajax/controller.php?mod=changeuserrank", {
                rank: rank,
                user_id: $('#userinfo input[name="id"]').val()
            }, function (a) {
                DLEalert(a, 'Смена звания')
            })
        });
});


$(".full-story-tools > .rate-star > a").click(function (e) {
    $(this).toggleClass("active")
})
