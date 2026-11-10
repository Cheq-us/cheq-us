const companies = [
  {id:"lu",name:"LU Company",industry:"Retail & General Work",location:"Johannesburg, Gauteng",owner:"Lungile Dube (Owner)",founded:"2016",size:"12 staff",description:"A fictional clothing and general store used to demonstrate Cheq-Us.",jobs:["cleaner","shop-assistant"]},
  {id:"shoprite",name:"Shoprite",industry:"Supermarket chain",location:"Cape Town, Western Cape · stores across Southern Africa",owner:"Pieter Engelbrecht (CEO)",founded:"1979",size:"174,000+ employees, 3,700+ stores",description:"Africa's largest supermarket retailer. Its brands include Shoprite, Checkers and Usave.",real:true,site:"https://www.shopriteholdings.co.za",verified:"October 2026",jobs:["sr-cashier","sr-packer","sr-butchery"]},
  {id:"pnp",name:"Pick n Pay",industry:"Supermarket chain",location:"Cape Town, Western Cape · stores nationwide",owner:"Sean Summers (CEO)",founded:"1967",size:"Franchise and company-owned stores",description:"One of South Africa's biggest supermarket groups. Spencer Sonn is due to join as CEO-designate in February 2027 and take over from Sean Summers in May 2028.",real:true,site:"https://www.pnp.co.za",verified:"October 2026",jobs:["pnp-cashier","pnp-packer","pnp-bakery"]},
  {id:"spar",name:"SPAR",industry:"Supermarket chain",location:"Pinetown, KwaZulu-Natal · stores nationwide",owner:"Reeza Isaacs (CEO)",founded:"1963 (in South Africa)",size:"Independent, retailer-owned stores",description:"A retailer-owned group. Each SPAR store is run by an independent owner and supplied through the SPAR Group.",real:true,site:"https://www.spar.co.za",verified:"October 2026",jobs:["spar-cashier","spar-packer","spar-deli"]},
  {id:"mamazee",name:"Mama Zee Spaza Shop",industry:"Spaza shop",location:"Tembisa, Gauteng",owner:"Zanele Khumalo (Owner)",founded:"2014",size:"4 staff",description:"A fictional neighbourhood spaza shop selling everyday groceries.",jobs:["counter-assistant"]},
  {id:"brightclean",name:"Bright Clean Services",industry:"Cleaning services",location:"Johannesburg, Gauteng",owner:"Naledi Mokoena (CEO)",founded:"2011",size:"80 staff",description:"A fictional company that cleans offices, malls and schools.",jobs:["office-cleaner","team-supervisor"]},
  {id:"technova",name:"TechNova",industry:"Technology & Software",location:"Pretoria, Gauteng",owner:"Kabelo Sithole (CEO)",founded:"2015",size:"60 staff",description:"A fictional technology company for exploring software and IT careers.",jobs:["software-developer","it-intern"]},
  {id:"buildright",name:"BuildRight Engineering",industry:"Engineering & Construction",location:"Centurion, Gauteng",owner:"Pieter van Wyk (CEO)",founded:"2003",size:"240 staff",description:"A fictional engineering and construction company.",jobs:["graduate-engineer","general-worker"]}
];
const jobs = [
  {id:"cleaner",title:"Cleaner",company:"LU Company",location:"Johannesburg, Gauteng",category:"General work",requirements:["No experience needed, training is given","Reliable and on time","Able to work some weekends"],description:"Keep the store clean and tidy before and after opening.",deadline:"Not a real vacancy"},
  {id:"shop-assistant",title:"Shop Assistant",company:"LU Company",location:"Johannesburg, Gauteng",category:"Retail",requirements:["Matric certificate","Friendly and honest with customers","Able to work weekends"],description:"Help customers, fold stock and keep the shelves neat.",deadline:"Not a real vacancy"},
  {id:"sr-cashier",title:"Cashier",company:"Shoprite",location:"Stores nationwide",category:"Retail",requirements:["Comfortable handling cash and card payments","Good with numbers and with customers","Check the advert for the education level and shift times"],description:"Scan items, take payments and help customers at the till.",deadline:"Typical role, not a live vacancy"},
  {id:"sr-packer",title:"Shelf Packer",company:"Shoprite",location:"Stores nationwide",category:"General work",requirements:["Able to lift boxes and stand for long periods","Early morning shifts are common","Check the advert for the education level required"],description:"Fill shelves and keep the aisles neat.",deadline:"Typical role, not a live vacancy"},
  {id:"sr-butchery",title:"Butchery Assistant",company:"Shoprite",location:"Stores nationwide",category:"General work",requirements:["Comfortable working with raw meat and strict hygiene rules","Able to stand for long periods","Check the advert for any training or experience needed"],description:"Help prepare and pack meat in the store butchery.",deadline:"Typical role, not a live vacancy"},
  {id:"pnp-cashier",title:"Cashier",company:"Pick n Pay",location:"Stores nationwide",category:"Retail",requirements:["Comfortable handling cash and card payments","Good with numbers and with customers","Check the advert for the education level and shift times"],description:"Scan items, take payments and help customers at the till.",deadline:"Typical role, not a live vacancy"},
  {id:"pnp-packer",title:"Shelf Packer",company:"Pick n Pay",location:"Stores nationwide",category:"General work",requirements:["Able to lift boxes and stand for long periods","Early morning shifts are common","Check the advert for the education level required"],description:"Fill shelves and keep the aisles neat.",deadline:"Typical role, not a live vacancy"},
  {id:"pnp-bakery",title:"Bakery Assistant",company:"Pick n Pay",location:"Stores nationwide",category:"General work",requirements:["Early starts are common","Food hygiene is important","Check the advert for any training or experience needed"],description:"Help bake, pack and display fresh bread.",deadline:"Typical role, not a live vacancy"},
  {id:"spar-cashier",title:"Cashier",company:"SPAR",location:"Stores nationwide",category:"Retail",requirements:["Comfortable handling cash and card payments","Good with numbers and with customers","Check the advert for the education level and shift times"],description:"Scan items, take payments and help customers at the till.",deadline:"Typical role, not a live vacancy"},
  {id:"spar-packer",title:"Shelf Packer",company:"SPAR",location:"Stores nationwide",category:"General work",requirements:["Able to lift boxes and stand for long periods","Early morning shifts are common","Check the advert for the education level required"],description:"Fill shelves and keep the aisles neat.",deadline:"Typical role, not a live vacancy"},
  {id:"spar-deli",title:"Deli Assistant",company:"SPAR",location:"Stores nationwide",category:"General work",requirements:["Food hygiene is important","Friendly with customers","Check the advert for any training or experience needed"],description:"Serve customers at the deli counter and keep it clean.",deadline:"Typical role, not a live vacancy"},
  {id:"counter-assistant",title:"Counter Assistant",company:"Mama Zee Spaza Shop",location:"Tembisa, Gauteng",category:"Retail",requirements:["Good with money and counting","Honest and friendly","Able to start early in the morning"],description:"Serve customers and keep track of stock.",deadline:"Not a real vacancy"},
  {id:"office-cleaner",title:"Office Cleaner",company:"Bright Clean Services",location:"Johannesburg, Gauteng",category:"General work",requirements:["No experience needed, training is given","Reliable and on time","Own transport is a plus"],description:"Clean offices and shared spaces after working hours.",deadline:"Not a real vacancy"},
  {id:"team-supervisor",title:"Team Supervisor",company:"Bright Clean Services",location:"Johannesburg, Gauteng",category:"General work",requirements:["2 years of cleaning experience","Basic reporting skills","Valid driver's licence"],description:"Lead a small cleaning team and check the quality of work.",deadline:"Not a real vacancy"},
  {id:"software-developer",title:"Junior Software Developer",company:"TechNova",location:"Pretoria, Gauteng",category:"Engineering & IT",requirements:["Programming fundamentals (for example Python, C++ or JavaScript)","Diploma or degree in IT, or equivalent projects","Problem-solving skills"],description:"Build and test features in a small software team.",deadline:"Not a real vacancy"},
  {id:"it-intern",title:"IT Intern",company:"TechNova",location:"Pretoria, Gauteng",category:"Internship",requirements:["Currently studying IT or Engineering","Basic networking or programming knowledge","Proof of registration from your university"],description:"Learn on the job in support, networking and development.",deadline:"Not a real vacancy"},
  {id:"graduate-engineer",title:"Graduate Engineer",company:"BuildRight Engineering",location:"Centurion, Gauteng",category:"Engineering & IT",requirements:["BEng or BSc Eng degree","Maths and Physical Sciences in matric","Willing to register with ECSA"],description:"Work under a mentor on real engineering projects.",deadline:"Not a real vacancy"},
  {id:"general-worker",title:"General Worker",company:"BuildRight Engineering",location:"Centurion, Gauteng",category:"General work",requirements:["Able to do physical work outdoors","Safety induction provided","Reliable transport to site"],description:"Support the site team with daily tasks.",deadline:"Not a real vacancy"}
];
const careers = [
  {id:"software",title:"Software Engineer",icon:"⌘",summary:"Build and maintain software applications.",skills:"Programming, problem-solving, debugging and teamwork.",path:"Study a relevant qualification or build equivalent skills, create projects, and apply for suitable entry-level roles."},
  {id:"network",title:"Network Engineer",icon:"⌁",summary:"Design, configure and troubleshoot computer networks.",skills:"IP addressing, routing, switching, network security and troubleshooting.",path:"Learn networking fundamentals, practise in labs and consider relevant certifications."},
  {id:"cyber",title:"Cybersecurity Analyst",icon:"⬡",summary:"Help protect systems and investigate security alerts.",skills:"Networking, operating systems, security fundamentals and analytical thinking.",path:"Build IT foundations, practise in authorised labs and develop security skills."},
  {id:"civil",title:"Civil Engineer",icon:"⌂",summary:"Help design and oversee infrastructure.",skills:"Mathematics, physics, design and project management.",path:"Obtain an appropriate accredited engineering qualification and check professional registration requirements for your role."},
  {id:"cse",title:"Computer Systems Engineer",icon:"▣",summary:"Design hardware and embedded systems that run software.",skills:"Digital logic, C/C++, microcontrollers, networking and debugging.",path:"Study a Computer Systems or Electrical Engineering degree, build hardware projects, and look for graduate or vacation work."},
  {id:"retail-career",title:"Retail Cashier",icon:"▤",summary:"Serve customers and handle payments in shops and supermarkets.",skills:"Counting, honesty, patience and good customer service.",path:"Finish Grade 12 if you can, apply to stores directly, and learn on the job. Many stores offer training."},
  {id:"cleaner-career",title:"Cleaner",icon:"✧",summary:"Clean and maintain buildings and facilities.",skills:"Attention to detail, reliability and safe equipment use.",path:"Check individual employers' requirements, work hours and experience expectations."}
];
const pages = ["home","companies","profile","careers","jobs","alerts","saved","search"];
let activePage = "home";
let selectedCompany = companies[0];
let currentSearch = "";
let currentSearchTab = "companies";
let selectedCareer = null;
let savedItems = JSON.parse(localStorage.getItem("chequsSaved") || "[]");
let alertSettings = JSON.parse(localStorage.getItem("chequsAlerts") || '{"enabled":true,"categories":["General work","Retail","Engineering & IT","Internship"],"location":"Anywhere in South Africa","frequency":"As soon as a job is posted"}');
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const esc = (value) => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const companyFor = name => companies.find(c => c.name === name);
const jobFor = id => jobs.find(j => j.id === id);
function toast(message) {
  const el = $("#toast"); el.textContent = message; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}
