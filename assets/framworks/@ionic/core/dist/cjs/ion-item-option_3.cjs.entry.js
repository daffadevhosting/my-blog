/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2e236a04.js');
const theme = require('./theme-d1c573d2.js');
const ionicGlobal = require('./ionic-global-acb665ad.js');
const helpers = require('./helpers-d0dfbb50.js');
const index$1 = require('./index-9b945a2d.js');
const watchOptions = require('./watch-options-f5f3e158.js');
require('./index-48b2a28e.js');

const itemOptionIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
const IonItemOptionIosStyle0 = itemOptionIosCss;

const itemOptionMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}";
const IonItemOptionMdStyle0 = itemOptionMdCss;

const ItemOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onClick = (ev) => {
            const el = ev.target.closest('ion-item-option');
            if (el) {
                ev.preventDefault();
            }
        };
        this.color = undefined;
        this.disabled = false;
        this.download = undefined;
        this.expandable = false;
        this.href = undefined;
        this.rel = undefined;
        this.target = undefined;
        this.type = 'button';
    }
    render() {
        const { disabled, expandable, href } = this;
        const TagType = href === undefined ? 'button' : 'a';
        const mode = ionicGlobal.getIonMode(this);
        const attrs = TagType === 'button'
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                target: this.target,
            };
        return (index.h(index.Host, { key: '1b7708dd178dc2c9280652ca3da38c84ba7b767f', onClick: this.onClick, class: theme.createColorClasses(this.color, {
                [mode]: true,
                'item-option-disabled': disabled,
                'item-option-expandable': expandable,
                'ion-activatable': true,
            }) }, index.h(TagType, Object.assign({ key: 'd9f899f5425ad6b97071494485aa3ca90bc89d30' }, attrs, { class: "button-native", part: "native", disabled: disabled }), index.h("span", { key: 'adc2cf72b4363be9b9eeb3584723e2bfc862af20', class: "button-inner" }, index.h("slot", { key: 'e668fe8e655a74e6a35e979e0cd488506b962dbf', name: "top" }), index.h("div", { key: '2ddcdb92b6b19c3cc549a7aee2400d1a6eeb51f1', class: "horizontal-wrapper" }, index.h("slot", { key: '441f13df18b72e5ed6bb51b157722e065b5847d2', name: "start" }), index.h("slot", { key: '425d815874b49e1628880160d7175ed3ca36ca39', name: "icon-only" }), index.h("slot", { key: '27437d3fa3365b12bc030704e18481fdfb14aebb' }), index.h("slot", { key: 'bd39330771c7f85c6df10f7f9050335ee7f14ff0', name: "end" })), index.h("slot", { key: '440cb6dc7743d50b261d4bf61d2c24e24b89e58c', name: "bottom" })), mode === 'md' && index.h("ion-ripple-effect", { key: '29632941464bbb34551cf64961187643f62bf755' }))));
    }
    get el() { return index.getElement(this); }
};
ItemOption.style = {
    ios: IonItemOptionIosStyle0,
    md: IonItemOptionMdStyle0
};

const itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
const IonItemOptionsIosStyle0 = itemOptionsIosCss;

const itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
const IonItemOptionsMdStyle0 = itemOptionsMdCss;

const ItemOptions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionSwipe = index.createEvent(this, "ionSwipe", 7);
        this.side = 'end';
    }
    /** @internal */
    async fireSwipeEvent() {
        this.ionSwipe.emit({
            side: this.side,
        });
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        const isEnd = helpers.isEndSide(this.side);
        return (index.h(index.Host, { key: '7df4b71547524bf359c48e1b40ccbc44e850f632', class: {
                [mode]: true,
                // Used internally for styling
                [`item-options-${mode}`]: true,
                /**
                 * Note: The "start" and "end" terms refer to the
                 * direction ion-item-option instances within ion-item-options flow.
                 * They do not refer to how ion-item-options flows within ion-item-sliding.
                 * As a result, "item-options-start" means the ion-item-options container
                 * always appears on the left, and "item-options-end" means the ion-item-options
                 * container always appears on the right.
                 */
                'item-options-start': !isEnd,
                'item-options-end': isEnd,
            } }));
    }
    get el() { return index.getElement(this); }
};
ItemOptions.style = {
    ios: IonItemOptionsIosStyle0,
    md: IonItemOptionsMdStyle0
};

const itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){-ms-flex-order:-1;order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){-ms-flex-order:1;order:1}}";
const IonItemSlidingStyle0 = itemSlidingCss;

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
const ItemSliding = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.ionDrag = index.createEvent(this, "ionDrag", 7);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0 /* ItemSide.None */;
        this.optsDirty = true;
        this.contentEl = null;
        this.initialContentScrollY = true;
        this.state = 2 /* SlidingState.Disabled */;
        this.disabled = false;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.enable(!this.disabled);
        }
    }
    async connectedCallback() {
        const { el } = this;
        this.item = el.querySelector('ion-item');
        this.contentEl = index$1.findClosestIonContent(el);
        /**
         * The MutationObserver needs to be added before we
         * call updateOptions below otherwise we may miss
         * ion-item-option elements that are added to the DOM
         * while updateOptions is running and before the MutationObserver
         * has been initialized.
         */
        this.mutationObserver = watchOptions.watchForOptions(el, 'ion-item-option', async () => {
            await this.updateOptions();
        });
        await this.updateOptions();
        this.gesture = (await Promise.resolve().then(function () { return require('./index-ee07ed59.js'); })).createGesture({
            el,
            gestureName: 'item-swipe',
            gesturePriority: 100,
            threshold: 5,
            canStart: (ev) => this.canStart(ev),
            onStart: () => this.onStart(),
            onMove: (ev) => this.onMove(ev),
            onEnd: (ev) => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
        if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
        }
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
            this.mutationObserver = undefined;
        }
    }
    /**
     * Get the amount the item is open in pixels.
     */
    getOpenAmount() {
        return Promise.resolve(this.openAmount);
    }
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    getSlidingRatio() {
        return Promise.resolve(this.getSlidingRatioSync());
    }
    /**
     * Open the sliding item.
     *
     * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
     */
    async open(side) {
        var _a;
        /**
         * It is possible for the item to be added to the DOM
         * after the item-sliding component was created. As a result,
         * if this.item is null, then we should attempt to
         * query for the ion-item again.
         * However, if the item is already defined then
         * we do not query for it again.
         */
        const item = (this.item = (_a = this.item) !== null && _a !== void 0 ? _a : this.el.querySelector('ion-item'));
        if (item === null) {
            return;
        }
        const optionsToOpen = this.getOptions(side);
        if (!optionsToOpen) {
            return;
        }
        /**
         * If side is not set, we need to infer the side
         * so we know which direction to move the options
         */
        if (side === undefined) {
            side = optionsToOpen === this.leftOptions ? 'start' : 'end';
        }
        // In RTL we want to switch the sides
        side = helpers.isEndSide(side) ? 'end' : 'start';
        const isStartOpen = this.openAmount < 0;
        const isEndOpen = this.openAmount > 0;
        /**
         * If a side is open and a user tries to
         * re-open the same side, we should not do anything
         */
        if (isStartOpen && optionsToOpen === this.leftOptions) {
            return;
        }
        if (isEndOpen && optionsToOpen === this.rightOptions) {
            return;
        }
        this.closeOpened();
        this.state = 4 /* SlidingState.Enabled */;
        requestAnimationFrame(() => {
            this.calculateOptsWidth();
            const width = side === 'end' ? this.optsWidthRightSide : -this.optsWidthLeftSide;
            openSlidingItem = this.el;
            this.setOpenAmount(width, false);
            this.state = side === 'end' ? 8 /* SlidingState.End */ : 16 /* SlidingState.Start */;
        });
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](./list).
     */
    async close() {
        this.setOpenAmount(0, true);
    }
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](./list).
     */
    async closeOpened() {
        if (openSlidingItem !== undefined) {
            openSlidingItem.close();
            openSlidingItem = undefined;
            return true;
        }
        return false;
    }
    /**
     * Given an optional side, return the ion-item-options element.
     *
     * @param side This side of the options to get. If a side is not provided it will
     * return the first one available.
     */
    getOptions(side) {
        if (side === undefined) {
            return this.leftOptions || this.rightOptions;
        }
        else if (side === 'start') {
            return this.leftOptions;
        }
        else {
            return this.rightOptions;
        }
    }
    async updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        // Reset left and right options in case they were removed
        this.leftOptions = this.rightOptions = undefined;
        for (let i = 0; i < options.length; i++) {
            const item = options.item(i);
            /**
             * We cannot use the componentOnReady helper
             * util here since we need to wait for all of these items
             * to be ready before we set `this.sides` and `this.optsDirty`.
             */
            // eslint-disable-next-line custom-rules/no-component-on-ready-method
            const option = item.componentOnReady !== undefined ? await item.componentOnReady() : item;
            const side = helpers.isEndSide(option.side) ? 'end' : 'start';
            if (side === 'start') {
                this.leftOptions = option;
                sides |= 1 /* ItemSide.Start */;
            }
            else {
                this.rightOptions = option;
                sides |= 2 /* ItemSide.End */;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart(gesture) {
        /**
         * If very close to start of the screen
         * do not open left side so swipe to go
         * back will still work.
         */
        const rtl = document.dir === 'rtl';
        const atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;
        if (atEdge) {
            return false;
        }
        const selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
        }
        return !!(this.rightOptions || this.leftOptions);
    }
    onStart() {
        /**
         * We need to query for the ion-item
         * every time the gesture starts. Developers
         * may toggle ion-item elements via *ngIf.
         */
        this.item = this.el.querySelector('ion-item');
        const { contentEl } = this;
        if (contentEl) {
            this.initialContentScrollY = index$1.disableContentScrollY(contentEl);
        }
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* SlidingState.Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    }
    onMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* ItemSide.End */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* ItemSide.Start */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* ItemSide.Both */:
                break;
            case 0 /* ItemSide.None */:
                return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onEnd(gesture) {
        const { contentEl, initialContentScrollY } = this;
        if (contentEl) {
            index$1.resetContentScrollY(contentEl, initialContentScrollY);
        }
        const velocity = gesture.velocityX;
        let restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = this.openAmount > 0 === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        const state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32 /* SlidingState.SwipeEnd */) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64 /* SlidingState.SwipeStart */) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        const { el } = this;
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state =
                openAmount >= this.optsWidthRightSide + SWIPE_MARGIN
                    ? 8 /* SlidingState.End */ | 32 /* SlidingState.SwipeEnd */
                    : 8 /* SlidingState.End */;
        }
        else if (openAmount < 0) {
            this.state =
                openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN
                    ? 16 /* SlidingState.Start */ | 64 /* SlidingState.SwipeStart */
                    : 16 /* SlidingState.Start */;
        }
        else {
            /**
             * The sliding options should not be
             * clickable while the item is closing.
             */
            el.classList.add('item-sliding-closing');
            /**
             * Item sliding cannot be interrupted
             * while closing the item. If it did,
             * it would allow the item to get into an
             * inconsistent state where multiple
             * items are then open at the same time.
             */
            if (this.gesture) {
                this.gesture.enable(false);
            }
            this.tmr = setTimeout(() => {
                this.state = 2 /* SlidingState.Disabled */;
                this.tmr = undefined;
                if (this.gesture) {
                    this.gesture.enable(!this.disabled);
                }
                el.classList.remove('item-sliding-closing');
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync(),
        });
    }
    getSlidingRatioSync() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { key: '22f83febcbc1bc27e4ddbd7fcbe590de60a10e89', class: {
                [mode]: true,
                'item-sliding-active-slide': this.state !== 2 /* SlidingState.Disabled */,
                'item-sliding-active-options-end': (this.state & 8 /* SlidingState.End */) !== 0,
                'item-sliding-active-options-start': (this.state & 16 /* SlidingState.Start */) !== 0,
                'item-sliding-active-swipe-end': (this.state & 32 /* SlidingState.SwipeEnd */) !== 0,
                'item-sliding-active-swipe-start': (this.state & 64 /* SlidingState.SwipeStart */) !== 0,
            } }));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
};
const swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isResetDirection | isMovingFast | isOnResetZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
};
ItemSliding.style = IonItemSlidingStyle0;

exports.ion_item_option = ItemOption;
exports.ion_item_options = ItemOptions;
exports.ion_item_sliding = ItemSliding;
