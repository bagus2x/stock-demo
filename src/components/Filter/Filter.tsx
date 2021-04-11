import React, { useState } from 'react';
import useStyles from './styles';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchRounded';

interface FilterProps {
    gsm: Array<number | ''>;
    width: Array<number | ''>;
    onFilter: (gsm: number | '', width: number | '') => void;
}

const Filter: React.FC<FilterProps> = ({ gsm, width, onFilter }) => {
    const classes = useStyles();
    const [gsmValue, setGsmValue] = useState<number | ''>('');
    const [widthValue, setWidthValue] = useState<number | ''>('');

    const handleGSMChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGsmValue(event.target.value as number);
    };

    const handleWidthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWidthValue(event.target.value as number);
    };

    const handleSubmit = () => {
        onFilter(gsmValue, widthValue);
    };

    return (
        <Grid container className={classes.filter} spacing={2}>
            <Grid item xs={12} md={3}>
                <FormControl size="small" fullWidth>
                    <InputLabel shrink={true} id="GSM">
                        GSM
                    </InputLabel>
                    <Select onChange={handleGSMChange} value={gsmValue} label="GSM">
                        <MenuItem value={''}>Any</MenuItem>
                        {gsm.map((value, index) => (
                            <MenuItem key={index} value={value}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
                <FormControl size="small" fullWidth>
                    <InputLabel shrink={true} id="Ukuran">
                        Ukuran
                    </InputLabel>
                    <Select onChange={handleWidthChange} value={widthValue} label="Ukuran">
                        <MenuItem value={''}>Any</MenuItem>
                        {width.map((value, index) => (
                            <MenuItem key={index} value={value}>
                                {value !== '' ? `${value} MM` : ''}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
                <span className={classes.searchButton}>
                    <Button onClick={handleSubmit} startIcon={<SearchIcon />} variant="contained" color="primary" disableElevation>
                        Submit
                    </Button>
                </span>
            </Grid>
        </Grid>
    );
};

export default Filter;
