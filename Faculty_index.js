const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const Faculty=require('./Faculty');

const connectingstring='mongodb+srv://Skkadivar:sk0863534riza@cluster0.uzafs.mongodb.net/Faculty?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectingstring).then(()=>{
console.log("database connected!");

    const app=express();

    app.use(bodyparser.urlencoded({extended:false}));

    app.get('/faculty',async(req,res)=>{
        const ans=await Faculty.find();
        res.json(ans);
    });

    app.get('/faculty/:id',async(req,res)=>{
        const ans=await Faculty.findOne({id:req.params.id});
        res.json(ans);
    });

    app.post('/faculty',async(req,res)=>{
        const ans=new Faculty(req.body);
        const result=await ans.save();
        res.json(result);
    });

    app.patch('/faculty/:id',async(req,res)=>{
        const ans=await Faculty.findOneAndUpdate({id:req.params.id});
        res.json(ans);
    });

    app.delete('/faculty/:id',async(req,res)=>{
        const ans=await Faculty.deleteOne({id:req.params.id});
        res.json(ans);
    });

    app.listen(5000,()=>{
        console.log("Server started!!");
    });
});