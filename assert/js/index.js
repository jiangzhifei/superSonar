/**
 * Created by jiang on 16/7/9.
 */

$(document)
    .ready(function () {

        var vmenus = $("#imenus").children();
        vmenus.map(
            function () {
                var source = this.childNodes[1];
                console.log(source)
                source.api({
                    action: source.dataset.type
                })
                ;
                // source.onclick =
                //     function () {
                //         console.log(source.dataset.type);
                //         //$(window.location).attr('href', 'http://www.baidu.com');
                //         source.api({
                //             action: source.dataset.type
                //         })
                //         ;
                //     }

            }
        );


    })
;
