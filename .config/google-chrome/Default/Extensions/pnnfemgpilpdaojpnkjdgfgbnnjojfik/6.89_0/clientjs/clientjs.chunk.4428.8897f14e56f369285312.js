export const id = 4428;
export const ids = [4428];
export const modules = {

/***/ 49376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useStopper)
/* harmony export */ });
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);



// This hook has a slight surprise: the stopper is never fired if the component
// does not get mounted. If you need a stopper inside of a useEffect block, instead
// of using this, you should make one during the useEffect callback and then
// return `stopper.destroy`.
// TODO this incorrectly uses useMemo.
function useStopper(deps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stopper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => kefir_stopper__WEBPACK_IMPORTED_MODULE_1___default()(), deps);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return stopper.destroy;
  }, [stopper]);
  return stopper;
}

/***/ }),

/***/ 28:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ColumnHeaderButton)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82792);
/* harmony import */ var _columnHeaderButtonMenu2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91217);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71174);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_columnHeaderButtonMenu2__WEBPACK_IMPORTED_MODULE_3__]);
_columnHeaderButtonMenu2__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







class ColumnHeaderButton extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  _menuButton = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef())();
  _menu = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef())();
  _stopper = (() => kefir_stopper__WEBPACK_IMPORTED_MODULE_6___default()())();
  componentDidMount() {
    const {
      savedViewColumn
    } = this.props;
    const column = savedViewColumn.getColumn();
    column?.getNameChangeStream().takeUntilBy(this._stopper).onValue(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this._stopper.destroy();
  }
  render() {
    const {
      pipeline,
      savedViewColumn,
      onColumnsReordered,
      onWillOpen,
      onWillClose
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_2__/* .MenuButton */ .j2, {
      ref: this._menuButton
      // TODO: update MenuButton to use render props with better types
      ,
      ButtonComponent: buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(HeaderButton, {
        ...buttonProps,
        onContextMenu: e => {
          e.preventDefault();
          this._menuButton.current?.open();
        },
        domRef: buttonProps.domRef,
        columnIcon: savedViewColumn.getColumn().getIconName(),
        columnName: savedViewColumn.displayNameText()
      }),
      positionOptions: {
        position: 'cover',
        vAlign: 'top',
        hAlign: 'left'
      },
      onWillOpen: onWillOpen,
      onWillClose: () => {
        this._menu.current?.onWillClose();
        onWillClose();
      },
      menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_columnHeaderButtonMenu2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ref: this._menu,
        pipeline: pipeline,
        savedViewColumn: savedViewColumn,
        onColumnsReordered: onColumnsReordered,
        closeDropdown: () => this.close()
      })
    });
  }
  open() {
    this._menuButton.current?.open();
  }
  close() {
    this._menuButton.current?.close();
  }
}
function HeaderButton(_ref) {
  let {
    columnIcon,
    columnName,
    domRef,
    onContextMenu,
    onMouseDown
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ref: domRef,
      onMouseUp: onMouseDown,
      onContextMenu: onContextMenu,
      tabIndex: 0,
      role: "button",
      className: "jsx-865814896" + " " + "streak__dropdownHeaderButton",
      children: [columnIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        name: columnIcon,
        color: "var(--streak-black-shadow)",
        isCircle: true,
        isOutline: true,
        size: "ms",
        variant: "text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "jsx-865814896" + " " + "streak__dropdownHeaderButton_name",
        children: columnName
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "865814896",
      children: [".streak__dropdownHeaderButton.jsx-865814896:hover{box-shadow: 0px 2px 2px rgba(0,0,0,0.12), 0px 3px 1px rgba(0,0,0,0.12), 0px 1px 5px rgba(0,0,0,0.2);border-radius:2px;}", ".streak__dropdownHeaderButton.jsx-865814896{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:8px;font-family:Roboto;font-style:normal;font-weight:500;font-size:11px;line-height:normal;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;height:100%;}", ".streak__dropdownHeaderButton.jsx-865814896:focus{outline:none;}", ".streak__dropdownHeaderButton_name.jsx-865814896{margin-left:4px;font-family:Roboto;font-style:normal;font-weight:500;font-size:11px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;white-space:break-spaces;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GroupBarWrapper)
/* harmony export */ });
/* harmony import */ var _pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23942);
/* harmony import */ var _hooks_useSavedView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42241);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_0__]);
_pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function GroupBarWrapper(props) {
  const groupOpenCloseSettings = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props.pipeline, props.savedView.getViewKey(), sv => sv.getGroupOpenCloseSettings());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP, {
    height: props.height - 20,
    expandGroupbar: props.expandGroupbar,
    pipeline: props.pipeline,
    stickyGroupRowIndex: props.stickyGroupRowIndex,
    jumpToGroup: props.jumpToGroup,
    track: props.track,
    groupOpenCloseSettings: groupOpenCloseSettings,
    groupData: props.groupData,
    activeSavedView: props.savedView
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LocalSpreadsheetApi)
/* harmony export */ });
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98137);
/* harmony import */ var transducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85178);
/* harmony import */ var transducers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(transducers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36106);
/* harmony import */ var _pipelineView_pipelineTableModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73498);
/* harmony import */ var _pipelineView_transformManagerSingleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2097);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72086);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67459);
/* harmony import */ var kefir_bus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(kefir_bus__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pipelineStageManager_fetchPipelineGroupColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69416);
/* harmony import */ var _pipelineView_helpers_getPipelineAndBoxesChangeStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94426);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_2__, _pipelineView_pipelineTableModel__WEBPACK_IMPORTED_MODULE_3__, _pipelineView_transformManagerSingleton__WEBPACK_IMPORTED_MODULE_4__, _pipelineStageManager_fetchPipelineGroupColors__WEBPACK_IMPORTED_MODULE_5__, _pipelineView_helpers_getPipelineAndBoxesChangeStream__WEBPACK_IMPORTED_MODULE_6__]);
([_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_2__, _pipelineView_pipelineTableModel__WEBPACK_IMPORTED_MODULE_3__, _pipelineView_transformManagerSingleton__WEBPACK_IMPORTED_MODULE_4__, _pipelineStageManager_fetchPipelineGroupColors__WEBPACK_IMPORTED_MODULE_5__, _pipelineView_helpers_getPipelineAndBoxesChangeStream__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










class LocalSpreadsheetApi {
  _activeViewStream = (() => kefir_bus__WEBPACK_IMPORTED_MODULE_7___default()())();
  _forceRefreshBus = (() => kefir_bus__WEBPACK_IMPORTED_MODULE_7___default()())();
  _stopper = (() => kefir_stopper__WEBPACK_IMPORTED_MODULE_8___default()())();
  FirstPageCursor = 'first';
  LastPageCursor = 'last';
  constructor(_ref) {
    let {
      pipeline,
      savedViewKey
    } = _ref;
    this._pipeline = pipeline;
    const savedView = (0,_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_2__.getSavedViewFromViewKey)(pipeline, savedViewKey);
    this._savedView = savedView;
    const activeViewStream = this._activeViewStream;
    const activeViewDataStream = kefir__WEBPACK_IMPORTED_MODULE_0__["default"].merge([kefir__WEBPACK_IMPORTED_MODULE_0__["default"].constant(savedView), activeViewStream]).flatMapLatest(savedView => _pipelineView_transformManagerSingleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getTransformedDataStream(savedView).map(transformedData => ({
      transformedData,
      savedView
    }))).toProperty();
    const pipelineTableModel = new _pipelineView_pipelineTableModel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z({
      pipeline,
      activeViewStream,
      activeViewDataStream
    });
    this._pipelineTableModel = pipelineTableModel;

    // TODO(mitch): How to properly use these events to determine
    // when we should recalculate the column overview data?
    const pipelineSavedViewEventStream = this._pipeline.getEventStream().filter(event => ['savedViewNonTransformSettingsChanged', 'savedViewTransformSettingsChanged', 'savedViewInboxStateChanged', 'savedViewStarStateChanged', 'savedViewNameChanged', 'savedViewChanged', 'savedViewAdded'].includes(event.eventName) && event.viewKey === this._savedView.getViewKey());
    const uiSettingsStream = this._pipeline.getEventStream().filter(event => 'property' in event && event.property === 'uiSettings');
    const pipelineTableModelStream = this._pipelineTableModel.getEventStream()
    // TODO(mitch): We should filter these events. But how??
    .filter(_event => {
      return true;
    });
    this._refreshStream = this._createRefreshStream();
    this._eventStream = kefir__WEBPACK_IMPORTED_MODULE_0__["default"].merge([pipelineSavedViewEventStream, pipelineTableModelStream, uiSettingsStream]).toProperty(() => null).map(() => pipelineTableModel.isTransformDataAvailable()).toProperty();
  }
  onColumnUpdateStream() {
    const fieldRemovedStream = this._pipeline.getEventStream().filter(e => e.eventName === 'fieldRemoved').map(e => {
      return e;
    });
    const fieldAddedStream = this._pipeline.getEventStream().filter(e => e.eventName === 'fieldAdded');
    const systemColumnsChangedStream = this._pipeline.getEventStream().filter(e => e.eventName === 'uiSettingsPathChanged' && e.keyPath === 'systemColumns');
    const columnSettingsChangedStream = this._pipeline.getEventStream().filter(e => e.eventName === 'savedViewNonTransformSettingsChanged').filter(e => {
      const settingsChanged = e.settingsChanged;
      if (!settingsChanged) {
        return false;
      }
      return settingsChanged.includes('columnWidthSettings') || settingsChanged.includes('columnOrderSettings') || settingsChanged.includes('columnVisibilitySettings') || settingsChanged.includes('frozenColumnSettings');
    });
    return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].merge([fieldRemovedStream, fieldAddedStream, columnSettingsChangedStream, systemColumnsChangedStream]).flatMap(() => {
      return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].fromPromise(this.getColumns());
    });
  }
  getSectionUpdateStream() {
    const groupChangeStream = this._pipeline.getEventStream().filter(e => e.eventName === 'savedViewNonTransformSettingsChanged').filter(e => {
      const settingsChanged = e.settingsChanged;
      if (!settingsChanged) {
        return false;
      }
      return settingsChanged.includes('groupOpenCloseSettings') || settingsChanged.includes('columnSummarySettings');
    });
    const transformChangeStream = this._pipelineTableModel.getEventStream().filter(e => e.eventName === 'newTransformedData');
    return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].merge([groupChangeStream, transformChangeStream]).flatMap(() => {
      return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].fromPromise(this.getGroups());
    });
  }
  _createRefreshStream() {
    const groupChangeStream = this._pipeline.getEventStream().filter(e => e.eventName === 'savedViewTransformSettingsChanged').filter(e => {
      if (e.settingsChanged) {
        return Boolean(e.settingsChanged.find(x => x !== 'columnOrderSettings'));
      }
      return false;
    });

    // We're using this stream as a proxy for "Were boxes addded to the SV via realtimes?"
    const boxCollectionChangesStream = (0,_pipelineView_helpers_getPipelineAndBoxesChangeStream__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(this._pipeline, this._savedView).filter(e => e.dataChangeTypes.has('COLLECTION_MEMBERS'));
    return kefir__WEBPACK_IMPORTED_MODULE_0__["default"].merge([groupChangeStream, boxCollectionChangesStream, this._forceRefreshBus]).takeUntilBy(this._stopper).onValue(() => {
      if (!this._refreshingPromise) {
        this._refreshingPromise = this._pipeline.refreshWithPromise().then(() => {
          this._activeViewStream.emit(this._savedView);
          this._refreshingPromise = undefined;
        });
      }
    });
  }
  getRefreshStream() {
    return this._refreshStream;
  }
  async getGroups() {
    if (!this._pipelineTableModel.isTransformDataAvailable()) {
      await this._eventStream.filter(Boolean).take(1).toPromise();
    }
    const savedViewColumns = this._savedView.getSavedViewColumns();
    let groupColors;
    if (!this._savedView.isGroupedByStage()) {
      const pipelineThemeName = this._pipeline.getNoDefault('stageColorTheme');
      groupColors = await (0,_pipelineStageManager_fetchPipelineGroupColors__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(pipelineThemeName, this._savedView.getSavedViewGroups().length);
    }
    const groups = this._savedView.getSavedViewGroups().map((savedViewGroup, i) => {
      const groupId = savedViewGroup.getGroupID();
      const colors = this._savedView.isGroupedByStage() ? savedViewGroup.getColor() : groupColors[i];
      const sectionBoxes = this._pipelineTableModel.getGroupBoxes(groupId);
      const summaries = savedViewColumns.map(savedViewColumn => {
        const summaryFunction = savedViewColumn.getCurrentSummaryFunction();
        if (!summaryFunction) {
          // The user hasn't configured a summary yet
          return {
            groupKey: savedViewColumn.getColumnKey(),
            aggregationType: undefined,
            value: null
          };
        }
        return {
          groupKey: savedViewColumn.getColumnKey(),
          aggregationType: summaryFunction,
          value: savedViewColumn.getSummaryResultText(summaryFunction, sectionBoxes)
        };
      }).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
      return {
        key: groupId,
        copyValue: this._pipelineTableModel.getGroupCopyValue(groupId),
        displayName: savedViewGroup.displayNameText(),
        count: sectionBoxes.length,
        isHidden: !savedViewGroup.isOpen(),
        summaries: summaries.reduce((acc, summary) => {
          acc[summary.groupKey] = summary;
          return acc;
        }, {}),
        colors
      };
    });
    return groups;
  }
  getColumns() {
    const savedViewColumns = this._savedView.getSavedViewColumns();
    return Promise.resolve(savedViewColumns.map(savedViewColumn => {
      const column = savedViewColumn.getColumn();
      if (!column) throw new Error('savedViewColumn without a column');
      return {
        isFrozen: savedViewColumn.isFrozen(),
        isHidden: !savedViewColumn.isVisible(),
        isResizable: savedViewColumn.isResizeable(),
        key: savedViewColumn.getColumnKey(),
        name: savedViewColumn.displayNameText(),
        type: column.getColumnType(),
        width: savedViewColumn.getWidth()
      };
    }));
  }
  async getLastPage(groupKey) {
    const groups = await this.getGroups();
    const group = groups.find(group => group.key === groupKey);
    if (!group) {
      throw new Error('Attempt to get last page of non-existent group');
    }
    return this.getRows(group.key, this.LastPageCursor, 0, 50);
  }
  async getFirstPage(groupKey) {
    const groups = await this.getGroups();
    const group = groups.find(group => group.key === groupKey);
    if (!group) {
      throw new Error('Attempt to get last page of non-existent group');
    }
    return this.getRows(group.key, this.FirstPageCursor, 0, 50);
  }
  async getRows(sectionKey, cursor, offset, limit) {
    if (this._refreshingPromise) {
      await this._refreshingPromise;
    }
    const sectionBoxes = this._pipelineTableModel.getGroupBoxes(sectionKey);
    let startingIndex;
    switch (cursor) {
      case this.FirstPageCursor:
        {
          startingIndex = offset;
          break;
        }
      case this.LastPageCursor:
        {
          startingIndex = sectionBoxes.length - limit - offset;
          break;
        }
      default:
        {
          const {
            direction,
            index
          } = JSON.parse(cursor);
          startingIndex = direction === 'forward' ? index + offset : index - offset - limit;
        }
    }
    const rowsPlusOne = transducers_js__WEBPACK_IMPORTED_MODULE_1___default().toArray(sectionBoxes, transducers_js__WEBPACK_IMPORTED_MODULE_1___default().compose(transducers_js__WEBPACK_IMPORTED_MODULE_1___default().filter(box => (0,_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(box.key())), transducers_js__WEBPACK_IMPORTED_MODULE_1___default().drop(startingIndex), transducers_js__WEBPACK_IMPORTED_MODULE_1___default().take(limit + 1), transducers_js__WEBPACK_IMPORTED_MODULE_1___default().map(box => ({
      key: box.getId(),
      data: box
    }))));
    let rows;
    let nextPageCursor = undefined;
    let previousPageCursor = undefined;
    if (rowsPlusOne.length > limit) {
      rows = rowsPlusOne.slice(0, limit);
      nextPageCursor = JSON.stringify({
        direction: 'forward',
        index: startingIndex + limit
      });
    } else {
      rows = rowsPlusOne;
    }
    if (startingIndex > 0) {
      previousPageCursor = JSON.stringify({
        direction: 'backward',
        index: startingIndex - 1
      });
    }
    return {
      rows,
      nextPageCursor,
      previousPageCursor
    };
  }

  // TODO: Implement this
  async search(query,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  direction,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  startPosition,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  includeContext // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
    return {
      positions: [],
      contexts: [],
      reachedEnd: true
    };
  }
  destroy() {
    this._stopper.destroy();
    this._pipelineTableModel.destroy();
  }
  async refresh() {
    this._forceRefreshBus.emit(null);
    if (!this._refreshingPromise) {
      throw new Error('expected refreshing promise to be defined');
    }
    await this._refreshingPromise;
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(92802);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69980);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54664);
/* harmony import */ var streaksheet__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(58856);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71174);
/* harmony import */ var _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81641);
/* harmony import */ var _core_models_pipeline_columns_applyEditAction__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(36809);
/* harmony import */ var _core_models_pipeline_columns_areCopyValuesEqual__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(81195);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7961);
/* harmony import */ var _lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(659);
/* harmony import */ var _lib_utils_isModKeyPressed__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(12036);
/* harmony import */ var _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24067);
/* harmony import */ var _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93237);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13778);
/* harmony import */ var _widgets_modal_textboxModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47270);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64167);
/* harmony import */ var _boxValidators_sidebar_boxValidatorSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8937);
/* harmony import */ var _boxView_BoxViewNextPreviousManagerV2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7726);
/* harmony import */ var _pipelineView_savedViews_clearView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23442);
/* harmony import */ var _pipelineView_savedViews_overwriteSavedViewWithNewSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68519);
/* harmony import */ var _pipelineView_savedViews_savedViewsEditArea_savedViewsEditAreaComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25825);
/* harmony import */ var _pipelineView_savedViews_savedViewsStatusBarComponent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72759);
/* harmony import */ var _pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23942);
/* harmony import */ var _components_Cell__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26533);
/* harmony import */ var _components_ColumnHeaderCell__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(66853);
/* harmony import */ var _components_NewsfeedWrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29489);
/* harmony import */ var _components_SectionHeaderCell__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(70996);
/* harmony import */ var _components_toolbar_PipelineToolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(17092);
/* harmony import */ var _GroupBarWrapper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62829);
/* harmony import */ var _hooks_useSavedView__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(42241);
/* harmony import */ var _LocalSpreadsheetApi__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(31147);
/* harmony import */ var _RemoteSpreadsheetApi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(78480);
/* harmony import */ var _useLocalBoxCreate__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(96413);
/* harmony import */ var _useLocalBoxEdits__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(95042);
/* harmony import */ var _useOnAsyncAction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(95103);
/* harmony import */ var _useUndo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(99146);
/* harmony import */ var _components_visualizations_VisualizationWrapper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(6217);
/* harmony import */ var _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(38462);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(99329);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(25788);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(39687);
/* harmony import */ var _PipelineLoadingSpinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(65699);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_6__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_9__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_13__, _boxValidators_sidebar_boxValidatorSidebar__WEBPACK_IMPORTED_MODULE_14__, _boxView_BoxViewNextPreviousManagerV2__WEBPACK_IMPORTED_MODULE_15__, _pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_20__, _components_ColumnHeaderCell__WEBPACK_IMPORTED_MODULE_22__, _components_NewsfeedWrapper__WEBPACK_IMPORTED_MODULE_23__, _components_toolbar_PipelineToolbar__WEBPACK_IMPORTED_MODULE_25__, _GroupBarWrapper__WEBPACK_IMPORTED_MODULE_26__, _LocalSpreadsheetApi__WEBPACK_IMPORTED_MODULE_28__, _RemoteSpreadsheetApi__WEBPACK_IMPORTED_MODULE_29__, _useLocalBoxCreate__WEBPACK_IMPORTED_MODULE_30__, _useLocalBoxEdits__WEBPACK_IMPORTED_MODULE_31__, _useUndo__WEBPACK_IMPORTED_MODULE_33__, _components_visualizations_VisualizationWrapper__WEBPACK_IMPORTED_MODULE_34__, _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__]);
([_core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_6__, _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_9__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_13__, _boxValidators_sidebar_boxValidatorSidebar__WEBPACK_IMPORTED_MODULE_14__, _boxView_BoxViewNextPreviousManagerV2__WEBPACK_IMPORTED_MODULE_15__, _pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_20__, _components_ColumnHeaderCell__WEBPACK_IMPORTED_MODULE_22__, _components_NewsfeedWrapper__WEBPACK_IMPORTED_MODULE_23__, _components_toolbar_PipelineToolbar__WEBPACK_IMPORTED_MODULE_25__, _GroupBarWrapper__WEBPACK_IMPORTED_MODULE_26__, _LocalSpreadsheetApi__WEBPACK_IMPORTED_MODULE_28__, _RemoteSpreadsheetApi__WEBPACK_IMPORTED_MODULE_29__, _useLocalBoxCreate__WEBPACK_IMPORTED_MODULE_30__, _useLocalBoxEdits__WEBPACK_IMPORTED_MODULE_31__, _useUndo__WEBPACK_IMPORTED_MODULE_33__, _components_visualizations_VisualizationWrapper__WEBPACK_IMPORTED_MODULE_34__, _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function PipelineView(_ref, ref) {
  let {
    pipeline,
    savedViewKey,
    track,
    initialScrollLeft,
    initialScrollTop
  } = _ref;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref, () => ({
    scrollTo(scrollArgs) {
      actualRef.current.scrollTo(scrollArgs);
    },
    getScrollPosition() {
      return actualRef.current.getScrollPosition();
    },
    addNewBox(options) {
      return actualRef.current.addNewBox(options);
    }
  }));
  const actualRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [mode, _setMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('LOCAL');
  const setMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(mode => {
    _setMode(mode);
    setSpreadsheetApi(null);
  }, []);
  const [spreadsheetApi, setSpreadsheetApi] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const spreadsheetApi = mode === 'LOCAL' ? new _LocalSpreadsheetApi__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z({
      pipeline,
      savedViewKey,
      track
    }) : new _RemoteSpreadsheetApi__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z({
      pipeline,
      savedViewKey,
      track
    });
    setSpreadsheetApi(spreadsheetApi);
    return () => spreadsheetApi.destroy();
  }, [mode, track, pipeline, savedViewKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_11__["default"].track('newSpreadsheetExperiment.mount');
  }, []);
  if (!spreadsheetApi) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_PipelineLoadingSpinner__WEBPACK_IMPORTED_MODULE_38__/* .PipelineLoadingSpinner */ .J, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_context__WEBPACK_IMPORTED_MODULE_37__/* .SpreadsheetApiContext */ .qJ.Provider, {
    value: spreadsheetApi,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_context__WEBPACK_IMPORTED_MODULE_37__/* .PipelineContext */ .re.Provider, {
      value: {
        pipeline,
        savedViewKey: savedViewKey // todo: when is the saved view key null?
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(PipelineViewActual, {
        ref: actualRef,
        spreadsheetApi: spreadsheetApi,
        mode: mode,
        setMode: setMode,
        track: track,
        initialScrollLeft: initialScrollLeft,
        initialScrollTop: initialScrollTop
      }, mode)
    })
  });
}));
const renderColumnsExpandButton = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsxs)("div", {
  className: "jsx-2149423360" + " " + "streak__expander",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    name: "unfold_more",
    accent: "muted",
    size: "ms",
    variant: "inline",
    className: "expand_columns_icon"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "2149423360",
    children: [".streak__expander.jsx-2149423360{background:#fff;border:1px solid var(--streak-black-disabled);border-radius:2px;box-shadow:1px 1px 2px rgba(0,0,0,0.25);height:16px;width:16px;}", ".streak__expander.jsx-2149423360 .expand_columns_icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}"]
  })]
});
function _PipelineViewActual(_ref2, ref) {
  let {
    spreadsheetApi,
    track,
    initialScrollLeft,
    initialScrollTop
  } = _ref2;
  const {
    pipeline,
    savedViewKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_37__/* .PipelineContext */ .re);
  const savedViewsManager = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => pipeline.getSavedViewsManager(), [pipeline]);
  const savedView = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => savedViewsManager.getSavedView(savedViewKey), [savedViewKey, savedViewsManager]);
  const [groups, setGroups] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const columnAndOverviewData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!groups) {
      return null;
    }
    const selectCollapseColumn = {
      isFrozen: false,
      isHidden: false,
      isResizable: false,
      key: _constants__WEBPACK_IMPORTED_MODULE_40__/* .SELECT_COLLAPSE_COLUMN_KEY */ .j,
      name: '',
      type: _constants__WEBPACK_IMPORTED_MODULE_40__/* .SELECT_COLLAPSE_COLUMN_KEY */ .j,
      width: 50
    };
    const addColumn = {
      isFrozen: false,
      isHidden: false,
      isResizable: false,
      key: 'add-column',
      name: '',
      type: 'add-column',
      width: 36
    };
    const sections = (groups || []).map(section => ({
      isHidden: section.isHidden,
      key: section.key,
      rowCountHint: section.count,
      sectionRowHeight: 40
    }));
    return {
      columns: [selectCollapseColumn, ...(columns || []), addColumn],
      sections: sections || [],
      pipelineName: pipeline.displayNameText(),
      savedViewName: savedView.displayNameText()
    };
  }, [columns, groups, pipeline, savedView]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let cancelled = false;
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_41___default()();
    spreadsheetApi.getGroups().then(groups => {
      if (!cancelled) {
        setGroups(groups);
      }
    });
    spreadsheetApi.getColumns().then(columns => {
      if (!cancelled) {
        setColumns(columns);
      }
    });
    spreadsheetApi.onColumnUpdateStream().takeUntilBy(stopper).filter(() => !cancelled).onValue(columns => {
      setColumns(columns);
    });
    spreadsheetApi.getSectionUpdateStream().filter(() => !cancelled).onValue(groups => {
      setGroups(groups);
    });
    return () => {
      stopper.destroy();
      cancelled = true;
    };
  }, [spreadsheetApi]);
  if (!columnAndOverviewData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_PipelineLoadingSpinner__WEBPACK_IMPORTED_MODULE_38__/* .PipelineLoadingSpinner */ .J, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(LoadedPipelineView, {
    groups: groups,
    setGroups: setGroups,
    spreadsheetApi: spreadsheetApi,
    savedView: savedView,
    setColumns: setColumns,
    track: track,
    pipeline: pipeline,
    pipelineViewRef: ref,
    columnAndOverviewData: columnAndOverviewData,
    initialScrollLeft: initialScrollLeft,
    initialScrollTop: initialScrollTop
  });
}
function LoadedPipelineView(_ref3) {
  let {
    columnAndOverviewData,
    spreadsheetApi,
    savedView,
    pipeline,
    pipelineViewRef,
    track,
    setColumns,
    setGroups,
    groups,
    initialScrollLeft,
    initialScrollTop
  } = _ref3;
  const streakSheetRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(pipelineViewRef, () => ({
    scrollTo(scrollArgs) {
      track('scrollToCalled');
      streakSheetRef.current?.scrollTo(scrollArgs);
    },
    toggleSavedViewEditor: () => {
      setIsEditorOpen(isOpen => !isOpen);
    },
    openSavedViewEditor: () => {
      setIsEditorOpen(true);
    },
    closeSavedViewEditor: () => {
      setIsEditorOpen(false);
    },
    getScrollPosition() {
      return latestScrollProps.current;
    },
    addNewBox(options) {
      return createLocalBox(options);
    }
  }));
  const overviewRefreshCounter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  const [selectionAnchor, setSelectionAnchor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const setSelectionOverRange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(end => {
    if (selectionAnchor) {
      streakSheetRef.current?.setRowSelectionOverRange(selectionAnchor, end, true);
    }
  }, [selectionAnchor]);
  const isUnsaved = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(pipeline, savedView.getViewKey(), sv => {
    return sv.isUnsaved();
  });
  const isInHeadsUp = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(pipeline, savedView.getViewKey(), sv => {
    return _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__["default"].isInHeadsUp(sv.getViewKey());
  });
  const [totalRowsSelected, setTotalRowsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [isEditorOpen, setIsEditorOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const savedViewEditorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(savedViewEditor => {
    if (savedViewEditor) {
      setSavedViewEditorHeight(savedViewEditor.getComponentHeight() || 0);
    } else {
      setSavedViewEditorHeight(0);
    }
  }, []);
  const latestScrollProps = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const onScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(scrollProps => {
    latestScrollProps.current = scrollProps;
  }, []);
  const [savedViewEditorHeight, setSavedViewEditorHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const savedViewEditArea = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsxs)("div", {
    children: [savedView.isDefault() ? undefined : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_pipelineView_savedViews_savedViewsStatusBarComponent__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
      savedView: savedView,
      parentSavedView: savedView.getParentSavedView(),
      canCreateSavedView: pipeline.getIsEditable() && _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__["default"].isAccessAllowed(pipeline, 'SavedView', 'CREATE'),
      canUpdateSavedView: pipeline.getIsEditable() && _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__["default"].isAccessAllowed(pipeline, 'SavedView', 'UPDATE'),
      isUnsaved: isUnsaved,
      isEditAreaVisible: isEditorOpen,
      isInHeadsUp: isInHeadsUp,
      onClearClick: e => {
        e.stopPropagation();
        (0,_pipelineView_savedViews_clearView__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(savedView, pipeline);
      },
      onCreateClick: e => {
        e.stopPropagation();
        if (!(pipeline.getIsEditable() && _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__["default"].isAccessAllowed(pipeline, 'SavedView', 'CREATE'))) {
          return;
        }
        (0,_widgets_modal_textboxModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
          allowEmpty: false,
          placeholderText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.UNSAFE_getString('Set the name of the new view'),
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('saved_view_create_modal_title'),
          el: document.createElement('div')
        }).then(_ref4 => {
          let {
            confirmClicked,
            enteredText
          } = _ref4;
          if (!confirmClicked) return;
          track('createSavedViewNameEntered');
          pipeline.getSavedViewsManager().createSavedViewFromUnsaved(enteredText);
        });
      },
      onDiscardChangesClick: e => {
        e.stopPropagation();
        (0,_pipelineView_savedViews_clearView__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(savedView, pipeline);
      },
      onHeadsUpClick: () => {
        if (_headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__["default"].isInHeadsUp(savedView.getViewKey())) {
          track('removeSavedViewFromInbox');
          _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__["default"].removeSection(savedView.getViewKey());
        } else {
          track('addSavedViewToInbox');
          _headsUp_headsUpMasterController__WEBPACK_IMPORTED_MODULE_35__["default"].addSection(savedView.getViewKey(), pipeline.key());
        }
      },
      onSaveChangesClick: e => {
        e.stopPropagation();
        if (pipeline.getIsEditable() && _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__["default"].isAccessAllowed(pipeline, 'SavedView', 'UPDATE')) {
          (0,_pipelineView_savedViews_overwriteSavedViewWithNewSettings__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(savedView, pipeline, savedView.getParentSavedView()?.getName() || null);
        }
      },
      onStarClick: e => {
        e.stopPropagation();
        savedView.setStarState(!savedView.isStarred());
      },
      onToggleClick: e => {
        e.stopPropagation();
        setIsEditorOpen(isOpen => !isOpen);
      }
    }), isEditorOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_pipelineView_savedViews_savedViewsEditArea_savedViewsEditAreaComponent__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      ref: savedViewEditorRef,
      savedView: savedView,
      onEditAreaHeightChange: height => {
        setSavedViewEditorHeight(height);
      },
      doneCallback: () => {
        setIsEditorOpen(false);
      }
    }) : undefined]
  }), [savedView, pipeline, isUnsaved, isEditorOpen, isInHeadsUp, savedViewEditorRef, track]);
  const [sidePanel, setSidePanel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const boxSubscriptionResult = (0,_useLocalBoxEdits__WEBPACK_IMPORTED_MODULE_31__/* .useBoxSubscriptions */ .T)();
  const {
    boxesBySection,
    subscribeToBoxes,
    unsubscribeFromBoxes,
    boxIdsSetBySection
  } = boxSubscriptionResult;
  const {
    undo,
    redo,
    appendNewUndo
  } = (0,_useUndo__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z)(savedView);
  const [mutations, setMutations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const addNewMutation = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(mutation => {
    const destroy = () => setMutations(mutations => mutations.filter(m => m.rowKey !== mutation.rowKey || m.sectionKey !== mutation.sectionKey || m.type !== mutation.type));
    setMutations(mutations => [...mutations, {
      destroy,
      ...mutation
    }]);
  }, []);
  const sheetData = (0,streaksheet__WEBPACK_IMPORTED_MODULE_42__/* .useSheetData */ .S)({
    mutations,
    columnAndOverviewData,
    refreshColumnAndOverviewData() {
      const currentRefresh = overviewRefreshCounter.current++;
      if (overviewRefreshCounter.current === currentRefresh) {
        spreadsheetApi.getColumns().then(columns => {
          if (overviewRefreshCounter.current === currentRefresh) {
            setColumns(columns);
          }
        });
        spreadsheetApi.getGroups().then(groups => {
          if (overviewRefreshCounter.current === currentRefresh) {
            setGroups(groups);
          }
        });
      }
    },
    dataHandler: {
      requestTriggerDistance: 100,
      requestLimitDistance: 100,
      dropLimitDistance: 100,
      dropTriggerDistance: 100,
      firstPageCursor: spreadsheetApi.FirstPageCursor,
      lastPageCursor: spreadsheetApi.LastPageCursor,
      async getRows(sectionKey, cursor, offset, limit, _abortSignal) {
        const response = await spreadsheetApi.getRows(sectionKey, cursor, offset, limit);
        if (!currentGroupResponses.current[sectionKey]) {
          currentGroupResponses.current[sectionKey] = {};
        }
        Object.assign(currentGroupResponses.current[sectionKey], response.rows.reduce((accRows, currRow) => {
          accRows[currRow.key] = response;
          return accRows;
        }, {}));
        return response;
      },
      loadRows(sectionKey, rows) {
        const boxes = rows.map(row => row.data);

        // It may happen that we get a row from the API that's already in the sheet.  This could happen because:
        //  1. We created that row locally, so we optimistically show the row in the sheet
        //  2. There have been writes to the row which changed which page it's on in the server
        const dedupedResults = boxes.filter(box => {
          const boxIdSet = boxIdsSetBySection[sectionKey];
          return !(boxIdSet && boxIdSet.has(box?.getId()));
        });
        subscribeToBoxes(sectionKey, dedupedResults);
      },
      unloadRows(sectionKey, boxIds) {
        unsubscribeFromBoxes(sectionKey, boxIds);
      }
    },
    doesCellHaveData: (rowKey, sectionKey, columnKey, box) => {
      const savedViewcolumn = savedView.getSavedViewColumn(columnKey);
      if (!savedViewcolumn) {
        return false;
      }
      const column = savedViewcolumn.getColumn();
      return !!column.getCopyValue(box).text.length;
    },
    copyHandler: {
      getCopyStrings: values => {
        return values.map(row => row.map(_ref5 => {
          let {
            row: box,
            columnKey
          } = _ref5;
          const column = savedView.getSavedViewColumn(columnKey).getColumn();
          const copyValue = column.getCopyValue(box);
          return {
            internal: JSON.stringify(copyValue),
            external: copyValue.text
          };
        }));
      }
    },
    onWrite: values => {
      let editActions = [];
      const undoGroup = [];
      for (const {
        row: box,
        updates
      } of values) {
        for (const write of updates) {
          switch (write.type) {
            case 'CLEAR':
              {
                const {
                  columnKey
                } = write;
                const column = savedView.getSavedViewColumn(columnKey).getColumn();
                if (box.isNew()) {
                  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_11__["default"].track('batch edit a new box');
                  continue;
                }
                const newCopyValue = {
                  text: ''
                };
                editActions = editActions.concat(column.getEditActions(box, newCopyValue));
                undoGroup.push({
                  oldCopyValue: column.getCopyValue(box),
                  newCopyValue,
                  columnKey: column.getColumnKey(),
                  boxKey: box.key()
                });
                break;
              }
            case 'PASTE':
              {
                const {
                  columnKey,
                  internal,
                  external
                } = write;
                const column = savedView.getSavedViewColumn(columnKey).getColumn();
                let newCopyValue = null;
                if (internal) {
                  try {
                    newCopyValue = JSON.parse(internal);
                  } catch (err) {
                    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
                      err,
                      level: 'error'
                    });
                    continue;
                  }
                } else {
                  if (!external) {
                    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
                      err: new Error('internal and external clipboards empty'),
                      level: 'error'
                    });
                    continue;
                  }
                  newCopyValue = {
                    text: external
                  };
                }
                editActions = editActions.concat(column.getEditActions(box, newCopyValue));
                undoGroup.push({
                  oldCopyValue: column.getCopyValue(box),
                  newCopyValue,
                  columnKey: column.getColumnKey(),
                  boxKey: box.key()
                });
                break;
              }
            default:
              {
                (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .Z)(write);
              }
          }
        }
      }
      const boxes = [];
      const boxIdsToSave = new Set();
      editActions.forEach(editAction => {
        (0,_core_models_pipeline_columns_applyEditAction__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .Z)(editAction);
        const {
          model: box
        } = editAction;
        if (!boxIdsToSave.has(box.getId())) {
          boxIdsToSave.add(box.getId());
          boxes.push(box);
        }
      });
      appendNewUndo(undoGroup);
      _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.save(boxes);
      return true;
    },
    onExpandColumns: columnsKeys => {
      columnsKeys.forEach(columnKey => {
        savedView.getSavedViewColumn(columnKey)?.show();
      });
    },
    onReorderColumn: (columnKey, targetColumnIndex) => {
      // Subtracting 1 to account for the collapse/box-select column
      savedView.getSavedViewColumn(columnKey)?.setNewAbsoluteIndex(targetColumnIndex - 1);
    },
    onResizeColumn: (columnKey, width) => {
      savedView.getSavedViewColumn(columnKey)?.setWidth(width);
      savedView.getSavedViewColumn(columnKey)?.saveWidth();
    },
    onSwapColumns: (columnKeyA, columnKeyB) => {
      const columnOrderSettings = savedView.getColumnOrderSettings();
      const columnAIndex = columnOrderSettings.data.findIndex(key => key === columnKeyA);
      const columnBIndex = columnOrderSettings.data.findIndex(key => key === columnKeyB);
      if (columnAIndex < 0) {
        throw new Error(`Attempted to swap column that does not exist: ${columnKeyA}`);
      }
      if (columnBIndex < 0) {
        throw new Error(`Attempted to swap column that does not exist: ${columnKeyB}`);
      }
      if (columnBIndex > columnAIndex) {
        savedView.getSavedViewColumn(columnKeyA)?.moveRight();
      } else {
        savedView.getSavedViewColumn(columnKeyA)?.moveLeft();
      }
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_41___default()();
    spreadsheetApi.getRefreshStream().takeUntilBy(stopper).onValue(() => {
      streakSheetRef.current?.refreshRows();
    });
    return stopper.destroy;
  }, [spreadsheetApi]);
  const currentGroupResponses = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
  const goToBox = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((box, groupKey) => {
    _boxView_BoxViewNextPreviousManagerV2__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.goToBoxWithThisList(box, groupKey,
    // its possible for a locally created box to be the
    // first row in a group, so this guards against
    // that situation
    currentGroupResponses.current[groupKey] ? currentGroupResponses.current[groupKey][box.getId()] : {
      rows: [{
        data: box,
        key: box.getId()
      }]
    }, groups || [], spreadsheetApi, sheetData.getIndexForRow(groupKey, box.getId()));
  }, [groups, sheetData, spreadsheetApi]);
  const createLocalBox = (0,_useLocalBoxCreate__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z)({
    pipeline,
    savedView,
    boxSubscriptionResult,
    currentGroupResponses,
    groups,
    streakSheet: streakSheetRef,
    sheetData,
    addNewMutation
  });
  (0,_useLocalBoxEdits__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z)(savedView, boxesBySection, {
    // TODO: move this into the sheet so we can make this faster
    // to do in bulk
    onGroupChange: (box, newGroupKeys) => {
      // We need to make sure that the sections' row counts and
      // the local edits stay consistent.  This method here
      // makes it so all state updates in the callback are a part
      // of a single render, which eliminates undesirable interstitial
      // states, if, for example, the sections are updated and the sheet
      // re-renders before the edits are applied to the local rows.
      react_dom__WEBPACK_IMPORTED_MODULE_3__.unstable_batchedUpdates(() => {
        const boxId = box.getId();
        const oldGroupKeys = Object.entries(boxIdsSetBySection).filter(_ref6 => {
          let [_, boxIdsSet] = _ref6;
          return boxIdsSet?.has(box.getId());
        }).map(_ref7 => {
          let [groupId] = _ref7;
          return groupId;
        });
        const removedGroupKeys = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.difference)(oldGroupKeys, newGroupKeys);
        const addedGroupKeys = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.difference)(newGroupKeys, oldGroupKeys);
        if (removedGroupKeys.length === 0 && addedGroupKeys.length === 0) {
          return;
        }
        for (const oldGroupKey of removedGroupKeys) {
          addNewMutation({
            type: 'DELETE',
            sectionKey: oldGroupKey,
            rowKey: boxId
          });
        }
        for (const newGroupKey of addedGroupKeys) {
          addNewMutation({
            type: 'ADD',
            sectionKey: newGroupKey,
            rowKey: boxId,
            rowData: box
          });
        }
        const oldGroupKeySet = new Set(removedGroupKeys);
        const newGroupKeySet = new Set(addedGroupKeys);
        setGroups(groups => (0,immer__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .ZP)(groups, draft => {
          draft?.filter(group => oldGroupKeySet.has(group.key)).forEach(group => {
            group.count--;
          });
          draft?.filter(group => newGroupKeySet.has(group.key)).forEach(group => {
            group.count++;
          });
        }));
      });
    },
    onDelete: (box, sectionKeys) => {
      sectionKeys.forEach(sectionKey => {
        addNewMutation({
          type: 'DELETE',
          sectionKey,
          rowKey: box.getId()
        });
        if (streakSheetRef.current?.isRowSelected(sectionKey, box.getId())) {
          streakSheetRef.current?.setRowSelection(sectionKey, box.getId(), false);
        }
      });
    }
  });
  const styles = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => ({
    cell: (base, _ref8) => {
      let {
        columnIndex,
        isRowSelected,
        sectionKey
      } = _ref8;
      const baseStyle = {
        ...base,
        backgroundColor: isRowSelected ? 'var(--streak-app-primary-hover)' : undefined,
        borderBottom: 'none',
        borderLeft: '1px solid var(--streak-black-divider)',
        borderRight: 'none',
        borderTop: '1px solid var(--streak-black-divider)',
        lineHeight: base.height + 'px',
        paddingLeft: '8px',
        overflow: 'hidden'
      };
      if (columnIndex !== 0) {
        return baseStyle;
      }
      const group = (groups || []).find(group => group.key === sectionKey);
      const color = group?.colors.backgroundColor || 'var(--streak-app-primary)';
      return {
        ...baseStyle,
        borderLeft: `4px solid ${color}`,
        paddingLeft: 0
      };
    },
    cellEditMode: base => ({
      ...base,
      backgroundColor: 'white',
      borderLeft: '2px solid var(--streak-app-primary-light)',
      borderRight: '2px solid var(--streak-app-primary-light)',
      borderTop: '2px solid var(--streak-app-primary-light)',
      borderBottom: '2px solid var(--streak-app-primary-light)',
      borderRadius: '4px',
      height: 'auto'
    }),
    columnHeaderCellContainer: (base, _ref9) => {
      let {
        columnIndex
      } = _ref9;
      return {
        ...base,
        borderBottom: 'none',
        borderLeft: columnIndex > 0 ? '1px solid var(--streak-black-divider)' : 'none',
        borderRight: 'none',
        borderTop: 'none',
        cursor: 'pointer',
        lineHeight: base.height + 'px',
        overflow: 'visibile',
        ...(columnIndex === 0 ? {
          paddingLeft: 4
        } : {})
      };
    },
    columnHeadersContainer: base => ({
      ...base,
      borderBottom: '1px solid var(--streak-black-divider)',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      fontSize: '11px',
      fontWeight: 500
    }),
    columnReorderIndicator: base => ({
      ...base
    }),
    columnReorderOverlay: base => ({
      ...base
    }),
    columnResizeHandle: (base, _ref10) => {
      let {
        isDragging,
        isHovering
      } = _ref10;
      return {
        ...base,
        backgroundColor: isDragging || isHovering ? 'var(--streak-app-primary)' : 'transparent',
        width: 3,
        transform: 'translateX(-1px)'
      };
    },
    columnResizeIndicator: base => ({
      ...base
    }),
    grid: base => ({
      ...base
    }),
    copiedRegionBackground: base => ({
      ...base
    }),
    copiedRegionForeground: base => ({
      ...base,
      borderBottom: '2px dashed #4285f4',
      borderLeft: '2px dashed #4285f4',
      borderRight: '2px dashed #4285f4',
      borderTop: '2px dashed #4285f4',
      height: Number(base.height) + 1,
      width: Number(base.width) + 1
    }),
    highlightedRowBackground: base => ({
      ...base,
      backgroundColor: '#f1ffff',
      height: Number(base.height) + 1
    }),
    highlightedRowForeground: base => ({
      ...base
    }),
    primarySelectedCellBackground: base => ({
      ...base,
      backgroundColor: 'transparent'
    }),
    primarySelectedCellForeground: base => ({
      ...base,
      borderBottom: '2px solid #39F',
      borderLeft: '2px solid #39F',
      borderRight: '2px solid #39F',
      borderTop: '2px solid #39F',
      height: Number(base.height) + 1,
      width: Number(base.width) + 1
    }),
    sectionHeaderCellContainer: (base, _ref11) => {
      let {
        columnIndex,
        sectionKey
      } = _ref11;
      // TODO: we need to figure out how to construct a map of (sectionKey => color) for
      // perf reasons
      const group = (groups || []).find(group => group.key === sectionKey);
      const color = group?.colors.backgroundColor || 'black';
      return {
        ...base,
        borderBottom: 'none',
        borderLeft: columnIndex === 0 ? `4px solid ${color}` : '1px solid var(--streak-black-divider)',
        borderRight: 'none',
        borderTop: `4px solid ${color}`
      };
    },
    sectionHeadersContainer: base => ({
      ...base,
      backgroundColor: 'var(--streak-solid-black-surface)'
    }),
    selectionBackground: base => ({
      ...base,
      backgroundColor: 'rgba(160, 195, 255, 0.2)',
      height: Number(base.height) + 1,
      width: Number(base.width) + 1
    }),
    selectionForeground: base => ({
      ...base,
      borderBottom: '1px solid #4285f4',
      borderLeft: '1px solid #4285f4',
      borderRight: '1px solid #4285f4',
      borderTop: '1px solid #4285f4',
      height: Number(base.height) + 1,
      width: Number(base.width) + 1
    })
  }), [groups]);
  const onUnhandledKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_ref12 => {
    let {
      domEvent,
      cellKeys
    } = _ref12;
    const {
      key,
      metaKey,
      ctrlKey,
      altKey
    } = domEvent;

    /*
    This condition prevents special keys like 'Delete', 'Alt', 'PageUp', etc
    from activating the cell to go into edit mode.
    */
    if (key.length !== 1) {
      return;
    }
    if (key === 'z' && (0,_lib_utils_isModKeyPressed__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z)(domEvent.nativeEvent)) {
      if (domEvent.shiftKey) {
        redo();
      } else {
        undo();
      }
      return;
    }
    if (key === 'y' && (0,_lib_utils_isModKeyPressed__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .Z)(domEvent.nativeEvent)) {
      redo();
      return;
    }
    if (key === 'r' && altKey) {
      spreadsheetApi.refresh().then(() => setMutations([]));
      return;
    }
    if (metaKey || ctrlKey) {
      return;
    }
    if (key && cellKeys.type === 'ROW_DATA_CELL') {
      const {
        sectionKey,
        columnKey,
        rowKey
      } = cellKeys;
      domEvent.stopPropagation();
      domEvent.preventDefault();
      streakSheetRef.current?.enterEditMode(sectionKey, columnKey, rowKey, key);
    }
  }, [redo, undo, spreadsheetApi]);
  const initialEditCopyValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const onEnterEditMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_ref13 => {
    let {
      keys,
      cancel
    } = _ref13;
    initialEditCopyValueRef.current = null;
    if (keys.type === 'COLUMN_HEADER_CELL') {
      cancel();
      return;
    }
    if (keys.type === 'SECTION_HEADER_CELL') {
      // section header cell
      if (keys.columnKey === _constants__WEBPACK_IMPORTED_MODULE_40__/* .SELECT_COLLAPSE_COLUMN_KEY */ .j) {
        if (totalRowsSelected > 0) {
          streakSheetRef.current?.setRowSelectionOverSection(keys.sectionKey, !(streakSheetRef.current.isSectionSelected(keys.sectionKey) === 'all'));
        }
        cancel();
      }
      return;
    }
    const box = sheetData.getRowData(keys.sectionKey, keys.rowKey);
    if (!box) {
      return;
    }
    if (keys.columnKey === _constants__WEBPACK_IMPORTED_MODULE_40__/* .SELECT_COLLAPSE_COLUMN_KEY */ .j) {
      streakSheetRef.current?.setRowSelection(keys.sectionKey, keys.rowKey, !streakSheetRef.current.isRowSelected(keys.sectionKey, keys.rowKey));
      cancel();
    }
    const column = box.getPipeline().getColumnManager().getColumn(keys.columnKey);
    if (!column) {
      return;
    }
    if (!column.isEditable()) {
      cancel();
    }
    if (!column.isCellDataLoaded(box)) {
      cancel();
    }
    column.onEnterEditMode(box, {
      cancel
    });
    initialEditCopyValueRef.current = column.getCopyValue(box);
  }, [sheetData, totalRowsSelected]);
  const onExitEditMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_ref14 => {
    let {
      keys
    } = _ref14;
    if (keys.type !== 'ROW_DATA_CELL') {
      return;
    }
    const {
      sectionKey,
      columnKey,
      rowKey
    } = keys;
    const box = sheetData.getRowData(sectionKey, rowKey);
    if (!box) {
      return;
    }
    const column = box.getPipeline().getColumnManager().getColumn(columnKey);
    if (!column) {
      return;
    }
    const editedCell = streakSheetRef.current?.getEditedCell();
    if (!editedCell) {
      // editedCell refers to the cell we're exiting edit from (this runs before we leave edit mode)
      throw new Error('onExitEditMode being called while getEditedCell is not defined is an invalid state');
    }
    const boxKey = box?.key();

    // Force the cell to commit its value immediate so we can flush values
    // which may not be otherwise commited until the input's unmount (which could
    // otherwise happen after onExitEditMode and the display component is rendered
    // if the sheet is telling the input to leave edit mode.
    editedCell.commit();
    const oldCopyValue = initialEditCopyValueRef.current;
    const newCopyValue = column.getCopyValue(box);
    if (!oldCopyValue) {
      // If creating a new cell, the oldCopyValue will be null
      return;
    }
    if (!(0,_core_models_pipeline_columns_areCopyValuesEqual__WEBPACK_IMPORTED_MODULE_47__/* ["default"] */ .Z)(oldCopyValue, newCopyValue)) {
      const undoGroup = [{
        oldCopyValue,
        newCopyValue,
        columnKey,
        boxKey
      }];
      appendNewUndo(undoGroup);
    }
  }, [appendNewUndo, sheetData]);
  const onAsyncAction = (0,_useOnAsyncAction__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)();
  const visualiztionType = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(pipeline, savedView.getViewKey(), sv => sv.getVisualizationType());
  const groupData = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(columnAndOverviewData.sections.map(section => {
    return [section.key, {
      count: section.rowCountHint
    }];
  })), [columnAndOverviewData.sections]);
  const groupbarJumpToGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(groupId => {
    streakSheetRef.current.scrollToSection(groupId);
  }, []);
  const expandGroupbar = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    streakSheetRef.current?.expandGroupBar();
  }, []);
  const groupbarTrack = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    // TODO
  }, []);
  const [selectedBoxesCount, setSelectedBoxesCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  function eventPropagationStopper(event) {
    // Prevent the event from bubbling up to Gmail which over-eagerly reads too many
    // properties of the event object unnecessarily and can hurt performance.
    event.stopPropagation();
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsxs)("div", {
    onMouseOver: eventPropagationStopper,
    onMouseOut: eventPropagationStopper,
    onMouseMove: eventPropagationStopper,
    className: "jsx-2066632461" + " " + "pipelineView2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_context__WEBPACK_IMPORTED_MODULE_37__/* .StreakSheetContext */ .Ry.Provider, {
      value: streakSheetRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_context__WEBPACK_IMPORTED_MODULE_37__/* .SetSelectionContext */ .e2.Provider, {
        value: {
          setSelectionAnchor,
          setSelectionOverRange,
          totalRowsSelected
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_context__WEBPACK_IMPORTED_MODULE_37__/* .CreateBoxContext */ .Ck.Provider, {
          value: createLocalBox,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_context__WEBPACK_IMPORTED_MODULE_37__/* .GoToBoxContext */ .cb.Provider, {
            value: goToBox,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsxs)(_context__WEBPACK_IMPORTED_MODULE_37__/* .SectionHeaderCellContext */ .Bn.Provider, {
              value: groups,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_components_toolbar_PipelineToolbar__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                selectedBoxesCount: selectedBoxesCount,
                getSelectedBoxes: () => {
                  if (!streakSheetRef.current) {
                    throw new Error('Tried to get selcted boxes with no valid streakSheet reference');
                  }
                  return streakSheetRef.current.getSelectedRows();
                },
                toggleSavedViewEditor: () => setIsEditorOpen(isOpen => !isOpen),
                toggleSidePanel: sidePanel => {
                  setSidePanel(_sidePanel => {
                    if (_sidePanel === sidePanel) {
                      return null;
                    }
                    return sidePanel;
                  });
                },
                refresh: async () => {
                  await spreadsheetApi.refresh();
                  setMutations([]);
                },
                addNewBox: () => {
                  if (!_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_8__["default"].isAccessAllowed(pipeline, 'Box', 'CREATE')) {
                    return;
                  }
                  (0,_services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)().then(limitObj => {
                    if (limitObj.isOverLimit) {
                      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)({
                        feature: 'unlimitedBoxes',
                        team: pipeline.getTeam(),
                        pipeline: pipeline
                      });
                    } else {
                      if (!groups || groups.length === 0) {
                        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_36__["default"].showMessage(_services_locale_locale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.getString('new_box_in_empty_table'));
                        return;
                      }
                      createLocalBox();
                    }
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)("div", {
                className: "jsx-2066632461" + " " + "tableBody",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                  children: _ref15 => {
                    let {
                      height,
                      width
                    } = _ref15;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsxs)("div", {
                      style: {
                        height,
                        width
                      },
                      className: "jsx-2066632461",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)("div", {
                        style: {
                          height,
                          width: sidePanel != null ? width - 250 : width,
                          display: 'inline-block',
                          verticalAlign: 'top'
                        },
                        className: "jsx-2066632461",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(streaksheet__WEBPACK_IMPORTED_MODULE_42__/* .StreakSheet */ .R, {
                          ref: streakSheetRef,
                          Cell: _components_Cell__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
                          ColumnHeaderCell: _components_ColumnHeaderCell__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
                          SectionHeaderCell: _components_SectionHeaderCell__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
                          defaultRowHeight: 28,
                          frozenColumns: 0,
                          height: height,
                          initialScrollTop: initialScrollTop,
                          initialScrollLeft: initialScrollLeft,
                          groupbar: visualiztionType === 'GROUP_BAR' ? {
                            renderGroupBar: height => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_GroupBarWrapper__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                              height: height,
                              expandGroupbar: expandGroupbar,
                              pipeline: pipeline,
                              stickyGroupRowIndex: 0 /* TODO */,
                              jumpToGroup: groupbarJumpToGroup,
                              track: groupbarTrack,
                              savedView: savedView,
                              groupData: groupData
                            }),
                            maxHeight: _pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_20__/* .MAX_GROUPBAR_HEIGHT */ .A6 + 20,
                            minHeight: _pipelineView_visualization_groupbar_newGroupbar__WEBPACK_IMPORTED_MODULE_20__/* .MIN_GROUPBAR_HEIGHT */ .ax + 20 // TODO
                          } : visualiztionType === 'NO_VISUALIZATION' ? undefined : {
                            renderGroupBar: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_components_visualizations_VisualizationWrapper__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                              pipeline: pipeline,
                              savedView: savedView
                            }),
                            maxHeight: 300,
                            minHeight: 300
                          },
                          topSectionHeight: savedViewEditorHeight + (savedView.isDefault() ? 0 : 36),
                          topSection: savedViewEditArea,
                          rowHoveredClassName: _constants__WEBPACK_IMPORTED_MODULE_40__/* .STREAK_ROW_HOVER_CLASSNAME */ .s,
                          onAsyncAction: onAsyncAction,
                          onEnterEditMode: onEnterEditMode,
                          onExitEditMode: onExitEditMode,
                          onOpenSearch: () => {
                            // eslint-disable-next-line no-console
                            console.log('Open search');
                          },
                          onRowSelectionChanged: rowManager => {
                            setTotalRowsSelected(rowManager.getTotalRowsSelected());
                            setSelectedBoxesCount(rowManager.getTotalRowsSelected());
                          },
                          onScroll: onScroll,
                          onUnsupportedOperation: unsupportedOperation => {
                            // eslint-disable-next-line no-console
                            console.warn('Unsupported operation:', unsupportedOperation);
                          },
                          onUnhandledKeyDown: onUnhandledKeyDown,
                          sheetData: sheetData,
                          renderColumnsExpandButton: renderColumnsExpandButton,
                          styles: styles,
                          width: sidePanel != null ? width - 250 : width
                        })
                      }), sidePanel != null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)("div", {
                        style: {
                          height,
                          width: 250,
                          display: 'inline-block',
                          verticalAlign: 'top'
                        },
                        className: "jsx-2066632461",
                        children: sidePanel === 'DATA_VALIDATOR' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_boxValidators_sidebar_boxValidatorSidebar__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                          pipeline: pipeline,
                          closeCallback: () => setSidePanel(null)
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)(_components_NewsfeedWrapper__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                          pipeline: pipeline,
                          closeCallback: () => setSidePanel(null)
                        })
                      }) : null]
                    });
                  }
                })
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_39__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2066632461",
      children: [".pipelineView2.jsx-2066632461{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;font-family:Roboto;font-size:14px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;}", ".tableBody.jsx-2066632461{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}", "input[type='radio'].jsx-2066632461{margin:0 0.2em;}"]
    })]
  });
}
const PipelineViewActual = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(_PipelineViewActual));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RemoteSpreadsheetApi)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36106);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23392);
/* harmony import */ var _core_models_pipeline_savedViews_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46384);
/* harmony import */ var _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10187);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_1__, _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__, _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_3__]);
([_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_1__, _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__, _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// interface PipelineAndViewInfo {
//   pipeline: any;
//   viewInfo: {
//     viewKey: string;
//     name: string;
//     settings: any;
//   };
// }

class RemoteSpreadsheetApi {
  _currentColumnAndOverviewData = null;
  FirstPageCursor = 'first';
  LastPageCursor = 'last';
  constructor(_ref) {
    let {
      pipeline,
      savedViewKey: savedViewKeyParam
    } = _ref;
    const savedViewKey = savedViewKeyParam || _core_models_pipeline_savedViews_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_VIEW_KEY */ .E;
    this._savedViewKey = savedViewKey;
    this._pipeline = pipeline;
    this._pipelineKey = pipeline.key();
  }
  onColumnUpdateStream() {
    throw new Error('Method not implemented.');
  }
  getSectionUpdateStream() {
    throw new Error('Method not implemented.');
  }
  getRefreshStream() {
    throw new Error('Method not implemented');
  }
  getColumns() {
    throw new Error('Method not implemented.');
  }
  getGroups() {
    throw new Error('Method not implemented.');
  }

  // TODO: We might need a way to invalidate this cache if we need to refetch view info (e.g.
  // pipeline name change, view settings change, etc.)
  _getViewInfo = (() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.once)(() => Promise.all([
  // TODO: Update this endpoint to include the "default" view
  _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(`pipelines/${this._pipelineKey}/views`, {}, {
    prefix: '/api/v2/',
    templateUrl: 'pipelines/KEY/views'
  }).getPromise(), _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(`pipelines/${this._pipelineKey}`, {}).getPromise()]).then(_ref2 => {
    let [results, pipeline] = _ref2;
    const viewInfo = results.results.find(_ref3 => {
      let {
        viewKey
      } = _ref3;
      return viewKey === this._savedViewKey;
    }) || {};
    return {
      viewInfo,
      pipeline
    };
  })))();
  getCurrentColumnAndOverviewData() {
    return this._currentColumnAndOverviewData;
  }
  getColumnAndOverviewDataStream() {
    // TODO(mitch): This needs to hook into realtimes.
    return kefir__WEBPACK_IMPORTED_MODULE_4__["default"].fromPromise(this.getColumnAndOverviewData());
  }
  getFirstPage(groupKey) {
    const group = this._currentColumnAndOverviewData?.sections.find(group => group.key === groupKey);
    if (!group) {
      throw new Error('attempted to get last page of a group that does not currently exist');
    }
    return this.getRows(groupKey, this.FirstPageCursor, 0, 50);
  }
  getLastPage(groupKey) {
    const group = this._currentColumnAndOverviewData?.sections.find(group => group.key === groupKey);
    if (!group) {
      throw new Error('attempted to get last page of a group that does not currently exist');
    }
    return this.getRows(groupKey, this.LastPageCursor, 0, 50);
  }
  async getColumnAndOverviewData() {
    const {
      viewInfo,
      pipeline
    } = await this._getViewInfo();
    // TODO: Figure out what the "reporting" column type is that causes this to break for some pipelines
    // TODO: Update this endpoint to include summary info
    const {
      results: savedViewGroups
    } = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(`pipelines/${pipeline.key}/views/${viewInfo.viewKey}/groups`, {}, {
      prefix: '/api/v2/',
      templateUrl: 'pipelines/KEY/views/KEY/groups'
    }).getPromise();

    // TODO: Do this without constructing a Pipeline model
    const pipelineModel = new _core_models_pipeline_pipeline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(pipeline);
    const savedView = (0,_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_1__.getSavedViewFromViewKey)(pipelineModel, viewInfo.viewKey);
    const savedViewColumns = savedView.getSavedViewColumns();
    const columns = savedViewColumns.map(savedViewColumn => {
      const column = savedViewColumn.getColumn();
      if (!column) throw new Error('savedViewColumn without a column');
      return {
        isFrozen: savedViewColumn.isFrozen(),
        isHidden: false,
        isResizable: true,
        key: savedViewColumn.getColumnKey(),
        name: savedViewColumn.displayNameText(),
        type: column.getColumnType(),
        width: savedViewColumn.getWidth()
      };
    });
    this._currentColumnAndOverviewData = {
      columns,
      pipelineName: pipeline.name,
      savedViewName: viewInfo.name,
      sections: savedViewGroups.map(group => ({
        groupName: group.groupByValue,
        isHidden: false,
        key: group.groupByKeyEncoded,
        rowCount: group.count,
        summaries: {}
      }))
    };
    return this._currentColumnAndOverviewData;
  }
  async getRows(sectionKey, cursor, offset, limit) {
    const {
      viewInfo,
      pipeline
    } = await this._getViewInfo();
    const {
      boxes: rows,
      previousPageCursor,
      nextPageCursor
    } = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get(`pipelines/${pipeline.key}/views/${viewInfo.viewKey}/groups/${sectionKey}/boxes`, {
      mode: 1,
      cursor,
      limit,
      offset
    }, {
      prefix: '/api/v2/',
      templateUrl: 'pipelines/KEY/views/KEY/groups/KEY/boxes'
    }).getPromise();
    return {
      rows,
      previousPageCursor,
      nextPageCursor
    };
  }

  // TODO: Implement this
  async search(query,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  direction,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  startPosition,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  includeContext // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
    return {
      positions: [],
      contexts: [],
      reachedEnd: true
    };
  }
  destroy() {
    // TODO: I put this here to make the linter happy, but we might drop this
    // destroy method entirely if we really don't need it.
  }
  async refresh() {
    await this._pipeline.refreshWithPromise();
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Cell)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./extensions/common/js/core/models/pipeline/columns/columnTypes/helpers/Checkbox.tsx
var Checkbox = __webpack_require__(70858);
// EXTERNAL MODULE: ./extensions/common/js/modules/pipelineView2/context.ts
var context = __webpack_require__(25788);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/pipelineView2/components/SelectRowCell.tsx





function SelectRowCell(_ref) {
  let {
    rowKey,
    sectionKey,
    isRowSelected
  } = _ref;
  const {
    setSelectionAnchor,
    setSelectionOverRange,
    totalRowsSelected
  } = (0,react.useContext)(context/* SetSelectionContext */.e2);
  const streakSheetRef = (0,react.useContext)(context/* StreakSheetContext */.Ry);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: totalRowsSelected > 0 ? 'flex' : 'none',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    className: "jsx-197005029" + " " + "select__cell",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
      checked: isRowSelected,
      onChange: _ref2 => {
        let {
          checked,
          originalEvent
        } = _ref2;
        if (originalEvent.shiftKey) {
          setSelectionOverRange({
            rowKey,
            sectionKey
          });
        } else {
          setSelectionAnchor({
            rowKey,
            sectionKey
          });
          streakSheetRef.current?.setRowSelection(sectionKey, rowKey, checked);
        }
      },
      size: 'sm'
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
      id: "197005029",
      children: [".streak__row_hovered .select__cell.jsx-197005029{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}"]
    })]
  });
}
// EXTERNAL MODULE: ./extensions/common/js/modules/pipelineView2/constants.ts
var constants = __webpack_require__(39687);
;// CONCATENATED MODULE: ./extensions/common/js/modules/pipelineView2/components/Cell.tsx






