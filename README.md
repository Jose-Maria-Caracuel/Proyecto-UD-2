
# Hospital Técnico - Proyecto UD 2 (2025)

**Título:** Simulación de aplicación web para gestión hospitalaria

## URL despliegue
(Pegar aquí la URL de GitHub Pages una vez desplegado)

## Resumen
Sitio estático que simula una aplicación web para administrar un hospital. Contiene secciones con estilos en CSS puro, Sass (Vite) y Tailwind (CDN). Está pensado para desplegar en GitHub Pages desde la rama `main` y la carpeta raíz.

## Estructura del proyecto
- `index.html` — Página principal con enlaces a las secciones.
- `inicio.html`, `registro.html` — Inicio de sesión y registro (simulados).
- `guia_estilos.html` — Guía de estilos (paleta, tipografía, componentes).
- `css.css` — Estilos globales usados por la mayoría de páginas.
- `imagenes/` — Imágenes utilizadas por el sitio.
- `pages/Prescripciones/` — Sección desarrollada con CSS puro:
  - `lista.html` — Lista de citas
  - `detalles_L.html` — Detalle de cita / Registro de prescripción
  - `Historia.html` — Historia clínica
  - `Búsqueda.html` — Búsqueda de pacientes
- `pages/enfermeria-sass-vite/` — Sección con Sass (desarrollo con Vite):
  - `index.html`, `mapa_C.html`, `hoja_medica.html`
  - `enfermeria.scss` — archivo fuente Sass (si lo necesita compilar localmente)
  - `package.json`, `src/` — configuración de desarrollo (Vite/Sass). Esta carpeta puede requerir un build para generar assets si se usa localmente.
- `pages/Urgencias/` — Sección utilizando Tailwind vía CDN:
  - `index.html`, `registro_urgencias.html`, `triaje.html`

## Notas para el profesor
- Navegar desde `index.html`.
- Rutas recomendadas:
  - Prescripciones: `pages/Prescripciones/lista.html` → `detalles_L.html` → `Historia.html` → `Búsqueda.html`.
  - Enfermería (Sass/Vite): `pages/enfermeria-sass-vite/index.html`, `mapa_C.html`, `hoja_medica.html`.
  - Urgencias (Tailwind CDN): `pages/Urgencias/index.html`, `registro_urgencias.html`, `triaje.html`.

- Profesor a invitar al repositorio: `jubevaz228@g.educaand.es`

## Cómo desplegar en GitHub Pages (recomendado)

1. Crear un repositorio nuevo en GitHub (cuenta `g.educaand.es`).
2. Subir el proyecto a la rama `main`.
3. En el repositorio, ir a `Settings` → `Pages` → Source: `main` branch, folder: `/ (root)` → Save.
4. Copiar la URL que GitHub genere y pegarla en la sección "URL despliegue" de este archivo.

Opción alternativa (publicar con `gh-pages`):

```powershell
# desde la raíz del proyecto (PowerShell)
npm install --save-dev gh-pages
git add .
git commit -m "Preparar despliegue"
git push origin main
npx gh-pages -d .
```

Nota: Si la carpeta `pages/enfermeria-sass-vite` usa Vite, compila esa sección con `npm install` y `npm run build` dentro de esa carpeta antes de desplegar si quieres los assets compilados.

## Instrucciones rápidas para compilar Sass (enfermeria)

Si quieres compilar `enfermeria.scss` localmente (opcional):

```powershell
cd pages\enfermeria-sass-vite
npm install
npm run build
```

Esto generará los CSS compilados en `dist/` (según `package.json` de esa carpeta).

## Buenas prácticas y mejoras recomendadas
- Cambiar inputs de contraseña a `type="password"` en `inicio.html` y `registro.html`.
- Añadir `alt` a todas las imágenes en `imagenes/` y atributos `aria-*` para accesibilidad.
- Si prefieres no depender de Tailwind CDN, integrar Tailwind en un workflow (PostCSS/Vite) y hacer build para producción.

## Entrega y enlaces
- URL del repositorio: (pegar aquí la URL del repo GitHub)
- URL de despliegue en GitHub Pages: (pegar aquí la URL una vez habilitada)
- Profesor a invitar: `jubevaz228@g.educaand.es`

---
Si quieres, puedo hacer lo siguiente por ti:
- Preparar un commit con los cambios locales (correcciones de rutas) y mostrar los comandos `git` para subirlos.
- Generar los pasos exactos para desplegar en GitHub Pages desde PowerShell.
- Ayudarte a compilar la sección de enfermería con `npm`/Vite y preparar `dist/` para desplegar.

Indícame qué prefieres que haga a continuación: crear commit local y mostrar comandos, o generar instrucciones de despliegue.
