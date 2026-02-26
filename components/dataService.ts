import { scriptsData, ScriptFile } from './SalesScripts';
import { scaleData as initialScaleData } from './ScaleData';

export interface ScaleEntry {
    status: string;
    traffic: string;
    course: string;
    dates: string;
    city: string;
    venue: string;
    professor: string;
}

export interface SalesLink {
    id: string;
    category: 'registration' | 'payment';
    label: string;
    url: string;
}

const STORAGE_KEYS = {
    SCRIPTS: 'imperium_scripts',
    SCALE: 'imperium_scale',
    LINKS: 'imperium_links'
};

export const dataService = {
    // Scripts
    getScripts: (): ScriptFile[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.SCRIPTS);
        if (stored) return JSON.parse(stored);
        return scriptsData;
    },
    saveScript: (script: ScriptFile) => {
        const current = dataService.getScripts();
        const updated = [...current, script];
        localStorage.setItem(STORAGE_KEYS.SCRIPTS, JSON.stringify(updated));
        return updated;
    },

    // Scale
    getScale: (): ScaleEntry[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.SCALE);
        if (stored) return JSON.parse(stored);
        return initialScaleData;
    },
    saveScaleEntry: (entry: ScaleEntry) => {
        const current = dataService.getScale();
        const updated = [entry, ...current];
        localStorage.setItem(STORAGE_KEYS.SCALE, JSON.stringify(updated));
        return updated;
    },

    // Links
    getLinks: (): SalesLink[] => {
        const stored = localStorage.getItem(STORAGE_KEYS.LINKS);
        if (stored) return JSON.parse(stored);

        // Default initial links
        return [
            {
                id: '1',
                category: 'registration',
                label: 'Ficha de Inscrição (Formulário) - florianópolos',
                url: 'https://docs.google.com/forms/d/1hk2QlsTRTBkHwxXZ1PLyE8R6oIxn9nHPGmDOBkc_Ees/preview'
            },
            {
                id: '2',
                category: 'payment',
                label: 'Link de Pagamento (Hotmart) - Primeiro Lote',
                url: 'https://pay.hotmart.com/S104554315A?bid=1771712330808'
            }
        ];
    },
    saveLink: (link: SalesLink) => {
        const current = dataService.getLinks();
        const updated = [...current, link];
        localStorage.setItem(STORAGE_KEYS.LINKS, JSON.stringify(updated));
        return updated;
    }
};
