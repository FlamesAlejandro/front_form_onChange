import React, { ChangeEvent, useState, FocusEvent } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import QRCode from "qrcode";
import { useForm } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DataCamioneros } from "../fakedata/DataCamioneros";
import { DataCamion } from "../fakedata/DataCamion";
import { DataEmpresaDestino } from "../fakedata/DataEmpresaDestino";
import { DataEmpresaCamion } from "../fakedata/DataEmpresaCamion";

interface FormValues {
    nombreChofer: string;
        rutChofer: string;
        correoChofer: string;
        telefonoChofer: string;
        nombreEmpresa: string;
        rutEmpresa: string;
        patenteCamion: string;
        marcaCamion: string;
        modeloCamion: string;
        annoCamion: string;
        rutEmpresaDestino: string;
        nombreEmpresaDestino: string;
        direccionDestino: string;
        ciudadDestino: string;
        potrero: string;
        patenteCarro: string;
        tipoTraslado: string;
        seguroCarga: string;
        tipoCarga: string;
        variedadCarga: string;
        TaraCamion: string;
        codigoMOP: string;
}

export const Form = () => {

    const [formulario, setFormulario] = useState<FormValues>({
        nombreChofer: '',
        rutChofer: '',
        correoChofer: '',
        telefonoChofer: '',
        nombreEmpresa: '',
        rutEmpresa: '',
        patenteCamion: '',
        marcaCamion: '',
        modeloCamion: '',
        annoCamion: '',
        rutEmpresaDestino: '',
        nombreEmpresaDestino: '',
        direccionDestino: '',
        ciudadDestino: '',
        potrero: '',
        patenteCarro: '',
        tipoTraslado: '',
        seguroCarga: '',
        tipoCarga: '',
        variedadCarga: '',
        TaraCamion: '',
        codigoMOP: '',

    })

    const { nombreChofer, rutChofer, correoChofer, telefonoChofer, nombreEmpresa, rutEmpresa,
        patenteCamion,
        marcaCamion,
        modeloCamion,
        annoCamion,
        rutEmpresaDestino,
        nombreEmpresaDestino,
        direccionDestino,
        ciudadDestino,
        potrero,
        patenteCarro,
        tipoTraslado,
        seguroCarga,
        tipoCarga,
        variedadCarga,
        TaraCamion,
        codigoMOP} = formulario;

    const [imgUrl, setImgUrl] = useState("");
    const { register, handleSubmit } = useForm();


    const  handleChofer = ( { target }: FocusEvent<HTMLInputElement> ) => {
        
        const { name , value } = target;
        console.log(value);

        if(DataCamioneros.find( chofer => chofer.id === value)){

            const newdata = DataCamioneros.filter( chofer => chofer.id === value);
            
            setFormulario({
                ...formulario,
                rutChofer: newdata[0].rut,
                nombreChofer: newdata[0].nombre,
                correoChofer: newdata[0].correo,
                telefonoChofer: newdata[0].telefono,
            });
              
        }     
        console.log('Activaste este campo!');       

    }

    const  handleEmpresaCamion = ( { target }: FocusEvent<HTMLInputElement> ) => {

        const { name , value } = target;

        if (DataEmpresaCamion.find( empresaC => empresaC.id === value)){

            const newdata = DataEmpresaCamion.filter( empresaC => empresaC.id === value);
        
            setFormulario({
                ...formulario,
                rutEmpresa: newdata[0].rutempresa,
                nombreEmpresa: newdata[0].nombreempresa
            });
        }        
    }

    const  handlePatente = ( { target }: FocusEvent<HTMLInputElement> ) => {

        const { name , value } = target;

        if (DataCamion.find( camion => camion.id === value)){

            const newdata = DataCamion.filter( camion => camion.id === value);
        
            setFormulario({
                ...formulario,
                patenteCamion: newdata[0].patente,
                marcaCamion: newdata[0].marca,
                modeloCamion: newdata[0].modelo,
                annoCamion: newdata[0].anno,
            });
        }        
    }

    const handleChange = ( { target }:ChangeEvent<HTMLInputElement>) => {

        const { name , value } = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });

    }

    const  handleEmpresaDestino = ( { target }: FocusEvent<HTMLInputElement> ) => {
        const { name , value } = target;
  
        if (DataEmpresaDestino.find( EmpresaDes => EmpresaDes.id === value)){

            const newdata = DataEmpresaDestino.filter( EmpresaDes => EmpresaDes.id === value);
        
            setFormulario({
                ...formulario,
                rutEmpresaDestino: newdata[0].rutdestino,
                nombreEmpresaDestino: newdata[0].nombredestino,
                ciudadDestino: newdata[0].ciudad,
                direccionDestino: newdata[0].direccion,
                potrero: newdata[0].potrero,
            });
        }        
    }

    const onSubmit = (data: any) => generarQrCode(data);
    // console.log(errors);

    const generarQrCode = async (data: any) => {
        try {
            const response = await QRCode.toDataURL(JSON.stringify(data));
            setImgUrl(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Typography component="h1" variant="h4">
                        Formulario
                    </Typography>

                    <hr />

                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3, width: "100%" }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="lbChofer">Chofer</InputLabel>
                                    <Select
                                        labelId="lbChofer"
                                        label="Chofer"
                                        {...register("NombreChofer", {
                                            required: "Este campo es requerido",
                                        })}
                                        onBlur={ handleChofer }                                        
                                    >
                                        {DataCamioneros.map((c) => (
                                            <MenuItem value={c.id}> {c.nombre}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Rut del Chofer"
                                    placeholder="Rut del Chofer"                                 
                                    {...register("rutChofer", {
                                        required: "Este campo es requerido",
                                    })}                                    
                                    value={rutChofer} 
                                    onChange={handleChange}
                                ></TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    
                                    label="Correo del Chofer"
                                    placeholder="Correo del Chofer"
                                    {...register("correoChofer", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={correoChofer}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="telefono del Chofer"
                                    
                                    placeholder="telefono del Chofer"
                                    {...register("telefonoChofer", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={telefonoChofer}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                    <InputLabel id="lbEmpresaCamion">Empresa del Camion</InputLabel>
                                    <Select
                                        labelId="lbEmpresaCamion"
                                        label="Empresa del Camion"
                                        {...register("nombreEmpresa", {
                                            required: "Este campo es requerido",
                                        })}
                                        onBlur={ handleEmpresaCamion }                                        
                                    >
                                        {DataEmpresaCamion.map((c) => (
                                            <MenuItem value={c.id}> {c.nombreempresa}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Rut de la Empresa"
                                    placeholder="Rut de la Empresa"
                                    {...register("rutEmpresa", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={rutEmpresa}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                    <InputLabel id="lbPatente">Patente del Camion</InputLabel>
                                    <Select
                                        labelId="lbPatente"
                                        label="Patente del Camion"
                                        {...register("patenteCamion", {
                                            required: "Este campo es requerido",
                                        })}
                                        onBlur={ handlePatente }                                        
                                    >
                                        {DataCamion.map((c) => (
                                            <MenuItem value={c.id}> {c.patente}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Marca del Camion"
                                    placeholder="Marca del Camion"
                                    {...register("marcaCamion", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={marcaCamion}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Modelo del Camion"
                                    placeholder="Modelo del Camion"
                                    {...register("modeloCamion", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={modeloCamion}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Año del Camion"
                                    placeholder="Año del Camion"
                                    {...register("annoCamion", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={annoCamion}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                    <InputLabel id="lbEmpresaDestino">Empresa Destino</InputLabel>
                                    <Select
                                        labelId="lbEmpresaDestino"
                                        label="Empresa Destino"
                                        {...register("nombreEmpresaDestino", {
                                            required: "Este campo es requerido",
                                        })}
                                        onBlur={ handleEmpresaDestino }                                        
                                    >
                                        {DataEmpresaDestino.map((c) => (
                                            <MenuItem value={c.id}> {c.nombredestino}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Rut Empresa de Destino"
                                    placeholder="Rut Empresa de Destino"
                                    {...register("rutEmpresaDestino", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={rutEmpresaDestino}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Direccion Destino"
                                    placeholder="Direccion Destino"
                                    {...register("direccionDestino", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={direccionDestino}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Ciudad de Destino"
                                    placeholder="Ciudad de Destino"
                                    {...register("ciudadDestino", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={ciudadDestino}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Potrero"
                                    placeholder="Potrero"
                                    {...register("potrero", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={potrero}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Patente de Carro"
                                    placeholder="Patente de Carro"
                                    {...register("patenteCarro", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={patenteCarro}
                                    onChange={handleChange}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Tipo de Traslado"
                                    placeholder="Tipo de Traslado"
                                    {...register("tipoTraslado", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={tipoTraslado}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Seguro de Carga"
                                    placeholder="Seguro de Carga"
                                    {...register("seguroCarga", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={seguroCarga}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Tipo de Carga"
                                    placeholder="Tipo de Carga"
                                    {...register("tipoCarga", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={tipoCarga}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Variedad de Carga"
                                    placeholder="Variedad de Carga"
                                    {...register("variedadCarga", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={variedadCarga}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Tara de Camion"
                                    placeholder="Tara de Camion"
                                    {...register("TaraCamion", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={TaraCamion}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    label="Codigo MOP"
                                    placeholder="Codigo MOP"
                                    {...register("codigoMOP", {
                                        required: "Este campo es requerido",
                                    })}
                                    value={codigoMOP}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Convertir a QR CODE
                        </Button>
                    </Box>
                </Box>
                {imgUrl ? (
                    <a href={imgUrl} download>
                        <img src={imgUrl} alt="img" />
                    </a>
                ) : null}
            </Container>
        </>
    );
};
