import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import OptionMenu from "../../img/OptionMenu.svg";
import Navbar from '../../components/Navbar';
import GrowExample from '../../components/Form/Isloading';

function SearchPostPage() {

    const isLoading = useSelector((state) => state?.jobSearch?.isLoading);
    const SearchData = useSelector((state) => state?.jobSearch?.SearchJobsData);
  return (
  <>
  {isLoading && <GrowExample />}
<Container>
            <Row>
{!SearchData?.success === true ? 
           (
           <>
           
           <div className="W-100 h-100 d-flex justify-content-center align-items-center">
            NO DATA
           </div>
           </>
           ) : (<>
            <Col md={10} className="offset-md-1">
              <p>Total Search result <span style={{color:"#0B9E2C"}}><strong>{SearchData?.Data?.length}</strong></span> </p>
            </Col>
              {SearchData.Data.map((items)=> {
                return(
                  <>
                <Col md={10} className="offset-md-1 mb-4">
          
               <div  className="jobPosting pointer">
                <div>
                  <p>{items.title}</p>
                  <p className="post-description">{items.Describe.slice(0, 250)}</p>
                  <p>Posted 8 min ago</p>
                  <div className="d-flex gap-3 justify-content-start mb-3">
                    {items.AddSkills.map((skils)=>{
                      return(
                        <>
                    <span className="skills-tags"> {skils.value}</span>

                        </>
                      )
                    })}
                  </div>
                </div>
                <span className="pointer MenuOption">
                  <img src={OptionMenu} alt="" />
                </span>
              </div>
         </Col>
                  </>
                )
              })}
           
          
           
           </>)}
</Row>
       </Container>
  
           
           </>
  )
}

export default SearchPostPage