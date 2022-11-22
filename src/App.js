import logo from './logo.svg';
import './App.css';
import PlushieItem from "./components/PlushieItem.js";
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Form';

const plushieData = [
  { name: "Strawberry Korilakkuma Plushie", type: "Rilakkuma", price: 35, size: "Medium", 
  numOfLikes: 50, isAvailable: "true", 
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/o/n/online_bl_-34_1.jpg"},
  
  { name: "Rilakkuma Hamsters Plushie", type: "Rilakkuma", price: 29.9, size: "Small", numOfLikes: 30, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20221020_264.jpg"},
  
  { name: "My Neighbor Totoro Otedama Plushie", type: "Totoro", price: 89.9, size: "Large", numOfLikes: 25, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20211015_261.jpg"},

  { name: "My Neighbor Totoro with Leaf Plushie", type: "Totoro", price: 29.9, size: "Medium", numOfLikes: 35, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20200512_099.jpg"},

  { name: "Mochi Shiba Detective Plushie", type: "Chuken Mochi Shiba", price: 13.2, size: "Small", numOfLikes: 29, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210621_054.jpg"},

  { name: "Mochi Shiba Dango Plushie", type: "Chuken Mochi Shiba", price: 16.9, size: "Medium", numOfLikes: 28, isAvailable: "true",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210621_050.jpg"},

  { name: "Sumikko Gurashi Ice Cream Plushie Cushion", type: "Sumikko Gurashi", price: 35.9, size: "Large", numOfLikes: 43, isAvailable: "false",
  image: "https://www.blippo.com/media/catalog/product/cache/4/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/2/0/20210915_149.jpg"}
]

// const filter_types = ["Type", "Size", "Availability"]
// const categories = ["Rilakkuma", "Totoro", "Chuken Mochi Shiba", "Sumikko Gurashi"]
// const sizes = ["Small", "Medium", "Large"]
// const availabilities = ["true", false]

/*
  const bakeryData = [
    { name: “Bread”, type: “bread”, price: 12},
    { name: “Croissant”, type: “bread”, price: 7},
    { name: “Cake”, type: “cake”, price: 20},
  ]

  Filtering: type, size, availability; Sorting: popularity, price
*/


function App() {
  const [type, setType] = useState("All") // keep track of the selected type
  const [size, setSize] = useState("All") // keep track of the selected size
  const [availability, setAvailability] = useState("All") // keep track of the selected availability
  const [sortType, setSortType] = useState("None")

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
    setSortType("None")
  }

  // const matchesSortType = (value) => {
  //   if (value === "Popularity") {
  //     const sortedData = filteredData.sort((a, b) => {
  //       return b.numOfLikes - a.numOfLikes;
  //     })
  //     setDisplayData(sortedData)
  //   } else if (value === "Price") {
  //     const sortedData = filteredData.sort((a, b) => {
  //       return a.price - b.price;
  //     })
  //     setDisplayData(sortedData)
  //   } 
  // }
  
  return (
    <div className="App">
      <h1>Floofy Plushies</h1>

      <div class="container-div">
        <div class="plushie-item-div">

          {/* filtering buttons */}
          <div className="filter-div">
            <h3>Type</h3>
            <div className="type-filter-nav" onChange={handleButtonTypeFilter}>
              <input type="radio" value="All" name="Type" /> All
              <input type="radio" value="Rilakkuma" name="Type" /> Rilakkuma
              <input type="radio" value="Totoro" name="Type" /> Totoro
              <input type="radio" value="Chuken Mochi Shiba" name="Type" /> Chuken Mochi Shiba
              <input type="radio" value="Sumikko Gurashi" name="Type" /> Sumikko Gurashi
            </div>

            <h3>Size</h3>
            <div className="type-filter-nav" onChange={handleButtonSizeFilter}>
              <input type="radio" value="All" name="Size" /> All
              <input type="radio" value="Small" name="Size" /> Small
              <input type="radio" value="Medium" name="Size" /> Medium
              <input type="radio" value="Large" name="Size" /> Large
            </div>

            <h3>Availability</h3>
            <div className="type-filter-nav" onChange={handleButtonAvailabilityFilter}>
              <input type="radio" value="All" name="Availability" /> All
              <input type="radio" value="true" name="Availability" /> Available
              <input type="radio" value="false" name="Availability" /> Not Available
            </div>

            {/* <Nav className="type-filter-nav">
              <Nav.Item>
                <Button as="input" type="button" value="All" onClick={handleButtonTypeFilter}/>
              </Nav.Item>
              <Nav.Item>
                <Button as="input" type="button" value="Rilakkuma" onClick={handleButtonTypeFilter}/>
              </Nav.Item>
              <Nav.Item>
                <Button as="input" type="button" value="Totoro" onClick={handleButtonTypeFilter}/>
              </Nav.Item>
              <Nav.Item>
                <Button as="input" type="button" value="Chuken Mochi Shiba" onClick={handleButtonTypeFilter}/>
              </Nav.Item>
              <Nav.Item>
                <Button as="input" type="button" value="Sumikko Gurashi" onClick={handleButtonTypeFilter}/>
              </Nav.Item>
            </Nav> */}
          </div>

          {/* sorting */}
          <div className="sort-div">
            <h3>Sort By: </h3>
            <div className="sort-radio-div" onChange={handleSortType}>
              {/* <input type="radio" value="None" name="sort" /> None */}
              <input type="radio" value="Popularity" name="sort" /> Popularity
              <input type="radio" value="Price" name="sort" /> Price
            </div>
          </div>
            
          {/* display filtered data */}
          <div className="filtered-plushies-div">
            {sortedData.map((item) => ( // map plushieData to plushieItem components
                  <PlushieItem item = {item} />
            ))}
          </div>

          <div>
            <button className="reset-button" onClick={handleButtonReset}>Reset</button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
