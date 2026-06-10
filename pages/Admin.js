/* =============================================
   VSA COACHING — ADMIN PANEL SCRIPT
   pages/admin.js
   ============================================= */

const API_URL    = 'http://localhost:5000/api';
const PER_PAGE   = 10;

let allEnquiries  = [];   // full list from API
let filtered      = [];   // after search/filter
let currentPage   = 1;

/* ── ON LOAD ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadEnquiries();

  // Search
  document.getElementById('search-input').addEventListener('input', applyFilters);

  // Course filter
  document.getElementById('course-filter').addEventListener('change', applyFilters);

  // Logout
  document.getElementById('logout-btn').addEventListener('click', logout);
  document.getElementById('logout-footer').addEventListener('click', logout);
});

/* ── LOAD ENQUIRIES FROM BACKEND ─────────────── */
async function loadEnquiries() {
  showState('loading');

  try {
    const token = localStorage.getItem('vsa_token');

    const res = await fetch(`${API_URL}/contact`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) throw new Error('Failed to fetch');

    const data = await res.json();
    allEnquiries = data;
    applyFilters();
    updateStats();

  } catch (err) {
    // ── DEMO MODE (backend not connected yet) ──
    // Shows sample data so the UI is visible during development
    allEnquiries = getDemoData();
    applyFilters();
    updateStats();
    console.warn('Backend not connected — showing demo data.');
  }
}

/* ── APPLY SEARCH + FILTER ───────────────────── */
function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const course = document.getElementById('course-filter').value;

  filtered = allEnquiries.filter(e => {
    const matchSearch =
      !search ||
      e.name.toLowerCase().includes(search)  ||
      e.phone.includes(search)               ||
      (e.email && e.email.toLowerCase().includes(search));

    const matchCourse = !course || e.course === course;

    return matchSearch && matchCourse;
  });

  currentPage = 1;
  renderTable();
}

/* ── RENDER TABLE ────────────────────────────── */
function renderTable() {
  if (filtered.length === 0) {
    showState('empty');
    return;
  }

  showState('table');

  const start  = (currentPage - 1) * PER_PAGE;
  const end    = start + PER_PAGE;
  const page   = filtered.slice(start, end);

  const tbody  = document.getElementById('enquiry-tbody');
  tbody.innerHTML = page.map((e, i) => `
    <tr>
      <td style="color:var(--clr-muted);font-size:0.8rem">${start + i + 1}</td>
      <td><strong>${escHtml(e.name)}</strong></td>
      <td>${escHtml(e.phone)}</td>
      <td style="color:var(--clr-muted)">${escHtml(e.email || '—')}</td>
      <td><span class="course-badge">${escHtml(e.course)}</span></td>
      <td class="msg-cell" title="${escHtml(e.message || '')}">${escHtml(e.message || '—')}</td>
      <td class="date-cell">${formatDate(e.createdAt)}</td>
    </tr>
  `).join('');

  renderPagination();
}

/* ── PAGINATION ──────────────────────────────── */
function renderPagination() {
  const total = Math.ceil(filtered.length / PER_PAGE);
  const el    = document.getElementById('pagination');

  if (total <= 1) { el.innerHTML = ''; return; }

  let html = '';
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  el.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderTable();
  window.scrollTo({ top: 400, behavior: 'smooth' });
}

/* ── UPDATE STAT CARDS ───────────────────────── */
function updateStats() {
  const today = new Date().toDateString();

  document.getElementById('total-count').textContent = allEnquiries.length;
  document.getElementById('jee-count').textContent   = allEnquiries.filter(e => e.course === 'jee').length;
  document.getElementById('neet-count').textContent  = allEnquiries.filter(e => e.course === 'neet').length;
  document.getElementById('today-count').textContent = allEnquiries.filter(e =>
    new Date(e.createdAt).toDateString() === today
  ).length;
}

/* ── SHOW STATE ──────────────────────────────── */
function showState(state) {
  document.getElementById('loading-state').style.display = state === 'loading' ? 'flex'  : 'none';
  document.getElementById('empty-state').style.display   = state === 'empty'   ? 'flex'  : 'none';
  document.getElementById('error-state').style.display   = state === 'error'   ? 'flex'  : 'none';
  document.getElementById('table-wrapper').style.display = state === 'table'   ? 'block' : 'none';
}

/* ── LOGOUT ──────────────────────────────────── */
function logout(e) {
  e.preventDefault();
  localStorage.removeItem('vsa_token');
  window.location.href = '../index.html';
}

/* ── HELPERS ─────────────────────────────────── */
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── DEMO DATA (shown when backend is offline) ── */
function getDemoData() {
  return [
    { name: 'Aarav Sharma',   phone: '9876543210', email: 'aarav@email.com',   course: 'jee',    message: 'Interested in 2-year JEE batch.',    createdAt: new Date() },
    { name: 'Priya Kulkarni', phone: '9123456780', email: 'priya@email.com',   course: 'neet',   message: 'Please share fee structure.',         createdAt: new Date() },
    { name: 'Rohan Patil',    phone: '9988776655', email: '',                  course: 'mhtcet', message: '',                                   createdAt: new Date() },
    { name: 'Sneha Joshi',    phone: '9001122334', email: 'sneha@email.com',   course: 'hsc',    message: 'Need info about HSC + CET combo.',    createdAt: new Date() },
    { name: 'Karan Mehta',    phone: '9765432100', email: 'karan@email.com',   course: 'jee',    message: 'Is weekend batch available?',         createdAt: new Date() },
    { name: 'Ananya Desai',   phone: '9654321009', email: 'ananya@email.com',  course: 'neet',   message: 'Dropper batch details please.',       createdAt: new Date() },
  ];
}