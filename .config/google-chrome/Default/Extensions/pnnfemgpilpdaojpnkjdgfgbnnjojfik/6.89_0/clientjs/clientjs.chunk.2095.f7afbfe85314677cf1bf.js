"use strict";
export const id = 2095;
export const ids = [2095];
export const modules = {

/***/ 76287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startCancellationFlow)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97833);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5575);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7961);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57937);
/* harmony import */ var _CancellationFlowController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18314);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56919);
/* harmony import */ var _setupUserflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32965);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_billing_utils__WEBPACK_IMPORTED_MODULE_1__, _CancellationFlowController__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__, _setupUserflow__WEBPACK_IMPORTED_MODULE_4__]);
([_billing_utils__WEBPACK_IMPORTED_MODULE_1__, _CancellationFlowController__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__, _setupUserflow__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function startCancellationFlow(team) {
  const activePlan = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .getTeamPlan */ .CG)(team);
  const teamMembers = team.getUsingMembers();
  const teamSize = teamMembers.length;
  // We are intentionally not localizing this text as we currently only show Userflow in English
  let teamMembersListText = teamMembers.map(_ref => {
    let {
      email
    } = _ref;
    return email;
  }).slice(0, 5).join(', ');
  if (teamSize > 5) {
    teamMembersListText += `, and ${teamSize - 5} more users`;
  }
  const user = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_5__/* .getUser */ .P)();
  const hasCancellationDiscount = user.getHasCancellationDiscount();
  let startFlowSuccess = true;
  try {
    const currentPeriodEnd = new Date(team?.getBillingInfo()?.subscription?.currentPeriodEnd || '');
    startFlowSuccess = await (0,_setupUserflow__WEBPACK_IMPORTED_MODULE_4__/* .startUserflowContent */ .Z)(_config__WEBPACK_IMPORTED_MODULE_3__/* .CANCELLATION_FLOW_ID */ .NL, {
      once: false
    }, {
      // We are intentionally using  'displayName' here rather than the Plan model's specialized
      // `getLocalizedName`. We check planName for the keyword "Pro" in the Userflow logic this
      // is passed to.
      planId: activePlan.externalToolId || activePlan.planId,
      planName: activePlan.name,
      planInterval: activePlan.billingPeriodType.toLowerCase(),
      planCurrentPeriodEnd: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(currentPeriodEnd) ? {
        set: currentPeriodEnd.toISOString(),
        data_type: 'datetime'
      } : undefined,
      isPlanOnTrial: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .isTeamOnTrial */ .yv)(team),
      teamMembersListText,
      teamMrr: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_1__/* .getTeamMrr */ .Xw)(team),
      teamPlanId: activePlan.externalToolId || activePlan.planId,
      teamSize: teamSize,
      // needed for userflow to check whether or not to show the discount step in the flow
      hasCancellationDiscount: hasCancellationDiscount || false,
      // needed for userflow to check whether or not to skip the discount step in the flow
      // need this because we can't grant discount on top of cancellation discount
      currentPlanDiscountPercentage: activePlan.defaultDiscountPercentage || 0
    });

    // passing info to cancellationFlowController
    _CancellationFlowController__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.setTeam(team);
  } catch (error) {
    startFlowSuccess = false;
    (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)({
      err: error,
      details: {
        message: 'Error starting userflow cancellation flows',
        flowId: _config__WEBPACK_IMPORTED_MODULE_3__/* .CANCELLATION_FLOW_ID */ .NL
      },
      level: 'warning'
    });
  }
  return startFlowSuccess;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamsBody: () => (/* binding */ TeamsBody),
/* harmony export */   "default": () => (/* binding */ AccountView)
/* harmony export */ });
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64167);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13778);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95639);
/* harmony import */ var _widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72905);
/* harmony import */ var _widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27337);
/* harmony import */ var _teamManagement_createTeamModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25416);
/* harmony import */ var _teams_teamListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2449);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90885);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3572);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50452);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_0__, _teamManagement_createTeamModal__WEBPACK_IMPORTED_MODULE_6__, _teams_teamListing__WEBPACK_IMPORTED_MODULE_7__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__, _billing_helpers__WEBPACK_IMPORTED_MODULE_10__]);
([_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_0__, _teamManagement_createTeamModal__WEBPACK_IMPORTED_MODULE_6__, _teams_teamListing__WEBPACK_IMPORTED_MODULE_7__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__, _billing_helpers__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function AccountView() {
  // use selector to re-render component on teams changes (to avoid subscribing to getTeams event stream)
  (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useSelector */ .v9)(state => state.models.teams);
  function handleCreateTeamClick() {
    const allowCreateFreeTeamsExp = _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__.EnabledFeatures.isFeatureEnabled('allowCreateFreeTeamsExp');
    if (!_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_9__.EnabledFeatures.isFeatureEnabled('createTeams') && !allowCreateFreeTeamsExp) {
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        feature: 'createTeams',
        team: (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getLargestTeam */ .n4)()
      });
    } else {
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__["default"].track('CreateTeamModal show modal');
      (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('createTeamModal_title'),
        confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('createTeamModal_confirm'),
        bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('createTeamModal_body_0'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getArray('createTeamModal_body_1', {
            helpLink: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              onClick: () => {
                window.open('https://support.streak.com/en/articles/2648798-pipeline-access-roles', '_blank');
                _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__["default"].track('CreateTeamModal helpLink clicked');
              },
              children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_pipelineAdminError_helpLink_changeRole')
            }, "helpLink")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("br", {}), _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('createTeamModal_body_2')]
        })
      }).then(_ref => {
        let {
          confirmClicked
        } = _ref;
        if (confirmClicked) {
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_2__["default"].track('CreateTeamModal continue clicked');
          (0,_teamManagement_createTeamModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
        }
      });
    }
  }
  const teams = _services_data_commonData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.getTeams();
  const loaded = teams.getHasLoaded();
  let bodyElement;
  if (!loaded) {
    bodyElement = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_loadingSpinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
  } else {
    bodyElement = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      children: [teams.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TeamsBody, {
        teams: teams
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "streak__teams_createNew",
        onClick: () => handleCreateTeamClick(),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('create_new_team')
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "streak__account_page",
    children: bodyElement
  });
}
function TeamsBody(_ref2) {
  let {
    teams
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: "streak__teams",
    children: teams.map(team => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_teams_teamListing__WEBPACK_IMPORTED_MODULE_7__/* .TeamListing */ .J, {
      team: team
    }, team.key()))
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoadingTeam)
/* harmony export */ });
/* harmony import */ var _basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__]);
_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function LoadingTeam(props) {
  const {
    team,
    plan,
    track
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__/* .BasicTeamInfo */ .e, {
    team: team,
    plan: plan,
    track: track,
    headerDetails: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "streak__team_header_userRole",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('notice_loading')
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ BasicTeamInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _sections_membersSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95124);
/* harmony import */ var _sections_planSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89041);
/* harmony import */ var _widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37155);
/* harmony import */ var _widgets_gmailTextarea_textareaDecorators_modelPropInputDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3586);
/* harmony import */ var _widgets_gmailTextarea_textareaDecorators_validatorInputDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52489);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sections_membersSection__WEBPACK_IMPORTED_MODULE_1__, _sections_planSection__WEBPACK_IMPORTED_MODULE_2__]);
([_sections_membersSection__WEBPACK_IMPORTED_MODULE_1__, _sections_planSection__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







class BasicTeamInfo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      team,
      plan,
      track,
      headerDetails,
      membersActionables,
      planActionables,
      userCanChangeTeamName,
      children
    } = this.props;
    const billingAdmin = team.getMemberByUserKey(team.getBillingAdminKey());
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "streak__team",
      "data-team": team.key(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "streak__team_header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "streak__team_header_teamName",
          children: userCanChangeTeamName || false ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            ref: "teamName",
            className: "streak__team_header_teamName_edit",
            style: {
              display: 'block'
            },
            defaultValue: team.displayNameText(),
            borderOptions: {
              borderBehavior: 'GMAIL'
            },
            textAreaOptions: {
              multiline: false
            },
            onClick: _ref => {
              let {
                event
              } = _ref;
              return event.stopPropagation();
            },
            onBlur: () => this.refs.teamName.scrollLeft(),
            decorators: [{
              decoratorClass: _widgets_gmailTextarea_textareaDecorators_modelPropInputDecorator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              options: {
                model: team,
                property: 'name',
                trackingContext: 'teamsPage',
                blurOnEnterPress: true,
                restoreOriginalOnEscapePress: true,
                preSaveCheckFunction: text => text.length > 0
              }
            }, {
              decoratorClass: _widgets_gmailTextarea_textareaDecorators_validatorInputDecorator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
              options: {
                showInvalidInputStatusText: false,
                validatorFunction: text => ({
                  isValid: text.length > 0
                })
              }
            }]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "streak__team_header_teamName_readOnly",
            "data-tooltip": team.displayNameText(),
            children: team.displayNameText()
          })
        }), headerDetails]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "streak__team_sections",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_membersSection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          team: team,
          billingAdminEmail: billingAdmin?.email,
          actionables: membersActionables,
          track: track
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_planSection__WEBPACK_IMPORTED_MODULE_2__/* .PlanSection */ .V, {
          actionables: planActionables,
          plan: plan,
          billingInfo: team.getBillingInfo()
        }), children]
      })]
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ BillingInfo)
/* harmony export */ });
/* harmony import */ var _sections_trialSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32967);
/* harmony import */ var _sections_paymentSectionForTeam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14469);
/* harmony import */ var _sections_invoicesSectionForTeam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88604);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57937);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sections_trialSection__WEBPACK_IMPORTED_MODULE_0__, _sections_paymentSectionForTeam__WEBPACK_IMPORTED_MODULE_1__, _sections_invoicesSectionForTeam__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_3__]);
([_sections_trialSection__WEBPACK_IMPORTED_MODULE_0__, _sections_paymentSectionForTeam__WEBPACK_IMPORTED_MODULE_1__, _sections_invoicesSectionForTeam__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function BillingInfo(props) {
  const {
    team,
    track
  } = props;
  const currentUserKey = (0,_services_data_user__WEBPACK_IMPORTED_MODULE_5__/* .getUser */ .P)().key();
  const currentUserBillingAdmin = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_3__/* .isUserBillingAdmin */ .n)(team, currentUserKey);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "streak__teams_billingInfo",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sections_paymentSectionForTeam__WEBPACK_IMPORTED_MODULE_1__/* .PaymentSectionForTeam */ .o, {
      team: team,
      track: track
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sections_trialSection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      team: team
    }), currentUserBillingAdmin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sections_invoicesSectionForTeam__WEBPACK_IMPORTED_MODULE_2__/* .InvoicesSectionForTeam */ .Z, {
      team: team,
      track: track
    }) : null]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ InvitedTeam)
