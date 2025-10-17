import type { ReactNode } from "react";
import type { alertType } from "../types/alertType";
export interface AlertProps {
    title: string;
    message: string;
    type: alertType;
    iconSvg: ReactNode;
}