import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { Container, Sidebarr, Filter, Button, LargeButton, Icon } from './styles';
import { BsSunFill} from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'

export const Sidebar = ({setChosenVideo, toggleTheme, theme, data }) => {
  const [filter, setFilter] = useState('intro');
  const [filteredVids, setFilteredVids] = useState([]);


  // vai filtrar todos os videos do db e retornar somente os que tem o mesmo genero, 
  useEffect(()=>{
    setFilteredVids([])
      for(let i = 0; i < data.length; i++){
        if(data[i].genre === filter) setFilteredVids(prev => [...prev, data[i]])  
    }
  },[filter])


  return (
    <Container >
        <Sidebarr>
          <Filter> 
            <Button onClick={()=>setFilter('intro')}>Introdução</Button>
            <LargeButton onClick={()=>setFilter('verbs')}>Verbs</LargeButton>
            <Button onClick={()=>setFilter('new-words')}>New Words</Button>
            <Button onClick={()=>setFilter('grammar')}>Expressions</Button>
            {/*<Icon onClick={toggleTheme}>{theme.title === 'light' ? <IoMdMoon/> : <BsSunFill/>}</Icon>*/}
          </Filter>

       {filteredVids.slice(0, 5).map(item=><Card  setChosenVideo={setChosenVideo} url={item.url}
        key={item.id} name={item.name} author={item.author} img={item.img} alt={item.alt}/>       
       )}
 
      </Sidebarr>
    </Container>
  )
}
