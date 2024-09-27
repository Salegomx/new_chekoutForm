jQuery(window).load( function() {

    jQuery('#summaryDetailsButton').click( function() {
        jQuery('#summaryDetailsButton, .summaryDetails').toggleClass('open')
    })

    jQuery('.addonbtn').click( function() {
        let thisText = jQuery(this).text();

        if (thisText === "Add") {
            jQuery(this).text("Added!");
        } else {
            jQuery(this).text("Add");
        }

        jQuery(this).toggleClass('checked');
    })

})