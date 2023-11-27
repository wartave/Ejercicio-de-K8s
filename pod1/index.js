import express from "express";
import jumpSearch from "./jumpSearch.js";
import linearSearch from "./linearSearch.js";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Search Algorithms</title>
      <style>
        body {
          font-family: 'Roboto', sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
    
        h1 {
          color: #4285f4;
        }
    
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }
    
        input {
          margin: 5px;
          padding: 10px;
          width: 250px;
          box-sizing: border-box;
        }
    
        button {
          background-color: #4285f4;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
    
        button:hover {
          background-color: #0f4aa4;
        }
      </style>
    </head>
    
    <body>
      <h1>Algoritmo de búsqueda por saltos</h1>
      <form action="/jumpSearch" method="post">
        <input type="text" name="arr" value="" placeholder="Enter sorted array" required />
        <input type="text" name="target" value="2" placeholder="Enter target value" required />
        <button type="submit">Jump Search</button>
      </form>
    
      <h1>SAlgoritmo de búsqueda Lineal o Secuencial</h1>
      <form action="/linearSearch" method="post">
        <input type="text" name="arr" value="" placeholder="Enter array" required />
        <input type="text" name="target" value="2" placeholder="Enter target value" required />
        <button type="submit">Linear Search</button>
      </form>
    
      <script>
        window.onload = function () {
          let arrInputs = document.getElementsByName("arr");
          if (arrInputs[0].value === "") {
            let randomArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);
            const sort = [...randomArr].sort((a, b) => a - b).join(", ");
            arrInputs[0].value = sort;
            arrInputs[1].value = randomArr.join(", ");
          }
        };
      </script>
    </body>
    
    </html>
  `);
});


app.post("/jumpSearch", (req, res) => {
  const { arr, target } = req.body;
  const formattedArr = arr.split(",").map((item) => parseInt(item));
  const result = jumpSearch(formattedArr, +target);
  if (result === -1) {
    res.send(`El número ${target} no se encuentra en el arreglo`);
  } else {
    res.send(`El número ${target} se encuentra en el índice ${result}`);
  }
});

app.post("/linearSearch", (req, res) => {
  const { arr, target } = req.body;
  const formattedArr = arr.split(",").map((item) => parseInt(item));
  const result = linearSearch(formattedArr, +target);
  if (result === -1) {
    res.send(`El número ${target} no se encuentra en el arreglo`);
  } else {
    res.send(`El número ${target} se encuentra en el índice ${result}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
