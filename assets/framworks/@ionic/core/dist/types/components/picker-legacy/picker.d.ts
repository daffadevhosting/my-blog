import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { AnimationBuilder, OverlayInterface, FrameworkDelegate } from '../../interface';
import type { OverlayEventDetail } from '../../utils/overlays-interface';
import type { PickerButton, PickerColumn } from './picker-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export declare class Picker implements ComponentInterface, OverlayInterface {
    private readonly delegateController;
    private readonly lockController;
    private readonly triggerController;
    private durationTimeout?;
    lastFocus?: HTMLElement;
    el: HTMLIonPickerLegacyElement;
    presented: boolean;
    /** @internal */
    overlayIndex: number;
    /** @internal */
    delegate?: FrameworkDelegate;
    /** @internal */
    hasController: boolean;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    keyboardClose: boolean;
    /**
     * Animation to use when the picker is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the picker is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * Array of buttons to be displayed at the top of the picker.
     */
    buttons: PickerButton[];
    /**
     * Array of columns to be displayed in the picker.
     */
    columns: PickerColumn[];
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * Number of milliseconds to wait before dismissing the picker.
     */
    duration: number;
    /**
     * If `true`, a backdrop will be displayed behind the picker.
     */
    showBackdrop: boolean;
    /**
     * If `true`, the picker will be dismissed when the backdrop is clicked.
     */
    backdropDismiss: boolean;
    /**
     * If `true`, the picker will animate.
     */
    animated: boolean;
    /**
     * Additional attributes to pass to the picker.
     */
    htmlAttributes?: {
        [key: string]: any;
    };
    /**
     * If `true`, the picker will open. If `false`, the picker will close.
     * Use this if you need finer grained control over presentation, otherwise
     * just use the pickerController or the `trigger` property.
     * Note: `isOpen` will not automatically be set back to `false` when
     * the picker dismisses. You will need to do that in your code.
     */
    isOpen: boolean;
    onIsOpenChange(newValue: boolean, oldValue: boolean): void;
    /**
     * An ID corresponding to the trigger element that
     * causes the picker to open when clicked.
     */
    trigger: string | undefined;
    triggerChanged(): void;
    /**
     * Emitted after the picker has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the picker has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the picker has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the picker has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the picker has presented.
     * Shorthand for ionPickerWillDismiss.
     */
    didPresentShorthand: EventEmitter<void>;
    /**
     * Emitted before the picker has presented.
     * Shorthand for ionPickerWillPresent.
     */
    willPresentShorthand: EventEmitter<void>;
    /**
     * Emitted before the picker has dismissed.
     * Shorthand for ionPickerWillDismiss.
     */
    willDismissShorthand: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the picker has dismissed.
     * Shorthand for ionPickerDidDismiss.
     */
    didDismissShorthand: EventEmitter<OverlayEventDetail>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Present the picker overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the picker overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the picker did dismiss.
     */
    onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>>;
    /**
     * Returns a promise that resolves when the picker will dismiss.
     */
    onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>>;
    /**
     * Get the column that matches the specified name.
     *
     * @param name The name of the column.
     */
    getColumn(name: string): Promise<PickerColumn | undefined>;
    private buttonClick;
    private callButtonHandler;
    private getSelected;
    private onBackdropTap;
    private dispatchCancelHandler;
    render(): any;
}
