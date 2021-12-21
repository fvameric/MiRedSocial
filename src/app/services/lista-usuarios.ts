import { Usuario } from '../interfaces/usuarios';

// array de usuarios
// lo pongo en un archivo aparte para simular que obtengo los datos de otro lado
// en vez de este archivo debería ser la base de datos
export const arrUsuarios: Usuario[] = [
    { nombre: 'Juan', apellidos: 'Lopez', edad: 23, foto: 'assets/man.png', descripcion: 'Hola que tal', correo: 'correo@gmail.com', password: '1234' },
    { nombre: 'Fran', apellidos: 'Cesc', edad: 28, foto: 'assets/man.png', descripcion: 'Hago DAW', correo: 'fran@gmail.com', password: 'fran' },
    { nombre: 'Sonia', apellidos: 'Molina', edad: 28, foto: 'assets/woman.png', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', correo: 'sonia@gmail.com', password: 'sonia' }
];