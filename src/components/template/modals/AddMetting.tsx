import React from 'react';
import { useEffect,useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, useDisclosure } from '@nextui-org/react';
import Step from '../../modules/modals/meeting/Step';
import { Steps } from '../../../data/Steps';
import MeetingRadioGroup from '../../modules/modals/meeting/radioGroup';
import { cources } from '../../../data/courses';
import { meetingDates } from '../../../data/meetingDate';


const AddMetting = ({open,setopen}) => {

    useEffect(() => {
      if(open) onOpen();
    }, [open]);

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [meetingStep,setmeetingStep]=useState(1);
    const [meetingInfo,setMeetingInfo]=useState({
      email:"",
      course:"",
      date:""
    });

    const submitHandler=()=>{
     
    }
    return (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size='4xl' className='h-[470px]'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody >
                <div className='flex items-center h-[100%] '>
                  <div className='flex flex-col w-full md:w-[35%]'>
                      <div className='pb-[52px] pl-[32px]'>
                      {Steps.map(step=>
                      <Step data={step} length={Steps.length} stepNum={meetingStep}/>
                        )}
                        
                    </div>
                  </div>
                  
                    <div className='flex flex-col items-end justify-between gap-4 w-full md:w-[65%] h-[100%] px-12 py-6 border-l-1 border-dashed border-blue-300'>
                      {meetingStep==1 &&     
                      <Input
                      isRequired
                      type="email"
                      label="Email"
                      labelPlacement="outside"
                      placeholder=' '
                      radius={"sm"}
                      isInvalid={meetingInfo.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)? false : true}
                      errorMessage="Email format not valid"
                      onChange={(e)=>setMeetingInfo({...meetingInfo,email:e.target.value})}
                    />
                    }
                    {meetingStep!==3 && 
                    <MeetingRadioGroup meetingStep={meetingStep} data={meetingStep==1?meetingDates:cources} info={meetingInfo} setInfo={setMeetingInfo}/>
                    }
                    {meetingStep===3 &&
                    <div className='grid gap-4 w-full my-16 '>
                    <div className='flex font-semibold'>
                    <h3 className='text-gray-500 mx-2'>Email : </h3>
                    <h3 className='text-gray-900'>{meetingInfo.email}</h3>
                    </div>
                    <div className='flex font-semibold'>
                    <h3 className='text-gray-500 mx-2'>Date : </h3>
                    <h3 className='text-gray-900'>{meetingInfo.date}</h3>
                    </div>
                    <div className='flex font-semibold'>
                    <h3 className='text-gray-500 mx-2'>Course : </h3>
                    <h3 className='text-gray-900'>{meetingInfo.course}</h3>
                    </div>
                    </div>
                    }
                    <div className='flex flex-row-reverse justify-between !w-[100%]'>
                      <Button color="secondary" size='md'  className='w-[90px] p-3' onPress={()=>meetingStep===3?submitHandler:setmeetingStep(meetingStep+1)}>
                        Continue
                      </Button>
                      {meetingStep!==1 &&
                      <Button variant='bordered' onPress={()=>setmeetingStep(meetingStep-1)}>back</Button>
                      }   
                      </div>
                    </div>  
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    );
};

export default AddMetting;