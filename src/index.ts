import express, {Request, Response} from 'express'
const app = express()
const port = 3000

const products = [{title: 'tomato'}, {title: 'orange'}]
const addresses = [{value: 'Druzbi 6'}, {value: 'Lenina 234'}]

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:productTitle', (req, res) => {
  let product = products.find(p => p.title === req.params.productTitle)
  res.send(product);
});

app.get('/addresses', (req: Request, res: Response) => {
  res.send(addresses);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})