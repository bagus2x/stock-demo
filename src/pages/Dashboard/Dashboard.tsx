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
    { id: 1, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 2, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 3, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 4, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 5, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 6, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 7, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 8, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 9, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 10, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 11, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 12, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 13, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 14, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 15, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' },
    { id: 16, gsm: 11, width: 10, order: 12, item: 13, noMaterial: 14, lokasi: '55/1020' }
];

function Dashboard() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.dashboard}>
            <Filter />
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
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell align="left">{row.gsm}</TableCell>
                                    <TableCell align="left">{row.width}</TableCell>
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
                rowsPerPageOptions={[10, 25, 100]}
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