import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import Iframe from 'react-iframe'
// @mui
import {
    Card,
    Table,
    Stack,
    Paper,
    Avatar,
    Button,
    Popover,
    Checkbox,
    TableRow,
    MenuItem,
    TableBody,
    TableCell,
    Container,
    Typography,
    IconButton,
    TableContainer,
    TablePagination,
    TextField,
} from '@mui/material';
// components
import { Box, padding } from '@mui/system';
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// mock
import USERLIST from '../_mock/user';



export default function ProductAddPage() {
    const [open, setOpen] = useState(null);

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('name');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = USERLIST.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };
    // const iframe = '<iframe src="https://www.example.com." width="540" height="450"></iframe>';


    return (
        <>
            <Helmet>
                <title> Product Add | Kharidiya </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Product Add
                    </Typography>
                    <Button href='/dashboard/products' variant="contained" startIcon={<Iconify icon="eva:list-fill" />}>
                        List
                    </Button>
                </Stack>
                <Card
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Iframe url="https://minimals.cc/dashboard"
                            width="640px"
                            height="320px"
                            id=""
                            className=""
                            display="block"
                            position="relative" />
                    </div>
                    <div>
                        <Typography>
                            <TextField
                                id="outlined-flexible"
                                label="Product name"
                            />
                        </Typography>
                        <TextField
                            id="outlined-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />

                        <TextField
                            id="filled-multiline-flexible"
                            label="Multiline"
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            maxRows={4}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                            variant="standard"
                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="standard"
                        />
                    </div>
                </Card>
            </Container>


        </>
    );
}
