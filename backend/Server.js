const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const cors = require("cors");
const Product = require("./Product/ProductModel");
const Blog = require("./Product/BlogModel");
const Explore = require("./Product/ExploreModel");
const Category = require("./Product/CategoryModel");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route to handle GET requests for retrieving products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle POST requests from frontend to add products
app.post("/api/products", async (req, res) => {
  try {
    const { title, button, imageUrl, rating, author, MiniUrl } = req.body;
    const product = new Product({
      title,
      button,
      imageUrl,
      rating,
      author,
      MiniUrl,
    });
    await product.save();
    res.status(201).json(product); // Respond with the added product
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle GET requests for retrieving blog entries
app.get("/api/blog", async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle POST requests from frontend to add blog entries
app.post("/api/blog", async (req, res) => {
  try {
    const { imageUrl, title, description } = req.body;
    const blog = new Blog({ imageUrl, title, description });
    await blog.save();
    res.status(201).json(blog); // Respond with the added blog
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle GET requests for retrieving explore items
app.get("/api/explore", async (req, res) => {
  try {
    const explore = await Explore.find({});
    res.status(200).json(explore);
  } catch (error) {
    console.error("Error fetching explore items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle POST requests from frontend to add explore items
app.post("/api/explore", async (req, res) => {
  try {
    const { title, button, imageUrl, rating, author, MiniUrl } = req.body;
    const explore = new Explore({
      title,
      button,
      imageUrl,
      rating,
      author,
      MiniUrl,
    });
    await explore.save();
    res.status(201).json(explore); // Respond with the added explore item
  } catch (error) {
    console.error("Error adding explore item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Route to handle GET requests for retrieving explore items
app.get("/api/Cat", async (req, res) => {
  try {
    const Cat = await Category.find({});
    res.status(200).json(Cat);
  } catch (error) {
    console.error("Error fetching explore items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle POST requests from frontend to add explore items
app.post("/api/Cat", async (req, res) => {
  try {
    const { imageUrl, title } = req.body;
    const Cat = new Category({
      imageUrl,
      title,
    });
    await Cat.save();
    res.status(201).json(Cat); // Respond with the added explore item
  } catch (error) {
    console.error("Error adding explore item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
