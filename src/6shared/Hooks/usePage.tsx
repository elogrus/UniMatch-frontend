import { useAppDispatch } from "@/1app/store";
import { FooterSlice } from "@/3widgets/Footer/footerSlice";
import { HeaderSlice } from "@/3widgets/Header/headerSlice";
import { useEffect } from "react";

export const usePage = (
    headerSettings: Parameters<typeof HeaderSlice.actions.setup>[0],
    footerSettings: Parameters<typeof FooterSlice.actions.setup>[0]
) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        console.log('header visible', headerSettings.visible)
        dispatch(HeaderSlice.actions.setup(headerSettings));
        dispatch(FooterSlice.actions.setup(footerSettings));
    }, [dispatch, headerSettings, footerSettings]);
};
