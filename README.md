sails-hook-ddd
====
Sails.js hook to use data-domain-driver

## Installation
```
$ # Configuration file and DDD definition file must be placed
$ npm install sails-hook-ddd
```

## .sailsrc
```
{
  "hooks": {
    "orm": false,
    "pubsub": false
  }
}
```

## Usage
On the request action
```javascript
module.exports = async function requestAction (req, res) {

  rtns = await sails.DDD.callProcedure('proc01', req);

  return res.view('requestAction', rtns.toObject());

}

## Licence

[MIT](http://opensource.org/licenses/mit-license.php)

## Author

[nmrmsys](https://github.com/nmrmsys)