/* harmony export */ });
/* harmony import */ var _basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _teamManagement_teamInviteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57652);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95639);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _teamManagement_teamInviteModal__WEBPACK_IMPORTED_MODULE_1__]);
([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _teamManagement_teamInviteModal__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function InvitedTeam(props) {
  const {
    team,
    plan,
    track
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__/* .BasicTeamInfo */ .e, {
    team: team,
    plan: plan,
    track: track,
    headerDetails: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "streak__team_header_userRole",
        style: {
          marginRight: '25px'
        },
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('teams_header_role_invited')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "streak__team_acceptInvite",
        onClick: () => _acceptInviteClicked(team, track),
        style: {
          marginRight: '25px'
        },
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('account_teams_memberTeams_accept')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "streak__team_declineInvite",
        onClick: () => _declineInviteClicked(team, track),
        color: "red",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('account_teams_memberTeams_decline')
      })]
    })
  });
}
function _acceptInviteClicked(team, track) {
  track('teamsAcceptInviteClicked');
  (0,_teamManagement_teamInviteModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(team.key());
}
function _declineInviteClicked(team, track) {
  track('teamsDeclineInviteClicked');
  (0,_teamManagement_teamInviteModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(team.key());
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ MemberTeam)
/* harmony export */ });
/* harmony import */ var _basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13665);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95639);
/* harmony import */ var _widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76894);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_1__, _widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_4__]);
([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_1__, _widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function MemberTeam(props) {
  const {
    team,
    plan,
    track
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__/* .BasicTeamInfo */ .e, {
    team: team,
    plan: plan,
    track: track,
    headerDetails: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "streak__team_header_userRole",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('teams_header_role_member')
    }),
    membersActionables: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_1__/* .LeaveTeamTextLink */ .K, {
      team: team,
      track: track
    }),
    planActionables: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      className: "streak__team_requestUpgrade",
      onClick: () => _requestUpgradeClicked(team, plan, track),
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('teams_requestUpgrade')
    })
  });
}
function _requestUpgradeClicked(team, currentPlan, track) {
  track('teamsRequestUpgradeClicked');
  (0,_widgets_paywallGateway_openPlanUpgradeRequestEmail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    recipientEmails: team.getOwners().map(_ref => {
      let {
        email
      } = _ref;
      return email;
    }).filter(Boolean),
    currentPlan: currentPlan
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ OwnerTeam)
/* harmony export */ });
/* harmony import */ var _basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _billingInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34768);
/* harmony import */ var _sections_sharingSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84668);
/* harmony import */ var _sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69224);
/* harmony import */ var _subscriptionFlows_changeTeamFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16574);
/* harmony import */ var _planCancelModal_planCancelViewController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97219);
/* harmony import */ var _widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75191);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95639);
/* harmony import */ var _billing_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87789);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57937);
/* harmony import */ var _customOnboarding_startCancellationFlow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76287);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7961);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _billingInfo__WEBPACK_IMPORTED_MODULE_1__, _sections_sharingSection__WEBPACK_IMPORTED_MODULE_2__, _sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__, _subscriptionFlows_changeTeamFlow__WEBPACK_IMPORTED_MODULE_4__, _planCancelModal_planCancelViewController__WEBPACK_IMPORTED_MODULE_5__, _billing_api__WEBPACK_IMPORTED_MODULE_8__, _billing_utils__WEBPACK_IMPORTED_MODULE_9__, _customOnboarding_startCancellationFlow__WEBPACK_IMPORTED_MODULE_10__]);
([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _billingInfo__WEBPACK_IMPORTED_MODULE_1__, _sections_sharingSection__WEBPACK_IMPORTED_MODULE_2__, _sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__, _subscriptionFlows_changeTeamFlow__WEBPACK_IMPORTED_MODULE_4__, _planCancelModal_planCancelViewController__WEBPACK_IMPORTED_MODULE_5__, _billing_api__WEBPACK_IMPORTED_MODULE_8__, _billing_utils__WEBPACK_IMPORTED_MODULE_9__, _customOnboarding_startCancellationFlow__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function OwnerTeam(props) {
  const {
    team,
    plan,
    track
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__/* .BasicTeamInfo */ .e, {
    team: team,
    plan: plan,
    track: track,
    userCanChangeTeamName: true,
    headerDetails: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
      className: "streak__team_header_userRole",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('teams_header_role_owner')
    }),
    membersActionables: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_9__/* .isTeamOnManualSettlement */ .Sx)(team) && !__webpack_require__.g.Streak.ai ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      className: "streak__teams_members_change",
      onClick: () => _manageTeamClicked(team, track),
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('account_teams_ownedTeams_addRemove')
    }),
    planActionables: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(PlanActionButtons, {
      team: team,
      track: track
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sections_sharingSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      team: team,
      track: track
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_billingInfo__WEBPACK_IMPORTED_MODULE_1__/* .BillingInfo */ .O, {
      team: team,
      track: track
    })]
  });
}

/* ==================================== */

function PlanActionButtons(_ref) {
  let {
    team,
    track
  } = _ref;
  const resume = async () => {
    track('teamsResumeClicked', {
      teamKey: team.key()
    });
    try {
      await (0,_billing_api__WEBPACK_IMPORTED_MODULE_8__/* .resumeSubscription */ .Z8)({
        team
      });
    } catch (err) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)({
        err: new Error('Failed to resume subscription', {
          cause: err
        })
      });
    }
  };
  if ((0,_widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)()) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
      children: ["(", _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('non_plan_platform_plan_locked'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
        href: "https://support.streak.com/en/articles/3397745-streak-platform-comparison",
        target: "_blank",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('help')
      }), ")"]
    });
  } else if ((0,_billing_utils__WEBPACK_IMPORTED_MODULE_9__/* .isTeamOnManualSettlement */ .Sx)(team)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {});
  } else if (!(0,_billing_utils__WEBPACK_IMPORTED_MODULE_9__/* .isTeamOnPremiumPlan */ .rP)(team)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      team: team,
      track: track
    });
  } else if (team.getBillingInfo()?.subscription?.cancelAt) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      className: "streak__teams_plan_upgrade",
      onClick: resume,
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString('account_resume_plan')
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        team: team,
        style: {
          marginRight: '5px'
        },
        track: track
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        className: "streak__teams_plan_cancel",
        color: "red",
        onClick: async () => await _cancelPlanClicked(team, track),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.getString((0,_billing_utils__WEBPACK_IMPORTED_MODULE_9__/* .isTeamOnTrial */ .yv)(team) ? 'account_cancel_plan_trial' : 'account_cancel_plan')
      })]
    });
  }
}

/* ==================================== */

function _manageTeamClicked(team, track) {
  track('teamsChangeMembersClicked');
  (0,_subscriptionFlows_changeTeamFlow__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    team
  });
}
async function _cancelPlanClicked(team, track) {
  track('teamsCancelPlanClicked', {
    teamKey: team.key()
  });

  // start custom cancellation flow from userflow
  const startCustomCancellationFlowSuccess = await (0,_customOnboarding_startCancellationFlow__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(team);
  if (startCustomCancellationFlowSuccess) {
    return;
  }
  track('teamsCancelPlanClicked.startCancellationFlow.failed', {
    teamKey: team.key()
  });
  new _planCancelModal_planCancelViewController__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(team);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ PayerOnlyTeam)
/* harmony export */ });
/* harmony import */ var _basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48308);
/* harmony import */ var _billingInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34768);
/* harmony import */ var _sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13665);
/* harmony import */ var _sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69224);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _billingInfo__WEBPACK_IMPORTED_MODULE_1__, _sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_2__, _sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__]);
([_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__, _billingInfo__WEBPACK_IMPORTED_MODULE_1__, _sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_2__, _sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function PayerOnlyTeam(props) {
  const {
    team,
    plan,
    track
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_basicTeamInfo__WEBPACK_IMPORTED_MODULE_0__/* .BasicTeamInfo */ .e, {
    team: team,
    plan: plan,
    track: track,
    headerDetails: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "streak__team_header_userRole",
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_header_role_payerOnly')
    }),
    membersActionables: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sections_leaveTeamTextLink__WEBPACK_IMPORTED_MODULE_2__/* .LeaveTeamTextLink */ .K, {
      team: team,
      track: track
    }),
    planActionables: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sections_upgradeTeamTextLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      team: team,
      track: track
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_billingInfo__WEBPACK_IMPORTED_MODULE_1__/* .BillingInfo */ .O, {
      team: team,
      track: track
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AutoJoinSection)
/* harmony export */ });
/* harmony import */ var _widgets_react_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9045);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13778);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);




function AutoJoinSection(props) {
  const {
    team,
    domain
  } = props;
  const autoJoin = team.isAutoApproveJoinRequestsOn();
  const handleCheckbox = () => {
    team.setAutoApproveJoinRequests(!autoJoin);
    team.save();
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_1__["default"].track('teamsPage.clickAutoApproveCheckbox', {
      autoApproveIsOn: autoJoin,
      teamKey: team.key()
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_widgets_react_checkbox__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    checked: autoJoin,
    onChange: handleCheckbox,
    children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getString('account_teams_autoAddUsers_checkbox', {
      orgDomain: domain
    })
  });
}

/***/ }),

/***/ 88604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InvoicesSectionForTeam)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98137);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68248);
/* harmony import */ var _settingsCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18546);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95639);
/* harmony import */ var _widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37155);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35091);
/* harmony import */ var _billing_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91477);
/* harmony import */ var _billing_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87789);
/* harmony import */ var _react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10102);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_billing_api__WEBPACK_IMPORTED_MODULE_9__]);
_billing_api__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function InvoicesSectionForTeam(props) {
  const {
    team,
    track
  } = props;
  const forceUpdate = (0,_react_toolkit_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_10__/* .useForceUpdate */ .N)();
  const billingInfo = team.getBillingInfo();
  const [invoiceSettings, setInvoiceSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    const settings = {
      automaticallySendInvoiceEmails: team.isAutomaticInvoiceEmailEnabled(),
      emailsToSendInvoiceTo: team.getEmailsToSendInvoiceTo(),
      invoiceFooter: ''
    };
    if (billingInfo.billingScope === _billing_models__WEBPACK_IMPORTED_MODULE_8__/* .TeamBillingScope */ .qM.Owner) {
      settings.invoiceFooter = billingInfo.invoiceSettings?.invoiceFooter || '';
    }
    return settings;
  });
  const [showInvoiceOptions, setShowInvoiceOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(invoiceSettings.automaticallySendInvoiceEmails && invoiceSettings.emailsToSendInvoiceTo.length > 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const stopper = kefir_stopper__WEBPACK_IMPORTED_MODULE_12___default()();
    kefir__WEBPACK_IMPORTED_MODULE_1__["default"].merge([team.getChangesStream('emailsToSendInvoiceTo'), team.getChangesStream('automaticallySendInvoiceEmails')]).takeUntilBy(stopper).onValue(forceUpdate);
    return () => {
      stopper.destroy();
    };
  }, [team, forceUpdate]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const update = async () => {
      if (billingInfo.billingScope === _billing_models__WEBPACK_IMPORTED_MODULE_8__/* .TeamBillingScope */ .qM.Owner) {
        const promises = [];
        if (invoiceSettings.invoiceFooter !== billingInfo.invoiceSettings?.invoiceFooter) {
          promises.push((0,_billing_api__WEBPACK_IMPORTED_MODULE_9__/* .updateInvoiceSettingsRequest */ .Bq)({
            team,
            invoiceSettings: {
              invoiceFooter: invoiceSettings.invoiceFooter
            }
          }));
        }
        let teamChanged = false;
        if (invoiceSettings.automaticallySendInvoiceEmails !== team.isAutomaticInvoiceEmailEnabled()) {
          team.setAutomaticInvoiceEmailEnabled(invoiceSettings.automaticallySendInvoiceEmails);
          teamChanged = true;
        }
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(invoiceSettings.emailsToSendInvoiceTo, team.getEmailsToSendInvoiceTo())) {
          team.setEmailsToSendInvoiceTo(invoiceSettings.emailsToSendInvoiceTo);
          teamChanged = true;
        }
        if (teamChanged) {
          promises.push(team.saveWithPromise());
        }
        await Promise.all(promises);
      }
    };
    update();
  }, [team, billingInfo, invoiceSettings]);
  if (billingInfo.billingScope !== _billing_models__WEBPACK_IMPORTED_MODULE_8__/* .TeamBillingScope */ .qM.Owner || billingInfo.invoiceSettings === null) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    className: "streak__teams_invoices",
    sectionLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('teams_invoices'),
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_settingsCheckbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      checked: invoiceSettings.automaticallySendInvoiceEmails,
      onSettingClick: _ref => {
        let {
          checked
        } = _ref;
        track('teamsAutomaticInvoicesChanged', {
          newValue: checked
        });
        setInvoiceSettings({
          ...invoiceSettings,
          automaticallySendInvoiceEmails: checked
        });
      },
      settingLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('invoice_email_checkbox'),
      settingDescription: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('invoice_email_explanation')
    }),
    actionables: null,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      style: {
        marginBottom: '10px'
      },
      children: invoiceSettings.automaticallySendInvoiceEmails ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        onClick: () => setShowInvoiceOptions(!showInvoiceOptions),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString(showInvoiceOptions ? 'teams_invoices_hideOptions' : 'teams_invoices_moreOptions')
      }) : null
    }), invoiceSettings.automaticallySendInvoiceEmails && showInvoiceOptions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(AdditionalRecipientsSettings, {
      additionalRecipientsText: invoiceSettings.emailsToSendInvoiceTo.join(','),
      onAdditionalRecipientsChanged: text => {
        track('teamsAdditionalInvoiceRecipientsChanged', {
          newRecipients: text
        });
        setInvoiceSettings({
          ...invoiceSettings,
          emailsToSendInvoiceTo: text.split(',').map(e => e.trim()).filter(e => e)
        });
      },
      addressData: invoiceSettings.invoiceFooter,
      onAddressDataChanged: text => {
        track('teamsInvoiceAddressDataChanged', {
          text
        });
        setInvoiceSettings({
          ...invoiceSettings,
          invoiceFooter: text
        });
      }
    }) : null]
  });
}

