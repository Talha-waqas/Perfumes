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
  const drawerSearchBtn = document.getElementById('drawerSearchBtn');
  if (drawerSearchBtn && searchOverlay) {
    drawerSearchBtn.addEventListener('click', () => {
      if (mobileDrawerOverlay) toggleDrawer(mobileDrawerOverlay, 'active', false, menuBtn);
      toggleDrawer(searchOverlay, 'active', true, searchBtn);
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    });
  }

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

  // ==========================================================================
  // Product Detail Page (PDP) Interactive Logics
  // ==========================================================================

  // 1. Thumbnail Image Switcher
  const pdpMainImage = document.getElementById('pdpMainImage');
  const thumbButtons = document.querySelectorAll('.thumb-btn');

  if (pdpMainImage && thumbButtons.length > 0) {
    thumbButtons.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbButtons.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const newSrc = thumb.getAttribute('data-img');
        const newPos = thumb.getAttribute('data-pos');

        if (newSrc) pdpMainImage.src = newSrc;

        // Reset position classes and apply new position
        pdpMainImage.className = 'pdp-featured-img ' + (newPos || '');
      });
    });
  }

  // 2. Size Selector & Price Updater
  const sizePills = document.querySelectorAll('.size-pill');
  const pdpPriceDisplay = document.getElementById('pdpPriceDisplay');
  const pdpPriceOriginal = document.getElementById('pdpPriceOriginal');
  const selectedSizeLabel = document.getElementById('selectedSizeLabel');

  if (sizePills.length > 0) {
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-checked', 'false');
        });

        pill.classList.add('active');
        pill.setAttribute('aria-checked', 'true');

        const sizeVal = pill.getAttribute('data-size');
        const priceVal = pill.getAttribute('data-price');
        const origVal = pill.getAttribute('data-original');

        if (selectedSizeLabel && sizeVal) {
          const subText = pill.querySelector('.size-sub')?.textContent || '';
          selectedSizeLabel.textContent = `${sizeVal} (${subText})`;
        }
        if (pdpPriceDisplay && priceVal) pdpPriceDisplay.textContent = `Rs. ${priceVal}`;
        if (pdpPriceOriginal && origVal) pdpPriceOriginal.textContent = `Rs. ${origVal}`;
      });
    });
  }

  // 3. Quantity Stepper (+ / -)
  const qtyMinusBtn = document.getElementById('qtyMinusBtn');
  const qtyPlusBtn = document.getElementById('qtyPlusBtn');
  const qtyInput = document.getElementById('qtyInput');

  if (qtyInput) {
    if (qtyMinusBtn) {
      qtyMinusBtn.addEventListener('click', () => {
        let currentVal = parseInt(qtyInput.value, 10) || 1;
        if (currentVal > 1) {
          qtyInput.value = currentVal - 1;
        }
      });
    }

    if (qtyPlusBtn) {
      qtyPlusBtn.addEventListener('click', () => {
        let currentVal = parseInt(qtyInput.value, 10) || 1;
        if (currentVal < 10) {
          qtyInput.value = currentVal + 1;
        }
      });
    }
  }

  // 4. PDP Accordion Tabs Switcher
  const pdpTabBtns = document.querySelectorAll('.pdp-tab-btn');
  const pdpTabPanels = document.querySelectorAll('.pdp-tab-panel');

  if (pdpTabBtns.length > 0) {
    pdpTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        pdpTabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        pdpTabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const panelId = btn.getAttribute('aria-controls');
        const targetPanel = document.getElementById(panelId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

  // 5. Add to Bag Interactive Drawer Trigger
  const pdpAddBagBtn = document.getElementById('pdpAddBagBtn');
  const cartBadge = document.querySelector('.cart-badge');
  const cartDrawerBody = document.querySelector('.cart-drawer-body');

  const handleAddToCart = (title = 'CREED Aventus Eau De Parfum 100ml', price = 'Rs. 130,900', img = 'assets/images/best_sellers.jpg') => {
    let count = parseInt(cartBadge?.textContent || '0', 10) + 1;
    if (cartBadge) cartBadge.textContent = count.toString();

    if (cartDrawerBody) {
      cartDrawerBody.innerHTML = `
        <div class="cart-items-wrapper" style="width: 100%;">
          <div class="cart-item-card" style="display: flex; gap: 16px; align-items: center; padding: 16px; background: #f9f9f9; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
            <div style="width: 70px; height: 70px; overflow: hidden; border-radius: 6px; flex-shrink: 0; background: #fff;">
              <img src="${img}" alt="${title}" style="width: 300%; height: 100%; object-fit: cover; object-position: 7% center;">
            </div>
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: #1b1b1b; margin-bottom: 4px; font-family: var(--font-body);">${title}</h4>
              <span style="font-size: 14px; font-weight: 700; color: var(--primary-purple); font-family: var(--font-display);">${price}</span>
            </div>
          </div>
          <div style="border-top: 1px solid #eee; padding-top: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-family: var(--font-display); font-size: 16px; font-weight: 700;">
              <span>Subtotal</span>
              <span>${price}</span>
            </div>
            <a href="/checkout" class="btn-primary" style="display: block; text-align: center; text-decoration: none; padding: 14px; font-weight: 600; width: 100%;">Proceed to Checkout</a>
          </div>
        </div>
      `;
    }

    if (cartDrawerOverlay) {
      toggleDrawer(cartDrawerOverlay, 'active', true, cartBtn);
    }
  };

  if (pdpAddBagBtn) {
    pdpAddBagBtn.addEventListener('click', () => {
      const activePill = document.querySelector('.size-pill.active .size-ml');
      const sizeStr = activePill ? activePill.textContent : '100ml';
      const priceStr = pdpPriceDisplay ? pdpPriceDisplay.textContent : 'Rs. 130,900';
      handleAddToCart(`CREED Aventus Eau De Parfum (${sizeStr})`, priceStr, 'assets/images/best_sellers.jpg');
    });
  }

  // Quick add buttons on product cards
  const quickAddBtns = document.querySelectorAll('.btn-quick-add, .btn-quick-add-dark');
  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.product-card, .hot-card');
      const title = card?.querySelector('.product-title a, .hot-card-title a')?.textContent || 'Luxury Perfume';
      const price = card?.querySelector('.price-current, .hot-price-current')?.textContent || 'Rs. 12,000';
      handleAddToCart(title, price, 'assets/images/best_sellers.jpg');
    });
  });

  // Make product card images open product.html on click
  document.querySelectorAll('.product-image-wrapper, .hot-image-wrapper, .top-image-arch').forEach(imgWrap => {
    imgWrap.style.cursor = 'pointer';
    imgWrap.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-quick-add') || e.target.classList.contains('btn-quick-add-dark') || e.target.closest('.btn-quick-add, .btn-quick-add-dark')) {
        return;
      }
      window.location.href = 'product.html';
    });
  });
});

