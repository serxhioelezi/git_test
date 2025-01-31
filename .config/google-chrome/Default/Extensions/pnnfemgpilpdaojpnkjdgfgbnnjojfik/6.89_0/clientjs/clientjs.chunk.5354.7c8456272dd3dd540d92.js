"use strict";
export const id = 5354;
export const ids = [5354];
export const modules = {

/***/ 74399:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* reexport safe */ _internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__]);
_internal_useCallMenuContext__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useCallMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60202);
/* harmony import */ var _lib_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58928);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_1__]);
_services_data_useData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useCallMenuContext() {
  const {
    useDevices
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_1__/* .useData */ .e)();
  const devices = useDevices();
  const googleVoiceAvail = (0,_lib_google__WEBPACK_IMPORTED_MODULE_3__/* .isGoogleVoiceAvailable */ .X)();
  const defaultCallMethod = _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_2__.LocalSettings.get('defaultCallMethod');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    devices,
    googleVoiceAvail,
    defaultCallMethod
  }), [devices, googleVoiceAvail, defaultCallMethod]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O6: () => (/* binding */ fetchOrgsBlock),
/* harmony export */   S4: () => (/* binding */ fetchOrgsMetadata)
/* harmony export */ });
/* unused harmony exports updateOrg, deleteOrg */
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23392);
/* harmony import */ var _core_ajax_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__, _core_ajax_request__WEBPACK_IMPORTED_MODULE_1__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__, _core_ajax_request__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function fetchOrgsMetadata(_ref) {
  let {
    teamKey
  } = _ref;
  const res = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`teams/${teamKey}/organizations/views/__default__/groups`, undefined, {
    prefix: '/api/v2/',
    templateUrl: `/teams/{KEY}/organizations/views/{KEY}/groups`,
    retry: false
  }).getPromise();
  return {
    groups: res.results
  };
}
async function fetchOrgsBlock(params, abortSignal) {
  const req = await _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`teams/${params.teamKey}/organizations/views/__default__/groups/${params.groupKey}`, {
    cursor: params.cursor ?? '',
    offset: params.offset ?? 0,
    limit: params.limit
  }, {
    prefix: '/api/v2/',
    templateUrl: `/teams/{KEY}/organizations/views/{KEY}`,
    retry: false
  });
  return abortSignal ? (0,_core_ajax_request__WEBPACK_IMPORTED_MODULE_1__/* .toPromiseWithAbort */ .j7)(req, abortSignal) : req.getPromise();
}
async function updateOrg(params) {
  await APIRequester.put(`teams/${params.teamKey}/organizations/${params.orgKey}`, params.data, {
    prefix: '/api/v2/',
    templateUrl: `/teams/{KEY}/organizations/{KEY}`
  }).getPromise();
}
async function deleteOrg(params) {
  const res = await APIRequester.delete(`teams/${params.teamKey}/organizations`, params.data, {
    prefix: '/api/v2/',
    templateUrl: `/teams/{KEY}/organizations`
  }).getPromise();
  return res;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ OrgsSharingMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87084);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77294);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58556);
