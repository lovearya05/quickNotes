import React, {useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Note from './Note';

// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { margin } from '@mui/system';


const Createnote = () => {

const[note, setNote] = useState('')
const[title, setTitle] = useState('')

const [finalNote, setFinalnote] = useState([])
const [finalTitle, setFinalTitle] = useState([])

const update = ()=>{
    setFinalTitle([...finalTitle, title]);
    setFinalnote([...finalNote, note]);

}

const remove = (index)=>{
    let arr = []
    let brr = []
    for(let i=0;i<finalNote.length;i++){
        if(i!==index){
            arr = [...arr, finalTitle[i]];
            brr = [...brr, finalNote[i]];
        }
    }
    setFinalTitle(arr)
    setFinalnote(brr)
}

  return (
    <div style={{
        backgroundColor:'lightblue',
    }}>
        <div className='main_note'>
            <form  className='createnote'>

                <input  onChange={(event) => {
                    setNote(event.target.value)
                }}
                type='text'
                placeholder="Enter Note here"
                />

                <textarea placeholder='Note Title' 
                onChange={(event)=>{
                    // console.log(event.target.value)
                    setTitle(event.target.value)
                }}
                ></textarea>

                
                <Button  onClick={update} className='createNote'><AddCircleIcon/></Button>
            </form>
        </div>

        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
        }}>
            {finalTitle.map((data, index)=>{
                return(
                    <>
                    <DeleteIcon style={{
                        display:"flex",
                        marginLeft:50,                        
                    }}
                    
                     onClick={()=>{remove(index)}}/>

                    <Note  key= {index} 
                        head={data} 
                        area = {finalNote[index]}
                    />

                    </>
                )

            })}

        </div>
         


    </div>
  )
}

export default Createnote
