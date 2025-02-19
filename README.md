<h1 align="center"> Challenge Amigo secreto </h1>

<em> Descripción de su proyecto:</em>
Esta aplicación Web, permite ingresar amigos y elegir cuál de ellos fue sorteado.

## Funcionalidades

## a.- Agregar nombre de amigos a una lista.
- El usuario puede ingresar los nombres de sus amigos, en el campo texto y agregarlo a la lista con el "Botón Añadir".
- Sí el campo está vacío el programa muestra un mensaje solicitándole que ingrese un nombre válido.
- Sí ingreso una vez el nombre del amigo, este no puede ser duplicado, mostrando una alerta que ese nombre ya existe.

## b.- Visualizar la lista.
- Cada nombre de amigo ingresado se muestra en una lista debajo del texto ingresado.

## c.- Sortear amigo.
- Al presionar Clic en el botón "Sortear Amigo", la aplicación selecciona un nombre aleatorio de la lista y lo muestra como amigo sorteado.
- Sí la lista está vacía, se muestra una alerta indicando que no hay nombres para sortear.
- Sí la lista esta llena de daots/amigos, se borra todo el contenido HTML de la etiqueta <ul>.

## Tecnologías Utilizadas.
**HTML5: ** Como estructura de la página.
**CSS3: ** Para el diseño responsivo de la aplicación.
** JavaScript: ** Para la lógica del proyecto donde se incluye la manipulación del DOM, el orden del amigo y las validaciones.

## Estructura del Proyecto.
Carpeta: challenge-amigo-secreto_esp-main
 - app.js      Archivo JavaScript para la lógica del proyecto.
- index.html  Archivo de la estructura de la aplicación.
- README.md   Documentación del proyecto.


## Trabajando con Git Hub Challeguer amigo secreto
## Con versiones en mí PC-Local.
0.- Ejecuto el Git Bash
1.- Me dirijo a la carpeta que esta mi repositorio PC-Local.
    $ pwd
      /d/1__Alura/challenge-amigo-secreto_esp-main
2.- Ver en que estado esta mi repositorio local.
    $ git status
       fatal: not a git repository (or any of the parent directories): .git
3.- Para iniciar mi repositorio LOCAL. (Comienza a rastrear todos los archivos que yo tengo en esta carpeta).
    $ git init
4.- Adicionando cada archivo al Git Hut.
    $ git add app.js
    $ git add assets/
    $ git add index.html
    $ git add style.css
5.- Me dice que ya están los archivos adicionados, me pide un commit para guardar los cambios.
    $ git status
7.- Me voy a Vs Code, y realizo una modificación. Y lo grabo ^+s
8.- En el Visual Studio Code:
    Indica tengo que realizar Commit pendiente que no é realizado. 
    Ingreso el nombre de la modificación que realice. Se guardará como una versión modificada.
9.- También lo puedo realizar desde el terminal del Visual Studio Code.
10.- Actualizando desde el Git Bash.
    	$ git add app.js		o   git add .
    	$ get status 
11.- Realizando Commit.
     $ git commit -am 'modificando comentarios'
[master 426904b] modificando comentarios
1 file changed, 1 insertion(+), 6 deletions(-)

## Envío desde mi repositorio local(Mi PC), hacia mi repositorio Remoto GIT HUB.
12.- Creo en mi Git Hub un repositorio llamado: challenge-amigo-secreto_esp-main

13.- Vinculo mi repositorio Local con mi Git Hub remoto.
$ git remote add origin https://github.com/wilderjorgezegarra/challenge-amigo-secreto_esp-main.git

Constatamos con:
$ git remote
	origin

14.- Como envío mi repositorio local(de Mi PC), HACIA mi repositorio Remoto Git Hot.
	$ git branch -M main
$ git push -u origin main


## Asesoría.
De la aplicación Discord y preguntas en el FORO de Alura Latam ONE Student Oracle, que nos orientan bien.
 
## Persona que Desarrolla el Proyecto
Alumno de Alura Latam G8: Wilder, JORGE ZEGARRA

