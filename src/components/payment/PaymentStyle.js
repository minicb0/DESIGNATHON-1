import { makeStyles } from "@material-ui/core/styles"

export const useStyles=makeStyles({
    container: {
        position: "absolute",
        width: "585px",
        height: "480px",
        left: "428px",
        top: "334px",
        background: "#24252D",
        border: "1px solid #2D2E36",
        boxSizing: "border-box",
        borderRadius: "20px",
        padding: "29px",
      },
      title:{
        // position: 'absolute',
        height: '36px',
        // marginLeft:'150px',
        width:'100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '36px',
        textAlign: 'center'
        // color:'#fff'
      },
      img:{
        width: '211px',
        height: '206px',
        background: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)', 
        marginTop:'20px',
        margin:'0px auto'
      },
      textContainer:{
        width:'365px',
        margin:'0px auto',
        // color:'#fff',
        marginTop:'20px',
        textAlign: 'center'
      },
      share:{
     fontFamily: 'Poppins',
     fontStyle: 'normal',
     fontWeight: 600,
     fontSize: '20px',
     lineHeight: '30px',
      // color: '#FFFFFF',
      textAlign:'center'
      },
      iconsImg:{
        width:'40px',
        height:'40px'
      },
      icons:{
        display:'flex',
        justifyContent:'space-evenly'
      },
      dialogText: {
        color: 'white ',
        backgroundColor: '#2A2D3A',
        padding: '5px 20px'
      }
})