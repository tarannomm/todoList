import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Step from '../../modules/modals/meeting/Step';
import { Steps } from '../../../data/Steps';
import MeetingRadioGroup from '../../modules/modals/meeting/radioGroup';
import { meetingDates } from '../../../data/meetingDate';
import { toast } from "react-toastify";
import { addMeeting } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import {courses} from "../../../data/courses";

interface AddMeetingProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AddMeeting: React.FC<AddMeetingProps> = ({ open, setOpen }) => {
    const [meetingStep, setMeetingStep] = useState<number>(1);
    const [meetingInfo, setMeetingInfo] = useState<{
        email: string;
        course: string;
        date: string;
    }>({
        email: "",
        course: "",
        date: ""
    });
    const [error, setError] = useState<string>("");
    const dispatch = useDispatch();

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

    const validateStep = (): boolean => {
        if (meetingStep === 1) {
            if (!meetingInfo.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(meetingInfo.email) || !meetingInfo.date) {
                setError("Please complete the information.");
                return false;
            }
        } else if (meetingStep === 2) {
            if (!meetingInfo.date) {
                setError("Please select a meeting date.");
                return false;
            }
        } else if (meetingStep === 3) {
            if (!meetingInfo.course) {
                setError("Please select a course.");
                return false;
            }
        }
        setError("");
        return true;
    };

    const stepHandler = () => {
        if (validateStep()) {
            setMeetingStep(meetingStep + 1);
        }
    };

    const submitHandler = () => {
        if (validateStep()) {
            dispatch(addMeeting({ id: Date.now(), email: meetingInfo.email, course: meetingInfo.course, date: meetingInfo.date }));
            setMeetingInfo({ email: "", date: "", course: "" });
            setMeetingStep(1);
            notify();
            setOpen(false);
        }
    };
    const onCloseHandler=()=>{
       setOpen(false);
        setMeetingStep(1);
        setError("");
        setMeetingInfo({email:"",course:"",date:""})
    }

    return (
        <Modal backdrop="blur" isOpen={open} onClose={onCloseHandler} size='4xl' className='h-full xl:h-[470px]'>
            <ModalContent>
                <ModalBody>
                    <div className='flex flex-col lg:flex-row items-center h-full'>
                        <div className='flex flex-row justify-center xl:flex-col w-full md:w-[35%]'>
                            <div className='flex lg:flex-col pt-14 pb-2 lg:pt-0 lg:pb-[52px] lg:pl-[32px]'>
                                {Steps.map((step, index) => (
                                    <Step key={index} data={step} length={Steps.length} stepNum={meetingStep} />
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col items-end justify-between gap-4 w-full md:w-[65%] h-full px-12 py-6 border-t-1 lg:border-t-0 lg:border-l-1 border-dashed border-blue-300'>
                            {meetingStep === 1 &&     
                                <Input
                                    isRequired
                                    type="email"
                                    label="Email"
                                    labelPlacement="outside"
                                    placeholder=' '
                                    radius={"sm"}
                                    isInvalid={meetingInfo.email.length>0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(meetingInfo.email)}
                                    errorMessage="Email format not valid"
                                    value={meetingInfo.email}
                                    onChange={(e) => setMeetingInfo({ ...meetingInfo, email: e.target.value })}
                                />
                            }
                            {meetingStep !== 3 && 
                                <MeetingRadioGroup meetingStep={meetingStep} data={meetingStep === 1 ? meetingDates : courses} info={meetingInfo} setInfo={setMeetingInfo} />
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
                            {error && <p className='text-red-500'>{error}</p>}
                            <div className='flex flex-row-reverse justify-between w-full'>
                                <Button color="secondary" size='md' className='w-[90px] p-3' onPress={() => meetingStep === 3 ? submitHandler() : stepHandler()}>
                                    Continue
                                </Button>
                                {meetingStep !== 1 &&
                                    <Button variant='bordered' onPress={() => { setMeetingStep(meetingStep - 1); setError(""); }}>
                                        Back
                                    </Button>
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
