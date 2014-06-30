;(function($) {

    $.fn.waffler = function (options) {
        var $waffles = $('.waffle'),
            $items = $waffles.find('li'),
            dragging = false,
            $waffle,
            $item;

        $items.mousedown(function () {
            $item = $(this);
            $waffle = $item.parent();
            $items.addClass('transparent');
            $item.addClass('moving');
            dragging = true;
        });

        $items.mousemove(function (e) {
            var $hoverItem = $(this),
                overTop = false,
                overBottom = false,
                hoverItemHeight = $hoverItem.outerHeight(),
                yPos = e.offsetY;

            yPos < (hoverItemHeight / 2) ? overTop = true : overBottom = true;

            if (dragging && overTop) {
                $item.insertBefore($hoverItem);
            }

            if (dragging && overBottom) {
                $item.insertAfter($hoverItem);
            }
        });

        $(document).mouseup(function () {
            $items.removeClass('transparent');
            $item.removeClass('moving');
            dragging = false;
        });

    };

})(jQuery);