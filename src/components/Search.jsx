import React, { useState } from 'react'
import axios from 'axios'
import SyncLoader from "react-spinners/SyncLoader"
import './search.css'

function Search(props) {

    const [link, setLink] = useState('');
    const [loading, setLoading] = useState(false); 

    const shortLink = async () => {
        if (link === '')
            return;
        setLoading(true);
        const res = await axios.post(`https://e69.vercel.app/short`, {
            link: link
        })
        console.log(res.data.message);
        props.Result(res.data.message);
        setLoading(false);
        setLink('');
        }



  return (
      <div className='container'>
          <div className="poop"><SyncLoader color="#36d7b7" loading={loading} margin={5} /></div>
          <div className='inputContainer'>
          <input type="text" value={link} onChange={(e)=>setLink(e.target.value)} placeholder="https://e69.vercel.app/" id='linkInput' required />
          <button id='linkButton' onClick={shortLink}>Short</button>
          </div>
    </div>
  )
}

export default Search;