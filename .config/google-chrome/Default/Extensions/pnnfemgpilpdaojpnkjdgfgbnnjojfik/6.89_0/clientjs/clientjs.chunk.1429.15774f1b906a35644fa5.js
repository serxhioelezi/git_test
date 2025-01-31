"use strict";
export const id = 1429;
export const ids = [1429,9117];
export const modules = {

/***/ 39117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streakUniversityItemsByGroup: () => (/* binding */ streakUniversityItemsByGroup)
/* harmony export */ });
/* harmony import */ var _customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32965);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__]);
_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/**
 * @note Order of keys here is significant
 */
const streakUniversityItemsByGroup = {
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.gettingStarted]: [{
    title: 'streak_u_welcome_to_streak!',
    description: 'streak_u_welcome_to_streak!_desc',
    videoID: 'oYrNZGQ2mu0',
    externalPath: 'welcome-to-streak',
    duration: '6:29',
    relatedArticles: [{
      title: 'streak_u_related_article_adding_boxes_to_your_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_boxes_to_your_pipeline_desc',
      url: 'https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }, {
      title: 'streak_u_related_article_call_logs_and_meeting_notes',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_call_logs_and_meeting_notes_desc',
      url: 'https://support.streak.com/en/articles/2569566-call-logs-meeting-notes'
    }]
  }, {
    title: 'streak_u_introduction_to_streak_pipelines',
    description: 'streak_u_introduction_to_streak_pipelines_desc',
    videoID: '1YAEunp-N2U',
    externalPath: 'introduction-to-pipelines',
    duration: '3:02',
    relatedArticles: [{
      title: 'streak_u_related_article_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2761926-pipelines'
    }],
    tourLinks: [{
      async fn() {
        await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__/* .startUserflowContent */ .Z)("aa884b23-3595-44b2-942c-a69e4fdf158e");
      },
      localeKey: 'streak_u_tour_link_ explore_pipelines',
      tourId: "aa884b23-3595-44b2-942c-a69e4fdf158e"
    }]
  }, {
    title: 'streak_u_pipelines_deepdive_column_types',
    description: 'streak_u_pipelines_deepdive_column_types_desc',
    videoID: 'ST3fmPKDyaM',
    externalPath: 'pipelines-deepdive-columns',
    duration: '6:03',
    relatedArticles: [{
      title: 'streak_u_related_article_custom_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_custom_columns_desc',
      url: 'https://support.streak.com/en/articles/2563457-custom-columns'
    }, {
      title: 'streak_u_related_article_magic_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_magic_columns_desc',
      url: 'https://support.streak.com/en/articles/2563465-magic-columns'
    }]
  }, {
    title: 'streak_u_build_your_pipeline_with_templates',
    description: 'streak_u_build_your_pipeline_with_templates_desc',
    videoID: '5rIdYNccqEk',
    externalPath: 'build-your-pipeline',
    duration: '3:02',
    relatedArticles: [{
      title: 'streak_u_related_article_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2761926-pipelines'
    }, {
      title: 'streak_u_related_article_customizing_a_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_customizing_a_pipeline_desc',
      url: 'https://support.streak.com/en/articles/2562671-customizing-a-pipeline'
    }, {
      title: 'streak_u_related_article_magic_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_magic_columns_desc',
      url: 'https://support.streak.com/en/articles/2563465-magic-columns'
    }, {
      title: 'streak_u_related_article_custom_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_custom_columns_desc',
      url: 'https://support.streak.com/en/articles/2563457-custom-columns'
    }]
  }, {
    title: 'streak_u_auto_fill_your_pipeline_from_your_inbox',
    description: 'streak_u_auto_fill_your_pipeline_from_your_inbox_desc',
    videoID: 'NKX711y3e90',
    externalPath: 'auto-fill-your-pipeline',
    duration: '2:56',
    relatedArticles: [{
      title: 'streak_u_related_article_adding_boxes_to_your_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_boxes_to_your_pipeline_desc',
      url: 'https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }, {
      title: 'streak_u_related_article_import_data_into_streak',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_import_data_into_streak_desc',
      url: 'https://support.streak.com/en/articles/2514596-import-data-into-streak'
    }],
    tourLinks: [{
      async fn() {
        await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__/* .startUserflowContent */ .Z)("4c5e738a-159e-4afe-9dd0-3ad5087bd9b4");
      },
      localeKey: 'streak_u_tour_link_add_a_box',
      tourId: "4c5e738a-159e-4afe-9dd0-3ad5087bd9b4"
    }]
  }, {
    title: 'streak_u_the_box_view',
    description: 'streak_u_the_box_view_desc',
    videoID: 'duMo5ETbIBM',
    externalPath: 'the-box-view',
    duration: '5:03',
    relatedArticles: [{
      title: 'streak_u_related_article_boxes',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_boxes_desc',
      url: 'https://support.streak.com/en/articles/2563490-boxes'
    }, {
      title: 'streak_u_related_article_adding_boxes_to_your_pipeline',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_boxes_to_your_pipeline_desc',
      url: 'https://support.streak.com/en/articles/3317255-adding-boxes-to-your-pipeline'
    }, {
      title: 'streak_u_related_article_using_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_using_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/2414716-using-contacts-and-organizations'
    }],
    tourLinks: [{
      async fn() {
        await (0,_customOnboarding_setupUserflow__WEBPACK_IMPORTED_MODULE_0__/* .startUserflowContent */ .Z)("6524067a-906f-4c0e-97d6-c1cb435fbc75");
      },
      tourId: "6524067a-906f-4c0e-97d6-c1cb435fbc75",
      localeKey: 'streak_u_tour_link_explore_box_view'
    }]
  }, {
    title: 'streak_u_invite_your_team_to_collaborate_in_streak',
    description: 'streak_u_invite_your_team_to_collaborate_in_streak_desc',
    videoID: 'VOVAyfwrGWQ',
    externalPath: 'invite-your-team-to-collaborate',
    duration: '1:25',
    relatedArticles: [{
      title: 'streak_u_related_article_managing_users_on_your_team',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_managing_users_on_your_team_desc',
      url: 'https://support.streak.com/en/collections/3821982-manage-users'
    }, {
      title: 'streak_u_related_article_user_roles_and_permissions',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_user_roles_and_permissions_desc',
      url: 'https://support.streak.com/en/articles/2546324-user-roles-and-permissions'
    }]
  }],
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.emailEffectively]: [{
    title: 'streak_u_snippets',
    description: 'streak_u_snippets_desc',
    videoID: 'EnVw_RSlnYA',
    externalPath: 'snippets',
    duration: '4:44',
    relatedArticles: [{
      title: 'streak_u_related_article_snippets',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_snippets_desc',
      url: 'https://support.streak.com/en/articles/2546223-snippets'
    }, {
      title: 'streak_u_related_article_share_a_snippet',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_share_a_snippet_desc',
      url: 'https://support.streak.com/en/articles/2833007-share-a-snippet'
    }, {
      title: 'streak_u_related_article_add_images_to_snippets_and_mail_merges',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_add_images_to_snippets_and_mail_merges_desc',
      url: 'https://support.streak.com/en/articles/2546122-add-images-to-snippets-and-mail-merges'
    }]
  }, {
    title: 'streak_u_email_tracking',
    description: 'streak_u_email_tracking_desc',
    videoID: 'dMKtSYU-rd8',
    externalPath: 'email-tracking',
    duration: '5:56',
    relatedArticles: [{
      title: 'streak_u_related_article_email_tracking',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_email_tracking_desc',
      url: 'https://support.streak.com/en/articles/2448073-email-tracking'
    }, {
      title: 'streak_u_related_article_how_does_email_tracking_work',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_does_email_tracking_work_desc',
      url: 'https://support.streak.com/en/articles/2447759-how-does-email-tracking-work'
    }, {
      title: 'streak_u_related_article_how_to_tell_when_a_tracked_message_is_read',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_to_tell_when_a_tracked_message_is_read_desc',
      url: 'https://support.streak.com/en/articles/3179591-how-to-tell-when-a-tracked-message-is-read'
    }, {
      title: 'streak_u_related_article_test_email_tracking',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_test_email_tracking_desc',
      url: 'https://support.streak.com/en/articles/2276966-test-email-tracking'
    }]
  }, {
    title: 'streak_u_link_tracking',
    description: 'streak_u_link_tracking_desc',
    videoID: 'PtVFcw_w7L4',
    externalPath: 'link-tracking',
    duration: '3:13',
    relatedArticles: [{
      title: 'streak_u_related_article_track_link_clicks_in_your_sent_emails',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_track_link_clicks_in_your_sent_emails_desc',
      url: 'https://support.streak.com/en/articles/6017570-track-link-clicks-in-your-sent-emails'
    }, {
      title: 'streak_u_related_article_email_tracking',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_email_tracking_desc',
      url: 'https://support.streak.com/en/articles/2448073-email-tracking'
    }]
  }, {
    title: 'streak_u_create_a_mail_merge',
    description: 'streak_u_create_a_mail_merge_desc',
    videoID: 'YgDQn8UHEUk',
    externalPath: 'mail-merge',
    duration: '5:28',
    relatedArticles: [{
      title: 'streak_u_related_article_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2348155-mail-merge'
    }, {
      title: 'streak_u_related_article_customizing_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_customizing_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2546027-customizing-a-mail-merge'
    }, {
      title: 'streak_u_related_article_best_practices_when_creating_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_best_practices_when_creating_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge'
    }, {
      title: 'streak_u_related_article_daily_mail_merge_sending_limits',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_daily_mail_merge_sending_limits_desc',
      url: 'https://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits'
    }, {
      title: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?_desc',
      url: 'https://support.streak.com/en/articles/3851138-how-can-i-avoid-my-emails-being-marked-as-spam-when-sending-a-mail-merge'
    }, {
      title: 'streak_u_related_article_add_images_to_snippets_and_mail_merges',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_add_images_to_snippets_and_mail_merges_desc',
      url: 'https://support.streak.com/en/articles/2546122-add-images-to-snippets-and-mail-merges'
    }]
  }, {
    title: 'streak_u_add_automatic_follow-up_to_a_mail_merge',
    description: 'streak_u_add_automatic_follow-up_to_a_mail_merge_desc',
    videoID: 'Iwd5d5bEm7g',
    externalPath: 'add-automatic-follow-up-to-a-mail-merge',
    duration: '2:12',
    relatedArticles: [{
      title: 'streak_u_related_article_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2348155-mail-merge'
    }, {
      title: 'streak_u_related_article_customizing_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_customizing_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2546027-customizing-a-mail-merge'
    }, {
      title: 'streak_u_related_article_daily_mail_merge_sending_limits',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_daily_mail_merge_sending_limits_desc',
      url: 'https://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits'
    }, {
      title: 'streak_u_related_article_best_practices_when_creating_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_best_practices_when_creating_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge'
    }, {
      title: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_can_i_avoid_my_emails_being_marked_as_spam?_desc',
      url: 'https://support.streak.com/en/articles/3851138-how-can-i-avoid-my-emails-being-marked-as-spam-when-sending-a-mail-merge'
    }]
  }, {
    title: 'streak_u_manage_your_mail_merges_and_quota',
    description: 'streak_u_manage_your_mail_merges_and_quota_desc',
    videoID: 'Gb85l1OIFbk',
    externalPath: 'manage-your-mail-merges-and-quota',
    duration: '4:30',
    relatedArticles: [{
      title: 'streak_u_related_article_daily_mail_merge_sending_limits',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_daily_mail_merge_sending_limits_desc',
      url: 'https://support.streak.com/en/articles/2546069-daily-mail-merge-sending-limits'
    }, {
      title: 'streak_u_related_article_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2348155-mail-merge'
    }, {
      title: 'streak_u_related_article_best_practices_when_creating_a_mail_merge',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_best_practices_when_creating_a_mail_merge_desc',
      url: 'https://support.streak.com/en/articles/2735763-best-practices-when-creating-a-mail-merge'
    }]
  }],
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.trackPeopleAndCompanies]: [{
    title: 'streak_u_contacts_and_organizations',
    description: 'streak_u_contacts_and_organizations_desc',
    videoID: '4UXjqi8z6W8',
    externalPath: 'contacts-and-organizations',
    duration: '5:32',
    relatedArticles: [{
      title: 'streak_u_related_article_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/3623777-contacts-and-organizations'
    }, {
      title: 'streak_u_related_article_using_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_using_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/2414716-using-contacts-and-organizations'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }]
  }, {
    title: 'streak_u_add_contacts_and_organizations,_share_emails_automatically',
    description: 'streak_u_add_contacts_and_organizations,_share_emails_automatically_desc',
    videoID: 'o0P7QBSnqNY',
    externalPath: 'add-contacts-and-organizations-share-emails-automatically',
    duration: '6:47',
    relatedArticles: [{
      title: 'streak_u_related_article_overview:_automatic_email_sharing',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_overview:_automatic_email_sharing_desc',
      url: 'https://support.streak.com/en/articles/4300110-overview-automatic-email-sharing'
    }, {
      title: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_adding_contacts_and_organizations_to_pipelines_desc',
      url: 'https://support.streak.com/en/articles/2400401-adding-contacts-and-organizations-to-your-pipelines'
    }, {
      title: 'streak_u_related_article_contacts_and_organizations',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_contacts_and_organizations_desc',
      url: 'https://support.streak.com/en/articles/3623777-contacts-and-organizations'
    }]
  }],
  [_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.prioritizeYourWork]: [{
    title: 'streak_u_saved_views_filter_and_segment_your_pipelines',
    description: 'streak_u_saved_views_filter_and_segment_your_pipelines_desc',
    videoID: 'lZXCJ7UJxHA',
    externalPath: 'saved-views',
    duration: '3:56',
    relatedArticles: [{
      title: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views_desc',
      url: 'https://support.streak.com/en/articles/2466406-filter-sort-and-group-boxes-using-saved-views'
    }, {
      title: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox_desc',
      url: 'https://support.streak.com/en/articles/2481424-view-boxes-in-a-saved-view-from-your-inbox'
    }]
  }, {
    title: 'streak_u_how_to_create_saved_views',
    description: 'streak_u_how_to_create_saved_views_desc',
    videoID: 'tBHbgCUrYz4',
    externalPath: 'how-to-create-saved-views',
    duration: '6:10',
    relatedArticles: [{
      title: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_filter,_sort,_and_group_boxes_using_saved_views_desc',
      url: 'https://support.streak.com/en/articles/2466406-filter-sort-and-group-boxes-using-saved-views'
    }, {
      title: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_view_boxes_from_a_saved_view_in_your_inbox_desc',
      url: 'https://support.streak.com/en/articles/2481424-view-boxes-in-a-saved-view-from-your-inbox'
    }, {
      title: 'streak_u_related_article_magic_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_magic_columns_desc',
      url: 'https://support.streak.com/en/articles/2563465-magic-columns'
    }, {
      title: 'streak_u_related_article_custom_columns',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_custom_columns_desc',
      url: 'https://support.streak.com/en/articles/2563457-custom-columns'
    }]
  }, {
    title: 'streak_u_the_reports_dashboard',
    comingSoon: true
  }, {
    title: 'streak_u_custom_reports_with_saved_views',
    description: 'streak_u_custom_reports_with_saved_views_desc',
    videoID: 'sEoqoOvvtiM',
    externalPath: 'custom-reports-with-saved-views',
    duration: '6:21',
    relatedArticles: [{
      title: 'streak_u_related_article_pipeline_reports',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_pipeline_reports_desc',
      url: 'https://support.streak.com/en/articles/2514184-pipeline-reports'
    }, {
      title: 'streak_u_related_article_how_to_create_custom_reports_from_saved_views',
      titleIcon: 'assignment',
      description: 'streak_u_related_article_how_to_create_custom_reports_from_saved_views_desc',
      url: 'https://support.streak.com/en/articles/2514266-how-to-create-custom-reports-from-saved-views'
    }]
  }, {
    title: 'streak_u_reporting_deepdive_custom_reports',
    comingSoon: true
  }]
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ StreakUniversityGroups),
/* harmony export */   W: () => (/* binding */ isVideo)
/* harmony export */ });
var StreakUniversityGroups = {
  gettingStarted: 0,
  emailEffectively: 1,
  trackPeopleAndCompanies: 2,
  prioritizeYourWork: 3
};