function _Cell(props, ref) {
  const {
    pipeline
  } = (0,react.useContext)(context/* PipelineContext */.re);
  const inputRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, () => ({
    commit() {
      const commit = inputRef.current?.commit;
      if (!commit) {
        return false;
      }
      commit();
      return true;
    }
  }));
  (0,react.useEffect)(() => {
    if (props.isEditing && props.initialEditQueuedValue) {
      const input = inputRef.current?.getWrappedInput();
      input && input.setAndFocus && input.setAndFocus(props.initialEditQueuedValue);
    } else if (props.isEditing) {
      const input = inputRef.current?.getWrappedInput();
      input && input.focus && input.focus();
    }
  }, [props.isEditing, props.initialEditQueuedValue]);
  const box = props.rowData;
  if (!box) {
    return null;
  }
  if (props.columnKey === constants/* SELECT_COLLAPSE_COLUMN_KEY */.j) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectRowCell, {
      ...props
    });
  }
  if (props.columnKey === 'add-column') {
    return null;
  }
  const column = pipeline.getColumnManager().getColumn(props.columnKey);
  if (!column) {
    return null;
  }
  if (props.isEditing && !column.isEditable()) {
    throw new Error('Cannot display an edit state on an uneditable column');
  }
  if (props.isEditing) {
    return column.renderSpreadsheetInput(box, props, inputRef);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      overflowWrap: 'break-word',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      height: '100%'
    },
    children: column.renderSpreadsheetDisplay(box, props)
  });
}
const Cell = /*#__PURE__*/react.memo(/*#__PURE__*/(0,react.forwardRef)(_Cell));
/* harmony default export */ const components_Cell = (Cell);

