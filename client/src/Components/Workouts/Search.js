import React from "react";
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';
import InputAdornment from '@material-ui/core/InputAdornment'

// import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles({
  bar: {
      width: '750px',
      backgroundColor: '#2E2E38',
      // height: '40px',
      marginLeft: '10%',
      color: 'white',
      borderColor: '#2E2E38',
      borderRadius: 12,
  },
  textColor: {
    color: 'white'
  }
})

function Search({searchTerm, setSearchTerm}) {
  const classes = useStyles()

  return (
    <>
      <form>
        <TextField type="text"
        id="input-with-icon-textfield"
        name="searchBar"
        // placeholder="search…"
        autoComplete="off"
        variant="outlined"
        color="secondary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{fontSize: '25px', color: grey[500]}}/>
            </InputAdornment>
          ), className: classes.textColor
        }}
        value={searchTerm}
        className={classes.bar}
        onChange={(e)=>{setSearchTerm(e.target.value)} }/>
      </form>
    </>
  );
}

export default Search;