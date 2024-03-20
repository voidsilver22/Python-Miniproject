

import  PropTypes  from "prop-types";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Entry(props){
  
   return(<>
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id={props.id} label={props.label} type={props.type} autoComplete={props.autoC} variant="outlined" />
    
    </Box>
   </>);
}


Entry.propTypes = {
    autoC : PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id:PropTypes.string
}
Entry.defualtProps ={
    label: "LABEL",
    type: "text",
    placeholder: "Place Holder Text"
}
export default Entry

