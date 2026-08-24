# AI Ozgeris — 100% копия инфографики из pngs

Сайт теперь показывает **точные макеты** без перерисовки — используется каждый PNG 1-в-1.

## Что сделано
- `index.html` — 7 секций, каждая = `pngs/Group 2672.png` … `Group 2678.png` в оригинальном качестве (1-в-1)
- Сохранена структура сайта: sticky-меню, якоря, footer, адаптив

## Открыть в VS Code
1. `File → Open Folder → ai ozgeris`
2. Правый клик `index.html` → Open with Live Server (или просто открыть файл в браузере)

## Залить на GitHub
```bash
cd "/Users/akbota/Desktop/ai ozgeris"
git init
git add index.html style.css script.js pngs README.md
git commit -m "feat: 100% pixel-perfect from PNGs"
git branch -M main
git remote add origin https://github.com/<user>/ai-ozgeris.git
git push -u origin main
```
Затем `Settings → Pages → Deploy from branch → main / root`.


