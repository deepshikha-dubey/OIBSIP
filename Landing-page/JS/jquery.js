
/*
$(document).ready(() => {
    var url = location.href.replace(/\/$/, "");
    if(location.hash){
        const hash = url.split("#");
        $('#myTab a[href="#' +hash[1] + '"]').tab("show");
        url = location.href.replace(/\/#/, "#");
        history.replaceState(null, null, url);
    }
    $('a[data-toggle="tab"]').on("click", function(){
        var newUrl;
        const hash = $(this).attr("href");
        if(hash == "#person1"){
            newUrl = url.split("#")[0];
        }
        else{
            newUrl = url.split("#")[0] + hash;
        }
        newUrl += "/";
        history.replaceState(null, null, newUrl);
    });
});

*/

$(document).ready(() => {
    const url = location.href.replace(/\/$/, ""); // Remove trailing slash
    if (location.hash) {
        const hash = url.split("#")[1]; // Extract hash fragment
        $('#myTab a[href="#' + hash + '"]').tab("show"); // Show the corresponding tab
        url = location.href.replace(/\/#/, "#"); // Update URL
        history.replaceState(null, null, url); // Update browser history
    }

    $('a[data-toggle="tab"]').on("click", function() {
        const hash = $(this).attr("href");
        const newUrl = hash === "#acurate" ? url.split("#")[0] : url.split("#")[0] + hash;
        history.replaceState(null, null, newUrl + "/"); // Update URL
    });
});
