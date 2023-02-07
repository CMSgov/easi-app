const technicalAssistance = {
  heading: 'Technical assistance requests',
  subheading:
    'Request help or feedback for your system, or ask the TRB for other technical assistance.',
  introText:
    'The CMS Technical Review Board (TRB) is a technical assistance resource for project teams across the agency at all stages of their system’s life cycle. It offers consultations and reviews on an ongoing or one-off basis, allowing project teams to consult with a cross-functional team of technical advisors. It also provides guidance to project teams on adhering to CMS technical standards and leveraging existing technologies.',
  infoBox: {
    text: [
      'You can make a request to:',
      'Requests are usually reviewed and have TRB consult sessions scheduled within a week.'
    ],
    list: [
      'ask for help with a technical problem',
      'review potential solutions or ideas with the TRB and other SMEs',
      'schedule an ongoing cadence of technical consultations',
      'consult with SMEs from across the agency',
      'consult with the TRB about CMS guidelines and standards',
      'request research or information about a particular technical topic'
    ]
  },
  questions:
    'If you have any questions, you may reach the TRB team at <1>cms-trb@cms.hhs.gov</1>.',
  nextStep: 'Start a new request',
  adminInfoBox: {
    heading: 'Looking for the TRB Team page?',
    text:
      'Go to <1>Admin Home</1> to review, assign, and manage incoming and existing technical assistance requests.'
  },
  editsRequested: {
    alert:
      'The TRB has requested edits to your initial request form. Please make any necessary changes and re-submit your form.',
    viewFeedback: 'View feedback'
  },
  // Misc breadcrumb items
  breadcrumbs: {
    startTrbRequest: 'Start a TRB Request'
  },
  // Common button text
  button: {
    back: 'Back',
    continue: 'Continue',
    next: 'Next',
    saveAndExit: 'Save and exit',
    start: 'Start',
    removeYourRequest: 'Remove your request'
  },
  table: {
    heading: 'My TRB Requests',
    header: {
      requestName: 'Request Name',
      submissionDate: 'Submission date',
      status: 'Request status'
    }
  },
  // Higher level errors
  errors: {
    checkFix: 'Please check and fix the following',
    fillBlank: 'Please fill in the blank',
    fillDate: 'Please fill in the date',
    includeExplanation: 'Please include an explanation',
    makeSelection: 'Please make a selection',
    selectFile: 'Please select a file',
    somethingWrong: 'Something went wrong.'
  },
  requestType: {
    heading: 'Start a technical assistance request',
    subhead: 'What is this request for?',
    goBack: 'Go back without starting a request',
    goBackWithoutChange: 'Go back without changing the request type',
    type: {
      NEED_HELP: {
        heading: 'I’m having a problem with my system',
        text:
          'The TRB can help you work through technical roadblocks that you are having with your system. Choose this option if:',
        list: [
          'you received a security finding, had an incident, or have a POA&M that you need help addressing',
          'you are having implementation difficulties and want guidance on how to proceed',
          'leadership has directed you to engage with the TRB because of an issue with your system'
        ]
      },
      BRAINSTORM: {
        heading: 'I have an idea and would like feedback',
        text:
          'The TRB now offers more casual conversations about specific topics, solutions, or ideas. Choose this option if:',
        list: [
          'your team is considering a new technical direction for future work',
          'you have a completely new idea for a system or service and would like to get feedback about it',
          'you want to brainstorm open-ended technical solutions'
        ]
      },
      FOLLOWUP: {
        heading: 'Follow-up or cadence consult',
        text:
          'Select this option if you have previously attended an IT Lounge or consultation with the TRB, and the TRB recommended a follow-up session as part of your next steps. Choose this option if:',
        list: [
          'the TRB recommended a follow-up session',
          'you have a regular cadence of engagements with the TRB and need to schedule the next one'
        ]
      },
      FORMAL_REVIEW: {
        heading: 'Formal design review',
        text:
          'Though the TRB has shifted to become more of a consultation and advice service, you can still request a more formal design review or readiness review. Choose this option if:',
        list: [
          'you have a architecture solution in mind and would like a review',
          'you are ready to go live and would like one final review with the TRB to make sure your team didn’t miss anything',
          'you would like a formal review of how your solution aligns with CMS’s Technical Reference Architecture (TRA)'
        ]
      }
    },
    whenOption: 'When should I choose this option?',
    additionalTrbServices: 'Additional TRB services',
    services: {
      other: 'Other (I don’t see what I’m looking for)'
    }
  },
  steps: {
    heading: 'Get technical assistance',
    changeRequestType: 'Change request type',
    description:
      'The CMS Technical Review Board (TRB) is a technical assistance resource for project teams across the agency at all stages of their system’s life cycle. It offers consultations and reviews on an ongoing or one-off basis, allowing project teams to consult with a cross-functional team of technical advisors. It also provides guidance to project teams on adhering to CMS technical standards and leveraging existing technologies.',

    info: {
      text: [
        'Using this process will allow you to:',
        'Requests are usually reviewed and have TRB consult sessions scheduled within a week.'
      ],
      list: [
        'ask for help with a technical problem',
        'consult with SMEs from across the agency',
        'consult with the TRB about CMS guidelines and standards'
      ]
    },
    stepsInTheProcess: 'Steps in the process',
    list: [
      {
        heading: 'Fill out the initial request form',
        text: [
          'Tell the Technical Review Board (TRB) what you need help with, including an overview of your question, problem, and/or solution. You may also upload any documentation that you think the TRB may find helpful (don’t worry, you’ll also be able to add documents later if you aren’t sure what to upload at this stage).',
          'This step helps TRB team members better understand what type of help you’re looking for and how best to assist you. It also lets the TRB prepare ahead of time so that you get more value from your consult session.'
        ]
      },
      {
        heading: 'Feedback from the initial review',
        text: [
          'The TRB will review your request form and decide if they need additional information from you. If not, they’ll direct you to go through the remaining steps as they schedule a consult session for you and/or your team.'
        ]
      },
      {
        heading: 'Prepare for the TRB consult session',
        text: [
          'Prepare by completing some or all of the following:',
          'Prepare for your TRB consult meeting (opens in new tab)'
        ],
        list: [
          'download the TRB presentation deck template and fill it out for your project',
          'upload any additional documentation that may help the TRB and SMEs better understand what you need help with',
          'confirm the list of attendees (if any) from your project team'
        ]
      },
      {
        heading: 'Attend the TRB consult session',
        text: [
          'A TRB team member will schedule a consult session for your project. Attendees could include:',
          'Consult sessions are usually scheduled as 1-hour sessions on Tuesday or Thursday.'
        ],
        list: [
          'Subject Matter Experts (SMEs) to provide additional advice and insight',
          'any additional project team members you’ve specified',
          '1 or more TRB team members'
        ]
      },
      {
        heading: 'Advice letter and next steps',
        text: [
          'The TRB will work with any SMEs who attended your consult session to compile a letter that documents any advice for your project team as well as any recommended next steps.'
        ]
      }
    ],
    back: 'Back',
    continue: 'Continue'
  },
  taskList: {
    heading: 'Task list',
    additionalHelp: 'Additional Help',
    helpLinksNewTab: 'All help links open in a new tab',
    stepsInvolved:
      'Steps involved in getting technical assistance from the TRB',
    sampleRequest: 'Sample TRB Request',
    viewSubmittedTrbRequest: 'View submitted TRB Request (opens in a new tab)',
    taskList: [
      {
        heading: 'Fill out the initial request form',
        text:
          'Tell the Technical Review Board (TRB) about your question, problem, and/or solution. This helps TRB team members better understand what type of help you’re looking for and how best to assist you. It also lets the TRB prepare ahead of time so that you get more value from your consult session.'
      },
      {
        heading: 'Feedback from initial review',
        text:
          'The TRB will review your Intake Request form and decide if they need additional information from you. If not, they’ll direct you to go through the remaining steps.'
      },
      {
        heading: 'Prepare for the TRB consult session',
        text: 'Prepare by completing some or all of the following:',
        list: [
          'download the TRB presentation deck template and fill it out for your project',
          'upload any additional documentation requested from the TRB',
          'confirm the list of additional attendees (if any) from your project team'
        ]
      },
      {
        heading: 'Attend the TRB consult session',
        text:
          'A TRB team member will schedule a consult session for your project. Attendees could include Subject Matter Experts (SMEs) to provide additional advice and insight, any additional attendees you’ve specified from your team, and 1 or more TRB team members. Consult sessions are usually 1-hour sessions on Tuesday or Thursday.'
      },
      {
        heading: 'Advice letter and next steps',
        text:
          'The TRB will work with any SMEs who attended your consult session to compile a letter that documents any advice for your project team as well as any recommended next steps.'
      }
    ]
  },
  requestForm: {
    heading: 'TRB Request',
    description: [
      'Tell the Technical Review Board (TRB) what type of technical support you need. The information you provide on this form helps the TRB understand context around your request in order to offer more targeted help.',
      'After submitting this form, you will receive an automatic email from the TRB mailbox, and an TRB team member will reach out regarding next steps.'
    ],
    steps: [
      {
        name: 'Basic request details',
        adminDescription:
          'These basic request details were input by the requester to explain this technical assistance request.'
      },
      {
        name: 'Subject areas',
        description:
          'Select any and all subjects or topics that are relevant to your request or that you would like specific help with. This will help the TRB invite any additional subject matter experts (SMEs) who may be able to provide additional assistance.',
        adminDescription:
          'These subject areas were by the requester to be discussed during the consult session.'
      },
      {
        name: 'Attendees',
        description:
          'As the primary requester, please add your CMS component and role on the project. If you wish to, you may also add the names and contact information for any additional individuals who should be present at the TRB consult session. If you’re not sure who should be present, you may add attendees later or share the calendar invite before the meeting.',
        adminDescription:
          'These attendees were added by the requester and should be included as a part of the consult session.'
      },
      {
        name: 'Supporting documents',
        description:
          'Upload any documents relevant to your request. This could include documents such as presentation slide decks, concept papers, architecture diagrams, or other system information documents.',
        adminDescription:
          'These supporting documents were added by the requester and should be reviewed as needed for this request.'
      },
      {
        name: 'Check and submit',
        longName: 'Check your answers and submit your TRB Request'
      }
    ]
  },
  //
  // Form step components
  //
  basic: {
    labels: {
      name: 'Request name',
      component: 'Request component',
      needsAssistanceWith: 'What do you need technical assistance with?',
      hasSolutionInMind: 'Do you have a solution in mind already?',
      proposedSolution: 'Describe your proposed solution.',
      whereInProcess: 'Where are you in your process?',
      hasExpectedStartEndDates:
        'Does your solution have an expected start and/or end date?',
      expectedStartDate: 'Expected start date',
      expectedEndDate: 'Expected end date',
      collabGroups:
        'Select any other OIT groups that you have met with or collaborated with.',
      collabGroupOther: 'Which other group(s)?',
      whenMeet: 'When did you meet with them?'
    },
    hint: {
      component:
        'Let the TRB know which CMS component this request originates from.',
      needsAssistanceWith:
        'Describe the type of help you need from the TRB as well as the project purpose (the “why”) and objectives of your work, if applicable.',
      whereInProcess:
        'This helps the TRB provide the right type of support for your request.',
      whenMeet:
        'Please include specific date(s) if you are able. If not, specifying the month, quarter, or year is acceptable.'
    },
    options: {
      select: 'Select',
      yes: 'Yes',
      no: 'No',
      other: 'Other',
      whereInProcess: {
        iHaveAnIdeaAndWantToBrainstorm: 'I have an idea and want to brainstorm',
        contractingWorkHasStarted:
          'Contracting work has started, but a contractor has not been selected',
        developmentHasRecentlyStarted: 'Development has recently started',
        developmentIsSignificantlyUnderway:
          'Development is significantly underway',
        theSystemIsInOperationAndMaintenance:
          'The system is in Operation and Maintenance',
        other: 'Other'
      },
      collabGroups: {
        security: 'Security',
        enterpriseArchitecture: 'Enterprise Architecture (EA)',
        cloud: 'Cloud',
        privacyAdvisor: 'Privacy',
        governanceReviewBoard:
          'Governance Review Board (GRB) or Governance Review Team (GRT)',
        other: 'Other'
      }
    },
    errors: {
      submit:
        'Your basic request details were not saved. Please try again. If the error persists, please try again at a later date.'
    },
    allFieldsMandatory: 'All fields are mandatory'
  },
  subject: {
    labels: {
      subjectAreaTechnicalReferenceArchitecture:
        'Technical Reference Architecture (TRA)',
      subjectAreaNetworkAndSecurity: 'Network and security',
      subjectAreaCloudAndInfrastructure: 'Cloud and infrastructure',
      subjectAreaApplicationDevelopment: 'Application development',
      subjectAreaDataAndDataManagement: 'Data and data management',
      subjectAreaGovernmentProcessesAndPolicies:
        'CMS Governance processes and policies',
      subjectAreaOtherTechnicalTopics: 'Other technical topics',

      other: 'Please specify',
      selectedTopics: 'Selected topics'
    },
    hint: {
      subjectAreaTechnicalReferenceArchitecture:
        'Select any topics relevant to your request that are related to CMS’s Technical Reference Architecture or its foundational principles.',
      subjectAreaNetworkAndSecurity:
        'Select any network and security topics relevant to your request.',
      subjectAreaCloudAndInfrastructure:
        'Select any cloud and infrastructure topics relevant to your request.',
      subjectAreaApplicationDevelopment:
        'Select application development topics relevant to your request.',
      subjectAreaDataAndDataManagement:
        'Select any specific data topics relevant to your request.',
      subjectAreaGovernmentProcessesAndPolicies:
        'Select any specific CMS processes and policies that you would like to discuss as a part of your request.',
      subjectAreaOtherTechnicalTopics:
        'Select any additional topics related to your request.',

      other: 'Explain which Other topic you would like to discuss with the TRB.'
    },
    options: {
      subjectAreaTechnicalReferenceArchitecture: {
        GENERAL_TRA_INFORMATION: 'General TRA information',
        TRA_GUIDING_PRINCIPLES: 'TRA guiding principles',
        CMS_PROCESSING_ENVIRONMENTS: 'CMS processing environments',
        CMS_TRA_MULTI_ZONE_ARCHITECTURE: 'CMS TRA multi-zone architecture',
        CMS_TRA_BUSINESS_RULES: 'CMS TRA business rules',
        ABOUT_THE_TRB: 'About the TRB',
        ARCHITECTURE_CHANGE_REQUEST_PROCESS_FOR_THE_TRA:
          'Architecture change request process for the TRA',
        OTHER: 'Other'
      },
      subjectAreaNetworkAndSecurity: {
        GENERAL_NETWORK_AND_SECURITY_SERVICES_INFORMATION:
          'General network and security services information',
        SECURITY_SERVICES: 'Security services',
        CMS_CYBERSECURITY_INTEGRATION_CENTER_INTEGRATION:
          'CMS Cybersecurity Integration Center (CCIC) integration',
        WIDE_AREA_NETWORK_SERVICES: 'Wide area network services',
        ACCESS_CONTROL_AND_IDENTITY_MANAGEMENT:
          'Access control and identity management',
        DOMAIN_NAME_SYSTEM_SERVICES: 'Domain name system services',
        OTHER: 'Other'
      },
      subjectAreaCloudAndInfrastructure: {
        GENERAL_CLOUD_AND_INFRASTRUCTURE_SERVICES_INFORMATION:
          'General cloud and infrastructure services information',
        VIRTUALIZATION: 'Virtualization',
        CLOUD_IAAS_AND_PAAS_INFRASTRUCTURE:
          'Cloud IaaS and PaaS infrastructure',
        IT_PERFORMANCE_MANAGEMENT: 'IT performance management',
        FILE_TRANSFER: 'File transfer',
        DATA_STORAGE_SERVICES: 'Data storage services',
        SOFTWARE_AS_A_SERVICE: 'Software as a Service',
        KEYS_AND_SECRETS_MANAGEMENT: 'Keys and secrets management',
        MOBILE_DEVICES_AND_APPLICATIONS: 'Mobile devices and applications',
        CLOUD_MIGRATION: 'Cloud migration',
        DISASTER_RECOVERY: 'Disaster recovery',
        OTHER: 'Other'
      },
      subjectAreaApplicationDevelopment: {
        GENERAL_APPLICATION_DEVELOPMENT_SERVICES_INFORMATION:
          'General application development services information',
        APPLICATION_DEVELOPMENT: 'Application development',
        WEB_SERVICES_AND_WEB_APIS: 'Web services and web APIs',
        WEB_BASED_UI_SERVICES: 'Web-based UI services',
        OPEN_SOURCE_SOFTWARE: 'Open source software',
        PORTAL_INTEGRATION: 'Portal integration',
        ACCESSIBILITY_COMPLIANCE: 'Accessibility and 508',
        BUSINESS_INTELLIGENCE: 'Business intelligence',
        CONTAINERS_AND_MICROSERVICES: 'Containers and microservices',
        ROBOTIC_PROCESS_AUTOMATION: 'Robotic Process Automation (RPA)',
        SYSTEM_ARCHITECTURE_REVIEW: 'System architecture review',
        EMAIL_INTEGRATION: 'Email integration',
        CONFIGURATION_MANAGEMENT: 'Configuration management',
        OTHER: 'Other'
      },
      subjectAreaDataAndDataManagement: {
        GENERAL_DATA_AND_DATA_MANAGEMENT_INFORMATION:
          'General data and data management information',
        ENTERPRISE_DATA_ENVIRONMENT_REVIEW:
          'Enterprise data environment review',
        DATA_MART: 'Data mart',
        DATA_WAREHOUSING: 'Data warehousing',
        ANALYTIC_SANDBOXES: 'Analytic sandboxes',
        APIS_AND_DATA_EXCHANGES: 'APIs and data exchanges',
        FHIR: 'FHIR',
        OTHER: 'Other'
      },
      subjectAreaGovernmentProcessesAndPolicies: {
        GENERAL_INFORMATION_ABOUT_CMS_PROCESSES_AND_POLICIES:
          'General information about CMS processes and policies',
        OTHER_AVAILABLE_TRB_SERVICES: 'Other available TRB services',
        SECTION_508_AND_ACCESSIBILITY_TESTING:
          'Section 508 and accessibility testing',
        TARGET_LIFE_CYCLE: 'Target Life Cycle (TLC)',
        SYSTEM_DISPOSITION_PLANNING: 'System disposition planning',
        INVESTMENT_AND_BUDGET_PLANNING: 'Investment and budget planning',
        LIFECYCLE_IDS: 'Lifecycle IDs',
        CONTRACTING_AND_PROCUREMENT: 'Contracting and procurement',
        SECURITY_ASSESSMENTS: 'Security assessments (ATO, ACT, SIA, etc.)',
        INFRASTRUCTURE_AS_A_SERVICE: 'Infrastructure as a service (BatCave)',
        OTHER: 'Other'
      },
      subjectAreaOtherTechnicalTopics: {
        ARTIFICIAL_INTELLIGENCE: 'Artificial Intelligence (AI)',
        MACHINE_LEARNING: 'Machine Learning (ML)',
        ASSISTANCE_WITH_SYSTEM_CONCEPT_DEVELOPMENT:
          'Assistance with system concept development',
        OTHER: 'Other'
      }
    },
    errors: {
      submit:
        'Your subject areas were not saved. Please try again. If the error persists, please try again at a later date.'
    },
    continueWithoutAdding: 'Continue without selecting subject areas'
  },
  attendees: {
    additionalAttendees: 'Additional attendees',
    addAnAttendee: 'Add an attendee',
    editAttendee: 'Edit attendee',
    addAnotherAttendee: 'Add another attendee',
    remove: 'Remove',
    cancel: 'Cancel',
    continueWithoutAdding: 'Continue without adding attendees',
    dontAddAndReturn: "Don't add and return to previous page",
    dontEditAndReturn: "Don't edit and return to previous page",
    attendeeHelpText:
      'Please provide the name, CMS component, and role for this attendee.',
    attendeeNameHelpText:
      'This field searches the EUA system. If you wish to invite a team member without an EUA ID, please contact the TRB at <1>cms-rb@cms.hhs.gov</1>.',
    alerts: {
      success: 'Your attendee has been added',
      successEdit: 'Your attendee has been edited',
      error:
        'There was an issue adding your attendee. Please try again, and if the problem persists, try again later.',
      invalidForm: 'Invalid attendees form'
    },
    fieldLabels: {
      requester: {
        euaUserId: 'Requester',
        component: 'Requester component',
        role: 'Requester role'
      },
      attendee: {
        create: {
          euaUserId: 'New attendee name',
          component: 'New attendee component',
          role: 'New attendee role',
          submit: 'Add attendee'
        },
        edit: {
          euaUserId: 'Attendee name',
          component: 'Attendee component',
          role: 'Attendee role',
          submit: 'Save'
        }
      }
    },
    contactRoles: {
      productOwner: 'Product Owner',
      systemOwner: 'System Owner',
      systemMaintainer: 'System Maintainer',
      contractRep: 'Contracting Officer’s Representative (COR)',
      cloudNavigator: 'Cloud Navigator',
      privacyAdvisor: 'Privacy Advisor',
      cra: 'CRA',
      other: 'Other',
      unknown: 'Unknown'
    }
  },
  documents: {
    addDocument: 'Add a document',
    table: {
      header: {
        fileName: 'File name',
        documentType: 'Document type',
        uploadDate: 'Upload date',
        actions: 'Actions'
      },
      noDocument: 'No documents uploaded',
      view: 'View',
      remove: 'Remove',
      unavailable: 'Unavailable',
      virusScan: 'Virus scan in progress...'
    },
    upload: {
      title: 'Upload a document',
      subtitle:
        'Choose a document to upload, such as a presentation slide deck, concept paper, or other system information document.',
      documentUpload: 'Document upload',
      dragFile: 'Drag file here or choose from folder',
      selectedFile: 'Selected file',
      changeFile: 'Change file',
      whatType: 'What type of document are you uploading?',
      type: {
        ARCHITECTURE_DIAGRAM: 'Architecture diagram',
        PRESENTATION_SLIDE_DECK: 'Presentation slide deck',
        BUSINESS_CASE: 'Business Case',
        OTHER: 'Other'
      },
      whatKind: 'What kind of document is this?',
      toKeepCmsSafe:
        "To keep CMS safe, documents are scanned for viruses after uploading. If something goes wrong, we'll let you know.",
      uploadDocument: 'Upload document',
      dontUploadAndReturn: 'Don’t upload and return to previous page',
      error:
        'There was an issue uploading your document. Please try again, and if the problem persists, try again later.',
      success: 'Your document has been uploaded and is being scanned.'
    },
    continueWithoutAdding: 'Continue without adding documents'
  },
  check: {
    submit: 'Submit request',
    edit: 'Edit this section',
    notYetSubmitted: 'Not yet submitted',
    requestType: 'Request type',
    noTopicsSelected: 'No topics selected',
    expectedStart: 'expected start',
    expectedGoLive: 'expected go live',
    and: 'and',
    noAttendees: 'There are no attendees',
    whatNext: {
      title: 'What happens next?',
      text: [
        'The TRB will review and get back to you with one of these outcomes:',
        'A TRB team member will get back to you within two business days.'
      ],
      list: [
        'schedule a consult session',
        'direct you to another governance process or team',
        'request additional information'
      ]
    }
  },
  done: {
    success: {
      heading: 'Success!',
      info:
        'Your TRB Request has been submitted. You will receive an automatic email, and a TRB team member will reach out shortly after regarding next steps.'
    },
    error: {
      heading: 'Something went wrong.',
      info:
        'Your TRB Request was not submitted. Please either return to the previous page and try again or try again at a later date.'
    },
    referenceNumber: 'Reference number',
    returnToTaskList: 'Return to task list',
    backToTrbRequest: 'Back to TRB Request'
  },
  viewSubmitted: {
    heading: 'View submitted Technical Assistance Request'
  },
  requestFeedback: {
    heading: 'Feedback about your request',
    viewFeedback: 'View feedback',
    date: 'Date',
    from: 'Feedback from',
    returnToForm: 'Return to request form'
  },
  adminHome: {
    breadcrumb: 'Request {{trbRequestId}}',
    requestType: 'Request type',
    requester: 'Requester',
    submissionDate: 'Submission Date',
    status: 'Status',
    taskStatuses: {
      formStatus: {
        READY_TO_START: 'Ready to start request form',
        IN_PROGRESS: 'Draft request form',
        COMPLETED: 'Request form completed'
      },
      feedbackStatus: {
        CANNOT_START_YET: 'Request form completed',
        READY_TO_START: 'Ready to start feedback',
        EDITS_REQUESTED: 'Feedback edits requested',
        IN_REVIEW: 'Feedback in review',
        COMPLETED: 'Feedback completed'
      },
      consultPrepStatus: {
        CANNOT_START_YET: 'Feedback completed',
        READY_TO_START: 'Ready to start consult prep',
        COMPLETED: 'Consult prep completed'
      },
      attendConsultStatus: {
        CANNOT_START_YET: 'Consult prep completed',
        READY_TO_SCHEDULE: 'Ready for consult',
        SCHEDULED: 'Consult scheduled',
        COMPLETED: 'Consult completed'
      }
    },
    open: 'Open',
    closed: 'Closed',
    trbLead: 'TRB Lead',
    notAssigned: 'Not assigned',
    assign: 'Assign',
    change: 'Change',
    subnav: {
      back: 'Back to All Requests',
      requestHome: 'Request home',
      initialRequestForm: 'Initial request form',
      supportingDocuments: 'Supporting documents',
      feedback: 'Feedback',
      adviceLetter: 'Advice letter',
      notes: 'Notes'
    }
  }
};

export default technicalAssistance;
