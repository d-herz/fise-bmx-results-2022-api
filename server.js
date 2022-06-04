const express = require('express')
const app = express()
const cors = require ('cors')

const PORT = 8000

const results = {
  '1st':{
    'riderName': 'Rim Nakamura',
    'riderAge': 20, 
    'riderCountry': 'Japan',
    'riderFinalScore': 95.30
  },
  '2nd':{
    'riderName': 'Logan Martin',
    'riderAge': 28, 
    'riderCountry': 'Australia',
    'riderFinalScore': 94.50
  },
  '3rd':{
    'riderName': 'Anthony JeanJean',
    'riderAge': 24, 
    'riderCountry': 'France',
    'riderFinalScore': 94.20
  },
  '4th':{
    'riderName': 'Nick Bruce',
    'riderAge': 30, 
    'riderCountry': 'USA',
    'riderFinalScore': 93.30
  },
  '5th':{
    'riderName': 'Marcus Christopher',
    'riderAge': 19, 
    'riderCountry': 'USA',
    'riderFinalScore': 93.14
  },
  '6th':{
    'riderName': 'Brian Fox',
    'riderAge': 29, 
    'riderCountry': 'USA',
    'riderFinalScore': 90.80
  },
  '7th':{
    'riderName': 'Justin Dowell',
    'riderAge': 22, 
    'riderCountry': 'USA',
    'riderFinalScore': 89.64
  },
  '8th':{
    'riderName': 'Kenneth Tencio',
    'riderAge': 28, 
    'riderCountry': 'Costa Rica',
    'riderFinalScore': 89.40
  },
  '9th':{
    'riderName': 'Kevin Peraza',
    'riderAge': 27, 
    'riderCountry': 'Mexico',
    'riderFinalScore': 89.00
  },
  '10th':{
    'riderName': 'Jose Torres',
    'riderAge': 27, 
    'riderCountry': 'Argentina',
    'riderFinalScore': 81.20
  },
  '11th':{
    'riderName': 'Daniel Dhers',
    'riderAge': 37, 
    'riderCountry': 'Venezuala',
    'riderFinalScore': 78.60
  },
  '12th':{
    'riderName': 'James Jones',
    'riderAge': 28, 
    'riderCountry': 'Great Britian',
    'riderFinalScore': 0
  },
  'Unknown':{
    'riderName': 'unknown',
    'riderAge': 0, 
    'riderCountry': 'unknown',
    'riderFinalScore': 0
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')

}) 


app.get('/api', (req,res) => {
    res.json(results)
})


app.get('/api/:place', (req,res) => {
  const place = req.params.place.toLowerCase()
  console.log(results[place].riderName)

  if(results[place]){
    res.json(results[place])

  }else{
    res.json(results)
  
  } 
})

app.listen(process.env.PORT || PORT , () => {
  console.log(`Server running on port ${PORT}`)

})