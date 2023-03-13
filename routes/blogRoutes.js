const express = require("express");
const router=express.Router();
const blogControllers=require('../controllers/blogControllers.js');


// blog routes

  
  router.get('/',blogControllers.blog_index);
  
  router.post('/', blogControllers.blog_create_post);
  
  router.get('/create', blogControllers.blog_create_get);
  router.get('/category',blogControllers.blog_category);
  router.get('/game',blogControllers.blog_index_game);
  router.get('/tech',blogControllers.blog_index_tech);


  router.get('/:id', blogControllers.blog_detials);
  
  router.delete('/:id',blogControllers.blog_delete );


  module.exports=router;
  