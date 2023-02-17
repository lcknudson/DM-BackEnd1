// server file 

const express = require("express")
const cors = require('cors')
const app = express() //express invoke
const port = 5050 //I knew to user port 5050 because axios front end used 5050

app.use(express.json())
app.use(cors())


//Data
let inventory = [
    'computer', 
    'jacket', 
    'headphones', 
    'cologne', 
    'table', 
    'chair',
    'mouse',
    'keyboard',
    'monitor',
    'rubber duck',
];


app.get('/api/inventory', (req, res) => { 
    // console.log(item)
    // const foundItem = inventory.filter((item) => item.includes(req.query.item));
    // if (foundItem) {
    //    res.status(200).send(foundItem)
    //    return;
    // } else {
    //     res.status(200).send(inventory);
    // }


    //caleb answer
    const { item } = req.query;
 
    if (item != undefined) {
      console.log("Hit")
      return inventory.includes(item) ? res.status(200).send([item]) : res.status(200).send(null)
    } else {
      res.status(200).send(inventory)
    }
     
    // if (req.query.item) {
    //     const foundItem = inventory.filter((invItem) => 
    //      invItem.includes(req.query.item)
    //     );
    //     res.status(200).send(foundItem)
    // } else {
    //     res.status(200).send (inventory)
    // }

});
    

app.get('/api/inventory/:index', (req, res) => {
    const { index } = req.params 
    res.status(200).send([inventory[index]]);
});



app.listen(port, () => console.log(`Listenening on port ${port}`))


