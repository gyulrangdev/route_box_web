import React, { useEffect, useState } from 'react';
import { Nickname } from './nickname';
import { Birth } from './birth';
import { Gender } from './gender';
import FlexBox from '@/components/common/flex-box';

interface ProfileInfoProps {
  handleInputChange: (name: string, value: string) => void;
  nickname: string;
  birthDay: string;
  gender: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  handleInputChange,
  nickname,
  birthDay,
  gender,
}) => {
  return (
    <FlexBox col gap={2}>
      <Nickname
        nickname={nickname}
        handleInputChange={(name, value) => handleInputChange(name, value)}
      />
      <Birth
        birthDay={birthDay}
        handleInputChange={(name, value) => handleInputChange(name, value)}
      />
      <Gender gender={gender} handleInputChange={(name, value) => handleInputChange(name, value)} />
    </FlexBox>
  );
};
