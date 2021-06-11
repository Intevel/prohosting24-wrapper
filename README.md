# 📋 ProHosting24 Wrapper

An unofficial, reverse-engineered wrapper for the internal [ProHosting24](http://prohosting24.de/) API.

## Usage

ES5 import

```js
require("prohosting24");
```

or ES6 import

```js
import "prohosting24";
```

# Features:

| Method                                                                                         | params                    |
| ---------------------------------------------------------------------------------------------- | ------------------------- |
| [getVServerInfo](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/getPost)       | session_cookie, server_id |
| [startVServer](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/likePost)        | session_cookie, server_id |
| [stopVServer](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/unlikePost)       | session_cookie, server_id |
| [getCreditHistory](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/addComment)  | PostID, session_cookie    |
| [getAffiliateInfos](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/addComment) | PostID,session_cookie     |
| [getOwnTickets](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/follow)         | session_cookie            |
| [unfollow](https://github.com/xNaCly/InstagramAPIwrapper/tree/master/docs/unfollow)            | session_cookie            |
