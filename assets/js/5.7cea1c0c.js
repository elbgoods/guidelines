(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{356:function(e,t,r){e.exports=r.p+"assets/img/git-flow.4b2e5166.svg"},365:function(e,t,r){"use strict";r.r(t);var a=r(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[e._v("#")]),e._v(" Git")]),e._v(" "),a("p",[e._v("We use most parts of "),a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git flow"),a("OutboundLink")],1),e._v(".\nBelow you will find the crucial parts that we use.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(356),alt:"Git flow branch structure"}})]),e._v(" "),a("ul",[a("li",[e._v("Every project "),a("strong",[e._v("MUST")]),e._v(" have a "),a("code",[e._v("master")]),e._v(" and "),a("code",[e._v("dev")]),e._v(" branch and use git tags for production releases.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("release")]),e._v(" branch is omitted - instead we use the "),a("code",[e._v("master")]),e._v(" branch.")])]),e._v(" "),a("h2",{attrs:{id:"releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#releases"}},[e._v("#")]),e._v(" Releases")]),e._v(" "),a("ul",[a("li",[e._v("Every production deployment "),a("strong",[e._v("MUST")]),e._v(" be based on a git tag and not any branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be named by the following pattern: "),a("code",[e._v("{year}-{month}-{day}[-hf.{number}]")])]),e._v(" "),a("li",[e._v("There "),a("strong",[e._v("SHOULD")]),e._v(" be only a single release/deployment per day - except hotfix releases.")])]),e._v(" "),a("h2",{attrs:{id:"branches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branches"}},[e._v("#")]),e._v(" Branches")]),e._v(" "),a("ul",[a("li",[e._v("All branches "),a("strong",[e._v("MUST")]),e._v(" be named in "),a("code",[e._v("lower-kebab-case")]),e._v(" and are allowed to contain a single slash "),a("code",[e._v("/")]),e._v(" to divide the branch type.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("SHOULD")]),e._v(" be named by the following pattern: "),a("code",[e._v("{type}/[{issue-number}-]{short-description}")])])]),e._v(" "),a("h2",{attrs:{id:"master-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-branch"}},[e._v("#")]),e._v(" master Branch")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("master")]),e._v(" branch "),a("strong",[e._v("MUST NOT")]),e._v(" be deployed directly and is therefor not connected to any server instance.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("master")]),e._v(" branch "),a("strong",[e._v("MUST")]),e._v(" be tagged before any production deployment.")])]),e._v(" "),a("h3",{attrs:{id:"hotfixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotfixes"}},[e._v("#")]),e._v(" Hotfixes")]),e._v(" "),a("ul",[a("li",[e._v("Hotfixes are fixes for bugs which can't wait for the next regular release and have to be fixed immediately.")]),e._v(" "),a("li",[e._v("Hotfixes "),a("strong",[e._v("MUST")]),e._v(" relate to any existing issue that only contains the task to fix this bug on production.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be named by the following pattern: "),a("code",[e._v("hotfix/{issue-number}-{short-description}")])]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be based on the "),a("code",[e._v("master")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be merged into the "),a("code",[e._v("master")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be released as a Hotfix release of the last regular release as soon as they are merged.")])]),e._v(" "),a("h2",{attrs:{id:"dev-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev-branch"}},[e._v("#")]),e._v(" dev Branch")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("dev")]),e._v(" branch "),a("strong",[e._v("SHOULD")]),e._v(" be related to the dev/staging server instance and "),a("strong",[e._v("SHOULD")]),e._v(" be continuously deployed.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("dev")]),e._v(" branch is the base branch for all features and bugfixes.")])]),e._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Features are implementations of user-stories that introduce new or enhance existing functionalities.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be named by the following pattern: "),a("code",[e._v("feature/[{issue-number}-]{short-description}")])]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be based on the "),a("code",[e._v("dev")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be merged into the "),a("code",[e._v("dev")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be released during the regular release cycle.")])]),e._v(" "),a("h3",{attrs:{id:"bugfixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bugfixes"}},[e._v("#")]),e._v(" Bugfixes")]),e._v(" "),a("ul",[a("li",[e._v("Bugfixes are fixes for bugs that do not prevent the current production system from working and can be fixed/released during the regular release cycle.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be named by the following pattern: "),a("code",[e._v("bugfix/[{issue-number}-]{short-description}")])]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be based on the "),a("code",[e._v("dev")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be merged into the "),a("code",[e._v("dev")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("They "),a("strong",[e._v("MUST")]),e._v(" be released during the regular release cycle.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);