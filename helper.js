const array = []
for (let index = 0; index < 1000; index++) {
    array.push(index)   
}

await Promise.all(array.map(
    async (i) =>
      await fetch("http://localhost:3001/users", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json;charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "http://localhost:3000/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"username\":\"Daniel-${i}\",\"email\":\"daniel${i}@hotmail.com\",\"password\":\"daniel1\"}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
})));