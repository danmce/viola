var GCM_SENDER_ID = '760563036679'; // Replace with your own ID.
var mobileServiceClient;
var pushNotification;
// Create the Azure client register for notifications.
document.addEventListener('deviceready', function () {
    mobileServiceClient = new WindowsAzure.MobileServiceClient(
                    "https://viola.azure-mobile.net/",
                    "RGiOmUSWFsMSMNNUGFiOtOluENrfPQ81");
    // Define the PushPlugin.
    pushNotification = window.plugins.pushNotification;
    // Platform-specific registrations.
    if (device.platform == 'android' || device.platform == 'Android') {
        // Register with GCM for Android apps.
        pushNotification.register(successHandler, errorHandler,
          {
              "senderID": GCM_SENDER_ID,
              "ecb": "onGcmNotification"
          });
    }
});
// Handle a GCM notification.
function onGcmNotification(e) {
    switch (e.event) {
        case 'registered':
            // Handle the registration.
            if (e.regid.length > 0) {
                console.log("gcm id " + e.regid);
                if (mobileServiceClient) {
                    // Template registration.
                    var template = "{ \"data\" : {\"message\":\"$(message)\"}}";
                    // Register for notifications.
                    mobileServiceClient.push.gcm.registerTemplate(e.regid,
                      "myTemplate", template, null)
                      .done(function () {
                          alert('Registered template with Azure!');
                      }).fail(function (error) {
                          alert('Failed registering with Azure: ' + error);
                      });
                }
            }
            break;
        case 'message':
            if (e.foreground) {
                // Handle the received notification when the app is running
                // and display the alert message.
                alert(e.payload.message);
                // Reload the items list.
                refreshPosts();
            }
            break;
        case 'error':
            alert('Google Cloud Messaging error: ' + e.message);
            break;
        default:
            alert('An unknown GCM event has occurred');
            break;
    }
}

// GCM registration success handler.
function successHandler(result) {
    console.debug('GCM registration result: ' + result);
}
// 
function errorHandler(error) {
    console.debug('An error occured during registration: ' + error);
}