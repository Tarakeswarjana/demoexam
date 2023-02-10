
import { useState } from 'react';
import "./allsub.css"
import pic from "../image/tara.jpg"
import data from '../data';
import {showbtn} from '../data'
import check from "../image/radio.png"
import notcheck from "../image/radio-button.png"
import {attempdata} from "../data"
import { Link } from 'react-router-dom';
const Allsub = () => {

    const [stleydata,setstleydata]=useState("none");
    // const[toggle,settoggle]=useState(false);
    const [btncolor,setbtncolor]=useState("");
    
    const [index ,setindex]=useState(0);
    const [ques,setques]=useState(data);
    const [btnstate,setbtnstate]=useState("");
    const[isrev,setisrev]=useState("false");
    const[isdump,setisdump]=useState("false");
    const [btn,setbtn]=useState(showbtn);
const[anscount,setanscount]=useState(0);
const [ischeck,setischeck]=useState(attempdata);
const[checkval1,setcheckval1]=useState(false);
const[checkval2,setcheckval2]=useState(false);
const[checkval3,setcheckval3]=useState(false);

    const handlebuttoncolorrev=()=>{
     const  temparr=btn;
       for(let i=0;i<temparr.length;i++){
        if(i==index){
            btn[i].isrev="true";
            btn[i].isdump="false";
        }
       }
       setbtn(temparr);
       setisrev("true");
    }

    const handlebuttoncolordum=()=>{
      
        const  temparr=btn;
        for(let i=0;i<temparr.length;i++){

         if(i==index){
             btn[i].isdump="true";
             btn[i].isrev="false";
         }
        }
        setbtn(temparr);
        setisdump("true");
    }
    const Answred=()=>{
        for(let i=0;i<ques.length;i++){
            ques[i].isans="true";
        }

    }
   const answred=()=>{
  
   
   }
   const show=()=>{

   }
const popup=()=>{
    if(stleydata){
        setstleydata("")
    }else{
        setstleydata("none");
    }


}
   
const checkedboxes=(ind:number)=>{
    const tempobj=ischeck;
  
    for(let i=0;i<tempobj.length;i++){
    if(ind==1){
tempobj[index].isop1=true;
tempobj[index].isop2=false;
tempobj[index].isop3=false;
setcheckval1(true);
}
if(ind==2){
    tempobj[index].isop1=false;
    tempobj[index].isop2=true;
    tempobj[index].isop3=false;  
    setcheckval2(true);
}
if(ind==3){
    tempobj[index].isop1=false;
    tempobj[index].isop2=false;
    tempobj[index].isop3=true; 
    setcheckval3(true);  
}
    }
    setischeck(tempobj);
}
 
  return (
    <div className='allsub'>
        <div className='allleft'>
            <div className='up'>
            <Link className='linking' to ="/"> <button>Allsection</button></Link>
            <Link className='linking' to="./physics">    <button>Physics</button> </Link> 
            <Link className='linking' to="./chemistry">   <button>Chemistry</button></Link> 
            <Link className='linking' to="./math">   <button>Math</button></Link>
               
                
            </div>
            <div className='mid'>
                <div className='midheading'>
                    
                    <div className='question' > 
                    <div>Q No:</div>
                    <div>{index+1}</div>  </div>
                    <div className='language'>
                        <div>View In:</div>
                        <div><select>
                           <option>English</option>
                          <option>Hindi</option>
                            <option>Bengali</option>
                            </select></div>
                    </div>
                </div>
                <div className='element'>
                <div className='eleno1' ><div>QuestionInstruction</div>
                <div>{ques[index].instruction}</div>
                </div>
                <div className='eleno2' >
                <div>QuestionInstruction</div>
                <div>{ques[index].qname} </div>
                    {/* <div className='option'> */}
                {/* <div>  1 : first option</div>
                <div>2 : 2nd option</div>
                <div>3 : 3rd option</div> */}
                 
                    {ques[index].option.map((ele,ind)=>{
                        return( <div className='option' > 
                         <div> <div className='checkbox' onClick={()=>{ checkedboxes(1);  }}>{(ischeck[index].isop1&&checkval1)?<img src={check} alt=''/>:<img src={notcheck} alt=''/>  }</div><div>{ele.op1}</div>
                         </div>
                   <div> <div className='checkbox' onClick={()=>{checkedboxes(2);  }}>{(ischeck[index].isop2 && checkval2)?<img src={check} alt=''/>:<img src={notcheck} alt=''/>  }</div><div>{ele.op2}</div>
                         </div>
                         <div><div className='checkbox' onClick={()=>{checkedboxes(3);  }}>{(ischeck[index].isop3 && checkval3)?<img src={check} alt=''/>:<img src={notcheck} alt=''/>  }</div><div>{ele.op3}</div>
                         </div>
                         </div>)
                    })}
              
             {/* </div> */}
                </div>
                </div>
            </div>
            <div className='down'>
                <button>CLEAR RESPONSE</button>
                <button onClick={ handlebuttoncolorrev}>REVIEW</button>
                <button onClick={ handlebuttoncolordum}>DUMP</button>
                <button onClick={()=>{
                    if(index>0){setindex(index-1)}
                    else{
                        setindex(0);
                    }
                
                }}>PREVIOUS</button>
                <button onClick={()=>{
                    setcheckval1(false);
                    setcheckval2(false);
                    setcheckval3(false);
                   // setischeck({isop1:false,isop2:false,isop3:false});
                    show()
                    setisrev("false");
                    setisdump("false");
                    if(index<9){setindex(index+1)}
                    else{
                        setindex(9); 
                    }}}>NEXT</button>
            </div>
        </div>
        <div className='allright'>

        <div className='pic_sec'>
            <div className='pic'>
                <img src={pic} alt="" />
            </div>
            <div className='time'>
              <div className='time_sec'>
                <div><div>Time</div> <div>Left</div> </div>
                <div>02:39:29</div>
                    
                    </div>  
                    <div className='name'>
                        <p>Tarakeswar jana</p>
                    </div>
            </div>
        </div>

        <div className='ques_pal'>
           <div className='heading'>Question Pallete</div>
           <div className='ques_btn' >
           
            {btn.map((ele,id)=>{
               
                if(id==index ){

                    if(isrev=="true"){
                        return(
                            <button onClick={()=>{setindex(id)}} style={{backgroundColor:"yellow"}}>{id+1}</button>
                        ) 

                        
                    }else
                    if(isdump=="true"){
                        return(
                            <button onClick={()=>{setindex(id)}}  style={{backgroundColor:"white"}}>{id+1}</button>
                        ) 
                    }else
                   
                        return(
                            <button onClick={()=>{setindex(id)}}  style={{backgroundColor:"green"}}>{id+1}</button>
                        ) 

                        }  
                else{
                    if(ele.isrev=="true"){
                        return(
                            <button onClick={()=>{setindex(id)}}  style={{backgroundColor:"yellow"}}>{id+1}</button>
                        )
                    }else 
                    if(ele.isdump=="true"){
                        return(
                            <button onClick={()=>{setindex(id)}}  style={{backgroundColor:"white"}}>{id+1}</button>
                        )
                    }
                    return(
                        <button onClick={()=>{setindex(id)}}  >{id+1}</button> 
                    )
            
                }
                
                
            })}
            
           </div>
           <div className='openspace'>

           </div>
        </div>
        <div className='rev_sec'>
           

           <div className='rev_popup'>
                <button onClick={()=>{popup()}}> Legend (Click to View)</button>
            </div>
            
            
                <div style={{display:`${stleydata}`}} className='showrev'>
                  <button>{anscount} answar</button>  
                  <button>2 No Answar</button>  
                   <button>1 Review+Ans</button> 
                   <button>1 Review-Ans</button> 
                   <button>1 dump</button> 
                    <button>1 No visit</button>
                   
                </div>
                <div className='all10'>10 All questions</div>
           
          
           
        </div>
       
        <div className='sub_sec'>
            <button className='lastbtn'>Profile</button>
            <button className='lastbtn'>Instr</button>
            <button className='lastbtn'>Questions</button>
            <button className='lastbtn'>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Allsub