/* harmony import */ var _widgets_sharing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57845);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _hooks_useOrgsSharing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30292);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__, _hooks_useOrgsSharing__WEBPACK_IMPORTED_MODULE_6__]);
([_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__, _hooks_useOrgsSharing__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function OrgsSharingMenu(_ref) {
  let {
    initialOpen,
    teamKey
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__/* .SharingPopover */ .G4, {
    initialOpen: initialOpen,
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .ButtonWithText */ .WY, {
      shape: "pill",
      color: "gmail/primary",
      variant: "filled",
      size: "s",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Typo */ .Jd, {
        variant: "button/base",
        color: "inherit",
        fontSize: "inherit",
        display: "contents",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('share')
      })
    }),
    panel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Panel, {
      teamKey: teamKey
    })
  });
}
const Panel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_ref2 => {
  let {
    teamKey
  } = _ref2;
  const {
    sharingConfig,
    sharingI18nConfig
  } = (0,_hooks_useOrgsSharing__WEBPACK_IMPORTED_MODULE_6__/* .useOrgsSharing */ .I)({
    teamKey
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_widgets_sharing__WEBPACK_IMPORTED_MODULE_4__/* .SharingPopoverPanel */ .Yf, {
    config: sharingConfig,
    i18nConfig: sharingI18nConfig,
    goToTeamPage: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_3__/* .StreakCustomRoute */ .ld.ACCOUNT), [])
  });
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ORGS_COLLECTION_DEF)
/* harmony export */ });
/* harmony import */ var _storeV3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82966);
/* harmony import */ var _services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13704);
/* harmony import */ var _api_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88674);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__, _api_fetchApi__WEBPACK_IMPORTED_MODULE_2__]);
([_services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__, _api_fetchApi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ORGS_COLLECTION_DEF = (0,_storeV3__WEBPACK_IMPORTED_MODULE_0__/* .defineCollection */ .eR)({
  api: {
    maxBlockSize: 500,
    fetchMetadata: async params => {
      const res = await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .fetchOrgsMetadata */ .S4)({
        teamKey: params.teamKey
      });
      return {
        groups: res.groups.map(g => ({
          groupKey: g.groupByKeyEncoded,
          groupData: {
            groupKey: g.groupByKeyEncoded,
            groupName: g.groupByValue,
            count: g.count
          },
          total: g.count
        }))
      };
    },
    fetchBlock: async (params, signal) => {
      const res = await (0,_api_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .fetchOrgsBlock */ .O6)({
        teamKey: params.teamKey,
        groupKey: params.groupKey,
        cursor: params.cursor,
        offset: params.offset,
        limit: params.limit
      }, signal);
      return {
        metadata: {
          groups: res.groups.map(g => ({
            groupKey: g.groupByKeyEncoded,
            groupData: {
              groupKey: g.groupByKeyEncoded,
              groupName: g.groupByValue,
              count: g.count
            },
            total: g.count
          }))
        },
        prev: res.previousCursor,
        records: res.results,
        next: res.nextCursor
      };
    },
    realtime(_ref) {
      let {
        teamKey
      } = _ref;
      return _services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__.realtimeData.getRealtimeStream().filter(_services_data_realtimedata__WEBPACK_IMPORTED_MODULE_1__.isRealtimeEventTeamOrganization).flatten(e => {
        return e.entities.filter(e => !e.teamKey || e.teamKey === teamKey).map(entity => ({
          type: e.REALTIME_EVENT === 'CREATE' ? _storeV3__WEBPACK_IMPORTED_MODULE_0__/* .RealtimeEventType */ .O8.CREATE : e.REALTIME_EVENT === 'UPDATE' ? _storeV3__WEBPACK_IMPORTED_MODULE_0__/* .RealtimeEventType */ .O8.UPDATE : _storeV3__WEBPACK_IMPORTED_MODULE_0__/* .RealtimeEventType */ .O8.DELETE,
          key: entity.key
        }));
      });
    }
  },
  utils: {
    cursor: {
      toCursorData(dto) {
        return {
          id: dto.key,
          normalizedFullName: dto.nameGen ?? ''
        };
      },
      compare(a, b) {
        if (a.normalizedFullName < b.normalizedFullName) {
          return -1;
        } else if (a.normalizedFullName > b.normalizedFullName) {
          return 1;
        } else {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        }
      }
    }
  }
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useOrgColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78445);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);



function useOrgColumns() {
  const allColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const keys = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__/* .ORGS_SYSTEM_COLUMNS_MAP */ .wV);
    return keys.map(name => {
      const column = _constants__WEBPACK_IMPORTED_MODULE_1__/* .ORGS_SYSTEM_COLUMNS_MAP */ .wV[name];
      return {
        columnId: name,
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(column.titleLocaleKey),
        icon: column.icon,
        loadingRenderer: column.loadingRenderer
      };
    });
  }, []);
  const [columnsSettings, setColumnsSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    order: allColumns.map(c => c.columnId),
    pinned: _constants__WEBPACK_IMPORTED_MODULE_1__/* .ORGS_DEFAULT_PINNED_COLUMNS */ .CZ,
    hidden: new Set(),
    title: new Map(allColumns.map(c => [c.columnId, c.title])),
    width: new Map(allColumns.map(c => [c.columnId, 200]))
  });
  return {
    columns: allColumns,
    columnsSettings,
    setColumnsSettings
  };
}

