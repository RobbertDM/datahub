(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5351],{4137:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5858:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),o=["components"],l={title:"Azure",sidebar_label:"Azure",slug:"/metadata-ingestion/source_docs/azure",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/azure.md"},u="Azure",s={unversionedId:"metadata-ingestion/source_docs/azure",id:"metadata-ingestion/source_docs/azure",isDocsHomePage:!1,title:"Azure",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/azure.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/azure",permalink:"/docs/metadata-ingestion/source_docs/azure",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/azure.md",version:"current",frontMatter:{title:"Azure",sidebar_label:"Azure",slug:"/metadata-ingestion/source_docs/azure",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/azure.md"},sidebar:"overviewSidebar",previous:{title:"Athena",permalink:"/docs/metadata-ingestion/source_docs/athena"},next:{title:"BigQuery",permalink:"/docs/metadata-ingestion/source_docs/bigquery"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Capabilities",id:"capabilities",children:[{value:"Extracting DataHub Users",id:"extracting-datahub-users",children:[]},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups",children:[]},{value:"Extracting Group Membership",id:"extracting-group-membership",children:[]}]},{value:"Quickstart recipe",id:"quickstart-recipe",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Questions",id:"questions",children:[]}],d={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure"},"Azure"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[azure]'"),"."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users"),(0,i.kt)("li",{parentName:"ul"},"Groups"),(0,i.kt)("li",{parentName:"ul"},"Group Membership")),(0,i.kt)("p",null,"from your Azure instance. "),(0,i.kt)("h3",{id:"extracting-datahub-users"},"Extracting DataHub Users"),(0,i.kt)("h4",{id:"usernames"},"Usernames"),(0,i.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"mail" field of an ',(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/user-list?view=graph-rest-1.0&tabs=http#response-1"},"Azure User Response"),".\nBy default, the 'mail' attribute, which contains an email, is parsed to extract the text before the \"@\" and map that to the DataHub username."),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"azure_response_to_username_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"azure_response_to_username_regex"),". "),(0,i.kt)("h4",{id:"responses"},"Responses"),(0,i.kt)("p",null,"This connector also extracts basic user response information from Azure. The following fields of the Azure User Response are extracted\nand mapped to the DataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display name "),(0,i.kt)("li",{parentName:"ul"},"first name"),(0,i.kt)("li",{parentName:"ul"},"last name"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"title"),(0,i.kt)("li",{parentName:"ul"},"country")),(0,i.kt)("h3",{id:"extracting-datahub-groups"},"Extracting DataHub Groups"),(0,i.kt)("h4",{id:"group-names"},"Group Names"),(0,i.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Azure Group Response.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI. '),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"azure_response_to_groupname_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"azure_response_to_groupname_regex"),"."),(0,i.kt)("h4",{id:"responses-1"},"Responses"),(0,i.kt)("p",null,"This connector also extracts basic group information from Azure. The following fields of the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/group-list?view=graph-rest-1.0&tabs=http#response-1"},"Azure Group Response")," are extracted and mapped to the\nDataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"description")),(0,i.kt)("h3",{id:"extracting-group-membership"},"Extracting Group Membership"),(0,i.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0&tabs=http#response-1"},"Azure"),". It maps them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers). Today this has the unfortunate side effect of ",(0,i.kt)("strong",{parentName:"p"},"overwriting")," any Group Membership information that\nwas created outside of the connector. That means if you've used the DataHub REST API to assign users to groups, this information will be overridden\nwhen the Azure source is executed. If you intend to ",(0,i.kt)("em",{parentName:"p"},"always")," pull users, groups, and their relationships from your Identity Provider, then\nthis should not matter. "),(0,i.kt)("p",null,"This is a known limitation in our data model that is being tracked by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/3065"},"this ticket"),"."),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"As a prerequisite, you should ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/toolkit/get-started/add-aad-app-registration"},"create a DataHub Application")," within the Azure AD Portal with full permissions\nto read your organization's Users and Groups. "),(0,i.kt)("p",null,"You can use the following recipe to get started with Azure ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'---\nsource:\n  type: "azure"\n  config:\n    client_id: "00000000-0000-0000-0000-000000000000"\n    tenant_id: "00000000-0000-0000-0000-000000000000"\n    client_secret: "xxxxx"\n    redirect: "https://login.microsoftonline.com/common/oauth2/nativeclient"\n    authority: "https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000"\n    token_url: "https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/oauth2/token"\n    graph_url: "https://graph.microsoft.com/v1.0"\n    ingest_users: True\n    ingest_groups: True\n    ingest_group_membership: True\n\nsink:\n  # sink configs\n')),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML configuration block."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Application ID. Found in your app registration on Azure AD Portal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tenant_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Directory ID. Found in your app registration on Azure AD Portal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_secret")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Client secret. Found in your app registration on Azure AD Portal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redirect")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Redirect URI.  Found in your app registration on Azure AD Portal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authority")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-client-application-configuration"},"authority")," is a URL that indicates a directory that MSAL can request tokens from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"token_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The token URL that acquires a token from Azure AD for authorizing requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"graph_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API endpoint"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingest_users")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether users should be ingested into DataHub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingest_groups")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether groups should be ingested into DataHub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingest_group_membership")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"azure_response_to_username_attr")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"login"')),(0,i.kt)("td",{parentName:"tr",align:null},"Which Azure User Response attribute to use as input to DataHub username mapping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"azure_response_to_username_regex")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"([^@]+)"')),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub username from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"azure_response_to_username_attr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"azure_response_to_groupname_attr")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"name"')),(0,i.kt)("td",{parentName:"tr",align:null},"Which Azure Group Response attribute to use as input to DataHub group name mapping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"azure_response_to_groupname_regex")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"(.*)"')),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub group name from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"azure_response_to_groupname_attr"),".")))),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null," Validated against load:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User Count: ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")),(0,i.kt)("li",{parentName:"ul"},"Group Count: ",(0,i.kt)("inlineCode",{parentName:"li"},"100")),(0,i.kt)("li",{parentName:"ul"},"Group Membership Edges: ",(0,i.kt)("inlineCode",{parentName:"li"},"1000")," (1 per User)")),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);