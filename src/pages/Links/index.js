import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom'
import {getLinksave, saveLink} from '../../services/storeLinks'
import {useState, useEffect} from 'react'
import LinkItem from '../../components/LinkItem';


export default function Links(){

  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksave('@EncurtaLink')
      if(result.length === 0){
        console.log('Lista Vazia');
      }
      setMyLinks(result);
    }

    getLinks();
  },)

  function handleOpenLink(link){
    setData(link)
    setShowModal(true)
  }

    return(
      <div className="links-container">
        <div className="links-header">
          <Link to="/">
          <FiArrowLeft size={38} color='#fff'/>
          </Link>
          <h1>Meus Links</h1>
        </div>
      {myLinks.map(Link =>(
          <div key={Link.id} className="links-item" >
            <button className="link" onClick={ () => handleOpenLink(Link)}>
              <FiLink size={18} color='#fff'/>
              {Link.long_url}
            </button>
            <button className="link-delete">
              <FiTrash size={24} color="#ff5454"/>
            </button>
          </div>
      ))}


      {showModal &&(
        <LinkItem closeModal={() => setShowModal(false)}
        content={data}/>
      )}
        </div>
    )
  }