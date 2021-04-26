function updatePreview(){
    var previewFrame = document.getElementById('preview');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
    editor.refresh();
}
function downloadCode(){
    document.getElementById("download-value").value = editor.getValue();
    document.getElementById("download-form").submit();
    updatePreview();
}
function newWindow(){
    document.getElementById("code-value").value = editor.getValue();
    document.getElementById("fullscreen-form").submit();
    updatePreview();
}

function setHeight(h) {
    var vgt = h - 140;
    $(".vr .CodeMirror").height(vgt);
    $(".vr .output-area, .vr #preview").height(vgt);
	
    if($("#preview-pane").is(":visible")){
        var hgt = h - 148;
        $(".hr .CodeMirror").height(hgt/2);
        $(".hr .output-area, .hr #preview").height(hgt/2);
        $(".hr .inner-area").addClass("bordered");
    } else{
        var hgt = h - 140;
        $(".hr .CodeMirror").height(hgt);
        $(".hr .inner-area").removeClass("bordered");
    }
}

function toggleView(){
    $(".frame-box").toggleClass("hr vr");
    $(window).trigger('resize');
	if (typeof editor !== 'undefined'){
        editor.refresh();
    }
}

$(document).ready(function(){
    setHeight($(window).height());
});

$(window).resize(function(){
    $(window).bind("resize", function(){ 
        setHeight($(window).height());
    });
});
$(window).trigger('resize');

$(document).ready(function(){
    var textCode = $("#code").val();
    var titleText = textCode.match("<title>(.*)</title>");
    var pageURL = $(location).attr("href");
    $('meta[property="og:title"]').attr("content", titleText[1])
    $('meta[property="og:description"]').attr("content", "See live example at - " + pageURL);

    $("#check").click(function(){
        updatePreview();
    });
    
    //show hide right pane
    $(".vr .hide-preview-pane").click(function(){
        $(this).hide();
        $(".show-preview-pane").show();
        $("#preview-pane").removeClass("show").addClass("hide");
        $("#code-pane").addClass("full-screen");
    });
    $(".vr .show-preview-pane").click(function(){
        $(this).hide();
        $(".hide-preview-pane").show();
        $("#preview-pane").removeClass("hide").addClass("show");
        $("#code-pane").removeClass("full-screen");
    });
    //show hide top pane
    $(".hr .hide-preview-pane").click(function(){
        $(this).hide();
        $(".show-preview-pane").show();
        $("#preview-pane").removeClass("show").addClass("hide");
        $(".hr .CodeMirror").height($(window).height() - 140);
        $(".hr .output-area, .hr #preview").height($(window).height() - 140);
    });
    $(".hr .show-preview-pane").click(function(){
        $(this).hide();
        $(".hide-preview-pane").show();
        $("#preview-pane").removeClass("hide").addClass("show");
        setHeight($(window).height());
    });	
    $(".show-preview-pane, .hide-preview-pane").click(function(){
        $(window).trigger('resize');
        if (typeof editor !== 'undefined'){
            editor.refresh();
        }		
    });
	
    $("#preview").load(function(){
        $("#preview").contents().find('form').submit(function(e){														
            var str = $.trim($(this).attr("action"));
            if(str != 'https://www.google.com/search'){
                if(!str.match(/^\/examples/) || !str.match(/.php$/)){
                    e.preventDefault();
                    $("#preview").contents().find("body").html('<h3 style="font-family: sans-serif;margin: 20px;padding-left: 40px;line-height: 34px;background: url(/lib/images/error-icon.png) left center no-repeat;">Error: Invalid request. Please try again.</h3>');
                }
            }            
        });
    });
});