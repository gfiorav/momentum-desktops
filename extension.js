
const St = imports.gi.St;
const Main = imports.ui.main;
const Util = imports.misc.util;

let button;

/**
 * Initializes the extension
 */
function init() { // eslint-disable-line no-unused-vars
    button = new St.Bin({
        style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        x_fill: true,
        y_fill: false,
        track_hover: true,
    });

    let icon = new St.Icon({
        icon_name: 'system-run-symbolic',
        style_class: 'system-status-icon',
    });

    button.set_child(icon);
    button.connect('button-press-event', changeWallpaper);
}

/**
 * Enables extension
 */
function enable() { // eslint-disable-line no-unused-vars
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

/**
 * Disables extension
 */
function disable() { // eslint-disable-line no-unused-vars
    Main.panel._rightBox.remove_child(button);
}

/**
 * Changes wallpaper
 */
function changeWallpaper() {
    Util.spawn(
        [
            '/usr/bin/gsettings',
            'set',
            'org.gnome.desktop.background',
            'picture-uri',
            'file:///home/guido/Pictures/backgrounds/background.jpg',
        ]);
}

/**
 * Creates a unique token to encrypt/decrypt user credentials for storage
 */
function initializeSecret() {
  
}

