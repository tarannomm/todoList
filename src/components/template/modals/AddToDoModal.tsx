import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { toast } from 'react-toastify'; 
import { users } from '../../../data/selectData';
import ImageDropDown from '../../modules/ImageDropown';

const AddToDoModal = ({ open, setOpen }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [todoItem, setTodoItem] = useState({
        title: "",
        users: []
    });

    useEffect(() => {
        if (open) {
            onOpen();
            setTodoItem({ title: "", users: [] });
        }
    }, [open, onOpen]);


    const handleAccept = () => {
      if(!todoItem.title || !todoItem.users){
        toast.error(`enter values`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
        });
      }
      else{
          toast.success(`ToDo "${todoItem.title}" successfully created!`, {
          className: "!bg-[#D6E6DF] !text-[#265035]",
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          theme: "colored",
        });
        onClose(); 
      }
  
    };

    return (
        <Modal backdrop="blur" className='min-w-[500px] lg:min-w-[620px] h-[700px] m-auto rounded' isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1 font-semibold text-2xl text-center text-secondary">
                    Add To Do
                </ModalHeader>
                <ModalBody className='flex flex-col gap-5'>
                    <div className='relative'>
                        {todoItem.title.length > 0 && (
                            <span className="absolute -top-2 left-4 px-2 bg-indigo-50 text-xs z-50">Write a title</span>
                        )}
                        <Input
                            isClearable
                            type="text"
                            variant="bordered"
                            placeholder="Write a title"
                            radius={'sm'}
                            className='relative custom-label'
                            classNames={{
                                input: "w-full !h-14",
                            }}
                            value={todoItem.title}
                            onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
                        />
                    </div>
                    <ImageDropDown options={users} members={setTodoItem} todo={todoItem} />
                </ModalBody>
                <ModalFooter>
                    <Button className='!font-josefin' color="secondary" variant="flat" onPress={onClose}>
                        Cancel
                    </Button>
                    <Button className='!font-josefin' color="secondary" onPress={handleAccept}>
                        Accept
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddToDoModal;
