export type Tarea={
    id: number;
    texto: string;
    descripcion?: string;
    estado: 'pendiente' | 'ejecucion' | 'finalizada';
  }