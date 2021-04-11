import React from 'react';
import useStyles from './styles';
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchRounded';

function Filter() {
    const classes = useStyles();

    return (
        <Grid container className={classes.filter} spacing={2}>
            <Grid item xs={12} md={3}>
                <FormControl size="small" fullWidth>
                    <InputLabel shrink={true} id="GSM">
                        GSM
                    </InputLabel>
                    <Select label="GSM">
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={55}>55</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={55}>55</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={55}>55</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={55}>55</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={35}>35</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={45}>45</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={55}>55</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
                <FormControl size="small" fullWidth>
                    <InputLabel shrink={true} id="Ukuran">
                        Ukuran
                    </InputLabel>
                    <Select label="Ukuran">
                        <MenuItem value={'1000 MM'}>1000 MM</MenuItem>
                        <MenuItem value={'1010 MM'}>1010 MM</MenuItem>
                        <MenuItem value={'1020 MM'}>1020 MM</MenuItem>
                        <MenuItem value={'1025 MM'}>1025 MM</MenuItem>
                        <MenuItem value={'1030 MM'}>1030 MM</MenuItem>
                        <MenuItem value={'1035 MM'}>1035 MM</MenuItem>
                        <MenuItem value={'1050 MM'}>1050 MM</MenuItem>
                        <MenuItem value={'1055 MM'}>1055 MM</MenuItem>
                        <MenuItem value={'1060 MM'}>1060 MM</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
                <span className={classes.searchButton}>
                    <Button
                        startIcon={<SearchIcon />}
                        variant="contained"
                        color="primary"
                        disableElevation
                    >
                        Submit
                    </Button>
                </span>
            </Grid>
        </Grid>
    );
}

export default Filter;