/* ==================================== */

function AdditionalRecipientsSettings(props) {
  const {
    additionalRecipientsText,
    onAdditionalRecipientsChanged,
    addressData,
    onAddressDataChanged
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    style: {
      maxWidth: '400px',
      fontSize: '80%'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("b", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('invoice_additional_recipients')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        style: {
          marginBottom: '10px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          style: {},
          textAreaOptions: {
            multiline: false
          },
          defaultValue: additionalRecipientsText,
          placeholderText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('additionalInvoiceRecipientsPlaceholder'),
          onBlur: _ref2 => {
            let {
              text
            } = _ref2;
            return onAdditionalRecipientsChanged(text);
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "streak__teams_invoices_additionalRecipients_address",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("b", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('invoice_add_address')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          style: {},
          textAreaOptions: {
            multiline: true
          },
          placeholderText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.getString('optional'),
          defaultHTMLValue: addressData,
          onBlur: _ref3 => {
            let {
              html
            } = _ref3;
            return onAddressDataChanged(html);
          }
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ LeaveTeamTextLink)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38672);
/* harmony import */ var _services_data_commonData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90885);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95639);
/* harmony import */ var _widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27337);
/* harmony import */ var _pipelineAdminLeavingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21648);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_1__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_2__, _pipelineAdminLeavingModal__WEBPACK_IMPORTED_MODULE_6__, _billing_utils__WEBPACK_IMPORTED_MODULE_7__]);
([_services_data_data__WEBPACK_IMPORTED_MODULE_1__, _services_data_commonData__WEBPACK_IMPORTED_MODULE_2__, _pipelineAdminLeavingModal__WEBPACK_IMPORTED_MODULE_6__, _billing_utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function LeaveTeamTextLink(props) {
  const {
    track,
    team
  } = props;
  if ((0,_billing_utils__WEBPACK_IMPORTED_MODULE_7__/* .isTeamOnManualSettlement */ .Sx)(team)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      onClick: () => _contactBillingAdminClicked(team, track),
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_manualSettlement_requestChange')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    className: "streak__team_leaveTeam",
    onClick: () => {
      _leaveTeamClicked(team, track);
    },
    color: "red",
    children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('account_teams_memberTeams_leave')
  });
}
function _contactBillingAdminClicked(team, track) {
  track('teamsContactBillingAdminToLeaveClicked', {
    teamKey: team.key()
  });
  const billingAdmin = team.getMemberByUserKey(team.getBillingAdminKey());
  _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Compose.openNewComposeView().then(composeView => {
    composeView.setToRecipients([billingAdmin.email]);
    composeView.setSubject(_services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_manualSettlement_requestChange_emailSubject'));
    composeView.insertHTMLIntoBodyAtCursor(_services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_manualSettlement_requestChange_emailBody'));
  });
}
async function _leaveTeamClicked(team, track) {
  track('teamsLeaveTeamClicked');
  const teamKey = team.key();
  const adminedTeamPipelines = _services_data_data__WEBPACK_IMPORTED_MODULE_1__["default"].getAllPipelines().filter(pipeline => pipeline.get('teamKey') === teamKey && pipeline.isCurrentUserAdmin());
  const {
    confirmClicked
  } = await (adminedTeamPipelines.length > 0 ? (0,_pipelineAdminLeavingModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(team) : (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_confirmLeave_title', {
      teamName: team.displayNameText()
    }),
    bodyComponent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_confirmLeave_body')
    }),
    confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_confirmLeave_confirm')
  }));
  if (confirmClicked) {
    team.leaveTeam();
    await team.saveWithPromise();
    const teams = _services_data_commonData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getTeams();
    await teams.refreshWithPromise();
    if (teams.length === 0) {
      _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.goto(_streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Router.NativeRouteIDs.INBOX);
    }
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MembersList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_contactDisplayCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11846);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_react_contactDisplayCard__WEBPACK_IMPORTED_MODULE_2__]);
_widgets_react_contactDisplayCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




