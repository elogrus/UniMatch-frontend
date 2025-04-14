import { RootState } from "@/1app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeaderModes, HeaderThemes } from "./types";

export interface HeaderState {
    visible: boolean;
    theme: HeaderThemes;
    mode: HeaderModes;
    position: "fixed" | "sticky";
}

const initialState: HeaderState = {
    visible: true,
    theme: HeaderThemes.DARK,
    mode: HeaderModes.FULL,
    position: "sticky",
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

export const selectHeader = (state: RootState) => state.header;
export const selectHeaderVisibile = (state: RootState) => state.header.visible;
export const selectHeaderTheme = (state: RootState) => state.header.theme;
export const selectHeaderMode = (state: RootState) => state.header.mode;
export const selectHeaderPosition = (state: RootState) => state.header.position;

export default HeaderSlice.reducer;
