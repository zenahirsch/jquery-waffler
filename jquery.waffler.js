;(function($) {

    $.fn.waffler = function (options) {
        var $waffle = $('#waffle'),
            $waffleItems = $('#waffle li'),
            $waffleItem,
            $hoverItem,
            dragging = false;

        $waffleItems.mousedown(function () {
            $waffleItem = $(this);
            $waffleItem.css('opacity', '0.5');
            dragging = true;
        });

        $(document).mousemove(function (e) {
            var yPos = e.clientY,
                yOffset = e.offsetY;

            console.log('yPos', yPos);

            if (dragging) {
                $waffleItem.css({
                    'position': 'relative',
                    'left': 0,
                    'top': 10
                });
            }
        });

        $waffleItems.mousemove(function (e) {
            var yPos = e.offsetY,
                $hoverItem = $(this),
                hoverItemHeight = $hoverItem.outerHeight(),
                hoverTop = false,
                hoverBottom = false,
                $placeholder = $('li.placeholder');

            yPos < (hoverItemHeight / 2) ? hoverTop = true : hoverBottom = true;

            if (dragging && hoverTop) {
                $waffleItem.insertBefore($hoverItem);
            }

            if (dragging && hoverBottom) {
                $waffleItem.insertAfter($hoverItem);
            }
        });

        $(document).mouseup(function () {
            $waffleItem.css({
                'opacity': '1',
                'position': 'static'
            });
            dragging = false;
        });

    };

})(jQuery);