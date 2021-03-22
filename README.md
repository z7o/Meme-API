# Meme-API

👋 Welcome to the Meme API by Nutella


**⚙ How to install the meme api?**

First use: 
```npm i --save```
<br>Second: ```node .```



**How to use the api?**

```js
const fetch = require('node-fetch')
    
fetch('your-site-here').then(res =>{
  if(res.status != 200) return console.log('The status code was not 200, there is probably a problem...')
  res.json().then(json =>{
    let meme = json.url
    // What ever you want do further! 
    })
})
```


If you're lucky and heroku did not let me down, you could use https://m3mes-api.herokuapp.com/ 
