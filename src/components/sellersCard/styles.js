import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    img: {
        borderRadius: '50%',
        width: '100%',
        height: '100%',   
    },
    card: {
        borderRadius: '20px',
        color: 'white',
        backgroundColor: '#2A2D3A;',
        margin: '15px',
        padding: '15px',
        maxWidth: '150px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'Poppins, sans-serif',
        fontStyle: 'normal',
        marginTop: '9px',
        fontSize: '15px',
        lineHeight: '21px',
        fontWeight: 600,
        textAlign: 'center'
    },
    eth: {
        fontFamily: 'Poppins, sans-serif',
        marginTop: '5px',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ethValue: {
        fontWeight: 600
    },
    likes: {
        marginLeft: '3px'
    },
    avatarWrap: {
        width: '100%',
        height: '100%',
        position: 'relative',

    },
    avatar: { 
        verticalAlign: 'middle',
        // width: '100px',
        // height: '100px',
        borderRadius: '50%',
        width: '100%',
        height: '100%', 
        margin: 'auto'
    },
    tick: {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        background: "deepskyblue",
        borderRadius: "100%",
        color: "#fff",
        width: "15px",
        height: "15px",
        textAlign: "center",
        fontSize: "10px",
        lineHeight: "15px",
    }
})
