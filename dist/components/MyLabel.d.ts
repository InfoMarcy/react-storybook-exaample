/// <reference types="react" />
import "./MyLabel.css";
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño  de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores basicos del label
     */
    color?: "primary" | "secondary" | "terciary";
    /**
     * Color Personalizado de la fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