class MembersList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    isExpanded: false
  };
  render() {
    const {
      iconUrl,
      labelText,
      members,
      billingAdminEmail
    } = this.props;
    const iconStyling = {
      display: 'inline-block',
      verticalAlign: 'bottom',
      width: '16px',
      height: '16px',
      background: 'rgb(155, 155, 155)'
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "streak__teams_members_memberList",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "streak__teams_members_memberList_label",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            ...iconStyling,
            marginRight: '3px',
            WebkitMask: `url(${iconUrl}) 50% center / 16px no-repeat`
          }
        }), labelText + ':']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "streak__teams_members_memberList_people",
        children: [members.map(teamMember => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_widgets_react_contactDisplayCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          contact: teamMember,
          cardType: "slim",
          children: teamMember.email === billingAdminEmail ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "streak__creditCardIcon",
            "data-tooltip": _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_members_paymentProvider'),
            style: {
              verticalAlign: 'bottom',
              marginRight: '5px'
            }
          }) : null
        }, teamMember.email)), this.props.children]
      })]
    });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MembersSection)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var _membersSection_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8878);
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68248);
/* harmony import */ var _membersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26879);
/* harmony import */ var _autoJoinToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70975);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57937);
/* harmony import */ var _intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49895);
/* harmony import */ var _images_teams_owner_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67055);
/* harmony import */ var _images_teams_member_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28667);
/* harmony import */ var _images_teams_pending_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61742);
/* harmony import */ var _images_teams_cardProvider_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60099);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95639);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_membersList__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_5__, _intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_6__]);
([_membersList__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_5__, _intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function MembersSection(props) {
  const {
    team,
    billingAdminEmail,
    actionables,
    track
  } = props;
  const teamMembers = team.get('members');
  const teamOwners = [];
  const teamRoleMembers = [];
  const teamInvitees = [];
  const teamPayerOnlys = [];
  const teamArchiveOnlys = [];
  teamMembers.forEach(teamMember => {
    const {
      inviteStatus,
      role
    } = teamMember;
    if (inviteStatus === 'Pending') teamInvitees.push(teamMember);else if (role === 'Member') teamRoleMembers.push(teamMember);else if (role === 'Owner') teamOwners.push(teamMember);else if (role === 'PayerOnly') teamPayerOnlys.push(teamMember);else if (role === 'ArchiveOnly') teamArchiveOnlys.push(teamMember);
  });
  const userDomain = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_13__/* .getUser */ .P)().getDomain();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    className: "streak__teams_members",
    sectionLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_members'),
    header: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_header', {
      teamSize: teamMembers.length
    }),
    actionables: actionables,
    children: [teamOwners.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_membersList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      iconUrl: _images_teams_owner_png__WEBPACK_IMPORTED_MODULE_7__,
      labelText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_owners'),
      members: teamOwners,
      billingAdminEmail: billingAdminEmail
    }) : null, teamRoleMembers.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_membersList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      iconUrl: _images_teams_member_png__WEBPACK_IMPORTED_MODULE_8__,
      labelText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_members'),
      members: teamRoleMembers
    }) : null, teamInvitees.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_membersList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      iconUrl: _images_teams_pending_png__WEBPACK_IMPORTED_MODULE_9__,
      labelText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_pendingInvites'),
      members: teamInvitees
    }) : null, teamPayerOnlys.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_membersList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      iconUrl: _images_teams_cardProvider_png__WEBPACK_IMPORTED_MODULE_10__,
      labelText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_teams_memberTeams_payerOnly'),
      members: teamPayerOnlys,
      billingAdminEmail: billingAdminEmail
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ArchivedUsers, {
      members: teamArchiveOnlys,
      track: track
    }), team.isCurrentUserOwner() && userDomain !== 'gmail.com' && (0,_billing_utils__WEBPACK_IMPORTED_MODULE_5__/* .canAddMembersToTeam */ .ql)(team) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_autoJoinToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      team: team,
      domain: userDomain
    })]
  });
}
function ArchivedUsers(props) {
  const {
    members,
    track
  } = props;
  const teamHasArchivedMembers = members.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_membersList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    iconUrl: _images_teams_cardProvider_png__WEBPACK_IMPORTED_MODULE_10__,
    labelText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_archived'),
    members: members,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
      className: _membersSection_module_css__WEBPACK_IMPORTED_MODULE_14__/* .archivedUsers */ .I,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        onClick: () => {
          track('archiveUsers.contactUs.clicked');
          _intercom_intercomMasterController__WEBPACK_IMPORTED_MODULE_6__["default"].triggerEvent('ArchiveUsersContactUsClicked');
        },
        children: teamHasArchivedMembers ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('manage') : _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('contact_us')
      }), !teamHasArchivedMembers && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: ' ' + _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('teams_members_archived_learn_more')
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ PaymentMethod)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93733);
/* harmony import */ var _streakyc_icons_payment_link_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20559);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2225);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _billing_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91477);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_billing_utils__WEBPACK_IMPORTED_MODULE_7__]);
_billing_utils__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function PaymentMethod(_ref) {
  let {
    paymentMethod
  } = _ref;
  if (paymentMethod.type === _billing_models__WEBPACK_IMPORTED_MODULE_6__/* .BillingPaymentMethodType */ .LT.Invoice) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodInvoice, {
      paymentMethod: paymentMethod
    });
  } else if (paymentMethod.type === _billing_models__WEBPACK_IMPORTED_MODULE_6__/* .BillingPaymentMethodType */ .LT.Card) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodCard, {
      paymentMethod: paymentMethod
    });
  } else if (paymentMethod.type === _billing_models__WEBPACK_IMPORTED_MODULE_6__/* .BillingPaymentMethodType */ .LT.UsBankAccount) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodUsBankAccount, {
      paymentMethod: paymentMethod
    });
  } else if (paymentMethod.type === _billing_models__WEBPACK_IMPORTED_MODULE_6__/* .BillingPaymentMethodType */ .LT.LINK) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodLink, {
      paymentMethod: paymentMethod
    });
  } else if (paymentMethod.type === _billing_models__WEBPACK_IMPORTED_MODULE_6__/* .BillingPaymentMethodType */ .LT.UNKNOWN) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodUnknown, {
      paymentMethod: paymentMethod
    });
  }
  return null;
}
function PaymentMethodWrapper(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutRow */ .WM, {
    gapH: "snudge",
    children: [props.icon && (typeof props.icon === 'string' || (0,_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .isIconElement */ ._u)(props.icon)) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      padding: "xsnudge",
      background: "black/surface",
      children: (0,_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .renderIcon */ .hY)(props.icon, 'snudge', 'black/secondary')
    }) : props.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Typo */ .Jd, {
        variant: "body/basic",
        display: "contents",
        fontSize: "s",
        children: props.body
      })
    })]
  });
}
function PaymentMethodInvoice(_ref2) {
  let {
    paymentMethod
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodWrapper, {
    icon: "mail",
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: paymentMethod.invoice.nextInvoiceAt && _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getArray('payment_send_invoice', {
        date: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
          children: date_fns__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(paymentMethod.invoice.nextInvoiceAt, 'MMM dd, yyyy')
        }),
        email: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
          children: paymentMethod.invoice.email
        }),
        days: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
          children: paymentMethod.invoice.daysUntilDue
        })
      })
    })
  });
}
function PaymentMethodCard(_ref3) {
  let {
    paymentMethod
  } = _ref3;
  const monthString = paymentMethod.card.expMonth ? paymentMethod.card.expMonth.toString() : '';
  const expirationString = ('00' + monthString).substring(monthString.length) + '/' + paymentMethod.card.expYear;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodWrapper, {
    icon: "credit_card",
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutColumn */ .rO, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
        children: `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(paymentMethod.card.brand)} ${(0,_billing_utils__WEBPACK_IMPORTED_MODULE_7__/* .getCardStars */ .r0)(paymentMethod.card.brand) + paymentMethod.card.last4}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
        children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('payment_expiration_date'), ": ", expirationString]
      })]
    })
  });
}
function PaymentMethodUsBankAccount(_ref4) {
  let {
    paymentMethod
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodWrapper, {
    icon: "account_balance",
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      children: `${paymentMethod.usBankAccount.bankName} ${'••••' + paymentMethod.usBankAccount.last4}`
    })
  });
}
function PaymentMethodLink(_ref5) {
  let {
    paymentMethod
  } = _ref5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodWrapper, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      padding: "xsnudge|none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: _streakyc_icons_payment_link_svg__WEBPACK_IMPORTED_MODULE_2__,
        style: {
          height: 20
        }
      })
    }),
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_4__/* .LayoutBox */ .kZ, {
      padding: {
        top: 'xs'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getArray('payment_account_owner', {
          owner: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
            children: paymentMethod.link.accountOwner
          })
        })
      })
    })
  });
}
function PaymentMethodUnknown(_) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PaymentMethodWrapper, {
    icon: "payment",
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Span */ .Dr, {
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__.Locale.getString('payment_method_unknown')
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ PaymentSectionForTeam)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5575);
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68248);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95639);
/* harmony import */ var _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68333);
/* harmony import */ var _widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75191);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7961);
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66599);
/* harmony import */ var _billing_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87789);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57937);
/* harmony import */ var _billing_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91477);
/* harmony import */ var _paymentSectionForTeam_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5621);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_4__, _paymentMethod__WEBPACK_IMPORTED_MODULE_6__, _billing_api__WEBPACK_IMPORTED_MODULE_7__, _billing_utils__WEBPACK_IMPORTED_MODULE_8__]);
([_services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_4__, _paymentMethod__WEBPACK_IMPORTED_MODULE_6__, _billing_api__WEBPACK_IMPORTED_MODULE_7__, _billing_utils__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function PaymentSectionForTeam(props) {
  const {
    team,
    track
  } = props;
  const billingInfo = team.getBillingInfo();
  if (billingInfo.billingScope !== _billing_models__WEBPACK_IMPORTED_MODULE_9__/* .TeamBillingScope */ .qM.Owner || !team.hasStripeCustomer()) {
    return null;
  }
  const manualSettlement = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_8__/* .isTeamOnManualSettlement */ .Sx)(team);
  const paymentMethod = billingInfo.paymentMethod;
  const manualSettlementClicked = () => {
    track('teamsManualSettlementClicked', {
      team: team.key()
    });
    _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Compose.openNewComposeView().then(composeView => {
      composeView.setToRecipients(['support@streak.com']);
      composeView.setSubject(_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('account_change_manualSettlement_subject'));
      composeView.insertHTMLIntoBodyAtCursor(_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('account_change_manualSettlement_body'));
    });
  };
  const takeOverBilling = async () => {
    track('teamsTakeOverBillingClicked', {
      team: team.key()
    });
    try {
      await (0,_billing_api__WEBPACK_IMPORTED_MODULE_7__/* .updateTeamBillingAdmin */ .J2)({
        teamKey: team.key(),
        billingAdminKey: (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_11__/* .getUser */ .P)().key()
      });
    } catch (err) {
      (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)({
        err,
        details: 'failed to change billing admin',
        level: 'error'
      });
    }
  };
  const goToBillingPortal = async target => {
    // stripe's billing portal url expires after some time, so generate a new url on user click
    const url = await (0,_billing_api__WEBPACK_IMPORTED_MODULE_7__/* .createTeamBillingPortalUrl */ .wP)({
      teamKey: team.key(),
      target
    });
    window.open(url);
  };
  const goToChangeAddress = () => goToBillingPortal('address');
  const goToAddPaymentMethod = () => goToBillingPortal('payment');
  const goToInvoices = () => goToBillingPortal();
  const currentUserKey = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_11__/* .getUser */ .P)().key();
  const isBillingAdmin = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_8__/* .isUserBillingAdmin */ .n)(team, currentUserKey);
  const canBeBillingAdmin = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_8__/* .canUserBeBillingAdmin */ .Le)(team, currentUserKey);
  const billingAdminAsMember = team.getMemberByUserKey(team.getBillingAdminKey());
  const actionables = () => {
    if (manualSettlement) {
      return null;
    }
    if ((0,_widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)()) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
        children: ["(", _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('non_plan_platform_config_locked'), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
          href: "https://support.streak.com/en/articles/3397745-streak-platform-comparison",
          target: "_blank",
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('help')
        }), ")"]
      });
    }
    if (!isBillingAdmin) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: _paymentSectionForTeam_module_css__WEBPACK_IMPORTED_MODULE_13__/* .nonBillingAdminContainer */ .zf,
        children: [billingAdminAsMember && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_providedBy', {
            billingAdminEmail: billingAdminAsMember.email,
            billingAdminName: _services_contacts_contactStore__WEBPACK_IMPORTED_MODULE_4__["default"].getDisplayName(billingAdminAsMember)
          })
        }), canBeBillingAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          onClick: takeOverBilling,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_takeOver')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          onClick: goToInvoices,
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_viewInvoices')
        })]
      });
    }
    if (paymentMethod) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: _paymentSectionForTeam_module_css__WEBPACK_IMPORTED_MODULE_13__/* .billingAdminContainer */ .zE,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: _paymentSectionForTeam_module_css__WEBPACK_IMPORTED_MODULE_13__.pm,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_paymentMethod__WEBPACK_IMPORTED_MODULE_6__/* .PaymentMethod */ .X, {
              paymentMethod: paymentMethod
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            onClick: goToAddPaymentMethod,
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_changePaymentMethod')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: _paymentSectionForTeam_module_css__WEBPACK_IMPORTED_MODULE_13__/* .links */ .Ok,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            onClick: goToInvoices,
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_viewInvoices')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            onClick: goToChangeAddress,
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_updateBillingAddress')
          })]
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: _paymentSectionForTeam_module_css__WEBPACK_IMPORTED_MODULE_13__/* .billingAdminContainer */ .zE,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        onClick: goToAddPaymentMethod,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_addPaymentMethod')
      }), "\xA0 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        onClick: goToInvoices,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_viewInvoices')
      }), "\xA0 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        onClick: goToChangeAddress,
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_paymentMethod_updateBillingAddress')
      })]
    });
  };
  let headerNode = null;
  if (manualSettlement) {
    headerNode = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
      style: {
        fontSize: '14px'
      },
      children: [_services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('account_change_manualSettlement_prompt') + ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "streak__teams_plan_upgrade streak__teams_members_change streak__teams_plan_cancel",
        onClick: () => manualSettlementClicked(),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('contact_streak_support')
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    className: "streak__teams_payment",
    sectionLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('teams_billing'),
    header: headerNode,
    actionables: actionables()
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ showPipelineAdminLeavingModal)
/* harmony export */ });
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38672);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27337);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95639);
/* harmony import */ var _widgets_react_localeStringComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67845);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_0__]);
_services_data_data__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// This is the modal shown if the current user tries to leave a team while they are an admin of
// pipelines belonging to that team.
function PipelineAdminLeavingModalBody(_ref) {
  let {
    team
  } = _ref;
  const teamKey = team.key();
  const adminedTeamPipelines = _services_data_data__WEBPACK_IMPORTED_MODULE_0__["default"].getAllPipelines().filter(pipeline => pipeline.get('teamKey') === teamKey && pipeline.isCurrentUserAdmin());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_localeStringComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      localeKey: "teams_pipelineAdminLeavingModal_prompt",
      values: {
        pipelinesCount: adminedTeamPipelines.length,
        ownersCount: team.getOwners().length,
        teamName: team.displayNameHTML()
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      onClick: () => {
        window.open('https://support.streak.com/en/articles/2648798-pipeline-access-roles', '_blank');
      },
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_pipelineAdminError_helpLink_changeRole')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      onClick: () => {
        // TODO link to an article that actually explains how to delete pipelines
        window.open('https://support.streak.com/en/articles/2761926-pipelines', '_blank');
      },
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_pipelineAdminError_helpLink_deletePipeline')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
      className: "streak__infoBox",
      style: {
        maxHeight: '20vh',
        marginTop: '25px'
      },
      children: adminedTeamPipelines.map((pipeline, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        style: Object.assign({}, {
          marginLeft: '15px'
        }, index === 0 ? {} : {
          marginTop: '10px'
        }),
        children: pipeline.displayNameText()
      }, pipeline.key()))
    })]
  });
}
function showPipelineAdminLeavingModal(team) {
  return (0,_widgets_modal_confirmModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_pipelineAdminLeavingModal_title'),
    confirmButtonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_pipelineAdminLeavingModal_confirm'),
    bodyComponent: _ref2 => {
      let {
        modalView
      } = _ref2;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PipelineAdminLeavingModalBody, {
        team: team,
        onHelpLinkClicked: () => {
          modalView.close();
        }
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ PlanSection)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93733);
/* harmony import */ var _referralSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53686);
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68248);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57937);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72086);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3572);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35091);
/* harmony import */ var _subscriptionModal_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5678);
/* harmony import */ var _subscriptionModal_helpers_getLocalizedFeature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7854);
/* harmony import */ var _subscriptionModal_helpers_formatPrice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59647);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87084);
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2225);
/* harmony import */ var _services_data_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_referralSection__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_4__, _subscriptionModal_helpers_getLocalizedFeature__WEBPACK_IMPORTED_MODULE_6__]);
([_referralSection__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_4__, _subscriptionModal_helpers_getLocalizedFeature__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const FEATURES_PER_ROW = 5;
function PlanSection(_ref) {
  let {
    actionables,
    plan,
    billingInfo
  } = _ref;
  const isFreePlan = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useSelector */ .v9)(state => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(state.models.teams).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z).some(_billing_utils__WEBPACK_IMPORTED_MODULE_4__/* .isTeamOnPremiumPlan */ .rP));
  const features = plan.features;
  const featureStringRows = lodash__WEBPACK_IMPORTED_MODULE_0___default().flow(() => features.filter(feature => !_subscriptionModal_constants__WEBPACK_IMPORTED_MODULE_12__/* .UNLISTED_FEATURES */ .U.includes(feature)).map(feature => (0,_subscriptionModal_helpers_getLocalizedFeature__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(feature, plan.isFreePlan)).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z), x => lodash__WEBPACK_IMPORTED_MODULE_0___default().chunk(x, FEATURES_PER_ROW))();
  const endDiscountDate = billingInfo.subscription?.discount?.endDate || 0;
  const minQuantity = billingInfo.minQuantity || 0;
  const minQuantityText = minQuantity > 0 ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('account_subscribe_modal_confirm_min_users', {
    number: minQuantity
  }) : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      className: "streak__teams_plan",
      sectionLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('plan'),
      header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_8__/* .LayoutRow */ .WM, {
        gapH: "xs",
        children: [(0,_billing_utils__WEBPACK_IMPORTED_MODULE_4__/* .getPlanLocalizedName */ .kb)(plan), plan.isFreePlan ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: "-"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
            className: "streak__teams_plan_cost",
            children: [Date.now() < +endDiscountDate ? (0,_subscriptionModal_helpers_formatPrice__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(plan.monthlyDisplayPriceDiscountedStarting) : (0,_subscriptionModal_helpers_formatPrice__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(plan.monthlyDisplayPriceDiscountedSteadyState), _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('account_subscribe_modal_upgradeConfirm_costUnit_user')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: (0,_billing_utils__WEBPACK_IMPORTED_MODULE_4__/* .isPlanYearly */ .XD)(plan) ? `(${_services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('billed_annually')}${minQuantityText ? ', ' + minQuantityText : ''})` : minQuantityText ? `(${minQuantityText})` : ''
          })]
        })]
      }),
      subheader: billingInfo.subscription?.cancelAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_7__/* .Typo */ .Jd, {
        variant: "H4 - Caption",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.getString('account_plan_scheduled_end', {
          date: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(billingInfo.subscription.cancelAt, 'MMM d, yyyy')
        })
      }),
      actionables: actionables,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("table", {
        className: "streak__teams_plan_featureList",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tbody", {
          children: featureStringRows.map(featureStrings => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("tr", {
            children: featureStrings.map(featureString => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("td", {
              children: featureString
            }, featureString))
          }, featureStrings.join('')))
        })
      })
    }), isFreePlan && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_referralSection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      isGrandfatheredFreePlan: (0,_services_data_user__WEBPACK_IMPORTED_MODULE_15__/* .getUser */ .P)().isEligibleForGrandfatheredFreePlan()
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ReferralSection)
/* harmony export */ });
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68248);
/* harmony import */ var _billing_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13145);
/* harmony import */ var _modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53581);
/* harmony import */ var _redux_models_useReferral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24465);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93237);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95639);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13778);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_2__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__]);
([_modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_2__, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const FreePlanFeatureList = _ref => {
  let {
    bonusMailMergeAmount = 0,
    manualBonusMailMergeAmount = 0,
    referralCount = 0
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("table", {
    className: "streak__teams_plan_featureList",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tbody", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('free_plan')}:`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc', {
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('referrals_earned', {
            referralCount: referralCount.toString()
          })}:`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc', {
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: bonusMailMergeAmount - manualBonusMailMergeAmount
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      }), manualBonusMailMergeAmount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('complimentary')}:`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc', {
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: manualBonusMailMergeAmount
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('total_limits')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc', {
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h + bonusMailMergeAmount
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      })]
    })
  });
};
const GrandfatheredFreePlanFeatureList = _ref2 => {
  let {
    bonusBoxAmount = 0,
    bonusMailMergeAmount = 0,
    manualBonusMailMergeAmount = 0,
    manualBonusBoxAmount = 0,
    referralCount = 0
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("table", {
    className: "streak__teams_plan_featureList",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tbody", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('free_plan')}:`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc_grandfathered', {
            boxCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il
            }, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il),
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('referrals_earned', {
            referralCount: referralCount.toString()
          })}:`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc_grandfathered', {
            boxCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: bonusBoxAmount - manualBonusBoxAmount
            }, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il),
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: bonusMailMergeAmount - manualBonusMailMergeAmount
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      }), (manualBonusBoxAmount > 0 || manualBonusMailMergeAmount > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: `${_services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('complimentary')}:`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc_grandfathered', {
            boxCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: manualBonusBoxAmount
            }, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il),
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: manualBonusMailMergeAmount
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('total_limits')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
          children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getArray('referral_desc_grandfathered', {
            boxCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il + bonusBoxAmount
            }, _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il),
            mailMergeCount: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h + bonusMailMergeAmount
            }, _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h)
          })
        })]
      })]
    })
  });
};
function ReferralSection(_ref3) {
  let {
    isGrandfatheredFreePlan
  } = _ref3;
  const {
    result,
    type
  } = (0,_redux_models_useReferral__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  if (type === 'loading') {
    return null;
  }
  const {
    bonusBoxAmount = 0,
    bonusMailMergeAmount = 0
  } = result || {};
  const isOverBoxLimit = bonusBoxAmount + _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .FREE_BOX_LIMIT */ .Il >= _services_boxLimitChecker_doesUserHaveMoreBoxesThanOverallLimit__WEBPACK_IMPORTED_MODULE_5__/* .PAID_BOX_LIMIT */ .oj;
  const isOverMailMergeLimit = bonusMailMergeAmount + _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_MAIL_MERGE_LIMIT */ .h >= _billing_constants__WEBPACK_IMPORTED_MODULE_1__/* .PAID_MAIL_MERGE_LIMIT */ .Q7;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    className: "streak__teams_plan",
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('plan_limits')
    }),
    actionables: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      className: "streak_teams_plan_actionables",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...((isOverBoxLimit || isOverMailMergeLimit) && {
          color: 'none'
        }),
        isDisabled: isOverBoxLimit || isOverMailMergeLimit,
        onClick: () => {
          _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_7__["default"].track('plan.referralSection.referAFriendLink.click');
          (0,_modules_referral_ReferralModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
            track: (eventName, extraProps) => _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_7__["default"].track('plan.referralSection.' + eventName, extraProps)
          });
        },
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('refer_a_friend')
      })
    }),
    children: isGrandfatheredFreePlan ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GrandfatheredFreePlanFeatureList, {
      ...result
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FreePlanFeatureList, {
      ...result
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SectionTemplate)
/* harmony export */ });
/* harmony import */ var _streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2225);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44345);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59718);




function SectionTemplate(_ref) {
  let {
    actionables,
    children,
    className,
    subheader,
    header,
    sectionLabel
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('streak__teams_section', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "streak__teams_section_label",
      children: sectionLabel && `${sectionLabel}:`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_0__/* .LayoutColumn */ .rO, {
      gapV: "s",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_0__/* .LayoutColumn */ .rO, {
        gapV: "xs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_0__/* .LayoutRow */ .WM, {
          gapH: "mnudge",
          children: [header, actionables]
        }), subheader]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_streakyc_ui_components_layout__WEBPACK_IMPORTED_MODULE_0__/* .LayoutColumn */ .rO, {
        children: children
      })]
    })]
  });
}

/***/ }),

/***/ 18546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SettingsCheckbox)
/* harmony export */ });
/* harmony import */ var _widgets_react_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9045);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59718);


function SettingsCheckbox(props) {
  const {
    style,
    checked,
    onSettingClick,
    settingLabel,
    settingDescription
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_widgets_react_checkbox__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      checked: checked,
      onChange: onSettingClick,
      children: settingLabel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "streak__teams_section_details",
      style: {
        marginLeft: '23px'
      },
      children: settingDescription
    })]
  });
}

/***/ }),

/***/ 84668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SharingSection)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94322);
/* harmony import */ var kefir_stopper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(kefir_stopper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68248);
/* harmony import */ var _settingsCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18546);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35091);
/* harmony import */ var _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23392);
/* harmony import */ var _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64167);
/* harmony import */ var _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50452);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_4__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__]);
([_core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_4__, _widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__, _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










class SharingSection extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  _stopper = (() => kefir_stopper__WEBPACK_IMPORTED_MODULE_8___default()())();
  state = {
    pipelinesLoaded: false,
    teamPipelines: []
  };
  render() {
    const {
      team
    } = this.props;
    const {
      pipelinesLoaded,
      teamPipelines
    } = this.state;
    const user = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_9__/* .getUser */ .P)();
    const numberOfUsers = team.get('members').length;
    const numberOfPipelines = teamPipelines.length;
    const asStreakAdmin = !!__webpack_require__.g.Streak.ai;
    const guestModeAllowed = asStreakAdmin || _core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__.EnabledFeatures.isFeatureEnabled('manageGuestsExp');
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      className: "streak__teams_sharing",
      sectionLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_sharing'),
      header: pipelinesLoaded ? _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_sharing_header', {
        numberOfPipelines,
        numberOfUsers
      }) : _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('loading'),
      children: [guestModeAllowed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_settingsCheckbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        style: {
          marginBottom: '10px'
        },
        checked: team.isGuestModeAllowed(),
        onSettingClick: _ref => {
          let {
            checked
          } = _ref;
          return this._guestModeChanged(checked);
        },
        settingLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('account_teams_ownedTeams_allowGuests'),
        settingDescription: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('account_teams_ownedTeams_allowGuests_explanation')
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_settingsCheckbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        checked: user.isSecurityReportEnabled(),
        onSettingClick: _ref2 => {
          let {
            checked
          } = _ref2;
          return this._sendSharingReportsChanged(checked, user);
        },
        settingLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('security_report_checkbox'),
        settingDescription: _services_locale_locale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getString('teams_sharing_report_explanation')
      })]
    });
  }
  componentDidMount() {
    _core_ajax_apiRequester__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get(`teams/${this.props.team.key()}/pipelines`, {}, {
      prefix: '/api/v2/',
      templateUrl: 'teams/KEY/pipelines'
    }).getEventStream().takeUntilBy(this._stopper).onValue(_ref3 => {
      let {
        results
      } = _ref3;
      return this.setState({
        pipelinesLoaded: true,
        teamPipelines: results
      });
    });
    (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_9__/* .getUser */ .P)().getChangesStream('securityReportOnTeamsPipelines').takeUntilBy(this._stopper).onValue(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this._stopper.destroy();
  }
  _guestModeChanged(newGuestModeAllowedValue) {
    const {
      team,
      track
    } = this.props;
    track('guestModeAllowedChanged', {
      newGuestModeAllowedValue
    });
    team.setGuestModeAllowed(newGuestModeAllowedValue);
    team.save();
  }
  _sendSharingReportsChanged(newSendSharingReportsValue, user) {
    const {
      track
    } = this.props;
    if (!_core_enabledFeaturesController__WEBPACK_IMPORTED_MODULE_6__.EnabledFeatures.isFeatureEnabled('accountRestrictions')) {
      track('teamsSecurityReportPaywall');
      (0,_widgets_paywallGateway_paywallGateway__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        feature: 'accountRestrictions',
        team: this.props.team
      });
    } else {
      track('teamsSecurityReportChanged', {
        newSendSharingReportsValue
      });
      user.setIsSecurityReportEnabled(newSendSharingReportsValue);
      user.save();
    }
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TrialSection)
/* harmony export */ });
/* harmony import */ var _sectionTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68248);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35091);
/* harmony import */ var _lib_streakDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90415);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_billing_utils__WEBPACK_IMPORTED_MODULE_3__]);
_billing_utils__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TrialSection(_ref) {
  let {
    team
  } = _ref;
  if (!(0,_billing_utils__WEBPACK_IMPORTED_MODULE_3__/* .isTeamOnTrial */ .yv)(team)) {
    return null;
  }
  const expirationDate = (0,_lib_streakDate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_billing_utils__WEBPACK_IMPORTED_MODULE_3__/* .getTrialExpiration */ .pe)(team));
  const trialDuration = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_3__/* .getTrialDurationInDays */ .bh)(team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sectionTemplate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    className: "streak__teams_trial",
    sectionLabel: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('trial'),
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_trial_duration', {
          trialDuration
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "streak__teams_section_details",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getString('teams_trial_expires') + ':' + expirationDate.customFormat('shortDate')
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UpgradeTeamTextLink)
/* harmony export */ });
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_textLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95639);
/* harmony import */ var _subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50814);
/* harmony import */ var _widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75191);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_3__]);
([_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_2__, _billing_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UpgradeTeamTextLink(props) {
  if ((0,_widgets_paywallGateway_isNonPlanPlatform__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()) {
    return null;
  }
  const {
    team,
    style,
    track
  } = props;
  const onPaidPlan = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_3__/* .isTeamOnPremiumPlan */ .rP)(team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_widgets_react_textLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    className: "streak__teams_plan_upgrade",
    style: style,
    onClick: () => {
      if (onPaidPlan) _upgradePlanClicked(team, track);else _newPlanClicked(team, track);
    },
    children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getString(onPaidPlan ? 'account_upgrade_plan' : 'account_teams_newPlan')
  });
}
function _newPlanClicked(team, track) {
  track('teamsNewPlanClicked');
  (0,_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    team
  });
}
function _upgradePlanClicked(team, track) {
  track('teamsUpgradePlanClicked');
  (0,_subscriptionFlows_planUpgradeFlow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    team
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ TeamListing)
/* harmony export */ });
/* harmony import */ var _streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5575);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ownerTeam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86358);
/* harmony import */ var _memberTeam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56841);
/* harmony import */ var _invitedTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67103);
/* harmony import */ var _payerOnlyTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5668);
/* harmony import */ var _LoadingTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18156);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13778);
/* harmony import */ var _billing_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ownerTeam__WEBPACK_IMPORTED_MODULE_1__, _memberTeam__WEBPACK_IMPORTED_MODULE_2__, _invitedTeam__WEBPACK_IMPORTED_MODULE_3__, _payerOnlyTeam__WEBPACK_IMPORTED_MODULE_4__, _LoadingTeam__WEBPACK_IMPORTED_MODULE_5__, _billing_utils__WEBPACK_IMPORTED_MODULE_7__]);
([_ownerTeam__WEBPACK_IMPORTED_MODULE_1__, _memberTeam__WEBPACK_IMPORTED_MODULE_2__, _invitedTeam__WEBPACK_IMPORTED_MODULE_3__, _payerOnlyTeam__WEBPACK_IMPORTED_MODULE_4__, _LoadingTeam__WEBPACK_IMPORTED_MODULE_5__, _billing_utils__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function TeamListing(props) {
  const {
    team
  } = props;
  const activeUserKey = (0,_streakyc_common_services_data_user__WEBPACK_IMPORTED_MODULE_9__/* .getUser */ .P)().key();
  const plan = (0,_billing_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTeamPlan */ .CG)(team);
  const userMemberListing = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(team.get('members'), _ref => {
    let {
      userKey
    } = _ref;
    return userKey === activeUserKey;
  });
  let TeamListingComponent;
  if (!userMemberListing) {
    TeamListingComponent = _LoadingTeam__WEBPACK_IMPORTED_MODULE_5__/* .LoadingTeam */ .A;
  } else if (userMemberListing.inviteStatus === 'Pending') {
    TeamListingComponent = _invitedTeam__WEBPACK_IMPORTED_MODULE_3__/* .InvitedTeam */ .y;
  } else if (userMemberListing.role === 'Owner') {
    TeamListingComponent = _ownerTeam__WEBPACK_IMPORTED_MODULE_1__/* .OwnerTeam */ .q;
  } else if (userMemberListing.role === 'Member') {
    TeamListingComponent = _memberTeam__WEBPACK_IMPORTED_MODULE_2__/* .MemberTeam */ .H;
  } else if (userMemberListing.role === 'PayerOnly') {
    TeamListingComponent = _payerOnlyTeam__WEBPACK_IMPORTED_MODULE_4__/* .PayerOnlyTeam */ .o;
  } else if (userMemberListing.role === 'ArchiveOnly') {
    TeamListingComponent = _memberTeam__WEBPACK_IMPORTED_MODULE_2__/* .MemberTeam */ .H;
  } else {
    throw new Error('unknown role: ' + userMemberListing.role);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TeamListingComponent, {
    team: team,
    plan: plan,
    track: (eventName, extraProps) => _track(eventName, team, extraProps)
  });
}
function _track(eventName, team) {
  let extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_6__["default"].track(eventName, {
    ...extraProps,
    teamKey: team.key()
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var _radioEntryComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8551);
/* harmony import */ var _services_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38672);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63726);
/* harmony import */ var _widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22682);
/* harmony import */ var _widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37155);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_data_data__WEBPACK_IMPORTED_MODULE_3__]);
_services_data_data__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const CANCEL_REASON = lodash__WEBPACK_IMPORTED_MODULE_0___default().shuffle(['account_cancel_plan_modal_reason_0', 'account_cancel_plan_modal_reason_1', 'account_cancel_plan_modal_reason_2', 'account_cancel_plan_modal_reason_3', 'account_cancel_plan_modal_reason_4', 'account_cancel_plan_modal_reason_5', 'account_cancel_plan_modal_reason_6', 'account_cancel_plan_modal_reason_7', 'account_cancel_plan_modal_reason_other']);
const OTHER_CRMS = lodash__WEBPACK_IMPORTED_MODULE_0___default().shuffle([{
  crmName: 'Salesforce',
  crmLink: 'https://help.salesforce.com/apex/HTViewHelpDoc?id=importing.htm'
}, {
  crmName: 'RelateIQ/SalesforceIQ',
  crmLink: 'https://help.relateiq.com/articles/import-data-to-a-new-list'
}, {
  crmName: 'Yesware',
  crmLink: 'https://help.yesware.com/entries/43968516-How-do-I-map-fields-to-be-merged-from-my-CSV-into-my-emails-'
}, {
  crmName: 'Insightly',
  crmLink: 'http://help.insightly.com/how-do-i-import-data-into-insightly/'
}, {
  crmName: 'Sugar CRM',
  crmLink: 'https://support.sugarcrm.com/04_Knowledge_Base/01Getting_Started/Introduction_to_Importing/'
}, {
  crmName: 'Zoho CRM',
  crmLink: 'https://www.zoho.com/crm/help/data-administration/import-data.html'
}, {
  crmName: 'Hubspot',
  crmLink: 'https://knowledge.hubspot.com/getting-started-with-hubspot-v2/how-to-import-a-list-of-leads-and-contacts-into-your-account'
}, {
  crmName: 'Pipedrive',
  crmLink: 'http://support.pipedrive.com/hc/en-us/articles/208039595-Importing-Data-with-spreadsheets'
}, {
  crmName: 'Prosperworks',
  crmLink: 'https://prosperworks.zendesk.com/hc/en-us/articles/202672728'
}, {
  crmName: 'Spreadsheets',
  crmListText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_alternatives_no_crm'),
  crmImportName: 'Google Sheets',
  crmLink: 'https://support.google.com/docs/answer/40608'
}, {
  crmName: 'Undecided',
  crmListText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_alternatives_undecided')
}]);
class PlanCancelComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  reasonTextAreaRef = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef())();
  otherTextAreaRef = (() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef())();
  state = {
    selectedCancelReason: '',
    selectedReasonDetails: '',
    selectedOtherCRM: '',
    selectedUnlistedOtherCRM: ''
  };
  _getUserSelections() {
    return {
      cancellationReason: this.state.selectedCancelReason,
      cancellationReasonDetails: this.state.selectedReasonDetails,
      cancellationOtherCRM: this.state.selectedOtherCRM,
      cancellationUnlistedOtherCRM: this.state.selectedUnlistedOtherCRM
    };
  }
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: this.props.className,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "streak__cancelModal_body",
        children: this._getStageBody(this.props.cancellationStep)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_5__/* .ButtonRow */ .V, {
        className: "streak__mt-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_widgets_react_material_button_buttonLayout__WEBPACK_IMPORTED_MODULE_5__/* .ButtonGroup */ .h, {
          right: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            disabled: !this._shouldNextBeEnabled(),
            onClick: () => this.props.nextStep(this._getUserSelections()),
            variant: "outline",
            children: {
              REVIEW: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_confirm_REVIEW'),
              ALTERNATIVES: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_confirm_ALTERNATIVES'),
              REASON: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_confirm_REASON')
            }[this.props.cancellationStep]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_material_button_streakButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            onClick: () => this.props.closeAndDontCancel('CANCEL_BUTTON'),
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_nevermind')
          })]
        })
      })]
    });
  }
  componentDidUpdate(_prevProps, prevState) {
    if (this.props.cancellationStep === 'REASON' && this.state.selectedCancelReason !== prevState.selectedCancelReason) {
      this.reasonTextAreaRef.current?.focus();
    } else if (this.props.cancellationStep === 'ALTERNATIVES' && this.state.selectedOtherCRM === 'other' && this.state.selectedOtherCRM !== prevState.selectedOtherCRM) {
      this.otherTextAreaRef.current?.focus();
    }
  }
  _getStageBody(cancellationStep) {
    switch (cancellationStep) {
      case 'REVIEW':
        return this._getReviewStage();
      case 'ALTERNATIVES':
        return this._getAlternativesStage();
      case 'REASON':
        return this._getReasonStage();
    }
  }
  _shouldNextBeEnabled() {
    if (this.props.cancellationStep === 'REVIEW') {
      return true;
    } else if (this.props.cancellationStep === 'REASON' && this.state.selectedCancelReason.length > 0 && this.state.selectedReasonDetails.length > 0) {
      return true;
    } else if (this.props.cancellationStep === 'ALTERNATIVES' && (this.state.selectedOtherCRM !== 'other' && this.state.selectedOtherCRM.length > 0 || this.state.selectedOtherCRM === 'other' && this.state.selectedUnlistedOtherCRM.length > 0)) {
      return true;
    } else {
      return false;
    }
  }

  /* ==================================== */

  _getReviewStage() {
    const savedViewCount = (_services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getAllPipelines().map(pipeline => {
      return pipeline.getSavedViewsManager().getOrderedSavedViews();
    }) ?? []).flat().length;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "streak__cancelModal_review",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "streak__cancelModal_review_prompt",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_review_prompt')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "streak__cancelModal_review_stats",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "streak__cancelModal_review_stats_pipelines",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "streak__cancelModal_review_stats_count",
            children: _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getAllPipelines().length
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "streak__cancelModal_review_stats_type",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('pipelines')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "streak__cancelModal_review_stats_boxes",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "streak__cancelModal_review_stats_count",
            children: _services_data_data__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTotalBoxNum()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "streak__cancelModal_review_stats_type",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('boxes')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "streak__cancelModal_review_stats_savedViews",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "streak__cancelModal_review_stats_count",
            children: savedViewCount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "streak__cancelModal_review_stats_type",
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('saved_views')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "streak__cancelModal_review_warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          style: {
            display: 'inline'
          },
          dangerouslySetInnerHTML: {
            __html: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_review_warning')
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
          children: ["(", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "mdl-link",
            onClick: () => {
              window.open('https://support.streak.com/en/articles/2466485-cancelling-your-plan', '_blank');
            },
            children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_review_help')
          }), ")"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "streak__cancelModal_review_accountsList",
        children: this._getPlanAccountsList()
      })]
    });
  }
  _getPlanAccountsList() {
    if (this.props.planUserEmails.length <= 20) {
      return this.props.planUserEmails.join(', ');
    }
    const list = this.props.planUserEmails.slice(0, 20);
    const overflow = this.props.planUserEmails.slice(20);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        children: `${list.join(', ')}, `
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
        "data-tooltip": overflow.join(',\n'),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_review_userOverflow', {
          number: overflow.length
        })
      })]
    });
  }

  /* ==================================== */

  _getAlternativesStage() {
    const ExportPipelineTourLink = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      className: "mdl-link streak__cancelModal_alternatives_export",
      onClick: () => {
        window.open('https://support.streak.com/en/articles/2514616-export-a-pipeline', '_blank');
        this.props.closeAndDontCancel('OPEN_EXPORT_HELP');
        this.props.trackEvent('cancellationWizardHelpExport');
      },
      children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_alternatives_export')
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "streak__cancelModal_alternatives",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "streak__cancelModal_alternatives_prompt",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_alternatives_prompt')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "streak__cancelModal_alternatives_list",
        children: [OTHER_CRMS.map(_ref => {
          let {
            crmName,
            crmListText,
            crmImportName,
            crmLink
          } = _ref;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_radioEntryComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
              className: "streak__cancelModal_alternatives_list_entry",
              reasonText: crmListText || crmName,
              checked: this.state.selectedOtherCRM === crmName,
              radioButtonName: "otherCRM",
              onRadioButtonSelected: () => this._updateOtherCRMSelection(crmName),
              children: [crmLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                href: crmLink,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "streak__cancelModal_alternatives_list_entry_link",
                  children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_alternatives_import') + (crmImportName || crmName)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ExportPipelineTourLink, {})]
            }, crmName)
          }, crmName);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_radioEntryComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          className: "streak__cancelModal_alternatives_list_entry",
          checked: this.state.selectedOtherCRM === 'other',
          reasonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('other'),
          radioButtonName: "otherCRM",
          onRadioButtonSelected: () => this._updateOtherCRMSelection('other'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            ref: this.otherTextAreaRef,
            style: {
              display: 'block'
            },
            onBlur: event => this._updateUnlistedOtherCRMSelection(event.target.getValue()),
            onChange: event => this._updateUnlistedOtherCRMSelection(event.target.getValue()),
            textAreaOptions: {
              corsurToEndOnFocus: false,
              multiline: false
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ExportPipelineTourLink, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_radioEntryComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          className: "streak__cancelModal_alternatives_list_entry",
          checked: this.state.selectedOtherCRM === 'freeStreak',
          reasonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_alternatives_downgrade'),
          radioButtonName: "otherCRM",
          onRadioButtonSelected: () => this._updateOtherCRMSelection('freeStreak')
        })]
      })]
    });
  }
  _updateOtherCRMSelection(newSelectedCRM) {
    if (newSelectedCRM === this.state.selectedOtherCRM) return;
    this.setState({
      selectedOtherCRM: newSelectedCRM
    });
  }
  _updateUnlistedOtherCRMSelection(newUnlistedCRM) {
    if (newUnlistedCRM === this.state.selectedUnlistedOtherCRM) return;
    this.setState({
      selectedUnlistedOtherCRM: newUnlistedCRM
    });
  }

  /* ==================================== */

  _getReasonStage() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "streak__cancelModal_reasons",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "streak__cancelModal_reasons_prompt",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_reasons_prompt')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "streak__cancelModal_reasons_list",
        children: CANCEL_REASON.map(reasonKey => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_radioEntryComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "streak__cancelModal_reasons_list_entry",
            reasonText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.UNSAFE_getString(reasonKey),
            checked: this.state.selectedCancelReason === reasonKey,
            radioButtonName: "cancelReason",
            onRadioButtonSelected: () => this._updateReasonSelection(reasonKey),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_widgets_react_gmailTextArea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              ref: this.reasonTextAreaRef,
              valid: this._isTextareaValid(reasonKey),
              style: {
                display: 'block'
              },
              onFocus: event => this._updateReasonDetails(event.target.getValue()),
              onBlur: event => this._updateReasonDetails(event.target.getValue()),
              onChange: event => this._updateReasonDetails(event.target.getValue()),
              textAreaOptions: {
                corsurToEndOnFocus: false,
                multiline: false,
                placeholderText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.UNSAFE_getString(`${reasonKey}_placeholder_text`)
              }
            }, `${reasonKey}_textarea`)
          }, reasonKey);
        })
      })]
    });
  }
  _updateReasonSelection(newSelectedReason) {
    if (newSelectedReason === this.state.selectedCancelReason) return;
    this.setState({
      selectedCancelReason: newSelectedReason
    });
  }
  _isTextareaValid(reasonKey) {
    if (this.state.selectedCancelReason !== reasonKey) return true;
    if (!this.reasonTextAreaRef) return true;
    return this.state.selectedReasonDetails.length > 0 || Boolean(this.reasonTextAreaRef?.current?.hasFocus());
  }
  _updateReasonDetails(newReasonDetails) {
    if (newReasonDetails === this.state.selectedCancelReason) return;
    this.setState({
      selectedReasonDetails: newReasonDetails
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlanCancelComponent);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PlanCancelViewController)
/* harmony export */ });
/* harmony import */ var _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77294);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4283);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69980);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35091);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13778);
/* harmony import */ var _planCancelComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65431);
/* harmony import */ var _lib_log_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7961);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81022);
/* harmony import */ var _lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72086);
/* harmony import */ var _billing_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_planCancelComponent__WEBPACK_IMPORTED_MODULE_6__, _billing_helpers__WEBPACK_IMPORTED_MODULE_9__]);
([_planCancelComponent__WEBPACK_IMPORTED_MODULE_6__, _billing_helpers__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












class PlanCancelViewController {
  _modal = null;
  _planCancelComponent = null;
  #team;
  constructor(team) {
    this._currentStepIndex = 0;
    this._stepKeys = ['REVIEW', 'ALTERNATIVES', 'REASON'];
    this._element = document.createElement('div');
    this.#team = team;
    this._planUserEmails = this.#team.getUsingMembers().map(_ref => {
      let {
        email
      } = _ref;
      return email;
    }).filter(_lib_utils_isNotNil__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);
    this._showCancellationModal();
  }
  destroy() {
    react_dom__WEBPACK_IMPORTED_MODULE_3__.unmountComponentAtNode(this._element);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this._element).remove();
  }

  /* ==================================== */

  _getModalTitle(cancellationStep) {
    switch (cancellationStep) {
      case 'REVIEW':
        return _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_title_REVIEW');
      case 'ALTERNATIVES':
        return _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_title_ALTERNATIVES');
      case 'REASON':
        return _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_title_REASON');
      default:
        return '';
    }
  }
  _showCancellationModal() {
    this._modal = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.Widgets.showModalView({
      title: this._getModalTitle(this._stepKey()),
      el: this._element
    });
    this._trackEvent('cancellationWizardPageStarted', {
      pageNumber: this._currentStepIndex
    });
    this._renderModalBody();
  }
  _renderModalBody() {
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_8__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_planCancelComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      ref: c => {
        if (c) this._planCancelComponent = c;
      },
      className: "streak__plan_cancel_modal",
      closeAndDontCancel: closeMethod => this._closeAndUnmount(closeMethod),
      nextStep: userSelections => this._nextStep(userSelections),
      trackEvent: (eventName, extraProps) => this._trackEvent(eventName, extraProps),
      cancellationStep: this._stepKey(),
      planUserEmails: this._planUserEmails
    }), this._element);
  }
  async _nextStep(userSelections) {
    this._currentStepIndex++;
    this._modal?.close();
    if (this._currentStepIndex === this._stepKeys.length) {
      const cancelButter = _streakyc_common_core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_0__.inboxSDK.ButterBar.showSaving({
        text: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_butterBar_cancelling'),
        confirmationTime: 4 * 1000,
        confirmationText: _services_locale_locale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.getString('account_cancel_plan_modal_butterBar_cancelled'),
        messageKey: 'planCancelling'
      });
      try {
        await (0,_billing_helpers__WEBPACK_IMPORTED_MODULE_9__/* .cancelPlan */ .oH)(this.#team, userSelections);
        cancelButter.resolve();
      } catch (err) {
        cancelButter.reject();
        (0,_lib_log_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
          err,
          details: {
            teamKey: this.#team.key()
          },
          message: 'problem cancelling plan',
          level: 'error'
        });
      }
      this._closeAndUnmount('CANCELLATION_COMPLETE');
    } else this._showCancellationModal();
  }
  _stepKey() {
    return this._stepKeys[this._currentStepIndex];
  }
  _trackEvent(trackingEventName) {
    let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_5__["default"].track(trackingEventName, lodash__WEBPACK_IMPORTED_MODULE_1___default().extend({
      planEmails: this._planUserEmails
    }, extraProps));
  }
  _trackModalClose(closeMethod) {
    this._trackEvent('cancellationWizardPageClosed', {
      method: closeMethod
    });
  }
  _closeAndUnmount(closeMethod) {
    this._trackModalClose(closeMethod);
    if (this._modal) {
      this._modal.close();
    }
    react_dom__WEBPACK_IMPORTED_MODULE_3__.unmountComponentAtNode(this._element);
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44345);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59718);



class RadioEntryComponent extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `streak__radioEntry ${this.props.className || ''}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        className: "streak__radioEntry_title_radioButton",
        tabIndex: 0,
        type: "radio",
        name: this.props.radioButtonName,
        checked: this.props.checked,
        onChange: () => this._entrySelected()
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "streak__radioEntry_body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          className: "streak__radioEntry_title",
          onClick: () => this._entrySelected(),
          children: this.props.reasonText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('streak__radioEntry_details', {
            streak__hide: !this.props.checked
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: this.props.children
          })
        })]
      })]
    });
  }
  _entrySelected() {
    this.props.onRadioButtonSelected();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioEntryComponent);

