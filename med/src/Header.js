
import a from './logo1.png'
import search from './search.png';
import { Modal } from 'bootstrap'
import Button from '@mui/material/Button';

function modal(){
    return(
      <div>
        <Modal className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
  
        </Modal>
      </div>
    )
  }

function Header(){
    return(
        <div className = "navbars d-flex justify-content-evenly">
        <div>
        <a href='/'><img src={a} alt ='logo' className='logo'></img></a>
        </div>
        <div className='search-bar'>
            <div className='data'>
            <input type='text' placeholder='You Can Search here' className='inputs'></input>
            </div>
            <div className='png'>
            <img src={search} className='search'></img>
            </div>
        </div>
        <div className='Account' onClick={()=>modal()}>
            <p className='p'><b>Hello!</b></p>
            <p className='p'><b>Praneeth</b></p>
        </div>
      </div>
    )
}
export default Header;