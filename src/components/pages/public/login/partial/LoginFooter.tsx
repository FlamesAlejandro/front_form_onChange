import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function LoginFooter() {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			sx={{ mt: 5 }} 
		>
			{"Copyright © "}
			<Link color="inherit" href="https://www.inacap.cl/">
				Sistema agropecuaria Santa Isabel
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default LoginFooter;
