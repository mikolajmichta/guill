function guill () {
    const regularExp = /królow.+elżbiet.|książ.+karol|księc.+karol|kat.+middleton|megha.+markle|księż.+kate|książ.+harr|księc.+harr|książ.+william|księc.+william/ig

    let royalNodes = $("span").filter(function () {
        return regularExp.test($(this).text());
    })

    royalNodes.closest("li").remove();
}


guill();