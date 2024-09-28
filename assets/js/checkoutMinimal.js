jQuery(window).load( function() {

    jQuery('.addonInput').each( function() {
        let minusButton = jQuery(this).find(".addonLess");
        let plusButton = jQuery(this).find(".addonPlus");
        let input = jQuery(this).find(".addonNumberInput");
        
        minusButton.click(function(event) {
            event.preventDefault();
            let inputValue = parseInt(input.val()); // Get current value each click

            if (inputValue > 0) input.val(inputValue - 1).trigger('change');
        });

        plusButton.click(function(event) {
            event.preventDefault();
            let inputValue = parseInt(input.val());

            input.val(inputValue + 1).trigger('change');
        });

        // Disables minus buttn when input is 0 (Must be a separate function so it works on click, user input, etc)
        input.on('input change', function() {
            let inputValue = parseInt(jQuery(this).val());

            if(inputValue == 0) {
                minusButton.attr('disabled', true);
            } else {
                minusButton.removeAttr('disabled');
            }
        })
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

    jQuery('#summaryDetailsButton').click( function() {
        jQuery('#summaryDetailsButton, .summaryDetails').toggleClass('open')
    })

    jQuery('#editFormButton').click( function(event) {
        event.preventDefault();
        jQuery("#checkoutForm .guestInfo :input").prop("readonly", false);
        jQuery("#checkoutForm .guestInfo select").removeClass('disabled'); /* for SELECT html tags */
        jQuery('#saveFormButton').show();
        jQuery(this).hide();
    })

    jQuery('#saveFormButton').click( function(event) {
        event.preventDefault();
        jQuery("#checkoutForm .guestInfo :input:not(#editFormButton)").prop("readonly", true);
        jQuery("#checkoutForm .guestInfo select").addClass('disabled');
        jQuery('#editFormButton').show();
        jQuery(this).hide();
    })
})