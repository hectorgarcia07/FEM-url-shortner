import { styled } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";

const IconBtn = styled(IconButton)(({ theme }) => ({
   display: 'inline-block',
   padding:0,
   minHeight: 0,
   minWidth: 0,
}));

export default IconBtn