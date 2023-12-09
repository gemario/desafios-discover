function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("sidebar-closed");
}

function toggleSidebarBySearch() {
  const sidebar = document.getElementById("sidebar");
  const isClosed = sidebar.classList.contains("sidebar-closed");

  if (isClosed) {
    toggleSidebar();
  }

  document.getElementById("sidebar-search").focus();
}
