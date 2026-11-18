# Calcula tu Nómina

Pequeña aplicación web que calcula una nómina mensual a partir de los devengos y deducciones del trabajador: total devengado, Seguridad Social, IRPF y salario líquido.

Proyecto de práctica del curso de Desarrollo Web, hecho con **HTML, CSS y JavaScript**, sin librerías externas.

## Funcionalidades

- **Devengos**: salario base, plus de residencia, complemento consolidado, especialidad y SGM. Calcula el total devengado.
- **Seguridad Social automática**: se calcula sola a partir de la base de cotización, sin que el usuario tenga que meterla.
- **IRPF**: el usuario indica su porcentaje y se calcula el total deducido.
- **Total líquido**: muestra lo que se cobra finalmente (devengos − deducciones).
- **Tooltip de ayuda (?)** que explica cómo se calcula la Seguridad Social. Funciona con el ratón y con el teclado (`tabindex` y `aria-describedby`).
- **Modo claro / oscuro** con un botón. La elección se guarda en `localStorage` y se mantiene al recargar.
- **Validación**: el salario base es obligatorio y tiene un mínimo de 600 €. Si faltan datos, no se muestra el resultado.
- **Diseño responsive** con media queries para pantallas pequeñas.

## Cómo se calcula

| Concepto           | Cálculo                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Total devengado    | Suma de todos los campos de devengos                                                                                      |
| Base de cotización | Total devengado + prorrata de pagas extra (152,79 €) + prorrata de vacaciones (28,05 €)                                   |
| Seguridad Social   | Base de cotización × 6,50 % (contingencias comunes 4,70 % + desempleo 1,55 % + formación profesional 0,10 % + MEI 0,15 %) |
| IRPF               | Total devengado × % de IRPF indicado                                                                                      |
| Total deducido     | Seguridad Social + IRPF                                                                                                   |
| **Total líquido**  | Total devengado − Total deducido                                                                                          |

> Las prorratas son valores fijos de ejemplo. Es un proyecto didáctico, no sustituye a una nómina oficial.

## Tecnologías

- **HTML5**: formularios con `fieldset`, `legend`, `label` e `input` de tipo `number` con validación (`min`, `max`, `required`).
- **CSS3**: variables CSS, CSS Grid para las columnas de cada formulario, Flexbox para el layout general, tema claro/oscuro con `:root[data-tema="claro"]` y media queries.
- **JavaScript**: eventos `click` y `submit`, funciones reutilizables, `dataset` para el tema y `localStorage`.

## Estructura del proyecto

```
Ejemplo-NOMINA/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## Cómo usarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/migueljoel91/Ejemplo-NOMINA.git
   ```
2. Abre `index.html` en el navegador.
3. Rellena los devengos y pulsa **Calcular total devengos**.
4. Escribe tu % de IRPF y pulsa **Calcular total deducciones**.
5. Pulsa **TOTAL LÍQUIDO** para ver lo que cobras.


## Autor

Miguel Joel — [GitHub](https://github.com/migueljoel91)
