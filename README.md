*This repository is a mirror of the [component](http://component.io) module [lvivier/firebase](http://github.com/lvivier/firebase). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/lvivier-firebase`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# Firebase

Use [Firebase](https://firebase.com/) with [component](http://github.com/component/component).

Loads Firebase and FirebaseSimpleLogin asynchronously, then calls back:

```js
fb = require('firebase')

fb(function () {
  var db   = new fb.Firebase('some-db.firebaseio.com')
    , auth = new fb.FirebaseSimpleLogin(db, fn)

  // do something cool
})
```

### fb.Firebase

The `window.Firebase` constructor ([documentation](https://www.firebase.com/docs/javascript/firebase/index.html)).

### fb.FirebaseSimpleLogin

Ths `window.FirebaseSimpleLogin` constructor ([documentation](https://www.firebase.com/docs/security/simple-login-overview.html)).
