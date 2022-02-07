
import {FiLink} from 'react-icons/fi'
import './home.css'

import { useState } from 'react'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';

export default function Home(){
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowmodal] = useState(false);

  async function handleShortLink(){
  try {
    const response = await api.post("/shorten", {long_url: link})

    console.log(response.data);

    setData(response.data);
    setShowmodal('');

    setLink('');

  } catch (error) {
    alert("Ops parece que algo deu errado")
    setLink('');
  }

  }

    return(
      <div className="container-home">
        <div className="logo">
          <img src="/encurtador-logo.png" alt="Sujeito Link Logo"/>
          <h1>Sujeito Link</h1>
          <span>Cole seu Link para encurtar👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color='#fff'/>
            <input placeholder="Cole seu link aqui" value={link} onChange={(e) => setLink(e.target.value)}/>
          </div>

          <button onClick={handleShortLink}>
            Encurtar Link
          </button>
        </div>

        <Menu/>

        {showModal && (
          <LinkItem
          closeModal={() => setShowmodal(false)}
          content={data}/>
        )}
      </div>
    )
  }