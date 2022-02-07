
import './link-item.css'
import{FiX, FiClipboard} from 'react-icons/fi'

export default function LinkItem({closeModal, content}){
    return(
        <div className="modal-container">

            <div className="modal-header">
                <h2>Link encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000"/>
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className="modal-link">
                {content.link}
                <FiClipboard size={20} color="#fff"/>
            </button>
        </div>
    )
}