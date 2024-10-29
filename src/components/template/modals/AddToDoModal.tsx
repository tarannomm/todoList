import React from 'react';
import { useEffect } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, useDisclosure } from '@nextui-org/react';
import EmpDropDown from '../../modules/SearchDropDown';
import { users } from '../../../data/selectData';

const AddToDoModal = ({open,setopen}) => {
    useEffect(() => {
      if(open) onOpen();
    }, [open]);

    const {isOpen, onOpen, onClose} = useDisclosure();
    
    return (
        <Modal backdrop="blur" className='h-[700px]' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-semibold text-2xl text-center text-secondary">Add To Do</ModalHeader>
              <ModalBody>
              <Input
                    isClearable
                    type="text"
                    variant="bordered"
                    label="write a title"
                    radius={'sm'}
                    className='relative custom-label'
                    />
              <EmpDropDown type="todo" options={users}/>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary"  variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Accept
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
};

export default AddToDoModal;