/***/ }),

/***/ 66853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _pipelineView_spreadsheetPlugins_columnHeaderHelpers_columnHeaderButton2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _hooks_useSavedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42241);
/* harmony import */ var _components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71174);
/* harmony import */ var _components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94366);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82792);
/* harmony import */ var _setupModal_presentation_insertColumnMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9890);
/* harmony import */ var _services_ui_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56781);
/* harmony import */ var _core_models_pipeline_columns_columnTypes_helpers_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70858);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25788);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39687);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pipelineView_spreadsheetPlugins_columnHeaderHelpers_columnHeaderButton2__WEBPACK_IMPORTED_MODULE_1__, _setupModal_presentation_insertColumnMenu__WEBPACK_IMPORTED_MODULE_6__, _services_ui_ui__WEBPACK_IMPORTED_MODULE_7__]);
([_pipelineView_spreadsheetPlugins_columnHeaderHelpers_columnHeaderButton2__WEBPACK_IMPORTED_MODULE_1__, _setupModal_presentation_insertColumnMenu__WEBPACK_IMPORTED_MODULE_6__, _services_ui_ui__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function ColumnHeaderCell(_ref) {
  let {
    columnKey,
    isSheetSelected
  } = _ref;
  const {
    pipeline,
    savedViewKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_9__/* .PipelineContext */ .re);
  const streakSheet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_9__/* .StreakSheetContext */ .Ry);
  const lastSavedViewColumn = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(pipeline, savedViewKey, savedView => {
    const columns = savedView.getSavedViewColumns();
    return columns[columns.length - 1];
  });
  const savedViewColumn = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(pipeline, savedViewKey, savedView => {
    return savedView.getSavedViewColumn(columnKey);
  });
  if (columnKey === _constants__WEBPACK_IMPORTED_MODULE_11__/* .SELECT_COLLAPSE_COLUMN_KEY */ .j) {
    const isChecked = isSheetSelected === 'all';
    const shouldShowCheckbox = isSheetSelected !== 'none';
    if (!shouldShowCheckbox) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(MasterCollapseExpand, {});
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      style: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_core_models_pipeline_columns_columnTypes_helpers_Checkbox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        checked: isSheetSelected === 'some' ? '-' : isChecked,
        onChange: _ref2 => {
          let {
            checked
          } = _ref2;
          return streakSheet.current?.setSheetSelection(checked);
        }
      })
    });
  }
  if (columnKey === 'add-column') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(AddColumnButton, {
      savedViewColumn: lastSavedViewColumn
    });
  }
  const column = savedViewColumn?.getColumn();
  if (savedViewColumn && !column) {
    // TODO: Figure out how this situation can be possible?
    // The savedViewColumn is present but the backing column
    // isn't.
    return null;
  }
  if (!savedViewColumn) {
    // This condition makes sense, as when the above hook fires
    // it can fire with the enclosed columnKey which has since
    // been removed from the saved view.
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pipelineView_spreadsheetPlugins_columnHeaderHelpers_columnHeaderButton2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    pipeline: pipeline,
    savedViewColumn: savedViewColumn
    // eslint-disable-next-line no-console
    ,
    onColumnsReordered: () => console.log('onColumnsReordered')
    // eslint-disable-next-line no-console
    ,
    onWillOpen: () => console.log('onWillOpen')
    // eslint-disable-next-line no-console
    ,
    onWillClose: () => console.log('onWillClose')
  });
}, (prevProps, nextProps) => prevProps.columnKey === nextProps.columnKey && prevProps.isSheetSelected === nextProps.isSheetSelected));
function AddColumnButton(_ref3) {
  let {
    savedViewColumn
  } = _ref3;
  const buttonComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(_ref4 => {
    let {
      onMouseDown,
      ...rest
    } = _ref4;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...rest,
        onMouseUp: onMouseDown,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: "add",
          variant: "text",
          isCircle: true,
          isOutline: true,
          size: "s"
        })
      })
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_5__/* .MenuButton */ .j2, {
    positionOptions: {
      position: 'left',
      vAlign: 'top'
    },
    ButtonComponent: buttonComponent,
    menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_setupModal_presentation_insertColumnMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      savedViewColumn: savedViewColumn,
      sortedPipelines: _services_ui_ui__WEBPACK_IMPORTED_MODULE_7__["default"].getSortedPipelines(),
      track: () => {}
    })
  });
}
function MasterCollapseExpand() {
  const {
    pipeline,
    savedViewKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_9__/* .PipelineContext */ .re);
  const savedView = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(pipeline, savedViewKey, savedView => savedView);
  const anySavedGroupOpen = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(pipeline, savedViewKey, savedView => {
    return savedView.getSavedViewGroups().some(group => group.isOpen());
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    style: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      onClick: () => {
        anySavedGroupOpen ? savedView.closeAllGroups() : savedView.openAllGroups();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        style: {
          width: 24,
          height: 24
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          name: anySavedGroupOpen ? 'arrow_drop_down' : 'arrow_right',
          variant: "inline",
          accent: "muted"
        })
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NewsfeedWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _widgets_feedList_feedListViewController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35756);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_feedList_feedListViewController__WEBPACK_IMPORTED_MODULE_1__]);
_widgets_feedList_feedListViewController__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function NewsfeedWrapper(_ref) {
  let {
    pipeline,
    closeCallback
  } = _ref;
  const [feedlistViewController] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => new _widgets_feedList_feedListViewController__WEBPACK_IMPORTED_MODULE_1__["default"]({
    model: pipeline,
    closeCallback
  }));
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    feedlistViewController.activate();
    const element = feedlistViewController.getElement()[0];
    containerRef.current.appendChild(element);
    return () => feedlistViewController.destroy();
  }, [feedlistViewController]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: containerRef,
    className: "bb_feed",
    style: {
      background: '#f1f1f1'
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ SectionHeaderCell)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
// EXTERNAL MODULE: ./extensions/common/js/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(71174);
// EXTERNAL MODULE: ./extensions/common/js/components/IconButton/IconButton.tsx
var IconButton = __webpack_require__(94366);
// EXTERNAL MODULE: ./extensions/common/js/core/models/pipeline/columns/columnTypes/helpers/Checkbox.tsx
var Checkbox = __webpack_require__(70858);
// EXTERNAL MODULE: ./extensions/common/js/services/locale/locale.ts + 37 modules
var locale = __webpack_require__(35091);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/button/streakButton.tsx
var streakButton = __webpack_require__(22682);
// EXTERNAL MODULE: ./extensions/common/js/modules/pipelineView2/constants.ts
var constants = __webpack_require__(39687);
// EXTERNAL MODULE: ./extensions/common/js/modules/pipelineView2/context.ts
var context = __webpack_require__(25788);
// EXTERNAL MODULE: ./.yarn/__virtual__/styled-jsx-virtual-9c4bfc1357/0/cache/styled-jsx-npm-5.0.2-aff4f13ebf-96b4507d41.zip/node_modules/styled-jsx/style.js
var style = __webpack_require__(81518);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./extensions/common/js/widgets/react/material/menu/index.ts + 6 modules
var menu = __webpack_require__(82792);
// EXTERNAL MODULE: ./extensions/common/js/widgets/spreadsheet/groupSummaryMenu.tsx
var groupSummaryMenu = __webpack_require__(37346);
// EXTERNAL MODULE: ./extensions/common/js/services/tracker/useTracker.tsx
var useTracker = __webpack_require__(70989);
// EXTERNAL MODULE: ./extensions/common/js/modules/pipelineView2/hooks/useSavedView.ts
var useSavedView = __webpack_require__(42241);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/pipelineView2/components/GroupSummary.tsx












