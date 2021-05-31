import React, { /* Fragment */ } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const  SearchBox = (props) => {
  
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      return (
        <div className="App">
          <header className="App-header">
            <div className="text-box-search">
              <ReactSearchAutocomplete
                fuseOptions={{ keys: ["name", "proyect_address","city_name"] }}
                items={props.searchitems}
                onSearch={handleOnSearch}
                onClear={props.handleClearItem}
                onSelect={props.handleOnSelectItem}
                onFocus={handleOnFocus}
                styling={ {position:"relative", zIndex:"2", width:"100%"}}
                autoFocus
            
              />
            </div>
          </header>
        </div>
      )
}

export default SearchBox;