/***/ }),

/***/ 3586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var add_accessors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9739);
/* harmony import */ var add_accessors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(add_accessors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14773);
/* harmony import */ var jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13778);






class ModelPropInputDecorator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    lodash__WEBPACK_IMPORTED_MODULE_0___default().defaults(options, {
      autoSave: true,
      trackingContext: 'modelPropInputDecorator',
      restoreOriginalOnInvalidSave: false,
      restoreOriginalOnInvalidAndBlur: true,
      restoreOriginalOnEscapePress: false,
      blurOnEnterPress: false,
      preSaveCheckFunction: () => true,
      postSaveFunction: null,
      useHTML: false
    });
    this._autoSave = options.autoSave;
    this._trackingContext = options.trackingContext;
    this._restoreOriginalOnInvalidSave = options.restoreOriginalOnInvalidSave;
    this._restoreOriginalOnInvalidAndBlur = options.restoreOriginalOnInvalidAndBlur;
    this._restoreOriginalOnEscapePress = options.restoreOriginalOnEscapePress;
    this._blurOnEnterPress = options.blurOnEnterPress;
    this._canSave = options.preSaveCheckFunction;
    this._postSave = options.postSaveFunction;
    this._useHTML = options.useHTML;
    this._textareaViewController = options.textareaViewController;
    this._textareaViewController.getView().addClass('smartInput streak__inputDecorator_modelProp');
    this._subscribeToViewControllerEventStreams();
    this._setInputToCurrentModelValue();
    if (options.model) this.model = options.model;
    if (options.property) this.property = options.property;
  }
  _subscribeToViewControllerEventStreams() {
    this._textareaViewController.getEventStream().filter(_ref => {
      let {
        eventName
      } = _ref;
      return eventName === 'blur';
    }).onValue(() => {
      if (!this._textareaViewController || !this._model) {
        return;
      }
      if (this._restoreOriginalOnInvalidAndBlur) {
        const text = this._getInputValue();
        if (text !== this._getCurrentModelValue() && !this._canSave(text)) {
          this._setInputValue(this._model.get(this._property));
          return;
        }
      }
      this._saveTextValue();
    });
    if (!this._textareaViewController.getIsMultiline()) {
      this._textareaViewController.getEventStream().filter(_ref2 => {
        let {
          eventName,
          event
        } = _ref2;
        return eventName === 'keydown' && jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_2__.jwerty.is('enter', event);
      }).onValue(_ref3 => {
        let {
          event
        } = _ref3;
        return this._enterPressed(event);
      });
    }
    this._textareaViewController.getEventStream().filter(_ref4 => {
      let {
        eventName,
        event
      } = _ref4;
      return eventName === 'keydown' && jwerty_globals_fixed__WEBPACK_IMPORTED_MODULE_2__.jwerty.is('escape', event);
    }).onValue(_ref5 => {
      let {
        event
      } = _ref5;
      return this._escapePressed(event);
    });
    this._textareaViewController.getEventStream().onEnd(() => this.destroy());
  }
  _subscribeToModelEventStream() {
    if (!this._model || !this._property) return;
    this._model.getChangesStream(this._property).takeUntilBy(this._textareaViewController.getStopperStream()).onValue(_ref6 => {
      let {
        newValue
      } = _ref6;
      if (!this._textareaViewController.hasFocus()) {
        this._setInputValue(newValue);
      }
    });
  }
  _saveTextValue() {
    if (!this._model || !this._property) return;
    const text = this._getInputValue();
    if (text !== this._getCurrentModelValue() && this._canSave(text)) {
      this._model.set(this._property, text);
      if (this._autoSave) {
        this._model.save();
        if (this._postSave) this._postSave();
      }
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_3__["default"].track('modelPropertyEdited', {
        entityType: this._model.entityType,
        property: this._property,
        trackingContext: this._trackingContext
      });
    } else if (this._restoreOriginalOnInvalidSave) {
      this._setInputValue(this._model.get(this._property));
    }
  }
  _enterPressed(event) {
    // Prevent default of 'enter' to stop unexpected behaviors
    event.preventDefault();
    if (this._blurOnEnterPress) this._textareaViewController.blur();else this._saveTextValue();
  }
  _escapePressed(_) {
    if (this._restoreOriginalOnEscapePress) {
      const currentText = this._getInputValue();
      if (currentText !== this._getCurrentModelValue()) {
        this._setInputValue(this._model.get(this._property));
        return;
      }
    }
  }
  _getCurrentModelValue() {
    return this._model.get(this._property);
  }
  _getInputValue() {
    if (this._useHTML) {
      return this._textareaViewController.getHTML();
    } else {
      return this._textareaViewController.getTextWithNewlines();
    }
  }
  _setInputValue(value) {
    if (!this._textareaViewController) return;
    if (this._useHTML) {
      this._textareaViewController.safelySetHTML(value || '');
    } else {
      this._textareaViewController.setTextWithNewlines(value || '');
    }
  }
  _setInputToCurrentModelValue() {
    if (!this._model || !this._property) return;
    this._setInputValue(this._getCurrentModelValue());
  }
  set model(model) {
    this._model = model;
    this._subscribeToModelEventStream();
    this._setInputToCurrentModelValue();
  }
  set property(property) {
    this._property = property;
    this._subscribeToModelEventStream();
    this._setInputToCurrentModelValue();
  }
  set preSaveCheckFunction(preSaveCheckFunction) {
    this._canSave = preSaveCheckFunction;
  }
}
add_accessors__WEBPACK_IMPORTED_MODULE_1___default()(ModelPropInputDecorator.prototype, [{
  name: '_textareaViewController',
  destroy: false
}, {
  name: '_trackingContext',
  destroy: false
}, {
  name: '_canSave',
  destroy: false
}, {
  name: '_postSave',
  destroy: false
}, {
  name: '_restoreOriginalOnInvalidSave',
  destroy: false
}, {
  name: '_blurOnEnterPress',
  destroy: false
}, {
  name: '_restoreOriginalOnInvalidAndBlur',
  destroy: false
}]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelPropInputDecorator);

