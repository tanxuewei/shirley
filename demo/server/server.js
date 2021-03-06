import path from 'path';
import Express from 'express';

var app = Express();
var server;

// const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../src');

// app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

server = app.listen(process.env.PORT || 3333, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
