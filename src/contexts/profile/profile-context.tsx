import { createContext, useMemo, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryKey, userInfo } from '@/api/my-page/userInfo';
import { IProfileEdit, ProfileEditContext } from './types';

const ProfileContext = createContext<ProfileEditContext | null>(null);

function ProfileProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: [queryKey.userProfile],
    queryFn: userInfo.getMyProfile,
  });

  const { mutateAsync } = useMutation({
    mutationFn: userInfo.patchMyInfo,
    onSuccess: () => {
      navigate({ from: '/setting/profile', to: '/my-page' });
    },
  });

  const initialValues: IProfileEdit = useMemo(
    () => ({
      profileImageUrl: data?.profileImageUrl ?? '',
      nickname: data?.nickname ?? '',
      birthDay: data?.birthDay ?? '',
      gender: data?.gender ?? 'MALE',
    }),
    [data]
  );

  const [editedFields, setEditedFields] = useState<Partial<IProfileEdit>>({});
  const [file, setFile] = useState<File | null>(null);

  const currentValues = useMemo(
    () => ({
      ...initialValues,
      ...editedFields,
      profileImageUrl: file ? file : initialValues.profileImageUrl,
    }),
    [initialValues, editedFields, file]
  );

  const updateField = (name: string, value: string) => {
    console.log(name, value);
    setEditedFields((prev) => ({ ...prev, [name]: value }));
  };

  const updateFile = (newFile: File | null) => {
    setFile(newFile);
  };

  const resetChanges = () => {
    setEditedFields({});
    setFile(null);
  };

  const hasChanges = Object.keys(editedFields).length > 0 || file !== null;

  const handleSubmit = async () => {
    if (!data) return;

    await mutateAsync({
      ...currentValues,
      nickname: editedFields.nickname ? editedFields.nickname : undefined,
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        currentValues,
        editedFields,
        file,
        updateField,
        updateFile,
        resetChanges,
        hasChanges,
        handleSubmit,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileProvider, ProfileContext };
