# 📚 Tutorial Completo de React - Lo Más Importante

## 🎯 ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario. Piensa en React como un sistema de bloques de LEGO: creas pequeñas piezas (componentes) que puedes combinar para construir aplicaciones completas.

**Ventajas principales:**
- ✅ Reutilización de código (componentes)
- ✅ Actualizaciones eficientes del DOM
- ✅ Fácil mantenimiento
- ✅ Gran comunidad y ecosistema

---

## 📦 1. COMPONENTES - El Corazón de React

### ¿Qué es un Componente?
Un componente es una pieza independiente y reutilizable de tu interfaz. Es como una función que retorna HTML.

**En tu proyecto:**
- `Hero.jsx` = Sección completa del inicio
- `HeroSlider.jsx` = Solo el slider de contenido
- `OfferCard.jsx` = Solo la tarjeta de oferta
- `Navbar.jsx` = Barra de navegación
- `Footer.jsx` = Pie de página

### Tipos de Componentes

**1. Componente Funcional (moderno - el que usas):**
```jsx
export default function MiComponente() {
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}
```

**2. Componente de Clase (antiguo):**
```jsx
class MiComponente extends React.Component {
  render() {
    return <div>Hola Mundo</div>;
  }
}
```

💡 **Usa siempre componentes funcionales** - Son más modernos, simples y potentes.

### Anatomía de un Componente
```jsx
// 1. Importaciones
import { useState, useEffect } from 'react';
import OtroComponente from './OtroComponente';

// 2. Definición del componente
export default function MiComponente() {
  // 3. Lógica del componente (hooks, funciones, etc.)
  const [count, setCount] = useState(0);
  
  // 4. Retorno JSX (lo que se ve en pantalla)
  return (
    <div>
      <h1>Contador: {count}</h1>
      <OtroComponente />
    </div>
  );
}
```

---

## � 2. JSX - JavaScript + HTML

JSX es una sintaxis que mezcla JavaScript con HTML. Parece HTML pero tiene el poder de JavaScript.

### Reglas Importantes de JSX

**1. Un solo elemento padre:**
```jsx
// ❌ MAL - Dos elementos hermanos sin padre
return (
  <h1>Título</h1>
  <p>Párrafo</p>
);

// ✅ BIEN - Todo dentro de un div
return (
  <div>
    <h1>Título</h1>
    <p>Párrafo</p>
  </div>
);

// ✅ MEJOR - Fragment (<>) no agrega un div extra al DOM
return (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
```

**2. className en lugar de class:**
```jsx
// ❌ MAL
<div class="container">

// ✅ BIEN
<div className="container">
```

**3. Cerrar todas las etiquetas:**
```jsx
// ❌ MAL
<img src="foto.jpg">
<input type="text">

// ✅ BIEN
<img src="foto.jpg" />
<input type="text" />
```

**4. Expresiones JavaScript dentro de {}:**
```jsx
const nombre = "Ricardo";
const edad = 25;

return (
  <div>
    <h1>Hola {nombre}</h1>
    <p>Tienes {edad} años</p>
    <p>En 5 años tendrás {edad + 5}</p>
  </div>
);
```

**5. Renderizado condicional:**
```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? (
      <h1>Bienvenido de vuelta</h1>
    ) : (
      <h1>Por favor inicia sesión</h1>
    )}
  </div>
);
```

**6. Renderizar listas (map):**
```jsx
const frutas = ['Manzana', 'Banana', 'Naranja'];

return (
  <ul>
    {frutas.map((fruta, index) => (
      <li key={index}>{fruta}</li>
    ))}
  </ul>
);
```

💡 **Siempre usa `key` en listas** - Ayuda a React a identificar qué elementos cambiaron.

---

## 🔄 3. HOOKS - Superpoderes para Componentes Funcionales

Los Hooks son funciones especiales que te permiten usar estado y otras características de React en componentes funcionales.

**Reglas de los Hooks:**
1. ✅ Solo se pueden usar en componentes funcionales
2. ✅ Solo se pueden llamar en el nivel superior (no dentro de if, loops, etc.)
3. ✅ Los nombres siempre empiezan con "use"

---

### 🎨 useState - Manejo de Estado

### 🎨 useState - Manejo de Estado

El estado es información que tu componente "recuerda". Cuando el estado cambia, React re-renderiza el componente.

