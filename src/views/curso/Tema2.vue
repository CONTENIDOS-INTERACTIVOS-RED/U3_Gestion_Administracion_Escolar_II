<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diseño Universal para el Aprendizaje (DUA)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Cómo lograr que cada niño o niña se sienta parte del aula, sin importar sus habilidades, intereses o formas de aprender? El Diseño Universal para el Aprendizaje (DUA) responde a esta inquietud al proponer experiencias educativas accesibles para todos desde la planificación inicial.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta unidad invita a conocer los fundamentos del DUA, su origen, aplicación en la educación infantil y su valor como herramienta clave para responder a la diversidad. Comprenderlo permite al futuro docente diseñar propuestas más inclusivas, creativas y efectivas, convirtiendo la enseñanza en una experiencia verdaderamente transformadora.


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] ¿Qué es el DUA?
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              p.mb-0 El DUA es un enfoque pedagógico que parte de la premisa de que cada estudiante aprende de forma diferente. Nace de investigaciones en neurociencia cognitiva realizadas por el Center for Applied Special Technology (CAST) en Estados Unidos, que evidenciaron la variabilidad natural en los procesos de aprendizaje.
            p(data-aos="fade-left") Este enfoque se inspira en el principio de accesibilidad universal y propone planificar desde la diversidad, no desde la homogeneidad. A diferencia de las adaptaciones posteriores, el DUA diseña de entrada experiencias inclusivas para todos: 
        
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Origen
              p.mb-0.text-center Inspirado en estudios del CAST, basados en la neurociencia cognitiva.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Finalidad
              p.mb-0.text-center Diseñar experiencias de aprendizaje accesibles y motivadoras para todos, desde el inicio de la planificación.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Aplicación
              p.mb-0.text-center No se centra en crear adaptaciones individuales, sino en diversificar la enseñanza desde su diseño inicial.
    
    h2(data-aos="fade-left") Principios fundamentales del DUA
    p.mb-5 El DUA se estructura en tres principios básicos, que orientan la planeación de clases inclusivas:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pt-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7.6%" y="24.2%" numero="+")
                h5 Múltiples formas de representación
                p Presentar la información en diversos formatos: texto, imágenes, videos, audios, ejemplos concretos, esquemas, etc.
    
              .bg-color-white.box-shadow.p-3(x="97.3%" y="76%" numero="+")
                h5 Múltiples formas de acción y expresión
                p Permitir que los estudiantes demuestren lo aprendido mediante escritura, exposición, dibujo, dramatización, etc.
    
              .bg-color-white.box-shadow.p-3(x="2.5%" y="58%" numero="+")
                h5 Múltiples formas de participación
                p Motivar desde intereses, necesidades y emociones. Fomentar la autorregulación, el sentido de pertenencia y la curiosidad.

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El DUA no es exclusivo para estudiantes con discapacidad. Es una estrategia que beneficia a toda la comunidad educativa, alineada con el Decreto 1421 de 2017, el cual ubica la inclusión como principio rector del sistema educativo (Alba, 2021).
    
    h2(data-aos="fade-left").mb-5 Un nuevo rol docente

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Aplicar el DUA transforma al docente en un diseñador de experiencias que anticipa las diferencias y las convierte en oportunidades pedagógicas. Lejos de significar más trabajo, se trata de hacer mejor el trabajo: más planificado, más consciente y más humano.
    
        .bg-color-3.p-5(data-aos="fade-left").mb-3
          h5 Reflexión docente:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 ¿Cómo diseñar clases que conecten emocionalmente con todos los estudiantes?
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 ¿Qué estrategias permitirían que todos participen desde el inicio, sin ajustes posteriores?
        p Implementar el DUA es una apuesta por la equidad, la justicia educativa y la transformación social. Enseñar desde la diversidad no es solo una responsabilidad ética, es una oportunidad para innovar y enriquecer el ejercicio pedagógico.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Principios del DUA: representación, expresión y compromiso
    
    p.mb-5 ¿Qué se necesita para lograr que cada niño o niña se sienta comprendido, participe activamente y aprenda de forma significativa en el aula? El Diseño Universal para el Aprendizaje (DUA) responde a esta pregunta proponiendo tres principios clave que permiten planificar clases inclusivas desde el inicio. No se trata solo de identificar barreras, sino de actuar sobre ellas con estrategias concretas. A continuación, se presentan los tres principios del DUA y su aplicación práctica:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Principios del DUA
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-8 Principio del DUA
            th.text-center.text-white.bg-color-8 Pregunta que responde
            th.text-center.text-white.bg-color-8 Aplicaciones prácticas
        tbody.bg-color-7
          tr
            td Múltiples formas de representación
            td ¿Qué aprende el estudiante?
            td 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Presentar contenidos mediante textos, audios, videos, imágenes, objetos y esquemas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Usar lenguaje accesible y ejemplos cotidianos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Explicar términos complejos con claridad.
          tr
            td Múltiples formas de expresión y acción
            td ¿Cómo demuestra lo aprendido?
            td 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Permitir distintas formas de expresión: exposiciones, dramatizaciones, maquetas, textos, videos, etc.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Usar tecnologías de apoyo y organizadores gráficos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Promover la autorregulación.
          tr
            td Múltiples formas de compromiso
            td ¿Por qué se motiva a aprender?
            td 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Conectar con intereses y emociones.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Establecer metas claras y alcanzables.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Fomentar la toma de decisiones y el trabajo colaborativo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Valorar el esfuerzo, no solo el resultado.

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Cuando se aplica el DUA, se democratiza el acceso al conocimiento, permitiendo que cada estudiante se sienta valorado, motivado y capaz de aprender a su manera. Este modelo propone repensar la enseñanza no como un proceso uniforme, sino como una experiencia diversa, flexible y emocionalmente significativa. El objetivo no es hacer más, sino diseñar mejor, anticipando la diversidad y evitando ajustes tardíos.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Aplicación del DUA en educación infantil
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Cómo puede una docente de educación infantil integrar el DUA en su día a día con niños tan diversos? La educación infantil es un escenario dinámico, lleno de juego, exploración y emoción. En este contexto, aplicar el Diseño Universal para el Aprendizaje (DUA) no significa añadir más tareas, sino repensar la planificación, implementación y evaluación desde la diversidad.
    
        .bg-color-3.p-5(data-aos="fade-left").mb-3
          p.mb-0 Según Castro (2017), todos los niños pueden aprender, pero no lo hacen del mismo modo, ni al mismo ritmo, ni bajo las mismas condiciones. Por ello, aplicar el DUA desde el inicio evita respuestas correctivas tardías.
        p A continuación, se presentan acciones concretas para integrar el DUA en la educación infantil:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Ambientación del aula
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Crear rincones temáticos: lectura, arte, construcción, juego simbólico, experimentación sensorial.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Usar señalización visual: pictogramas, colores, rutinas visuales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7
              h5 Planeación de experiencias
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Diseñar actividades con opciones múltiples y niveles de dificultad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Ejemplo: para trabajar “familia”, permitir expresarse mediante dibujo, dramatización o bloques.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7
              h5 Interacción con las familias
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mantener comunicación constante para conocer intereses y necesidades.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Integrar aportes familiares en recursos y estrategias del aula.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7
              h5 Evaluación del aprendizaje
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Valorar procesos más que productos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Usar registros anecdóticos, fotos, videos y portafolios.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Permitir formas variadas de expresión: oral, corporal o artística.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El DUA no depende solo de recursos tecnológicos o visuales, sino de una actitud pedagógica abierta, sensible y reflexiva. Cuando el DUA se convierte en parte de la cultura pedagógica del aula, la diversidad deja de ser un obstáculo y se convierte en una fuente de innovación. La educación infantil, con su flexibilidad y creatividad, es el entorno ideal para hacer del DUA una realidad cotidiana.
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] DUA y currículo flexible
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 ¿Cómo garantizar que el currículo se adapte a los niños, y no al revés? En la educación infantil, se reconoce que cada niño es único en su ritmo, estilo, contexto y capacidad. Desde esta perspectiva, surge la necesidad de construir un currículo flexible, capaz de ajustarse a la diversidad sin excluirla. El Diseño Universal para el Aprendizaje (DUA) se convierte en el eje metodológico para materializar esa flexibilidad (Pastor, 2012).
        p(data-aos="fade-left") Un currículo flexible no implica crear uno nuevo, sino reorganizar contenidos, tiempos, materiales y evaluaciones desde el inicio, con opciones múltiples que respondan a todos. En lugar de pensar en adaptaciones posteriores, se planifica desde y para la diversidad. Se pasa de una lógica excluyente a una educación para todos desde el comienzo. La aplicación del DUA en un currículo flexible es: 
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Planeación" :icon="require('@/assets/bullets/8.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Planeación
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Diseñar actividades con distintos formatos: físicos, digitales, sensoriales o corporales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Prever tiempos diferenciados y pausas activas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Prever tiempos diferenciados y pausas activas.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Recursos" :icon="require('@/assets/bullets/9.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Recursos
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Usar cuentos en audio, imágenes, objetos manipulables, pictogramas y tecnología accesible.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Incluir apoyos visuales, táctiles o personales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fomentar la elección autónoma de materiales.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Evaluación" :icon="require('@/assets/bullets/10.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Evaluación
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Valorar aprendizajes mediante observación, portafolios, dramatizaciones o juegos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Evitar comparaciones; respetar ritmos individuales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Enfatizar el proceso más que el producto.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='', style="width: 100%;")
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los beneficios del currículo flexible basado en el DUA
    
        .bg-color-1.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Promueve una educación más equitativa y accesible.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reduce barreras para la participación y el aprendizaje.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reconoce la diversidad como una riqueza, no un obstáculo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Refuerza la autonomía, autoestima y motivación del niño desde sus primeras experiencias escolares.

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Articulación del DUA con el Decreto 1421
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/21.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") ¿Cómo se conecta el Diseño Universal para el Aprendizaje con la normativa colombiana sobre inclusión educativa? Tanto el Diseño Universal para el Aprendizaje (DUA) como el Decreto 1421 de 2017 comparten un objetivo común: garantizar el derecho a una educación inclusiva, equitativa y sin discriminación, especialmente para estudiantes con discapacidad.
    
    h2(data-aos="fade-left").mb-5 Marco normativo y pedagógico

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El artículo 12 del Decreto 1421 de 2017 reconoce explícitamente al DUA como una metodología pedagógica que favorece la participación de todos los estudiantes, invitando a:
    
        .bg-color-2.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Diseñar experiencias de aprendizaje flexibles.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Incorporar múltiples formas de representación, expresión y motivación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Implementar ajustes razonables desde la planeación, no como respuesta tardía.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Conexión entre DUA y Decreto 1421
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-8 Aspecto
            th.text-center.text-white.bg-color-8 Contribución del DUA
        tbody.bg-color-7
          tr
            td Planificación pedagógica
            td Ofrece un marco flexible que responde a la diversidad desde el inicio.
          tr
            td Evaluación
            td Promueve criterios y medios variados para demostrar aprendizajes.
          tr
            td Recursos didácticos
            td Utiliza materiales inclusivos que representen distintos estilos de aprendizaje y realidades.
          tr
            td Función docente
            td Transforma al docente en diseñador pedagógico sensible, no en ejecutor de planes únicos.

    h2(data-aos="fade-left") DUA y PIAR: Enfoques complementarios
    p.mb-5 El Plan Individual de Ajustes Razonables (PIAR) es exigido por el Decreto 1421 para garantizar apoyos personalizados. El DUA se convierte en su complemento ideal:

    .titulo-figura.mb-4
      h5 Tabla 3.
      span DUA y PIAR
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-8  Elemento
            th.text-center.text-white.bg-color-8  PIAR
            th.text-center.text-white.bg-color-8  DUA
        tbody.bg-color-7
          tr
            td Enfoque
            td Personalizado
            td Grupales y anticipatorios
          tr
            td Objetivo
            td Atender necesidades específicas
            td Reducir la necesidad de ajustes individuales
          tr
            td Alcance
            td Estudiante con discapacidad
            td Todos los estudiantes
          tr
            td Propósito común
            td Participación activa, digna y efectiva
            td Participación activa, digna y efectiva


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/231716 " target="_blank" rel="noopener noreferrer") Sánchez Fuentes, S. (2023). El diseño universal para el aprendizaje: guía práctica para el profesorado: (1 ed.). Narcea Ediciones. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.educadua.es " target="_blank" rel="noopener noreferrer") EDUCADUA (2013) Página web del proyecto DUALETIC dedicada al Diseño Universal para el Aprendizaje en español. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rua.ua.es/dspace/bitstream/10045/131375/1/El-modelo-educativo-inclusivo-desde-el-Diseno-Universal-para-el-Aprendizaje-DUA.pdf" target="_blank" rel="noopener noreferrer") Lorenzo-Lledó, A. (2023). El modelo educativo inclusivo desde el diseño universal para el aprendizaje (DUA). Atención a la Diversidad en los Centros Educativos.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.saldarriagaconcha.org/centro-de-recursos-maestros-por-la-inclusion/?gad_source=1&amp;gad_campaignid=20815535433&amp;gbraid=0AAAAACraLxEIesLVGcOuQtTaGxVXlfBmR&amp;gclid=CjwKCAjw3rnCBhBxEiwArN0QE2bcO6lxp1nMFsZ4pOYRtPjgUqc_ZBxDoVMBWjFNcieRnWGwDcZa1xoCYAYQAvD_BwE " target="_blank" rel="noopener noreferrer") Centro de Recursos Maestros por la Inclusión. (s.f.). Fundación Saldarriaga Concha. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9QI1QKmHrDg" target="_blank" rel="noopener noreferrer") CENAREC. (2021, 12 de julio). Webinar sobre Diseño Universal para el Aprendizaje, DUA, 2021 [Video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6ZpjiYEupMk " target="_blank" rel="noopener noreferrer") Universidad CEU Cardenal Herrera. (2023, 31 de octubre). Las claves del Diseño Universal del Aprendizaje (DUA ) [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
