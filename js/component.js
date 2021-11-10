/////### DateRangePicker 日期時間選擇 Start ###/////
// https://www.daterangepicker.com/
$(function () { 
  $('input[name="dateTimesPick"]').daterangepicker({
    timePicker: true,
    singleDatePicker: true,
    locale: {
      format: 'YYYY/MM/DD hh:mm A'
    }
  });
});

// 單日期選擇器 //
$(function () {  
  $('input[name="singleDate"]').daterangepicker({
    singleDatePicker: true,
  showDropdowns: true,
  //   minYear: 1901,
  // maxYear: parseInt(moment().format('YYYY'), 10),
    locale: {
      format: 'YYYY/MM/DD'
    }
    
  });
});
/////###  End ###/////

/////### magicsuggest 支援可輸入select Start ###/////
// http://nicolasbize.com/magicsuggest/doc.html  

$(function () { 
  $('.searchAddress').magicSuggest({
　　placeholder:'---- 請輸入 ----',
　　allowFreeEntries: true,
　　maxSelection:1,
　　autoSelect:true,
　　displayField:"value",
　　resultAsString:true,
    selectionStacked: true,
    toggleOnClick: true,
　　data: ['台北', '新北市']
  }); 
});


///##### disabled magicsuggest 支援可輸入select #####////
$(function () { 
  $('.searchAddress_disable').magicSuggest({
　　placeholder:'---- 請輸入 ----',
　　allowFreeEntries: true,
　　maxSelection:1,
　　autoSelect:true,
　　displayField:"value",
　　resultAsString:true,
    selectionStacked: true,
    toggleOnClick: true,
    disabled: true,
　　data: ['台北', '新北市']
  }); 
});
/////###  End ###/////


/////### 單選 select2 Start ###/////
// https://select2.org/getting-started/basic-usage
$(function () {
    $(".singleSelect").select2({
    placeholder: "---- 請選擇 ----",
    allowClear: true,
    closeOnSelect: true,
    allowHtml: true,
    data: [
          { id: 1, text: "Blue" },
          { id: 2, text: "David"},
          { id: 3, text: "Judy" },
          { id: 4, text: "Kate" },
          { id: 5, text: "John" }
      ],
    });
    
});

// #### 複選 Select2 #### //
$(function () { 
  $(".multipleSelect").select2({
    placeholder: "---- 請選擇 ----",
    allowClear: true,
    tags: true,

  });
});  
/////###  End ###/////    


/////### textArea內容  字數限制 ###/////
$(".fixedArea").on('keyup', function () {
  maxlength = 700;
  const keyupNum = $(".fixedArea").val().length
  $(".wordsNum").text($(".fixedArea").val().length)
  if (keyupNum > maxlength) {
    $(".wordsNum").text(700)
    $(".fixedArea").text($(".fixedArea").val().substring(0,700))
  } 
})
/////###  End ###/////



/////### Datatable Control Start ###/////
// https://datatables.net/

//## 包含標題與搜尋功能 RWD card - Start ##//
$(".listDataTable").DataTable({
        searching: true,
        "paging": true,
        "orderCellsTop": true,
        // "orderMulti": true,
        "stateSave": true,
        "fnInitComplete": function (settings, json) {  
        $(".listDataTable").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>")},
        "autoWidth": true,  
        // "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        buttons: [
            {
              extend: 'excel',
              text: '<i class="fa fa-copy"></i> Excel',
              exportOptions: {
              columns: ':visible'
              }
            },
            {
              extend: 'colvis',
              text: '<i class="fas fa-filter"></i> Colvis',
              columns: ':not(:eq(8),:eq(1))',
        
            },
            
        ],
        dom: "<'row justify-content-between'<'listTitle col-md-8'B><'col-md-4'fr>>" +
        "<'row'<'col-sm-12'tlp>>",
  })

    // $(".listTitle").append(`<div class='text-md-left text-center'>
    //                         <h2 class="currentName">OOO<span class="currentTitle">的安排日程</span></h2>
    //                     </div>`)


  // Datatable Hover Background //
    let oldColor = "";
    $(".listDataTable tbody tr").mouseover(function () {
        oldColor = $(this).css("background-color");
	  $(this).css("background-color","#ffdab5");
    }).mouseout(function () {
        $(this).css("background-color",oldColor);
    });
  
//## 包含標題與搜尋功能 RWD card - End ##//    