**Sintaxis:**
```jsx
const [estado, setEstado] = useState(valorInicial);
// estado = valor actual
// setEstado = función para cambiar el valor
// valorInicial = valor cuando el componente se crea
```

**Ejemplos prácticos:**

**1. Contador simple:**
```jsx
function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
      <button onClick={() => setCount(0)}>
        Resetear
      </button>
    </div>
  );
}
```

**2. Mostrar/Ocultar (toggle):**
```jsx
function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar' : 'Abrir'} Menú
      </button>
      
      {isOpen && (
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      )}
    </div>
  );
}
```

**3. Formulario:**
```jsx
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre, 'Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

**4. Estado con objetos:**
```jsx
function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: 'Ricardo',
    edad: 25,
    ciudad: 'Santiago'
  });

  const cumplirAnios = () => {
    setUsuario({
      ...usuario,  // Copia todo lo anterior
      edad: usuario.edad + 1  // Solo cambia edad
    });
  };

  return (
    <div>
      <p>{usuario.nombre} - {usuario.edad} años</p>
      <button onClick={cumplirAnios}>Cumpleaños</button>
    </div>
  );
}
```

**5. Estado con arrays:**
```jsx
function ListaTareas() {
  const [tareas, setTareas] = useState(['Estudiar React', 'Hacer ejercicio']);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**💡 Importante: Actualización del estado**

```jsx
// ❌ MAL - Modifica el estado directamente
const [count, setCount] = useState(0);
count = count + 1;  // ❌ No funciona

// ✅ BIEN - Usa la función set
setCount(count + 1);

// ✅ MEJOR - Usa función callback cuando dependes del valor anterior
setCount(prev => prev + 1);
```

---

### ⚡ useEffect - Efectos Secundarios
### ⚡ useEffect - Efectos Secundarios

useEffect te permite ejecutar código cuando:
- El componente se monta (aparece en pantalla)
- Una variable específica cambia
- El componente se desmonta (desaparece)

**Sintaxis básica:**
```jsx
useEffect(() => {
  // Código que se ejecuta
  
  return () => {
    // Código de limpieza (opcional)
  };
}, [dependencias]);
```

**3 Patrones Principales:**

**1. Ejecutar una sola vez (al montar):**
```jsx
useEffect(() => {
  console.log('Componente montado');
  // Llamadas a API, suscripciones, etc.
}, []); // Array vacío = solo al montar
```

**Ejemplo práctico - Cargar datos:**
```jsx
function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a API cuando el componente se monta
    fetch('https://api.ejemplo.com/usuarios')
      .then(res => res.json())
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      });
  }, []); // Solo se ejecuta una vez

  if (loading) return <p>Cargando...</p>;

  return (
    <ul>
      {usuarios.map(user => (
        <li key={user.id}>{user.nombre}</li>
      ))}
    </ul>
  );
}
```

**2. Ejecutar cuando cambia una variable:**
```jsx
useEffect(() => {
  console.log('sliderIndex cambió a:', sliderIndex);
}, [sliderIndex]); // Se ejecuta cada vez que sliderIndex cambia
```

**Ejemplo práctico - Sincronizar con localStorage:**
```jsx
function FormularioGuardado() {
  const [texto, setTexto] = useState('');

  // Cargar del localStorage al montar
  useEffect(() => {
    const guardado = localStorage.getItem('texto');
    if (guardado) setTexto(guardado);
  }, []);

  // Guardar en localStorage cada vez que texto cambia
  useEffect(() => {
    localStorage.setItem('texto', texto);
  }, [texto]);

  return (
    <input
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Tu texto se guarda automáticamente"
    />
  );
}
```

**3. Ejecutar en cada render:**
```jsx
useEffect(() => {
  console.log('Componente renderizado');
}); // Sin array = cada render
```

⚠️ **Usa con cuidado** - Puede causar renders infinitos si no se controla.

**Cleanup (Limpieza):**

El cleanup es crucial cuando trabajas con:
- Temporizadores (setInterval, setTimeout)
- Suscripciones (WebSockets, eventos)
- Escuchadores de eventos

```jsx
function Reloj() {
  const [tiempo, setTiempo] = useState(new Date());

  useEffect(() => {
    // Crear intervalo
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);

    // Cleanup: limpiar intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalo);
      console.log('Reloj detenido');
    };
  }, []);

  return <h1>{tiempo.toLocaleTimeString()}</h1>;
}
```

**Ejemplo completo - Sistema de notificaciones:**
```jsx
function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([]);

  useEffect(() => {
    // Función que maneja nuevas notificaciones
    const handleNuevaNotificacion = (evento) => {
      setNotificaciones(prev => [...prev, evento.detail]);
    };

    // Agregar escuchador
    window.addEventListener('nueva-notificacion', handleNuevaNotificacion);

    // Cleanup: remover escuchador
    return () => {
      window.removeEventListener('nueva-notificacion', handleNuevaNotificacion);
    };
  }, []);

  return (
    <div>
      {notificaciones.map((notif, i) => (
        <div key={i}>{notif.mensaje}</div>
      ))}
    </div>
  );
}
```

**Múltiples dependencias:**
```jsx
function BuscadorProductos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    // Se ejecuta cuando busqueda O categoria cambian
    fetch(`/api/productos?q=${busqueda}&cat=${categoria}`)
      .then(res => res.json())
      .then(data => setResultados(data));
  }, [busqueda, categoria]); // Se ejecuta si cualquiera cambia

  return (
    <div>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="todos">Todos</option>
        <option value="ropa">Ropa</option>
        <option value="tech">Tecnología</option>
      </select>
      {/* Mostrar resultados */}
    </div>
  );
}
```

---

## 🔗 4. PROPS - Pasar Datos entre Componentes

Props (propiedades) son la forma de pasar datos de un componente padre a un componente hijo.

**Concepto básico:**
```jsx
// Componente Hijo
function Saludo(props) {
  return <h1>Hola {props.nombre}!</h1>;
}

// Componente Padre
function App() {
  return (
    <div>
      <Saludo nombre="Ricardo" />
      <Saludo nombre="María" />
    </div>
  );
}
```

**Destructuring de props (más limpio):**
```jsx
// ✅ MEJOR forma
function Saludo({ nombre, edad }) {
  return (
    <div>
      <h1>Hola {nombre}!</h1>
      <p>Tienes {edad} años</p>
    </div>
  );
}

// Uso
<Saludo nombre="Ricardo" edad={25} />
```

**Pasar funciones como props:**
```jsx
function BotonContador({ onIncrement, valor }) {
  return (
    <button onClick={onIncrement}>
      Clicks: {valor}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BotonContador
      valor={count}
      onIncrement={() => setCount(count + 1)}
    />
  );
}
```

**Props con valores por defecto:**
```jsx
function Tarjeta({ titulo = 'Sin título', descripcion = 'Sin descripción' }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

// Si no pasas props, usa los valores por defecto
<Tarjeta />
<Tarjeta titulo="Mi título" descripcion="Mi descripción" />
```

**Props.children - Contenido anidado:**
```jsx
function Contenedor({ children }) {
  return (
    <div className="contenedor-estilizado">
      {children}
    </div>
  );
}

// Uso
<Contenedor>
  <h1>Título</h1>
  <p>Este contenido se pasa como children</p>
  <button>Click aquí</button>
</Contenedor>
```

**Ejemplo completo - Tarjeta de producto:**
```jsx
function ProductoCard({ nombre, precio, imagen, onAgregarCarrito }) {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">${precio}</p>
      <button onClick={() => onAgregarCarrito(nombre)}>
        Agregar al carrito
      </button>
    </div>
  );
}

function Tienda() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto} agregado al carrito`);
  };

  const productos = [
    { id: 1, nombre: 'Laptop', precio: 999, imagen: '/laptop.jpg' },
    { id: 2, nombre: 'Mouse', precio: 29, imagen: '/mouse.jpg' }
  ];

  return (
    <div>
      <h2>Carrito: {carrito.length} productos</h2>
      <div className="productos-grid">
        {productos.map(prod => (
          <ProductoCard
            key={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            imagen={prod.imagen}
            onAgregarCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
}
```

💡 **Reglas de Props:**
1. ✅ Son de solo lectura (no se pueden modificar en el hijo)
2. ✅ Fluyen de arriba hacia abajo (padre → hijo)
3. ✅ Puedes pasar cualquier tipo de dato (strings, numbers, objects, functions, JSX)

---

## 🎣 5. OTROS HOOKS IMPORTANTES

### useRef - Referencias a elementos del DOM

Permite acceder directamente a un elemento del DOM sin causar re-renders.

**Casos de uso:**
- Enfocar inputs
- Medir tamaño de elementos
- Mantener valores que no deben causar re-render

```jsx
function FormularioConFoco() {
  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={enfocarInput}>Enfocar input</button>
    </div>
  );
}
```

**Diferencia entre useState y useRef:**
```jsx
function Ejemplo() {
  const [renderCount, setRenderCount] = useState(0); // Causa re-render
  const clickCount = useRef(0); // NO causa re-render

  const handleClick = () => {
    clickCount.current += 1;
    console.log('Clicks:', clickCount.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Click (no re-render)</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Forzar render
      </button>
      <p>Renders: {renderCount}</p>
      <p>Clicks: {clickCount.current}</p>
    </div>
  );
}
```

### useContext - Estado Global

Permite compartir datos entre componentes sin pasar props manualmente por cada nivel.

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Crear contexto
const TemaContext = createContext();

// 2. Proveedor del contexto
function App() {
  const [tema, setTema] = useState('claro');

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <Navbar />
      <Contenido />
    </TemaContext.Provider>
  );
}

// 3. Consumir el contexto en cualquier hijo
function Navbar() {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <nav className={tema}>
      <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
        Cambiar tema
      </button>
    </nav>
  );
}

function Contenido() {
  const { tema } = useContext(TemaContext);
  
  return <div className={tema}>Contenido con tema {tema}</div>;
}
```

### useMemo y useCallback - Optimización

**useMemo** - Memoriza valores calculados:
```jsx
function ListaProductos({ productos, filtro }) {
  // Solo recalcula cuando productos o filtro cambian
  const productosFiltrados = useMemo(() => {
    console.log('Filtrando productos...');
    return productos.filter(p => p.categoria === filtro);
  }, [productos, filtro]);

  return (
    <ul>
      {productosFiltrados.map(p => (
        <li key={p.id}>{p.nombre}</li>
      ))}
    </ul>
  );
}
```

**useCallback** - Memoriza funciones:
```jsx
function Padre() {
  const [count, setCount] = useState(0);

  // Esta función se recrea en cada render
  const handleClick = () => {
    console.log('Click');
  };

  // Esta función se memoriza
  const handleClickMemo = useCallback(() => {
    console.log('Click optimizado');
  }, []); // Solo se crea una vez

  return (
    <Hijo onClick={handleClickMemo} />
  );
}
```

---

## 🎨 6. EVENTOS EN REACT

**Sintaxis de eventos:**
```jsx
// HTML tradicional
<button onclick="handleClick()">Click</button>

// React
<button onClick={handleClick}>Click</button>
```

**Eventos comunes:**
```jsx
function Eventos() {
  return (
    <div>
      {/* Click */}
      <button onClick={() => console.log('Click')}>Click</button>

      {/* Double Click */}
      <button onDoubleClick={() => console.log('Doble click')}>
        Doble Click
      </button>

      {/* Mouse Enter/Leave */}
      <div
        onMouseEnter={() => console.log('Mouse entró')}
        onMouseLeave={() => console.log('Mouse salió')}
      >
        Pasa el mouse aquí
      </div>

      {/* Input Change */}
      <input onChange={(e) => console.log(e.target.value)} />

      {/* Form Submit */}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Formulario enviado');
      }}>
        <button type="submit">Enviar</button>
      </form>

      {/* Keyboard */}
      <input
        onKeyDown={(e) => console.log('Tecla presionada:', e.key)}
        onKeyUp={(e) => console.log('Tecla soltada:', e.key)}
      />

      {/* Focus/Blur */}
      <input
        onFocus={() => console.log('Input enfocado')}
        onBlur={() => console.log('Input desenfocado')}
      />
    </div>
  );
}
```

**Evento con parámetros:**
```jsx
function ListaBotones() {
  const handleClick = (id, nombre) => {
    console.log(`Botón ${id}: ${nombre} clickeado`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1, 'Inicio')}>Inicio</button>
      <button onClick={() => handleClick(2, 'About')}>About</button>
    </div>
  );
}
```

---

## 🎯 7. EJEMPLO COMPLETO DEL PROYECTO - Slider Explicado

## 🎯 7. EJEMPLO COMPLETO DEL PROYECTO - Slider Explicado

### HeroSlider.jsx - Sistema de Progreso Paso a Paso

```jsx
import { useState, useEffect } from 'react';

export default function HeroSlider() {
  // 1. DATOS: Array con información de cada slide
  const sliders = [
    {
      id: 'general',
      h1: 'Desarrollo Ágil de Soluciones',
      roles: ['Desarrollo Ágil', 'Apps Empresariales'],
      proposals: ['Desarrollo soluciones web ágiles...']
    },
    // ... más slides
  ];

  // 2. ESTADO: Variables que el componente recuerda
  const [sliderIndex, setSliderIndex] = useState(0);  // Slide actual (0, 1, 2)
  const [progress, setProgress] = useState(0);        // Progreso 0-100%
  const [isHovered, setIsHovered] = useState(false);  // ¿Mouse encima?
  const [isTransitioning, setIsTransitioning] = useState(false);  // ¿Cambiando?

  // 3. EFECTO: Resetear progreso cuando cambia el slide
  useEffect(() => {
    setProgress(0);  // Volver a 0%
  }, [sliderIndex]);  // Se ejecuta cada vez que sliderIndex cambia

  // 4. EFECTO: Sistema de temporizador para avanzar slides
  useEffect(() => {
    // Si está en hover, pausar (no hacer nada)
    if (isHovered) return;

    let hasChangedSlider = false;

    // Crear intervalo que corre cada 50ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        const SLIDER_DURATION = 5000;  // 5 segundos
        const UPDATE_INTERVAL = 50;     // 50 milisegundos
        const increment = (UPDATE_INTERVAL / SLIDER_DURATION) * 100;  // 1%
        const newProgress = prev + increment;

        // Si llegamos a 100%
        if (newProgress >= 100 && !hasChangedSlider) {
          hasChangedSlider = true;
          clearInterval(interval);
          
          // Comenzar transición
          setIsTransitioning(true);
          
          // Después de 300ms, cambiar al siguiente slide
          setTimeout(() => {
            setSliderIndex((prevIndex) => (prevIndex + 1) % sliders.length);
            setIsTransitioning(false);
          }, 300);
          
          return 100;
        }
        return newProgress;
      });
    }, 50);

    // CLEANUP: Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [isHovered, sliderIndex]);  // Se reinicia si cambia hover o slide

  // 5. RENDER: Lo que se muestra en pantalla
  return (
    <div>
      {/* Contenido del slide */}
      <h1>{sliders[sliderIndex].h1}</h1>
      
      {/* Barra de progreso */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sliders.map((_, index) => (
          <div key={index} style={{
            width: index === sliderIndex ? `${progress}%` : '0%'
          }} />
        ))}
      </div>
    </div>
  );
}
```

**Flujo de ejecución:**

```
INICIO
  ↓
Estado inicial:
- sliderIndex = 0
- progress = 0
- isHovered = false
  ↓
useEffect #1 detecta sliderIndex
  ↓
setProgress(0) → Asegura que comienza en 0%
  ↓
useEffect #2 detecta que NO está en hover
  ↓
Crea setInterval que corre cada 50ms
  ↓
Cada 50ms:
- progress incrementa 1%
- 0% → 1% → 2% → ... → 100%
  ↓
progress llega a 100%
  ↓
1. clearInterval (detiene el timer)
2. setIsTransitioning(true) → Muestra animación
3. setTimeout de 300ms
  ↓
Después de 300ms:
- setSliderIndex(1) → Pasa al siguiente slide
- setIsTransitioning(false)
  ↓
useEffect #1 detecta nuevo sliderIndex
  ↓
setProgress(0) → Reset
  ↓
CICLO SE REPITE
```

**Interacción con Hover:**

```
Usuario pone mouse encima de los indicadores
  ↓
onMouseEnter dispara
  ↓
setIsHovered(true)
  ↓
useEffect #2 detecta cambio en isHovered
  ↓
if (isHovered) return → PAUSA TODO
  ↓
progress se congela en su valor actual
  ↓
Usuario quita el mouse
  ↓
onMouseLeave dispara
  ↓
setIsHovered(false)
  ↓
useEffect #2 detecta cambio
  ↓
Continúa desde donde quedó (no resetea progress)
```

---

## 🏗️ 8. ARQUITECTURA DE COMPONENTES

### Composición de Componentes

En tu proyecto, `Hero.jsx` es un ejemplo perfecto de composición:

```jsx
// Hero.jsx (Componente Padre/Contenedor)
import HeroSlider from './HeroSlider';
import OfferCard from './OfferCard';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background y efectos visuales */}
      <div className="background-effects">
        {/* Gradientes, patrones, etc. */}
      </div>

      {/* Contenedor principal */}
      <div className="container">
        <div className="grid">
          {/* Componente hijo #1 */}
          <HeroSlider />
          
          {/* Componente hijo #2 */}
          <OfferCard />
        </div>
      </div>
    </section>
  );
}
```

**Ventajas de esta arquitectura:**

1. **Separación de responsabilidades:**
   - `Hero.jsx` → Layout y estructura
   - `HeroSlider.jsx` → Lógica del slider
   - `OfferCard.jsx` → Tarjeta de oferta

2. **Reutilización:**
   - `OfferCard` se puede usar en otras páginas
   - `HeroSlider` se puede modificar sin tocar `Hero`

3. **Mantenibilidad:**
   - Más fácil encontrar y arreglar bugs
   - Cada componente tiene un propósito claro

4. **Testing:**
   - Puedes probar cada componente de forma independiente

### Patrón de Componentes Presentacionales vs Contenedores

**Componentes Presentacionales (Presentational):**
- Solo se encargan de cómo se ven las cosas
- Reciben datos via props
- No tienen estado propio (o muy poco)

```jsx
// OfferCard.jsx - Presentacional
export default function OfferCard() {
  return (
    <div className="offer-card">
      {/* Solo JSX y estilos */}
    </div>
  );
}
```

**Componentes Contenedores (Container):**
- Manejan la lógica y el estado
- Pasan datos a componentes presentacionales
- Se conectan con APIs, contextos, etc.

```jsx
// HeroSlider.jsx - Contenedor
export default function HeroSlider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  // ... lógica compleja ...
  
  return (
    <div>
      {/* Renderiza basado en el estado */}
    </div>
  );
}
```

---

## 🎨 9. ESTILOS EN REACT

### Tailwind CSS (lo que usas)

**Ventajas:**
- ✅ Utility-first: clases que hacen una cosa
- ✅ No hay conflictos de nombres
- ✅ Responsive design fácil
- ✅ Purge CSS automático

```jsx
function Boton() {
  return (
    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
      Click
    </button>
  );
}
```

**Clases condicionales:**
```jsx
function Alerta({ tipo }) {
  const colorClases = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800'
  };

  return (
    <div className={`p-4 rounded-lg ${colorClases[tipo]}`}>
      Mensaje de alerta
    </div>
  );
}
```

**Dark mode:**
```jsx
function Card() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      Contenido que se adapta al tema
    </div>
  );
}
```

### Otras formas de estilizar

**1. CSS Modules:**
```jsx
// Button.module.css
.button {
  padding: 1rem;
  background: blue;
}

// Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click</button>;
}
```

**2. Styled Components:**
```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem;
  background: ${props => props.primary ? 'blue' : 'gray'};
`;

<StyledButton primary>Click</StyledButton>
```

**3. Inline styles:**
```jsx
function Box() {
  const boxStyle = {
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '8px'
  };

  return <div style={boxStyle}>Contenido</div>;
}
```

---

## 🚀 10. MEJORES PRÁCTICAS

```jsx
// 1. ESTADO: Guardamos el progreso actual (0-100%)
const [progress, setProgress] = useState(0);
const [isHovered, setIsHovered] = useState(false);

// 2. EFECTO: Incrementa el progreso cada 50ms
useEffect(() => {
  if (isHovered) return; // Si está en hover, no hace nada

  const interval = setInterval(() => {
    setProgress((prev) => {
      const newProgress = prev + 1; // Incrementa 1%
      
      if (newProgress >= 100) {
        // Cambia al siguiente slide
        clearInterval(interval);
        return 100;
      }
      return newProgress;
    });
  }, 50); // Cada 50 milisegundos

  return () => clearInterval(interval); // Limpieza
}, [isHovered, sliderIndex]); // Se reinicia si cambia hover o slide
```

---

## 🎨 Cómo Funciona el Sistema de Slides

### Paso a Paso:

1. **Inicio:**
   - `sliderIndex = 0` (primer slide)
   - `progress = 0` (barra vacía)

2. **useEffect se activa:**
   - Crea un intervalo que corre cada 50ms
   - Incrementa `progress` en 1% cada vez
   - Cuando `progress` llega a 100%, cambia al siguiente slide

3. **Cambio de Slide:**
   - `setSliderIndex(1)` → pasa al slide 2
   - Esto dispara otro useEffect que resetea `progress = 0`
   - El ciclo se repite

4. **Interacción con Hover:**
   - Mouse entra → `setIsHovered(true)`
   - useEffect detecta el cambio y NO incrementa progress
   - Mouse sale → `setIsHovered(false)`
   - useEffect continúa desde donde quedó

---

## 🔧 Comunicación entre Componentes

### Importar y Usar un Componente:

**Hero.jsx (Componente Padre):**
```jsx
import HeroSlider from './HeroSlider';
import OfferCard from './OfferCard';

export default function Hero() {
  return (
    <section>
      <HeroSlider />  {/* Componente hijo 1 */}
      <OfferCard />   {/* Componente hijo 2 */}
    </section>
  );
}
```

**Resultado:** Hero.jsx orquesta dos componentes independientes sin tener que copiar todo su código.

---

## 💡 Patrón de Limpieza (Cleanup)

### ¿Por qué hacer cleanup?

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    // Código que corre repetidamente
  }, 1000);

  // CLEANUP: Importante para evitar fugas de memoria
  return () => clearInterval(interval);
}, []);
```

**Sin cleanup:** Si el componente se desmonta, el intervalo sigue corriendo en memoria = ❌
**Con cleanup:** Al desmontar, React ejecuta el return y limpia el intervalo = ✅

---

## 🎯 Ejemplo Completo: Contador Simple

```jsx
import { useState, useEffect } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Incrementa el contador cada segundo si isRunning = true
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pausar' : 'Continuar'}
      </button>
      <button onClick={() => setCount(0)}>
        Resetear
      </button>
    </div>
  );
}
```

---

## 📝 Reglas Importantes

1. **Hooks solo en el nivel superior:**
   ```jsx
   // ✅ BIEN
   function Componente() {
     const [state, setState] = useState(0);
   }

   // ❌ MAL
   function Componente() {
     if (condicion) {
       const [state, setState] = useState(0); // ❌
     }
   }
   ```

2. **Actualizar estado con función callback cuando dependes del valor anterior:**
   ```jsx
   // ✅ BIEN
   setCount(prev => prev + 1);

   // ❌ EVITAR (puede tener problemas con actualizaciones múltiples)
   setCount(count + 1);
   ```

3. **Array de dependencias completo:**
   ```jsx
   useEffect(() => {
     console.log(variable1, variable2);
   }, [variable1, variable2]); // Incluye todas las variables usadas
   ```

---

## 🚀 Flujo de tu Slider Explicado

```
INICIO
  ↓
sliderIndex = 0, progress = 0
  ↓
useEffect detecta cambio en sliderIndex
  ↓
Crea setInterval (cada 50ms)
  ↓
progress: 0% → 1% → 2% → ... → 100%
  ↓
progress llega a 100%
  ↓
setSliderIndex(1) → Siguiente slide
  ↓
useEffect detecta nuevo sliderIndex
  ↓
setProgress(0) → Reset barra
  ↓
CICLO SE REPITE
```

**Hover interfiere:**
```
Mouse entra → setIsHovered(true)
  ↓
useEffect ve isHovered = true
  ↓
return (no hace nada)
  ↓
progress se queda congelado
  ↓
Mouse sale → setIsHovered(false)
  ↓
useEffect reactiva el intervalo
  ↓
progress continúa desde donde quedó
```

---

## 🎓 Resumen para WhatsApp

React funciona con componentes reutilizables que tienen "memoria" (useState) y pueden reaccionar a cambios (useEffect). 

En tu slider:
- useState guarda el slide actual y el progreso
- useEffect crea un timer que incrementa el progreso cada 50ms
- Cuando llega a 100%, cambia al siguiente slide
- El hover pausa el timer sin resetear el progreso
- Todo está dividido en componentes pequeños y mantenibles

Es como un reloj: useState es la hora actual, useEffect son las manecillas moviéndose, y el hover es pausar el tiempo.
