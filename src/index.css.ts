import {Styles} from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-scom-markdown-editor', {
    overflow: 'hidden',
    $nest: {
        'i-panel.container': {
            width: Theme.layout.container.width,
            maxWidth: Theme.layout.container.maxWidth,
            overflow: Theme.layout.container.overflow,
            textAlign: (Theme.layout.container.textAlign as any),
            margin: '0 auto'
        },
        'a': {
            display: 'initial'
        },
        '.toastui-editor-dropdown-toolbar': {
            maxWidth: '100%',
            flexWrap: 'wrap',
            height: 'auto'
        },
        '.toastui-editor-mode-switch': {
            background: 'transparent'
        }
    }
});