function GroupSummary(_ref) {
  let {
    columnKey,
    groupId
  } = _ref;
  const {
    pipeline,
    savedViewKey
  } = (0,react.useContext)(context/* PipelineContext */.re);
  const {
    summaryFunction,
    result,
    savedViewColumn
  } = (0,useSavedView/* useSavedViewGroupSummary */.l)(pipeline, savedViewKey, columnKey, groupId);
  const track = (0,useTracker/* default */.ZP)('groupSummary');
  const button = (0,react.useCallback)(buttonProps => {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: "jsx-154959611" + " " + "group_summary_btn_wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(streakButton/* default */.ZP, {
        ...buttonProps,
        accent: "muted",
        disabledHover: true,
        variant: "text",
        className: classnames_default()({
          isEmpty: summaryFunction == null
        }),
        children: [result != null && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "jsx-154959611" + " " + "summary_result",
          children: result
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "jsx-154959611" + " " + "summary_function",
          children: summaryFunction ? locale/* default */.Z.getString(`summary_type_${summaryFunction}`) : locale/* default */.Z.getString('summary_heading')
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
          accent: "muted",
          variant: "text",
          name: "arrow_drop_down",
          className: "summary_dropdown",
          size: "ms"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((style_default()), {
        id: "154959611",
        children: [".group_summary_btn_wrapper.jsx-154959611{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".group_summary_btn_wrapper.jsx-154959611 .streak__button:hover{background-color:unset;}", ".group_summary_btn_wrapper.jsx-154959611 .isEmpty{visibility:hidden;}", ".group_summary_btn_wrapper.jsx-154959611:hover .isEmpty{visibility:visible;}", ".group_summary_btn_wrapper.jsx-154959611 .summary_dropdown{visibility:hidden;}", ".group_summary_btn_wrapper.jsx-154959611:hover .summary_dropdown{visibility:visible;}", ".group_summary_btn_wrapper.jsx-154959611 .summary_result.jsx-154959611{font-weight:bold;color:var(--streak-black-primary);padding-right:4px;}", ".group_summary_btn_wrapper.jsx-154959611 .summary_function.jsx-154959611{font-size:11px;}", ".group_summary_btn_wrapper.jsx-154959611:hover .summary_function.jsx-154959611{-webkit-text-decoration:underline;text-decoration:underline;}"]
      })]
    });
  }, [result, summaryFunction]);
  if (!savedViewColumn) {
    return null;
  }
  if (!savedViewColumn.isSummarizable()) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* MenuButton */.j2, {
    ButtonComponent: button,
    menu: /*#__PURE__*/(0,jsx_runtime.jsx)(groupSummaryMenu/* default */.Z, {
      savedViewColumn: savedViewColumn,
      track: track
    })
  });
}
function areEqual(prev, next) {
  return prev.savedView === next.savedView && prev.columnKey === next.columnKey;
}
/* harmony default export */ const components_GroupSummary = (/*#__PURE__*/(0,react.memo)(GroupSummary, areEqual));
;// CONCATENATED MODULE: ./extensions/common/js/modules/pipelineView2/components/SectionHeaderCell.tsx










