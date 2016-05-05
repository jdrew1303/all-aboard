(function() {
    var fxAccountsContainer = document.querySelector('.fxaccounts');
    var newUserQuery = '<div class="all-aboard-container">' +
                       '<h2>Are you a new Firefox user?</h2>' +
                       '<label for="yes">' +
                       '<input type="radio" name="newuser" value="yes" id="yes" />Yes</label>' +
                       '<label for="no">' +
                       '<input type="radio" name="newuser" value="no" id="no" checked />No</label>' +
                       '<button type="button" class="button">Submit</button></div>';
    var contentContainer;
    var heading;
    var mainContainer;

    // see whether a Firefox Accounts section exists
    if (fxAccountsContainer) {
        contentContainer = document.querySelector('#intro .container');
        heading = document.querySelector('#intro header h2');
        mainContainer = document.querySelector('main');

        // hide the default heading and the Fx accounts widget
        heading.style.display = 'none';
        mainContainer.style.display = 'none';

        // append the question to the main content container
        contentContainer.insertAdjacentHTML('beforeend', newUserQuery);
    }
})();
