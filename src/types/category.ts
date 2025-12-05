import type { ReactNode } from "react";

export type Category = {
    icon?: ReactNode;
    title: string;
    description?: string;
    color?: string;
    slug: string;
}
