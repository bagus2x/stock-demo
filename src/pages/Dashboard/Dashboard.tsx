import { ChangeEvent, useState } from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';

interface Column {
    id: 'gsm' | 'width' | 'order' | 'item' | 'noMaterial' | 'lokasi' | 'jumlah';
    label: string;
    minWidth?: number;
    align?: 'left' | 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'gsm', label: 'GSM', minWidth: 100 },
    { id: 'width', label: 'Width', minWidth: 100 },
    {
        id: 'order',
        label: 'Order',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'item',
        label: 'Item',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'noMaterial',
        label: 'No. Material',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'lokasi',
        label: 'Lokasi',
        minWidth: 100,
        align: 'left'
    },
    {
        id: 'jumlah',
        label: 'Jumlah',
        minWidth: 100,
        align: 'left'
    }
];

const r = { id: 1, gsm: 55, width: 1020, order: 31036865, item: 1, noMaterial: 40413352, lokasi: 'A1', jumlah: 1 };

const rows = [
    r,
    { id: 2, gsm: 55, width: 1020, order: 31036867, item: 1, noMaterial: 40413353, lokasi: 'A2', jumlah: 2 },
    { id: 3, gsm: 55, width: 1020, order: 31036868, item: 2, noMaterial: 40413354, lokasi: 'A3', jumlah: 1 },
    { id: 4, gsm: 55, width: 1020, order: 31036869, item: 1, noMaterial: 40413355, lokasi: 'B1', jumlah: 4 },
    { id: 5, gsm: 55, width: 1020, order: 31036810, item: 3, noMaterial: 40413356, lokasi: 'B2', jumlah: 2 },
    { id: 6, gsm: 55, width: 1020, order: 31036811, item: 10, noMaterial: 40413357, lokasi: 'B3', jumlah: 3 },
    { id: 7, gsm: 55, width: 1020, order: 31036812, item: 11, noMaterial: 40413358, lokasi: 'B4', jumlah: 1 },
    { id: 8, gsm: 55, width: 1020, order: 31036813, item: 3, noMaterial: 40413359, lokasi: 'B5', jumlah: 2 },
    { id: 9, gsm: 55, width: 1020, order: 31036814, item: 2, noMaterial: 40413360, lokasi: 'C1', jumlah: 1 },
    { id: 10, gsm: 55, width: 1020, order: 31036815, item: 4, noMaterial: 40413361, lokasi: 'C2', jumlah: 3 },
    { id: 11, gsm: 55, width: 1020, order: 31036816, item: 4, noMaterial: 40413362, lokasi: 'C3', jumlah: 1 },
    { id: 12, gsm: 55, width: 1020, order: 31036817, item: 3, noMaterial: 40413363, lokasi: 'C4', jumlah: 2 },
    { id: 13, gsm: 55, width: 1020, order: 31036818, item: 2, noMaterial: 40413364, lokasi: 'D1', jumlah: 1 },
    { id: 14, gsm: 55, width: 1020, order: 31036819, item: 1, noMaterial: 40413365, lokasi: 'D2', jumlah: 1 },
    { id: 15, gsm: 55, width: 1020, order: 31036820, item: 6, noMaterial: 40413366, lokasi: 'D3', jumlah: 5 },
    { id: 16, gsm: 55, width: 1020, order: 31036821, item: 3, noMaterial: 40413367, lokasi: 'D4', jumlah: 3 }
];

const gsm = [...new Set(rows.map((v) => v.gsm))];
const width = [...new Set(rows.map((v) => v.width))];

function Dashboard() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [filteredRows, setFilteredRows] = useState<typeof rows>([]);
    const [rowWillUpdate, setRowWillUpdate] = useState<{ row: typeof r; type: 'add' | 'subtract' } | null>(null);
    const [jumlah, setJumlah] = useState(0);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleUpdateItem = () => {
        setFilteredRows((prev) =>
            prev.map((item) => {
                if (item.id === (rowWillUpdate?.row.id as number))
                    return { ...item, jumlah: rowWillUpdate?.type === 'add' ? item.jumlah + jumlah : item.jumlah - jumlah };
                return item;
            })
        );
        setRowWillUpdate(null);
        setJumlah(0);
    };

    const handleFilter = (gsm: number | '', width: number | '') => {
        if (gsm === '' && width === '') return;
        if (gsm === '' && width === '') setFilteredRows(rows);
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
                                    <TableCell align="left" className={classes.action}>
                                        <span>{row.jumlah}</span>
                                        <div className={classes.buttonWrapper}>
                                            <IconButton
                                                size="small"
                                                edge="end"
                                                color="primary"
                                                onClick={() => setRowWillUpdate({ row: row, type: 'add' })}
                                            >
                                                <AddCircleRoundedIcon />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                edge="end"
                                                color="secondary"
                                                onClick={() => setRowWillUpdate({ row: row, type: 'subtract' })}
                                            >
                                                <RemoveCircleRoundedIcon />
                                            </IconButton>
                                        </div>
                                    </TableCell>
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
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <Dialog
                open={!!rowWillUpdate}
                onClose={() => {
                    setRowWillUpdate(null);
                    setJumlah(0);
                }}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    <div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            onChange={(e) => setJumlah(parseInt(e.target.value) || 0)}
                            value={jumlah || ''}
                            helperText={
                                (rowWillUpdate?.row.jumlah as number) - jumlah < 0 && rowWillUpdate?.type === 'subtract'
                                    ? 'Jumlah tidak mencukupi'
                                    : ' '
                            }
                            error={(rowWillUpdate?.row.jumlah as number) - jumlah < 0 && rowWillUpdate?.type === 'subtract'}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setRowWillUpdate(null);
                            setJumlah(0);
                        }}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateItem} color="primary">
                        {rowWillUpdate?.type === 'add' ? 'Tambah' : 'Kurangi'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
}

export default Dashboard;
