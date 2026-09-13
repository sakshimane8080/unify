/* ---------------- shared cross-page state (localStorage) ---------------- */
const today = new Date();
function addDays(n){ const d = new Date(today); d.setDate(d.getDate()+n); return d; }
function daysLeft(iso){ const d = new Date(iso); return Math.max(0, Math.ceil((d - today) / (1000*60*60*24))); }

const DEFAULTS = {
  opportunities: [
    {id:1, title:'State Merit Scholarship 2026', cat:'scholarship', value:'₹50,000', deadline:addDays(3).toISOString()},
    {id:2, title:'Infosys Summer Internship', cat:'internship', value:'Stipend + Certificate', deadline:addDays(9).toISOString()},
    {id:3, title:'National Hackathon — CodeSprint', cat:'competition', value:'₹1,00,000 prize pool', deadline:addDays(15).toISOString()},
    {id:4, title:'First-Gen Student Scholarship', cat:'scholarship', value:'₹30,000', deadline:addDays(21).toISOString()},
  ],
  notices: [
    {id:1, title:'Hostel water supply maintenance tomorrow', cat:'hostel', urgent:true, reads:'142/210', body:'Water supply will be shut 9am–1pm for tank cleaning.'},
    {id:2, title:'Mid-sem exam datesheet released', cat:'exam', urgent:true, reads:'188/210', body:'Check the portal for your slot allocation.'},
    {id:3, title:'Library extended to 11 PM during exams', cat:'academic', urgent:false, reads:'96/210', body:'Effective from next Monday through exam week.'},
  ],
  notifications: [
    {t:'New: State Merit Scholarship 2026 posted', when:'Today, 9:12 AM'},
    {t:'Reminder: Hackathon registration closes in 15 days', when:'Yesterday'},
  ],
  sentLog: [],
  attendees: [
    {name:'Ananya R.', reg:'CS21-014', present:false},
    {name:'Rohit M.', reg:'EC21-102', present:true},
    {name:'Fatima S.', reg:'ME21-057', present:false},
    {name:'Karan V.', reg:'CS21-091', present:true},
  ],
  doubts: [
    {q:'Is the workshop open to second years too?', a:'Yes — open to all years, just carry your ID card.'},
  ],
};

function loadStore(key){
  try{
    const raw = localStorage.getItem('unify_' + key);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return JSON.parse(JSON.stringify(DEFAULTS[key]));
}
function saveStore(key, value){
  try{ localStorage.setItem('unify_' + key, JSON.stringify(value)); }catch(e){}
}
function resetStore(){
  Object.keys(DEFAULTS).forEach(k => localStorage.removeItem('unify_' + k));
}

/* ---------------- auth guard ---------------- */
function requireRole(role){
  const current = sessionStorage.getItem('unify_role');

  if(!current){
    window.location.href = 'index.html';
    return false;
  }

  if(current !== role){
    const destination = current === 'student' ? 'student.html' : current === 'staff' ? 'staff.html' : 'index.html';
    window.location.href = destination;
    return false;
  }

  return true;
}
function logout(){
  sessionStorage.removeItem('unify_role');
  sessionStorage.removeItem('unify_user');
  window.location.href = 'index.html';
}
