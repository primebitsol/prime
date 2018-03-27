var ResultGlobal;
var uid;


//function SessionSetAJAX(id_token) {
//    waitingDialog.show('Logging in ...');
//    CheckLogin(id_token);
//}

//function SessionRemoveAJAX() {
//    //Ajax to code behind :
//    $.ajax({
//        type: "POST",
//        url: "/auth/settokenid.aspx/Remove",
//        //data: '{id_token: "' + id_token + '" }',
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: OnSuccessRemove,
//        failure: function (response) {
//            console.log("AJAX Failure in Trmoval of Session : " + JSON.stringify(response));
//        }
//    });
//    function OnSuccessRemove(response) {
//        console.log("Success in Removal of Session d.Result : " + response.d);
//    }
//}


function login() {
    $('#page-wrap').css('opacity', '1');
    $('.loader').css('display', 'none');
    try {

        //mixpanel.track("Video play");
        // Instantiate the lock and auth0 libraries 

        var options = {
            //avatar: {
            //    url: function (email, cb) {
            //        // Obtain the avatar url for the email input by the user, Lock
            //        // will preload the image before displaying it.
            //        // Note that in case of an error you call cb with the error in
            //        // the first arg instead of `null`.
            //        var url = obtainAvatarUrl(email);
            //        cb(null, url);
            //    },
            //    displayName: function (email, cb) {
            //        // Obtain the display name for the email input by the user.
            //        // Note that in case of an error you call cb with the error in
            //        // the first arg instead of `null`.
            //        var displayName = obtainDisplayName(email);
            //        cb(null, displayName);
            //    }
            //},
            //forgotPasswordLink: 'https://yoursite.com/reset-password',
            //initialScreen: 'forgotPassword',
            //allowedConnections: ['facebook', 'google-oauth2'],
            //rememberLastLogin: false,
            initialScreen: 'signUp',
            //mustAcceptTerms: true,
            theme: {
                labeledSubmitButton: false,
                logo: '/images/logo_auth0.png',
                //logo: '/images/logo.png',
                primaryColor: '#11538C'
            },
            auth: {
                redirectUrl: Auth0RedirectURL,
                responseMode: 'form_post',
                responseType: 'token'
            },
            additionalSignUpFields: [{
                name: "full_name",                              // required
                placeholder: "your name and surname",            // required
                icon: "/includes/images/user-icon.png", // optional
                //prefill: "street 123",                        // optional
                validator: function (value) {                  // optional
                    // only accept addresses with more than 3 chars and is not a number
                    return value.length > 3
                }
            }], // more fields could be specified
            languageDictionary: {
                title: ""
            }
        };
        var lock = new Auth0Lock(Auth0ClientID, Auth0Domain, options);


        // Display the default lock widget
        lock.show({}, function (err, profile, id_token) {
            // If the login is successful, store the profile data in localstorage
            //localStorage.setItem('profile', JSON.stringify(profile));
            //localStorage.setItem('Auth0_id_token', id_token);

        });
    }
    catch (err) {
        console.log('Auth0 error: ' + err);
    }
}

function logout() {
    //localStorage.clear();
    //try {
    //    var lock = new Auth0Lock(Auth0ClientID, Auth0Domain);

    //    lock.logout({
    //        returnTo: '/logout'
    //    });
    //}
    //catch (err) {
    //    console.log(err);
    //}

}