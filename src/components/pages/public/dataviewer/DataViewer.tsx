import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useParams } from "react-router-dom";

type TParams = {
    id: string;
};

const DataViewer = () => {
    const { id } = useParams<TParams>();

    const datosTest = {
        chofer: {
            rut: "15.353.546-5",
            nombre: "Freddy Ramirez",
        },
        camion: {
            patente: "DF5465",
            modelo: "Jac Cruiser 4181",
        },
    };
    const rows = [datosTest]

    return (
        <>
            <h4>Carga {id}</h4>
            <code>{JSON.stringify(datosTest)};</code>
            <br />
            <br />

            <TableContainer
                component={Paper}
                sx={{ mt: "40px", ml: "40px", maxWidth: "800px" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Rut chofer</TableCell>
                            <TableCell align="right">Nombre chofer</TableCell>
                            <TableCell align="right">Patente camión</TableCell>
                            <TableCell align="right">Modelo camión</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.chofer.rut}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="right"> 
                                    {row.chofer.rut}
                                </TableCell>
                                <TableCell align="right">{row.chofer.nombre}</TableCell>
                                <TableCell align="right">{row.camion.patente}</TableCell>
                                <TableCell align="right">{row.camion.modelo}</TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color="primary">
                                        Descargar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default DataViewer;
