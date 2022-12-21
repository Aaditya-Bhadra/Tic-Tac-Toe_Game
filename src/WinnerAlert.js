import {Stack, Alert} from '@mui/material'
const WinnerAlert = (props) => {
    return (
        <Stack spacing={2}>
            <Alert severity="success" color="info" style={{border:'1px yellow solid', fontSize:'2rem', backgroundColor:'pink'}}>
                {props.winner} the game.
            </Alert>
        </Stack>
    )
}

export default WinnerAlert
