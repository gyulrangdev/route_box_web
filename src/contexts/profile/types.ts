import { genderType } from '@/api/my-page/types';

export interface IProfileEdit {
  profileImageUrl: string;
  nickname: string;
  birthDay: string;
  gender: genderType | '';
}

export interface ProfileEditContext {
  editedFields: Partial<IProfileEdit>;
  file: File | null;
  currentValues: IProfileEdit;
  updateField: (name: keyof IProfileEdit, value: string) => void;
  updateFile: (file: File | null) => void;
  resetChanges: () => void;
  hasChanges: boolean;
  handleSubmit: () => Promise<void>;
}