/***/ }),

/***/ 52489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17013);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4283);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var add_accessors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9739);
/* harmony import */ var add_accessors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(add_accessors__WEBPACK_IMPORTED_MODULE_2__);





class ValidatorInputDecorator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    lodash__WEBPACK_IMPORTED_MODULE_0___default().defaults(options, {
      showValidInputBorders: false,
      showValidInputStatusText: false,
      showInvalidInputBorders: true,
      showInvalidInputStatusText: true,
      updateEvents: ['input', 'focus', 'blur', 'setText'],
      validatorFunction: () => {
        return {
          isValid: true,
          statusText: ''
        };
      }
    });
    this._getValidationStatus = options.validatorFunction;
    this._updateEvents = options.updateEvents;

    // Formatting Flags
    this._showValidInputBorders = options.showValidInputBorders;
    this._showValidInputStatusText = options.showValidInputStatusText;
    this._showInvalidInputBorders = options.showInvalidInputBorders;
    this._showInvalidInputStatusText = options.showInvalidInputStatusText;
    this._textareaViewController = options.textareaViewController;
    this._textareaViewController.getView().addClass('streak__inputDecorator_validator');
    this._subscribeToViewControllerEventStreams();
    if (this._showValidInputStatusText || this._showInvalidInputStatusText) {
      this._setupStatusText();
    }
  }
  _subscribeToViewControllerEventStreams() {
    this._textareaViewController.getEventStream().filter(_ref => {
      let {
        eventName
      } = _ref;
      return this._updateEvents.indexOf(eventName) > -1;
    }).onValue(() => this._updateInputValidity());
    this._textareaViewController.getEventStream().onEnd(() => this.destroy());
  }
  destroy() {
    // nothing to do
  }
  _setupStatusText() {
    if (this._statusElement) this._statusElement.remove();
    this._statusElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="streak__inputDecorator_validator_statusText" tabindex="-1"></div>');
    this._textareaViewController.appendElementToView(this._statusElement);
  }

  /* ==================================== */
  /*          Validity Management         */
  /* ==================================== */

  _updateInputValidity() {
    if (!this._textareaViewController || !this._textareaViewController.getView()) return;
    const text = this._getInputValue();
    const validityObject = this._getValidationStatus(text);
    this._resetInputValidity();
    if (validityObject.isValid) this._setInputValid(validityObject);else this._setInputInvalid(validityObject);
  }
  _resetInputValidity() {
    this._textareaViewController.resetInputValidity();
    this._resetStatusText();
  }
  _setInputValid(validityObject) {
    if (this._showValidInputBorders) this._textareaViewController.setInputValid();
    if (this._showValidInputStatusText) this._setStatusText(validityObject.statusText);
  }
  _setInputInvalid(validityObject) {
    if (this._showInvalidInputBorders) this._textareaViewController.setInputInvalid();
    if (this._showInvalidInputStatusText) this._setInvalidStatusText(validityObject.statusText);
  }

  /* ==================================== */
  /*        Status Text Management        */
  /* ==================================== */

  _setStatusText(text) {
    // The active class adds the borders and padding
    if (this._statusElement) {
      this._statusElement.addClass('active');
      this._statusElement.removeClass('streak__inputDecorator_validator_statusText_invalid');
      this._statusElement.text(text);
    }
  }
  _setInvalidStatusText(text) {
    if (this._statusElement) {
      this._statusElement.addClass('active');
      this._setStatusText(text);
      this._statusElement.addClass('streak__inputDecorator_validator_statusText_invalid');
    }
  }
  _resetStatusText() {
    if (this._statusElement) {
      this._setStatusText(''); // Remove active so the borders of the empty div borders don't show
      this._statusElement.removeClass('active');
    }
  }

  /* ==================================== */

  _getInputValue() {
    return this._textareaViewController.getTextWithNewlines();
  }
  isInputValid() {
    return this._getValidationStatus(this._getInputValue()).isValid;
  }
}
add_accessors__WEBPACK_IMPORTED_MODULE_2___default()(ValidatorInputDecorator.prototype, [{
  name: '_textareaViewController',
  destroy: false
}, {
  name: '_updateEvents',
  destroy: false
}, {
  name: '_statusElement',
  destroy: true,
  destroyMethod: 'remove'
}, {
  name: '_useValidInputFormatting',
  destroy: false
}, {
  name: '_useInvalidInputFormatting',
  destroy: false
}, {
  name: '_showValidInputStatusText',
  destroy: false
}, {
  name: '_showInvalidInputStatusText',
  destroy: false
}]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorInputDecorator);

