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
