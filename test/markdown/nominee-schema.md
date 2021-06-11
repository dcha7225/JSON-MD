# Digital Public Good

The schema defines the following properties:

## `name` (string, required)

The name of the Digital Public Good. Full name, no initialisms, no acronyms.

## `aliases` (array)

Abbreviations, initialisms, or alternate names for Digital Public Good, where relevant.

The object is an array with all elements of the type `string`.

Additional restrictions:

* Unique items: `true`

## `description` (string, required)

Concise 1-line description of Digital Public Good.

## `website` (string)

Public website for the Digital Public Good.

## `license` (array, required)

Digital Public Goodss must use an open license. Please identify which of these approved open licenses this project uses:

The object is an array with all elements of the type `object`.

The array object has the following properties:

### `spdx` (string, enum, required)

SDPX identifier for this license

This element must be one of the following enum values:

* `0BSD`
* `AAL`
* `AFL-3.0`
* `AGPL-3.0`
* `Apache-1.1`
* `Apache-2.0`
* `APL-1.0`
* `APSL-2.0`
* `Artistic-1.0`
* `Artistic-2.0`
* `BSD-1-Clause`
* `BSD-2-Clause`
* `BSD-2-Clause-Patent`
* `BSD-3-Clause`
* `BSD-3-Clause-LBNL`
* `BSL-1.0`
* `CAL-1.0`
* `CAL-1.0-Combined-Work-Exception`
* `CATOSL-1.1`
* `CC-BY-1.0`
* `CC-BY-2.0`
* `CC-BY-2.5`
* `CC-BY-3.0`
* `CC-BY-3.0-AT`
* `CC-BY-3.0-US`
* `CC-BY-4.0`
* `CC-BY-NC-1.0`
* `CC-BY-NC-2.0`
* `CC-BY-NC-2.5`
* `CC-BY-NC-3.0`
* `CC-BY-NC-3.0-US`
* `CC-BY-NC-4.0`
* `CC-BY-NC-SA-1.0`
* `CC-BY-NC-SA-2.0`
* `CC-BY-NC-SA-2.5`
* `CC-BY-NC-SA-3.0`
* `CC-BY-NC-SA-3.0-US`
* `CC-BY-NC-SA-4.0`
* `CC-BY-SA-1.0`
* `CC-BY-SA-2.0`
* `CC-BY-SA-2.5`
* `CC-BY-SA-3.0`
* `CC-BY-SA-3.0-AT`
* `CC-BY-SA-3.0-US`
* `CC-BY-SA-4.0`
* `CC0-1.0`
* `CDDL-1.0`
* `CECILL-2.1`
* `CNRI-Python`
* `CPAL-1.0`
* `CPL-1.0`
* `ECL-1.0`
* `ECL-2.0`
* `EFL-1.0`
* `EFL-2.0`
* `Entessa`
* `EPL-1.0`
* `EPL-2.0`
* `EUDatagrid`
* `EUPL-1.2`
* `Fair`
* `Frameworx-1.0`
* `GPL-2.0`
* `GPL-3.0`
* `HPND`
* `IPA`
* `IPL-1.0`
* `ISC`
* `LGPL-2.1`
* `LGPL-3.0`
* `LiLiQ-P-1.1`
* `LiLiQ-R-1.1`
* `LiLiQ-Rplus-1.1`
* `LPL-1.0`
* `LPL-1.02`
* `LPPL-1.3c`
* `MirOS`
* `MIT`
* `MIT-0`
* `Motosoto`
* `MPL-1.0`
* `MPL-1.1`
* `MPL-2.0`
* `MPL-2.0-no-copyleft-exception`
* `MS-PL`
* `MS-RL`
* `MulanPSL-2.0`
* `Multics`
* `NASA-1.3`
* `Naumen`
* `NCSA`
* `NGPL`
* `Nokia`
* `NPOSL-3.0`
* `NTP`
* `OCLC-2.0`
* `ODbL-1.0`
* `ODC-By-1.0 `
* `OFL-1.1`
* `OFL-1.1-no-RFN`
* `OFL-1.1-RFN`
* `OGTSL`
* `OLDAP-2.8`
* `OSET-PL-2.1`
* `OSL-1.0`
* `OSL-2.1`
* `OSL-3.0`
* `PDDL-1.0`
* `PHP-3.0`
* `PHP-3.01`
* `PostgreSQL`
* `Python-2.0`
* `QPL-1.0`
* `RPL-1.1`
* `RPL-1.5`
* `RPSL-1.0`
* `RSCPL`
* `SimPL-2.0`
* `Sleepycat`
* `SPL-1.0`
* `UCL-1.0`
* `Unicode-DFS-2015`
* `Unicode-DFS-2016`
* `Unlicense`
* `UPL-1.0`
* `VSL-1.0`
* `W3C`
* `Watcom-1.0`
* `Xnet`
* `wxWindows`
* `Zlib`
* `ZPL-2.0`

### `licenseURL` (string, required)

Please link to where the license is indicated for this project:

Additional restrictions:

* Minimum items: `1`
* Unique items: `true`

## `SDGs` (array, required)

Please identify which of the Sustainable Development Goals this project is relevant to:

The object is an array with all elements of the type `object`.

The array object has the following properties:

### `SDGNumber` (number, enum, required)

Number of the Sustainable Development Goal

This element must be one of the following enum values:

* `1`
* `2`
* `3`
* `4`
* `5`
* `6`
* `7`
* `8`
* `9`
* `10`
* `11`
* `12`
* `13`
* `14`
* `15`
* `16`
* `17`

### `evidenceText` (string)

Please supply information to support this relevance.

### `evidenceURL` (string)

Please supply links to support this relevance.

Additional restrictions:

* Minimum items: `1`
* Unique items: `true`

## `sectors` (array)

List of sectors that this Global Digital Public Good addresses.

The object is an array with all elements of the type `string`.

Additional restrictions:

* Unique items: `true`

## `type` (array, required)

What category best describes this project?

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `1`
* Unique items: `true`

## `repositoryURL` (string)

Link to Github (or other) repository.

## `organizations` (array, required)

The object is an array with all elements of the type `object`.

The array object has the following properties:

### `name` (string)

Name of the organization

### `website` (string)

Website of the organization

### `org_type` (string, enum)

Type of organization

This element must be one of the following enum values:

* `owner`
* `maintainer`
* `funder`
* `implementer`

### `contact_name` (string)

Name of contact individual in the organization

### `contact_email` (string)

Email for contact individual in the organization

## `stage` (string, enum, required)

Screening stage of Digital Public Good

This element must be one of the following enum values:

* `nominee`
* `candidate`
* `DPG`