/***/ }),

/***/ 8878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ _1)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__kJj4o7Y3NEcf4FxS4DaA";



/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ok: () => (/* binding */ _2),
/* harmony export */   pm: () => (/* binding */ _4),
/* harmony export */   zE: () => (/* binding */ _1),
/* harmony export */   zf: () => (/* binding */ _3)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__TsX2v4eBdCpxUIblFMi8";
var _2 = "streak-mod__UcY9aHN9syclMIL_l_kW";
var _3 = "streak-mod__iP8eD28aUXwAEG86QkQ9";
var _4 = "streak-mod__VpJzSnrO0Hq2sFxb8UHw";



/***/ }),

/***/ 9739:
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = addAccessors;
var difference = __webpack_require__(14588);
var has = __webpack_require__(16324);

function getGetterName(variableName) {
  return 'get' + variableName.charAt(1).toUpperCase() + variableName.slice(2);
}

function getSetterName(variableName) {
  return 'set' + variableName.charAt(1).toUpperCase() + variableName.slice(2);
}

function makeGetter(variableName) {
  return function () {
    return this[variableName];
  };
}

function makeSetter(variableName) {
  return function (x) {
    this[variableName] = x;
  };
}

var SUPPORTED_DESCRIPTOR_PROPS = (/* unused pure expression or super */ null && (['name', 'get', 'set', 'destroy', 'destroyMethod']));

