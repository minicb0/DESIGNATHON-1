import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    img: {
        borderRadius: '20px',
        width: '100%',
        height: '100%',
        
    },
    card: {
        borderRadius: '20px',
        color: 'white',
        backgroundColor: '#2A2D3A;',
        margin: '7px',
        padding: '15px',
        maxWidth: '250px'
    },
    heading: {
        fontFamily: 'Poppins, sans-serif',
        fontStyle: 'normal',
        marginTop: '9px',
        fontSize: '15px',
        lineHeight: '21px',
        fontWeight: 600
    },
    eth: {
        fontFamily: 'Poppins, sans-serif',
        marginTop: '5px',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ethValue: {
        fontWeight: 600
    },
    likes: {
        marginLeft: '3px'
    }
})