/***/ }),

/***/ 30292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useOrgsSharing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57845);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60202);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _billing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25161);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78445);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__, _services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _billing__WEBPACK_IMPORTED_MODULE_4__, _team__WEBPACK_IMPORTED_MODULE_5__]);
([_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__, _services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _billing__WEBPACK_IMPORTED_MODULE_4__, _team__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function useOrgsSharing(_ref) {
  let {
    teamKey
  } = _ref;
  const {
    useCurrentUser,
    useTeamByKey
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_2__/* .useData */ .e)();
  const team = useTeamByKey(teamKey);
  const user = useCurrentUser();
  const {
    invite
  } = (0,_billing__WEBPACK_IMPORTED_MODULE_4__/* .useInviteTeamMembers */ .o_)();
  const sharingI18nConfig = useI18nConfig();
  const {
    adminPermission,
    fullAccessPermission,
    noAccessPermission,
    teamPermissions,
    aclPermissions
  } = useOrgsPermissions();
  const {
    sharingApi
  } = (0,_team__WEBPACK_IMPORTED_MODULE_5__/* .useTeamBasedPermissions */ .Rf)(_constants__WEBPACK_IMPORTED_MODULE_6__/* .ORGS_TEAM_PERMISSION_KEY */ .Qg, {
    team,
    currentUser: user,
    canChangeAclEntryPermission: (_, aclEntries, __, _ref2) => {
      let {
        teamBasedPermissions
      } = _ref2;
      const readonlyInTheList = aclEntries.some(e => {
        const originalEntry = teamBasedPermissions.aclEntries.find(oe => oe.userKey === e.userKey);
        return originalEntry?.isReadOnly;
      });
      return !readonlyInTheList;
    },
    constants: {
      adminPermissionSetKey: adminPermission.key,
      noAccessPermissionSetKey: noAccessPermission.key
    }
  });
  const sharingConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      authData: {
        currentUserKey: user.key,
        currentUserEmail: user.email
      },
      permissionsData: {
        teamPermissions: teamPermissions,
        aclPermissions: aclPermissions,
        confirmNoAccess: true,
        customPermissions: null
      },
      teamData: {
        team: team,
        teamPermissionSetKey: sharingApi.defaultPermissionSetKey,
        canChangeTeamPermission: sharingApi.canChangeDefaultPermissionSet,
        changeTeamPermission: sharingApi.changeDefaultPermissionSet
      },
      aclData: {
        initialTargetPermissionSetKey: fullAccessPermission.key,
        overrides: sharingApi.aclEntries,
        canChangeAclEntryPermission: sharingApi.canChangeAclEntryPermission,
        changeAclEntryPermission: sharingApi.changeAclEntries,
        removeAclEntry: sharingApi.removeAclEntries
      },
      inviteData: {
        canInviteAsGuest: false,
        canInviteAsTeamMember: (0,_billing__WEBPACK_IMPORTED_MODULE_4__/* .canUserChangeTeamMembers */ .Qu)(team, user.key),
        async invite(breakdown) {
          if (breakdown.emailsToAddAsMembers.length > 0) {
            const res = await invite(team, breakdown.emailsToAddAsMembers);
            switch (res.status) {
              case _billing__WEBPACK_IMPORTED_MODULE_4__/* .TeamInviteStatus */ .wH.UPGRADE_PAYWALL:
                {
                  return {
                    status: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingInviteStatus */ .zp.FAILED_UPGRADE_PAYWALL
                  };
                }
              case _billing__WEBPACK_IMPORTED_MODULE_4__/* .TeamInviteStatus */ .wH.SUCCESS:
                {
                  return {
                    status: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingInviteStatus */ .zp.SUCCESS,
                    entries: res.members.map(m => (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .mapTeamMemberToAclEntry */ .zr)(m, {
                      permissionSetKey: null
                    }))
                  };
                }
            }
          }
          return {
            status: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingInviteStatus */ .zp.SUCCESS,
            entries: []
          };
        }
      },
      constants: {
        adminPermissionSetKey: adminPermission.key,
        noAccessPermissionSetKey: noAccessPermission.key
      }
    };
  }, [aclPermissions, adminPermission.key, fullAccessPermission.key, invite, noAccessPermission.key, sharingApi.aclEntries, sharingApi.canChangeAclEntryPermission, sharingApi.canChangeDefaultPermissionSet, sharingApi.changeAclEntries, sharingApi.changeDefaultPermissionSet, sharingApi.defaultPermissionSetKey, sharingApi.removeAclEntries, team, teamPermissions, user.email, user.key]);
  return {
    sharingConfig,
    sharingI18nConfig
  };
}
function useI18nConfig() {
  return (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .useSharingI18nDefaults */ .Yc)((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    removeAccessAlert: {
      title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_sharing_no_access_alert_title'),
      subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_sharing_no_access_alert_subtitle'),
      body: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_sharing_no_access_alert_body'),
      learnMoreUrl: 'https://support.streak.com/en/articles/2648401-sharing-a-pipeline' // TODO: use a different link
    },
    search: {
      inviteAsTeamMember(email) {
        return {
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getArray('orgs_sharing_invite_email_title', {
            email: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("b", {
              children: email
            })
          }),
          subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_sharing_invite_email_desc')
        };
      },
      inviteAsGuest() {
        return {
          title: null,
          subtitle: null
        };
      },
      cannotInviteEmail() {
        return {
          text: null,
          subtitle: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_sharing_cannot_invite_email')
        };
      }
    }
  }), []));
}
const ORGS_PERMISSION_I18N_PREFIX = 'orgs_sharing_perm';
function useOrgsPermissions() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const adminPermission = (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedPermissionSet */ .YI)(ORGS_PERMISSION_I18N_PREFIX, _constants__WEBPACK_IMPORTED_MODULE_6__/* .ORGS_PERMISSION_ADMIN_KEY */ .gX, {
      order: 0,
      type: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingPermissionSetType */ .L7.STANDARD
    });
    const fullAccessPermission = (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedPermissionSet */ .YI)(ORGS_PERMISSION_I18N_PREFIX, _constants__WEBPACK_IMPORTED_MODULE_6__/* .ORGS_PERMISSION_FULL_ACCESS_KEY */ .v8, {
      order: 1,
      type: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingPermissionSetType */ .L7.STANDARD
    });
    const noAccessPermission = (0,_streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedPermissionSet */ .YI)(ORGS_PERMISSION_I18N_PREFIX, _constants__WEBPACK_IMPORTED_MODULE_6__/* .ORGS_PERMISSION_NO_ACCESS_KEY */ .GJ, {
      order: 2,
      type: _streakyc_common_widgets_sharing__WEBPACK_IMPORTED_MODULE_1__/* .SharingPermissionSetType */ .L7.STANDARD
    });
    return {
      adminPermission,
      fullAccessPermission,
      noAccessPermission,
      teamPermissions: [fullAccessPermission, noAccessPermission],
      aclPermissions: [adminPermission, fullAccessPermission, noAccessPermission]
    };
  }, []);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useOrgTableLookupData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60202);
