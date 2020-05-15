export const environment = {
  production: false,
  firebase: {
    config: {
      apiKey: 'AIzaSyBbMDkDVAUJ8MWcKMVtU7Onrzv5JVlfSbA',
      authDomain: 're-imagining-loyalty-dev.firebaseapp.com',
      databaseURL: 'https://re-imagining-loyalty-dev.firebaseio.com',
      projectId: 're-imagining-loyalty-dev',
      storageBucket: 're-imagining-loyalty-dev.appspot.com',
      messagingSenderId: '25832745393',
      appId: '1:25832745393:web:773b0a77001015f2fcf590',
      measurementId: 'G-L8M3HWX53Q'
    },
    collections: {
      userAccount: 'user_account_tap'
    },
    functions: {
      url: 'https://api-dev.tapit.com.co',
      checkExistentUser: '/v1/user/check',
      getAllEvents: '/v1/list/events',
      sendDigitalInvoice: '/v1/digitalinvoice'
    }
  },
  googleAnalyticsId: 'UA-159252784-3',
  googleTagManagerId: 'GTM-NFCC7RC'
};
