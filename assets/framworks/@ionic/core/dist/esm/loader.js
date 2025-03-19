/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { b as bootstrapLazy } from './index-527b9e34.js';
export { s as setNonce } from './index-527b9e34.js';
import { g as globalScripts } from './app-globals-7b6cbf1a.js';
import './ionic-global-ca86cf32.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy(JSON.parse("[[\"ion-menu_3\",[[33,\"ion-menu-button\",{\"color\":[513],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[33,\"ion-menu\",{\"contentId\":[513,\"content-id\"],\"menuId\":[513,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[16,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]],{\"type\":[\"typeChanged\"],\"disabled\":[\"disabledChanged\"],\"side\":[\"sideChanged\"],\"swipeGesture\":[\"swipeGestureChanged\"]}],[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[16,\"ionMenuChange\",\"visibilityChanged\"],[16,\"ionSplitPaneVisible\",\"visibilityChanged\"]]]]],[\"ion-input-password-toggle\",[[33,\"ion-input-password-toggle\",{\"color\":[513],\"showIcon\":[1,\"show-icon\"],\"hideIcon\":[1,\"hide-icon\"],\"type\":[1025]},null,{\"type\":[\"onTypeChange\"]}]]],[\"ion-fab_3\",[[33,\"ion-fab-button\",{\"color\":[513],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1],\"closeIcon\":[1,\"close-icon\"]}],[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64],\"toggle\":[64]},null,{\"activated\":[\"activatedChanged\"]}],[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]},null,{\"activated\":[\"activatedChanged\"]}]]],[\"ion-refresher_2\",[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[32,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"nativeRefresher\":[32],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-back-button\",[[33,\"ion-back-button\",{\"color\":[513],\"defaultHref\":[1025,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1],\"routerAnimation\":[16]}]]],[\"ion-toast\",[[33,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"color\":[513],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"layout\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"positionAnchor\":[1,\"position-anchor\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"icon\":[1],\"htmlAttributes\":[16],\"swipeGesture\":[1,\"swipe-gesture\"],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"revealContentToScreenReader\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"swipeGesture\":[\"swipeGestureChanged\"],\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-card_5\",[[33,\"ion-card\",{\"color\":[513],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}],[32,\"ion-card-content\"],[33,\"ion-card-header\",{\"color\":[513],\"translucent\":[4]}],[33,\"ion-card-subtitle\",{\"color\":[513]}],[33,\"ion-card-title\",{\"color\":[513]}]]],[\"ion-item-option_3\",[[33,\"ion-item-option\",{\"color\":[513],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[32,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-accordion_2\",[[49,\"ion-accordion\",{\"value\":[1],\"disabled\":[4],\"readonly\":[4],\"toggleIcon\":[1,\"toggle-icon\"],\"toggleIconSlot\":[1,\"toggle-icon-slot\"],\"state\":[32],\"isNext\":[32],\"isPrevious\":[32]},null,{\"value\":[\"valueChanged\"]}],[33,\"ion-accordion-group\",{\"animated\":[4],\"multiple\":[4],\"value\":[1025],\"disabled\":[4],\"readonly\":[4],\"expand\":[1],\"requestAccordionToggle\":[64],\"getAccordions\":[64]},[[0,\"keydown\",\"onKeydown\"]],{\"value\":[\"valueChanged\"],\"disabled\":[\"disabledChanged\"],\"readonly\":[\"readonlyChanged\"]}]]],[\"ion-infinite-scroll_2\",[[32,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]},null,{\"threshold\":[\"thresholdChanged\"],\"disabled\":[\"disabledChanged\"]}]]],[\"ion-reorder_2\",[[33,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-segment_2\",[[33,\"ion-segment-button\",{\"contentId\":[513,\"content-id\"],\"disabled\":[1028],\"layout\":[1],\"type\":[1],\"value\":[8],\"checked\":[32],\"setFocus\":[64]},null,{\"value\":[\"valueChanged\"]}],[33,\"ion-segment\",{\"color\":[513],\"disabled\":[4],\"scrollable\":[4],\"swipeGesture\":[4,\"swipe-gesture\"],\"value\":[1032],\"selectOnFocus\":[4,\"select-on-focus\"],\"activated\":[32]},[[16,\"ionSegmentViewScroll\",\"handleSegmentViewScroll\"],[0,\"keydown\",\"onKeyDown\"]],{\"color\":[\"colorChanged\"],\"swipeGesture\":[\"swipeGestureChanged\"],\"value\":[\"valueChanged\"],\"disabled\":[\"disabledChanged\"]}]]],[\"ion-chip\",[[33,\"ion-chip\",{\"color\":[513],\"outline\":[4],\"disabled\":[4]}]]],[\"ion-input\",[[38,\"ion-input\",{\"color\":[513],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearInputIcon\":[1,\"clear-input-icon\"],\"clearOnEdit\":[4,\"clear-on-edit\"],\"counter\":[4],\"counterFormatter\":[16],\"debounce\":[2],\"disabled\":[516],\"enterkeyhint\":[1],\"errorText\":[1,\"error-text\"],\"fill\":[1],\"inputmode\":[1],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"max\":[8],\"maxlength\":[2],\"min\":[8],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[516],\"required\":[4],\"shape\":[1],\"spellcheck\":[4],\"step\":[1],\"type\":[1],\"value\":[1032],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"debounce\":[\"debounceChanged\"],\"type\":[\"onTypeChange\"],\"value\":[\"valueChanged\"],\"dir\":[\"onDirChanged\"]}]]],[\"ion-searchbar\",[[34,\"ion-searchbar\",{\"color\":[513],\"animated\":[4],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[1,\"show-cancel-button\"],\"showClearButton\":[1,\"show-clear-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"lang\":[\"onLangChanged\"],\"dir\":[\"onDirChanged\"],\"debounce\":[\"debounceChanged\"],\"value\":[\"valueChanged\"],\"showCancelButton\":[\"showCancelButtonChanged\"]}]]],[\"ion-toggle\",[[33,\"ion-toggle\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[1],\"enableOnOffLabels\":[4,\"enable-on-off-labels\"],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"activated\":[32]},null,{\"disabled\":[\"disabledChanged\"]}]]],[\"ion-nav_2\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64],\"getLength\":[64]},null,{\"swipeGesture\":[\"swipeGestureChanged\"],\"root\":[\"rootChanged\"]}],[0,\"ion-nav-link\",{\"component\":[1],\"componentProps\":[16],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}]]],[\"ion-tab_2\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]},null,{\"active\":[\"changeActive\"]}],[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[\"ion-textarea\",[[38,\"ion-textarea\",{\"color\":[513],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[4,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"fill\":[1],\"inputmode\":[1],\"enterkeyhint\":[1],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[514],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[516,\"auto-grow\"],\"value\":[1025],\"counter\":[4],\"counterFormatter\":[16],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"shape\":[1],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]},null,{\"debounce\":[\"debounceChanged\"],\"value\":[\"valueChanged\"],\"dir\":[\"onDirChanged\"]}]]],[\"ion-backdrop\",[[33,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"click\",\"onMouseDown\"]]]]],[\"ion-loading\",[[34,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-breadcrumb_2\",[[33,\"ion-breadcrumb\",{\"collapsed\":[4],\"last\":[4],\"showCollapsedIndicator\":[4,\"show-collapsed-indicator\"],\"color\":[1],\"active\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"separator\":[4],\"target\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16]}],[33,\"ion-breadcrumbs\",{\"color\":[513],\"maxItems\":[2,\"max-items\"],\"itemsBeforeCollapse\":[2,\"items-before-collapse\"],\"itemsAfterCollapse\":[2,\"items-after-collapse\"],\"collapsed\":[32],\"activeChanged\":[32]},[[0,\"collapsedClick\",\"onCollapsedClick\"]],{\"maxItems\":[\"maxItemsChanged\"],\"itemsBeforeCollapse\":[\"maxItemsChanged\"],\"itemsAfterCollapse\":[\"maxItemsChanged\"]}]]],[\"ion-tab-bar_2\",[[33,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[8,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[33,\"ion-tab-bar\",{\"color\":[513],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},null,{\"selectedTab\":[\"selectedTabChanged\"]}]]],[\"ion-datetime-button\",[[33,\"ion-datetime-button\",{\"color\":[513],\"disabled\":[516],\"datetime\":[1],\"datetimePresentation\":[32],\"dateText\":[32],\"timeText\":[32],\"datetimeActive\":[32],\"selectedButton\":[32]}]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16],\"beforeLeave\":[16],\"beforeEnter\":[16]},null,{\"url\":[\"onUpdate\"],\"component\":[\"onUpdate\"],\"componentProps\":[\"onComponentProps\"]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]},null,{\"from\":[\"propDidChange\"],\"to\":[\"propDidChange\"]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"canTransition\":[64],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[1,\"ion-router-link\",{\"color\":[513],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"target\":[1]}]]],[\"ion-avatar_3\",[[33,\"ion-avatar\"],[33,\"ion-badge\",{\"color\":[513]}],[1,\"ion-thumbnail\"]]],[\"ion-col_3\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ion-grid\",{\"fixed\":[4]}],[1,\"ion-row\"]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]},null,{\"src\":[\"srcChanged\"]}]]],[\"ion-progress-bar\",[[33,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[513]}]]],[\"ion-range\",[[33,\"ion-range\",{\"color\":[513],\"debounce\":[2],\"name\":[1],\"label\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"pinFormatter\":[16],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"activeBarStart\":[1026,\"active-bar-start\"],\"disabled\":[4],\"value\":[1026],\"labelPlacement\":[1,\"label-placement\"],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]},null,{\"debounce\":[\"debounceChanged\"],\"min\":[\"minChanged\"],\"max\":[\"maxChanged\"],\"step\":[\"stepChanged\"],\"activeBarStart\":[\"activeBarStartChanged\"],\"disabled\":[\"disabledChanged\"],\"value\":[\"valueChanged\"]}]]],[\"ion-segment-content\",[[1,\"ion-segment-content\"]]],[\"ion-segment-view\",[[33,\"ion-segment-view\",{\"disabled\":[4],\"isManualScroll\":[32],\"setContent\":[64]},[[1,\"scroll\",\"handleScroll\"],[1,\"touchstart\",\"handleScrollStart\"],[1,\"touchend\",\"handleTouchEnd\"]]]]],[\"ion-split-pane\",[[33,\"ion-split-pane\",{\"contentId\":[513,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32],\"isVisible\":[64]},null,{\"visible\":[\"visibleChanged\"],\"disabled\":[\"updateState\"],\"when\":[\"updateState\"]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[513]}]]],[\"ion-select-modal\",[[34,\"ion-select-modal\",{\"header\":[1],\"multiple\":[4],\"options\":[16]}]]],[\"ion-datetime_3\",[[33,\"ion-datetime\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"formatOptions\":[16],\"readonly\":[4],\"isDateEnabled\":[16],\"min\":[1025],\"max\":[1025],\"presentation\":[1],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"clearText\":[1,\"clear-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"locale\":[1],\"firstDayOfWeek\":[2,\"first-day-of-week\"],\"titleSelectedDatesFormatter\":[16],\"multiple\":[4],\"highlightedDates\":[16],\"value\":[1025],\"showDefaultTitle\":[4,\"show-default-title\"],\"showDefaultButtons\":[4,\"show-default-buttons\"],\"showClearButton\":[4,\"show-clear-button\"],\"showDefaultTimeLabel\":[4,\"show-default-time-label\"],\"hourCycle\":[1,\"hour-cycle\"],\"size\":[1],\"preferWheel\":[4,\"prefer-wheel\"],\"showMonthAndYear\":[32],\"activeParts\":[32],\"workingParts\":[32],\"isTimePopoverOpen\":[32],\"forceRenderDate\":[32],\"confirm\":[64],\"reset\":[64],\"cancel\":[64]},null,{\"formatOptions\":[\"formatOptionsChanged\"],\"disabled\":[\"disabledChanged\"],\"min\":[\"minChanged\"],\"max\":[\"maxChanged\"],\"presentation\":[\"presentationChanged\"],\"yearValues\":[\"yearValuesChanged\"],\"monthValues\":[\"monthValuesChanged\"],\"dayValues\":[\"dayValuesChanged\"],\"hourValues\":[\"hourValuesChanged\"],\"minuteValues\":[\"minuteValuesChanged\"],\"value\":[\"valueChanged\"]}],[34,\"ion-picker-legacy\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}],[32,\"ion-picker-legacy-column\",{\"col\":[16]},null,{\"col\":[\"colChanged\"]}]]],[\"ion-action-sheet\",[[34,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-alert\",[[34,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"hasController\":[4,\"has-controller\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"],\"buttons\":[\"buttonsChanged\"],\"inputs\":[\"inputsChanged\"]}]]],[\"ion-modal\",[[33,\"ion-modal\",{\"hasController\":[4,\"has-controller\"],\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"breakpoints\":[16],\"expandToScroll\":[4,\"expand-to-scroll\"],\"initialBreakpoint\":[2,\"initial-breakpoint\"],\"backdropBreakpoint\":[2,\"backdrop-breakpoint\"],\"handle\":[4],\"handleBehavior\":[1,\"handle-behavior\"],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"presentingElement\":[16],\"htmlAttributes\":[16],\"isOpen\":[4,\"is-open\"],\"trigger\":[1],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"focusTrap\":[4,\"focus-trap\"],\"canDismiss\":[4,\"can-dismiss\"],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"setCurrentBreakpoint\":[64],\"getCurrentBreakpoint\":[64]},null,{\"isOpen\":[\"onIsOpenChange\"],\"trigger\":[\"triggerChanged\"]}]]],[\"ion-picker\",[[33,\"ion-picker\",{\"exitInputMode\":[64]},[[1,\"touchstart\",\"preventTouchStartPropagation\"]]]]],[\"ion-picker-column\",[[1,\"ion-picker-column\",{\"disabled\":[4],\"value\":[1032],\"color\":[513],\"numericInput\":[4,\"numeric-input\"],\"ariaLabel\":[32],\"isActive\":[32],\"scrollActiveItemIntoView\":[64],\"setValue\":[64],\"setFocus\":[64]},null,{\"aria-label\":[\"ariaLabelChanged\"],\"value\":[\"valueChange\"]}]]],[\"ion-picker-column-option\",[[33,\"ion-picker-column-option\",{\"disabled\":[4],\"value\":[8],\"color\":[513],\"ariaLabel\":[32]},null,{\"aria-label\":[\"onAriaLabelChange\"]}]]],[\"ion-popover\",[[33,\"ion-popover\",{\"hasController\":[4,\"has-controller\"],\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"htmlAttributes\":[16],\"triggerAction\":[1,\"trigger-action\"],\"trigger\":[1],\"size\":[1],\"dismissOnSelect\":[4,\"dismiss-on-select\"],\"reference\":[1],\"side\":[1],\"alignment\":[1025],\"arrow\":[4],\"isOpen\":[4,\"is-open\"],\"keyboardEvents\":[4,\"keyboard-events\"],\"focusTrap\":[4,\"focus-trap\"],\"keepContentsMounted\":[4,\"keep-contents-mounted\"],\"presented\":[32],\"presentFromTrigger\":[64],\"present\":[64],\"dismiss\":[64],\"getParentPopover\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},null,{\"trigger\":[\"onTriggerChange\"],\"triggerAction\":[\"onTriggerChange\"],\"isOpen\":[\"onIsOpenChange\"]}]]],[\"ion-checkbox\",[[33,\"ion-checkbox\",{\"color\":[513],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"required\":[4],\"setFocus\":[64]}]]],[\"ion-item_8\",[[33,\"ion-item-divider\",{\"color\":[513],\"sticky\":[4]}],[32,\"ion-item-group\"],[33,\"ion-note\",{\"color\":[513]}],[1,\"ion-skeleton-text\",{\"animated\":[4]}],[38,\"ion-label\",{\"color\":[513],\"position\":[1],\"noAnimate\":[32]},null,{\"color\":[\"colorChanged\"],\"position\":[\"positionChanged\"]}],[33,\"ion-list-header\",{\"color\":[513],\"lines\":[1]}],[33,\"ion-item\",{\"color\":[513],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[516],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerAnimation\":[16],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32],\"focusable\":[32]},[[0,\"ionColor\",\"labelColorChanged\"],[0,\"ionStyle\",\"itemStyle\"]],{\"button\":[\"buttonChanged\"]}],[32,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}]]],[\"ion-app_8\",[[0,\"ion-app\",{\"setFocus\":[64]}],[36,\"ion-footer\",{\"collapse\":[1],\"translucent\":[4],\"keyboardVisible\":[32]}],[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]},null,{\"swipeHandler\":[\"swipeHandlerChanged\"]}],[1,\"ion-content\",{\"color\":[513],\"fullscreen\":[4],\"fixedSlotPlacement\":[1,\"fixed-slot-placement\"],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"getBackgroundElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[9,\"resize\",\"onResize\"]]],[36,\"ion-header\",{\"collapse\":[1],\"translucent\":[4]}],[33,\"ion-title\",{\"color\":[513],\"size\":[1]},null,{\"size\":[\"sizeChanged\"]}],[33,\"ion-toolbar\",{\"color\":[513]},[[0,\"ionStyle\",\"childrenStyle\"]]],[38,\"ion-buttons\",{\"collapse\":[4]}]]],[\"ion-select_3\",[[33,\"ion-select\",{\"cancelText\":[1,\"cancel-text\"],\"color\":[513],\"compareWith\":[1,\"compare-with\"],\"disabled\":[4],\"fill\":[1],\"errorText\":[1,\"error-text\"],\"helperText\":[1,\"helper-text\"],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"justify\":[1],\"label\":[1],\"labelPlacement\":[1,\"label-placement\"],\"multiple\":[4],\"name\":[1],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"selectedText\":[1,\"selected-text\"],\"toggleIcon\":[1,\"toggle-icon\"],\"expandedIcon\":[1,\"expanded-icon\"],\"shape\":[1],\"value\":[1032],\"required\":[4],\"isExpanded\":[32],\"open\":[64]},null,{\"disabled\":[\"styleChanged\"],\"isExpanded\":[\"styleChanged\"],\"placeholder\":[\"styleChanged\"],\"value\":[\"styleChanged\"]}],[1,\"ion-select-option\",{\"disabled\":[4],\"value\":[8]}],[34,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"multiple\":[4],\"options\":[16]}]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[513],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[\"ion-radio_2\",[[33,\"ion-radio\",{\"color\":[513],\"name\":[1],\"disabled\":[4],\"value\":[8],\"labelPlacement\":[1,\"label-placement\"],\"justify\":[1],\"alignment\":[1],\"checked\":[32],\"buttonTabindex\":[32],\"setFocus\":[64],\"setButtonTabindex\":[64]},null,{\"value\":[\"valueChanged\"]}],[36,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"compareWith\":[1,\"compare-with\"],\"name\":[1],\"value\":[1032],\"helperText\":[1,\"helper-text\"],\"errorText\":[1,\"error-text\"],\"setFocus\":[64]},[[4,\"keydown\",\"onKeydown\"]],{\"value\":[\"valueChanged\"]}]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[\"ion-button_2\",[[33,\"ion-button\",{\"color\":[513],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"routerAnimation\":[16],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1],\"form\":[1],\"isCircle\":[32]},null,{\"disabled\":[\"disabledChanged\"]}],[1,\"ion-icon\",{\"mode\":[1025],\"color\":[1],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[513],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"sanitize\":[4],\"svgContent\":[32],\"isVisible\":[32]},null,{\"name\":[\"loadIcon\"],\"src\":[\"loadIcon\"],\"icon\":[\"loadIcon\"],\"ios\":[\"loadIcon\"],\"md\":[\"loadIcon\"]}]]]]"), options);
};

export { defineCustomElements };
