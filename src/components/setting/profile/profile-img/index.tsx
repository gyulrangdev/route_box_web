import profile from '@/assets/svg/profile.svg';
import upload from '@/assets/svg/profile_image_upload.svg';
import { ProfileImgWrapper, UploadBtn } from './style';
import FlexBox from '@/components/common/flex-box';
import { useProfile } from '@/contexts/profile';
import { useRef } from 'react';

export const ProfileImg = () => {
  const { currentValues, updateFile } = useProfile();
  const fileRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string>();

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      updateFile(selectedFile);
    }
  };

  const getProfileImageUrl = (profileImage: File | string) => {
    if (profileImage instanceof File) {
      if (objectUrlRef.current) {
        // 메모리 누수 방지
        URL.revokeObjectURL(objectUrlRef.current);
      }
      objectUrlRef.current = URL.createObjectURL(profileImage);
      return objectUrlRef.current;
    }
    return typeof profileImage === 'string' ? profileImage : profile;
  };

  return (
    <FlexBox justify="center">
      <ProfileImgWrapper
        src={getProfileImageUrl(currentValues.profileImageUrl)}
        alt="profile"
        onClick={handleClick}
      />
      <UploadBtn onClick={handleClick}>
        <img src={upload} alt="upload" />
      </UploadBtn>
      <input
        ref={fileRef}
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
