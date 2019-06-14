//js functions
(function(){
    
    init();

    function init() {

        // move the entire board
        $("#container").sortable({
            zIndex: 9999,
            placeholder: "placeholder",
                start: function( e, ui ){
                    ui.helper[0].classList.add('rotate');
                    ui.placeholder.height(ui.helper.children()[0].clientHeight);
                },
                stop: function( e, ui ) {
                    ui.item[0].classList.remove("rotate");
                }
        });

    }

})();