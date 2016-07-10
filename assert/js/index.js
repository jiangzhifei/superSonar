/**
 * Created by jiang on 16/7/9.
 */

$(document)
    .ready(function () {

        var vmenus = $("#imenus").children();
        vmenus.map(
            function () {
                var source = this.childNodes[1];
                source.onclick =
                    function () {
                        console.log(source.dataset.type);
                        $(window.location).attr('href', 'http://www.baidu.com');
                        //alert(this.dataset.type)
                    }

            }
        );


    })
;