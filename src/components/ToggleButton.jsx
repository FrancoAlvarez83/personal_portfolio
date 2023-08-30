import { Languaje_options } from "../utils/languaje_options"
import { SelectLanguaje } from '../styles/SelectLanguaje.styled'
import Flag from 'react-flagkit';

const ToggleButton = ({lang, handleLang}) => { 

  const handleSelect = (e) => {   
     handleLang(e.target.value);
  }
  
  return ( 
        <div>
            <SelectLanguaje onChange={handleSelect}>
                {Languaje_options.map( lang => (
                    <option value={lang.value} key={lang.value}>                  
                    {lang.text} <Flag country="US" size={30} />
                    </option>
                ))}
            </SelectLanguaje>      
            
        </div>    
    )
}

export default ToggleButton