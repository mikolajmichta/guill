function guill () {
    const regularExp = /królow.+elżbiet.|książ.+karol|księc.+karol|kat.+middleton|megha.+markle|księż.+kate|książ.+harr|księc.+harr|książ.+william|księc.+william|księż.+megh|królo.+megh/i

    let royalNodes = $("span").filter(function () {
        return regularExp.test($(this).text());
    })

    royalNodes.closest("li").remove();
}


guill();