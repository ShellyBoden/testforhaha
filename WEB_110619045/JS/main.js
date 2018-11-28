protected void Page_Load(object sender, EventArgs e)
        {
            //註冊事件 
            btnStartExam.Attributes.Add("onmouseover", "this.src='../images/a.png'");    //滑鼠移上去更換新的圖片
            btnStartExam.Attributes.Add("onmouseout", "this.src='../images/b.jpg'"); //滑鼠移開回復原來圖
        }


$(function(){
    //當滑鼠滑入時將div的class換成divOver
    $('.cl').hover(function(){
    $(this).addClass('divOver');
    },function(){
    //滑開時移除divOver樣式
    $(this).removeClass('divOver');
    }
    );
    });        