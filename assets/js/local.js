/**
 * Member Login
 * 
 * 說明: 
 * 
 * 會員登入
 * 會透過 localStorage 的 loginStatus 來紀錄登入狀態: 
 * loginStatus: 1 已登入 , 0 未登入
 */

//登入
function MemberLogin(){
    //....
    //if success set loginStatus to 1 for login
    $.fancybox.close();
    localStorage.setItem('loginStatus', 1);
}
//登出
function MemberLogout(){
    //....
    //if success set loginStatus to 0 for logout
    $.fancybox.close();
    localStorage.setItem('loginStatus', 0);
}
//檢查登入狀態，返回布林值 true 登入  false 未登入
function checkLoginStatus(){
    var loginStatus = localStorage.getItem('loginStatus');
    var results = loginStatus==1?true:false;
    return results;
}



/**
 * Fancybox Template
 */
// $.fancybox.defaults.buttons = [];
$('.members_login').each(function(){
    var tg = $(this);
    tg.on('touchstart click', function(){
        var b = checkLoginStatus();//檢查登入狀態
        if(b){
            src_temp = '#members_area_temp';
        }else{
            src_temp = '#member_login_temp';
        }
        $.fancybox.close();
        $.fancybox.open({
            src  : src_temp
        });
    })
});


/**Template Page*/
$(".eyes").each(function(){
    var tg = $(this);
    tg.on('touchstart click', function(){
       var checkObserivable = tg.hasClass('on');
       if(checkObserivable){
           tg.removeClass('on');
           tg.parent().find('.password').attr('type', 'password');
       } else{
           tg.addClass('on');
           tg.parent().find('.password').attr('type', 'text');
       }
    });
});

//Member Login Page - 登入
$(".member_page").find('.switch .tab').each(function(i){
    $(this).on('touchstart click', function(){
        $(".member_page").find('.switch .tab').removeClass('on');
        $(".member_page").find('.form').removeClass('on');
        $(this).addClass('on');
        $(".member_page").find('.form').eq(i).addClass('on');

    });
});

//Member Register - 註冊
$(".register_btn").on('touchstart click', function(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#member_register_temp'
    });
});

//Member SMS - 簡訊
$(".sms_btn").on('touchstart click', function(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_sms_temp'
    });
});

//借還首頁
function lend_borrow($params){
    console.log("click len_borrow :"+$params);
    //...
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_lend_borrow_temp',
        beforeShow: function(){
            $(".fancybox-container").addClass('green-bg');
        },
        beforeClose: function(){
            $(".fancybox-container").removeClass('green-bg');
        }
    });
}

//借出
function borrow(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_borrow_or_lend_temp',
        beforeShow: function(){
            $(".member_borrow_or_lend_page").removeClass('lend').addClass('borrow');
            $(".fancybox-container").addClass('green-bg');
        },
        beforeClose: function(){
            $(".fancybox-container").removeClass('green-bg');
        }
    });
}

//歸還
function lend(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_borrow_or_lend_temp',
        beforeShow: function(){
            $(".member_borrow_or_lend_page").removeClass('borrow').addClass('lend');
            $(".fancybox-container").addClass('green-bg');
        },
        beforeClose: function(){
            $(".fancybox-container").removeClass('green-bg');
        }
    });
}

//確認歸還
function start_lend(){
    //... finish
    borrow_finished();
}

//借出成功
function borrow_finished(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_finished_temp'
    });
}

//確認借出
function start_borrow(){
    //... finish
    borrow_finished();
}


//會員條款
function members_rules(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_rules_temp'
    });
}

//Ubowl使用規範
function members_rules2(){
    $.fancybox.close();
    $.fancybox.open({
        src  : '#members_rule2_temp'
    });
}

//Member withdraw - 儲值記錄: 儲值方案切換
$(".withdraw_part").find('.v-m').on('click', function(i){
    $(".withdraw_part").find('.v-m').removeClass('on');
    $(this).addClass('on');
});
//儲存儲值方案
function withdraw_part_save(){
    //.../
    alert('localjs')
}
//儲值記錄 手風琴
function withdraw_record_part(tg){
    var tbody = $(tg).parent().find('.tbody');
    if(tbody.css('display')=='none'){
        $(tg).parent().addClass('on');
        tbody.stop().slideDown(200);
    }else{
        // $(tg).parent().parent().find('.tab').removeClass('on');
        $(tg).parent().removeClass('on');
        tbody.stop().slideUp(200);
    }
}