/**
 * This should be filtered out of any preview list.
 */

function isVideo(lesson) {
  return 'videoID' in lesson;
}

/***/ }),

/***/ 51429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44345);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69980);
/* harmony import */ var _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35091);
/* harmony import */ var _homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39117);
/* harmony import */ var _streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87084);
/* harmony import */ var _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88065);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79221);
/* harmony import */ var _react_toolkit_hooks_useEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46547);
/* harmony import */ var _widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9112);
/* harmony import */ var _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13778);
/* harmony import */ var use_kefir__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(62008);
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55868);
/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57210);
/* harmony import */ var _lib_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75051);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59844);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _streakUniversity_VideoMole__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61972);
/* harmony import */ var _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77294);
/* harmony import */ var _core_appShell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81022);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3572);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__]);
_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















function ItemDetails(_ref) {
  let {
    description,
    relatedArticles,
    setMaxHeight,
    tourLinks,
    videoID,
    onVideoPlay
  } = _ref;
  const detailsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const imgUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .youtubeVideoToImg */ .RF)(videoID, 'maxresdefault');
  }, [videoID]);
  const onThumbnailClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    onVideoPlay(videoID);
    _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].trackStreakActive({
      eventName: _utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.fullListPlay,
      youtubeVideoId: videoID
    });
    e.stopPropagation();
  }, [videoID, onVideoPlay]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = detailsRef.current;
    if (el) {
      setMaxHeight(el.clientHeight);
    }
  });
  const relatedLinks = (0,_lib_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_11__/* .useMemoCompare */ .q)((relatedArticles ?? []).concat(tourLinks ?? []), (fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_12___default()));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .itemDetails */ .Wz,
    ref: detailsRef,
    onClick: e => e.stopPropagation(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .thumbnail */ .Q1,
      onClick: onThumbnailClick,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("img", {
        src: imgUrl
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .playbackIcon */ .cu,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .JO, {
          name: "play_circle_filled",
          color: "black/secondary",
          size: "xl"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .Typo */ .Jd, {
      variant: "H4 - Caption",
      wrap: "pre-wrap",
      children: description
    }), relatedLinks.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("ul", {
        className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .relatedLinks */ .gg,
        children: relatedLinks.map(link => {
          const {
            title,
            key,
            titleIcon,
            tooltip,
            onClick
          } = (() => {
            if ('fn' in link) {
              const {
                fn,
                tourId,
                localeKey
              } = link;
              return {
                key: tourId,
                title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(localeKey),
                titleIcon: 'directions_walk',
                onClick: e => {
                  _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].trackStreakActive({
                    eventName: _utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.startTourClick,
                    youtubeVideoId: videoID,
                    tourId
                  });
                  e.stopPropagation();
                  fn();
                }
              };
            }
            const {
              title,
              titleIcon,
              url
            } = link;
            return {
              key: url,
              title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(title),
              titleIcon,
              onClick: e => {
                _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].trackStreakActive({
                  eventName: _utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.relatedLinkClick,
                  youtubeVideoId: videoID,
                  articleUrl: link.url
                });
                e.stopPropagation();
                window.open(url, '_blank');
              }
            };
          })();
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("li", {
            onClick: onClick,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_widgets_react_material_tooltip_TooltipContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .relatedLink */ .lF,
              tooltip: tooltip,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .JO, {
                color: "primary/base",
                name: titleIcon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
                className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .relatedLinkTitle */ .ut,
                children: title
              })]
            })
          }, key);
        })
      })]
    })]
  });
}
function Item(_ref2) {
  let {
    active,
    comingSoon,
    description,
    duration,
    expanded,
    onVideoPlay,
    relatedLinks,
    title,
    toggleExpand,
    tourLinks,
    videoID,
    watched
  } = _ref2;
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{
    hovering,
    maxDetailsSize
  }, updateState] = (0,use_immer__WEBPACK_IMPORTED_MODULE_18__/* .useImmer */ .x)({
    hovering: false,
    maxDetailsSize: 0
  });
  const toggle = (0,_react_toolkit_hooks_useEvent__WEBPACK_IMPORTED_MODULE_7__/* .useEvent */ .z)(() => {
    toggleExpand?.(videoID);
  });
  const topRightChild = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (watched) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .itemSubtitle */ .LL, _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .watched */ .JE),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('streak_u_watched')
      });
    } else if (comingSoon) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .itemSubtitle */ .LL, _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .comingSoon */ .w1),
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('streak_u_coming_soon')
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .itemSubtitle */ .LL, _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .duration */ .x9),
      children: duration
    });
  }, [comingSoon, duration, watched]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .itemContainer */ .Gu, {
      [_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .expanded */ .zh]: expanded,
      [_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .hasDetails */ .HH]: expanded || hovering,
      [_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .hovering */ .c1]: hovering,
      [_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .teaser */ .Mf]: comingSoon
    }, active && _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .active */ .bB),
    "data-video-id": videoID,
    onClick: toggle,
    onMouseEnter: () => updateState(draft => {
      draft.hovering = true;
    }),
    onMouseLeave: () => updateState(draft => {
      draft.hovering = false;
    }),
    ref: elRef,
    style: {
      height: 32 + (expanded ? maxDetailsSize : 0)
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .playIcon */ .Iw,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .JO, {
        name: "play_circle_outline",
        color: "primary/base"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      ref: titleRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .itemTitle */ .qP, {
        [_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .watched */ .JE]: watched,
        [_FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .expanded */ .zh]: expanded
      }),
      children: title
    }), topRightChild, (expanded || hovering && !comingSoon) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ItemDetails, {
      description: description,
      relatedArticles: relatedLinks,
      setMaxHeight: h => {
        const el = titleRef.current;
        updateState(draft => {
          draft.maxDetailsSize = h + (el?.clientHeight || 0);
        });
      },
      tourLinks: tourLinks,
      videoID: videoID,
      onVideoPlay: onVideoPlay
    })]
  });
}
let moleView = undefined;
const titleByVideoId = new Map(Object.values(_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__.streakUniversityItemsByGroup).flatMap(group => group.flatMap(x => {
  if ('videoID' in x) {
    return [[x.videoID, _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(x.title)]];
  }
  return [];
})));
function FullList(_ref3) {
  let {
    videoID
  } = _ref3;
  const [{
    openItem,
    playingVideo
  }, updateState] = (0,use_immer__WEBPACK_IMPORTED_MODULE_18__/* .useImmer */ .x)({
    openItem: videoID ?? null,
    playingVideo: videoID ?? null
  });
  const watched = (0,use_kefir__WEBPACK_IMPORTED_MODULE_19__/* .useKefir */ .Ut)(_services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_10__.LocalSettings.getStream(_utils__WEBPACK_IMPORTED_MODULE_6__/* .localSettingsWatchedVideoIdsKey */ .Wj).skipDuplicates((fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_12___default())).map(v => new Set(v)), new Set(), []);
  const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useDispatch */ .I0)();
  const toggleExpand = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(videoId => {
    updateState(draft => {
      let isExpanded = false;
      if (draft.openItem === videoId) {
        draft.openItem = null;
      } else {
        draft.openItem = videoId;
        isExpanded = true;
      }
      _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].trackStreakActive({
        eventName: _utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.lessonExpand,
        expanded: isExpanded,
        youtubeVideoId: videoId
      });
    });
  }, [updateState]);
  const onVideoPlay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .markLessonAsWatched */ .Mp)(id);
    updateState(draft => {
      draft.playingVideo = id;
    });
    const title = titleByVideoId.get(id) ?? 'Streak University';
    dispatch({
      type: 'STREAK_UNIVERSITY/PLAY_VIDEO',
      videoId: id
    });
    moleView?.setTitle(title);
    if (moleView?.getMinimized()) {
      moleView.setMinimized(false);
    }
    if (moleView) {
      return;
    }
    const el = document.createElement('div');
    el.style.visibility = 'visible';
    (0,_core_appShell__WEBPACK_IMPORTED_MODULE_15__/* .renderWithAppShell */ .oC)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakUniversity_VideoMole__WEBPACK_IMPORTED_MODULE_13__/* .StreakUVideoMole */ .C, {
      id: id
    }), el, () => {
      moleView ??= _core_gmail_inboxSdkSingleton__WEBPACK_IMPORTED_MODULE_14__.inboxSDK?.Widgets.showMoleView({
        title,
        titleButtons: [{
          iconUrl: '//ssl.gstatic.com/ui/v1/icons/mail/rfr/ic_open_in_full_16px_1x.png',
          onClick() {
            // If the mole is minimized when someone hits the modal mode button, unminimize it.
            if (moleView?.getMinimized()) {
              moleView.setMinimized(false);
            }

            // Hide the mole's title bar so the 'empty' mole doesn't appear in the bottom right corner of the window.
            // We could potentially add a "hideMole" method to MoleView in the SDK.
            const moleParent = el.closest('.inboxsdk__mole_view_inner');
            if (moleParent) {
              moleParent.style.visibility = 'hidden';
            }
            dispatch({
              type: 'STREAK_UNIVERSITY/CHANGE_PLAYBACK_MODE',
              playbackMode: 'modal'
            });
          },
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString('streak_u_maximize')
        }],
        el
      });
      moleView?.on('minimize', () => {
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].trackStreakActive({
          eventName: _utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.videoPlayerSizeChange,
          mode: 'minimized',
          youtubeVideoId: id
        });
      });
      moleView?.on('destroy', () => {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(el);
        updateState(draft => {
          draft.playingVideo = null;
        });
        _services_tracker_tracker__WEBPACK_IMPORTED_MODULE_9__["default"].trackStreakActive({
          eventName: _utils__WEBPACK_IMPORTED_MODULE_6__/* .TrackingEvents */ .MK.videoPlayerClose,
          youtubeVideoId: id
        });
        dispatch({
          type: 'STREAK_UNIVERSITY/PLAY_VIDEO',
          videoId: null
        });
        moleView = null;
      });
    });
  }, [dispatch, updateState]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (videoID) {
      updateState(draft => {
        if (draft.openItem === videoID) {
          return;
        }
        draft.openItem = videoID;
      });
      // get the top and bottom most elements of the lesson and make sure both are scrolled into view
      const elements = document.querySelectorAll(`[data-video-id="${videoID}"] > :first-child, [data-video-id="${videoID}"] > :last-child`);
      for (const child of elements) {
        child?.scrollIntoView({
          behavior: 'instant',
          block: 'center',
          inline: 'nearest'
        });
      }
      onVideoPlay(videoID);
    }
  }, [videoID, onVideoPlay, updateState]);
  const groups = Object.entries(_homeNav_streak_university_config__WEBPACK_IMPORTED_MODULE_3__.streakUniversityItemsByGroup).map(_ref4 => {
    let [group, items] = _ref4;
    const itemsList = items.map(item => {
      if ('duration' in item) {
        const {
          description,
          duration,
          relatedArticles,
          tourLinks,
          title,
          videoID
        } = item;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Item, {
          active: playingVideo === videoID,
          description: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(description),
          duration: duration,
          expanded: openItem === videoID,
          onVideoPlay: onVideoPlay,
          relatedLinks: relatedArticles,
          title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(title),
          toggleExpand: toggleExpand,
          tourLinks: tourLinks,
          videoID: videoID,
          watched: watched.has(videoID)
        }, title);
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Item, {
        active: false,
        comingSoon: true,
        duration: "",
        expanded: false,
        onVideoPlay: onVideoPlay,
        title: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(item.title),
        watched: false,
        videoID: ""
      }, item.title);
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("li", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_streakyc_ui_components__WEBPACK_IMPORTED_MODULE_4__/* .Typo */ .Jd, {
        variant: "H5 - Overline",
        children: _services_locale_locale__WEBPACK_IMPORTED_MODULE_2__.Locale.getString(_utils__WEBPACK_IMPORTED_MODULE_6__/* .localeKeyByGroupTitle */ .EQ[group])
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("ol", {
        className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .groupItems */ .sD,
        children: itemsList
      })]
    }, group);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
    className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .main */ .DH,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("ol", {
      className: _FullList_module_css__WEBPACK_IMPORTED_MODULE_17__/* .groups */ .Xx,
      children: groups
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ StreakUVideoMole)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/index.js
var react = __webpack_require__(44345);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/streakUniversity/VideoMole.module.css
// extracted by mini-css-extract-plugin
var _1 = "streak-mod__AiuUvCPXux1tyLj8985j";
var _2 = "streak-mod__iVAL_lwZzl5aS10DMdL4";
var _3 = "streak-mod__sWYkk00cUqy2u9k8to3L";
var _4 = "streak-mod__HdCx6czfbJ46O6pBu1Kt";
var _5 = "streak-mod__R5OiiPzR5L8nYymRCuv5";
var _6 = "streak-mod__WNErXFKGFMQAq0kCIr_w";


// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.5.1-c7273f3423-58eb394e88.zip/node_modules/classnames/index.js
var classnames = __webpack_require__(47587);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./extensions/common/js/redux/hooks.ts
var hooks = __webpack_require__(3572);
// EXTERNAL MODULE: ./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__(37871);
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
// EXTERNAL MODULE: ./extensions/common/js/services/tracker/tracker.ts
var tracker = __webpack_require__(13778);
// EXTERNAL MODULE: ./extensions/common/js/modules/streakSidebar/streakUniversity/utils.ts
var utils = __webpack_require__(79221);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(59718);
;// CONCATENATED MODULE: ./extensions/common/js/modules/streakSidebar/streakUniversity/VideoMole.tsx








function StreakUVideoMole(_ref) {
  let {
    id
  } = _ref;
  const ref = (0,react.useRef)(null);
  const {
    videoId,
    playbackMode: mode
  } = (0,hooks/* useSelector */.v9)(state => state.streakUniversityState ?? {
    videoId: null,
    playbackMode: null
  }, (fast_deep_equal_default()));
  const dispatch = (0,hooks/* useDispatch */.I0)();
  (0,react.useEffect)(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        dispatch({
          type: 'STREAK_UNIVERSITY/CHANGE_PLAYBACK_MODE',
          playbackMode: 'mole'
        });
        ref.current.closest('.inboxsdk__mole_view_inner').style.visibility = 'visible';
        if (videoId) {
          tracker["default"].trackStreakActive({
            eventName: utils/* TrackingEvents */.MK.videoPlayerSizeChange,
            mode: 'modal',
            youtubeVideoId: videoId
          });
        }
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [dispatch, id, videoId]);
  const sidebarIsOpen = (0,hooks/* useSelector */.v9)(state => state.sidebarState.isOpen);
  const minimize = (0,react.useCallback)(() => {
    dispatch({
      type: 'STREAK_UNIVERSITY/CHANGE_PLAYBACK_MODE',
      playbackMode: 'mole'
    });
    ref.current.closest('.inboxsdk__mole_view_inner').style.visibility = 'visible';
    if (videoId) {
      tracker["default"].trackStreakActive({
        eventName: utils/* TrackingEvents */.MK.videoPlayerSizeChange,
        mode: 'mole',
        youtubeVideoId: videoId
      });
    }
  }, [dispatch, videoId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()(_1, sidebarIsOpen && _5, mode === 'modal' && _3),
    onClick: minimize,
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: _4,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: _2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
          allowFullScreen: true,
          allow: "autoplay; encrypted-media",
          className: _6,
          src:
          /**
           * The rel query param only allows related content from our YouTube channel to be recommended at the end of playback.
           *
           * https://streak.slack.com/archives/C05TQ23C88Y/p1696436698569919?thread_ts=1696436359.066639&cid=C05TQ23C88Y
           */
          `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
        })
      })
    })
  });
}

/***/ }),

/***/ 79221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EQ: () => (/* binding */ localeKeyByGroupTitle),
/* harmony export */   MK: () => (/* binding */ TrackingEvents),
/* harmony export */   Mp: () => (/* binding */ markLessonAsWatched),
/* harmony export */   RF: () => (/* binding */ youtubeVideoToImg),
/* harmony export */   Wj: () => (/* binding */ localSettingsWatchedVideoIdsKey),
/* harmony export */   yp: () => (/* binding */ getWatchedLessonVideoIds)
/* harmony export */ });
/* unused harmony export getLessonVideoIds */
/* harmony import */ var _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55868);
/* harmony import */ var _homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66123);



/**
 * @example input '1YAEunp-N2U' from https://www.youtube.com/watch?v=1YAEunp-N2U;
 * outputs https://img.youtube.com/vi/1YAEunp-N2U/mqdefault.jpg
 */
function youtubeVideoToImg(videoId) {
  let quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mqdefault';
  const imgSrc = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  return imgSrc;
}
function getLessonVideoIds(config) {
  return new Set(Object.values(config).flatMap(items => items.flatMap(item => {
    if ('comingSoon' in item) {
      return [];
    }
    return [item.videoID];
  })));
}
const localSettingsWatchedVideoIdsKey = 'streakUWatchedVideoIds';
function getWatchedLessonVideoIds() {
  return new Set(_services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__.LocalSettings.get(localSettingsWatchedVideoIdsKey) ?? []);
}
async function markLessonAsWatched(videoId) {
  const watchedVideoIds = new Set(_services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__.LocalSettings.get(localSettingsWatchedVideoIdsKey) ?? []);
  if (!watchedVideoIds.has(videoId)) {
    watchedVideoIds.add(videoId);
    _services_localSettings_localSettings__WEBPACK_IMPORTED_MODULE_0__.LocalSettings.set(localSettingsWatchedVideoIdsKey, Array.from(watchedVideoIds));
  }
}
const localeKeyByGroupTitle = {
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.gettingStarted]: 'streak_u_group_getting_started',
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.emailEffectively]: 'streak_u_group_email_effectively',
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.trackPeopleAndCompanies]: 'streak_u_group_track_people_and_companies',
  [_homeNav_streak_university_types__WEBPACK_IMPORTED_MODULE_1__/* .StreakUniversityGroups */ .F.prioritizeYourWork]: 'streak_u_group_prioritize_your_work'
};
var TrackingEvents = {
  fullListPlay: "streakUniversity.fullList.videoPlay",
  lessonExpand: "streakUniversity.fullList.lessonExpand",
  moreVideosClick: "streakUniversity.previewList.moreVideosClick",
  startTourClick: "streakUniversity.fullList.startTourClick",
  previewListPlay: "streakUniversity.previewList.videoPlay",
  relatedLinkClick: "streakUniversity.fullList.relatedArticleClick",
  videoPlayerSizeChange: "streakUniversity.videoPlayer.sizeChange",
  videoPlayerClose: "streakUniversity.videoPlayer.close"
};

/***/ }),

/***/ 88065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DH: () => (/* binding */ _d),
/* harmony export */   Gu: () => (/* binding */ _9),
/* harmony export */   HH: () => (/* binding */ _7),
/* harmony export */   Iw: () => (/* binding */ _e),
/* harmony export */   JE: () => (/* binding */ _15),
/* harmony export */   LL: () => (/* binding */ _b),
/* harmony export */   Mf: () => (/* binding */ _13),
/* harmony export */   Q1: () => (/* binding */ _14),
/* harmony export */   Wz: () => (/* binding */ _a),
/* harmony export */   Xx: () => (/* binding */ _6),
/* harmony export */   bB: () => (/* binding */ _1),
/* harmony export */   c1: () => (/* binding */ _8),
/* harmony export */   cu: () => (/* binding */ _f),
/* harmony export */   gg: () => (/* binding */ _12),
/* harmony export */   lF: () => (/* binding */ _10),
/* harmony export */   qP: () => (/* binding */ _c),
/* harmony export */   sD: () => (/* binding */ _5),
/* harmony export */   ut: () => (/* binding */ _11),
/* harmony export */   w1: () => (/* binding */ _2),
/* harmony export */   x9: () => (/* binding */ _3),
/* harmony export */   zh: () => (/* binding */ _4)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "streak-mod___ieBkev2xuSlCn4VPWyg";
var _2 = "streak-mod__Y1vD6JYksDKKnywGf7T9";
var _3 = "streak-mod__ucimJi5oHnsIy8aD4o5Y";
var _4 = "streak-mod__EEYXZAXlbdpDjsEkEKPp";
var _5 = "streak-mod__KHqlpMyX4gfQcbfuYZ8r";
var _6 = "streak-mod__BRMnUvvMJESNZb98TtKW";
var _7 = "streak-mod__cK4iKwt6UIYmpxCUvSwn";
var _8 = "streak-mod__zRmFn0ojhiq8D9qVUHg4";
var _9 = "streak-mod__ZyaMRbWwn0RSHPu2OZ7L";
var _a = "streak-mod__oiMGzAqNslStJqg_zKKC";
var _b = "streak-mod__gcDdKl3SAK_Mql672yOI";
var _c = "streak-mod__InIPze2EJQGOxu92wjfC";
var _d = "streak-mod__Yz_8V4n1nNXk6yB3XDoV";
var _e = "streak-mod__D8NWCWi9EKUfud5VkjQb";
var _f = "streak-mod__PDxzHAwia9iwDlVaSpXB";
var _10 = "streak-mod__TitywdeCca36KtV0RTSr";
var _11 = "streak-mod__wvX5W9zjAWOjqDix31Zm";
var _12 = "streak-mod__pmPUmWiYft_PwTyE7M2K";
var _13 = "streak-mod__yRcEFMyuFNnGi5Gh2nXA";
var _14 = "streak-mod__TeW3MB81zUgLLjARexN0";
var _15 = "streak-mod__dUYjCGaPVXawFK7AsgyS";



/***/ })

};
;
//# sourceMappingURL=https://storage.googleapis.com/streak-extension-sourcemaps/clientjs/clientjs.chunk.1429.15774f1b906a35644fa5.js.map