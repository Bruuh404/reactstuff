import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    boxShadow: "none",
}));

export default Item;