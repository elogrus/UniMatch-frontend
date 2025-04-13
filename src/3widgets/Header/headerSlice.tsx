import { RootState } from "@/1app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeaderModes, HeaderThemes } from "./types";

export interface HeaderState {
    visible: boolean;
    theme: HeaderThemes;
    mode: HeaderModes;
}

const initialState: HeaderState = {
    visible: true,
    theme: HeaderThemes.DARK,
    mode: HeaderModes.FULL,
};

export const HeaderSlice = createSlice({
    name: "Header",
    initialState,
    reducers: {
        setup: (state, action: PayloadAction<Partial<HeaderState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setup } = HeaderSlice.actions;

export const selectHeaderVisibile = (state: RootState) => state.header.visible;
export const selectHeaderTheme = (state: RootState) => state.header.theme;
export const selectHeaderMode = (state: RootState) => state.header.mode;

export default HeaderSlice.reducer;
