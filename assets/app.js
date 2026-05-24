const customers = [
  {name:'Northline Realty', owner:'Mia Carter', plan:'Enterprise', status:'Healthy', value:'$4,200'},
  {name:'Atlas Legal Group', owner:'James Reed', plan:'Pro', status:'Onboarding', value:'$1,480'},
  {name:'Summit HVAC', owner:'Nora Blake', plan:'Starter', status:'At Risk', value:'$590'},
  {name:'Metro Dental', owner:'Elena Cruz', plan:'Pro', status:'Healthy', value:'$1,250'},
  {name:'BluePeak Logistics', owner:'Ryan Holt', plan:'Enterprise', status:'Expansion', value:'$5,100'}
];
const activities = ['Invoice paid by Northline Realty','Atlas moved to onboarding','Support ticket resolved for Metro Dental','BluePeak requested 12 seats','Churn risk flagged for Summit HVAC'];
function renderTable(list=customers){document.querySelector('#rows').innerHTML=list.map(c=>`<div class="row"><strong>${c.name}</strong><span>${c.owner}</span><span>${c.plan}</span><span class="badge">${c.status}</span></div>`).join('')}
function renderActivities(){document.querySelector('#activity').innerHTML=activities.map(a=>`<div class="activity-item"><span class="dot"></span><span>${a}</span></div>`).join('')}
document.querySelector('#search')?.addEventListener('input',e=>{const q=e.target.value.toLowerCase();renderTable(customers.filter(c=>Object.values(c).join(' ').toLowerCase().includes(q)))})
renderTable();renderActivities();
