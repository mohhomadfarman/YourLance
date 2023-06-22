import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import { Card, Spinner } from "react-bootstrap";
import GrowExample from '../../components/Form/Isloading';

function AdminSide() {


    const listjob=useSelector((state)=>state?.Joblist?.listdata)
    const isLoadng=useSelector((state)=>state?.Joblist?.isLoading)
    console.log(listjob,"hhhhhhhhhhhhhhhhhhhhhhhhh")

    return (
        <Tabs
            defaultActiveKey={1}
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey={1}  title="Verified Jobs">
                {
                    listjob.map((e) => {

                        return (<>
                        {isLoadng && <GrowExample/>}
                            <Card >
                                <Card.Body>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> price${e.budget}</Card.Subtitle>
                                    <Card.Text>
                                        {e.Describe}
                                    </Card.Text>

                                    {e.AddSkills.map((skill)=>{

                                        return(<>
                                        
                                        <Card.Link href="#" className='btn btn-secondary'> {skill.label}</Card.Link>
                                    <Card.Link href="#" className='btn btn-secondary'>{skill.label}</Card.Link>
                                        
                                        </>)
                                    })}
                                  
                                </Card.Body>
                            </Card>
                        </>)




                    })


                }
            </Tab>
            <Tab eventKey={2}  title="Latest Job Posting">
                Tab content for Profile
            </Tab>
            <Tab eventKey={3}  title="Saved Posts" >
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default AdminSide;