/* harmony default export */ const SectionHeaderCell = (/*#__PURE__*/(0,react.memo)(function SectionHeaderCell(props) {
  const {
    pipeline,
    savedViewKey
  } = (0,react.useContext)(context/* PipelineContext */.re);
  const createBox = (0,react.useContext)(context/* CreateBoxContext */.Ck);
  const {
    totalRowsSelected
  } = (0,react.useContext)(context/* SetSelectionContext */.e2);
  const savedView = (0,react.useMemo)(() => pipeline.getSavedViewsManager().getCachedSavedView(savedViewKey), [pipeline, savedViewKey]);
  const group = (0,react.useMemo)(() => savedView?.getSavedViewGroup(props.sectionKey), [savedView, props.sectionKey]);
  const groups = (0,react.useContext)(context/* SectionHeaderCellContext */.Bn);
  const streakSheet = (0,react.useContext)(context/* StreakSheetContext */.Ry);
  if (props.columnKey === 'add-column') {
    return null;
  }
  if (props.columnKey === constants/* SELECT_COLLAPSE_COLUMN_KEY */.j) {
    const isChecked = props.isSectionSelected === 'all';
    const shouldShowCheckbox = totalRowsSelected > 0;
    if (!shouldShowCheckbox) {
      if (!group) {
        return null;
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.Z, {
          onClick: () => {
            group.toggleOpen(!group.isOpen());
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: 24,
              height: 24
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.Z, {
              name: group.isOpen() ? 'arrow_drop_down' : 'arrow_right',
              variant: "inline",
              accent: "muted"
            })
          })
        })
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
        checked: props.isSectionSelected === 'some' ? '-' : isChecked,
        onChange: () => {
          streakSheet.current?.setRowSelectionOverSection(props.sectionKey, !isChecked);
        }
      })
    });
  }
  if (props.columnKey === 'property|name') {
    const group = groups.find(s => s.key === props.sectionKey);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: '8px'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          backgroundColor: group.colors.backgroundColor,
          borderRadius: '4px',
          lineHeight: '24px',
          color: group.colors.foregroundColor,
          padding: '2px 4px',
          marginRight: '4px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          fontFamily: 'Product Sans, Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '16px',
          letterSpacing: '0.25px'
        },
        children: group.displayName
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* default */.ZP, {
        style: {
          flexShrink: 0
        },
        isRound: true,
        accent: "muted",
        title: locale/* default */.Z.getString('add_pipeline_item_to', {
          target: group.displayName
        }),
        onClick: () => {
          createBox && createBox({
            groupKey: props.sectionKey
          });
        },
        variant: "inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(streakButton/* StreakButtonIcon */.A2, {
          materialIconName: "add"
        })
      })]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_GroupSummary, {
    savedView: savedView,
    columnKey: props.columnKey,
    groupId: props.sectionKey
  });
}, (prevProps, nextProps) => prevProps.sectionKey === nextProps.sectionKey && prevProps.columnKey === nextProps.columnKey && prevProps.isSectionSelected === nextProps.isSectionSelected));

/***/ }),

