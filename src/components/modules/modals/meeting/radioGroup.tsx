import { Radio, RadioGroup, cn } from '@nextui-org/react';
import React, { useEffect } from 'react';
import message from "../../../../assets/dashboard/message.svg";
import course from "../../../../assets/dashboard/course.svg";

const MeetingRadioGroup = ({ meetingStep, data, info, setInfo }) => {
  
  const selectedValue = meetingStep === 1 ? info.date : info.course;
  const handleSelectionChange = (value) => {
    if (meetingStep === 1) {
      setInfo({ ...info, date: value });
    } else {
      setInfo({ ...info, course: value });
    }
  };

  return (
    <RadioGroup
      isRequired
      label={meetingStep === 1 ? "Select Date" : "Select Course"}
      className="w-[100%]"
      value={selectedValue}
      onValueChange={handleSelectionChange}
    >
      {data.map(item => (
        <Radio
          key={item.id}
          classNames={{
            base: cn(
              "inline-flex m-0 bg-content1 hover:bg-content2 justify-between",
              "flex-row-reverse max-w-[100%] cursor-pointer"
            ),
          }}
          value={meetingStep === 1 ? `${item.date}-${item.time}-${item.day}` : `${item.title}-${item.publisher}`}
        >
          <div className="flex">
            <img
              className="w-[50px] h-[50px] p-3 rounded-md bg-gradient-to-r from-[#6941C6] to-[#8161CD] ml-[-14px] mr-4"
              src={meetingStep === 1 ? message : course}
              alt=""
            />
            <div>
              <h3 className="text-sm font-semibold">{meetingStep === 1 ? `${item.date} - ${item.time}` : item.title}</h3>
              <span className="text-xs text-gray-500">{meetingStep === 1 ? item.day : item.publisher}</span>
            </div>
          </div>
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default MeetingRadioGroup;
