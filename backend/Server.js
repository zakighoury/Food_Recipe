const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const connectDB = require("./db");
const User = require("./Product/UserModel");
const Product = require("./Product/ProductModel");
const Blog = require("./Product/BlogModel");
const Explore = require("./Product/ExploreModel");
const Category = require("./Product/CategoryModel");
const Partner = require("./Product/PartnershipModel");
const Recipe = require("./Product/RecipeModel");
const Comment = require("./Product/comment");
const ProductComment = require("./Product/ProductComment");
const Secretkey = "your_secret_key";

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Product Routes
// Get a single product by ID
// Example: Associating multiple comments with a single product
// Route to save comments associated with a product
app.get("/product/:productId/comments", async (req, res) => {
  try {
    const productId = req.params.productId;
    const comments = await Comment.find({ productId }).populate("userId", "name");
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post("/product/:productId/comments", async (req, res) => {
  try {
    const { productId } = req.params;
    const { text, userId } = req.body;

    // Assuming you have a User model with a name field
    const user = await User.findById(userId);

    const newComment = new Comment({ productId, text, userId, userName: user.name });
    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (error) {
    console.error("Error saving comment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

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
    res.status(201).json(product);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Blog Routes
app.get("/api/blog", async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/blog", async (req, res) => {
  try {
    const { imageUrl, title, description, userId } = req.body;
    console.log("User ID:", userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const blog = new Blog({ imageUrl, title, description, user: user._id });
    await blog.save();
    const populatedBlog = await Blog.findById(blog._id).populate("user");
    res.status(201).json(populatedBlog);
    console.log("Blog added successfully:", populatedBlog);
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Explore Routes
app.get("/api/explore", async (req, res) => {
  try {
    const explore = await Explore.find({});
    res.status(200).json(explore);
  } catch (error) {
    console.error("Error fetching explore items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

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
    res.status(201).json(explore);
  } catch (error) {
    console.error("Error adding explore item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Category Routes
app.get("/api/cat", async (req, res) => {
  try {
    const cat = await Category.find({});
    res.status(200).json(cat);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/cat/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/cat", async (req, res) => {
  try {
    const { imageUrl, title } = req.body;
    const cat = new Category({
      imageUrl,
      title,
    });
    await cat.save();
    res.status(201).json(cat);
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Partner Routes
app.get("/api/partners", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/partners", async (req, res) => {
  const { imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6 } =
    req.body;

  try {
    const partner = new Partner({
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
    });
    const newPartner = await partner.save();
    res.status(201).json(newPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.post("/signup", async (req, res) => {
  try {
    // Extract user information from the request body
    const { username, email, password } = req.body;

    // Create a new user instance
    const user = new User({
      username,
      email,
      password, // Remember, this is plain text and should be hashed in a real application
    });

    // Save the user to the database
    const savedUser = await user.save();

    // Send back the saved user object in the response
    res.status(201).json(savedUser);
    console.log("User added successfully:", savedUser);
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email and password
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, Secretkey, {
      expiresIn: "1d",
    });
    console.log("Token:", token);

    // Get the user._id;
    const userid = user._id;

    // Send the token and userid in the response
    res.json({ token, userid });
    console.log("Token:", token);
    console.log("userid", userid);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

// Route to get user profile
app.get("/profile/:id", verifyToken, async (req, res) => {
  try {
    // Verify token asynchronously
    const authData = await new Promise((resolve, reject) => {
      jwt.verify(req.token, Secretkey, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });

    const user = await User.findById(req.params.id); // Fetch user by ID from database
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(user); // Send user profile as JSON response
    }
  } catch (error) {
    console.error("Error during profile retrieval:", error);
    if (error.name === "JsonWebTokenError") {
      res.sendStatus(403); // Token is invalid or missing, send Forbidden status
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});
app.get("/recipe", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
});
app.post("/recipe", async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe); // Return the newly created recipe
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ message: "Error creating recipe" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
