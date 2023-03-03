
var documents = [{
    "id": 0,
    "url": "https://www.OakleyForums.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://www.OakleyForums.com/about",
    "title": "About OakleyForums.com",
    "body": " OakleyForums. com is a sample blog template from Chris Hammond With the open source repository available on GitHub, you can easily fork the repository and create your own blog/website using GitHub Pages for hosting. Learn how to use OakleyForums "
    }, {
    "id": 2,
    "url": "https://www.OakleyForums.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://www.OakleyForums.com/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                             Oakley Zero L Sunglasses                              :               Oakley Zero L Black Sunglasses These are a pair of new sunglasses with the original box, there is a small nick in the lens visible. . . :                                                                       03 Mar 2023                                                                                                                                                                                                                                                                                                                    Oakley Gascan Flying Tiger Sunglasses                              :               Oakley Gascan Flying Tigers Matte Sand Dark Bronze + Pin 12-784 New In Box Rare These are a pair of glasses with the original box. . . :                                                                       03 Mar 2023                                                                                                                                                                                                                                                                                                                    Oakley Gascan Flying Tiger Sunglasses                              :               SOLD:                                                                       15 Feb 2023                                                                                                                      All Stories:                                                                               Oakley Zero L Sunglasses              :       Oakley Zero L Black Sunglasses These are a pair of new sunglasses with the original box, there is a small nick in the lens visible in Ebay photos, but otherwise. . . :                               03 Mar 2023                                                                                                              Oakley Gascan Flying Tiger Sunglasses              :       Oakley Gascan Flying Tigers Matte Sand Dark Bronze + Pin 12-784 New In Box Rare These are a pair of glasses with the original box and I believe all materials. . . :                               03 Mar 2023                                                                                                              Oakley Gascan Flying Tiger Sunglasses              :       SOLD:                               15 Feb 2023                                            "
    }, {
    "id": 4,
    "url": "https://www.OakleyForums.com/About",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "https://www.OakleyForums.com/redirects.json",
    "title": "",
    "body": "{“/About”:”https://www. oakleyforums. com/about”} "
    }, {
    "id": 6,
    "url": "https://www.OakleyForums.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "https://www.OakleyForums.com/oakley-zero-l-sunglasses",
    "title": "Oakley Zero L Sunglasses",
    "body": "2023/03/03 - Oakley Zero L Black Sunglasses These are a pair of new sunglasses with the original box, there is a small nick in the lens visible in Ebay photos, but otherwise brand new. No bag included. You can purchase them via my eBay auction. "
    }, {
    "id": 8,
    "url": "https://www.OakleyForums.com/oakley-gascan-flying-tiger",
    "title": "Oakley Gascan Flying Tiger Sunglasses",
    "body": "2023/03/03 - Oakley Gascan Flying Tigers Matte Sand Dark Bronze + Pin 12-784 New In Box Rare These are a pair of glasses with the original box and I believe all materials and products that come in the box. They are brand new. You can purchase them via my eBay auction. "
    }, {
    "id": 9,
    "url": "https://www.OakleyForums.com/oakley-thump-pro-1gb-open",
    "title": "Oakley Gascan Flying Tiger Sunglasses",
    "body": "2023/02/15 - SOLD: Oakley Thump Pro 1GB These are a pair of glasses with the original box and I believe all materials and products that come in the box. They are essentially brand new, I did plug them in and charge them to make sure that they work. You can purchase them via my eBay auction. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});