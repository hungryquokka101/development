import './App.css';
import PlushieItem from "./components/PlushieItem.js";
import Cart from "./components/Cart.js";
import Button from '@mui/material/Button';
import { RadioGroup } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';

import { useState } from 'react';

// plushie data
const plushieData = [
  { name: "Tuxedosam Fluffy Pastel Luminous Plushie", type: "Tuxedosam", price: 32.9, size: "Medium", numOfLikes: 47, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210625_145.jpg"},

  { name: "Sumikko Gurashi Ice Cream Plushie Cushion", type: "Sumikko Gurashi", price: 35.9, size: "Large", numOfLikes: 52, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210915_149.jpg"},

  { name: "Chuken Mochi Shiba Dango Plushie", type: "Chuken Mochi Shiba", price: 16.9, size: "Medium", numOfLikes: 53, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210621_026.jpg"},

  { name: "Tuxedosam Blushing Nostalgic Sitting Plushie", type: "Tuxedosam", price: 24.9, size: "Medium", numOfLikes: 48, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20221119-284.jpg"},

  { name: "Strawberry Korilakkuma Plushie", type: "Rilakkuma", price: 35, size: "Medium", 
  numOfLikes: 50, isAvailable: "true", 
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/o/n/online_bl_-33_1.jpg"},
  
  { name: "Rilakkuma Hamsters Plushie", type: "Rilakkuma", price: 29.9, size: "Small", numOfLikes: 30, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20221020_263.jpg"},
  
  { name: "My Neighbor Totoro Otedama Plushie", type: "Totoro", price: 89.9, size: "Large", numOfLikes: 25, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20211015_259.jpg"},

  { name: "My Neighbor Totoro with Leaf Plushie", type: "Totoro", price: 29.9, size: "Medium", numOfLikes: 35, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20200512_098.jpg"},

  { name: "Mochi Shiba Detective Plushie", type: "Chuken Mochi Shiba", price: 13.2, size: "Small", numOfLikes: 29, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210621_054.jpg"},

  { name: "Mochi Shiba Dango Plushie", type: "Chuken Mochi Shiba", price: 16.9, size: "Medium", numOfLikes: 28, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210621_050.jpg"},

  { name: "Rilakkuma Christmas Plushie", type: "Rilakkuma", price: 36.9, size: "Medium", numOfLikes: 33, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/o/n/online_bl_-221_1.jpg"},

  { name: "Sumikko Gurashi Egg Plushie", type: "Sumikko Gurashi", price: 14.9, size: "Medium", numOfLikes: 49, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20211022_139.jpg"}
]

function App() {
  const [type, setType] = useState("All") // keep track of the selected type
  const [size, setSize] = useState("All") // keep track of the selected size
  const [availability, setAvailability] = useState("All") // keep track of the selected availability
  const [sortType, setSortType] = useState("None")

  // state variables for the cart and the total price
  const [cart, setCart] = useState(new Map())
  const [totalPrice, setTotalPrice] = useState(0)

  // method that adds an item to the cart
  const addToCart = (productName, productPrice) => {
    const newCart = new Map(cart)
  
    if (newCart.has(productName)) {
      var currCount = newCart.get(productName)
      newCart.set(productName, currCount + 1)
    } else {
      newCart.set(productName, 1)
    }
    setCart(newCart)

    // update total price
    var newPrice = totalPrice + productPrice
    if (newPrice < 0) {
      newPrice = 0
    }
    setTotalPrice(newPrice)
  }

  const removeFromCart = (productName, productPrice) => {
    const newCart = new Map(cart)

    // only update cart if the product to remove is in it
    if (newCart.has(productName) && newCart.get(productName) > 0) {
      var currCount = newCart.get(productName)

      // remove item from cart if its count is 0
      if (currCount - 1 <= 0) {
        newCart.delete(productName)
      } else {
        newCart.set(productName, currCount - 1)
      }
      
      setCart(newCart)

      // update total price
      var newPrice = totalPrice - productPrice
      if (newPrice < 0) {
        newPrice = 0
      }
      setTotalPrice(newPrice)
    }
  }

  const handleButtonTypeFilter = e => {
    setType(e.target.value)
  }

  const handleButtonSizeFilter = e => {
    setSize(e.target.value)
  }

  const handleButtonAvailabilityFilter = e => {
    setAvailability(e.target.value)
  }

  // check if an item matches the current filter type
  const matchesFilterType = (item) => {
    if ((type === item.type || type === "All") && (size === item.size || size === "All") && (availability === item.isAvailable || availability === "All")) {
      return true;
    } else {
      return false;
    }
  }
  
  const filteredData = plushieData.filter(matchesFilterType);
  const sortedData = filteredData.sort((a, b) => {
    if (sortType === "Popularity") {
      return b.numOfLikes - a.numOfLikes;
    } else if (sortType === "Price") {
      return a.price - b.price;
    }
  })

  const handleSortType = e => {
    setSortType(e.target.value);
  }

  const handleButtonReset = e => {
    setType("All")
    setSize("All")
    setAvailability("All")
  }
  
  return (
    <div className="App">
      <h1>Floofy Plushies</h1>

      <div class="container-div">
        <div class="sidebar-div">
            {/* filtering buttons */}
            <div className="filter-div">
              <h3>Character</h3>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group"
                  value={type}
                  onChange={handleButtonTypeFilter}
                >
                  <FormControlLabel value="All" control={<Radio />} label="All" />
                  <FormControlLabel value="Rilakkuma" control={<Radio />} label="Rilakkuma" />
                  <FormControlLabel value="Totoro" control={<Radio />} label="Totoro" />
                  <FormControlLabel value="Chuken Mochi Shiba" control={<Radio />} label="Chuken Mochi Shiba" />
                  <FormControlLabel value="Sumikko Gurashi" control={<Radio />} label="Sumikko Gurashi" />
                  <FormControlLabel value="Tuxedosam" control={<Radio />} label="Tuxedosam" />
                </RadioGroup>

                <h3>Size</h3>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group"
                  value={size}
                  onChange={handleButtonSizeFilter}
                >
                  <FormControlLabel value="All" control={<Radio />} label="All" />
                  <FormControlLabel value="Small" control={<Radio />} label="Small" />
                  <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                  <FormControlLabel value="Large" control={<Radio />} label="Large" />
                </RadioGroup>

                <h3>Availability</h3>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group"
                  value={availability}
                  onChange={handleButtonAvailabilityFilter}
                >
                  <FormControlLabel value="All" control={<Radio />} label="All" />
                  <FormControlLabel value="true" control={<Radio />} label="true" />
                  <FormControlLabel value="false" control={<Radio />} label="false" />
                </RadioGroup>

                <h3>Sort By: </h3>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Popularity"
                  name="radio-buttons-group"
                  value={sortType}
                  onChange={handleSortType}
                >
                  <FormControlLabel value="Popularity" control={<Radio />} label="Popularity" />
                  <FormControlLabel value="Price" control={<Radio />} label="Price" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <br></br>
              <Button size="large" onClick={handleButtonReset}>Reset</Button>
            </div>
        </div>
        
        {/* display filtered data */}
        <div className="filtered-plushies-div">
          <div className="filtered-plushies">
            {sortedData.map((item) => ( // map plushieData to plushieItem components
                  <PlushieItem item = {item} addToCart={addToCart} removeFromCart={removeFromCart}/>
            ))}
          </div>
        </div>

        <div className="cart-div">
          <Cart cart={cart} totalPrice={totalPrice.toFixed(2)} />
        </div>
      </div>
    </div>
  );
}

export default App;
