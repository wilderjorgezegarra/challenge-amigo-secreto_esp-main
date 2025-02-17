<h1 align="center"> Challenge Amigo secreto </h1>

<em> ## Descripción de su proyecto:</em>
Esta aplicaciòn WEb, permite ingresar amigos, y elegir cual de ellos a sido sorteado.

## Funcionalidades

## a.- Agregar nombre de amigos a una lista-Array.
- El usuario puede escribir los nombres de sus amigos, en el campo texto y agregarlo a la lista con el "Botón Agregar".
- Sí el campo está vacío el programa muestra un mensaje pidiendo que ingrese un nombre válido.

## b.- Visualizar la lista.
- Cada nombre de amigo ingresado se muestra en una lista debajo del campo de entrada.

## c.- Sortear amigo.
- Al presionar Clic en el botón "Sortear Amigo", la aplicación selecciona un nombre aleatorio de la lista y lo muestra como amigo sorteado.
- Sí la lista está vacía, se muestra una alerta indicando que no hay nombres para sortear.

## Tecnologías Utilizadas.
**HTML5: ** Como estructura de la página.
**CSS3: ** Para el diseño responsivo de la aplicación.
** JavaScript: ** Para la lógica del proyecto donde se incluye la manipulación del DOM,  el orden del amigo y las validaciones.

## Estructura del Proyecto.
challenge-amigo-secreto_esp-main
 app.js      Archivo JavaScript para la lógica del proyecto.
 index.html  Archivo de la estructura de la aplicación.
 README.md   Documentación del proyecto.

## Trabajando con Git Hub Challeguer amigo secreto para el repositorio y versiones.
0.- Ejecuto el Git Bash

1.- Me dirijo a la carpeta que esta mi repositorio.
    $ pwd
      /d/1__Alura/challenge-amigo-secreto_esp-main

2.- Ver en que estado esta mi repositorio local.
    $ git status
       fatal: not a git repository (or any of the parent directories): .git
    $ ls
       app.js  assets/  index.html  style.css

3.- Para iniciar mi repositorio LOCAL. (Comienza a rrastrear todos los archivos que yo tengo en esta carpeta).
    $ git init
       Initialized empty Git repository in D:/1__Alura/challenge-amigo-secreto_esp-main/.git/

4.- Estos archivos no se han adicionado al Git Hut.
     $ git init
       On branch master
       No commits yet
       Untracked files:
         (use "git add <file>..." to include in what will be committed)
               app.js
               assets/
               index.html
               style.css
       nothing added to commit but untracked files present (use "git add" to track)

5.- Adicionando cada aarchivo al Git Hut.
    $ git add app.js
    $ git add assets/
    $ git add index.html
    $ git add style.css

6.- Me dice que ya están los archivos adicionados, me pide un commit para guardar los cambios.
    $ git status
       On branch master
       No commits yet
       Changes to be committed:
         (use "git rm --cached <file>..." to unstage)
               new file:   app.js
               new file:   assets/amigo-secreto.png
               new file:   assets/play_circle_outline.png
               new file:   index.html
               new file:   style.css

7.- Me voy a Vs Code, y realizo una modificación. Y lo grabo ^+s
    function sortearAmigo() {
        if (tablaAmigos.length === 0){
            alert("No hay amigos ingresados para sortear.");}
        else {

8.- En el Visual Studio Code:
    Indica que tengo Commit pendiente que no é realizado. Ingreso nombre de la moficación que realice. Se guardará como une versión modificada.

9.- También lo puedo realizar desde el terminal del Visual Studio Code.
 
10.- Lo del punto 6.- Me dice que ya están los archivos adicionados, me pide un commit para guardar los cambios.
     $ git status
        On branch master
        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git restore <file>..." to discard changes in working directory)
                modified:   app.js
        no changes added to commit (use "git add" and/or "git commit -a")

11.- Actualizo desde el Git Bash.
    	$ git add app.js		o   git add .
    	$ get status 

12.- Realizando Commit.
	    $ git commit -am 'modificando comentarios'
        [master 426904b] modificando comentarios
         1 file changed, 1 insertion(+), 6 deletions(-)

## Asesoria.
De la aplicación Scord y utilización del FORO, que nos atienden los expertos de Alura ONE Studen Oracle.
 
## Persona que Desarrolla el Proyecto
Alumno de Alura Latam G8. Wilder, JORGE ZEGARRA