/* harmony import */ var _communication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74399);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _communication__WEBPACK_IMPORTED_MODULE_3__]);
([_services_data_useData__WEBPACK_IMPORTED_MODULE_2__, _communication__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useOrgTableLookupData(teamKey) {
  const {
    useTeamByKey,
    usePipelines,
    useUserSettings
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_2__/* .useData */ .e)();
  const teamRaw = useTeamByKey(teamKey);
  const pipelines = usePipelines();
  const pipelinesByKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.keyBy)(pipelines, p => p.key), [pipelines]);
  const settings = useUserSettings();
  const callContext = (0,_communication__WEBPACK_IMPORTED_MODULE_3__/* .useCallMenuContext */ .R)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      pipelines,
      pipelinesByKey,
      team: teamRaw,
      userSettings: settings,
      callContext
    };
  }, [pipelines, pipelinesByKey, teamRaw, settings, callContext]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgsView: () => (/* binding */ OrgsView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58556);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77294);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60202);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2225);
/* harmony import */ var _widgets_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67003);
/* harmony import */ var _widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13222);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64936);
/* harmony import */ var _userflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82370);
/* harmony import */ var _utils_tableUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51561);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55912);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78445);
/* harmony import */ var _hooks_useOrgsTableLookupData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80168);
/* harmony import */ var _hooks_useOrgColumns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51734);
/* harmony import */ var _components_orgsSharingMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7989);
/* harmony import */ var _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27882);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64167);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_4__, _team__WEBPACK_IMPORTED_MODULE_9__, _userflow__WEBPACK_IMPORTED_MODULE_10__, _utils_tableUtils__WEBPACK_IMPORTED_MODULE_11__, _data__WEBPACK_IMPORTED_MODULE_12__, _hooks_useOrgsTableLookupData__WEBPACK_IMPORTED_MODULE_14__, _components_orgsSharingMenu__WEBPACK_IMPORTED_MODULE_16__, _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_17__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_18__]);
([_services_data_useData__WEBPACK_IMPORTED_MODULE_4__, _team__WEBPACK_IMPORTED_MODULE_9__, _userflow__WEBPACK_IMPORTED_MODULE_10__, _utils_tableUtils__WEBPACK_IMPORTED_MODULE_11__, _data__WEBPACK_IMPORTED_MODULE_12__, _hooks_useOrgsTableLookupData__WEBPACK_IMPORTED_MODULE_14__, _components_orgsSharingMenu__WEBPACK_IMPORTED_MODULE_16__, _core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_17__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















function OrgsView(_ref) {
  let {
    teamKey,
    onTeamChange
  } = _ref;
  const {
    columns,
    columnsSettings,
    setColumnsSettings
  } = (0,_hooks_useOrgColumns__WEBPACK_IMPORTED_MODULE_15__/* .useOrgColumns */ .$)();
  const lookupData = (0,_hooks_useOrgsTableLookupData__WEBPACK_IMPORTED_MODULE_14__/* .useOrgTableLookupData */ .f)(teamKey);
  const {
    useTeams,
    useCurrentUser,
    useTeamByKey
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_4__/* .useData */ .e)();
  const currentUser = useCurrentUser();
  const {
    getDefaultPermissionSetKey,
    isAccessAllowed
  } = (0,_team__WEBPACK_IMPORTED_MODULE_9__/* .useTeamBasedAccessManager */ .qb)(_constants__WEBPACK_IMPORTED_MODULE_13__/* .ORGS_TEAM_PERMISSION_KEY */ .Qg);
  const teams = useTeams().filter(t => isAccessAllowed(t, currentUser));
  const selectedTeam = useTeamByKey(teamKey);
  const context = (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_8__/* .useSpreadsheet */ .MW)({
    cacheKey: (0,_constants__WEBPACK_IMPORTED_MODULE_13__/* .ORGS_CACHE_KEY_PATTERN */ .C3)(teamKey),
    data: {
      collectionDef: _data__WEBPACK_IMPORTED_MODULE_12__/* .ORGS_COLLECTION_DEF */ .F,
      collectionParams: (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        teamKey
      }), [teamKey]),
      lookupData
    },
    table: {
      buildTableDef: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(_ref2 => {
        let {
          updateRecord
        } = _ref2;
        return (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_11__/* .defineOrgTable */ .o)({
          columns,
          updateOrg: updateRecord
        });
      }, [columns]),
      columnsSettingsState: [columnsSettings, setColumnsSettings],
      record: {
        rowType: 'org',
        createNewRecord: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => ({
          teamKey,
          key: `local-${crypto.randomUUID()}`,
          nameGen: '',
          domains: [],
          normalizedDomains: [],
          industry: '',
          phoneNumbers: [],
          employeeCount: '',
          addresses: [],
          relatedPipelines: [],
          creationDate: 0,
          lastSavedTimestamp: 0
        }), [teamKey])
      }
    }
  });
  const canAccessOrgs = selectedTeam ? isAccessAllowed(selectedTeam, currentUser) : false;
  const showTeamMenu = selectedTeam && teams.length > 1;
  const labelText = context.dataCtx.total > 0 ? showTeamMenu ? `${selectedTeam.name} (${context.dataCtx.total || ''})` : context.dataCtx.total : showTeamMenu ? selectedTeam.name : '';
  const label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
    variant: "base/basic",
    color: "black/secondary",
    display: "contents",
    children: labelText
  });
  const isDefaultPermNotSet = !!selectedTeam && getDefaultPermissionSetKey(selectedTeam) === null;
  const {
    startFlow
  } = (0,_userflow__WEBPACK_IMPORTED_MODULE_10__/* .useUserflow */ .V)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedTeam && isDefaultPermNotSet) {
      startFlow(_userflow__WEBPACK_IMPORTED_MODULE_10__/* .StreakUserflowFlow */ .j.ORGS_DEFAULT_PERMISSIONS);
    }
  }, [isDefaultPermNotSet, startFlow, selectedTeam]);
  const {
    contactsOrgs
  } = (0,_core_hooks_useEnabledFeatures__WEBPACK_IMPORTED_MODULE_17__/* .useEnabledFeatures */ .o)([_constants__WEBPACK_IMPORTED_MODULE_13__/* .ORGS_AS_PAID_FEATURE_KEY */ .jj]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!contactsOrgs) {
      _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK.Router.goto('inbox');
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)({
        feature: _constants__WEBPACK_IMPORTED_MODULE_13__/* .ORGS_AS_PAID_FEATURE_KEY */ .jj
      });
    }
  }, [contactsOrgs]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_8__/* .SpreadsheetLayout */ .bu, {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_view__WEBPACK_IMPORTED_MODULE_7__/* .ViewHeader */ .tr, {
      title: "Directory",
      titleActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
        children: showTeamMenu ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_team__WEBPACK_IMPORTED_MODULE_9__/* .TeamsMenuWidget */ .eq, {
          teams: teams,
          team: selectedTeam,
          onTeamChange: newTeam => onTeamChange(newTeam.key),
          onManageClick: () => _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_2__.inboxSDK?.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_1__/* .StreakCustomRoute */ .ld.ACCOUNT),
          style: {
            placement: 'bottom-end',
            triggerColor: 'black',
            triggerSize: 's',
            triggerValue: () => label
          }
        }) : label
      }),
      rightActions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
        children: selectedTeam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_orgsSharingMenu__WEBPACK_IMPORTED_MODULE_16__/* .OrgsSharingMenu */ .t
        /**
         * IMPORTANT: this will make react re-initialize the component so initialOpen value gets replied if the teamKey changes
         */, {
          /**
           * open sharing menu if no default permission set.
           * In this case only the owners can navigate to this view so it is ok to open it just by checking the value
           */
          initialOpen: isDefaultPermNotSet,
          teamKey: selectedTeam.key
        }, selectedTeam.key)
      })
    }),
    table: canAccessOrgs ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_8__/* .Spreadsheet */ .YF, {
      context: context
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_6__/* .LayoutBox */ .kZ, {
      flex: true,
      alignItemH: "center",
      alignItemV: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_6__/* .LayoutColumn */ .rO, {
        alignItemsH: "center",
        gapV: "xs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
          variant: "H3 - Section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_no_access_title')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Typo */ .Jd, {
          variant: "H4 - Caption",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_5__/* .Span */ .Dr, {
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__.Locale.getString('orgs_no_access_desc')
          })
        })]
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ defineOrgTable)
/* harmony export */ });
/* harmony import */ var _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16768);
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77294);
/* harmony import */ var _widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13222);
/* harmony import */ var _lib_initiateCall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88314);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_initiateCall__WEBPACK_IMPORTED_MODULE_3__]);
_lib_initiateCall__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const openURL = url => {
  const URL = url.startsWith('http') ? url : `https://${url}`;
  window.open(URL, '_blank');
};
function defineOrgTable(_ref) {
  let {
    columns,
    updateOrg
  } = _ref;
  return (0,_streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .defineTable */ .hG)({
    renderers: [_streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .TEXT_RENDERER */ .yj, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .PROFILE_RENDERER */ .KG, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LINK_ARRAY_RENDERER */ .DA, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LINK_RENDERER */ .or, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .LABEL_RENDERER */ .v8, _streakyc_ui_components_table__WEBPACK_IMPORTED_MODULE_0__/* .PHONE_ARRAY_RENDERER */ .Pl],
    columns: _ref2 => {
      let {
        defineColumn
      } = _ref2;
      return columns.map(c => defineColumn(c.columnId, {
        menu: {
          canPin: true,
          canHide: true
        },
        icon: c.icon,
        loadingRenderer: c.loadingRenderer
      }));
    },
    rows: _ref3 => {
      let {
        defineRow
      } = _ref3;
      return [defineRow({
        name: 'org',
        cells: _ref4 => {
          let {
            defineCell
          } = _ref4;
          return {
            name: defineCell({
              render(entity) {
                return {
                  renderer: 'PROFILE',
                  data: {
                    readonly: true,
                    name: entity.nameGen || _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__.Locale.getString('untitled_in_parentheses'),
                    initial: (entity.nameGen?.[0] ?? '').toUpperCase(),
                    imageUrl: entity.logoURL,
                    isGroup: true,
                    onClick: () => {
                      _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto('streak/organization/:key', {
                        key: entity.key
                      });
                    }
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            domains: defineCell({
              render(entity) {
                return {
                  renderer: 'LINK_ARRAY',
                  data: {
                    readonly: true,
                    links: entity.domains.map(domain => ({
                      value: domain,
                      onClick: () => {
                        openURL(domain);
                      }
                    }))
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            pipelines: defineCell({
              render(entity, _, lookupData) {
                const pipelinesData = entity.relatedPipelines.filter(rp => lookupData.pipelinesByKey[rp.pipelineKey]).map(rp => ({
                  boxes: rp.boxes,
                  pipeline: lookupData.pipelinesByKey[rp.pipelineKey]
                }));
                const {
                  labels
                } = (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_2__/* .mapPipelinesToLabelRendererData */ .Yc)(pipelinesData);
                return {
                  renderer: 'LABELS',
                  data: {
                    readonly: true,
                    labels
                  }
                };
              },
              onEdited() {
                // noop
              },
              hoverCard(data, _, lookupData) {
                if (data.relatedPipelines.length === 0) return null;
                return (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_2__/* .boxesHoverCard */ .P4)({
                  lookupData,
                  boxes: data.relatedPipelines.flatMap(rp => rp.boxes),
                  onClick(box) {
                    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_1__.inboxSDK.Router.goto(_core_routing__WEBPACK_IMPORTED_MODULE_5__/* .StreakCustomRoute */ .ld.BOX, {
                      key: box.key
                    });
                  }
                });
              }
            }),
            industry: defineCell({
              render(entity) {
                return {
                  renderer: 'TEXT',
                  data: {
                    readonly: true,
                    value: entity.industry || ''
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            employeeCount: defineCell({
              render(entity) {
                return {
                  renderer: 'TEXT',
                  data: {
                    readonly: true,
                    value: entity.employeeCount || ''
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            phoneNumbers: defineCell({
              render(entity) {
                return {
                  renderer: 'PHONE_ARRAY',
                  data: {
                    readonly: true,
                    phones: entity.phoneNumbers
                  }
                };
              },
              onEdited(_entity, _newValue) {
                // noop
              },
              hoverCard: (data, _, lookupData) => {
                if (data.phoneNumbers.length === 0) return null;
                return (0,_widgets_spreadsheetV2__WEBPACK_IMPORTED_MODULE_2__/* .phonesHoverCard */ .eM)({
                  callContext: lookupData.callContext,
                  phones: data.phoneNumbers,
                  onClick(phone, options) {
                    (0,_lib_initiateCall__WEBPACK_IMPORTED_MODULE_3__/* .callInitWithTeamContact */ .Bi)(phone, {
                      key: data.key
                    }, options);
                  }
                });
              }
            }),
            addresses: defineCell({
              render(entity) {
                return {
                  renderer: 'LINK_ARRAY',
                  data: {
                    readonly: false,
                    links: entity.addresses.map(address => ({
                      value: address,
                      onClick: () => {
                        openURL(`https://www.google.com/maps/search/?api=1&query=${address}`);
                      }
                    }))
                  }
                };
              },
              onEdited() {
                // noop
              }
            }),
            ...fromEntriesTyped([{
              column: 'twitter',
              entityField: 'twitterHandle',
              domain: 'twitter.com'
            }, {
              column: 'linkedin',
              entityField: 'linkedinHandle',
              domain: 'linkedin.com'
            }, {
              column: 'facebook',
              entityField: 'facebookHandle',
              domain: 'facebook.com'
            }, {
              column: 'instagram',
              entityField: 'instagramHandle',
              domain: 'instagram.com'
            }].map(entry => {
              return [entry.column, defineCell({
                render(entity) {
                  const entityValue = entity[entry.entityField];
                  const prepCellValue = (domain, socialHandle) => {
                    if (!socialHandle) return '';
                    if (socialHandle.includes(domain)) return socialHandle;
                    return `${domain}/${socialHandle}`;
                  };
                  const cellValue = prepCellValue(entry.domain, entityValue);
                  return {
                    renderer: 'LINK',
                    data: {
                      readonly: false,
                      value: cellValue,
                      onClick: () => {
                        openURL(cellValue);
                      }
                    }
                  };
                },
                onEdited(entity, newValue) {
                  updateOrg(entity.key, {
                    [entry.entityField]: newValue.data.value
                  });
                }
              })];
            }))
          };
        }
      })];
    }
  });
}
function fromEntriesTyped(entries) {
  return Object.fromEntries(entries);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* reexport safe */ _internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   j: () => (/* reexport safe */ _internal_types__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* harmony import */ var _internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73627);
/* harmony import */ var _internal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__]);
_internal_useUserflow__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ startFlow)
/* harmony export */ });
/* harmony import */ var userflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32746);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7961);
/* harmony import */ var _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([userflow_js__WEBPACK_IMPORTED_MODULE_0__, _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__]);
([userflow_js__WEBPACK_IMPORTED_MODULE_0__, _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function startFlow(user, flowId, track, options, attributes) {
  try {
    const setupSuccess = userflow_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.isIdentified() || (await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_2__/* .userflowIdentifyUser */ .m)(attributes));
    if (setupSuccess) {
      await userflow_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.start(flowId, options);
      track('flowStarted', {
        userEmail: user.email,
        flowId,
        options
      });
      return true;
    }
  } catch (error) {
    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
      err: new Error('Error starting userflow flow', {
        cause: error
      }),
      details: {
        flowId
      },
      level: 'warning'
    });
  }
  return false;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ StreakUserflowFlow)
/* harmony export */ });
let StreakUserflowFlow = /*#__PURE__*/function (StreakUserflowFlow) {
  StreakUserflowFlow["CONTACTS_DEFAULT_PERMISSIONS"] = "b5614b1a-5b65-4f4c-a1ab-04d5165dd06f";
  StreakUserflowFlow["ORGS_DEFAULT_PERMISSIONS"] = "6e87f9a0-e01b-4b07-a915-611af66327ac";
  return StreakUserflowFlow;
}({});

/***/ }),

/***/ 73627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useUserflow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_data_useData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60202);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28270);
/* harmony import */ var _services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_useData__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__]);
([_services_data_useData__WEBPACK_IMPORTED_MODULE_1__, _helpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useUserflow() {
  const track = (0,_services_tracker_useTracker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('userflow');
  const {
    useCurrentUser
  } = (0,_services_data_useData__WEBPACK_IMPORTED_MODULE_1__/* .useData */ .e)();
  const user = useCurrentUser();
  const start = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((flow, options) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .startFlow */ .a)(user, flow, track, options);
  }, [track, user]);
  return {
    startFlow: start
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.5354.7c8456272dd3dd540d92.js.map