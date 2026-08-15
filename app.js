document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const menuBtn = document.getElementById('menuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  
  const searchBtn = document.getElementById('searchBtn');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');

  // Helper functions to open/close drawers with ARIA accessibility sync
  const toggleDrawer = (overlay, activeClass, forceState, triggerBtn) => {
    let isActive;
    if (forceState !== undefined) {
      isActive = forceState;
      if (forceState) {
        overlay.classList.add(activeClass);
      } else {
        overlay.classList.remove(activeClass);
      }
    } else {
      isActive = overlay.classList.toggle(activeClass);
    }
    
    document.body.style.overflow = isActive ? 'hidden' : '';
    overlay.setAttribute('aria-hidden', (!isActive).toString());
    
    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', isActive.toString());
    }
  };

  // Mobile Menu Event Listeners
  if (menuBtn && mobileDrawerOverlay) {
    menuBtn.addEventListener('click', () => toggleDrawer(mobileDrawerOverlay, 'active', true, menuBtn));
  }
  if (closeMenuBtn && mobileDrawerOverlay) {
    closeMenuBtn.addEventListener('click', () => toggleDrawer(mobileDrawerOverlay, 'active', false, menuBtn));
  }
  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === mobileDrawerOverlay) {
        toggleDrawer(mobileDrawerOverlay, 'active', false, menuBtn);
      }
    });
  }

  // Search Event Listeners
  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      toggleDrawer(searchOverlay, 'active', true, searchBtn);
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    });
  }
  if (closeSearchBtn && searchOverlay) {
    closeSearchBtn.addEventListener('click', () => toggleDrawer(searchOverlay, 'active', false, searchBtn));
  }
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        toggleDrawer(searchOverlay, 'active', false, searchBtn);
      }
    });
  }

  // Cart Event Listeners
  if (cartBtn && cartDrawerOverlay) {
    cartBtn.addEventListener('click', () => toggleDrawer(cartDrawerOverlay, 'active', true, cartBtn));
  }
  if (closeCartBtn && cartDrawerOverlay) {
    closeCartBtn.addEventListener('click', () => toggleDrawer(cartDrawerOverlay, 'active', false, cartBtn));
  }
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) {
        toggleDrawer(cartDrawerOverlay, 'active', false, cartBtn);
      }
    });
  }

  // Escape key handler to close all active overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawerOverlay && mobileDrawerOverlay.classList.contains('active')) {
        toggleDrawer(mobileDrawerOverlay, 'active', false);
      }
      if (searchOverlay && searchOverlay.classList.contains('active')) {
        toggleDrawer(searchOverlay, 'active', false);
      }
      if (cartDrawerOverlay && cartDrawerOverlay.classList.contains('active')) {
        toggleDrawer(cartDrawerOverlay, 'active', false);
      }
    }
  });

  // Tab Switcher for The Hot List
  const tabButtons = document.querySelectorAll('.hot-list-tabs .tab-btn');
  const tabPanels = document.querySelectorAll('.hot-list-grid');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate all tab buttons and panels
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Activate selected tab button and panel
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const targetPanelId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});
