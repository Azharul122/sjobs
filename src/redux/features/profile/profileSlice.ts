/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EducationEntry {
  id: string;
  degreeName: string;
  institution: string;
  passingYear: string;
}

interface SocialLink {
  id: any;
  title: any;
  link: any;
}

interface PersonalInfoFormData {
  fullName: string;
  careerObj: string;
  skills: string;
  experiences: string;
  profile?: any[];
  persSite?: string;
  resumeFile?: any[];
}

interface AccountSettingsData {
  location?: string;
  number?: string;
  newEmail?: string;
}

interface ProfileState {
  personalInfo: PersonalInfoFormData | null;
  education: EducationEntry[];
  socialLinks: SocialLink[];
  accountSettings: AccountSettingsData | null;
}

const initialState: ProfileState = {
  personalInfo: null,
  education: [],
  socialLinks: [],
  accountSettings: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setPersonalInfo(state, action: PayloadAction<PersonalInfoFormData>) {
      state.personalInfo = action.payload;
    },
    setEducation(state, action: PayloadAction<EducationEntry[]>) {
      state.education = action.payload;
    },
    setSocialLinks(state, action: PayloadAction<SocialLink[]>) {
      state.socialLinks = action.payload;
    },
    setAccountSettings(state, action: PayloadAction<AccountSettingsData>) {
      state.accountSettings = action.payload;
    },
    resetProfile(state) {
      state.personalInfo = null;
      state.education = [];
      state.socialLinks = [];
      state.accountSettings = null;
    },
  },
});

export const {
  setPersonalInfo,
  setEducation,
  setSocialLinks,
  setAccountSettings,
  resetProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
