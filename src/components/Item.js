import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
  }));

export default Item;