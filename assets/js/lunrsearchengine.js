
var documents = [{
    "id": 0,
    "url": "https://www.OakleyForums.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://www.OakleyForums.com/about",
    "title": "About OakleyForums.com",
    "body": "Coming soon "
    }, {
    "id": 2,
    "url": "https://www.OakleyForums.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://www.OakleyForums.com/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                             Oakley Big Taco Sunglasses Polished Rootbeer Tungsten Iridium Lens                              :               Oakley Big Taco Sunglasses Polished Rootbeer Tungsten Iridium Lens These are a pair of new sunglasses with the original box. :                                                                       06 Mar 2023                                                                                                                                                                                                                                                                                                                    Oakley Zero L Sunglasses                              :               Oakley Zero L Black Sunglasses These are a pair of new sunglasses with the original box, there is a small nick in the lens visible. . . :                                                                       03 Mar 2023                                                                                                                                                                                                                                                                                                                    Oakley Gascan Flying Tiger Sunglasses                              :               SOLD:                                                                       03 Mar 2023                                                                                                                                                                                                                                                                                                                    Oakley Thump Pro 1GB Open box                              :               SOLD:                                                                       15 Feb 2023                                                                                                                      All Stories:                                                                               Oakley Big Taco Sunglasses Polished Rootbeer Tungsten Iridium Lens              :       Oakley Big Taco Sunglasses Polished Rootbeer Tungsten Iridium Lens These are a pair of new sunglasses with the original box. :                               06 Mar 2023                                                                                                              Oakley Zero L Sunglasses              :       Oakley Zero L Black Sunglasses These are a pair of new sunglasses with the original box, there is a small nick in the lens visible in Ebay photos, but otherwise. . . :                               03 Mar 2023                                                                                                              Oakley Gascan Flying Tiger Sunglasses              :       SOLD:                               03 Mar 2023                                                                                                              Oakley Thump Pro 1GB Open box              :       SOLD:                               15 Feb 2023                                            "
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
    "url": "https://www.OakleyForums.com/oakley-big-taco-sunglasses",
    "title": "Oakley Big Taco Sunglasses Polished Rootbeer Tungsten Iridium Lens",
    "body": "2023/03/06 - Oakley Big Taco Sunglasses Polished Rootbeer Tungsten Iridium Lens These are a pair of new sunglasses with the original box. You can purchase them via my eBay auction. Introducing Oakley Big Taco Sunglasses - the ultimate eyewear for those who crave adventure, style, and functionality. Designed with a bold frame and sleek lines, these sunglasses offer a unique blend of fashion and performance. Whether you are hitting the beach, going for a run, or just lounging in the sun, Oakley Big Taco sunglasses have got you covered. Here are some of the top features of Oakley Big Taco sunglasses:    High-Quality Materials: Oakley is known for using top-quality materials in their products, and the Big Taco sunglasses are no exception. The frames are made of lightweight and durable O Matter material, which ensures that they can withstand even the toughest outdoor activities. Additionally, the lenses are made of Plutonite material, which provides exceptional clarity and protection from harmful UV rays.     Three-Point Fit: The Big Taco sunglasses feature a three-point fit, which ensures that they stay securely in place while you are active. This design feature is particularly important for athletes or anyone who needs to move around a lot, as it prevents the sunglasses from slipping or sliding during activity.     Comfortable Fit: In addition to their functional features, Oakley Big Taco sunglasses are also incredibly comfortable to wear. The earsocks and nose pads are made of Unobtainium material, which becomes more grippy as you sweat, ensuring that the sunglasses stay in place even during intense activity.     Stylish Design: The Big Taco sunglasses feature a bold, rectangular frame that is both stylish and functional. This design is particularly suited to those with larger faces, as it provides ample coverage and protection from the sun’s rays.  Overall, Oakley Big Taco sunglasses are the perfect choice for anyone who wants a high-performance, stylish, and comfortable pair of sunglasses. With their three-point fit, and durable materials, they are sure to become your go-to eyewear for all your outdoor adventures. More Photos:      "
    }, {
    "id": 8,
    "url": "https://www.OakleyForums.com/oakley-zero-l-sunglasses",
    "title": "Oakley Zero L Sunglasses",
    "body": "2023/03/03 - Oakley Zero L Black Sunglasses These are a pair of new sunglasses with the original box, there is a small nick in the lens visible in Ebay photos, but otherwise brand new. No bag included. You can purchase them via my eBay auction. More Photos:     "
    }, {
    "id": 9,
    "url": "https://www.OakleyForums.com/oakley-gascan-flying-tiger",
    "title": "Oakley Gascan Flying Tiger Sunglasses",
    "body": "2023/03/03 - SOLD: Oakley Gascan Flying Tigers Matte Sand Dark Bronze + Pin 12-784 New In Box Rare These are a pair of glasses with the original box and I believe all materials and products that come in the box. They are brand new. More Photos:       "
    }, {
    "id": 10,
    "url": "https://www.OakleyForums.com/oakley-thump-pro-1gb-open",
    "title": "Oakley Thump Pro 1GB Open box",
    "body": "2023/02/15 - SOLD: Oakley Thump Pro 1GB These are a pair of glasses with the original box and I believe all materials and products that come in the box. They are essentially brand new, I did plug them in and charge them to make sure that they work. You can purchase them via my eBay auction. More Photos:       "
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