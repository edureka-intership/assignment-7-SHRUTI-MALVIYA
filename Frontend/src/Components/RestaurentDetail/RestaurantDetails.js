import React from 'react'
import '../../Styles/RestaurantDetails.Module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../Common/Header'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'




export default function RestaurantDetails() {
    let {rName}=useParams()
    const[restaurant,setRestaurant]=useState({})
    
  

    
    useEffect(() => {
        fetch(`http://localhost:7070/restaurant/Details/${rName}`,{method:'GET'})
        .then(response=>response.json())
        .then(data=>setRestaurant(data.data))
  
        }
    , [])
    
    
    

    console.log(restaurant)
    const{name,thumb,cost,address,Cuisine} = restaurant
    let cuisineList = !(Cuisine == undefined) && Cuisine.length && Cuisine.map((item) => item.name)
    // console.log(restaurant[0])
  return (
    <div>
        <Header/>
        <div>
            <img src={thumb} width="100%" height="400px" alt=''/>
        </div>
        <div>
            <h2>{name}
                
            </h2>
            
        </div>
        <div>
        <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <div className = "about">About the place</div>
      <div className = "head">Cuisine</div> 
      {cuisineList}
      <div className = "head">Average Cost</div>
      <div className = "value">&#8377; {cost}</div>
    </TabPanel>
    <TabPanel>
      <div className = "head">Phone number</div>
      <div className = "value">+91-5678392947</div>
      <div className = "head">{name}</div>
      <div className = "value">{address}</div>
    </TabPanel>
  </Tabs>
 
        </div>
    </div>
  )
}
