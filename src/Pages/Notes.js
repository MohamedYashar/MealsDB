import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Notes() {
  return (
    <div>

        <div className='masternotes'>

            <div className='supernotes'>

                <div className='childnotes'> 
                    <label> Add a Note</label>
                    <h4>Title</h4>
                    <input className='inpet' placeholder=' Take a Note'/>

                </div>
            </div>

                <div className='supernotes'> 
                   <span> <h1> <DescriptionIcon/> My Notes</h1></span>  
                   <p> Recently viewed</p>   
                    <div>
                        <div className='childNotes' style={{display: "flex",flexDirection:"column",
                        textAlign:"left", fontSize:"13px"}}>

                            <div style={{display: "flex", justifyContent:"space-between",
                        alignItems:"center", margin:"10px"}}>
                    
                                <h3 > Feedbacks</h3>

                                <div style={{display: "flex", gap:"20px", justifyContent:"space-around",}}>
                                    <CreateIcon/>
                                    <DeleteIcon/>
                                </div>

                            </div>

                            <p style={{margin:"15px"}} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at mauris non velit congue efficitur ut vitae enim. Nulla facilisi.
                            </p>

                            <p style={{margin:"15px"}}> 5 days ago</p>

                        </div>

                    </div>


                </div>


        </div>

      
    </div>
  )
}
