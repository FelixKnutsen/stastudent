import glob, subprocess

broken_str = r"""if (class_exists('\\Elementor\\Plugin') && (\\Elementor\\Plugin::\->editor->is_edit_mode() || \\Elementor\\Plugin::\->preview->is_preview_mode() || \\Elementor\\Plugin::\->db->is_built_with_elementor(get_the_ID()))) {
    include STA_THEME_PATH . '/page.php';
    return;
}"""

clean_str = """if (class_exists('\\Elementor\\Plugin') && (\\Elementor\\Plugin::$instance->editor->is_edit_mode() || \\Elementor\\Plugin::$instance->preview->is_preview_mode() || \\Elementor\\Plugin::$instance->db->is_built_with_elementor(get_the_ID()))) {
    include STA_THEME_PATH . '/page.php';
    return;
}"""

for f in glob.glob('sta-wordpress/sta-theme/page-*.php'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    if broken_str in c:
        c = c.replace(broken_str, clean_str)
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print('Fixed', f)

# Verify
errors = 0
for f in glob.glob('sta-wordpress/sta-theme/*.php') + glob.glob('sta-wordpress/sta-theme/inc/*.php'):
    res = subprocess.run(['php', '-l', f], capture_output=True, text=True)
    if res.returncode != 0:
        print('ERROR in', f, res.stderr or res.stdout)
        errors += 1

if errors == 0:
    print('ALL PHP FILES SYNTAX CLEAN!')
