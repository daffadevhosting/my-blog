/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { menuController } from "../../utils/menu-controller/index";
import { getIonMode } from "../../global/ionic-global";
import { updateVisibility } from "./menu-toggle-util";
/**
 * @slot - Content is placed inside the toggle to act as the click target.
 */
export class MenuToggle {
    constructor() {
        this.onClick = () => {
            return menuController.toggle(this.menu);
        };
        this.visible = false;
        this.menu = undefined;
        this.autoHide = true;
    }
    connectedCallback() {
        this.visibilityChanged();
    }
    async visibilityChanged() {
        this.visible = await updateVisibility(this.menu);
    }
    render() {
        const mode = getIonMode(this);
        const hidden = this.autoHide && !this.visible;
        return (h(Host, { key: '88e88fa13ac7f10ba3acfe378bd11cda0c7e2749', onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
                [mode]: true,
                'menu-toggle-hidden': hidden,
            } }, h("slot", { key: '0a14c7b63eda64702d2fd1b4bc7db4809892842d' })));
    }
    static get is() { return "ion-menu-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-toggle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-toggle.css"]
        };
    }
    static get properties() {
        return {
            "menu": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional property that maps to a Menu's `menuId` prop.\nCan also be `start` or `end` for the menu side.\nThis is used to find the correct menu to toggle.\n\nIf this property is not used, `ion-menu-toggle` will toggle the\nfirst menu that is active."
                },
                "attribute": "menu",
                "reflect": false
            },
            "autoHide": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Automatically hides the content when the corresponding menu is not active.\n\nBy default, it's `true`. Change it to `false` in order to\nkeep `ion-menu-toggle` always visible regardless the state of the menu."
                },
                "attribute": "auto-hide",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "visible": {}
        };
    }
    static get listeners() {
        return [{
                "name": "ionMenuChange",
                "method": "visibilityChanged",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "ionSplitPaneVisible",
                "method": "visibilityChanged",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
