import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SkillCard from '../components/SkillCard'
import axios from 'axios';
import './Skill.css';

const Skill = () => {

    const apiUrl = 'SkillData.json'

    const [data, setData] = useState([]);

    // Effect to fetch data when the component mounts
    useEffect(() => {
      // Replace 'YOUR_API_URL' with the actual API endpoint you want to fetch
      axios.get(apiUrl)
        .then((response) => {
          setData(response.data); // Update the state with fetched data
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <div>
        <Navbar/>
        <div className="container">
          <div className="s">
            {data.map((item)=>(
 <SkillCard title={item.title} imgUrl={item.imgUrl}/>
            ))}
            </div>
           </div>
           
        
        <Footer/>
    </div>
  )
}

export default Skill