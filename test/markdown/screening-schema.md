# Digital Public Good

The schema defines the following properties:

## `name` (string, required)

The name of the Digital Public Good.

## `clearOwnership` (object, required)

3. Is ownership clearly defined?

Properties of the `clearOwnership` object:

### `isOwnershipExplicit` (string, enum, required)

Is the ownership of the project and everything that the project produces clearly defined and documented?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

### `copyrightURL` (string)

If yes - please link to the relevant copyright, trademarks, or ownership documentation for the project.

## `platformIndependence` (object, required)

4. Does the license of libraries/dependencies undermine the openess of the project?

Properties of the `platformIndependence` object:

### `mandatoryDepsCreateMoreRestrictions` (string, enum, required)

Does this open project have mandatory dependencies (i.e. libraries, hardware) that create more restrictions than the original license?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

### `isSoftwarePltIndependent` (string, enum)

If yes - are the open source components able to demonstrate independence from the closed component(s) and/or are there functional, open alternatives?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`
* ``

Additional restrictions:

* Unique items: `true`

### `pltIndependenceDesc` (string)

If yes - please describe how the open source components are independent and/or list the open alternatives for the closed component:

## `documentation` (object, required)

5. Is there documentation?

Properties of the `documentation` object:

### `isDocumentationAvailable` (string, enum, required)

Does some documentation exist of the source code, use cases, and/or functional requirements.
 For software projects, this should be present as technical documentation that would allow a technical person unfamiliar with the project to launch and run the software. For data projects, this should be present as documentation that describes all the fields in the set, and provides context on how the data was collected and how it should be interpreted. For content, this should indicate any relevant compatible apps, software, hardware required to access the content and any instructions about how to use it.

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

### `documentationURL` (array)

If yes - please link to the relevant documentation:

The elements of the array must match *at least one* of the following properties:

### (string)

## `NonPII` (object, required)

6. Is non PII data accessible?

Properties of the `NonPII` object:

### `collectsNonPII` (string, enum, required)

Does this project collect or use non-personally identifiable information (non-PII) data?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

### `checkNonPIIAccessMechanism` (string, enum)

If yes - is there a mechanism for extracting or importing non-personally identifiable information (non-PII) from the system in a non-proprietary format?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`
* ``

Additional restrictions:

* Unique items: `true`

### `nonPIIAccessMechanism` (string)

If yes - describe the mechanism for extracting or importing non-personally identifiable information from the system in a non-proprietary format:

## `privacy` (object, required)

7. Does the project adhere to privacy and other applicable international and domestic laws?

Properties of the `privacy` object:

### `isPrivacyCompliant` (string, enum, required)

Has this project taken steps to ensure adherence with relevant privacy, domestic, and international laws? For example, the General Data Protection Regulation (GDPR) in the European Union or the Supplementary Act A/SA.1/01/10 on Personal Data Protection for the Economic Community of West African States (ECOWAS) (yes/no)

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

### `privacyComplianceList` (array)

If yes, please list some of relevant laws that the project complies with:

The elements of the array must match *at least one* of the following properties:

### (string)

### `adherenceSteps` (array)

If yes, please describe the steps this project has taken to ensure adherence (include links to terms of service, privacy policy, or other relevant documentation):

The elements of the array must match *at least one* of the following properties:

### (string)

## `standards` (object, required)

8. Does the project adhere to standards and best practices?

Properties of the `standards` object:

### `supportStandards` (string, enum, required)

Does this project support standards? (i.e. Web Content Accessibility Guidelines (WCAG) 2.1 or other standards such as those listed on W3C)

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

### `standardsList` (array)

Which standards does this project support (please list)

The elements of the array must match *at least one* of the following properties:

### (string)

### `evidenceStandardSupport` (array)

Can you point to evidence of your support? (i.e. please link to your validator, open test suite, etc.)

The elements of the array must match *at least one* of the following properties:

### (string)

### `implementBestPractices` (string, required)

Was this project built and developed according to or in adherence with any design, technical and/or sector best practices or principles? i.e. the Principles for Digital Development?

### `bestPracticesList` (array)

Which principles and best practices does this project support (please list)

The elements of the array must match *at least one* of the following properties:

