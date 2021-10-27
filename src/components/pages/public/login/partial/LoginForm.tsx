import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { pEmail } from "../../../../../ts/helpers/patterns";
import { GlobalLogin } from "../../../../../ts/redux/actions/globalActions";

interface FormValues {
    email: string;
    password: string;
}

const LoginForm = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const SubmitData = (data: FormValues): void => {
        // alert(JSON.stringify(data));
        const token = "kjshflkjhsgkljshdfgkjhsdfkjghskdfjghkdjfdhgkljdsfh";

        dispatch(GlobalLogin(token))
    };

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(SubmitData)}
            sx={{ mt: 1 }}
            style={{ width: "100%" }}
        >
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Correo"
                {...register("email", {
                    required: "Debe ingresar email",
                    pattern: { value: pEmail, message: "Debes ingresar un email válido" },
                })}
                autoFocus
            />
            <FormHelperText id="email-error-text" error>
                {errors.email?.message}
            </FormHelperText>
            <TextField
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                {...register("password", { required: "Ingrese password" })}
                type="password"
                autoComplete="current-password"
            />
            <FormHelperText id="password-error-text" error>
                {errors.password?.message}
            </FormHelperText>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
            </Button>
        </Box>
    );
};

export default LoginForm;