//## Datatable Responsive 套件 - Start ##//
 $('.datatable-RWD').DataTable({
        searching: true,
        "paging": true,
        "ordering": false,
        "info": true,
        "autoWidth": false,
        scroller: true,
        responsive: true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        "keys": {
          clipboard: true,
          blurable: true,
        },
        select: {
          style: 'multi',
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
 );
//## Datatable Responsive 套件 - End ##//   

//## Datatable CSS客製 RWD card - Start ##//
  $('.datatable-card,.table-gray').DataTable({
        searching: true,
        "paging": true,
        "ordering": false,
        "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
          },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
  );
//## Datatable CSS客製 RWD card - End ##//

//## Datatable Excel  - Start ##//
// datatable-npm paste excel
$('.datatable-npm').DataTable({
        searching: false,
        "paging": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        "scroller": true,
        "responsive": false,
        "scrollX": true,
        "lengthChange": false,
        "language": {
            "decimal": "-",
            "thousands": ",",
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        select: {
          style: 'multi',
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
);
const body = document.body;
function clearInput(e){
  switch(e.keyCode){
    case 8:
        $(".datatable-npm .selected").find("input").val(" ")
    break;
  }
}
body.addEventListener('keydown', clearInput ,false) 
$('.datatable-excel').DataTable({
        searching: false,
        "paging": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        "scroller": true,
        "responsive": false,
        "scrollX": true,
        "lengthChange": false,
        "language": {
            "decimal": "-",
            "thousands": ",",
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        "keys": {
          clipboard: true,
          blurable: true,
        },
        select: {
          style: 'multi',
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
);


// datatable-excel paste excel
$('.datatable-excel input').on('paste', function(e) {
  let $this = $(this);
  $.each(e.originalEvent.clipboardData.items, function (i, v) {
    if (v.type === 'text/plain') {
      v.getAsString(function(text) {
        console.log(text);
        let x = $this.closest('td').index();
        let y = $this.closest('tr').index() + 1;
        text = text.trim('\r\n');
        $.each(text.split('\r\n'), function(i2, v2) {
          $.each(v2.split('\t'), function(i3, v3) {
            let row = y + i2;
            let col = x + i3;
            $this.closest('.datatable-excel').find('tr:eq(' + row + ') td:eq(' + col + ') input').val(v3);
          });
        });
        const body = document.body;
        function clearInput(e){
          switch(e.keyCode){
          case 8:
              $(".datatable-excel .selected").find("input").val(" ")
          break;
        }
        }
        body.addEventListener('keydown', clearInput ,false) //偵測按下按鍵的行為
      });
    } else if (v.type === 'number') {
      console.log("hi number");
    }
  });
  return false;
});




/////### Datatable Control End ###/////


/////### SummerNote Start ###/////
  $(document).ready(function() {
    $('#summernote').summernote({
        placeholder: 'Hello Bootstrap 4',
        tabsize: 2,
        height: 200,
    }
  );
});
/////### SummerNote End ###/////

/////###  設定列印範圍 Start ###/////
function printDiv(){
  var newWin=window.open('','列印視窗');
  newWin.document.open();
  newWin.document.write('<html>'+
    '<head>'+
      '<link rel="stylesheet" href="./scss/print.css">'+
    '</head>'+
    '<body onload="window.print()">'+
      $('#List').html()+
    '</body>'+
  '</html>');
  newWin.document.close();
  setTimeout(function(){newWin.close();},10);
}
/////###  設定列印範圍 End ###/////

/////###  顯示密碼 Start  ###/////
$('.showpassword').click(function () {
        if($(".password_input").attr("type")=="password"){
          $(".password_input").attr("type","text");
          $(".showpassword").css("opacity", 0.3)
          $(this).toggleClass("fa-eye fa-eye-slash")
        }
        else{
          $(".password_input").attr("type","password");
          $(".showpassword").css("opacity", 1)
          $(this).toggleClass("fa-eye fa-eye-slash")
        }
})
/////###  顯示密碼 End  ###/////

/////###  顯示圖片 Start  ###/////
$(function () {
    $('.showPic').on('click', function(e){      
      const objectURL = $(this).attr('src');
      // console.log("objectURL", objectURL);
      $(".showMaxPic").attr("src", objectURL);
    }); 
});
/////###  顯示圖片 End  ###/////