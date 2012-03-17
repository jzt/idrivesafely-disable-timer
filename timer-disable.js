chrome.extension.sendRequest({setIconPath: "icon-color.png"}, function(){});

var scriptContent = "vTimeReq = 0;"
var script = document.createElement('script')
script.appendChild(document.createTextNode(scriptContent));
document.getElementsByTagName('head')[0].appendChild(script);

$(function() {
    $("form[name='timer'] > input").val("0");
});
