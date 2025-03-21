import { Style } from "../../utils/native/status-bar";
/**
 * Use y = mx + b to
 * figure out the backdrop value
 * at a particular x coordinate. This
 * is useful when the backdrop does
 * not begin to fade in until after
 * the 0 breakpoint.
 */
export declare const getBackdropValueForSheet: (x: number, backdropBreakpoint: number) => number;
/**
 * The tablet/desktop card modal activates
 * when the window width is >= 768.
 * At that point, the presenting element
 * is not transformed, so we do not need to
 * adjust the status bar color.
 *
 */
export declare const setCardStatusBarDark: () => void;
export declare const setCardStatusBarDefault: (defaultStyle?: Style) => void;
