import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/SearchRounded';
import ProfileIcon from '@material-ui/icons/AccountCircleRounded';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeftRounded';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import useStyles from './styles';
import {
    Button,
    FormControl,
    InputLabel,
    Select,
    TextField
} from '@material-ui/core';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [shrink, setShrink] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav
            className={clsx([
                classes.sidebar,
                className,
                { [classes.shrink]: shrink }
            ])}
        >
            <div className={classes.form}>
                <FormControl>
                    <InputLabel id="GSM">GSM</InputLabel>
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
                <FormControl>
                    <InputLabel id="GSM">GSM</InputLabel>
                    <Select label="GSM">
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
                <Button variant="outlined" color="primary">
                    Submit
                </Button>
            </div>
            <span>
                <IconButton color="primary">
                    <ProfileIcon />
                </IconButton>
            </span>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </nav>
    );
};

export default Sidebar;
