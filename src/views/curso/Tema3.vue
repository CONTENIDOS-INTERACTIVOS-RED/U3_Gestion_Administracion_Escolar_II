<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Plan Individual de Ajustes Razonables (PIAR)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Cómo garantizar que cada niño o niña, sin importar sus capacidades o necesidades, tenga las mismas oportunidades de aprender, participar y crecer en el aula? El Plan Individual de Ajustes Razonables (PIAR) es una herramienta clave para responder a esta pregunta. Este instrumento permite establecer medidas personalizadas para estudiantes con discapacidad, promoviendo su participación efectiva en el entorno escolar y asegurando condiciones de equidad.
    
        .bg-color-1.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Implementar un PIAR no solo responde a un mandato legal —contemplado en el Decreto 1421 de 2017— sino que refleja el compromiso humano y ético del rol docente: reconocer la dignidad, el potencial y las particularidades de cada estudiante.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] ¿Qué es el PIAR y para qué sirve?
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El PIAR es un instrumento pedagógico y de gestión que permite identificar, planificar y aplicar ajustes razonables personalizados. Su objetivo es garantizar que los estudiantes con discapacidad participen, permanezcan y progresen en el sistema educativo en igualdad de oportunidades.
        
            .bg-color-7.p-5(data-aos="fade-left")
              p.mb-0 Este plan, exigido por el artículo 13 del Decreto 1421 de 2017, no otorga ventajas ni reduce la exigencia académica, sino que establece las condiciones adecuadas para un aprendizaje justo y accesible.

        h2(data-aos="fade-left") Propósitos fundamentales del PIAR
        p.mb-5 A continuación, se presentan los aspectos clave que definen y orientan la implementación del PIAR:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/4.svg" alt="" style="width: 90px")
              h5.text-center Finalidad
              p.mb-0.text-center Garantizar una educación equitativa, sin barreras físicas, curriculares o sociales.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/5.svg" alt="" style="width: 90px")
              h5.text-center Base normativa
              p.mb-0.text-center Establecido por el artículo 13 del Decreto 1421 de 2017.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" alt="" style="width: 90px")
              h5.text-center Naturaleza del ajuste
              p.mb-0.text-center No son privilegios ni disminución de exigencias, sino condiciones adecuadas para que todos puedan aprender.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/7.svg" alt="" style="width: 90px")
              h5.text-center Carácter del documento
              p.mb-0.text-center Es flexible y evoluciona con el estudiante, permitiendo revisiones y adaptaciones continuas.
    
        h2(data-aos="fade-left").mb-5 ¿Cómo se construye un PIAR?

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El proceso de elaboración del PIAR debe ser colaborativo. A continuación, se enumeran los actores clave que deben participar:
        
            .bg-color-3.p-5(data-aos="fade-left").mb-3
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Docentes
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Directivos
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Familias
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Equipos de apoyo interdisciplinarios
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 El propio estudiante (cuando sea pertinente)
            p Esta colaboración asegura un conocimiento profundo del contexto del estudiante, de sus necesidades y fortalezas, facilitando el diseño de estrategias efectivas (Zapata, García y Tabera, 2019).

        h2(data-aos="fade-left") Tipos de ajustes posibles
        p.mb-5 Estos son algunos ejemplos de ajustes razonables que pueden incluirse en un PIAR, según las necesidades de cada estudiante:
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/9.svg" alt="" style="width: 90px")
              h5.text-center Metodológico
              p.mb-0.text-center Uso de recursos visuales o sensoriales, diversificación de instrucciones.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/10.svg" alt="" style="width: 90px")
              h5.text-center Curricular
              p.mb-0.text-center Adaptación de contenidos o enfoques según capacidades del estudiante.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/11.svg" alt="" style="width: 90px")
              h5.text-center Evaluativo
              p.mb-0.text-center Evaluaciones orales, con pictogramas o portafolios en lugar de pruebas escritas tradicionales.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 90px")
              h5.text-center Apoyos técnicos y humanos
              p.mb-0.text-center Uso de intérprete de lengua de señas, dispositivos auditivos, software accesible o acompañamiento individual.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Implementar el PIAR no solo es un acto técnico, sino un acto pedagógico con profundo sentido ético: se trata de asegurar que cada estudiante pueda aprender dignamente, en sus propios términos y condiciones.
    

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estructura y componentes
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Cómo organizar de forma clara y efectiva un plan que responda a las necesidades educativas específicas de un estudiante con discapacidad? Comprender la estructura del Plan Individual de Ajustes Razonables (PIAR) es esencial para asegurar su aplicación coherente, participativa y centrada en el estudiante. Este plan es un documento técnico-pedagógico basado en los principios de equidad, participación y corresponsabilidad, y su diseño no es arbitrario, sino que responde a componentes que permiten personalizar la intervención educativa. A continuación, se describen los componentes esenciales del PIAR y su propósito:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="1. Datos de identificación del estudiante")
            p Recoge información básica como nombre, edad, grado, tipo de discapacidad y barreras identificadas. Permite contextualizar el punto de partida del proceso.
    
          .div(titulo="2. Caracterización pedagógica y contextual")
            p Describe el entorno familiar, social y escolar; intereses, habilidades y estilo de aprendizaje. Fundamenta las estrategias personalizadas.
    
          .div(titulo="3. Identificación de barreras")
            p Reconoce obstáculos físicos, actitudinales, comunicativos o curriculares que afectan el aprendizaje y la participación.
    
          .div(titulo="4. Ajustes razonables")
            p Específica adaptaciones metodológicas, curriculares, evaluativas o de apoyo técnico que se deben aplicar para remover las barreras identificadas.
          .div(titulo="5. Responsables de implementación")
            p Define los actores encargados de ejecutar el plan: docentes, directivos, familia, profesionales de apoyo y, cuando sea posible, el propio estudiante.
    
          .div(titulo="6. Seguimiento y evaluación del plan")
            p Establece criterios, tiempos y responsables para valorar la efectividad del PIAR y ajustarlo conforme al progreso o nuevas necesidades del estudiante.
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Diseñar un PIAR no es llenar un formato, sino trazar una ruta educativa personalizada, construida con compromiso ético y sensibilidad pedagógica. Este instrumento permite mirar más allá del diagnóstico, reconociendo al estudiante en su contexto, con sus capacidades, retos y voz propia. La estructura del PIAR, bien aplicada, se convierte en una herramienta poderosa para hacer realidad el derecho a una educación verdaderamente inclusiva.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ruta de elaboración y aplicación del PIAR
            p.mb-4(data-aos="fade-right") Se invita a leer el documento "Ruta de elaboración y aplicación del PIAR", donde se aborda detalladamente el proceso para diseñar e implementar un Plan Individual de Ajustes Razonables en instituciones educativas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ruta de elaboración y aplicación del PIAR.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/17.png', alt='')

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Integración con el DUA y el Decreto 1421
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/18.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") ¿Cómo se articulan las herramientas que garantizan el derecho a una educación inclusiva en Colombia? Para lograr una verdadera inclusión educativa, no basta con conocer conceptos de forma aislada. Es necesario comprender cómo se integran y se complementan el PIAR (Plan Individual de Ajustes Razonables), el DUA (Diseño Universal para el Aprendizaje) y el Decreto 1421 de 2017. Esta integración permite construir prácticas pedagógicas coherentes, sostenibles y centradas en la diversidad estudiantil.
    
    h2(data-aos="fade-left") Conexión entre DUA, PIAR y Decreto 1421
    p.mb-5 El Decreto 1421 de 2017 establece las bases legales y pedagógicas para garantizar el acceso, permanencia, participación y aprendizaje de los estudiantes con discapacidad. Reconoce explícitamente tanto al DUA como al PIAR como estrategias fundamentales para lograr una educación inclusiva. A continuación, se presenta cómo se articulan estas tres herramientas:

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Articulación entre el Decreto 1421, el DUA y el PIAR
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-8 Herramienta
            th.text-center.text-white.bg-color-8 Función principal
            th.text-center.text-white.bg-color-8 Aplicación en el aula
            th.text-center.text-white.bg-color-8 Alcance
        tbody.bg-color-7
          tr
            td Decreto 1421
            td Marco legal y normativo
            td Garantiza derechos, establece obligaciones para instituciones, docentes y familias
            td Nacional
          tr
            td DUA
            td Planificación inclusiva desde el diseño
            td Proporciona múltiples formas de representación, expresión y participación
            td Todos los estudiantes
          tr
            td PIAR
            td Respuesta personalizada
            td Ajustes específicos cuando el DUA no es suficiente
            td Estudiantes con discapacidad

    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/19.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El DUA anticipa la diversidad. El PIAR responde a necesidades individuales cuando persisten barreras. Ambos operan bajo el marco legal del Decreto 1421.
    
    h2(data-aos="fade-left").mb-5 Ejemplo práctico de articulación

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Imaginemos una clase sobre la secuencia narrativa:
    
        .bg-color-7.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Con DUA</b>: se utilizan cuentos en audio, pictogramas, dramatizaciones, lectura en voz alta, y se permite que los estudiantes expresen su comprensión mediante dibujos, maquetas o grabaciones.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Con PIAR</b>: si un estudiante con trastorno del lenguaje requiere una plantilla visual para organizar sus ideas antes de narrar, este ajuste se formaliza en su PIAR como medida adicional para garantizar su participación.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La verdadera inclusión no se logra con medidas aisladas. Se necesita una respuesta sistémica, que articule lo pedagógico, lo normativo y lo ético. Esta integración permite que el diseño pedagógico se base en el principio de equidad, no en la uniformidad. Las diferencias dejan de ser obstáculos para convertirse en puntos de partida que enriquecen la enseñanza.
    
        .bg-color-2.p-5(data-aos="fade-left")
          h5 ¿Se planifica la educación para todos o solo para quienes encajan en lo tradicional?
          p.mb-0 Pensar el aula desde el PIAR, el DUA y el Decreto 1421 de 2017 es construir una escuela donde cada niño y niña tenga derecho a aprender sin que sus características personales se conviertan en barreras. Se trata de enseñar respetando la diversidad, no a pesar de ella.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ley 1098 de 2006 - Código de Infancia y Adolescencia
            p.mb-4(data-aos="fade-right") Se invita a leer el documento "Ley 1098 de 2006 - Código de Infancia y Adolescencia", donde se aborda el marco normativo que garantiza los derechos de los niños, niñas y adolescentes en Colombia. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ley 1098 de 2006 - Código de Infancia y Adolescencia.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/22.png', alt='')







    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
