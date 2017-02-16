var tape = require('tape')
var signatures = require('sodium-signatures')
var encryptedMessage = require('.')

tape('token', function (t) {
  var u1 = signatures.keyPair()
  var u2 = signatures.keyPair()

  var msg = encryptedMessage.message(u1, u2, 'KEY')
  t.same(encryptedMessage.openMessage(u1, u2, msg).toString(), 'KEY')
  t.end()
})
