import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    hotbird: {
        width: '100%',
        // marginRight: '100px',
        // marginLeft: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    home: {
        margin: '0 120px',
        '@media screen and (max-width: 1280px)': {
            margin: '0 70px'
        },
        '@media screen and (max-width: 1012px)': {
            margin: '0 30px'
        },
        '@media screen and (max-width: 560px)': {
            margin: '0 5px'
        }
    },
    // wrapper: {
    //     margin: '0 100px'
    // },
    header: {
        fontSize: '28px',
        lineHeight: '42px',
        marginLeft: '80px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        color: 'white',
        marginBottom: '15px',
        width: '100%'
    }
})
