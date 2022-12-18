const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', function(req, res) {
    Alien.find((err, docs) =>{
        if(!err)
          res.render('../views/index', {'docs':docs});    
        else
          console.log(JSON.stringify(err));
        });
  });

router.get('/graph', function(req, res) {
    res.render('../views/component/about');
  });

router.get('/D3graph', function(req, res) {
    res.render('../views/component/d3graph');
  });

router.get('/data', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        end_year: req.body.end_year,
        intensity: req.body.intensity,
        sector: req.body.sector,
        topic: req.body.topic,
        insight: req.body.insight,
        url: req.body.url,
        region: req.body.region,
        start_year: req.body.start_year,
        impact: req.body.impact,
        added: req.body.added,
        published: req.body.published,
        country: req.body.country,
        relevance: req.body.relevance,
        pestle: req.body.pestle,
        source: req.body.source,
        title: req.body.title,
        likelihood: req.body.likelihood,
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.end_year= req.body.end_year,
        alien.intensity= req.body.intensity,
        alien.sector= req.body.sector,
        alien.topic=req.body.topic,
        alien.insight= req.body.insight,
        alien.url= req.body.url,
        alien.region= req.body.region,
        alien.start_year= req.body.start_year,
        alien.impact= req.body.impact,
        alien.added=req.body.added,
        alien.published= req.body.published,
        alien.country= req.body.country,
        alien.relevance= req.body.relevance,
        alien.pestle= req.body.pestle,
        alien.source= req.body.source,
        alien.title= req.body.title,
        alien.likelihood= req.body.likelihood
        
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router