/***/ 68913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PipelineActions)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ShareLink_ShareLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _core_models_pipeline_savedViews_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(46384);
/* harmony import */ var _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5568);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_button_fabButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42693);
/* harmony import */ var _widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93675);
/* harmony import */ var _widgets_react_material_chip_chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60468);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82792);
/* harmony import */ var _pipelineView_pipelineToolbar_pipelineActionsAddMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12609);
/* harmony import */ var _pipelineView_pipelineToolbar_pipelineActionsOverflowMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30176);
/* harmony import */ var _pipelineView_pipelineToolbar_pipelineNameInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27658);
/* harmony import */ var _components_ShareLink_showStreakShareLinkTooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45593);
/* harmony import */ var _widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84347);
/* harmony import */ var _pipelineView_pipelineToolbar_exportPipelineNewsfeedToCSV__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12639);
/* harmony import */ var _lib_utils_useStopper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(49376);
/* harmony import */ var _PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36106);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(25788);
/* harmony import */ var _pipelineView_sharing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24377);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pipelineView_pipelineToolbar_pipelineActionsAddMenu__WEBPACK_IMPORTED_MODULE_13__, _pipelineView_pipelineToolbar_pipelineActionsOverflowMenu__WEBPACK_IMPORTED_MODULE_14__, _pipelineView_pipelineToolbar_pipelineNameInput__WEBPACK_IMPORTED_MODULE_15__, _components_ShareLink_showStreakShareLinkTooltip__WEBPACK_IMPORTED_MODULE_16__, _pipelineView_pipelineToolbar_exportPipelineNewsfeedToCSV__WEBPACK_IMPORTED_MODULE_18__, _PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_20__, _pipelineView_sharing__WEBPACK_IMPORTED_MODULE_22__]);
([_pipelineView_pipelineToolbar_pipelineActionsAddMenu__WEBPACK_IMPORTED_MODULE_13__, _pipelineView_pipelineToolbar_pipelineActionsOverflowMenu__WEBPACK_IMPORTED_MODULE_14__, _pipelineView_pipelineToolbar_pipelineNameInput__WEBPACK_IMPORTED_MODULE_15__, _components_ShareLink_showStreakShareLinkTooltip__WEBPACK_IMPORTED_MODULE_16__, _pipelineView_pipelineToolbar_exportPipelineNewsfeedToCSV__WEBPACK_IMPORTED_MODULE_18__, _PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_20__, _pipelineView_sharing__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























function PipelineActions(_ref) {
  let {
    pipeline,
    savedViewKey,
    toggleSavedViewEditor,
    addNewBox,
    refresh,
    toggleSidePanel
  } = _ref;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)('pipeline2.toolbar');
  const stopper = (0,_lib_utils_useStopper__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)([pipeline, savedViewKey]);
  const activeSavedView = pipeline.getSavedViewsManager().getSavedView(savedViewKey);
  const groups = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_21__/* .SectionHeaderCellContext */ .Bn);
  if (!activeSavedView) {
    throw new Error('could not find saved view');
  }
  if (!groups) {
    throw new Error('must render pipelineactions in section header cell context');
  }
  const isPipelineView = savedViewKey === _core_models_pipeline_savedViews_constants__WEBPACK_IMPORTED_MODULE_24__/* .DEFAULT_VIEW_KEY */ .E;
  const pipelineOrSavedViewCopy = {
    pipeline: isPipelineView ? 'pipeline' : 'saved view'
  };
  const pipelineKey = pipeline.key();
  const deepLink = `streak.com/a/${isPipelineView ? `pipelines/${pipelineKey}` : `pipelines/${pipelineKey}/${savedViewKey}`}`;
  const [isSavedViewEditAreaOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const shareLinkButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const closeTooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const savedViewKey = activeSavedView.getViewKey();
    const isPipelineView = savedViewKey === _core_models_pipeline_savedViews_constants__WEBPACK_IMPORTED_MODULE_24__/* .DEFAULT_VIEW_KEY */ .E;
    const pipelineOrSavedViewCopy = {
      pipeline: isPipelineView ? 'pipeline' : 'saved view'
    };
    closeTooltipRef.current = (0,_components_ShareLink_showStreakShareLinkTooltip__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(shareLinkButtonRef.current, pipeline.getId(), _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('share_pipeline_link_button_streak_tooltip_title', pipelineOrSavedViewCopy), _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('share_pipeline_link_button_streak_tooltip_body', pipelineOrSavedViewCopy));
  }, [pipeline, activeSavedView]);
  const addButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(buttonProps => {
    const {
      className,
      ...rest
    } = buttonProps;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
      className: "jsx-2177621576" + " " + "add_button_container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_fabButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('streak__pipelineToolbar_addItem', className),
        materialIconName: "add",
        micro: true,
        ...rest
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
        id: "2177621576",
        children: [".add_button_container.jsx-2177621576 .streak__pipelineToolbar_addItem{background-color:var(--streak-solid-white);box-shadow: 0 0 2px var(--streak-black-divider), 0 2px 4px var(--streak-black-disabled);}", ".add_button_container.jsx-2177621576 .streak__pipelineToolbar_addItem .mdl-icon{background:linear-gradient(var(--streak-color-gradient-flat),var(--streak-warning));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}"]
      })]
    });
  }, []);
  const leaveFeedback = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Compose.openNewComposeView().then(composeView => {
      composeView.setToRecipients(['new-pipeline-view-feedback@streak.com']);
      composeView.setSubject('Feedback on new pipeline UI');
    });
  }, []);
  const goToOldUi = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    localStorage.setItem('leftNewSpreadsheet', 'true');
    (0,_PipelineView2MasterController__WEBPACK_IMPORTED_MODULE_20__.leaveNewSpreadsheetExperiment)();
  }, []);
  const overflowButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    ...buttonProps,
    className: "streak__pipelineToolbar_overflow",
    materialIconName: "more_vert",
    onClick: () => {
      track('overflowButton');
    }
  }), [track]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: "jsx-1983894696" + " " + "pipeline_toolbar__container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: "jsx-1983894696" + " " + "pipeline_toolbar_left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_pipelineView_pipelineToolbar_pipelineNameInput__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        pipeline: pipeline,
        track: (eventName, extra) => track(eventName, extra)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        className: "jsx-1983894696" + " " + "pipeline_toolbar_summary_text",
        children: `${groups.reduce((acc, cur) => acc + cur.count, 0)} ${_services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('summary_type_count')}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: "jsx-1983894696" + " " + "pipeline_toolbar_actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper leave_feedback_btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_chip_chip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            micro: true,
            noPadding: true,
            materialIconName: "edit"
          }),
          onClick: () => leaveFeedback(),
          hasOutline: true,
          value: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('leave_feedback')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_chip_chip__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          className: "old_ui_btn",
          onClick: () => goToOldUi(),
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_icon_icon__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            micro: true,
            noPadding: true,
            materialIconName: "input"
          }),
          hasOutline: true,
          value: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('old_ui')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "vert_grey_line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          materialIconName: "refresh",
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('refresh_tooltip'),
          onClick: () => {
            track('refreshSpreadsheetClicked');
            refresh();
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          className: "streak__pipelineToolbar_savedViews",
          materialIconName: "filter_list",
          alwaysShowBackground: isSavedViewEditAreaOpen,
          alwaysOpaque: isSavedViewEditAreaOpen,
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('savedViews_tooltip'),
          onClick: () => {
            track('toggleSavedViewsEditAreaClicked');
            toggleSavedViewEditor();
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "vert_grey_line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        ref: shareLinkButtonRef,
        onClick: () => {
          if (closeTooltipRef.current) {
            closeTooltipRef.current();
          }
        },
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_ShareLink_ShareLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          link: deepLink,
          header: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('share_pipeline_link_header', pipelineOrSavedViewCopy),
          body: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('share_pipeline_link_body', pipelineOrSavedViewCopy),
          track: track,
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('share_pipeline_link_button_tooltip', pipelineOrSavedViewCopy),
          onCopy: () => {
            navigator.clipboard.writeText(`https://www.${deepLink}`).then(() => {
              _services_butterBarManager__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage({
                messageKey: 'shareLinkCopiedNotification',
                text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('share_pipeline_link_copied_notification', pipelineOrSavedViewCopy),
                buttons: [{
                  onClick: () => {
                    window.open('https://support.streak.com/en/articles/4037275-share-links-with-your-team-members');
                  },
                  title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('learn_more')
                }],
                time: 3000
              });
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_pipelineView_sharing__WEBPACK_IMPORTED_MODULE_22__/* .PipelineShareMenu */ .Vh, {
          pipeline: pipeline
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "jsx-1983894696" + " " + "toolbar_button_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_12__/* .MenuButton */ .j2, {
          ButtonComponent: overflowButton,
          positionOptions: {
            position: 'top',
            hAlign: 'right',
            vAlign: 'bottom'
          },
          menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_pipelineView_pipelineToolbar_pipelineActionsOverflowMenu__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            pipeline: pipeline,
            activeSavedView: activeSavedView,
            pipelineSpreadsheetViewController: {
              resize: () => {
                //todo
              }
            },
            toggleNewsfeed: () => {
              toggleSidePanel('NEWSFEED');
            },
            onNewsfeedExportClick: () => {
              (0,_pipelineView_pipelineToolbar_exportPipelineNewsfeedToCSV__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(pipeline, stopper.toPromise());
            },
            toggleBoxValidator: () => {
              toggleSidePanel('DATA_VALIDATOR');
            },
            track: track
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_12__/* .MenuButton */ .j2, {
        ButtonComponent: addButton,
        positionOptions: {
          position: 'top',
          hAlign: 'right',
          vAlign: 'bottom'
        },
        menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_pipelineView_pipelineToolbar_pipelineActionsAddMenu__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          pipeline: pipeline,
          onNewRowClick: () => {
            _redux_storeSingleton__WEBPACK_IMPORTED_MODULE_5__.store.dispatch({
              type: 'SPREADSHEET/TOOLBAR/NEW_ROW_CLICKED'
            });
            addNewBox();
          },
          track: track
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1983894696",
      children: [".pipeline_toolbar__container.jsx-1983894696{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px 0;min-height:40px;}", ".pipeline_toolbar_left.jsx-1983894696{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;min-width:0;padding-right:5px;}", ".pipeline_toolbar_summary_text.jsx-1983894696{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0 8px;color:var(--streak-black-secondary);}", ".pipeline_toolbar_actions.jsx-1983894696{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-right:16px;min-width:0;}", ".toolbar_button_wrapper.jsx-1983894696{margin:0 3px;}", ".leave_feedback_btn.jsx-1983894696 .mdl-chip{border-color:var(----streak-app-primary-light);color:var(--streak-app-primary-light);}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PipelineToolbarContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _SelectedBoxesActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39225);
/* harmony import */ var _PipelineActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68913);
/* harmony import */ var _permissionBanner_PipelineViewPermissionBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72748);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25788);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SelectedBoxesActions__WEBPACK_IMPORTED_MODULE_1__, _PipelineActions__WEBPACK_IMPORTED_MODULE_2__, _permissionBanner_PipelineViewPermissionBanner__WEBPACK_IMPORTED_MODULE_3__]);
([_SelectedBoxesActions__WEBPACK_IMPORTED_MODULE_1__, _PipelineActions__WEBPACK_IMPORTED_MODULE_2__, _permissionBanner_PipelineViewPermissionBanner__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function PipelineToolbarContainer(_ref) {
  let {
    getSelectedBoxes,
    selectedBoxesCount,
    toggleSavedViewEditor,
    toggleSidePanel,
    addNewBox,
    refresh
  } = _ref;
  const groups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__/* .SectionHeaderCellContext */ .Bn);
  const {
    pipeline,
    savedViewKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__/* .PipelineContext */ .re);
  const doesUserHaveSelection = selectedBoxesCount > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [doesUserHaveSelection ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SelectedBoxesActions__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      selectedBoxesCount: selectedBoxesCount,
      getSelectedBoxes: getSelectedBoxes,
      pipeline: pipeline,
      savedViewKey: savedViewKey,
      groups: groups
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PipelineActions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      pipeline: pipeline,
      savedViewKey: savedViewKey,
      toggleSavedViewEditor: toggleSavedViewEditor,
      addNewBox: addNewBox,
      refresh: refresh,
      toggleSidePanel: toggleSidePanel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_permissionBanner_PipelineViewPermissionBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      pipeline: pipeline
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81518);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24067);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70989);
/* harmony import */ var _widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93675);
/* harmony import */ var _widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82792);
/* harmony import */ var _widgets_react_material_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14091);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81641);
/* harmony import */ var _pipelineView_pipelineToolbar_deleteBoxes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74043);
/* harmony import */ var _pipelineExport_showPipelineExportDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12094);
/* harmony import */ var _tasks_followUpTasksMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(730);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38672);
/* harmony import */ var _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63374);
/* harmony import */ var _globalAgenda_agendaMasterController__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47464);
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47208);
/* harmony import */ var _services_moveBoxHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(39362);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69980);
/* harmony import */ var _AddToSequenceButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68092);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7961);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25788);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_2__, _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_10__, _pipelineView_pipelineToolbar_deleteBoxes__WEBPACK_IMPORTED_MODULE_11__, _pipelineExport_showPipelineExportDrawer__WEBPACK_IMPORTED_MODULE_12__, _services_data_data__WEBPACK_IMPORTED_MODULE_14__, _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_15__, _globalAgenda_agendaMasterController__WEBPACK_IMPORTED_MODULE_16__, _core_model__WEBPACK_IMPORTED_MODULE_17__, _services_moveBoxHelper__WEBPACK_IMPORTED_MODULE_18__, _AddToSequenceButton__WEBPACK_IMPORTED_MODULE_20__]);
([_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_2__, _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_10__, _pipelineView_pipelineToolbar_deleteBoxes__WEBPACK_IMPORTED_MODULE_11__, _pipelineExport_showPipelineExportDrawer__WEBPACK_IMPORTED_MODULE_12__, _services_data_data__WEBPACK_IMPORTED_MODULE_14__, _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_15__, _globalAgenda_agendaMasterController__WEBPACK_IMPORTED_MODULE_16__, _core_model__WEBPACK_IMPORTED_MODULE_17__, _services_moveBoxHelper__WEBPACK_IMPORTED_MODULE_18__, _AddToSequenceButton__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const SelectedBoxesActions = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref) {
  let {
    getSelectedBoxes,
    selectedBoxesCount,
    pipeline,
    savedViewKey,
    groups
  } = _ref;
  const savedView = pipeline.getSavedViewsManager().getSavedView(savedViewKey);
  if (!savedView) {
    throw new Error('could not find saved view');
  }
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('selectedBoxes.toolbar');
  const streakSheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_22__/* .StreakSheetContext */ .Ry);
  const menuButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const overflowButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    ...buttonProps,
    className: "streak__pipelineToolbar_overflow",
    materialIconName: "more_vert",
    onClick: () => {
      track('overflowButton');
    }
  }), [track]);
  const onDeleteClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    const selectedBoxes = await getSelectedBoxes();
    try {
      for await (const update of (0,_pipelineView_pipelineToolbar_deleteBoxes__WEBPACK_IMPORTED_MODULE_11__/* .deleteBoxes */ .f)(selectedBoxes, pipeline, track)) {
        if (update === 'confirm-clicked') {
          // do nothing
        }
      }
      streakSheet.current?.focus();
    } catch (e) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP)({
        err: e,
        level: 'error'
      });
    }
  }, [getSelectedBoxes, pipeline, streakSheet, track]);
  const onExportClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    const selectedBoxes = await getSelectedBoxes();
    (0,_pipelineExport_showPipelineExportDrawer__WEBPACK_IMPORTED_MODULE_12__/* .showPipelineExportDrawer */ .j)(pipeline, savedView, selectedBoxes);
  }, [getSelectedBoxes, pipeline, savedView]);
  const onTaskSelected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async taskDueDate => {
    const selectedBoxes = await getSelectedBoxes();
    const taskText = _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('task_menu_button_task_text');
    const tasks = selectedBoxes.map(box => {
      const newTask = _services_data_data__WEBPACK_IMPORTED_MODULE_14__["default"].addNewTask(box.key(), taskText);
      newTask.set('dueDate', taskDueDate);
      newTask.setDone(false, false);
      return newTask;
    });
    track(`tasks.followUp.tasksCreated`);
    _core_model__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.saveAll(tasks, null, true);
    const messageKey = 'followUpTasksMenu';
    const localeKey = 'task_menu_button_butter_with_link';
    _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage({
      buttons: [{
        onClick: () => {
          track(`tasks.followUp.butterBarClicked`);
          if (selectedBoxes.length === 1) {
            _tasks_tasksMoleManager__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.openWithTaskActive(selectedBoxes[0], tasks[0]);
          } else {
            _globalAgenda_agendaMasterController__WEBPACK_IMPORTED_MODULE_16__["default"].openGlobalAgenda();
          }
          _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].hideMessage(messageKey);
        },
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('task_menu_button_view')
      }],
      hideOnViewChanged: true,
      messageKey,
      text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString(localeKey),
      time: 5000
    });
  }, [getSelectedBoxes, track]);
  const onMoveToPipeline = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async newPipeline => {
    const boxes = await getSelectedBoxes();
    let trackEvent;
    if (boxes.length > 1) {
      trackEvent = 'moveBoxesToNewPipeline';
      const savedBoxes = boxes.filter(box => !box.isNew());
      _services_moveBoxHelper__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.moveBoxes(pipeline, newPipeline, savedBoxes);
    } else if (boxes.length === 1) {
      trackEvent = 'moveBoxToNewPipeline';
      _services_moveBoxHelper__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.moveBox(boxes[0], newPipeline);
    } else {
      throw new Error('No box/boxes to move.');
    }
    track(trackEvent, {
      oldPipelineKey: pipeline.key(),
      newPipelineKey: pipeline.key()
    });
  }, [getSelectedBoxes, pipeline, track]);
  const totalCheckedBoxes = selectedBoxesCount;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
    className: "jsx-3812589137" + " " + "selected_boxes_container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
      className: "jsx-3812589137" + " " + "selected_boxes_wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        materialIconName: "clear",
        onClick: () => streakSheet.current?.setSheetSelection(false)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        className: "jsx-3812589137" + " " + "total_boxes_indicator",
        children: `${totalCheckedBoxes} ${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('selected')}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        className: "jsx-3812589137" + " " + "vertical_separator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(ChangeStageButton, {
        disabled: false,
        pipeline: pipeline,
        savedView: savedView,
        getSelectedBoxes: getSelectedBoxes,
        groups: groups
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        className: "jsx-3812589137" + " " + "vertical_separator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span", {
        className: "jsx-3812589137" + " " + "actions_container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_AddToSequenceButton__WEBPACK_IMPORTED_MODULE_20__/* .AddToSequenceButton */ .AY, {
          pipeline: pipeline,
          getSelectedBoxes: getSelectedBoxes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_iconButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          className: "streak__pipelineToolbar_deleteBoxes",
          materialIconName: "delete",
          tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('delete_box_tooltip'),
          disabled: !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_2__["default"].isAccessAllowed(pipeline, 'Box', 'DELETE'),
          onClick: () => {
            track('deleteBoxesClicked');
            onDeleteClick();
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuButton */ .j2, {
          ButtonComponent: overflowButton,
          ref: menuButtonRef,
          menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .Dropdown */ .Lt, {
            className: "streak__pipelineToolbar_overflow_menu",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuList */ .qy, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .SubMenuItem */ .vE, {
                className: "streak__pipelineToolbar_moveBoxes",
                streakIconName: "folder_move",
                menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(MoveBoxesMenuDropdown, {
                  onItemChosen: pipeline => {
                    streakSheet.current?.focus();
                    onMoveToPipeline(pipeline);
                  },
                  pipeline: pipeline
                }),
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('moveBoxes_menu_text')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuItem */ .sN, {
                streakIconName: "sheets",
                disabled: !pipeline.canExport() || !_services_accessManager_accessManager__WEBPACK_IMPORTED_MODULE_2__["default"].isAccessAllowed(pipeline, 'ExportJob', 'CREATE'),
                onItemChosen: () => {
                  track('exportBoxesClicked');
                  onExportClick();
                },
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('exportBoxes_tooltip')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .SubMenuItem */ .vE, {
                materialIconName: "alarm_add",
                menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_tasks_followUpTasksMenu__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                  track: (eventName, extraProps) => track(eventName, extraProps),
                  onTaskSelected: taskDueDate => {
                    onTaskSelected(taskDueDate);
                  },
                  reposition: () => {
                    menuButtonRef.current?.reposition();
                  },
                  closeMenu: () => {
                    menuButtonRef.current?.close();
                  }
                }),
                children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('tasks_mole_quickReminder_text')
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3812589137",
      children: [".selected_boxes_container.jsx-3812589137{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:40px;min-width:200px;padding:8px 0px;}", ".selected_boxes_wrapper.jsx-3812589137{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;background-color:var(--streak-primary-hover);border-radius:4px;}", ".total_boxes_indicator.jsx-3812589137{font-weight:600;padding:0 8px;}", ".actions_container.jsx-3812589137{padding-left:8px;}", ".vertical_separator.jsx-3812589137{content:' ';border-left:1px solid var(--streak-black-divider);height:20px;}"]
    })]
  });
});
function MoveBoxesMenuDropdown(_ref2) {
  let {
    onItemChosen,
    pipeline: currentPipeline
  } = _ref2;
  const {
    compatiblePipelines,
    incompatiblePipelines
  } = _services_moveBoxHelper__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z.getPipelinesByMoveCompatibility(currentPipeline);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .Dropdown */ .Lt, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuList */ .qy, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        className: "mdl-menu__header",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('move_box_to_pipeline') + '...'
      }), _services_data_data__WEBPACK_IMPORTED_MODULE_14__["default"].getAllPipelines().length === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuItem */ .sN, {
        disabled: true,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('move_box_no_other_pipelines')
      }), compatiblePipelines.map(pipeline => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuItem */ .sN, {
        onItemChosen: () => {
          onItemChosen(pipeline);
        },
        materialIconName: pipeline.getIcon(),
        children: pipeline.displayNameText()
      }, pipeline.key())), incompatiblePipelines.map(pipeline => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuItem */ .sN, {
        disabled: true,
        materialIconName: pipeline.getIcon(),
        children: `${pipeline.displayNameText()} (${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('different_team')})`
      }, pipeline.key()))]
    })
  });
}
function ChangeStageButton(_ref3) {
  let {
    disabled,
    pipeline,
    getSelectedBoxes,
    groups
  } = _ref3;
  const streakSheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_22__/* .StreakSheetContext */ .Ry);
  const numberOfStages = groups.filter(group => streakSheet.current?.isSectionSelected(group.key) !== 'none').length;
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)('changeStageButton');
  const button = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(buttonProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_button_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    ...buttonProps,
    tooltip: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('changeStageOfBoxes_tooltip'),
    normalCaps: true,
    disabled: disabled,
    className: "streak__button_downarrow",
    onClick: () => {
      track('changeStageButtonClicked');
    },
    children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('num_stages', {
      num: numberOfStages
    })
  }), [track, numberOfStages, disabled]);
  const onStageChosen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async newStage => {
    const selectedBoxes = await getSelectedBoxes();
    react_dom__WEBPACK_IMPORTED_MODULE_19__.unstable_batchedUpdates(() => {
      const {
        newBoxes,
        existingBoxes
      } = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.groupBy)(selectedBoxes, box => box.isNew() ? 'newBoxes' : 'existingBoxes');
      if (newBoxes) {
        newBoxes.forEach(box => {
          box.set('stageKey', newStage.key());
          box.save();
        });
      }
      if (existingBoxes) {
        if (existingBoxes.length > 1) {
          existingBoxes.forEach(box => box.set('stageKey', newStage.key()));
          _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.save(selectedBoxes);
        } else {
          existingBoxes.forEach(box => {
            box.set('stageKey', newStage.key());
            box.save();
          });
        }
      }
    });
  }, [getSelectedBoxes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuButton */ .j2, {
    className: "streak__pipelineToolbar_changeStage",
    ButtonComponent: button,
    menu: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .Dropdown */ .Lt, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuList */ .qy, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
          className: "mdl-menu__header",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('change_stage') + '...'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("hr", {}), pipeline.getStages().map(stageOption => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_widgets_react_material_menu__WEBPACK_IMPORTED_MODULE_7__/* .MenuItem */ .sN, {
          reducedPadding: true,
          onItemChosen: async () => {
            await onStageChosen(stageOption);
            streakSheet.current?.setSheetSelection(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
            className: "mdl-button--stage-button-color-swatch",
            style: {
              backgroundColor: stageOption.getColor().backgroundColor
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
            children: stageOption.displayNameText()
          })]
        }, stageOption.key()))]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedBoxesActions);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ VisualizationWrapper)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76430);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pipelineView_visualization_visualizationRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31953);
/* harmony import */ var _hooks_useSavedView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42241);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70989);
/* harmony import */ var _hooks_useAsyncTransformedData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96543);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72905);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64167);
/* harmony import */ var _widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27337);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35091);
/* harmony import */ var _reports2_reportsMasterController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45665);
/* harmony import */ var _reports2_reportsDataManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44891);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50452);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pipelineView_visualization_visualizationRenderer__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAsyncTransformedData__WEBPACK_IMPORTED_MODULE_5__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__, _reports2_reportsMasterController__WEBPACK_IMPORTED_MODULE_10__, _reports2_reportsDataManager__WEBPACK_IMPORTED_MODULE_11__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__]);
([_pipelineView_visualization_visualizationRenderer__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAsyncTransformedData__WEBPACK_IMPORTED_MODULE_5__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__, _reports2_reportsMasterController__WEBPACK_IMPORTED_MODULE_10__, _reports2_reportsDataManager__WEBPACK_IMPORTED_MODULE_11__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function VisualizationWrapper(_ref) {
  let {
    pipeline,
    savedView
  } = _ref;
  const visualizationType = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(pipeline, savedView.getViewKey(), sv => sv.getVisualizationType());
  const visualizationChartConfig = (0,_hooks_useSavedView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(pipeline, savedView.getViewKey(), sv => sv.getVisualizationChartConfig());
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('visualization');
  const result = (0,_hooks_useAsyncTransformedData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(pipeline, savedView.getViewKey());
  if (result.type === 'loading') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    style: {
      backgroundColor: 'white'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_pipelineView_visualization_visualizationRenderer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      pipeline: pipeline,
      savedViewKey: savedView.getViewKey(),
      visualizationChartType: visualizationType,
      visualizationChartConfig: visualizationChartConfig,
      addToReports: appliedUserConfig => {
        const trackingInfo = {
          savedViewKey: savedView.getViewKey(),
          visualizationType: savedView.getVisualizationType(),
          visualizationConfig: appliedUserConfig
        };
        if (!_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_12__.EnabledFeatures.isFeatureEnabled('reports')) {
          track('visualizationTriedToAddToReportsWithoutReportsFeature', trackingInfo);
          (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
            feature: 'reports',
            team: pipeline.getTeam(),
            pipeline: pipeline
          });
          return;
        } else if (savedView.isUnsaved()) {
          track('visualizationTriedToAddUnsavedViewToReports', trackingInfo);
          (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
            title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('visualization_addToReports_unsavedViewModal'),
            bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.getString('visualization_addToReports_unsavedViewModal_body')
            }),
            hideCancel: true
          });
          return;
        }
        const {
          charts,
          reportsConfig
        } = _reports2_reportsDataManager__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.load(pipeline);
        track('visualizationAddedToReports', trackingInfo);
        const {
          updatedCharts,
          newChartKey
        } = _reports2_reportsDataManager__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.addChartAutoPosition(charts,
        // TODO: type this: See savedViewChart.js
        'SavedViewChart', appliedUserConfig);
        _reports2_reportsDataManager__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.save(pipeline, updatedCharts, reportsConfig);
        _reports2_reportsMasterController__WEBPACK_IMPORTED_MODULE_10__["default"].goToReportsPageAndFlashReport(pipeline.key(), newChartKey);
      },
      updateVisualizationChartConfig: (configKey, newConfigValue) => {
        if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isEqual(savedView.getVisualizationChartConfig()[configKey], newConfigValue)) {
          const updatedChartConfig = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(savedView.getVisualizationChartConfig(), {
            [configKey]: {
              $set: newConfigValue
            }
          });
          track('visualizationConfigChanged', {
            savedViewKey: savedView.getViewKey(),
            visualizationType: savedView.getVisualizationType(),
            oldVisualizationConfig: savedView.getVisualizationChartConfig(),
            newVisualizationConfig: updatedChartConfig
          });
          savedView.updateVisualizationChartConfig(updatedChartConfig);
          // Why was this needed?
          // this._pipelineSpreadsheetViewController.resize();
        }
      },
      precomputedGroupedFilteredBoxes: result.result,
      track: track
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useAsyncTransformedData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _core_models_box_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94545);
/* harmony import */ var _pipelineView_transformManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_box_box__WEBPACK_IMPORTED_MODULE_1__, _pipelineView_transformManager__WEBPACK_IMPORTED_MODULE_2__]);
([_core_models_box_box__WEBPACK_IMPORTED_MODULE_1__, _pipelineView_transformManager__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useAsyncTransformedData(pipeline, savedViewKey) {
  const savedView = pipeline.getSavedViewsManager().getSavedView(savedViewKey);
  if (!savedView) {
    throw new Error('Cannot use transformed data without saved view instance');
  }
  const [transformedData, setTransformedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let ignore = false;
    const boxCollection = _core_models_box_box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.createCollection(pipeline.key());
    boxCollection.refreshWithPromise().then(() => {
      if (!ignore) {
        return (0,_pipelineView_transformManager__WEBPACK_IMPORTED_MODULE_2__/* .transformData */ .Jl)(boxCollection, savedView, null, true);
      }
      return undefined;
    }).then(groupByData => {
      if (!ignore && groupByData) {
        setTransformedData(groupByData);
      }
    });
    return () => {
      ignore = true;
    };
  }, [pipeline, savedView]);
  return transformedData ? {
    type: 'model',
    result: transformedData
  } : {
    type: 'loading',
    result: null
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useSavedView),
/* harmony export */   l: () => (/* binding */ useSavedViewGroupSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25788);



function useSavedView(pipeline, savedViewKey, selector) {
  const [result, updateResultWithSavedView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((ignored, savedView) => selector(savedView), null, () => {
    const savedView = pipeline.getSavedViewsManager().getCachedSavedView(savedViewKey);
    if (!savedView) {
      throw new Error('savedView not present');
    }
    return selector(savedView);
  });
  const savedView = pipeline.getSavedViewsManager().getCachedSavedView(savedViewKey);
  if (!savedView) {
    throw new Error('savedView not defined');
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_2___default()();
    pipeline.getEventStream().filter(event => ['savedViewNonTransformSettingsChanged', 'savedViewTransformSettingsChanged', 'savedViewInboxStateChanged', 'savedViewStarStateChanged', 'savedViewNameChanged', 'savedViewChanged', 'savedViewAdded'].includes(event.eventName) && event.viewKey === savedViewKey).takeUntilBy(stopper).onValue(() => {
      const savedView = pipeline.getSavedViewsManager().getCachedSavedView(savedViewKey);
      if (!savedView) {
        throw new Error('savedView not defined');
      }
      updateResultWithSavedView(savedView);
    });
    return stopper.destroy;
  }, [pipeline, savedViewKey]);
  return result;
}
function useSavedViewGroupSummary(pipeline, savedViewKey, columnKey, groupId) {
  const savedViewColumn = useSavedView(pipeline, savedViewKey, savedView => savedView.getSavedViewColumn(columnKey));
  // TODO: This will have to be updated to actually get boxes from somewhere
  // and in the future we will read from the SSV response to get
  // the summaries.
  const groups = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* .SectionHeaderCellContext */ .Bn);
  const group = groups.find(group => group.key === groupId);
  if (!group) {
    throw new Error('could not find group with groupId');
  }
  const summary = group.summaries[columnKey];
  // TODO: there is a race condition between saved view columns
  // and the group summaries populating. There's seems to be
  // a general issue with saved views around knowing when changes
  // are flushed through the system and can be safely read from.
  if (!summary) {
    return {
      summaryFunction: null,
      result: null,
      savedViewColumn
    };
  }
  return {
    summaryFunction: summary.aggregationType,
    result: summary.value,
    savedViewColumn
  };
}

/***/ }),

/***/ 96413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useLocalBoxCreate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var _core_models_box_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94545);
/* harmony import */ var _core_models_pipeline_columns_applyEditAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36809);
/* harmony import */ var _lib_utils_useStopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49376);
/* harmony import */ var _lib_utils_whenOperationComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15143);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99329);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _core_models_pipeline_savedViews_groupSettings_groupOpenCloseSettingsManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48891);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_box_box__WEBPACK_IMPORTED_MODULE_2__, _core_models_pipeline_savedViews_groupSettings_groupOpenCloseSettingsManager__WEBPACK_IMPORTED_MODULE_7__]);
([_core_models_box_box__WEBPACK_IMPORTED_MODULE_2__, _core_models_pipeline_savedViews_groupSettings_groupOpenCloseSettingsManager__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-fallthrough -- to not flag --report-unused-disable-directives */









function useLocalBoxCreate(_ref) {
  let {
    pipeline,
    groups,
    savedView,
    boxSubscriptionResult,
    currentGroupResponses,
    streakSheet,
    sheetData,
    addNewMutation
  } = _ref;
  const stopper = (0,_lib_utils_useStopper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([]);
  const recentlyCreatedBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    subscribeToBoxes,
    unsubscribeFromBoxes
  } = boxSubscriptionResult;
  const createBox = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(options => {
    const {
      groupKey,
      name
    } = options || {};
    if (!streakSheet.current) {
      throw new Error('attempted to create box with new sheet mounted');
    }
    if (recentlyCreatedBoxRef.current) {
      streakSheet.current.enterEditMode(recentlyCreatedBoxRef.current.sectionKey, 'property|name', recentlyCreatedBoxRef.current.box.getId());
      return;
    }
    if (!groups || groups.length === 0) {
      throw new Error('cannot add a box without groups in the pipeline');
    }

    // TODO:
    // 1. horizontally scroll sheet to left
    const newBox = _core_models_box_box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.createFromJSON({
      name: name || '',
      notes: null,
      pipelineKey: pipeline.key()
    });
    // NB: Not adding the box to the pipeline box collection
    newBox.set('stageKey', pipeline.getStages()[0].key());
    newBox.setIsNew(true);
    newBox.getEventStream().filter(event => event.eventName === 'preSave').take(1).takeUntilBy(stopper).onValue(() => {
      if (!newBox.getNoDefault('name')) {
        newBox.set('name', _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('unnamed_box_name'));
      }
      recentlyCreatedBoxRef.current = undefined;
    });

    // Get edits to make the new box group into the currently-edited group
    let sectionKey;
    let nearestRowKey = undefined;
    if (groupKey) {
      sectionKey = groupKey;
    } else {
      const selectedCells = streakSheet.current.getSelectedCells();
      const firstSelectedCell = selectedCells && selectedCells[0];
      switch (firstSelectedCell?.type) {
        case undefined:
        case 'COLUMN_HEADER_CELL':
          sectionKey = groups[0].key;
          break;
        case 'ROW_DATA_CELL':
          sectionKey = firstSelectedCell.sectionKey;
          nearestRowKey = firstSelectedCell.rowKey;
        case 'SECTION_HEADER_CELL':
          sectionKey = firstSelectedCell?.sectionKey;
          break;
      }
    }
    const group = groups.find(group => group.key === sectionKey);
    if (!group) {
      throw new Error(`cannot find group with sectionKey=${sectionKey}`);
    }
    if (!nearestRowKey && currentGroupResponses.current && currentGroupResponses.current[sectionKey]) {
      const rowResult = Object.values(currentGroupResponses.current[sectionKey])[0];
      if (rowResult) {
        nearestRowKey = rowResult.rows[0]?.key;
      }
    }
    if (!nearestRowKey && !savedView.isDefault()) {
      _services_butterBarManager__WEBPACK_IMPORTED_MODULE_5__["default"].showMessage(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('new_box_in_empty_table'));
      return;
    }

    // ensure group is open
    savedView.updateGroupOpenCloseSettings(_core_models_pipeline_savedViews_groupSettings_groupOpenCloseSettingsManager__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.toggleOpen(true, savedView.getGroupOpenCloseSettings(), savedView.getGroupBySettings(), group.key));
    recentlyCreatedBoxRef.current = {
      sectionKey,
      box: newBox
    };
    const groupByValue = group.copyValue;
    const groupEdits = savedView.getGroupedByColumn().getEditActions(newBox, groupByValue);

    // Get edits to make the new box pass any filter on the saved view
    let filterEdits = [];
    const nearestBox = nearestRowKey ? sheetData.getRowData(sectionKey, nearestRowKey) : undefined;
    if (nearestBox) {
      filterEdits = savedView.getFilteredByEditActions(newBox, nearestBox);
    }
    const editActions = [...groupEdits, ...filterEdits];
    editActions.forEach(action => (0,_core_models_pipeline_columns_applyEditAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(action));
    newBox.getEventStream().filter(event => event.eventName === 'save').take(1) // specifically interested in the successfullness of the first save, i.e. the create
    .flatMap(event => kefir__WEBPACK_IMPORTED_MODULE_1__["default"].fromPromise((0,_lib_utils_whenOperationComplete__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(event.progressId))).filter(_ref2 => {
      let {
        operationHasErrors
      } = _ref2;
      return operationHasErrors;
    }).takeUntilBy(stopper).onValue(() => {
      unsubscribeFromBoxes(sectionKey, [newBox.getId()]);
      addNewMutation({
        type: 'DELETE',
        sectionKey,
        rowKey: newBox.getId()
      });
      _services_butterBarManager__WEBPACK_IMPORTED_MODULE_5__["default"].showError(_services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('batch_saving_box_error_update'));
    });
    subscribeToBoxes(sectionKey, [newBox]);
    addNewMutation({
      type: 'ADD',
      sectionKey,
      rowKey: newBox.getId(),
      rowData: newBox,
      afterRowKey: nearestRowKey
    });
    streakSheet.current.enterEditMode(sectionKey, 'property|name', newBox.getId());
    return newBox;
  }, [streakSheet, groups, pipeline, stopper, currentGroupResponses, savedView, sheetData, subscribeToBoxes, addNewMutation, unsubscribeFromBoxes]);
  return createBox;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useBoxSubscriptions),
/* harmony export */   Z: () => (/* binding */ useLocalBoxEdits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72086);
/* harmony import */ var _lib_utils_usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59049);
/* harmony import */ var _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_4__]);
_boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function useBoxSubscriptions() {
  const [boxesBySection, setBoxesBySection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const subscribeToBoxes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((sectionKey, newBoxes) => {
    newBoxes.forEach(box => _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.addBox(box));
    setBoxesBySection(oldboxesBySection => {
      const oldIds = new Set(oldboxesBySection[sectionKey]?.map(box => box.getId()));
      return {
        ...oldboxesBySection,
        [sectionKey]: [...(oldboxesBySection[sectionKey] || []), ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqBy)(newBoxes, box => box.getId()).filter(box => !oldIds.has(box.getId()))]
      };
    });
  }, [setBoxesBySection]);
  const unsubscribeFromBoxes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((sectionKey, boxIds) => {
    const idsToRemove = new Set(boxIds);
    idsToRemove.forEach(id => {
      const box = _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.dangerouslyGetBoxById(id);
      box && _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.unloadBox(box);
    });
    setBoxesBySection(oldboxesBySection => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      oldboxesBySection[sectionKey];
      return {
        ...oldboxesBySection,
        [sectionKey]: [...(oldboxesBySection[sectionKey] || []).filter(box => !idsToRemove.has(box.getId()))]
      };
    });
  }, [setBoxesBySection]);

  // A quicker means for checking existence than using find() on boxesBySection
  const boxIdsSetBySection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return Object.keys(boxesBySection).reduce((acc, curr) => {
      acc[curr] = new Set(boxesBySection[curr].map(box => box.getId()));
      return acc;
    }, {});
  }, [boxesBySection]);
  return {
    boxesBySection,
    boxIdsSetBySection,
    subscribeToBoxes,
    unsubscribeFromBoxes
  };
}
function useLocalBoxEdits(savedView, boxesBySection, handlers) {
  const subscribedBoxes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => lodash__WEBPACK_IMPORTED_MODULE_2___default().flow(() => boxesBySection, Object.values, x => x.filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).flat(), x => lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(x, box => box.getId()))(), [boxesBySection]);
  const previousSubscribedBoxes = (0,_lib_utils_usePrevious__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(subscribedBoxes);
  const boxIdsToSections = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.transform)(boxesBySection, (result, boxes, sectionKey) => {
    boxes?.forEach(box => {
      (result[box.getId()] || (result[box.getId()] = [])).push(sectionKey);
    });
  }, {}), [boxesBySection]);
  const [allBoxesStream] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => kefir__WEBPACK_IMPORTED_MODULE_1__["default"].pool());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // figure out which boxes to plug and unplug from pool
    const unsubscribedBoxes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)(previousSubscribedBoxes || [], subscribedBoxes);
    const newlySubscribedBoxes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.difference)(subscribedBoxes, previousSubscribedBoxes || []);
    unsubscribedBoxes.forEach(box => {
      allBoxesStream.unplug(box.getModelAndEventStream());
    });
    newlySubscribedBoxes.forEach(box => {
      allBoxesStream.plug(box.getModelAndEventStream());
    });
  }, [allBoxesStream, previousSubscribedBoxes, subscribedBoxes]);

  // TODO is there a way to change this so the stream doesn't need to be
  // resubscribed every time the set of loaded boxes changes?
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_6___default()();

    // Listen for group changes
    allBoxesStream.filter(_ref => {
      let [box, event] = _ref;
      return event.eventName === 'change' && savedView.getGroupedByColumn().wasColumnChanged(box, {
        [event.property]: {
          previousValue: event.previousValue
        }
      });
    }).takeUntilBy(stopper).onValue(_ref2 => {
      let [box] = _ref2;
      return handlers.onGroupChange(box, savedView.getGroupedByColumn().getGroupByValue(box, savedView.getGroupByOptions()));
    });

    // Listen for box deletes
    allBoxesStream.filter(_ref3 => {
      let [_box, event] = _ref3;
      return event.eventName === 'delete';
    }).takeUntilBy(stopper).onValue(_ref4 => {
      let [box, _event] = _ref4;
      handlers.onDelete(box, boxIdsToSections[box.getId()]);
    });
    return () => stopper.destroy();
  }, [allBoxesStream, boxIdsToSections, handlers, savedView]);

  // Keep the stream activated the whole time the component is mounted
  // so that the resubscriptions above are cheaper.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function noopHandler() {
      // noop
    }
    allBoxesStream.onValue(noopHandler);
    return () => {
      allBoxesStream.offValue(noopHandler);
    };
  }, [allBoxesStream]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useOnAsyncAction)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(659);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99329);
/* harmony import */ var _widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64673);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);







function useOnAsyncAction() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(asyncAction => {
    switch (asyncAction.type) {
      case 'CLEAR':
        {
          _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('Deleting values...');
          asyncAction.resolvesWhenReady.then(() => {
            // TODO: what if the user undos the action before this returns?
            _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('Done.');
          });
          break;
        }
      case 'COPY':
        {
          let closedFromUserAction = false;
          const modalView = (0,_widgets_modal_showModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            viewOptions: {
              title: 'Copying...'
            },
            bodyComponent: _ref => {
              let {
                modalView
              } = _ref;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AsyncCopyModalBody, {
                resolvesWhenReady: asyncAction.resolvesWhenReady,
                onUserAction: () => {
                  closedFromUserAction = true;
                  modalView.close();
                }
              });
            }
          });
          modalView.on('destroy', () => {
            if (!closedFromUserAction) {
              asyncAction.cancel();
            }
          });
          break;
        }
      case 'PASTE':
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('Pasting...');
        asyncAction.resolvesWhenReady.then(() => {
          _services_butterBarManager__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('Done.');
        });
        break;
      default:
        (0,_lib_utils_assertNever__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(asyncAction);
    }
  }, []);
}
function AsyncCopyModalBody(_ref2) {
  let {
    resolvesWhenReady,
    onUserAction
  } = _ref2;
  const [loadingState, setLoadingState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    type: 'LOADING'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let canceled = false;
    resolvesWhenReady.then(userEventCallback => {
      if (canceled) return;
      setLoadingState({
        type: 'LOADED',
        userEventCallback
      });
    }).catch(() => lodash__WEBPACK_IMPORTED_MODULE_0__.noop);
    return () => {
      canceled = true;
    };
  }, [resolvesWhenReady]);

  // TODO: better copy / UI
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: ["You selected a bunch of rows to copy. Gathering up all the rows. This could take a couple seconds.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: loadingState.type === 'LOADED' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: "Ready!"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
      accent: loadingState.type === 'LOADED' ? 'default' : 'muted',
      disabled: loadingState.type !== 'LOADED',
      onClick: () => {
        if (loadingState.type === 'LOADING') {
          return;
        }
        loadingState.userEventCallback();
        onUserAction();
      },
      children: "Copy"
    })]
  });
}

/***/ }),

/***/ 99146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useUndo)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81641);
/* harmony import */ var _core_models_pipeline_columns_applyEditAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36809);
/* harmony import */ var _core_models_pipeline_columns_areCopyValuesEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81195);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72086);
/* harmony import */ var _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99329);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13778);
/* harmony import */ var _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_2__, _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_5__]);
([_core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_2__, _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function useUndo(savedView) {
  const undoStack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  const redoStack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  const applyUndoGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (type, undoGroup) => {
    // If any undo cannot be performed, we display a BB message
    let completeSuccess = true;
    const editActionLists = [];
    const boxKeys = [...new Set(undoGroup.map(_ref => {
      let {
        boxKey
      } = _ref;
      return boxKey;
    }))];
    const filteredBoxKeys = boxKeys.filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    // Make not if we had to filter out unsaved boxes
    if (filteredBoxKeys.length != boxKeys.length) {
      completeSuccess = false;
    }
    const boxLoaderResponses = await _boxCache_BoxLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getBoxes(filteredBoxKeys);
    const keysToResolvedBoxes = new Map();
    for (const response of boxLoaderResponses) {
      if (response.box) {
        keysToResolvedBoxes.set(response.box?.key(), response.box);
      }
    }
    for (const undoAction of undoGroup) {
      const box = keysToResolvedBoxes.get(undoAction.boxKey);
      if (!box) {
        completeSuccess = false;
        continue;
      }
      const column = savedView.getSavedViewColumn(undoAction.columnKey).getColumn();
      if (!column) {
        completeSuccess = false;
        continue;
      }
      let startingCopyValue;
      let goalCopyValue;
      if (type === 'undo') {
        startingCopyValue = undoAction.newCopyValue;
        goalCopyValue = undoAction.oldCopyValue;
      } else {
        startingCopyValue = undoAction.oldCopyValue;
        goalCopyValue = undoAction.newCopyValue;
      }
      const currentCopyValue = column.getCopyValue(box);
      if (!(0,_core_models_pipeline_columns_areCopyValuesEqual__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(currentCopyValue, startingCopyValue)) {
        completeSuccess = false;
        continue;
      }
      const editActions = column.getEditActions(box, goalCopyValue);
      if (editActions.length === 0) {
        continue;
      }
      editActionLists.push(editActions);
      // TODO: we used to keep track of the last column box written to and jumped to it
      // but we can't really do that in the sheet right now, so punting on that behavior
    }
    if (editActionLists.length === 0) {
      if (!completeSuccess) {
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showError({
          messageKey: 'undo',
          text: `The ${type} action failed because of conflicts.`
        });
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track(`spreadsheet.${type}.conflict`);
      } else {
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showError({
          messageKey: 'undo',
          text: `That ${type} action is unsupported currently.`
        });
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track(`spreadsheet.${type}.unsupported`);
      }
    } else {
      if (!completeSuccess) {
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].showError({
          messageKey: 'undo',
          text: `The ${type} action was not fully applied because of conflicts.`
        });
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track(`spreadsheet.${type}.success.partial`);
      } else {
        _services_butterBarManager__WEBPACK_IMPORTED_MODULE_3__["default"].hideMessage('undo');
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_4__["default"].track(`spreadsheet.${type}.success`);
      }
      const models = lodash__WEBPACK_IMPORTED_MODULE_0___default().flow(() => editActionLists.flat().map(editAction => {
        (0,_core_models_pipeline_columns_applyEditAction__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(editAction);
        return editAction.model;
      }), (lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq))();
      if (models.length <= 1) {
        models.forEach(model => {
          model.save();
        });
      } else {
        _core_models_box_boxBatchOperationManager__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.save(models);
      }
      // TODO: restore something like this:
      // if (lastBox && lastColumn) {
      //     this._cursorPlugin.jumpToBoxAndColumn(lastBox, lastColumn);
      // }
      boxLoaderResponses.forEach(response => response.unload());
    }
  }, [savedView]);
  const undo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const actionToUndo = undoStack.current.pop();
    if (!actionToUndo) {
      return;
    }
    applyUndoGroup('undo', actionToUndo);
    redoStack.current.push(actionToUndo);
  }, [applyUndoGroup]);
  const redo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const actionToRedo = redoStack.current.pop();
    if (!actionToRedo) {
      return;
    }
    applyUndoGroup('redo', actionToRedo);
    undoStack.current.push(actionToRedo);
  }, [applyUndoGroup]);
  const appendNewUndo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(undoGroup => {
    undoStack.current.push(undoGroup);
    redoStack.current = [];
  }, []);
  return {
    undo,
    redo,
    appendNewUndo
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85178:
/***/ ((module) => {


// basic protocol helpers

var symbolExists = typeof Symbol !== 'undefined';

var protocols = {
  iterator: symbolExists ? Symbol.iterator : '@@iterator'
};

function throwProtocolError(name, coll) {
  throw new Error("don't know how to " + name + " collection: " +
                  coll);
}

function fulfillsProtocol(obj, name) {
  if(name === 'iterator') {
    // Accept ill-formed iterators that don't conform to the
    // protocol by accepting just next()
    return obj[protocols.iterator] || obj.next;
  }

  return obj[protocols[name]];
}

function getProtocolProperty(obj, name) {
  return obj[protocols[name]];
}

function iterator(coll) {
  var iter = getProtocolProperty(coll, 'iterator');
  if(iter) {
    return iter.call(coll);
  }
  else if(coll.next) {
    // Basic duck typing to accept an ill-formed iterator that doesn't
    // conform to the iterator protocol (all iterators should have the
    // @@iterator method and return themselves, but some engines don't
    // have that on generators like older v8)
    return coll;
  }
  else if(isArray(coll)) {
    return new ArrayIterator(coll);
  }
  else if(isObject(coll)) {
    return new ObjectIterator(coll);
  }
}

function ArrayIterator(arr) {
  this.arr = arr;
  this.index = 0;
}

ArrayIterator.prototype.next = function() {
  if(this.index < this.arr.length) {
    return {
      value: this.arr[this.index++],
      done: false
    };
  }
  return {
    done: true
  }
};

function ObjectIterator(obj) {
  this.obj = obj;
  this.keys = Object.keys(obj);
  this.index = 0;
}

ObjectIterator.prototype.next = function() {
  if(this.index < this.keys.length) {
    var k = this.keys[this.index++];
    return {
      value: [k, this.obj[k]],
      done: false
    };
  }
  return {
    done: true
  }
};

// helpers

var toString = Object.prototype.toString;
var isArray = typeof Array.isArray === 'function' ? Array.isArray : function(obj) {
  return toString.call(obj) == '[object Array]';
};

function isFunction(x) {
  return typeof x === 'function';
}

function isObject(x) {
  return x instanceof Object &&
    Object.getPrototypeOf(x) === Object.getPrototypeOf({});
}

function isNumber(x) {
  return typeof x === 'number';
}

function Reduced(value) {
  this['@@transducer/reduced'] = true;
  this['@@transducer/value'] = value;
}

function isReduced(x) {
  return (x instanceof Reduced) || (x && x['@@transducer/reduced']);
}

function deref(x) {
  return x['@@transducer/value'];
}

/**
 * This is for transforms that may call their nested transforms before
 * Reduced-wrapping the result (e.g. "take"), to avoid nested Reduced.
 */
function ensureReduced(val) {
  if(isReduced(val)) {
    return val;
  } else {
    return new Reduced(val);
  }
}

/**
 * This is for tranforms that call their nested transforms when
 * performing completion (like "partition"), to avoid signaling
 * termination after already completing.
 */
function ensureUnreduced(v) {
  if(isReduced(v)) {
    return deref(v);
  } else {
    return v;
  }
}

function reduce(coll, xform, init) {
  if(isArray(coll)) {
    var result = init;
    var index = -1;
    var len = coll.length;
    while(++index < len) {
      result = xform['@@transducer/step'](result, coll[index]);
      if(isReduced(result)) {
        result = deref(result);
        break;
      }
    }
    return xform['@@transducer/result'](result);
  }
  else if(isObject(coll) || fulfillsProtocol(coll, 'iterator')) {
    var result = init;
    var iter = iterator(coll);
    var val = iter.next();
    while(!val.done) {
      result = xform['@@transducer/step'](result, val.value);
      if(isReduced(result)) {
        result = deref(result);
        break;
      }
      val = iter.next();
    }
    return xform['@@transducer/result'](result);
  }
  throwProtocolError('iterate', coll);
}

function transduce(coll, xform, reducer, init) {
  xform = xform(reducer);
  if(init === undefined) {
    init = xform['@@transducer/init']();
  }
  return reduce(coll, xform, init);
}

function compose() {
  var funcs = Array.prototype.slice.call(arguments);
  return function(r) {
    var value = r;
    for(var i=funcs.length-1; i>=0; i--) {
      value = funcs[i](value);
    }
    return value;
  }
}

// transformations

function transformer(f) {
  var t = {};
  t['@@transducer/init'] = function() {
    throw new Error('init value unavailable');
  };
  t['@@transducer/result'] = function(v) {
    return v;
  };
  t['@@transducer/step'] = f;
  return t;
}

function bound(f, ctx, count) {
  count = count != null ? count : 1;

  if(!ctx) {
    return f;
  }
  else {
    switch(count) {
    case 1:
      return function(x) {
        return f.call(ctx, x);
      }
    case 2:
      return function(x, y) {
        return f.call(ctx, x, y);
      }
    default:
      return f.bind(ctx);
    }
  }
}

function arrayMap(arr, f, ctx) {
  var index = -1;
  var length = arr.length;
  var result = Array(length);
  f = bound(f, ctx, 2);

  while (++index < length) {
    result[index] = f(arr[index], index);
  }
  return result;
}

function arrayFilter(arr, f, ctx) {
  var len = arr.length;
  var result = [];
  f = bound(f, ctx, 2);

  for(var i=0; i<len; i++) {
    if(f(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function Map(f, xform) {
  this.xform = xform;
  this.f = f;
}

Map.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Map.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Map.prototype['@@transducer/step'] = function(res, input) {
  return this.xform['@@transducer/step'](res, this.f(input));
};

function map(coll, f, ctx) {
  if(isFunction(coll)) { ctx = f; f = coll; coll = null; }
  f = bound(f, ctx);

  if(coll) {
    if(isArray(coll)) {
      return arrayMap(coll, f, ctx);
    }
    return seq(coll, map(f));
  }

  return function(xform) {
    return new Map(f, xform);
  }
}

function Filter(f, xform) {
  this.xform = xform;
  this.f = f;
}

Filter.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Filter.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Filter.prototype['@@transducer/step'] = function(res, input) {
  if(this.f(input)) {
    return this.xform['@@transducer/step'](res, input);
  }
  return res;
};

function filter(coll, f, ctx) {
  if(isFunction(coll)) { ctx = f; f = coll; coll = null; }
  f = bound(f, ctx);

  if(coll) {
    if(isArray(coll)) {
      return arrayFilter(coll, f, ctx);
    }
    return seq(coll, filter(f));
  }

  return function(xform) {
    return new Filter(f, xform);
  };
}

function remove(coll, f, ctx) {
  if(isFunction(coll)) { ctx = f; f = coll; coll = null; }
  f = bound(f, ctx);
  return filter(coll, function(x) { return !f(x); });
}

function keep(coll) {
  return filter(coll, function(x) { return x != null });
}

function Dedupe(xform) {
  this.xform = xform;
  this.last = undefined;
}

Dedupe.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Dedupe.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Dedupe.prototype['@@transducer/step'] = function(result, input) {
  if(input !== this.last) {
    this.last = input;
    return this.xform['@@transducer/step'](result, input);
  }
  return result;
};

function dedupe(coll) {
  if(coll) {
    return seq(coll, dedupe());
  }

  return function(xform) {
    return new Dedupe(xform);
  }
}

function TakeWhile(f, xform) {
  this.xform = xform;
  this.f = f;
}

TakeWhile.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

TakeWhile.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

TakeWhile.prototype['@@transducer/step'] = function(result, input) {
  if(this.f(input)) {
    return this.xform['@@transducer/step'](result, input);
  }
  return new Reduced(result);
};

function takeWhile(coll, f, ctx) {
  if(isFunction(coll)) { ctx = f; f = coll; coll = null; }
  f = bound(f, ctx);

  if(coll) {
    return seq(coll, takeWhile(f));
  }

  return function(xform) {
    return new TakeWhile(f, xform);
  }
}

function Take(n, xform) {
  this.n = n;
  this.i = 0;
  this.xform = xform;
}

Take.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Take.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Take.prototype['@@transducer/step'] = function(result, input) {
  if (this.i < this.n) {
    result = this.xform['@@transducer/step'](result, input);
    if(this.i + 1 >= this.n) {
      // Finish reducing on the same step as the final value. TODO:
      // double-check that this doesn't break any semantics
      result = ensureReduced(result);
    }
  }
  this.i++;
  return result;
};

function take(coll, n) {
  if(isNumber(coll)) { n = coll; coll = null }

  if(coll) {
    return seq(coll, take(n));
  }

  return function(xform) {
    return new Take(n, xform);
  }
}

function Drop(n, xform) {
  this.n = n;
  this.i = 0;
  this.xform = xform;
}

Drop.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Drop.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Drop.prototype['@@transducer/step'] = function(result, input) {
  if(this.i++ < this.n) {
    return result;
  }
  return this.xform['@@transducer/step'](result, input);
};

function drop(coll, n) {
  if(isNumber(coll)) { n = coll; coll = null }

  if(coll) {
    return seq(coll, drop(n));
  }

  return function(xform) {
    return new Drop(n, xform);
  }
}

function DropWhile(f, xform) {
  this.xform = xform;
  this.f = f;
  this.dropping = true;
}

DropWhile.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

DropWhile.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

DropWhile.prototype['@@transducer/step'] = function(result, input) {
  if(this.dropping) {
    if(this.f(input)) {
      return result;
    }
    else {
      this.dropping = false;
    }
  }
  return this.xform['@@transducer/step'](result, input);
};

function dropWhile(coll, f, ctx) {
  if(isFunction(coll)) { ctx = f; f = coll; coll = null; }
  f = bound(f, ctx);

  if(coll) {
    return seq(coll, dropWhile(f));
  }

  return function(xform) {
    return new DropWhile(f, xform);
  }
}

function Partition(n, xform) {
  this.n = n;
  this.i = 0;
  this.xform = xform;
  this.part = new Array(n);
}

Partition.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Partition.prototype['@@transducer/result'] = function(v) {
  if (this.i > 0) {
    return ensureUnreduced(this.xform['@@transducer/step'](v, this.part.slice(0, this.i)));
  }
  return this.xform['@@transducer/result'](v);
};

Partition.prototype['@@transducer/step'] = function(result, input) {
  this.part[this.i] = input;
  this.i += 1;
  if (this.i === this.n) {
    var out = this.part.slice(0, this.n);
    this.part = new Array(this.n);
    this.i = 0;
    return this.xform['@@transducer/step'](result, out);
  }
  return result;
};

function partition(coll, n) {
  if (isNumber(coll)) {
    n = coll; coll = null;
  }

  if (coll) {
    return seq(coll, partition(n));
  }

  return function(xform) {
    return new Partition(n, xform);
  };
}

var NOTHING = {};

function PartitionBy(f, xform) {
  // TODO: take an "opts" object that allows the user to specify
  // equality
  this.f = f;
  this.xform = xform;
  this.part = [];
  this.last = NOTHING;
}

PartitionBy.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

PartitionBy.prototype['@@transducer/result'] = function(v) {
  var l = this.part.length;
  if (l > 0) {
    return ensureUnreduced(this.xform['@@transducer/step'](v, this.part.slice(0, l)));
  }
  return this.xform['@@transducer/result'](v);
};

PartitionBy.prototype['@@transducer/step'] = function(result, input) {
  var current = this.f(input);
  if (current === this.last || this.last === NOTHING) {
    this.part.push(input);
  } else {
    result = this.xform['@@transducer/step'](result, this.part);
    this.part = [input];
  }
  this.last = current;
  return result;
};

function partitionBy(coll, f, ctx) {
  if (isFunction(coll)) { ctx = f; f = coll; coll = null; }
  f = bound(f, ctx);

  if (coll) {
    return seq(coll, partitionBy(f));
  }

  return function(xform) {
    return new PartitionBy(f, xform);
  };
}

function Interpose(sep, xform) {
  this.sep = sep;
  this.xform = xform;
  this.started = false;
}

Interpose.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Interpose.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Interpose.prototype['@@transducer/step'] = function(result, input) {
  if (this.started) {
    var withSep = this.xform['@@transducer/step'](result, this.sep);
    if (isReduced(withSep)) {
      return withSep;
    } else {
      return this.xform['@@transducer/step'](withSep, input);
    }
  } else {
    this.started = true;
    return this.xform['@@transducer/step'](result, input);
  }
};

/**
 * Returns a new collection containing elements of the given
 * collection, separated by the specified separator. Returns a
 * transducer if a collection is not provided.
 */
function interpose(coll, separator) {
  if (arguments.length === 1) {
    separator = coll;
    return function(xform) {
      return new Interpose(separator, xform);
    };
  }
  return seq(coll, interpose(separator));
}

function Repeat(n, xform) {
  this.xform = xform;
  this.n = n;
}

Repeat.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Repeat.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Repeat.prototype['@@transducer/step'] = function(result, input) {
  var n = this.n;
  var r = result;
  for (var i = 0; i < n; i++) {
    r = this.xform['@@transducer/step'](r, input);
    if (isReduced(r)) {
      break;
    }
  }
  return r;
};

/**
 * Returns a new collection containing elements of the given
 * collection, each repeated n times. Returns a transducer if a
 * collection is not provided.
 */
function repeat(coll, n) {
  if (arguments.length === 1) {
    n = coll;
    return function(xform) {
      return new Repeat(n, xform);
    };
  }
  return seq(coll, repeat(n));
}

function TakeNth(n, xform) {
  this.xform = xform;
  this.n = n;
  this.i = -1;
}

TakeNth.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

TakeNth.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

TakeNth.prototype['@@transducer/step'] = function(result, input) {
  this.i += 1;
  if (this.i % this.n === 0) {
    return this.xform['@@transducer/step'](result, input);
  }
  return result;
};

/**
 * Returns a new collection of every nth element of the given
 * collection. Returns a transducer if a collection is not provided.
 */
function takeNth(coll, nth) {
  if (arguments.length === 1) {
    nth = coll;
    return function(xform) {
      return new TakeNth(nth, xform);
    };
  }
  return seq(coll, takeNth(nth));
}

// pure transducers (cannot take collections)

function Cat(xform) {
  this.xform = xform;
}

Cat.prototype['@@transducer/init'] = function() {
  return this.xform['@@transducer/init']();
};

Cat.prototype['@@transducer/result'] = function(v) {
  return this.xform['@@transducer/result'](v);
};

Cat.prototype['@@transducer/step'] = function(result, input) {
  var xform = this.xform;
  var newxform = {};
  newxform['@@transducer/init'] = function() {
    return xform['@@transducer/init']();
  };
  newxform['@@transducer/result'] = function(v) {
    return v;
  };
  newxform['@@transducer/step'] = function(result, input) {
    var val = xform['@@transducer/step'](result, input);
    return isReduced(val) ? deref(val) : val;
  };

  return reduce(input, newxform, result);
};

function cat(xform) {
  return new Cat(xform);
}

function mapcat(f, ctx) {
  f = bound(f, ctx);
  return compose(map(f), cat);
}

// collection helpers

function push(arr, x) {
  arr.push(x);
  return arr;
}

function merge(obj, x) {
  if(isArray(x) && x.length === 2) {
    obj[x[0]] = x[1];
  }
  else {
    var keys = Object.keys(x);
    var len = keys.length;
    for(var i=0; i<len; i++) {
      obj[keys[i]] = x[keys[i]];
    }
  }
  return obj;
}

var arrayReducer = {};
arrayReducer['@@transducer/init'] = function() {
  return [];
};
arrayReducer['@@transducer/result'] = function(v) {
  return v;
};
arrayReducer['@@transducer/step'] = push;

var objReducer = {};
objReducer['@@transducer/init'] = function() {
  return {};
};
objReducer['@@transducer/result'] = function(v) {
  return v;
};
objReducer['@@transducer/step'] = merge;

// building new collections

function toArray(coll, xform) {
  if(!xform) {
    return reduce(coll, arrayReducer, []);
  }
  return transduce(coll, xform, arrayReducer, []);
}

function toObj(coll, xform) {
  if(!xform) {
    return reduce(coll, objReducer, {});
  }
  return transduce(coll, xform, objReducer, {});
}

function toIter(coll, xform) {
  if(!xform) {
    return iterator(coll);
  }
  return new LazyTransformer(xform, coll);
}

function seq(coll, xform) {
  if(isArray(coll)) {
    return transduce(coll, xform, arrayReducer, []);
  }
  else if(isObject(coll)) {
    return transduce(coll, xform, objReducer, {});
  }
  else if(coll['@@transducer/step']) {
    var init;
    if(coll['@@transducer/init']) {
      init = coll['@@transducer/init']();
    }
    else {
      init = new coll.constructor();
    }

    return transduce(coll, xform, coll, init);
  }
  else if(fulfillsProtocol(coll, 'iterator')) {
    return new LazyTransformer(xform, coll);
  }
  throwProtocolError('sequence', coll);
}

function into(to, xform, from) {
  if(isArray(to)) {
    return transduce(from, xform, arrayReducer, to);
  }
  else if(isObject(to)) {
    return transduce(from, xform, objReducer, to);
  }
  else if(to['@@transducer/step']) {
    return transduce(from,
                     xform,
                     to,
                     to);
  }
  throwProtocolError('into', to);
}

// laziness

var stepper = {};
stepper['@@transducer/result'] = function(v) {
  return isReduced(v) ? deref(v) : v;
};
stepper['@@transducer/step'] = function(lt, x) {
  lt.items.push(x);
  return lt.rest;
};

function Stepper(xform, iter) {
  this.xform = xform(stepper);
  this.iter = iter;
}

Stepper.prototype['@@transducer/step'] = function(lt) {
  var len = lt.items.length;
  while(lt.items.length === len) {
    var n = this.iter.next();
    if(n.done || isReduced(n.value)) {
      // finalize
      this.xform['@@transducer/result'](this);
      break;
    }

    // step
    this.xform['@@transducer/step'](lt, n.value);
  }
}

function LazyTransformer(xform, coll) {
  this.iter = iterator(coll);
  this.items = [];
  this.stepper = new Stepper(xform, iterator(coll));
}

LazyTransformer.prototype[protocols.iterator] = function() {
  return this;
}

LazyTransformer.prototype.next = function() {
  this['@@transducer/step']();

  if(this.items.length) {
    return {
      value: this.items.pop(),
      done: false
    }
  }
  else {
    return { done: true };
  }
};

LazyTransformer.prototype['@@transducer/step'] = function() {
  if(!this.items.length) {
    this.stepper['@@transducer/step'](this);
  }
}

// util

function range(n) {
  var arr = new Array(n);
  for(var i=0; i<arr.length; i++) {
    arr[i] = i;
  }
  return arr;
}

module.exports = {
  reduce: reduce,
  transformer: transformer,
  Reduced: Reduced,
  isReduced: isReduced,
  iterator: iterator,
  push: push,
  merge: merge,
  transduce: transduce,
  seq: seq,
  toArray: toArray,
  toObj: toObj,
  toIter: toIter,
  into: into,
  compose: compose,
  map: map,
  filter: filter,
  remove: remove,
  cat: cat,
  mapcat: mapcat,
  keep: keep,
  dedupe: dedupe,
  take: take,
  takeWhile: takeWhile,
  takeNth: takeNth,
  drop: drop,
  dropWhile: dropWhile,
  partition: partition,
  partitionBy: partitionBy,
  interpose: interpose,
  repeat: repeat,
  range: range,

  LazyTransformer: LazyTransformer
};


/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.4428.8897f14e56f369285312.js.map