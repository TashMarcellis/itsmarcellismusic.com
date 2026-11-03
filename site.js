(function () {
  var KEY = 'itsmarcellismusic-theme';
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var label = document.getElementById('themeLabel');
  function apply(theme, save) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';
    label.textContent = dark ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    if (save) { try { localStorage.setItem(KEY, theme); } catch (e) {} }
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === 'dark' ? 'dark' : 'light', false);
  btn.addEventListener('click', function () {
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  var list = document.getElementById('releaseList');
  if (!list) return;
  var only = list.getAttribute('data-artist');
  var filters = document.getElementById('releaseFilters');

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmt(d) {
    if (!d) return 'Date to be announced';
    var p = d.split('-');
    var m = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return p.length === 3 ? Number(p[2]) + ' ' + m[Number(p[1]) - 1] + ' ' + p[0] : d;
  }
  function card(r) {
    var cover = r.cover
      ? '<img src="' + esc(r.cover) + '" alt="Cover of ' + esc(r.title) + '" loading="lazy" onerror="this.parentNode.textContent=this.alt.replace(\'Cover of \',\'\');">'
      : esc(r.title);
    var link = r.youtube
      ? '<a class="btn" href="' + esc(r.youtube) + '" target="_blank" rel="noopener">Listen on YouTube</a>'
      : '';
    return '<article class="release"><div class="cover">' + cover + '</div>' +
      '<h3>' + esc(r.title) + '</h3>' +
      '<p class="meta">' + esc(r.artist) + '</p>' +
      '<p class="meta">' + esc(fmt(r.date)) + '</p>' + link + '</article>';
  }
  function render(data, who) {
    var rows = data.filter(function (r) { return r.title && (!who || r.artist === who); });
    rows.sort(function (a, b) { return (b.date || '9999').localeCompare(a.date || '9999'); });
    list.innerHTML = rows.length ? rows.map(card).join('') : '<p class="empty">No releases listed yet.</p>';
  }
  fetch(list.getAttribute('data-src') || 'releases.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      render(data, only);
      if (!filters) return;
      var names = [];
      data.forEach(function (r) { if (r.title && names.indexOf(r.artist) < 0) names.push(r.artist); });
      var opts = ['All'].concat(names);
      filters.innerHTML = opts.map(function (n, i) {
        return '<button type="button" aria-pressed="' + (i === 0) + '">' + esc(n) + '</button>';
      }).join('');
      filters.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        Array.prototype.forEach.call(filters.children, function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        render(data, b.textContent === 'All' ? null : b.textContent);
      });
    })
    .catch(function () { list.innerHTML = '<p class="empty">Releases could not be loaded.</p>'; });
})();
