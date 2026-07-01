document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Logic
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    const setTheme = (isDark, save = true) => {
        if (isDark) {
            body.classList.add('dark-mode');
            themeIcon.setAttribute('data-lucide', 'sun');
            if (save) localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.setAttribute('data-lucide', 'moon');
            if (save) localStorage.setItem('theme', 'light');
        }
        lucide.createIcons();
        
        // Sync open iframes
        document.querySelectorAll('.pdf-iframe').forEach(iframe => {
            try {
                if (iframe.contentDocument && iframe.contentDocument.body) {
                    if (isDark) {
                        iframe.contentDocument.body.classList.add('dark-mode');
                    } else {
                        iframe.contentDocument.body.classList.remove('dark-mode');
                    }
                }
            } catch (e) {
                console.log("Cannot sync iframe (cross-origin or not loaded)");
            }
        });
    };

    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setTheme(!isDark);
    });

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemPrefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches, false);
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true, false);
    } else if (savedTheme === 'light') {
        setTheme(false, false);
    } else {
        setTheme(systemPrefersDark.matches, false);
    }

    // Background Slideshow
    const bgImages = [
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Sostituita 4a immagine
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Sostituita 5a immagine
        'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];

    let currentBgIndex = 0;
    const bgLayers = [
        document.getElementById('bg-layer-1'),
        document.getElementById('bg-layer-2')
    ];
    let activeLayerIndex = 0;

    // Preload images
    bgImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Initialize backgrounds
    bgLayers[0].style.backgroundImage = `url('${bgImages[0]}')`;
    bgLayers[1].style.backgroundImage = `url('${bgImages[1]}')`; // Prepare next image

    function changeBackground() {
        const nextLayerIndex = (activeLayerIndex + 1) % 2;
        const activeLayer = bgLayers[activeLayerIndex];
        const nextLayer = bgLayers[nextLayerIndex];

        // Cross-fade
        nextLayer.classList.add('active');
        activeLayer.classList.remove('active');

        // Update indices
        activeLayerIndex = nextLayerIndex;
        currentBgIndex = (currentBgIndex + 1) % bgImages.length;

        // Prepare the NEXT image on the now-hidden layer after a short delay (to not interrupt current fade)
        setTimeout(() => {
            const hiddenLayerIndex = (activeLayerIndex + 1) % 2;
            const nextImageIndex = (currentBgIndex + 1) % bgImages.length;
            bgLayers[hiddenLayerIndex].style.backgroundImage = `url('${bgImages[nextImageIndex]}')`;
        }, 2000);
    }

    // Change background every 10 seconds (8s display + 2s fade)
    setInterval(changeBackground, 10000);

    // Clock and Date functionality
    const updateDateTime = () => {
        const now = new Date();
        
        // Time
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}`;
        }

        // Date
        const days = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
        const months = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
        
        const dayName = days[now.getDay()];
        const dayNumber = now.getDate();
        const monthName = months[now.getMonth()];
        
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            dateElement.textContent = `${dayName} ${dayNumber} ${monthName}`;
        }
    };
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Window Management
    const icons = document.querySelectorAll('.icon-item[data-type]');
    const windows = document.querySelectorAll('.window');
    const closeButtons = document.querySelectorAll('.close-btn');
    const minimizeButtons = document.querySelectorAll('.minimize-btn');
    const dock = document.getElementById('dock');

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const type = icon.getAttribute('data-type');
            if (type === 'link') {
                const url = icon.getAttribute('data-url');
                const title = icon.querySelector('span').textContent;
                
                // Check if a window for this specific URL is already open
                let existingWindow = Array.from(document.querySelectorAll('.pdf-window')).find(w => {
                    const iframe = w.querySelector('iframe');
                    return iframe && iframe.src.includes(url);
                });

                if (existingWindow) {
                    existingWindow.classList.remove('app-killed');
                    existingWindow.classList.add('in-task-switcher');
                    if (existingWindow.classList.contains('minimized')) {
                        restoreWindow(existingWindow);
                    }
                    existingWindow.classList.remove('hidden');
                    bringToFront(existingWindow);
                    return;
                }

                // Create a new PDF window instance
                const newWindow = createPdfWindow(url, title);
                newWindow.classList.add('in-task-switcher');
                newWindow.classList.remove('hidden');
                bringToFront(newWindow);
            } else if (type === 'folder') {
                const targetId = icon.getAttribute('data-target');
                const targetWindow = document.getElementById(targetId);
                if (targetWindow) {
                    targetWindow.classList.remove('app-killed');
                    targetWindow.classList.add('in-task-switcher');
                    if (targetWindow.classList.contains('minimized')) {
                        restoreWindow(targetWindow);
                    }
                    targetWindow.classList.remove('hidden');
                    bringToFront(targetWindow);
                }
            }
        });
    });

    // Top Bar Menu Buttons
    const burgerMenuBtn = document.getElementById('burger-menu-btn');
    const topBarMenu = document.getElementById('top-bar-menu');

    if (burgerMenuBtn && topBarMenu) {
        burgerMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            topBarMenu.classList.toggle('active');
        });

        // Close burger menu when clicking outside
        document.addEventListener('click', (e) => {
            if (topBarMenu.classList.contains('active')) {
                if (!topBarMenu.contains(e.target) && !burgerMenuBtn.contains(e.target)) {
                    topBarMenu.classList.remove('active');
                }
            }
        });
    }

    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-target');
            const type = btn.getAttribute('data-type');
            
            // IF it's the "Appunti" button, do NOT close the burger menu yet
            if (btn.id === 'notes-menu-btn') {
                e.stopPropagation();
                return;
            }

            // Close burger menu on mobile after selection for other buttons
            if (window.innerWidth <= 768) {
                topBarMenu.classList.remove('active');
            }
            
            if (targetId) {
                const targetWindow = document.getElementById(targetId);
                if (targetWindow) {
                    // Pre-fill contact email if opening contact window
                    if (targetId === 'window-contact' && currentUser) {
                        const contactEmailInput = document.getElementById('contact-user-email');
                        if (contactEmailInput) contactEmailInput.value = currentUser.email;
                    }

                    targetWindow.classList.remove('app-killed');
                    targetWindow.classList.add('in-task-switcher');
                    if (targetWindow.classList.contains('minimized')) {
                        restoreWindow(targetWindow);
                    }
                    targetWindow.classList.remove('hidden');
                    bringToFront(targetWindow);
                }
            } else if (type === 'link') {
                const url = btn.getAttribute('data-url');
                const title = btn.textContent;
                
                // Check if a window for this specific URL is already open
                let existingWindow = Array.from(document.querySelectorAll('.pdf-window')).find(w => {
                    const iframe = w.querySelector('iframe');
                    return iframe && iframe.src.includes(url);
                });

                if (existingWindow) {
                    existingWindow.classList.remove('app-killed');
                    existingWindow.classList.add('in-task-switcher');
                    if (existingWindow.classList.contains('minimized')) {
                        restoreWindow(existingWindow);
                    }
                    existingWindow.classList.remove('hidden');
                    bringToFront(existingWindow);
                    return;
                }

                // Create a new PDF window instance
                const newWindow = createPdfWindow(url, title);
                newWindow.classList.add('in-task-switcher');
                newWindow.classList.remove('hidden');
                bringToFront(newWindow);
            }
        });
    });

    // Icon Resizing Logic
    const sizeSlider = document.getElementById('icon-size-slider');
    const sizeValue = document.getElementById('icon-size-value');
    const desktopIconsContainer = document.querySelector('.desktop-icons');
    const notepadWidget = document.querySelector('.notepad-widget');
    const notepadTextarea = document.getElementById('notepad-textarea');

    function updateIconSize(val) {
        if (!sizeSlider || !sizeValue || !desktopIconsContainer) return;
        
        sizeSlider.value = val;
        sizeValue.textContent = `${val}px`;
        
        desktopIconsContainer.style.gridTemplateColumns = `repeat(auto-fill, ${val}px)`;
        desktopIconsContainer.style.gridTemplateRows = `repeat(auto-fill, ${parseInt(val) + 10}px)`;
        
        const iconImages = document.querySelectorAll('.desktop-icons .icon-item img');
        iconImages.forEach(img => {
            const imgSize = (val * 48) / 100;
            img.style.width = `${imgSize}px`;
            img.style.height = `${imgSize}px`;
        });

        const iconLabels = document.querySelectorAll('.desktop-icons .icon-item span');
        iconLabels.forEach(span => {
            const fontSize = (val * 0.85) / 100;
            span.style.fontSize = `${fontSize}rem`;
        });

        // Update notepad size and font proportionally
        if (notepadWidget && notepadTextarea) {
            const baseWidth = 250;
            const baseHeight = 300;
            const baseFont = 0.9;
            
            const ratio = val / 100;
            notepadWidget.style.width = `${baseWidth * ratio}px`;
            notepadWidget.style.height = `${baseHeight * ratio}px`;
            notepadTextarea.style.fontSize = `${baseFont * ratio}rem`;
        }

        // Save if logged in
        if (currentUser) {
            currentUser.settings.iconSize = val;
            saveUserData();
        }
    }

    if (sizeSlider) {
        sizeSlider.addEventListener('input', (e) => updateIconSize(e.target.value));
    }

    // Notepad Logic
    let notes = [{ id: 1, title: 'Pagina 1', content: '' }];
    let activeNoteId = 1;
    const notesDropdown = document.getElementById('notes-dropdown');
    const notesMenuBtn = document.getElementById('notes-menu-btn');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesList = document.getElementById('notes-list');
    const activeNoteTitle = document.getElementById('active-note-title');

    function updateNotesUI() {
        if (!notesList) return;
        notesList.innerHTML = '';
        notes.forEach(note => {
            const container = document.createElement('div');
            container.className = 'dropdown-item-container';
            
            const item = document.createElement('button');
            item.className = `dropdown-item ${note.id === activeNoteId ? 'active' : ''}`;
            item.innerHTML = `<i data-lucide="file-text"></i> ${note.title}`;
            item.addEventListener('click', () => {
                switchNote(note.id);
                notesDropdown.classList.remove('active');
                // Close burger menu on mobile after selection
                if (window.innerWidth <= 768) {
                    topBarMenu.classList.remove('active');
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-note-btn';
            deleteBtn.innerHTML = `<i data-lucide="trash-2"></i>`;
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteNote(note.id);
            });

            container.appendChild(item);
            container.appendChild(deleteBtn);
            notesList.appendChild(container);
        });
        lucide.createIcons();
    }

    function deleteNote(id) {
        if (notes.length <= 1) {
            alert('Non puoi eliminare l\'ultima pagina degli appunti.');
            return;
        }
        
        notes = notes.filter(n => n.id !== id);
        if (activeNoteId === id) {
            activeNoteId = notes[0].id;
            const nextNote = notes[0];
            notepadTextarea.value = nextNote.content;
            activeNoteTitle.innerHTML = `Appunti <span class="note-page-suffix">${nextNote.title}</span>`;
        }
        
        if (currentUser) {
            currentUser.notes = notes;
            currentUser.activeNoteId = activeNoteId;
            saveUserData();
        }
        updateNotesUI();
    }

    function switchNote(id) {
        // Save current content
        const currentNote = notes.find(n => n.id === activeNoteId);
        if (currentNote) currentNote.content = notepadTextarea.value;

        // Load new content
        const nextNote = notes.find(n => n.id === id);
        if (nextNote) {
            activeNoteId = id;
            notepadTextarea.value = nextNote.content;
            activeNoteTitle.innerHTML = `Appunti <span class="note-page-suffix">${nextNote.title}</span>`;
        }
        updateNotesUI();
    }

    if (notesMenuBtn) {
        notesMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notesDropdown.classList.toggle('active');
        });
    }

    if (addNoteBtn) {
        addNoteBtn.addEventListener('click', () => {
            const newId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
            const newNote = { id: newId, title: `Pagina ${newId}`, content: '' };
            notes.push(newNote);
            switchNote(newId);
            notesDropdown.classList.remove('active');
            // Close burger menu on mobile after adding
            if (window.innerWidth <= 768) {
                topBarMenu.classList.remove('active');
            }
        });
    }

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        if (notesDropdown) notesDropdown.classList.remove('active');
    });

    if (notepadTextarea) {
        notepadTextarea.addEventListener('input', () => {
            const currentNote = notes.find(n => n.id === activeNoteId);
            if (currentNote) currentNote.content = notepadTextarea.value;
            if (currentUser) {
                currentUser.notes = notes;
                currentUser.activeNoteId = activeNoteId;
                saveUserData();
            }
        });
    }

    // Contact Logic
    const contactSendBtn = document.getElementById('contact-send-btn');
    const contactUserEmail = document.getElementById('contact-user-email');
    const contactMessage = document.getElementById('contact-message');

    if (contactSendBtn) {
        contactSendBtn.addEventListener('click', () => {
            const email = contactUserEmail.value;
            const message = contactMessage.value;

            if (!email || !message) {
                alert('Per favore, inserisci la tua email e un messaggio.');
                return;
            }

            // Simulate sending email
            const mailtoLink = `mailto:itsnovenstudio@gmail.com?from=${email}&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoLink;
            
            alert('Messaggio inviato con successo! (Simulazione)');
            contactMessage.value = '';
            document.getElementById('window-contact').classList.add('hidden');
        });
    }

    // Account Logic
    let currentUser = null;
    const loginForm = document.getElementById('account-login-form');
    const loggedInView = document.getElementById('account-logged-in');
    const emailInput = document.getElementById('account-email');
    const passwordInput = document.getElementById('account-password');
    const submitBtn = document.getElementById('account-submit-btn');
    const logoutBtn = document.getElementById('account-logout-btn');
    const loggedEmailDisplay = document.getElementById('logged-email-display');

    function saveUserData() {
        if (currentUser) {
            localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
            localStorage.setItem('last_logged_user', currentUser.email);
        }
    }

    function loadUserData(email) {
        const data = localStorage.getItem(`user_${email}`);
        return data ? JSON.parse(data) : null;
    }

    function handleLogin(email, password) {
        if (!email || !password) {
            alert('Inserisci email e password');
            return false;
        }

        let user = loadUserData(email);
        if (!user) {
            // Create new account and MIGRATE current session data
            user = {
                email: email,
                password: password,
                settings: {
                    iconSize: sizeSlider ? sizeSlider.value : 100
                },
                notes: notes,
                activeNoteId: activeNoteId
            };
        } else if (user.password !== password) {
            alert('Password errata');
            return false;
        } else {
            // Existing user: load their data
            notes = user.notes || [{ id: 1, title: 'Pagina 1', content: '' }];
            activeNoteId = user.activeNoteId || 1;
        }

        currentUser = user;
        saveUserData();
        updateUIForLoggedInUser();
        
        // Refresh UI with loaded/migrated data
        updateNotesUI();
        const currentNote = notes.find(n => n.id === activeNoteId);
        if (currentNote && notepadTextarea) {
            notepadTextarea.value = currentNote.content;
            activeNoteTitle.innerHTML = `Appunti <span class="note-page-suffix">${currentNote.title}</span>`;
        }
        return true;
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            handleLogin(emailInput.value, passwordInput.value);
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            currentUser = null;
            localStorage.removeItem('last_logged_user');
            location.reload(); // Reset to default state
        });
    }

    function updateUIForLoggedInUser() {
        if (currentUser) {
            loginForm.classList.add('hidden');
            loggedInView.classList.remove('hidden');
            loggedEmailDisplay.textContent = `Loggato come: ${currentUser.email}`;
            
            // Apply saved settings
            if (currentUser.settings.iconSize) {
                updateIconSize(currentUser.settings.iconSize);
            }
            
            // Load saved notes
            if (currentUser.notes) {
                notes = currentUser.notes;
                activeNoteId = currentUser.activeNoteId || 1;
                updateNotesUI();
                const currentNote = notes.find(n => n.id === activeNoteId);
                if (currentNote && notepadTextarea) {
                    notepadTextarea.value = currentNote.content;
                    activeNoteTitle.innerHTML = `Appunti <span class="note-page-suffix">${currentNote.title}</span>`;
                }
            }
        }
    }

    // Check for last logged user on startup
    const lastUserEmail = localStorage.getItem('last_logged_user');
    if (lastUserEmail) {
        currentUser = loadUserData(lastUserEmail);
        updateUIForLoggedInUser();
    } else {
        // Initialize default UI for guests
        updateNotesUI();
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const windowEl = e.target.closest('.window');
            if (windowEl) {
                windowEl.classList.add('hidden');
                windowEl.classList.remove('minimized');
                
                // Remove from dock if it was there
                const dockItem = document.querySelector(`.dock-item[data-target="${windowEl.id}"]`);
                if (dockItem) dockItem.remove();

                // If it's the PDF window, clear the iframe
                if (windowEl.id === 'pdf-window') {
                    const iframe = windowEl.querySelector('iframe');
                    if (iframe) iframe.src = '';
                }
            }
        });
    });

    minimizeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const windowEl = e.target.closest('.window');
            if (windowEl) {
                minimizeWindow(windowEl);
            }
        });
    });

    function minimizeWindow(windowEl) {
        windowEl.classList.add('minimized');
        windowEl.classList.add('hidden');
        
        const windowId = windowEl.id || `win-${Date.now()}`;
        if (!windowEl.id) windowEl.id = windowId;

        if (!document.querySelector(`.dock-item[data-target="${windowId}"]`)) {
            const dockItem = document.createElement('div');
            dockItem.className = 'dock-item';
            dockItem.setAttribute('data-target', windowId);
            
            let iconSrc = 'img/img_cartella.png';
            let title = 'Cartella';
            let lucideIcon = null;
            
            if (windowEl.classList.contains('pdf-window')) {
                iconSrc = 'img/icona_pdf.png';
                title = windowEl.querySelector('.window-title span').textContent;
            } else if (windowEl.getAttribute('data-icon')) {
                lucideIcon = windowEl.getAttribute('data-icon');
                title = windowEl.querySelector('.window-title span').textContent;
            } else {
                title = windowEl.querySelector('.window-title span').textContent;
            }
            
            if (lucideIcon) {
                dockItem.innerHTML = `
                    <div class="dock-icon-wrapper"><i data-lucide="${lucideIcon}"></i></div>
                    <span>${title}</span>
                `;
            } else {
                dockItem.innerHTML = `
                    <img src="${iconSrc}" alt="${title}">
                    <span>${title}</span>
                `;
            }
            
            dockItem.addEventListener('click', () => restoreWindow(windowEl));
            dock.appendChild(dockItem);
            if (lucideIcon) lucide.createIcons();
        }
    }

    function createPdfWindow(url, title) {
        const template = document.getElementById('pdf-window');
        const newWindow = template.cloneNode(true);
        const uniqueId = `pdf-${Date.now()}`;
        
        newWindow.id = uniqueId;
        newWindow.classList.remove('hidden');
        newWindow.querySelector('#pdf-window-title').id = `title-${uniqueId}`;
        newWindow.querySelector('#pdf-iframe').id = `iframe-${uniqueId}`;
        
        newWindow.querySelector(`#title-${uniqueId}`).textContent = title;
        const iframe = newWindow.querySelector(`#iframe-${uniqueId}`);
        iframe.src = url;

        // Apply theme to iframe when it loads
        iframe.addEventListener('load', () => {
            try {
                if (body.classList.contains('dark-mode')) {
                    iframe.contentDocument.body.classList.add('dark-mode');
                }
            } catch (e) {
                console.log("Cannot access iframe content for theme sync");
            }
        });
        
        // Re-attach event listeners for the new window
        newWindow.querySelector('.close-btn').addEventListener('click', () => {
            newWindow.remove();
            const dockItem = document.querySelector(`.dock-item[data-target="${uniqueId}"]`);
            if (dockItem) dockItem.remove();
        });
        
        newWindow.querySelector('.minimize-btn').addEventListener('click', () => {
            minimizeWindow(newWindow);
        });
        
        // Dragging for new window
        const header = newWindow.querySelector('.window-header');
        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls')) return;
            isDragging = true;
            currentWindow = newWindow;
            bringToFront(newWindow);
            const rect = currentWindow.getBoundingClientRect();
            offset.x = e.clientX - rect.left;
            offset.y = e.clientY - rect.top;
        });

        document.querySelector('.desktop-container').appendChild(newWindow);
        return newWindow;
    }

    function restoreWindow(windowEl) {
        windowEl.classList.remove('minimized');
        windowEl.classList.remove('hidden');
        bringToFront(windowEl);
        
        const dockItem = document.querySelector(`.dock-item[data-target="${windowEl.id}"]`);
        if (dockItem) {
            dockItem.remove();
        }
    }

    // Bring window to front
    function bringToFront(windowEl) {
        let maxZ = 100;
        windows.forEach(w => {
            const z = parseInt(window.getComputedStyle(w).zIndex) || 100;
            if (z > maxZ) maxZ = z;
        });
        windowEl.style.zIndex = maxZ + 1;
    }

    // Simple Dragging
    let isDragging = false;
    let currentWindow = null;
    let offset = { x: 0, y: 0 };

    document.querySelectorAll('.window-header').forEach(header => {
        header.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls')) return; // Don't drag if clicking controls
            
            isDragging = true;
            currentWindow = header.closest('.window');
            bringToFront(currentWindow);
            
            const rect = currentWindow.getBoundingClientRect();
            offset.x = e.clientX - rect.left;
            offset.y = e.clientY - rect.top;
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging && currentWindow) {
            const rect = currentWindow.getBoundingClientRect();
            let newLeft = e.clientX - offset.x;
            let newTop = e.clientY - offset.y;

            // Boundary checks: at least half of the window must remain inside the viewport
            const minLeft = -(rect.width / 2);
            const maxLeft = window.innerWidth - (rect.width / 2);
            const minTop = 0; // Keep the header visible at the top
            const maxTop = window.innerHeight - (rect.height / 2);

            if (newLeft < minLeft) newLeft = minLeft;
            if (newLeft > maxLeft) newLeft = maxLeft;
            if (newTop < minTop) newTop = minTop;
            if (newTop > maxTop) newTop = maxTop;

            currentWindow.style.left = `${newLeft}px`;
            currentWindow.style.top = `${newTop}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        currentWindow = null;
    });

    // Mobile Navigation Logic
    const mobileRecentBtn = document.getElementById('mobile-recent-btn');
    const mobileHomeBtn = document.getElementById('mobile-home-btn');
    const mobileBackBtn = document.getElementById('mobile-back-btn');
    const taskSwitcher = document.getElementById('task-switcher');
    const taskList = document.getElementById('task-list');

    let navigationStack = [];

    function updateTaskList() {
        if (!taskList) return;
        taskList.innerHTML = '';
        
        // Find all windows that are "open" (not destroyed and not explicitly closed)
        const allWindows = Array.from(document.querySelectorAll('.window'));
        allWindows.forEach(win => {
            // Skip the template and windows that are not "active" in the task switcher
            if (win.id === 'pdf-window') return;
            if (win.classList.contains('hidden') && !win.classList.contains('in-task-switcher')) return;
            if (win.classList.contains('app-killed')) return;

            const title = win.querySelector('.window-title span').textContent;
            let iconSrc = 'img/img_cartella.png';
            let isLucide = false;
            let lucideName = '';

            if (win.classList.contains('pdf-window')) {
                iconSrc = 'img/icona_pdf.png';
            } else if (win.getAttribute('data-icon')) {
                isLucide = true;
                lucideName = win.getAttribute('data-icon');
            }

            const item = document.createElement('div');
            item.className = 'task-item';
            
            let iconHtml = isLucide ? `<i data-lucide="${lucideName}"></i>` : `<img src="${iconSrc}" alt="">`;
            
            item.innerHTML = `
                <div class="task-item-header">
                    ${iconHtml}
                    <span>${title}</span>
                </div>
                <div class="task-preview-rect"></div>
            `;

            item.addEventListener('click', (e) => {
                if (!isSwiping) {
                    restoreWindow(win);
                    taskSwitcher.classList.add('hidden');
                }
            });

            // Swipe to close logic
            let startY = 0;
            let currentY = 0;
            let isSwiping = false;

            item.addEventListener('touchstart', (e) => {
                startY = e.touches[0].clientY;
                currentY = startY;
                item.classList.add('swiping');
                isSwiping = false;
            }, { passive: true });

            item.addEventListener('touchmove', (e) => {
                currentY = e.touches[0].clientY;
                const deltaY = currentY - startY;
                
                if (deltaY < -10) {
                    isSwiping = true;
                    item.style.transform = `translateY(${deltaY}px)`;
                    item.style.opacity = 1 - Math.abs(deltaY) / 300;
                }
            }, { passive: true });

            item.addEventListener('touchend', (e) => {
                item.classList.remove('swiping');
                const deltaY = currentY - startY;
                
                if (isSwiping && deltaY < -30) {
                    item.style.transition = 'all 0.3s ease-out';
                    item.style.transform = `translateY(-100vh)`;
                    item.style.opacity = '0';
                    
                    setTimeout(() => {
                        // Mark as killed and hide
                        win.classList.add('hidden');
                        win.classList.add('app-killed');
                        win.classList.remove('in-task-switcher');
                        
                        if (win.classList.contains('pdf-window')) {
                            win.remove();
                        }
                        updateTaskList();
                    }, 300);
                } else {
                    item.style.transform = '';
                    item.style.opacity = '';
                    setTimeout(() => { isSwiping = false; }, 50);
                }
            });

            taskList.appendChild(item);
        });
        lucide.createIcons();
    }

    if (mobileRecentBtn) {
        mobileRecentBtn.addEventListener('click', () => {
            if (taskSwitcher.classList.contains('hidden')) {
                updateTaskList();
                taskSwitcher.classList.remove('hidden');
            } else {
                taskSwitcher.classList.add('hidden');
            }
        });
    }

    if (mobileHomeBtn) {
        mobileHomeBtn.addEventListener('click', () => {
            // Hide everything and go to desktop
            document.querySelectorAll('.window').forEach(w => w.classList.add('hidden'));
            taskSwitcher.classList.add('hidden');
            navigationStack = [];
        });
    }

    if (mobileBackBtn) {
        mobileBackBtn.addEventListener('click', () => {
            if (!taskSwitcher.classList.contains('hidden')) {
                taskSwitcher.classList.add('hidden');
                return;
            }

            const activeWindows = Array.from(document.querySelectorAll('.window:not(.hidden)'));
            if (activeWindows.length > 0) {
                // Find top-most window
                const topWindow = activeWindows.reduce((prev, current) => {
                    return (parseInt(window.getComputedStyle(prev).zIndex) > parseInt(window.getComputedStyle(current).zIndex)) ? prev : current;
                });

                if (topWindow.classList.contains('pdf-window') && navigationStack.length > 0) {
                    // Go back to folder
                    const parentFolderId = navigationStack.pop();
                    topWindow.classList.add('hidden');
                    const parentFolder = document.getElementById(parentFolderId);
                    if (parentFolder) {
                        parentFolder.classList.remove('hidden');
                        bringToFront(parentFolder);
                    }
                } else {
                    // Just hide the window
                    topWindow.classList.add('hidden');
                }
            }
        });
    }

    // Background click to close folders on mobile
    document.querySelector('.desktop-container').addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && e.target.classList.contains('desktop-container')) {
            document.querySelectorAll('.window:not(.pdf-window)').forEach(w => w.classList.add('hidden'));
        }
    });

    // Update icon click to track navigation
    const originalIconClick = icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const type = icon.getAttribute('data-type');
            if (type === 'link' && window.innerWidth <= 768) {
                // Check if we are inside a folder
                const parentWindow = icon.closest('.window');
                if (parentWindow) {
                    navigationStack.push(parentWindow.id);
                    parentWindow.classList.add('hidden');
                }
            }
        });
    });

    // Initial Overlays Logic
    const cookieOverlay = document.getElementById('cookie-overlay');
    const cookieAcceptBtn = document.getElementById('cookie-accept-btn');
    const initialAccountOverlay = document.getElementById('initial-account-overlay');
    const initialAccountEmail = document.getElementById('initial-account-email');
    const initialAccountPassword = document.getElementById('initial-account-password');
    const initialAccountSubmitBtn = document.getElementById('initial-account-submit-btn');
    const initialAccountSkipBtn = document.getElementById('initial-account-skip-btn');

    function showInitialOverlays() {
        const lastUser = localStorage.getItem('last_logged_user');
        const cookiesAccepted = localStorage.getItem('cookies_accepted');

        // Se l'utente non è loggato, la richiesta cookie appare ad ogni refresh
        if (!lastUser) {
            cookieOverlay.classList.remove('hidden');
        } else {
            // Se l'utente è loggato, la scelta viene ricordata tramite localStorage
            if (!cookiesAccepted) {
                cookieOverlay.classList.remove('hidden');
            }
        }
    }

    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookies_accepted', 'true');
            cookieOverlay.classList.add('hidden');
            
            // After cookies, check if we need to show account overlay
            const lastUser = localStorage.getItem('last_logged_user');
            if (!lastUser) {
                initialAccountOverlay.classList.remove('hidden');
            }
        });
    }

    if (initialAccountSubmitBtn) {
        initialAccountSubmitBtn.addEventListener('click', () => {
            const success = handleLogin(initialAccountEmail.value, initialAccountPassword.value);
            if (success) {
                initialAccountOverlay.classList.add('hidden');
            }
        });
    }

    if (initialAccountSkipBtn) {
        initialAccountSkipBtn.addEventListener('click', () => {
            initialAccountOverlay.classList.add('hidden');
        });
    }

    // Trigger initial overlays
    showInitialOverlays();
});
