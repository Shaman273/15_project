import logo from './logo.svg';
import './App.css';
//import Header from './component/Header/index';
import 'antd/dist/antd.css';
import Blogs from './conteiner/Blog/index';
import {useState} from 'react'
import CheckboxItem from './CheckboxItem'
import Todo from './conteiner/todo';
  

function App() {
{/*  const name = 'Decode'
  let age = 30
  let isShow = false

  if(age > 25) {
    isShow = true
  }

  const style = {color: 'red', fontSize: '30px'}

  const clickBtn = () => {
    console.log('click')
  }

  const fruits = [
    {
      name: 'apple',
      price: 600
    },
    {
      name: 'orange',
      price: 900
    },
    {
      name: 'pineapple',
      price: 1200
    }
  ]

  const fruitItems = fruits.map((item, index) => <div key={index}>
    <p>{item.name}</p>
    <p>{item.price}</p>
</div>)*/}


const languages = ['html', 'css', 'js']
  const [chosenLanguages, setChosenLanguages] = useState([])

  const handleChange = (e, item) => {
    if(e.target.checked) {
      setChosenLanguages([...chosenLanguages, item])
    } else {
      setChosenLanguages(chosenLanguages.filter(l => l !== item ))
    }
  }

  const languageItems = languages.map((item, i) => <CheckboxItem key={i} handleChange={handleChange} item={item}/>)

  const chosenLanguageItems = chosenLanguages.map((item, i) => <p key={i}>{item}</p>)

  return (
    <>
      <div style={{width: '70%', margin: '100px auto'}}>
      <Todo/>
        {/*languageItems} 
        {chosenLanguageItems*/}
      </div>
    <Blogs/>

    </>
  );



}

export default App;

