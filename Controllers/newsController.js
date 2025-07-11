const News = require('../Models/news');

async function get_all_news(req, res){
    try{
        const news = await News.find({status: true}).sort({created_on: 1});
        res.status(200).json(news);
    }
    catch(err){
        console.error("Error fetching news:", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

async function post_news(req, res) {
  try {
    const {
      id,
      title,
      short_description,
      long_description,
      redirect_url,
      status
    } = req.body;

    const image = req.file?.path;

    const newNews = new News({
      id,
      title,
      short_description,
      long_description,
      redirect_url,
      status,
      image
    });

    await newNews.save();
    res.status(201).json({ message: "News created successfully"});

  } catch (err) {
    console.error("Error creating news:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {get_all_news, post_news}