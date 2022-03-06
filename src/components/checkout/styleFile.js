import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  // container: {
  //   position: "absolute",
  //   width: "585px",
  //   height: "480px",
  //   left: "428px",
  //   top: "334px",
  //   background: "#24252D",
  //   border: "1px solid #2D2E36",
  //   boxSizing: "border-box",
  //   borderRadius: "20px",
  //   padding: "29px",
  // },
  title: {
    textAlign: "center",
    height: "36px",
    color: "White",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "36px",
    borderBottom: '2x solid grey',
  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF",
    // margin: "0px 397px"
  },
  margin: {
    margin: '0 50px'
  },
  subtotal: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF",
    // textAlign:'end'
    // margin: "17px 397px"
  },
  container3: {
    display: 'flex'
  },
  image: {
    position: 'static',
    width: '107px',
    height: '104px',
    left: '0px',
    top: '0px',
    background: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
    margin: '0px 15px'
  },
  name: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF",
    marginBottom: '-20px'
  },
  para: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF",
  },
  value: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF",
    margin: '0px 0 0 130px'
  },

  total: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF"
  },
  value1: {
    marginLeft: '400px'
  },
  container5: {
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white ',
    backgroundColor: '#2A2D3A',
    // margin: '100px 0',
    borderTop: '1px solid',
    borderColor: 'grey'
  },
  checkOut: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '140px',
    // height: '40px',
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF",
    borderRadius: '5px',
    background: 'linear-gradient(101.12deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%)',
    color: 'white !important',
    padding: '3px 20px',
    '&:hover': {
      cursor: 'pointer',
      background: 'linear-gradient(101.12deg, #CB1CC5 27.35%, #C81CC5 99.99%, #EB1484 100%, #C91CC3 100%)'
  }
  },
  cancel: {
    marginLeft: '20px',
    cursor: 'pointer',
    // width: '140px',
    // height: '40px',
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    // color: "#FFFFFF", 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    color: 'linear-gradient(101.12deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%)',
    padding: '3px 20px',
    border: '1px solid',
    borderColor: 'linear-gradient(101.12deg, #EB1484 27.35%, #C91CC3 99.99%, #C81CC5 100%, #C81CC5 100%) !important',
  },
  link: {
    // color: 'black',
    // textDecoration: 'none'
  },
  space: {
    marginTop: '50px'
  },
  dialogText: {
    color: 'white ',
    backgroundColor: '#2A2D3A'
  }
});
