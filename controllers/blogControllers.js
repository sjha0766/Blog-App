const Blog = require('../models/blog.js');

const blog_index= (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('blogs/index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const blog_index_game= (req, res) => {
    Blog.find({category:'game'}).sort({ createdAt: -1 })
      .then(result => {
        res.render('blogs/index', { blogs: result, title: 'games blog' });
       
      })
      .catch(err => {
        console.log(err);
      });
  };
  const blog_index_tech= (req, res) => {
    Blog.find({category:'tech'}).sort({ createdAt: -1 })
      .then(result => {
        res.render('blogs/index', { blogs: result, title: 'tech blog' });
      })
      .catch(err => {
        console.log(err);
      });
  };


  const blog_detials=(req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('blogs/details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        res.status(404).render('404',{title: '404'})
      });
  };


  const blog_create_get=(req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
  };
  const blog_category=(req,res)=>{
    res.render('partials/category',{title:'Category'});
  }

   const blog_create_post=(req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
  };


  const blog_delete=(req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  };

  module.exports={
      blog_create_get,
      blog_create_post,
      blog_delete,
      blog_detials,
      blog_index,
      blog_category,
      blog_index_game,
      blog_index_tech
  }