// productos.js
const PRODUCTOS = [
  {
    id: 'p001',
    nombre: 'Auriculares inalámbricos',
    categoria: 'Audio',
    precio: 900,
    precioAnterior: 1200,
    stock: 12,
    emoji: '🎧',
    gradiente: 'g1',
    destacado: 'promo',
    imagenes: [],   // Ej: ['img/audifonos-1.jpg', 'img/audifonos-2.jpg']
    descripcion: 'Auriculares Bluetooth con cancelación pasiva de ruido y hasta 8 horas de autonomía. El estuche de carga añade 20 horas extra, perfecto para el día a día, viajes y videollamadas.',
    caracteristicas: [
      { label: 'Marca', valor: 'SoundWave' },
      { label: 'Conectividad', valor: 'Bluetooth 5.3' },
      { label: 'Batería', valor: '8 h + 20 h con estuche' },
      { label: 'Incluye', valor: 'Cable USB-C y almohadillas extra' },
      { label: 'Garantía', valor: '3 meses' }
    ]
  },
  {
    id: 'p002',
    nombre: 'Reloj deportivo',
    categoria: 'Accesorios',
    precio: 1350,
    precioAnterior: 1800,
    stock: 8,
    emoji: '⌚',
    gradiente: 'g2',
    destacado: 'promo',
    imagenes: [],
    descripcion: 'Reloj inteligente con monitor de ritmo cardíaco, podómetro y múltiples modos deportivos. Sumergible hasta 30 m. Se conecta al celular por Bluetooth para recibir notificaciones.',
    caracteristicas: [
      { label: 'Pantalla', valor: '1.7" TFT color' },
      { label: 'Batería', valor: 'Hasta 7 días' },
      { label: 'Resistencia', valor: 'IP67 (30 m)' },
      { label: 'Compatibilidad', valor: 'Android / iOS' },
      { label: 'Garantía', valor: '3 meses' }
    ]
  },
  {
    id: 'p003',
    nombre: 'Zapatillas urbanas',
    categoria: 'Calzado',
    precio: 1150,
    precioAnterior: null,
    stock: 5,
    emoji: '👟',
    gradiente: 'g3',
    destacado: 'nuevo',
    imagenes: [],
    descripcion: 'Zapatillas ligeras y transpirables, con suela de goma antideslizante. Diseño urbano versátil que combina con cualquier outfit casual.',
    caracteristicas: [
      { label: 'Material', valor: 'Malla transpirable' },
      { label: 'Suela', valor: 'Goma antideslizante' },
      { label: 'Tallas', valor: '38 al 44' },
      { label: 'Colores', valor: 'Negro, blanco, gris' },
      { label: 'Garantía', valor: '3 meses' }
    ]
  },
  {
    id: 'p004',
    nombre: 'Mochila casual',
    categoria: 'Bolsos',
    precio: 980,
    precioAnterior: null,
    stock: 0,
    emoji: '👜',
    gradiente: 'g4',
    destacado: 'nuevo',
    imagenes: [],
    descripcion: 'Mochila con compartimento acolchado para laptop de hasta 15.6", bolsillos internos y correas ajustables. Diseño casual ideal para universidad, trabajo o viajes cortos.',
    caracteristicas: [
      { label: 'Capacidad', valor: '20 L' },
      { label: 'Compartimentos', valor: 'Laptop 15.6" + 3 bolsillos' },
      { label: 'Material', valor: 'Poliéster resistente al agua' },
      { label: 'Color', valor: 'Negro' },
      { label: 'Garantía', valor: '3 meses' }
    ]
  },
  {
    id: 'p005',
    nombre: 'Lámpara de escritorio',
    categoria: 'Hogar',
    precio: 550,
    precioAnterior: null,
    stock: 15,
    emoji: '💡',
    gradiente: 'g2',
    destacado: null,
    imagenes: [],
    descripcion: 'Lámpara LED con luz regulable en 3 tonos (cálida, neutra, fría) y brazo articulado. Puerto USB integrado para cargar el celular mientras trabajas o estudias.',
    caracteristicas: [
      { label: 'Potencia', valor: '10 W' },
      { label: 'Tonos de luz', valor: 'Cálida / neutra / fría' },
      { label: 'Alimentación', valor: 'USB-C con adaptador' },
      { label: 'Material', valor: 'Aluminio + ABS' },
      { label: 'Garantía', valor: '3 meses' }
    ]
  },
  {
    id: 'p006',
    nombre: 'Termo de acero',
    categoria: 'Hogar',
    precio: 800,
    precioAnterior: 1000,
    stock: 20,
    emoji: '🥤',
    gradiente: 'g1',
    destacado: 'promo',
    imagenes: [],
    descripcion: 'Termo de acero inoxidable con doble pared al vacío. Mantiene bebidas frías hasta 24 h y calientes hasta 12 h. Tapa hermética y libre de BPA.',
    caracteristicas: [
      { label: 'Capacidad', valor: '750 ml' },
      { label: 'Material', valor: 'Acero inoxidable 304' },
      { label: 'Aislamiento', valor: 'Doble pared al vacío' },
      { label: 'Libre de BPA', valor: 'Sí' },
      { label: 'Garantía', valor: '3 meses' }
    ]
  }
];