function addAccessors(obj, descriptors) {
  descriptors.forEach(function (descriptor) {
    var name = descriptor.name;

    if (false) { var unsupportedProps; }
    if (descriptor.get) {
      obj[getGetterName(name)] = makeGetter(name);
    }
    if (descriptor.set) {
      obj[getSetterName(name)] = makeSetter(name);
    }
  });
  var superDestroy = obj.destroy;
  obj.destroy = function () {
    var _this = this;

    if (superDestroy) {
      superDestroy.call(this);
    }
    descriptors.forEach(function (descriptor) {
      var name = descriptor.name;
      var destroy = descriptor.destroy;

      if (has(_this, name)) {
        var value = _this[name];
        _this[name] = undefined;
        if (destroy && value) {
          (function () {
            var destroyMethod = descriptor.destroyMethod || 'destroy';
            if (Array.isArray(value)) {
              value.forEach(function (x) {
                x[destroyMethod]();
              });
            } else {
              value[destroyMethod]();
            }
          })();
        }
      }
    });
  };
}

module.exports = exports['default'];


/***/ }),

/***/ 20559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "payment_link.dc71f5ab0d348d554749.svg";

/***/ }),

/***/ 60099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cardProvider.26e04d3dfc633f50385d.png";

/***/ }),

/***/ 28667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "member.1c60e1fe79dec69a32ef.png";

/***/ }),

/***/ 67055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "owner.65b8a1eb088dc9d66a35.png";

/***/ }),

/***/ 61742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pending.502a005495ed8384d511.png";

/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.2095.f7afbfe85314677cf1bf.js.map