function go(page) {
  if (!pages.includes(page)) return;
  activePage = page;
  $$(".page").forEach(el => el.classList.remove("active"));
  const pageEl = document.getElementById(page + "Page");
  if (pageEl) pageEl.classList.add("active");
  $$(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.page === page));
  if (page === "companies") renderCompanies($("#companySearch")?.value || "");
  if (page === "profile") renderProfile();
  if (page === "careers") renderCareers($("#careerSearch")?.value || "");
  if (page === "jobs") renderJobs();
  if (page === "alerts") renderAlertSettings();
  if (page === "saved") renderSaved();
  window.scrollTo({top:0,behavior:"smooth"});
}
function saveSaved() { localStorage.setItem("chequsSaved", JSON.stringify(savedItems)); }
function isSaved(type,id) { return savedItems.some(item => item.type === type && item.id === id); }
function toggleSaved(type,id) {
  if (isSaved(type,id)) savedItems = savedItems.filter(item => !(item.type===type && item.id===id));
  else savedItems.push({type,id});
  saveSaved();
  toast(isSaved(type,id) ? "Saved to your shortlist." : "Removed from your shortlist.");
  if (activePage === "profile") renderProfile();
  if (activePage === "jobs") renderJobs();
  if (activePage === "saved") renderSaved();
  if (activePage === "search") renderSearchResults();
}
function renderCompanies(query="") {
  const q = query.trim().toLowerCase();
  const list = companies.filter(c => [c.name,c.industry,c.location,c.owner].some(v=>v.toLowerCase().includes(q)));
  $("#companyList").innerHTML = list.length ? list.map(c => `
    <article class="company-card">
      <span class="company-symbol">▦</span><div class="company-info"><h3>${esc(c.name)}</h3><p>${esc(c.industry)}</p><p>⌖ ${esc(c.location)}</p><p class="hiring-tag">${c.real?"Typical roles: "+c.jobs.length:c.jobs.length+" open position"+(c.jobs.length===1?"":"s")}</p></div>
      <button data-open-company="${c.id}">View profile →</button>
    </article>`).join("") : empty("No companies match that search. Try another name or industry.");
}
function renderProfile() {
  const c = selectedCompany;
  const related = c.jobs.map(jobFor).filter(Boolean);
  $("#companyProfile").innerHTML = `
    <div class="profile-hero"><span class="pill">${esc(c.industry)}</span><h1>${esc(c.name)}</h1><p>⌖ ${esc(c.location)}</p><div class="profile-meta">${c.real?`<span class="pill">Real company</span><span class="pill">Checked ${esc(c.verified)}</span>`:`<span class="pill">Sample profile</span><span class="pill">Demo information</span>`}</div></div>
    <section class="profile-section"><h2>About this company</h2><p>${esc(c.description)}</p></section>
    <section class="profile-section"><h2>Company details</h2><p><strong>Owner / CEO:</strong> ${esc(c.owner)}</p><p><strong>Started:</strong> ${esc(c.founded)}</p><p><strong>Size:</strong> ${esc(c.size)}</p>${c.real?`<p><strong>Official website:</strong> <a href="${esc(c.site)}" target="_blank" rel="noopener">${esc(c.site.replace("https://",""))}</a></p><p style="margin-top:10px;font-size:12px">Leaders change. Confirm the latest on the official website.</p>`:`<p style="margin-top:10px;font-size:12px">For real profiles, Cheq-Us should use reliable public sources and show when details were last verified.</p>`}</section>
    <section class="profile-section"><h2>${c.real?"Typical entry-level roles":"Open positions"} (${related.length})</h2>${c.real?`<p class="demo-note">These are typical roles in this kind of store, not live vacancies. Check the official careers page before you apply.</p>`:""}${related.length?related.map(j=>`<div class="profile-job"><div><strong>${esc(j.title)}</strong><p>${esc(j.category)} · ${esc(j.location)}</p><ul class="req-list">${j.requirements.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></div></div>`).join(""):"<p>No open positions right now. You will get an alert when one opens.</p>"}</section>
    <button class="secondary-button" data-save-company="${c.id}">${isSaved("company",c.id)?"★ Saved company":"☆ Save company"}</button>`;
}
function renderCareers(query="") {
  const q=query.trim().toLowerCase();
  const list=careers.filter(c=>[c.title,c.summary,c.skills].some(v=>v.toLowerCase().includes(q)));
  $("#careerList").innerHTML=list.length?list.map(c=>`<button class="career-card" data-career="${c.id}"><span class="career-symbol">${c.icon}</span><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><b style="color:var(--blue);font-size:13px">Explore career →</b></button>`).join(""):empty("No careers found. Try a different search.");
  if(selectedCareer) renderCareerDetails(selectedCareer);
}
function renderCareerDetails(c) {
  selectedCareer=c;
  $("#careerDetails").classList.remove("hidden");
  $("#careerDetails").innerHTML=`<h2>${esc(c.title)}</h2><p>${esc(c.summary)}</p><h3>Useful skills</h3><p>${esc(c.skills)}</p><h3>Possible pathway</h3><p>${esc(c.path)}</p><button class="primary-button" data-search-career="${esc(c.title)}">Find related jobs</button>`;
}
function renderJobs() {
  const q=($("#jobSearch")?.value||"").trim().toLowerCase(), cat=$("#jobFilter")?.value||"All jobs";
  const list=jobs.filter(j=>(cat==="All jobs"||j.category===cat)&&[j.title,j.company,j.location,j.category].some(v=>v.toLowerCase().includes(q)));
  $("#jobList").innerHTML=list.length?list.map(j=>`<article class="job-card"><div class="job-top"><span class="job-symbol">↗</span><span class="tag">${esc(j.category)}</span></div><h3>${esc(j.title)}</h3><p class="company-name">${esc(j.company)} · ${esc(j.location)}</p><p>${esc(j.description)}</p><p><strong>What you need:</strong></p><ul class="req-list">${j.requirements.map(r=>`<li>${esc(r)}</li>`).join("")}</ul><p class="demo-note">${esc(j.deadline)} · Sample listing only</p><div class="job-actions"><button data-save-job="${j.id}">${isSaved("job",j.id)?"★ Saved":"☆ Save job"}</button><button data-company-from-job="${esc(j.company)}">Company profile</button></div></article>`).join(""):empty("No matching example jobs. Try another keyword or category.");
}
function renderAlertSettings() {
  $("#alertsEnabled").checked=!!alertSettings.enabled;
  $("#alertLocation").value=alertSettings.location;
  $("#alertFrequency").value=alertSettings.frequency;
  $$('input[name="category"]').forEach(el=>el.checked=alertSettings.categories.includes(el.value));
  $("#alertDot").style.display=alertSettings.enabled?"block":"none";
  $("#alertStatus").textContent=alertSettings.enabled?"Alerts are enabled in this demo.":"Alerts are currently turned off in this demo.";
}
function renderSaved() {
  const list=$("#savedList");
  if(!savedItems.length){list.innerHTML=empty("You haven't saved anything yet. Save a company or job to build your shortlist.");return;}
  list.innerHTML=savedItems.map(item=>{
    const data=item.type==="company"?companies.find(c=>c.id===item.id):jobs.find(j=>j.id===item.id);
    if(!data)return "";
    return `<article class="saved-row"><div><strong>${esc(data.name||data.title)}</strong><small>${esc(item.type==="company"?data.industry:data.company+" · "+data.category)}</small></div><div><button data-open-saved="${item.type}:${item.id}">Open</button> <button data-remove-saved="${item.type}:${item.id}">Remove</button></div></article>`;
  }).join("");
}
function empty(message){return `<div class="empty-state">${esc(message)}</div>`}
function openCompany(id){const c=companies.find(x=>x.id===id);if(c){selectedCompany=c;go("profile")}}
function openJob(id){
  const j=jobFor(id);if(!j)return;
  toast(`${j.title}: ${j.requirements.join(" ")}`);
}
function doSearch(query,tab="companies") {
  currentSearch=query.trim();currentSearchTab=tab;
  $("#searchSummary").textContent=currentSearch?`Showing demo results for “${currentSearch}”.`:"Explore the available demo information.";
  $$(".tab").forEach(el=>el.classList.toggle("active",el.dataset.searchTab===tab));
  renderSearchResults();go("search");
}
function renderSearchResults(){
  const q=currentSearch.toLowerCase(),target=$("#searchResults");
  if(currentSearchTab==="companies"){
    const list=companies.filter(c=>[c.name,c.industry,c.location,c.owner].some(v=>v.toLowerCase().includes(q)));
    target.innerHTML=list.length?list.map(c=>`<article class="company-card"><span class="company-symbol">▦</span><div class="company-info"><h3>${esc(c.name)}</h3><p>${esc(c.industry)} · ${esc(c.location)}</p></div><button data-open-company="${c.id}">Open</button></article>`).join(""):empty("No matching companies found.");
  } else if(currentSearchTab==="jobs"){
    const list=jobs.filter(j=>[j.title,j.company,j.location,j.category].some(v=>v.toLowerCase().includes(q)));
    target.innerHTML=list.length?list.map(j=>`<article class="job-card"><h3>${esc(j.title)}</h3><p>${esc(j.company)} · ${esc(j.location)}</p><ul class="req-list">${j.requirements.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></article>`).join(""):empty("No matching example jobs found.");
  } else {
    const list=careers.filter(c=>[c.title,c.summary,c.skills].some(v=>v.toLowerCase().includes(q)));
    target.innerHTML=list.length?list.map(c=>`<button class="career-card" data-career="${c.id}"><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p></button>`).join(""):empty("No matching careers found.");
  }
}
document.addEventListener("click",event=>{
  const pageButton=event.target.closest("[data-page]");
  if(pageButton){event.preventDefault();go(pageButton.dataset.page);return;}
  const companyButton=event.target.closest("[data-open-company]");
  if(companyButton){openCompany(companyButton.dataset.openCompany);return;}
  const jobButton=event.target.closest("[data-open-job],[data-job-details]");
  if(jobButton){openJob(jobButton.dataset.openJob||jobButton.dataset.jobDetails);return;}
  const saveCompany=event.target.closest("[data-save-company]");
  if(saveCompany){toggleSaved("company",saveCompany.dataset.saveCompany);return;}
  const saveJob=event.target.closest("[data-save-job]");
  if(saveJob){toggleSaved("job",saveJob.dataset.saveJob);return;}
  const companyFromJob=event.target.closest("[data-company-from-job]");
  if(companyFromJob){const c=companyFor(companyFromJob.dataset.companyFromJob);if(c)openCompany(c.id);return;}
  const careerButton=event.target.closest("[data-career]");
  if(careerButton){renderCareerDetails(careers.find(c=>c.id===careerButton.dataset.career));$("#careerDetails").scrollIntoView({behavior:"smooth",block:"nearest"});return;}
  const careerSearch=event.target.closest("[data-search-career]");
  if(careerSearch){doSearch(careerSearch.dataset.searchCareer,"jobs");return;}
  const jobSearch=event.target.closest("[data-job-search]");
  if(jobSearch){$("#jobSearch").value=jobSearch.dataset.jobSearch;go("jobs");renderJobs();return;}
  const searchTab=event.target.closest("[data-search-tab]");
  if(searchTab){currentSearchTab=searchTab.dataset.searchTab;$$(".tab").forEach(el=>el.classList.toggle("active",el===searchTab));renderSearchResults();return;}
  const openSaved=event.target.closest("[data-open-saved]");
  if(openSaved){const [type,id]=openSaved.dataset.openSaved.split(":");if(type==="company")openCompany(id);else{go("jobs");$("#jobSearch").value=jobFor(id)?.title||"";renderJobs();}return;}
  const removeSaved=event.target.closest("[data-remove-saved]");
  if(removeSaved){const [type,id]=removeSaved.dataset.removeSaved.split(":");toggleSaved(type,id);return;}
});
$("#notificationShortcut").addEventListener("click",()=>go("alerts"));
$("#searchForm").addEventListener("submit",event=>{event.preventDefault();doSearch($("#globalSearch").value,"companies");});
$("#companySearch").addEventListener("input",event=>renderCompanies(event.target.value));
$("#careerSearch").addEventListener("input",event=>renderCareers(event.target.value));
$("#jobSearch").addEventListener("input",renderJobs);
$("#jobFilter").addEventListener("change",renderJobs);
$("#saveAlertSettings").addEventListener("click",()=>{
  alertSettings={enabled:$("#alertsEnabled").checked,categories:$$('input[name="category"]:checked').map(el=>el.value),location:$("#alertLocation").value,frequency:$("#alertFrequency").value};
  localStorage.setItem("chequsAlerts",JSON.stringify(alertSettings));renderAlertSettings();toast("Your demo alert preferences have been saved.");
});
$("#alertsEnabled").addEventListener("change",()=>{alertSettings.enabled=$("#alertsEnabled").checked;$("#alertDot").style.display=alertSettings.enabled?"block":"none";$("#alertStatus").textContent=alertSettings.enabled?"Alerts are enabled in this demo.":"Alerts are currently turned off in this demo.";});
const alertFeed=[{id:"cleaner",when:"Example"}];
const upcoming=["office-cleaner","counter-assistant","it-intern","cleaner","graduate-engineer","software-developer"];
let upIndex=0;
function renderAlertFeed(){
  $("#recentAlerts").innerHTML=alertFeed.map(a=>{const j=jobFor(a.id);return `<article class="job-card"><div class="job-top"><span class="job-symbol">♧</span><span class="tag">${esc(a.when)}</span></div><h3>New job: ${esc(j.title)}</h3><p class="company-name">${esc(j.company)} · ${esc(j.location)}</p><ul class="req-list">${j.requirements.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></article>`}).join("");
}
function simulateAlert(){
  if(!alertSettings.enabled){toast("Alerts are turned off. Turn them on to get job alerts.");return;}
  const id=upcoming[upIndex++%upcoming.length],j=jobFor(id);
  alertFeed.unshift({id,when:"Just now"});renderAlertFeed();
  $("#alertDot").style.display="block";
  toast("🔔 "+j.company+" is hiring: "+j.title+". Check what you need below.");
}
$("#simulateAlert").addEventListener("click",simulateAlert);
renderAlertFeed();renderCompanies();renderJobs();renderAlertSettings();
