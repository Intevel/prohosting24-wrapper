# 📋 ProHosting24 Wrapper

An unofficial, reverse-engineered wrapper for the internal [ProHosting24](http://prohosting24.de/) API.

## Usage

Install Package

```bash
npm i prohosting24
```

ES5 import

```js
require("prohosting24");
```

or ES6 import

```js
import "prohosting24";
```

# Features:

| Method                                                                                                         | params                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [getVServerInfo](https://github.com/Intevel/prohosting24-wrapper/blob/master/examples/getVServerInfo.js)       | session_cookie, server_id |
| [startVServer](https://github.com/Intevel/prohosting24-wrapper/blob/master/examples/startVserver.js)           | session_cookie, server_id |
| [stopVServer](https://github.com/Intevel/prohosting24-wrapper/blob/master/examples/stopVserver.js)             | session_cookie, server_id |
| [getCreditHistory](https://github.com/Intevel/prohosting24-wrapper/blob/master/examples/getCreditHistory.js)   | session_cookie            |
| [getAffiliateInfos](https://github.com/Intevel/prohosting24-wrapper/blob/master/examples/getAffiliateInfos.js) | session_cookie            |
| [getOwnTickets](https://github.com/Intevel/prohosting24-wrapper/blob/master/examples/getOwnTickets.jsw)        | session_cookie            |

## Roadmap

-   Add more features

## Feedback

If you have any feedback, please create an issue.
