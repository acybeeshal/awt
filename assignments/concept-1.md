**HTTP Methods**
HTTP mean Hypertext Transfer Protocal us designed to enable communicatons between client and server .
For Request -Response
*GET -* used to request data from a specified resource. query string like name ,value pairs is sent in the URL of a GET request .
POST - used to send data to a server to create update a resource.The data sent to the server with POST is stored in the request body if the HTTP request .

**& HTTP Status Codes**
HTTP Status Codes is a message when a browser requests a service from a web server , an status occurs and the response from a server .

1xx: Information	100(continue) ,101(switching protocals),103(Early hints)
2xx: Successful	201 Created , 202 Accepted , 203 Non-Authoritative Information , 204 No Content , 205 Reset Content , 206 Partial Content
3xx: Redirection	300 Multiple Choices , 301 Moved Permanently , 302 Found , 303 See Other , 304 Not Modified , 307 Temporary Redirect
4xx: Client Error	 400 Bad Request , 401 Unauthorized , 402 Payment Required
5xx: Server Error	500 Internal Server Error , 501 Not Implemented , 502 Bad Gateway , 503 Service Unavailable

**At least 4 CSS Selectors**


| Selector  | What it targets              | Quick hint          |
| --------- | ---------------------------- | ------------------- |
| `p`     | Every `<p>`element         | Element selector    |
| `.card` | Anything with class `card` | Class selector      |
| `#main` | The element with id `main` | ID selector         |
| `nav a` | `<a>`inside `<nav>`      | Descendant selector |


**GIT Basics ( init , add , commit , push , pull , clone , branch )**

* `git init` – Start tracking a folder.
* `git add file` / `git add .` – Stage changes.
* `git commit -m "msg"` – Snapshot the stage.
* `git push` – Ship commits to GitHub.
* `git pull` – Grab & merge from GitHub.
* `git clone URL` – Copy a whole repo.
* `git branch` – List branches. `git branch dev` creates  *dev* .
* `git status` -- show the git is on which state .give details

**Callback & Higher-Order Function**

**Callback** – A function handed to another so it can be called later.

```js
setTimeout(() => console.log(" done"), 1000);
  
```

**Higher‑Order Function (HOF)** – Eats a function or spits one out.

```js
const twice = f => x => f(f(x));
```


**Array Methods: filter , map , forEach , push , pop**


```javascript
const nums = [1,2,3,4];

// filter – keep even
const evens = nums.filter(n => n%2===0); // [2,4]

// map – square them
const squares = nums.map(n => n*n); // [1,4,9,16]

// forEach – log
nums.forEach(console.log);

// push – add 5
nums.push(5); // [1,2,3,4,5]

// pop – remove last
nums.pop(); // back to [1,2,3,4]
```
