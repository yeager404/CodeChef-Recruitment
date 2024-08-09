const { apiConnector } = require("../operations/apiConnector.js");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

exports.getImage = async (req, res) => {
  try {
    let { description, type, color, category } = req.body;

    // description validation
    if(!description){
      return res.status(404).json({
        success: false,
        messgae: "No description for the image found"
      })
    }
    const query = description.split(" ").join("+");
    console.log(query);

    // image_type validation
    if(!type){
      type = 'all';
    }
    else{
      type = type.split(" ").join("+");
    }

    // color validation
    if(!color){
      color = "";
    }
    else{
      color = color.split(" ").join("+");
    }

    // category validation
    if(!category){
      category = "";
    }
    else{
      category = category.split(" ").join("+");
    }


    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=${type}&category=${category}&color=${color}`;

    const response = await apiConnector("GET", url);


    console.log(response.data);
    return res.status(200).json({
      data: response.data,
      success: true,
      message: "Images fetched successfully",
    });
  } catch (err) {
    console.log(err);
    console.log(err.message);
    return res.status(400).json({
      success: false,
      message: "Error in fetching images",
    });
  }
};
