(

  // ajax请求函数
  function sendAjax(url, type, params) {
    $.ajax({
      url: url,
      type: type,
      data: params,
      timeout: 5000,
      dataType: "json",
      beforeSend: function(XMLHttpRequest) {

      },
      success: function(data) {
        return data;
      },
      error: function(data) {
        return data
      }
    })
  }

)();
  
