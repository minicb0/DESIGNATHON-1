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
    }
})
