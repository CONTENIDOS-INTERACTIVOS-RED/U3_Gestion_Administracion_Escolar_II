export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Inclusión educativa',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Decreto 1421 de 2017',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Contexto y Propósito del Decreto 1421 de 2017',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios de la educación inclusiva',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Responsabilidades institucionales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Rol de la familia y equipos de apoyo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño Universal para el Aprendizaje (DUA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es el DUA?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Principios del DUA: representación, expresión y compromiso',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Aplicación del DUA en educación infantil',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'DUA y currículo flexible',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Articulación del DUA con el Decreto 1421',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan Individual de Ajustes Razonables (PIAR)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Qué es el PIAR y para qué sirve?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura y componentes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Integración con el DUA y el Decreto 1421',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Muñoz Martínez, Y. & Torrego Seijo, J. C. (2018). Inclusión y mejora educativa: ( ed.). Editorial Universidad de Alcalá. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/44926',
    },
    {
      referencia:
        'Borregón, S. & Giménez, S. (2017). Inclusión y sistema educativo: ( ed.). Editorial CEPE.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/153541',
    },
    {
      referencia:
        'Arnaiz-Sánchez, P. (Coord.) & Escarbajal Frutos, A. (Coord.). (2020). Aulas abiertas a la inclusión: ( ed.). Dykinson.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175745',
    },
    {
      referencia:
        'Ministerio de Educación [MEN]. (2017). Decreto 1421 2017 de 29 de agosto de 2017, Bogotá,Colombia.  ',
      link:
        ' https://www.mineducacion.gov.co/portal/normativa/Decretos/381928:Decreto-1421-de-agosto-29-de-2017',
    },
    {
      referencia:
        'Alba Pastor, C. (Coord.). (2021). Diseño universal para el aprendizaje: educación para todos y prácticas de enseñanza inclusivas: ( ed.). Ediciones Morata, S. L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/195451',
    },
    {
      referencia:
        'Castro, R. (2017). Diseño universal para el aprendizaje y co-enseñanza: estrategias pedagógicas para una educación inclusiva: ( ed.). RIL editores.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106262',
    },
    {
      referencia:
        'Pastor, C. (2012). Aportaciones del Diseño Universal para el Aprendizaje y de los materiales digitales en el logro de una enseñanza accesible.  ',
      link:
        ' https://web.ua.es/it/accesibilidad/documentos/cursos/ice/dua-y-materiales-digitales.pdf',
    },
    {
      referencia:
        'CAST (Center for Applied Special Technology) (2011). Universal Design for Learning guidelines version 2.0. Wakefield, MA: Author. Traducción al español versión 2.0 (2013): Alba Pastor, C., Sánchez Hípola, P., Sánchez Serrano, J. M. y Zubillaga del Río, A. Pautas sobre el Diseño Universal para el Aprendizaje (DUA).Texto completo (versión 2.0).  ',
      link: 'https://educadua.es/doc/dua/dua_pautas_2_0.pdf',
    },
    {
      referencia:
        'Pastor, C. A., Sánchez, J. M., & Zubillaga, A. (2014). Diseño Universal para el aprendizaje (DUA). ',
      link:
        ' https://www.academia.edu/download/55488276/dua_pautas_intro_cv.pdf',
    },
    {
      referencia:
        'Tenecela, M. C. P., Herrera, D. G. G., Encalada, S. C. O., & Álvarez, J. C. E. (2020). Diseño Universal para el Aprendizaje (DUA) como estrategia pedagógica en educación inicial. Revista Arbitrada Interdisciplinaria Koinonía, 5(1), 72-101.  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7610751',
    },
    {
      referencia:
        'Álvarez Gutiérrez, M. L. Hernández Jara, P. V. & Acosta Luis, D. (2021). Educación inclusiva en niños de la educación inicial: ( ed.). Editorial Tecnocientífica Americana.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/183535',
    },
    {
      referencia:
        'Zapata, L. A. F., García, M. S. O., & Tabera, J. T. (2019). Prácticas pedagógicas inclusivas desde el diseño universal de aprendizaje y plan individual de ajuste razonable. Inclusión y desarrollo, 6(2), 4-14.  ',
      link: 'https://revistas.uniminuto.edu/index.php/IYD/article/view/1945',
    },
    {
      referencia:
        'Jimenez, C. (2018). Implementación de ajustes razonables curriculares para minimizar las asimetrías en los aprendizajes de los alumnos. Anuario digital de investigación educativa, (1).  ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7015604',
    },
    {
      referencia:
        'Galvis Ortiz, L. (2009). La convención de los derechos del niño veinte años después. Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud, 6 (2), 587-619: ( ed.). D - Universidad de Manizales.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/25014',
    },
    {
      referencia:
        'Código de la Infancia y la Adolescencia, Ley 1098 de 2006. https://www.icbf.gov.co/sites/default/files/codigoinfancialey1098.pdf ',
      link:
        'https://www.icbf.gov.co/sites/default/files/codigoinfancialey1098.pdf ',
    },
    {
      referencia:
        'Durán-Strauch, E., Guáqueta-Rodríguez, C. A., & Torres-Quintero, A. (2011). Restablecimiento de derechos de niños, niñas y adolescentes en el sistema nacional de bienestar familiar. Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud, 9(2), 549-559.   ',
      link: 'https://www.redalyc.org/pdf/773/77321592005.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'posibilidad de que todas las personas, sin importar sus condiciones, puedan acceder y participar plenamente en los entornos educativos.',
    },
    {
      termino: 'Ajustes razonables ',
      significado:
        'modificaciones necesarias y adecuadas que no imponen una carga desproporcionada, para garantizar la igualdad de oportunidades.',
    },
    {
      termino: 'Barreras',
      significado:
        'obstáculos que impiden o dificultan la participación plena y efectiva de los estudiantes en el entorno escolar.',
    },
    {
      termino: 'Decreto 1421 de 2017',
      significado:
        'norma legal que reglamenta la atención educativa para estudiantes con discapacidad en el marco de la educación inclusiva en Colombia.',
    },
    {
      termino: 'Diseño Universal para el Aprendizaje (DUA)',
      significado:
        'enfoque pedagógico que busca atender la diversidad del aula mediante la planificación de múltiples formas de representación, expresión y participación.',
    },
    {
      termino: 'Discapacidad',
      significado:
        'condición que surge de la interacción entre personas con deficiencias y las barreras del entorno que impiden su inclusión plena.',
    },
    {
      termino: 'Diversidad',
      significado:
        'reconocimiento y valoración de las diferencias individuales entre los estudiantes, incluyendo capacidades, culturas, lenguas y contextos.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'modelo educativo que busca garantizar el derecho a la educación de todos los estudiantes, especialmente aquellos en situación de vulnerabilidad.',
    },
    {
      termino: 'Equidad',
      significado:
        'principio que implica ofrecer a cada persona lo que necesita para alcanzar su máximo potencial, reconociendo sus condiciones particulares.',
    },
    {
      termino: 'Exclusión',
      significado:
        'situación en la que ciertas personas o grupos son marginados y se les impide participar plenamente en la vida educativa o social.',
    },
    {
      termino: 'Familia',
      significado:
        'agente fundamental en la formación integral de los niños y en la corresponsabilidad del proceso educativo.',
    },
    {
      termino: 'Ley 1098 de 2006',
      significado:
        'también conocida como Código de Infancia y Adolescencia, protege los derechos de los niños, niñas y adolescentes en Colombia.',
    },
    {
      termino: 'Participación',
      significado:
        'implicación activa de los estudiantes, familias y comunidad educativa en los procesos de aprendizaje y toma de decisiones.',
    },
    {
      termino: 'PIAR',
      significado:
        'Plan Individual de Ajustes Razonables; instrumento que orienta las adaptaciones pedagógicas para estudiantes con discapacidad.',
    },
    {
      termino: 'Responsabilidad compartida',
      significado:
        'compromiso colectivo de todos los actores educativos y sociales en garantizar una educación inclusiva y de calidad para todos.',
    },
  ],
}
