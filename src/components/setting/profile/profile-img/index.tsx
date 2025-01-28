import React, { useEffect, useState } from 'react';
import profile from '@/assets/svg/profile.svg';
import upload from '@/assets/svg/profile_image_upload.svg';
import { ProfileImgWrapper, UploadBtn } from './style';
import FlexBox from '@/components/common/flex-box';
import { useProfile } from '@/contexts/profile';

export const ProfileImg = () => {
  const { currentValues, updateFile } = useProfile();

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      updateFile(selectedFile);
    }
  };

  return (
    <FlexBox justify="center">
      <ProfileImgWrapper src={currentValues.profileImageUrl ?? profile} alt="profile" />
      <UploadBtn onClick={handleClick}>
        <img src={upload} alt="upload" />
      </UploadBtn>
      <input
        id="fileInput"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </FlexBox>
  );
};
