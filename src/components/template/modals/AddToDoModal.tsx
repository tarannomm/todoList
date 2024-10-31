
import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { toast } from 'react-toastify';
import { users } from '../../../data/selectData';
import ImageDropDown from '../../modules/ImageDropown';
import { Option, TodoItem } from '../../../types/type';
import { useDispatch} from 'react-redux';
import { addToDo } from '../../../redux/store';

interface AddToDoModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToDoModal: React.FC<AddToDoModalProps> = ({ open, setOpen }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoItem, setTodoItem] = useState({ title: '', users:[] as Option[] });
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      onOpen();
      setTodoItem({ title: '', users: [] });
      setError('');
    }
  }, [open, onOpen]);

  const handleAccept = () => {
    // Check if title is empty or users array is not set
    if (!todoItem.title || (Array.isArray(todoItem.users) && todoItem.users.length === 0)) {
      setError('Please enter values');
    } else {
      // Assuming that todoItem.users is of type Option[] or string[]
      dispatch(addToDo({ 
        id: Date.now(), 
        title: todoItem.title, 
        users: todoItem.users 
      }));
      

      setTodoItem({ title: "", users: [] }); // Ensure this matches the expected type
      toast.success(`ToDo "${todoItem.title}" successfully created!`, {
        className: '!bg-[#D6E6DF] !text-[#265035]',
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        theme: 'colored',
      });
      
      onClose();
      setOpen(false);
    }
  };
  
  return (
    <Modal
      backdrop="blur"
      className="min-w-[280px] lg:min-w-[620px] h-full xl:h-[700px] m-auto rounded"
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setOpen(false);
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 font-semibold text-2xl text-center text-secondary">
          Add To Do
        </ModalHeader>
        <ModalBody className="flex flex-col gap-5">
          <div className="relative">
            {todoItem.title.length > 0 && (
              <span className="absolute -top-2 left-4 px-2 bg-indigo-50 text-xs z-50">
                Write a title
              </span>
            )}
            <Input
              isClearable
              type="text"
              variant="bordered"
              placeholder="Write a title"
              radius="sm"
              className="relative custom-label"
              classNames={{ input: 'w-full !h-14' }}
              value={todoItem.title}
              onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
            />
          </div>
          <ImageDropDown
          options={users}
          members={(selectedUsers) => setTodoItem({ ...todoItem, users: selectedUsers })}
          todo={todoItem}
           />
          {error && <p className="text-red-500 my-10">{error}</p>}
        </ModalBody>
        <ModalFooter>
          <Button className="!font-josefin" color="secondary" variant="flat" onPress={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="!font-josefin" color="secondary" onPress={handleAccept}>
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddToDoModal;
