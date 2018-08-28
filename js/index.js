// 右侧弹框的动画
$(".search_appear").on("click", function () {
  if ($(".glyphicon").hasClass("glyphicon-chevron-left")) {
    $(".search_appear").stop().animate({
      right: "400px"
    }, 500).children("i").attr("class", "glyphicon glyphicon-chevron-right");
    $(".search_wrap").stop().animate({
      right: 0
    }, 500);
  } else {
    $(".search_appear").stop().animate({
      right: "0"
    }, 500).children("i").attr("class", "glyphicon glyphicon-chevron-left");
    $(".search_wrap").stop().animate({
      right: "-400px"
    }, 500);
  }
})

// 手风琴效果
$(".parent_node").each(function (e) {
  $(this).on("click", function () {
    $(this).next().toggleClass("displayNone");
  });
})

// 取号
$(".fetch_num").on("click", function () {
  if (true) {
    $(".alert").fadeIn();
  } else {
    $(".alert").attr("class", "alert alert-warning alert-dismissible").fadeIn();
  }
  var count = 5;
  let timer = setInterval(function () {
    count--;
    console.log(count);
    if (count <= 0) {
      $(".alert").fadeOut();
      clearInterval(timer);
    }
  }, 1000)
})

// 弃号
function discardedNumClose() {
  $(".discardedNumber_cover").css("display", "none");
}

function discardNum(val) {
  $(".discardedNumber_cover").css("display", "block");
}

// 退出
$(".logout").on("click", function () {
  window.location.href = "login.html";
})