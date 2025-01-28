import React, { useEffect, useState } from 'react';
import { Nickname } from './nickname';
import { Birth } from './birth';
import { Gender } from './gender';
import FlexBox from '@/components/common/flex-box';
import { useProfile } from '@/contexts/profile';

export const ProfileInfo = () => {
  const { currentValues, updateField } = useProfile();

  return (
    <FlexBox col gap={2}>
      <Nickname
        nickname={currentValues.nickname}
        handleInputChange={(name, value) => updateField(name, value)}
      />
      <Birth
        birthDay={currentValues.birthDay}
        handleInputChange={(name, value) => updateField(name, value)}
      />
      <Gender
        gender={currentValues.gender}
        handleInputChange={(name, value) => updateField(name, value)}
      />
    </FlexBox>
  );
};
