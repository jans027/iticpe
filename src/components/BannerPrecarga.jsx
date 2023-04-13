import React from 'react' 
// styles
import { ContBanner } from '../styles/BannerPrecarga'
// components from Materia Ui
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const BannerPrecarga = () => {

    // styles changed from material ui
    const theme = createTheme({
        palette: {
            primary: {
                main: '#9cff2d',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <ContBanner>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress color='primary' />
                </Box>
            </ContBanner>
        </ThemeProvider>
    )
}
export default BannerPrecarga