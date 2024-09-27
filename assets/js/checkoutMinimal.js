jQuery(window).load( function() {

    jQuery('#summaryDetailsButton').click( function() {
        jQuery('#summaryDetailsButton, .summaryDetails').toggleClass('open')
    })

    jQuery('.addonInput').each( function() {
        let minusButton = jQuery(this).find(".addonLess");
        let plusButton = jQuery(this).find(".addonPlus");
        let input = jQuery(this).find(".addonNumberInput");
        
        minusButton.click(function(event) {
            event.preventDefault();
            let inputValue = parseInt(input.val()); // Get current value each click

            if (inputValue > 0) input.val(inputValue - 1);
        });

        plusButton.click(function(event) {
            event.preventDefault();
            let inputValue = parseInt(input.val());

            input.val(inputValue + 1);
        });
    })

    jQuery('.addonbtn').click( function(event) {
        event.preventDefault();
        let thisText = jQuery(this).text();

        if (thisText === "Add") {
            jQuery(this).text("Added!");
        } else {
            jQuery(this).text("Add");
        }

        jQuery(this).toggleClass('checked');
    })

})