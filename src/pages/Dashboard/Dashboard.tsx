import React, { ChangeEvent, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './style';
import Filter from '../../components/Filter';

interface Column {
    id: 'gsm' | 'width' | 'order' | 'item' | 'noMaterial' | 'lokasi';
    label: string;
    minWidth?: number;
    align?: 'left' | 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'gsm', label: 'GSM', minWidth: 170 },
    { id: 'width', label: 'Width', minWidth: 100 },
    {
        id: 'order',
        label: 'Order',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'item',
        label: 'Item',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'noMaterial',
        label: 'No. Material',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'lokasi',
        label: 'Lokasi',
        minWidth: 170,
        align: 'right'
    }
];

const rows = [
    { id: 1, gsm: 50, width: 1010, order: 31036865, item: 1, noMaterial: 40413352, lokasi: '55/1' },
    { id: 2, gsm: 50, width: 768, order: 31036867, item: 1, noMaterial: 40413353, lokasi: '56/5' },
    { id: 3, gsm: 50, width: 1000, order: 31036868, item: 2, noMaterial: 40413354, lokasi: 'm4/12' },
    { id: 4, gsm: 55, width: 1020, order: 31036869, item: 1, noMaterial: 40413355, lokasi: '55/8' },
    { id: 5, gsm: 55, width: 1035, order: 31036810, item: 3, noMaterial: 40413356, lokasi: '55/2' },
    { id: 6, gsm: 55, width: 650, order: 31036811, item: 10, noMaterial: 40413357, lokasi: '55/3' },
    { id: 7, gsm: 55, width: 650, order: 31036812, item: 11, noMaterial: 40413358, lokasi: 'R2/2' },
    { id: 8, gsm: 56, width: 1015, order: 31036813, item: 3, noMaterial: 40413359, lokasi: 'R3/3' },
    { id: 9, gsm: 56, width: 780, order: 31036814, item: 2, noMaterial: 40413360, lokasi: 'R4/3' },
    { id: 10, gsm: 57, width: 1020, order: 31036815, item: 4, noMaterial: 40413361, lokasi: '55/1' },
    { id: 11, gsm: 57, width: 1020, order: 31036816, item: 4, noMaterial: 40413362, lokasi: '55/2' },
    { id: 12, gsm: 57, width: 720, order: 31036817, item: 3, noMaterial: 40413363, lokasi: '55/1' },
    { id: 13, gsm: 57, width: 900, order: 31036818, item: 2, noMaterial: 40413364, lokasi: 'R3/5' },
    { id: 14, gsm: 60, width: 241, order: 31036819, item: 1, noMaterial: 40413365, lokasi: 'S3/5' },
    { id: 15, gsm: 60, width: 642, order: 31036820, item: 6, noMaterial: 40413366, lokasi: 'S3/2' },
    { id: 16, gsm: 60, width: 728, order: 31036821, item: 3, noMaterial: 40413367, lokasi: 'M4/23' }
];

const gsm = [...new Set(rows.map((v) => v.gsm))];
const width = [...new Set(rows.map((v) => v.width))];

function Dashboard() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [filteredRows, setFilteredRows] = useState([...rows]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFilter = (gsm: number | '', width: number | '') => {
        console.log(gsm, width);
        if (gsm !== '' && width !== '') setFilteredRows(rows.filter((v) => v.gsm === gsm && v.width === width));
        if (gsm !== '' && width === '') setFilteredRows(rows.filter((v) => v.gsm === gsm));
        if (gsm === '' && width !== '') setFilteredRows(rows.filter((v) => v.width === width));
    };

    return (
        <Paper className={classes.dashboard}>
            <Filter onFilter={handleFilter} gsm={gsm} width={width} />
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align="left" style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell align="left">{row.gsm}</TableCell>
                                    <TableCell align="left">{row.width} MM</TableCell>
                                    <TableCell align="left">{row.order}</TableCell>
                                    <TableCell align="left">{row.item}</TableCell>
                                    <TableCell align="left">{row.noMaterial}</TableCell>
                                    <TableCell align="left">{row.lokasi}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                labelRowsPerPage="rows/page"
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default Dashboard;
