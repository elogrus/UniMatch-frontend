import { RootState } from "@/1app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FooterState {
    visible: boolean;
}

const initialState: FooterState = {
    visible: true,
};

export const FooterSlice = createSlice({
    name: "Footer",
    initialState,
    reducers: {
        setup: (state, action: PayloadAction<Partial<FooterState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setup } = FooterSlice.actions;

export const selectFooterVisibile = (state: RootState) => state.footer.visible;

export default FooterSlice.reducer;
