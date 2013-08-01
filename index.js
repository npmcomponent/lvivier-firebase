module.exports = firebase

var FIREBASE = 'https://cdn.firebase.com/v0/firebase.js'
  , SIMPLE   = 'https://cdn.firebase.com/v0/firebase-simple-login.js'

/**
 * loads Firebase and FirebaseSimpleLogin, then calls cb
 */
function firebase (cb) {
  var head = document.getElementsByTagName('head')[0]

  head.appendChild(script(FIREBASE))
  head.appendChild(script(SIMPLE))

  function script (url) {
    var script = document.createElement('script')
    script.async = true
    script.src = url
    script.onload = onload
    return script
  }

  function onload () {
    if (!(window.Firebase && window.FirebaseSimpleLogin)) return

    firebase.Firebase = window.Firebase
    firebase.FirebaseSimpleLogin = window.FirebaseSimpleLogin
    cb(firebase)
  }
}
