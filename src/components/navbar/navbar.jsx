import React from 'react'
import DarkLogo from '../../assets/Logos/dark.svg'
import MobileDarkLogo from '../../assets/Logos/mobileDarklogo.svg'
import styles from './navbar.module.css';
import Search from '../../assets/Logos/Search-dark.svg'
import Menu from '../../assets/Logos/menu-dark.svg'
import ExitDark from '../../assets/Logos/exit-dark.svg'
import { Box, Divider, Drawer,InputAdornment,TextField,List, ListItem, ListItemText }from '@material-ui/core'
import { useNavigate } from "react-router-dom"
export const Navbar = () => {
  let navigate = useNavigate(); 
const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <Box style={{ background: '#24252D', minHeight: '60vh', maxHeight: '450px' }} 
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
          <img src={MobileDarkLogo} alt="" />
          <img src={ExitDark} alt="" onClick={toggleDrawer(anchor, false)} />
        </Box>
          <Divider style={{ background: '#2D2E36' }}/>
        
<List style={{color:'white'}}>
          {['Explore', 'My Items', 'Following'].map((text, index) => (
            <ListItem button key={text} >
             
              <ListItemText 
              className="listItem"
                primary={text}
              />
            </ListItem>
          ))}
        </List>
        <Box>
          <Divider style={{ background: '#2D2E36',marginTop:'100px' }}/>
          <div style={{display:'flex',justifyContent:'space-around',padding:'10px 10px'}}>
              <button class={styles.createBtnMob} onClick={() => {navigate("/create")}}>Create</button>
              <button class={styles.connectBtnMob}>Connect</button>
          </div>
        </Box>
        
        
        
      </Box>
  );
  
    return (
      <>
        <div className={styles.nav}>
          <img src={DarkLogo} alt="" className={styles.logo} onClick={() => {navigate("/home")}} />
          <img src={MobileDarkLogo} alt="" className={styles.darklogo} onClick={() => {navigate("/home")}} />
          <div className={styles.searchbar}>
          
            <TextField variant="outlined" className={styles.searchbar} size='small' placeholder="Search Item Here"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <img src={Search} alt="Search Item Here" />
                  </InputAdornment>
                )
              }}></TextField>
            {/* <input type="text" className={styles.search} placeholder='Search Item Here'/> */}
          </div>
      
          <div className={styles.nav_content}>
            <div className={styles.listItem} onClick={() => {navigate("/home")}}>Explore</div>
            <div className={styles.listItem} onClick={() => {navigate("/item")}}>My Items</div>
            <div className={styles.listItem} onClick={() => {navigate("/profile")}}>Following</div>
          </div>
      
          <button class={styles.createBtn} onClick={() => {navigate("/create")}}>Create</button>
          <button class={styles.connectBtn}>Connect</button>
          <img src={Menu} alt="" className={styles.menuBtn} onClick={toggleDrawer('top', true)} />
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            className={styles.drawer}
          >
            {list('top')}
          </Drawer>
        </div>
        <Divider className={styles.divider}></Divider>
      </>
    
    )
  }