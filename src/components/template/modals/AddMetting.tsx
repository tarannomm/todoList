import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Step from '../../modules/modals/meeting/Step';
import { Steps } from '../../../data/Steps';
import MeetingRadioGroup from '../../modules/modals/meeting/radioGroup';
import { cources } from '../../../data/courses';
import { meetingDates } from '../../../data/meetingDate';
import { toast } from "react-toastify";

const AddMeeting = ({ open, setOpen }) => {
    const [meetingStep, setMeetingStep] = useState(1);
    const [meetingInfo, setMeetingInfo] = useState({
        email: "",
        course: "",
        date: ""
    });

    const notify = () => {
        toast.success("Meeting Successfully Created", {
            className: "!bg-[#D6E6DF] !text-[#265035]",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            theme: "colored",
        });
    };

    const submitHandler = () => {
        notify();
        setOpen(false);
    };

    return (
        <Modal backdrop="blur" isOpen={open} onClose={() => setOpen(false)} size='4xl' className='h-[470px]'>
            <ModalContent>
                <ModalBody>
                    <div className='flex items-center h-full'>
                        <div className='flex flex-col w-full md:w-[35%]'>
                            <div className='pb-[52px] pl-[32px]'>
                                {Steps.map((step, index) => (
                                    <Step key={index} data={step} length={Steps.length} stepNum={meetingStep} />
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col items-end justify-between gap-4 w-full md:w-[65%] h-full px-12 py-6 border-l-1 border-dashed border-blue-300'>
                            {meetingStep === 1 &&     
                                <Input
                                    isRequired
                                    type="email"
                                    label="Email"
                                    labelPlacement="outside"
                                    placeholder=' '
                                    radius={"sm"}
                                    isInvalid={meetingInfo.email.length === 0 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(meetingInfo.email)}
                                    errorMessage="Email format not valid"
                                    value={meetingInfo.email}
                                    onChange={(e) => setMeetingInfo({ ...meetingInfo, email: e.target.value })}
                                />
                            }
                            {meetingStep !== 3 && 
                                <MeetingRadioGroup meetingStep={meetingStep} data={meetingStep === 1 ? meetingDates : cources} info={meetingInfo} setInfo={setMeetingInfo} />
                            }
                            {meetingStep === 3 &&
                                <div className='grid gap-4 w-full my-16'>
                                    <div className='flex font-semibold'>
                                        <h3 className='text-gray-500 mx-2'>Email: </h3>
                                        <h3 className='text-gray-900'>{meetingInfo.email}</h3>
                                    </div>
                                    <div className='flex font-semibold'>
                                        <h3 className='text-gray-500 mx-2'>Date: </h3>
                                        <h3 className='text-gray-900'>{meetingInfo.date}</h3>
                                    </div>
                                    <div className='flex font-semibold'>
                                        <h3 className='text-gray-500 mx-2'>Course: </h3>
                                        <h3 className='text-gray-900'>{meetingInfo.course}</h3>
                                    </div>
                                </div>
                            }
                            <div className='flex flex-row-reverse justify-between w-full'>
                                <Button color="secondary" size='md' className='w-[90px] p-3' onPress={() => meetingStep === 3 ? submitHandler() : setMeetingStep(meetingStep + 1)}>
                                    Continue
                                </Button>
                                {meetingStep !== 1 &&
                                    <Button variant='bordered' onPress={() => setMeetingStep(meetingStep - 1)}>Back</Button>
                                }
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AddMeeting;
