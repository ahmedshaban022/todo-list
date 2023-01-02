import React ,{useEffect} from 'react'
import { toast } from 'react-hot-toast'
import Button from '@mui/material/Button';

export default function TodoItem() {
    useEffect(() => {
      toast.success("Hello")
 
    
      
    }, [])
    const hanleToast=()=>{
        toast.success("TTT")
    }
  return (
    <div>
        <Button data-testid="btn-to-toast" variant="contained" sx={{margin:"20px auto",backgroundColor:"red"}} onClick={hanleToast}>Text</Button>
        

    </div>
  )
}
