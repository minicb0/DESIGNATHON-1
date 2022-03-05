import React from 'react'

import { TextField, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import "./style.css"

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      border: "1px solid rgb(206,206,206)"
    },
    "&&:after": {
      border: "1px solid rgb(206,206,206)"
    }
  }
});

export const CreateItem = () => {

  const classes = useStyles();

  return (
    <div className='container'>

        <div className='mainhead'>
            Create new Item
        </div>

        <div className='content'>
            <div className='heading'>
              Upload File
            </div>
            <div className="imgupload">
                <p>
                  JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
                </p>

                {/* Insert Image */}

                <p>Drag and Drop File</p>
                <p>or <strong>browse media on your device</strong></p>
            </div>
        </div>

      <div className='content'>
          <div className='heading'>
            Name
          </div>
          <div className='input'>
                <TextField 
                    id="outlined-basic"
                    label="Item Name" 
                    className='inputfields'
                    size="small"
                    variant="outlined" 
                />
          </div>
      </div>
      
      <div className='content'>
          <div className='heading'>
              Description
          </div>
          <div className='input'>
              <TextField 
                  id="outlined-basic"
                  placeholder="Description of your item" 
                  className='inputfields'
                  variant="outlined" 
                  multiline
                  rows={4}
              />
          </div>
      </div>

      <div className='content'>
          <div className='heading'>
              Price
          </div>
          <div className="inputprice">
              <TextField 
                  id="outlined-basic"
                  // placeholder='Enter Price' 
                  label="Enter the price"
                  className='inputfields'
                  size="small"
                  variant="outlined"
              />
                <Select
                    label="Currency"
                    varient="outlined"
                    defaultValue={"ETH"}
                    InputProps={{ classes }}
                    style={{
                      border: "1px solid rgb(206, 206, 206)",
                      borderRadius: "5px",
                      width: "100px",
                      padding: "5px",
                    }}
                >
                  <MenuItem value={"ETH"}>ETH</MenuItem>
                  <MenuItem value={"BTC"}>BTC</MenuItem>
                  <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
        </div>
      </div>
   
      <button className="button">Create Item</button>

    </div>
  );
}