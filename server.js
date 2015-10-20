var express = require('express')
var http = require('http')
var app = express()
var router = require(__dirname + '/router.js')
var join = require('etcd-registry-join')
var etcd_nodes = process.env['ETCD_NODES'] || '127.0.0.1:4001'

app.set('port', (process.env.PORT || 5000))
app.use('/', router)

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  join(etcd_nodes, 'mustache-rendering', server, function (err, service) {
    if (err) { console.log(err) }
    console.log('service joined:', service)
  })
  console.log('Node app is running on port', app.get('port'))
})