### (string)

## `doNoHarm` (object, required)

9. Does the project do no harm?

Properties of the `doNoHarm` object:

### `preventHarm` (object, required)

Has this project taken steps to anticipate, prevent and do no harm?

Properties of the `preventHarm` object:

#### `stepsToPreventHarm` (string, enum, required)

On the whole, does this project take steps to ensure that it anticipates, prevents and does no harm?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

#### `additionalInfoMechanismProcessesPolicies` (string)

Is there any additional information you would like to share about the mechanisms, processes or policies that this project uses to avoid doing harm?

### `dataPrivacySecurity` (object, required)

9.a. Data Privacy & Security

Properties of the `dataPrivacySecurity` object:

#### `collectsPII` (string, enum, required)

Does this project collect or store personally identifiable information (PII) data?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

#### `typesOfDataCollected` (array)

If yes - please list the types of data collected and/or stored by the project:

The elements of the array must match *at least one* of the following properties:

#### (string)

#### `thirdPartyDataSharing` (string, enum)

If yes - does this project share this data with third parties?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

#### `dataSharingCircumstances` (array)

Please describe the circumstances with which this project shares data with third parties. Please add links as relevant.

The elements of the array must match *at least one* of the following properties:

#### (string)

#### `ensurePrivacySecurity` (string, enum)

If yes - does the project ensure the privacy and security of this data and has it taken steps to prevent adverse impacts resulting from its collection, storage and distribution.

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

#### `privacySecurityDescription` (string)

If yes - please describe the steps, and include a link to the privacy policy and/or terms of service:

### `inappropriateIllegalContent` (object, required)

9.b. Inappropriate & Illegal Content

Properties of the `inappropriateIllegalContent` object:

#### `collectStoreDistribute` (string, enum, required)

Does this project collect, store or distribute content?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

#### `type`

If yes - what kinds of content does this project, collect, store or distribute? (i.e. childrens books)

#### `contentFilter` (string, enum)

If yes - does this project have policies that describe what is considered innappropriate content? (i.e. child sexual abuse materials)

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`
* ``

Additional restrictions:

* Unique items: `true`

#### `policyGuidelinesDocumentationLink` (string)

If yes - please link to the relevant policy/guidelines/documentation.

#### `illegalContentDetection` (string, enum)

If yes - does this project have mechanisms for detecting and moderating innappropriate/illegal content?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`
* ``

Additional restrictions:

* Unique items: `true`

#### `illegalContentDetectionMechanism` (string)

If yes - please describe the mechanism for detecting, reporting and removing innapropriate/illegal content (Please include the average response time for assessment and/or action. Link to any policies or descriptions of how inappropriate content is handled):

### `protectionFromHarassment` (object, required)

9.c. Protection from harassment

Properties of the `protectionFromHarassment` object:

#### `userInteraction` (string, enum, required)

Does this project facilitate interactions with or between users or contributors?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`

Additional restrictions:

* Unique items: `true`

#### `addressSafetySecurityUnderageUsers` (string, enum)

If yes - does the project take steps to address the safety and security of underage users?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`
* ``

Additional restrictions:

* Unique items: `true`

#### `stepsAddressRiskPreventSafetyUnderageUsers` (array)

If yes - please describe the steps this project takes to address risk or prevent access by underage users:

The elements of the array must match *at least one* of the following properties:

#### (string)

#### `griefAbuseHarassmentProtection` (string, enum)

If yes - does the project help users and contributors protect themselves against grief, abuse, and harassment?

This element must be one of the following enum values:

* `Yes`
* `No`
* `Unknown`
* ``

Additional restrictions:

* Unique items: `true`

#### `harassmentProtectionSteps` (array)

If yes - please describe the steps taken to help users protect themselves.

The elements of the array must match *at least one* of the following properties:

#### (string)

## `locations` (object, required)

Development & deployment countries

Properties of the `locations` object:

### `developmentCountries` (array, required)

List of countries this project was developed in.

The elements of the array must match *at least one* of the following properties:

### (string)

### `deploymentCountries` (array, required)

List of countries this project is actively deployed in.

The elements of the array must match *at least one* of the following properties:

### (string)