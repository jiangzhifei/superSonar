/**
 * Created by jiang on 16/7/9.
 */
$(document)
    .ready(function () {
        var vmenus = $("#imenus").children();
        vmenus.map(
            function () {
                var source = this.childNodes[1];
                var type = source.dataset.type
                // console.log(type)
                console.log(source.id)
                var id = source.id
                $("#"+id).api({
                    action : type
                });

            }
        );


    })
;
