;(function( $ ) {

    $.fn.showLinkLocation = function() {

        this.filter( ".data-input" ).each( function() {
            let input = $( this ),
                parent = input.parent();
            console.log(parent);
            let spanWrap = $(`<span class="data-input-wrap"></span>`),
                spanInside = $(`<span class="data-input-inside"></span>`);
            spanWrap.insertAfter(input);
            input.appendTo(spanWrap);
            spanInside.appendTo(spanWrap);

            spanWrap.on('click', () => {
                input.prop('checked', true);
            });

        });



        return this;

    };

}( jQuery ));

// Usage example:
$( ".data-input" ).showLinkLocation();

