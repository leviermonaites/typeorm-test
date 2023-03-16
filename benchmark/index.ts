import axios from 'axios';
// import fetch from 'node-fetch';

for (let i = 2; i < 50; i++) {
  // fetch("http://localhost:5000/graphql", {
  //   "headers": {
  //     "accept": "*/*",
  //     "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,en-GB;q=0.6",
  //     "content-type": "application/json",
  //     "sec-ch-ua": "\"Microsoft Edge\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-ch-ua-platform": "\"Windows\"",
  //     "sec-fetch-dest": "empty",
  //     "sec-fetch-mode": "cors",
  //     "sec-fetch-site": "same-origin",
  //     "Referer": "http://localhost:5000/graphql",
  //     "Referrer-Policy": "strict-origin-when-cross-origin"
  //   },
  //   "body": `{\"operationName\":\"CreateBook\",\"variables\":{},\"query\":\"mutation A {\\n  createAuthor(data: {name: \\\"ASd\\\"}) {\\n    id\\n    name\\n    createdAt\\n    updatedAt\\n  }\\n}\\n\\nmutation CreateGenre {\\n  createGenre(data: {name: \\\"asd\\\"}) {\\n    id\\n    name\\n  }\\n}\\n\\nmutation CreateBook {\\n  createBook(data: {title: \\\"Asd\\\", author: {connect: {id: 1}}, genre: {connect: {id: ${i}}}}) {\\n    id\\n    title\\n  }\\n}\\n\\nquery B {\\n  genres {\\n    name\\n    id\\n    book {\\n      title\\n      authorId\\n    }\\n  }\\n}\\n\"}`,
  //   "method": "POST"
  // });
  for (let j = 1; j < 50; j++) {
    axios({
      method: "POST",
      url: "http://localhost:5000/graphql",
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,en-GB;q=0.6",
        "content-type": "application/json",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referer": "http://localhost:5000/graphql",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      data: `{\"operationName\":\"CreateBook\",\"variables\":{},\"query\":\"mutation A {\\n  createAuthor(data: {name: \\\"ASd\\\"}) {\\n    id\\n    name\\n    createdAt\\n    updatedAt\\n  }\\n}\\n\\nmutation CreateGenre {\\n  createGenre(data: {name: \\\"asd\\\"}) {\\n    id\\n    name\\n  }\\n}\\n\\nmutation CreateBook {\\n  createBook(data: {title: \\\"Asd\\\", author: {connect: {id: 1}}, genre: {connect: {id: ${i}}}}) {\\n    id\\n    title\\n  }\\n}\\n\\nquery B {\\n  genres {\\n    name\\n    id\\n    book {\\n      title\\n      authorId\\n    }\\n  }\\n}\\n\"}`,
    })
  }

}