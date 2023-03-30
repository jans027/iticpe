export const data = [
  {
    inicio: {
      id: "inicioNav",
      name: "INICIO",
      url: "/home",
      logoNav: "Logo-iticpe.svg",
      email: "contacto@iticpe.com",
      phone: "+51 1 440-1983",
      whatsappUrl: "https://api.whatsapp.com/send?phone=51979485044",
      whatsappImg: "boton.png",
      addressItic: "Of. Calle 108 #45-27 \nEd. ITICCOL - Bogotá Colombia",
      address: "Of. Calle 108 #45-27",
      addressBuilding: "Ed. ITICCOL - Bogotá Colombia",
      facebookUrl: "https://www.facebook.com/iticcolombia",
      instagramUrl: "https://www.instagram.com/itic_colombia/",
      twitterUrl: "https://twitter.com/ITICColombia",
      linkedInUrl: "https://www.linkedin.com/company/itic-colombia/",
      banners: {
        card0: {
          id: "card-Banner1",
          title: "INSPECCIÓN",
          imgDk:'banners-ppales/Banner-ppal-dk-iticpe.png',
          imgTb:'banners-ppales/Banner-ppal-tb-iticpe.png',
          imgMb:'banners-ppales/Banner-ppal-mb-iticpe.png',
          paragraph:
            "A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.",
          btn: "SOLICITAR INFORMACIÓN",
        },
        card1: {
          id: "card-Banner2",
          title: "INSPECCIÓN",
          imgDk: 'banners-ppales/Banner-ppal-dk-granjas.png',
          imgTb: 'banners-ppales/Banner-ppal-tb-granjas.png',
          imgMb: 'banners-ppales/Banner-ppal-mb-granjas.png',
          paragraph:
            "A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.",
          btn: "SOLICITAR INFORMACIÓN",
        },
      },
    },
    empresa: {
      id: "empresaNav",
      name: "EMPRESA",
      url: "",
      dropDownMenu: {
        nosotros: {
          key: 1,
          id: "nosotros",
          name: "ACERCA DE NOSOTROS",
          nameNav2: "Acerca de nosotros",
          nameFooter: "Acerca de nosotros",
          helmet:'Acerca de nosotros',
          url: "/empresa/nosotros",
          img: "Nosotros/img-empresa.png",
          paragraph1:
            "Una empresa con Orientación social y ambiental, contamos con profesionales calificados en técnicas internacionales, comprometidos con nuestros valores empresariales en búsqueda de LA EXCELENCIA OPERACIONAL E INTEGRIDAD en nuestros servicios.",
          paragraph2:
            "Hace 13 años, nació nuestra empresa como filial de un grupo alemán. En el 2023, nos convertimos en una empresa nacional con presencia en varios países de Suramérica y Centroamérica. ",
          paragraph3:
            "Desde entonces, hemos estado comprometidos con brindar soluciones de calidad a nuestros clientes en la región y nos enorgullece ser reconocidos como líderes en nuestro campo. Con una visión centrada en el crecimiento y la innovación, seguimos expandiendo nuestra presencia y mejorando nuestros servicios para satisfacer las necesidades en constante evolución de nuestros clientes.",
          titleSeccion: "¿POR QUÉ NOSOTROS?",
          cards: {
            card0: {
              id: "card0",
              img: "Nosotros/Acerca-1.png",
              title: "TRANSFORMACIÓN DIGITAL",
              paragraph:
                "Construimos soluciones digitales personalizadas para mejorar la eficiencia de los procesos, con el fin de ahorrar recursos y facilitar la toma de decisiones, basadas en datos.",
            },
            card1: {
              id: "card1",
              img: "Nosotros/Acerca-2.png",
              title: "INTEGRIDAD",
              paragraph:
                "La excelencia operacional, el desarrollo de soluciones a la medida y el ahorro de recursos son clave para el éxito. Estamos constantemente buscando maneras de mejorar y optimizar nuestros procesos con el fin de superar continuamente nuestras metas.",
            },
            card2: {
              id: "card2",
              img: "Nosotros/Acerca-3.png",
              title: "EXCELENCIA OPERACIONAL",
              paragraph:
                "La excelencia operacional, el desarrollo de soluciones a la medida y el ahorro de recursos son clave para el éxito. Estamos constantemente buscando maneras de mejorar y optimizar nuestros procesos con el fin de superar continuamente nuestras metas.",
            },
            card3: {
              id: "card3",
              img: "Nosotros/Acerca-4.png",
              title: "EXPERIENCIA TÉCNICA",
              paragraph:
                "Nacimos hace 13 años como empresa filial de un grupo Alemán, en el 2023 como empresa nacional contamos con un equipo altamente calificado y experimentado, con presencia en varios países de Latinoamérica.",
            },
          },
        },
        pilares: {
          key: 2,
          id: "pilares",
          name: "PILARES, MISIÓN, VISIÓN",
          nameNav2: "Pilares, Misión, Visión",
          helmet: 'Pilares, Misión, Visión',
          nameFooter: "Pilares, Misión, Visión",
          url: "/empresa/pilares",
          title: "NUESTROS PILARES",
          banner1: "",
          cards0: {
            card0: {
              id: "card0",
              img: "Pilares/Pilares-1.png",
              title: "INTEGRIDAD",
              text: "Es nuestro compromiso con la ética y la moralidad en todas nuestras acciones. Trabajamos siempre de manera transparente y cumplimos con todas las normas y regulaciones. La integridad es un valor fundamental en nuestra empresa y nos esforzamos por mantenerlo en todo momento",
            },
            card1: {
              id: "card1",
              img: "Pilares/Pilares-2.png",
              title: "EXCELENCIA",
              text: "Nos esforzamos por ser líderes en nuestro campo y ofrecer productos y servicios de la más alta calidad. Nuestro equipo de especialistas se esfuerza constantemente por mejorar y mantenerse actualizado en las últimas tecnologías y tendencias en nuestro campo. La excelencia técnica nos permite ser innovadores y estar siempre un paso adelante en la competencia",
            },
            card2: {
              id: "card2",
              img: "Pilares/Pilares-3.png",
              title: "TRANSFORMACION DIGITAL",
              text: "En nuestra empresa valoramos la transformación digital como una herramienta clave para alcanzar nuestros objetivos. Esta nos permite ser más eficientes, innovadores y competitivos en un mundo cada vez más conectado. A través de la automatización de procesos, la implementación de tecnologías avanzadas y la utilización de datos, estamos mejorando la experiencia de nuestros clientes y aumentando nuestra capacidad para tomar decisiones",
            },
            card3: {
              id: "card3",
              img: "Pilares/Pilares-4.png",
              title: "COMPROMISO",
              text: "En nuestra empresa, el compromiso es un valor fundamental. Nos aseguramos de proporcionar un servicio excepcional a nuestros clientes, y a trabajar incansablemente para alcanzar nuestros objetivos como empresa.",
            },
          },
          cards1: {
            card0: {
              id: "card1-0",
              img: "Nosotros/Mision.png",
              title: "MISIÓN",
              text: "Nuestra misión es proporcionar servicios de inspección, certificación y ensayos con los más altos estándares de calidad para garantizar la seguridad, calidad y cumplimiento de las normas en diversos sectores, transformando la industria, brindando agilidad, protección y valor agregado a nuestros clientes.",
            },
            card1: {
              id: "card1-1",
              img: "Nosotros/Vision.png",
              title: "VISIÓN",
              text: "Para el 2025 seremos reconocidos como transformadores de la industria de certificación, inspección y ensayos a través de la innovación y el desarrollo de tecnologías avanzadas para brindar soluciones personalizadas y agregar valor a nuestros clientes, siendo una empresa ética y socialmente responsable que contribuye al desarrollo sostenible de la región. ",
            },
          },
        },
        acreditaciones: {
          key: 3,
          id: "acreditaciones",
          name: "ACREDITACIONES",
          nameNav2: "Acreditaciones",
          helmet: 'Acreditaciones',
          nameFooter: "Acreditaciones",
          url: "/empresa/acreditaciones",
          banner1: "",
          documentOnac: {
            title: "ACREDITACIONES",
            subTitle:
              "Nuestros reconocimientos son el resultado del compromiso con la excelencia y los altos estándares técnicos que nos impulsan a ofrecer lo mejor",
            cards: {
              document1: {
                id: "cardInspec",
                url: "https://onac.org.co/certificados/15-OIN-014.pdf",
                img: "Inspeccion_peru.png",
                name: "INSPECCION",
                acreditacion: 'inspeccion',
                text0: 'En ITICPE contamos con acreditación ONAC, vigente a la fecha con código de acreditación:',
                textP:
                  "INTERNATIONAL TESTING INSPECTION &CERTIFICATION PERU S.A.C Organismo de inspección acreditado por el organismo de acreditación \nINACAL-DA con \nRegistro No. OI-018",
              },
              document3: {
                id: "cardProd",
                url: "https://onac.org.co/certificados/15-CPR-002.pdf",
                img: "ONAC_PRODUCTO.png",
                name: "PRODUCTOS",
                acreditacion: 'productos',
                text0:'En ITICCOL contamos con acreditación ONAC, vigente a la fecha con código de acreditación:',
                textP:
                  "En ITICCOL contamos con acreditación ONAC, vigente \na la fecha con código de acreditación 15-CPR-002, \nbajo la norma \nISO/IEC 17065:2012 para la certificación de producto",
              },
              document4: {
                id: "cardGest",
                url: "https://onac.org.co/certificados/12-CSG-001.pdf",
                img: "ONAC_GESTION.png",
                name: "SISTEMAS DE \nGESTIÓN",
                acreditacion: 'gestion',
                text0: 'En ITICCOL contamos con acreditación ONAC, vigente a la fecha con código de acreditación:',
                textP:
                  "En ITICCOL contamos con acreditación ONAC, vigente a la \nfecha con código de acreditación \n12-CSG-001, bajo la norma \nISO/IEC 17021-1:2015 para la certificación de sistemas \nde gestión",
              },
            },
          },
        },
        certificaciones: {
          key: 4,
          id: "certificaciones",
          name: "CERTIFICACIONES",
          nameNav2: "Certificaciones",
          helmet:'Certificaciones',
          nameFooter: "Certificaciones",
          url: "/empresa/certificaciones",
          banner1: "",
          cards: {
            card0: {
              id: "card_Certif_0",
              img: "Certificaciones/1-ITICCOL_9001_2015.jpg",
              name: "ISO 9001:2015",
            },
            card1: {
              id: "card_Certif_1",
              img: "Certificaciones/2-ITICCOL_14001_2015.jpg",
              name: "ISO 14001:2015",
            },
            card2: {
              id: "card_Certif_2",
              img: "Certificaciones/3-ITICCOL_45001_2018.jpg",
              name: "ISO 45001:2018",
            },
          },
        },
        equipo: {
          key: 5,
          id: "equipo",
          name: "NUESTRO EQUIPO",
          nameNav2: "Nuestro Equipo",
          nameFooter: "Nuestro equipo",
          helmet: "Nuestro equipo",
          url: "/empresa/equipo",
          banner1: "",
          cards0: {
            card0: {
              name: "NUESTRO EQUIPO",
              id: "card_equipo_0",
              img: "Equipo/Equipo-Melby.png",
              title: "Ing. Melvy Rocío Díaz Hernández",
              subTitle: "Country Manager",
              paragraph0:
                "Soy Ingeniera Metalúrgica, especialista en Alta Gerencia y Gestión de la Calidad, con una amplia experiencia en empresas multinacionales líderes en servicios de Inspección, Certificación y Ensayos, enfocados en los sectores de Oil & Gas, Minero e Infraestructura.",
              paragraph1:
                "Como  líder he demostrado capacidad para implementar planes efectivos y alcanzar los objetivos empresariales . mi experiencia en empresas multinacionales me ha permitido desarrollar una visión global de los negocios, así como la habilidad de liderar equipos multidisciplinarios en entornos altamente competitivos..",
              paragraph2:
                "Como Gerente General, he sido un agente de cambio, implementando prácticas empresariales innovadoras y creando un ambiente de trabajo altamente motivador y encaminado al logro de resultados. enfocada en la excelencia operacional, la integridad, la calidad y la satisfacción del cliente, clave para el éxito de las empresas que he liderado.",
            },
          },
          cards1: {
            card0: {
              id: "card_equip_0",
              img: "Equipo/Equipo-FernandoM.png",
              name: "Luis Baron",
              cargo: "Gerente de \nOperaciones",
              linkedInn: "https://www.linkedin.com/in/luis-jaime-baron-tenza-73415b77/",
              email: "luis.baron@iticco.com",
            },
            card1: {
              id: "card_equip_1",
              img: "Equipo/Equipo-FernandoM.png",
              name: "Fernando Cristancho",
              cargo: "GERENCIA DE SERVICIOS \nTRADICIONALES & AIM",
              linkedInn: "https://www.linkedin.com/in/fernando-javier-cristancho-ruiz-11556b58/",
              email: "fernando.cristancho@iticco.com",
            },
            card2: {
              id: "card_equip_2",
              img: "Equipo/Equipo-FernandoM.png",
              name: "David Ruiz",
              cargo: "Ingeniero \nSenior",
              linkedInn: "https://www.linkedin.com/in/david-ruiz-garcia-a72118b4/",
              email: "david.ruiz@iticco.com",
            },
            card4: {
              id: "card_equip_4",
              img: "Equipo/Equipo-FernandoM.png",
              name: "Nancy Niño",
              cargo: "Jefe sistemas de \ngestión Colombia - Perú",
              linkedInn: "https://www.linkedin.com/in/nancy-ni%C3%B1o-71982926/",
              email: "nancy.nino@iticco.com",
            },
            card5: {
              id: "card_equip_5",
              img: "Equipo/Equipo-FernandoM.png",
              name: "Janneth Chavez",
              cargo: "Gerente Comercial\nServicios Industriales",
              linkedInn: "https://www.linkedin.com/in/janneth-chavez-berrio-7b999b156/",
              email: "janneth.chavez@iticpe.com",
            },
            card6: {
              id: "card_equip_6",
              img: "Equipo/Equipo-FernandoM.png",
              name: "Carolina Quiñones",
              cargo: "Ejecutiva Comercial Senior\nServicios Industriales",
              linkedInn: "https://www.linkedin.com/in/carolina-qui%C3%B1ones-93759718b/",
              email: "carolina.quinones@iticpe.com",
            },
            
          },
        },
        proyectos: {
          key: 6,
          id: "proyectos",
          name: "NUESTRA EXPERIENCIA",
          nameNav2: "Nuestra Experiencia",
          nameFooter: "Nuestras Experiencias",
          helmet: "Nuestras Experiencias",
          nameSecction: "NUESTRA EXPERIENCIA",
          url: "/empresa/proyectos",
          banner1: "Mapa.png",
          subTitle:
            "Con orgullo presentamos nuestros proyectos y procesos más importantes, los cuales han dejado huella en nuestros clientes y han contribuido a nuestro crecimiento y reconocimiento en el mercado.",
          textMap: {
            id: 'text_map',
            text1:'Nuestros servicios han llegado a diferentes partes del mundo, ¡ y seguimos trabajando para llegar aún más lejos!',
            text2: 'EEUU, Alemania, Italia, Francia, España, México, Finlandia, Argentina, China, Salvador, India, Guatemala, Panamá, Costa Rica, Brasil, Ecuador',
            text3: '',
            text4:'Departametnos donde se han prestado servicios en Colombia (Producto+Inspección RETIE):',
            text5: 'Valle, Cundinamarca, Antioquia, Boyacá, Atlántico, Meta, Cesar, Santander, Guainía, Norte de Santander, Huila, Tolima, Putumayo, Caldas, Córdoba, Risaralda, Casanare',
          },
          cards: {
            card1: {
              id: "proyect1",
              img: "Experiencia/Gases-del-Pacifico.png", 
              title: "Gases del Pacifico",
              text: "Supervisión de la construcción Estaciones Satelitales de Regasificación",
            },
            card5: {
              id: "proyect5",
              img: "Experiencia/TGP.png",
              title: "TGP",
              text: "Supervisión de Construcción y Mantenimiento",
            },
            card7: {
              id: "proyect7",
              img: "Experiencia/Pluspetrol.png",
              title: "Pluspetrol",
              text: "Supervisión de Construcción, Mantenimiento y Cierre de Actividades en el Lote 8",
            },
            card8: {
              id: "proyect8",
              img: "Experiencia/Chinalco.png",
              title: "Chinalco",
              text: "Supervisión de Aseguramiento de Calidad para paquetes verticals Expansion Toromocho",
            },
            card9: {
              id: "proyect9",
              img: "Experiencia/ENEL.png",
              title: "ENEL",
              text: "Supervisión Actividades HSE Sector Generación Eléctrica",
            },
            card10: {
              id: "proyect10",
              img: "Experiencia/Terminales-Portuarios-Euroandinos.png",
              title: "Terminales Portuarios Euroandinos",
              text: "Supervisión Operación remoción y extraccción de embarcación CRATER",
            },
            card13: {
              id: "proyect13",
              img: "Experiencia/CONTUGAS.png",
              title: "Contugas",
              text: "Servicios Industriales Proyecto Gasoducto de Ica Contugas",
            },
            card14: {
              id: "proyect14",
              img: "Experiencia/SAVIA.png",
              title: "Savia",
              text: "Servicios Industriales Asistencia Técnica Especializada en Health, Safety and Environment",
            },
            card15: {
              id: "proyect15",
              img: "Experiencia/Quavii.png",
              title: "Quavii",
              text: "Servicios Interventoría Supervisión Cartográfica",
            },
          },
          testimonios: {
            card1: {
              id: "testimonios1",
              img: "",
              title: "Nombre Testimonio 1",
              subTitle: "empresa",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card2: {
              id: "testimonios2",
              img: "",
              title: "Nombre Testimonio 2",
              subTitle: "empresa",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card3: {
              id: "testimonios3",
              img: "",
              title: "Nombre Testimonio 3",
              subTitle: "empresa",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card4: {
              id: "testimonios4",
              img: "",
              title: "Nombre Testimonio 4",
              subTitle: "empresa",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card5: {
              id: "testimonios5",
              img: "",
              title: "Nombre Testimonio 5",
              subTitle: "empresa",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card6: {
              id: "testimonios6",
              img: "",
              title: "Nombre Testimonio 6",
              subTitle: "empresa",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
          },
          proyecto: {
            card0: {
              id: "proyectos0",
              img: "",
              title: "TÍTULO PROYECTO 1",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card1: {
              id: "proyectos1",
              img: "",
              title: "TÍTULO PROYECTO 2",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
            card2: {
              id: "proyectos2",
              img: "",
              title: "TÍTULO PROYECTO 3",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            },
          },
        },
        politicas: {
          key: 7,
          id: "politicas",
          name: "POLÍTICAS, CÓDIGOS Y REGLAMENTOS",
          nameNav2: "Políticas, códigos \ny reglamentos",
          helmet: "Políticas, códigos y reglamentos",
          url: "/empresa/politicas",
          banner1: "",
          cards: {
            card0: {
              id: "politicas-card0",
              img: "",
              text: "CÓDIGO DE \nCONDUCTA CORPORATIVO",
            },
            card1: {
              id: "politicas-card1",
              img: "",
              text: "CONDICIONES GENERALES \nDEL NEGOCIO",
            },
            card2: {
              id: "politicas-card2",
              img: "",
              text: "DECLARACION DE INDEPENDENCIA \nIMPARCIALIDAD E INTEGRIDAD",
            },
            card3: {
              id: "politicas-card3",
              img: "",
              text: "POLITICA DE SUSPENSIÓN \nDE TAREAS",
            },
            card4: {
              id: "politicas-card4",
              img: "",
              text: "POLITICA INTEGRAL \nQHSE ITICPE",
            },
            card5: {
              id: "politicas-card5",
              img: "",
              text: "MANEJO DE EQUIPOS \nDE COMPUTO Y AYUDAS \nINFORMÁTICAS",
            },
            card6: {
              id: "politicas-card6",
              img: "",
              text: "INTERNATIONAL TESTING \nINSPECTION & CERTIFICATION \nPERU S.A.C.",
            },
          },
        },
      },
    },
    servicios: {
      id: "serviciosNav",
      name: "SERVICIOS",
      url: "",
      subTitle:
        "Nuestra experiencia en proyectos de gran envergadura a nivel nacional e internacional nos permite ofrecer confianza, agilidad, integridad y seguridad en servicios de SUPERVISIÓN, INSPECCIÓN, CERTIFICACIÓN Y ENSAYOS.",
      dropDownMenu: {
        industriales: {
          key: 3,
          id: "industriales",
          name: "SERVICIOS INDUSTRIALES",
          nameNav2: "Servicios Industriales",
          nameFooter: "Servicios industriales",
          url: "/servicios/industrial",
          helmet: 'Servicios industriales',
          btn1: 'MÁS SERVICIOS',
          subTitle2:
            "Ofrecemos confianza, agilidad, integridad y seguridad en sus servicios, contando con el componente técnico más preparado en el mercado. Además, basamos nuestros conceptos en standares tecnicos internacionales.",
          banner1: "",
          nameBtn: "MÁS SERVICIOS",
          cardImg: "INDUSTRIALES.png",
          cardText:
            "Servicios Industriales \nAsistencia Técnica \nEspecializada en Health, \nSafety and Environment ",
          cards: {
            card0: {
              id: "servicios-de-inspeccion",
              img: "servicios-industriales/si-inspeccion.png",
              imgPc: "servicios-industriales/si-inspeccion-dk.png",
              imgMobile: "servicios-industriales/si-inspeccion-mb.png",
              text1: "SERVICIOS \nDE INSPECCIÓN",
              text2: "SERVICIOS DE INSPECCIÓN",
              helmet: 'Servicios de inspección',
              acreditacion: 'inspeccion',
              normaNumero: true,
              paragraph1:
                "Ofrecemos servicios de inspección de alta calidad para garantizar que los proyectos de nuestros clientes cumplan con los estándares de calidad y seguridad requeridos.\n",
              btn1: "REGRESAR",
            },
            card1: {
              id: "ensayos-no-destructivos",
              img: "servicios-industriales/si-ensayos.png",
              imgPc: "servicios-industriales/si-ensayos-dk.png",
              imgMobile: "servicios-industriales/si-ensayos-mb.png",
              text1: "ENSAYOS NO \nDESTRUCTIVOS",
              text2: "ENSAYOS NO DESTRUCTIVOS",
              helmet: 'Ensayos no destructivos',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                'Contamos con servicios de ensayos no destructivos para evaluar la integridad estructural de los diferentes componentes de sus estructuras y equipos, garantizando así la seguridad y la calidad de cada proyecto.\n\nOfrecemos servicios de inspección de alta calidad para garantizar que los proyectos de nuestros clientes cumplan con los estándares de calidad y seguridad requeridos.\n \n– Inspección Visual VT Directa – Remota.\n– Líquidos Penetrantes PT.\n– Partículas Magnéticas MT.\n– Medición de espesores UT.\n– Mapeo de Corrosión Scan C- PAUT.\n– Defectología UT Convencional – PAUT.\n– Fuga de flujo magnético MFL.\n– Perfil de Durezas.\n– Termografía infrarroja.\n– Metalografías IN SITU.\n– Identificación positiva de materiales PMI.\n– Inspección de recubrimientos.\n',
              btn1: "REGRESAR",
            },
            card2: {
              id: "gestion-de-activos-evaluacion-de-integridad",
              img: "servicios-industriales/si-evaluacion-integridad.png",
              imgPc: "servicios-industriales/si-evaluacion-integridad-dk.png",
              imgMobile: "servicios-industriales/si-evaluacion-integridad-mb.png",
              text1: "GESTION DE ACTIVOS,\nEVALUACION DE INTEGRIDAD ",
              text2: "GESTION DE ACTIVOS, EVALUACION DE INTEGRIDAD ",
              helmet: 'Gestion De Activos, Evaluacion De Integridad ',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                'Tanques\nGrúas\nElementos de Izaje\nInspecciones remotas\nEntrenamiento y Certificación de operadores',
              btn1: "REGRESAR",
            },
            card3: {
              id: "servicios-de-supervision-interventoria",
              img: "servicios-industriales/si-interventoria.png",
              imgPc: "servicios-industriales/si-interventoria-dk.png",
              imgMobile: "servicios-industriales/si-interventoria-mb.png",
              text1: "SERVICIOS DE SUPERVISION,\nINTERVENTORÍA",
              text2: "SERVICIOS DE SUPERVISION, INTERVENTORIA",
              helmet: 'Servicios de interventoría',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                "Ofrecemos servicios de seguimiento técnico, legal, ambiental y financiero a contratos firmados entre partes para la construcción de obras eléctricas, mecánicas y civiles.\n \nContamos con un equipo especializado para identificar oportunamente posibles desviaciones contractuales, evitando sobrecostos y entregas extemporáneas de los proyectos\n\nSupervisión Off-shore - On shore\nSupervisión de obras de construcción\nIngeniería eléctrica & Tecnología de construcción\n·Inspecciones industriales & ensayo de materiais\n·Interventoria, Gerenciamiento de Proyectos\n·Energía y medio ambiente\n·Cybersecurity & Functional Safety",
              btn1: "REGRESAR",
            },
            card4: {
              id: "supervicion-de-obras-civiles",
              img: "servicios-industriales/si-interventoria.png",
              imgPc: "servicios-industriales/si-interventoria-dk.png",
              imgMobile: "servicios-industriales/si-interventoria-mb.png",
              text1: "SUPERVICION DE \nOBRAS CIVILES",
              text2: "SUPERVICION DE OBRAS CIVILES",
              helmet: 'Supervicion De Obras Civiles',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                "Supervisión Obras civiles, Infraestructura, obras menores",
              btn1: "REGRESAR",
            },
            card5: {
              id: "inspeccion-y-certificacion-de-equipos",
              img: "servicios-industriales/si-interventoria.png",
              imgPc: "servicios-industriales/si-interventoria-dk.png",
              imgMobile: "servicios-industriales/si-interventoria-mb.png",
              text1: "INSPECCIÓN Y \nCERTIFICACIÓN DE EQUIPOS",
              text2: "INSPECCIÓN Y CERTIFICACIÓN DE EQUIPOS",
              helmet: 'Inspeccion Y Certificacion De Equipos',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                "Normativa\n\nInspección de Grúas móviles bajo ASME B30.5\n Inspección de puentes  grúa bajo ASME B30.2\nInspección de eslingas  B30.9\nInspección de accesores de Izaje ASME B30.26, B30.10\n\nInspección de máquinas transportadoras y elevadoras\n\nTipos de Grúas :\nPlumas\nPuentes Grúas\nElevadores de Contenedores\nMontacargas\nCanastillas\nAscensores y Elevadores\n\nInspección de Elementos de Izaje\n\nEslingas(Sintéticas, metálicas, cadena, etc)\nGrilletes\nCancamos\nGanchos\nTensores\nWinches",
              btn1: "REGRESAR",
            },
            card6: {
              id: "capacitacion-de-personal",
              img: "servicios-industriales/si-interventoria.png",
              imgPc: "servicios-industriales/si-interventoria-dk.png",
              imgMobile: "servicios-industriales/si-interventoria-mb.png",
              text1: "CERTIFICACIÓN DE PERSONAL",
              text2: "CAPACITACIÓN, ENTRENAMIENTO Y CERTIFICACIÓN DE PERSONAL, OPERADORES Y SUPERVISORES",
              helmet: 'Certificacion De Personal',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                "Máquinas transportadoras y elevadoras\n\nCertificación de Operadores Grúas\nCertificación de Operadores Manlift\nCertificación de Operadores Montacargas\nCertificación de Operadores Riggers\nCertificación de Operadores Telehandler\nEntre Otros.\n\nMaquinaria de Línea Amarilla\n\nCertificación de Operadores Cargador frontal\nCertificación de Operadores Retroexcavadora\nCertificación de OperadoresTractor \nCertificación de Operadores Camión Grúa\nEntre Otros.\n\nSeguridad y Salud en el Trabajo\n\nIdentificación de Peligros, Evaluación de Riesgo y Control – IPERC\nOperación segura de equipos y elementos\nVigias y Señalización\nErgonomía\nUso de herramientas y Manuales de Poder\nEquipos de protección personal (Epps)\nCapacitaciónes Obligatorias por Ley SST 29783\nEntre Otros.",
              btn1: "REGRESAR",
            },
            card7: {
              id: "certificación-redes-gas",
              img: "servicios-industriales/si-retie-redes-gas.png",
              imgPc: "servicios-industriales/si-retie-redes-gas-dk.png",
              imgMobile: "servicios-industriales/si-retie-redes-gas-mb.png",
              text1: "CERTIFICACIÓN \nINSTALACIONES \nREDES GAS",
              text2: "CERTIFICACIÓN  INSTALACIONES  REDES GAS",
              helmet: 'Certificación  instalaciones  redes gas',
              acreditacion: 'inspeccion',
              normaNumero: true,
              paragraph1:
                "Inspeccion de los requisitos para evaluar la conformidad de las instalaciones para suministro de gas combustible en edificaciones residenciales, industriales y comerciales.\n",
              btn1: "REGRESAR",
            },
            card8: {
              id: "supply-chain-&-expediting",
              img: "servicios-industriales/si-supply.png",
              imgPc: "servicios-industriales/si-supply-dk.png",
              imgMobile: "servicios-industriales/si-supply-mb.png",
              text1: "SUPPLY CHAIN \n& EXPEDITING",
              text2: "SUPPLY CHAIN & EXPEDITING",
              helmet: 'Supply chain & expediting',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                'A través del Expediting, se busca garantizar el cumplimiento de las condiciones estipuladas asegurando sus plazos de entrega.\n\nAsegurando la disponibilidad del producto cuando sea necesario mediante el monitoreo de los cronogramas y tomando acciones correctivas ayudará a  cumplir con las expectativas de las adquisiciones desde sus plazos de entregas hasta las especificaciones necesarias que requiere para sus productos.\n\nNos encargaremos de ayudarlo con sus objetivos con nuestra experiencia y cooperación de nuestros inspectores presentes en más de 65 países con el soporte de nuestros aliados estratégicos.\n\nExpediting: Asegúrese de que sus equipos, materiales y suministros cumplan con lo especificado, funcionen correctamente y estén listos en el tiempo pactado.\n\nInspecciónes de Fabricación y Verificación : Las inspecciones realizadas durante esta etapa, asegura que el equipo adquirido cumpla las normativas y estándares de calidad, así le brindará mayor confianza a sus compras en el exterior.\n\nPruebas de Aceptación en Fábrica FAT: Mediante las pruebas FAT se realiza la verificación de los requisitos técnicos y funcionamiento de cada uno de los componentes en el momento de la producción de los mismos y antes de salir de fabrica.\n\nInspección de Proveedores: A lo largo de su cadena de suministro, lo ayudamos en todo momento con la inspección de los procesos y cumplimientos normativos de sus proveedores, garantizando la calidad de sus suministros y brindando mayor confianza a cada cliente desde la inspección en origen, supervisión de pruebas FAT y embarque.\n\nInspecciones Pre Embarque, Carga y Descarga: Acompañamos desde el proceso de verificación, aseguramiento y embalaje de la mercancia final previo a su carga y traslado a puerto. La inspección de la carga consiste en velar por la integridad con una inspección detallada de los equipos o materiales previo a su envío, de igual forma en la recepción de la mercadería en el país de destino.',
              btn1: "REGRESAR",
            },
            card9: {
              id: "gerencia-de-proyectos",
              img: "servicios-industriales/si-gerencia-proyectos.png",
              imgPc: "servicios-industriales/si-gerencia-proyectos-dk.png",
              imgMobile: "servicios-industriales/si-gerencia-proyectos-mb.png",
              text1: "GERENCIAMIENTO \nINTEGRAL DE \nPROYECTOS",
              text2: "GERENCIAMIENTO INTEGRAL DE PROYECTOS",
              helmet: 'Gerencia de proyectos',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                'Servicios de direccionamiento, planeación, ejecución, y monitoreso de proyectos\n Servicios Integrales Administrativos, técnicos, financieros, legales, ambentales.',
              btn1: "REGRESAR",
            },
            card10: {
              id: "inspeccion-mediante-drones",
              img: "servicios-industriales/si-gerencia-proyectos.png",
              imgPc: "servicios-industriales/si-gerencia-proyectos-dk.png",
              imgMobile: "servicios-industriales/si-gerencia-proyectos-mb.png",
              text1: "INSPECCION \nMEDIANTE \nDRONES",
              text2: "INSPECCION MEDIANTE DRONES A PARQUES FOTOVOLTAICOS",
              helmet: 'Gerencia de proyectos',
              acreditacion: 'inspeccion',
              normaNumero: false,
              paragraph1:
                'Interventoría \nInspección y Termografía\nElectroluminiscencias\nAnálisis de curvas IV\nDue Diligence\nACR ( Análisis de Causa Raíz)',
              btn1: "REGRESAR",
            },
          },
          documents: {
            document0: {
              id: "doc_n0",
              text: "- Documento 1 (descargar)",
              url: "",
            },
            document1: {
              id: "doc_n1",
              text: "- Documento 2 (descargar)",
              url: "",
            },
            document2: {
              id: "doc_n2",
              text: "- Documento 3 (descargar)",
              url: "",
            },
            document3: {
              id: "doc_n3",
              text: "- Documento 4 (descargar)",
              url: "",
            },
          },
        },
        producto: {
          key: 2,
          id: "producto",
          name: "CERTIFICACIÓN DE PRODUCTO",
          nameNav2: "Certificación de Producto",
          nameFooter: "Certificación de producto",
          url: "/servicios/producto",
          helmet: 'Certificación de producto',
          btn1: 'MÁS SERVICIOS',
          subTitle2:
            "Nuestros procesos de certificación son rigurosos y ágiles. Nos esforzamos por asegurar que todos los productos que certificamos cumplan con los más altos estándares de calidad y seguridad.",
          banner1: "",
          nameBtn: "MÁS SERVICIOS",
          cardImg: "PRODUCTO.png",
          cardText:
            "Tiene como finalidad demostrar al mercado y a los organismos reguladores que un proveedor fabrica productos, cumpliendo en todas sus etapas con los requisitos técnicos definidos.",
          cards: {
            card0: {
              id: "Normas-Tecnicas",
              img: "certificacion-producto/cp-retilap.png",
              imgPc: "certificacion-producto/cp-retilap-dk.png",
              imgMobile: "certificacion-producto/cp-retilap-mb.png",
              text1: "NORMAS TECNICAS",
              text2: "NORMAS TECNICAS",
              helmet: 'Retilap',
              acreditacion: 'productos',
              normaNumero: true,
              paragraph1:
                'Certifamos sus productos de acuerdo a normas técnicas Nacionales e internacionales como: \n\nNTC\nNTP\nIEC\nASTM\nIEEE\nISO\nASME\nUL\nentre otras.\n',
              btn1: "REGRESAR",
            },
            card1: {
              id: "reglamento-refrigeracion-costa-rica",
              img: "certificacion-producto/cp-refrigeracion.png",
              imgPc: "certificacion-producto/cp-refrigeracion-dk.png",
              imgMobile: "certificacion-producto/cp-refrigeracion-mb.png",
              text1: "REGLAMENTO \nREFRIGERACIÓN \nCOSTA RICA",
              text2: "REGLAMENTO REFRIGERACIÓN \nCOSTA RICA",
              helmet: 'Reglamento refrigeración costa rica',
              acreditacion: 'productos',
              normaNumero: true,
              paragraph1:
                'Reglamento Técnico Refrigeración (Costa Rica) \n\nCertificación del desempeño de refrigeradores y congeladores electrodomésticos operados por motocompresor hermético con relación a los valores máximos de consumo de energía eléctrica bajo RTCR 482 de 2015.\n',
              btn1: "REGRESAR",
            },
            card2: {
              id: "tca-enel",
              img: "certificacion-producto/cp-tca.png",
              imgPc: "certificacion-producto/cp-tca-dk.png",
              imgMobile: "certificacion-producto/cp-tca-mb.png",
              text1: "TCA ENEL",
              text2: "TCA ENEL",
              helmet: 'Tca enel',
              acreditacion: 'productos',
              normaNumero: false,
              paragraph1:
                'TCA ENEL\n\nTechnical Conformity Assessment - Certificación de tercera parte de productos eléctricos de acuerdo con los estándares y lineamientos requeridos por ENEL para la aprobación de sus proveedores.\n',
              btn1: "REGRESAR",
            },
            card3: {
              id: "eficiencia-energetica-peru",
              img: "certificacion-producto/cp-energetica-peru.png",
              imgPc: "certificacion-producto/cp-energetica-peru-dk.png",
              imgMobile: "certificacion-producto/cp-energetica-peru-mb.png",
              text1: "EFICIENCIA \nENERGÉTICA PERÚ",
              text2: "EFICIENCIA ENERGÉTICA PERÚ",
              helmet: 'Eficiencia energetica perú',
              acreditacion: 'productos',
              normaNumero: true,
              paragraph1:
                'Reglamento Técnico Eficiencia Energética (Perú)\n\nCertificación de etiquetado de eficiencia energética bajo Decreto Supremo 009 de 2017 aplicable a lámparas, motores, electrodomésticos y gasodomésticos.\n',
              btn1: "REGRESAR",
            },

          },
          documents: {
            document0: {
              id: "doc_n0",
              text: "- Documento 1 (descargar)",
              url: "",
            },
            document1: {
              id: "doc_n1",
              text: "- Documento 2 (descargar)",
              url: "",
            },
            document2: {
              id: "doc_n2",
              text: "- Documento 3 (descargar)",
              url: "",
            },
            document3: {
              id: "doc_n3",
              text: "- Documento 4 (descargar)",
              url: "",
            },
          },
        },
        gestion: {
          key: 1,
          id: "gestion",
          name: "SISTEMAS DE GESTIÓN",
          nameNav2: "Sistemas de Gestión",
          nameFooter: "Sistemas de Gestión",
          url: "/servicios/gestion",
          helmet: 'Sistemas de Gestión',
          btn1:'MÁS SERVICIOS',
          subTitle2:
            "La unidad de negocio de Sistemas de Gestión cuenta con un amplio y competente equipo de profesionales, con la experiencia y conocimientos para desarrollar una auditoría objetiva, imparcial y con valor agregado que le permita a la organización el mejoramiento de sus Sistemas de Gestión.",
          banner1: "",
          nameBtn: "VER MÁS",
          cardImg: "GESTION.png",
          cardText:
            "Contamos con un amplio y competente equipo de profesionales con la experiencia y conocimientos para desarrollar una auditoría objetiva, imparcial y con valor agregado que le permita a la organización el mejoramiento de sus Sistemas de Gestión.",
          cards: {
            card0: {
              id: "certificacion",
              img: "sistema-gestion/sg-certificación.png",
              imgPc: "sistema-gestion/sg-certificación-desktop.png",
              imgMobile: "sistema-gestion/sg-certificación-mobile.png",
              text1: "CERTIFICACIÓN",
              text2: "CERTIFICACIÓN",
              helmet:'Certificación',
              acreditacion: 'gestion',
              normaNumero: true,
              url: '/servicios/gestion/certificacion',
              paragraph1: 'Ofrecemos la acreditación ONAC.\n\nLa certificación en Sistemas de Gestión por parte de ITICCOL le aporta los siguientes valores y beneficios a la empresa.\nISO 9001:2015 - Sistemas de Gestión de la Calidad\n• Imagen y reputación de buenos productos y servicios ante sus clientes y el mercado.\n• Eficacia y eficiencia de los procesos de la organización.\n• Credibilidad y confianza hacia clientes y proveedores.\n\nISO 14001: 2015 – Sistemas de Gestión Ambiental\n• Imagen y reputación de una organización comprometida con el medio ambiente.\n• Capacidad de la organización para cumplir con la legislación ambiental local.\n\nISO 45001: 2018 / OHSAS 18001: 2007 Sistema de Gestión de la Seguridad y Salud en el Trabajo \n-Espacios y lugares de trabajo seguros\n-Prevención de incidentes y enfermedades relacionadas con el trabajo\n-Control de los riesgos relacionados con el trabajo\n-Maximizar la productividad y desempeño de los trabajadores.\n',
              btn1: "REGRESAR",
            },
            card2: {
              id: "auditoria-interna",
              img: "sistema-gestion/sg-auditoria.png",
              imgPc: "sistema-gestion/sg-auditoria-desktop.png",
              imgMobile: "sistema-gestion/sg-auditoria-mobile.png",
              text1: "AUDITORÍA INTERNA",
              text2: "AUDITORÍA INTERNA",
              helmet: 'Auditoría interna',
              acreditacion: 'gestion',
              normaNumero: false,
              paragraph1:
                'La auditoria interna es un examen critico pero objetivo de los procesos de la organizacion y de los requisitos contenidos en las normas del Sistema de Gestion Respectivo\n\nLa auditoría interna de ITICCO se enfoca en mejorar los sistemas y procesos de la organización para que sean más efectivos y eficientes. A través de estas auditorías, se buscan oportunidades de mejora para impulsar la excelencia y el mejoramiento continuo en la gestión de procesos. Este servicio se ofrece a empresas que no han sido certificadas previamente por ITICCOL.\n',
              btn1: "REGRESAR",
            },
            card1: {
              id: "gap-analisis",
              img: "sistema-gestion/sg-gap.png",
              imgPc: "sistema-gestion/sg-gap-desktop.png",
              imgMobile: "sistema-gestion/sg-gap-mobile.png",
              text1: "GAP ANÁLISIS",
              text2: "GAP ANÁLISIS",
              helmet: 'Gap análisis',
              acreditacion: 'gestion',
              normaNumero: false,
              paragraph1: 'Nuestro servicio está diseñado para que las organizaciones conozcan el desempeño de sus sistemas frente a los requisitos de las normas\n\ncon esta herramienta se puede medir el progreso o grado de implementación de un sistema, permite identificar las acciones a tomar para alcanzar las metas propuestas dentro de la organización.\n\nAlgunos de los beneficios son:\n-Medir el progreso o grado de implementación de un sistema y de la eficacia de los procesos.\n-Identificar las brechas que se deben subsanar para tener un sistema excelente.\n-	Identificar las acciones a tomar para alcanzar las metas propuestas por la organización\n',
              btn1: "REGRESAR",
            },
            card3: {
              id: "evaluacion-de-proveedores",
              img: "sistema-gestion/sg-evaluacion.png",
              imgPc: "sistema-gestion/sg-evaluacion-desktop.png",
              imgMobile: "sistema-gestion/sg-evaluacion-mobile.png",
              text1: "EVALUACIÓN DE \nPROVEEDORES",
              text2: "EVALUACIÓN DE PROVEEDORES",
              helmet: 'Evaluación de proveedores',
              acreditacion: 'gestion',
              normaNumero: false,
              paragraph1: 'Las Auditorías de realizadas por ITICCOL permiten identificar oportunidades y riesgos potenciales en la cadena de suministro, optimizar el desempeño de los proveedores, también permiten prevenir afectaciones al Sistema de Gestión por fallas en la gestión de proveedores.\n\n• Identificación del status actual de sus proveedores existentes y potenciales e identificar proveedores críticos.\n• Crear relaciones sustentables y de largo plazo con sus proveedores.\n• Aumento de compromiso y desempeño de sus proveedores.\n• Prevenir riesgos de imagen y reputación que pueden derivarse por el desempeño ineficaz de sus proveedores.\n•Reducir costos de calidad y operación por óptimo desempeño de proveedores.\n',
              btn1: "REGRESAR",
            },
          },
          documents: {
            document0: {
              id: "doc_n0",
              text: "- Documento 1 (descargar)",
              url: "",
            },
            document1: {
              id: "doc_n1",
              text: "- Documento 2 (descargar)",
              url: "",
            },
            document2: {
              id: "doc_n2",
              text: "- Documento 3 (descargar)",
              url: "",
            },
            document3: {
              id: "doc_n3",
              text: "- Documento 4 (descargar)",
              url: "",
            },
          },
        },
      },
    },
    consulta: {
          id: "consultaNav",
          name: "CONSULTA TU CERTIFICADO",
          url: "",
          img: "modal-certificado.jpg",
          input: {
        input1: {
          id: "inputCertificado",
            label: "Categoría del certificado",
              placeHolder: "Categoría de servicio",
                type: "select",
                  select: {
            select1: "Sistemas de Gestión",
              select2: "Certificación de Producto",
                select3: "Servicios Industriales",
                  select4: "Certificación de Personas",
              },
        },
        input2: {
          id: "inputEmail",
            label: "E-mail",
              placeHolder: "usuario@correo.com",
                invalidEmail: "Ingresa un correo valido",
                  incorrectData: "Datos incorrectos",
                    className: "classAlert",
                      type: "email",
                        name: "email",
            },
        input3: {
          id: "inputEmailVerif",
            label: "Verifica tu E-mail",
              placeHolder: "usuario@correo.com",
                invalidEmail: "Ingresa un correo valido",
                  incorrectData: "Datos incorrectos",
                    className: "classAlert",
                      type: "email",
                        name: "email",
            },
        input4: {
          id: "certificateNumber",
            label: "Digita tu número de certificado",
              placeHolder: "0000000",
                invalidNumber: "Ingresa el numero del certificado",
                  incorrectData: "Numero incorrecto",
                    className: "classAlert",
                      type: "tel",
                        name: "certificate",
            },
      },
    },
    cotizacion: {
      id: "cotizacionNav",
      name: "SOLICITA TU COTIZACIÓN",
      url: "/cotizacion",
      nameFooter: "Solicita Tu Cotizacion",
      subTitle: "CONOCE MÁS SOBRE NUESTROS SERVICIOS \nLLEVA TU EMPRESA AL SIGUIENTE NIVEL",
      helmet: "SOLICITA TU COTIZACIÓN",
      form: {
        id: "form_cotizacion",
        labelName: "Nombre",
        labelApellido:'Apellidos',
        labelRazonSocial:'Razón social',
        labelNit:'Nit:',
        labelCelular:'Celular',
        labelEmail:'E-mail',
        labelCategoria:'Categoría de Servicio',
        labelTipoServicio:'Tipo de Servicio',
        categoria: {
          industriales: {
            id: 'select_industriales',
            name: 'Servicios Industriales',
            tipo: {
              tipo1: 'CertificacióN Instalaciones Retie/Retilap',
              tipo2: 'CertificaciÓN Instalaciones Redes Gas',
              tipo3: 'CertificaciÓN Estaciones De Servicio',
              tipo4: 'Servicios de Inspección',
              tipo5: 'Servicios de Interventoría',
              tipo6: 'Supervisión Técnica Independiente',
              tipo7: 'Evaluacion De Integridad',
              tipo8: 'Gerencia De Proyectos',
              tipo9: 'Homologación de Proveedores',
              tipo10: 'Ensayos No Destructivos',
              tipo11: 'Supply Chain & Expediting',
            }
          },
          producto: {
            id: 'select_producto',
            name: 'Certificación de Producto',
            tipo: {
              tipo1: 'Reglamento Refrigeración Costa Rica',
              tipo2: 'Reglamento Barras Corrugadas',
              tipo3: 'Retilap',
              tipo4: 'Retie',
              tipo5: 'Retiq',
              tipo6: 'Reglamento De Pilas',
              tipo7: 'Reglamento De Seguridad Gasodomésticos',
              tipo8: 'Eficiencia Energética Perú',
              tipo9: 'Tca Enel',
            }
          },
          gestion:{
            id:'select_gestion',
            name: 'Sistemas de Gestión',
            tipo: {
              tipo1:'Evaluación de Proveedores',
              tipo2:'Gap Análisis',
              tipo3:'Auditoría Interna',
              tipo4:'Auditoría Interna',
              }
          },
        },
        checkbox:
          "Al dar click al check, nos autoriza al tratamiento de sus datos personales. Con el fin de dar cumplimiento a lo establecido en la Ley 1581 de 2012 y de su Decreto reglamentario 1377 de 2013, INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S.A.S., identificada con NIT 900424702-7, con domicilio principal en la Calle 108 # 45-27 Bogotá D.C, portal Web www.iticco.com número de teléfono 601 3900757 y correo electrónico quejasreclamosapelaciones@iticco.com",
        }


    },
    contacto: {
      id: "contactonNav",
      name: "CONTACTO",
      nameFooter: "Formulario de contacto",
      url: "/contacto",
      title: "¡CONTÁCTANOS!",
      subTitle: "CONOCE MÁS SOBRE \nNUESTROS SERVICIOS",
      btn: "COMUNÍCATE CON NUESTRO EQUIPO",
      btnMovile: "COMUNÍCATE",
      textBarraContac:"CONOCE MÁS SOBRE NUESTROS SERVICIOS Y LLEVA TU EMPRESA AL SIGUIENTE NIVEL",
      contactanos: {
        id: "page_contacto",
        title: "¡CONTÁCTANOS!",
        helmet: "Contactanos",
        subTitle:"CONOCE MÁS SOBRE NUESTROS SERVICIOS \nLLEVA TU EMPRESA AL SIGUIENTE NIVEL",
        labelName: "Nombre Completo",
        labelDocument: "Cédula",
        labelPhone: "Teléfono o Celular",
        labelEmail: "E-mail",
        labelSolic: "Solicitud",
        placeholder_solic: "Selecciona tu solicitud",
        solicitud: {
          0: "Felicitación",
          1: "Solicitud",
          2: "Apelación",
          3: "Queja o Reclamo",
          4: "Otro",
        },
        checkbox:
        "Al dar click al check, nos autoriza al tratamiento de sus datos personales. Con el fin de dar cumplimiento a lo establecido en la Ley 1581 de 2012 y de su Decreto reglamentario 1377 de 2013, INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S.A.S., identificada con NIT 900424702-7, con domicilio principal en la Calle 108 # 45-27 Bogotá D.C, portal Web www.iticco.com número de teléfono 601 3900757 y correo electrónico quejasreclamosapelaciones@iticco.com",
          },
    },
    countries: {
      colombia: {
        id: "colombia",
        name: "COL",
        url: "https://itic.vercel.app",
        img: "Bandera-col.png",
      },
      // peru: {
      //     id: "peru",
      //     name: "PER",
      //     url: "https://xd.adobe.com/view/9b481622-0745-4457-b772-4cb1961cf04d-ce1b/?fullscreen",
      //     img: "Bandera-Per.png",
      //   },
    },
    home: {
      bannerHome1: "",
        bannerText1: "INSPECCIÓN",
          bannerParrafo1:
      "A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.",
        bannerBtn1: "SOLICITAR INFORMACIÓN",
          sectionServicios: {
        text1: "SOLICITAR INFORMACIÓN",
          text2:
        "En iticcol contamos con acreditación ONAC, vigente a la fecha con código de acreditación:",
          textLayout:
        "En iticcol contamos con acreditación ONAC, vigente a la fecha con código de acreditación:",
          btnLayout: "ACEPTAR",
            cards: {
          cards1: {
            textCard1: "SISTEMAS DE GESTIÓN",
              textCard2:
            "- Certificación - GAP Análisis - Auditoría Interna - Evaluación de Proveedores",
              textBtn: "VER MÁS",
                imgCard: "",
                  imgCsg001: "",
              },
          cards2: {
            textCard1: "CERTIFICACIÓN DE PRODUCTO",
              textCard2:
            "- TCA ENEL - Eficiencia energética - Gasodomésticos - Barras Corrugadas - Retilap - Retie - Pilas - RetiQ - Refrigeradores y congeladores",
              textBtn: "VER MÁS",
                imgCard: "",
                  imgCpr002: "",
              },
          cards3: {
            textCard1: "SERVICIOS INDUSTRIALES",
              textCard2:
            "- Certificación: Sistemas Retie/Retilap - Redes de Gas - Estaciones de servicio - Servicios de: interventoría - Inspección- Supervisión Técnica Independiente - Gerencia de Proyectos -Ensayos no destructivos - Evaluación de Integridad - Homologación de Proveedores - Supply Chain& Expediting",
              textBtn: "VER MÁS",
                imgCard: "",
                  imgOin014: "",
              },
          cards4: {
            textCard1: "CERTIFICACIÓN DE PERSONAS",
              textCard2:
            "- Gas Natural Residencial y Comercial - Gas Natural Comprimido Vehicular",
              textBtn: "VER MÁS",
                imgCard: "",
                  imgOco006: "",
              },
        },
      },
      enfoque: {
        text1: "NUESTRO \nADN",
          text2: "MÁS SOBRE \nNOSOTROS",
            textBtn: "CONOCE MÁS",
              parrafo:
        "Somos una empresa comprometida con la responsabilidad social, la sostenibilidad, la integridad y la excelencia operacional. Esto nos permite ofrecer servicios de alta calidad y contribuir al desarrollo del país. Contamos con experiencia en proyectos de gran envergadura, entregando siempre confianza, agilidad y seguridad en servicios de Inspección, Supervisión, Interventoría, Certificación y Ensayos. Además, ofrecemos soluciones digitales a la medida de nuestros clientes para agilizar la toma de decisiones y ahorrar recursos. Basamos nuestros procesos en estándares técnicos globales y contamos con profesionales con las calificaciones técnicas.",
          cards: {
          card1: {
            text1: "AÑOS",
              text2: "EXPERIENCIA",
              },
          card2: {
            text1: "COLABORADORES",
              text2: "CAPACIDAD LOCAL",
              },
          card3: {
            text1: "SOPORTE",
              text2: "RED GLOBAL",
              },
        },
      },
      contactanos: {
        banner: "",
          text1: "¡CONTÁCTANOS!",
            text2: "CONOCE MÁS SOBRE NUESTROS SERVICIOS",
              textBtn: "COMUNÍCATE CON NUESTRO EQUIPO",
          },
    },
    politicas: {
      id: "politicas",
        name: "POLÍTICAS, CÓDIGOS Y REGLAMENTOS",
          url: "/empresa/politicas",
            btn: "CONOCE TODAS NUESTRAS POLÍTICAS",
    },
    enfoque: {
      id: "Enfoque",
        title: "NUESTRO \nADN",
          subTitle: "SOLUCIONES APLICABLES A \nCUALQUIER INDUSTRIA",
            img: "banner_2_desktop.png",
              url: "/empresa/nosotros",
                textBtn: "MÁS SOBRE NOSOTROS",
                  paragraph:
      "Somos una empresa comprometida con la responsabilidad social, la sostenibilidad, la integridad y excelencia operacional. Esto nos permite ofrecer servicios de alta calidad y contribuir al desarrollo del país. Contamos con experiencia en proyectos de gran envergadura, entregando siempre confianza, agilidad y seguridad en servicios de Inspección, Supervisión, Interventoría, Certificación y Ensayos. Además, ofrecemos soluciones digitales a la medida de nuestros clientes para agilizar la toma de decisiones y ahorrar recursos. Basamos nuestros procesos en estándares técnicos globales y contamos con profesionales con las mas altas calificaciones técnicas.",
        cards: {
        card1: {
          text1: "AÑOS",
            text2: "EXPERIENCIA",
              count: 13,
                url: "/empresa/proyectos",
            },
        card2: {
          text1: "COLABORADORES",
            text2: "CAPACIDAD LOCAL",
              count: 250,
                url: "/empresa/equipo",
            },
        card3: {
          text1: "SOPORTE",
            text2: "RED GLOBAL",
              count: "",
                url: "/contacto",
            },
      },
    },
    logos: {
      id: "Slider_Logos",
        cards: {
        card1: {
          id: "card_logo_1",
            img: "Logos_Clientes/Logo_1.jpg",
            },
        card2: {
          id: "card_logo_2",
          img: "Logos_Clientes/Logo_2.jpg",
            },
        card3: {
          id: "card_logo_3",
            img: "Logos_Clientes/Logo_3.jpg",
            },
        card4: {
          id: "card_logo_4",
            img: "Logos_Clientes/Logo_4.jpg",
            },
        card5: {
          id: "card_logo_5",
            img: "Logos_Clientes/Logo_5.jpg",
            },
        card6: {
          id: "card_logo_6",
          img: "Logos_Clientes/Logo_6.jpg",
            },
        card7: {
          id: "card_logo_7",
            img: "Logos_Clientes/Logo_7.jpg",
            },
        card8: {
          id: "card_logo_8",
            img: "Logos_Clientes/Logo_8.jpg",
            },
        card10: {
          id: "card_logo_10",
            img: "Logos_Clientes/Logo_9.jpg",
            },
        card11: {
          id: "card_logo_11",
            img: "Logos_Clientes/Logo_10.jpg",
            },
        card12: {
          id: "card_logo_12",
            img: "Logos_Clientes/Logo_11.jpg",
            },
        card13: {
          id: "card_logo_13",
            img: "Logos_Clientes/Logo_12.jpg",
            },
        card14: {
          id: "card_logo_14",
            img: "Logos_Clientes/Logo_13.jpg",
            },
        card15: {
          id: "card_logo_15",
            img: "Logos_Clientes/Logo_14.jpg",
            },
        card16: {
          id: "card_logo_16",
            img: "Logos_Clientes/Logo_15.jpg",
            },
        card17: {
          id: "card_logo_17",
            img: "Logos_Clientes/Logo_16.jpg",
            },
        card18: {
          id: "card_logo_18",
            img: "Logos_Clientes/Logo_17.jpg",
            },
        card19: {
          id: "card_logo_19",
            img: "Logos_Clientes/Logo_18.jpg",
            },
        card20: {
          id: "card_logo_20",
            img: "Logos_Clientes/Logo_19.jpg",
            },
        card21: {
          id: "card_logo_21",
            img: "Logos_Clientes/Logo_20.jpg",
            },
        card22: {
          id: "card_logo_22",
            img: "Logos_Clientes/Logo_21.jpg",
            },
        card23: {
          id: "card_logo_23",
            img: "Logos_Clientes/Logo_22.jpg",
            },
        card24: {
          id: "card_logo_24",
            img: "Logos_Clientes/Logo_23.jpg",
            },
        card25: {
          id: "card_logo_25",
            img: "Logos_Clientes/Logo_24.jpg",
            },
        card26: {
          id: "card_logo_26",
            img: "Logos_Clientes/Logo_25.jpg",
            },
        card27: {
          id: "card_logo_27",
            img: "Logos_Clientes/Logo_27.jpg",
            },
        card28: {
          id: "card_logo_28",
            img: "Logos_Clientes/Logo_28.jpg",
            },
        card29: {
          id: "card_logo_29",
            img: "Logos_Clientes/Logo_29.jpg",
            },
        card30: {
          id: "card_logo_30",
            img: "Logos_Clientes/Logo_30.jpg",
            },
        card31: {
          id: "card_logo_31",
            img: "Logos_Clientes/Logo_31.jpg",
            },
        card32: {
          id: "card_logo_32",
            img: "Logos_Clientes/Logo_32.jpg",
            },
        card33: {
          id: "card_logo_33",
            img: "Logos_Clientes/Logo_33.jpg",
            },
      },
    },
    PoliticasNavegacion: {
      id: 'politicas_navegacion',
      helmet: 'Politicas de Navegacion',
      text1: 'Políticas de navegación',
      cards: {
        card0: {
          id: 'Politica_0',
          text1:'1. ¿QUÉ SON Y QUE NO SON LAS COOKIES/DATOS DE NAVEGACIÓN?',
          text2: 'Las cookies/datos de navegación son pequeños archivos de información o fragmentos de texto enviados por un Portal o Aplicación tecnológica de propiedad de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S o alguna de sus sociedades controladas o que se encuentren bajo el mismo nivel de control(en adelante Portales y Aplicaciones de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S) y que se almacenan en el navegador o dispositivo del usuario.A través de las cookies,los Portales recuerdan información sobre la visita de los usuarios, lo que permite que seproporcione una mejor y más segura experiencia de navegación en el mismo.Las cookies se asocian tanto a usuarios anónimos, es decir, aquellos que visitan los Portales identificarse o registrarse, como aquellos que si lo hacen.\n\n Por otro lado, las cookies no son un virus o cualquier otro tipo de programa malicioso quepueda dañar dispositivos de los usuarios.Adicionalmente las cookies no pueden borrar ni leer información del computador o dispositivo de los usuarios.',
        },
        card1: {
          id: 'Politica_1',
          text1:'2. ¿CÓMO OBTIENE ITICCOL SAS, LAS COOKIES?',
          text2: 'Las cookies se crean y/o actualizan en el computador o dispositivo del usuario de maneraautomática, cuando éste accede a un Portal de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, lo permite a INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S o a las terceras personas que estecontrate,realizar seguimiento a las cookies del usuario y por ende a la información que estas cookies contienen u obtienen del usuario.Es importante aclarar que las cookies solo son leídas por el sitio web que las creó.\n',
        },
        card2: {
          id: 'Politica_2',
          text1: '3 ¿QUÉ CLASE DE COOKIES UTILIZA INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S Y PARA QUÉ LAS UTILIZA? ',
          text2: '1. Cookies Esenciales.\n\nEstas cookies son esenciales para el Uso del Portal, en el sentido de facilitar el proceso de registro en el mismo, así como permitir a los usuarios un acceso más rápido y seguro los servicios seleccionados dentro del Portal.Sin estas cookies, es posible que INTERNATIONALTESTING INSPECTION & CERTIFICATION COLOMBIA S A S no les pueda ofrecer a los usuarios ciertos servicios dentro del Portal y éste puede que no funcione con normalidad.\n\n2. Cookies Funcionales.\n\nMediante el uso de las cookies funcionales, es posible para INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S o el tercero que este contrate,personalizar los servicios que se ofrecen en el Portal, facilitando a cada usuario información que es o puede ser de su interés, en atención al uso que realiza de los servicios y a las páginas específicas que visita dentro del Portal.A través de estas cookies, INTERNATIONAL TESTING INSPECTION &CERTIFICATION COLOMBIA S A S o las terceras personas que contrate,podrán ofrecer a los usuarios una mejor experiencia y mejor rendimiento en la navegación dentro del Portal.\n\n3. Cookies de Publicidad\n\nINTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S o el tercero que este contrate, mediante el uso de estas cookies, podrá entregarle al usuario publicidad que considere que puede llegar a ser de su interés, según las preferencias y comportamientos que el usuario tiene o ha tenido dentro de la red de Portales de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S a través de estas cookies, se podrá optimizar la publicidad que el usuario ve en el Portal.Las cookies de publicidad, podrán ser entregadas a anunciantes de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, para que sean utilizadas por estos para sus campañas de mercadeo y publicidad. \n\n4.Cookies de Análisis o Desempeño.\n\nA través de las cookies de análisis o desempeño, INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S o el tercero que éste contrate, puede realizar distintos análisis y estudios de la información recolectada, con el fin de mejorar los productos y servicios que INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S ofrece a los usuarios.\n\nINTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S y los terceros con los que contrate servicios para el uso de cookies, son los únicos que podrán acceder a la información almacenada en las cookies que se han instalado dentro del equipo del usuario.La información almacenada en las cookies no puede ser leída por otros usuarios,ni estos podrán acceder a la misma.\n\n',
        },
        card3: {
          id: 'Politica_3',
          text1: '4. PUEDO DESHABILITAR LA INSTALACIÓN Y USO DE COOKIES POR PARTE DE INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S',
          text2: 'El usuario puede deshabilitar tanto la instalación de las cookies como el uso de las mismas por partede INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S Para deshabilitar la instalación y uso de cookies el usuario deberá realizar el procedimiento por navegador tal como se indica a continuación: \n\n✓ Internet Explorer: Herramientas -> Opciones de Internet -> Privacidad -> Configuración.\n\nPara más información, puede consultar el Soporte de Microsoft o la Ayuda del navegador.\n\n✓ Firefox: Herramientas -> Opciones -> Privacidad -> Historial -> Configuración Personalizada.\n\n✓ Para más información, puede consultar el Soporte de Mozilla o la Ayuda del navegador.\n\n✓ Chrome: Configuración -> Mostrar opciones avanzadas -> Privacidad -> Configuración de contenido.\n\n Para más información, puede consultar el Soporte de Google o la Ayuda del navegador.\n\n✓ Safari: Preferencias -> Seguridad.\n\nPara más información, puede consultar el Soporte de Apple o la Ayuda del navegador.\n\nLos sistemas de opt-out indicados anteriormente pueden conllevar que se instale en su equipo una cookie "de rechazo" para que funcione su elección de desactivación.\n\nAdicionalmente, existen otras herramientas de terceros, disponibles on line, que permiten a los usuarios detectar las cookies en cada sitio web que visita y gestionar su desactivación, por ejemplo: \n\n• Ghostery: http://www.ghostery.com/faq\n\n• Vanilla Cookie Manager \n\nhttps:\n//chrome.google.com/webstore/detail/vanilla-cookie-manager/\n\n',
        },
        card4: {
          id: 'Politica_4',
          text1:'5 ¿QUÉ OCURRE SI SE DESHABILITAN LAS COOKIES?',
          text2: 'Si el usuario deshabilita la instalación o el uso de las cookies para los Portales, podrá perder o afectar algunas funcionalidades del sitio, como por ejemplo:\n\n1. Poder ingresar a los Portales sin necesidad de indicar en cada ocasión su usuario y contraseña, esto le ahorrará tiempo y le permitirá funcionalidades boletines, alertas, noticias guardadas, entre otros\n\n2. Publicación de comentarios dentro de los Portales.\n\n3. Acceso al contenido sin restricción dentro de los Portales.\n\n4. Seguridad en el uso de la información que se ingresa en los Portales.\n\n5. Rapidez en el uso de algún servicio dentro de los Portales.\n\n',
        },
        card5: {
          id: 'Politica_5',
          text1: '6. ¿INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S COMPARTE LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES CON TERCERAS PERSONAS?',
          text2: 'INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, podrá compartir información obtenida a través de las cookies con personas externas o terceros(aliados, clientes, proveedores o empresas vinculadas a INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S), con el fin de mejorar la usabilidad y servicios al usuario.Así mismo, la información que se recibe a través de las cookies será utilizada por INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S S y los anteriores terceros.\n\n',
        },
        card6: {
          id: 'Politica_6',
          text1:'7. ¿DÓNDE ESTA ALMACENADA LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS  COOKIES? ',
          text2: 'INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, podrá contratar terceras personas encargadas de almacenar y obtener la información a través de las cookies, o que incluyan cookies dentro de los portales de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, personas que podrán estar localizadas dentro de Colombia o en el exterior.Así mismo, INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, podrá entregar a terceros, la información que se obtenga de las cookies para crear perfiles usuarios, ofrecer campañas personalizadas, sin que lo anterior, implique entrega de información personal.\n\nLo invitamos a revisar las políticas de privacidad de los terceros contratados por INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, para los fines de la esta Política.\n\nLa información obtenida a través de estas cookies, referida al equipo del usuario, podrá ser combinada con sus datos personales sólo si usted está registrado en un Portal de INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S.\n\n',
        },
        card7: {
          id: 'Politica_7',
          text1: '8. ¿QUÉ DEBO TENER EN CUENTA SOBRE LA POLÍTICA DE USO DE COOKIES Y DÓNDE ME PUEDO CONTACTAR EN CASO DE DUDAS?',
          text2: 'La presente Política contiene la información necesaria que debe conocer todo usuario de los Portales sobre el uso de las cookies que realiza INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, los terceros que este contrate.INTERNATIONAL TESTING INSPECTION & CERTIFICATION COLOMBIA S A S, podrá modificar el presente documento en cualquier momento y sin previo aviso para mantenerlos vigentes y actualizados. Por lo anterior, recomendamos a los usuarios revisar la fecha de elaboración o actualización de los mismos, la cual se establece al final del presente documento.\n\nEn caso de dudas o inquietudes acerca del uso de cookies o sobre cualquiera de los puntos detallados en esta Política, por favor escriba al siguiente correo electrónico:\n\nquejasreclamosapelaciones@iticco.com',
        },
      }
    },
    LibroReclamaciones: {
      id: 'libro_reclamaciones',
      name:'Libro De Reclamaciones',
      helmet: 'Libro De Reclamaciones',
      url: "/libro-de-reclamaciones",
      img: 'libro_de_reclamaciones.jpg',
      text1:'Conforme a lo establecido en el Código de Protección y Defensa del Consumidor este establecimiento cuenta con un Libro de Reclamaciones a tu disposición.',
      text2: '',
      categoria: {
        option0: {
          id: 'option_0',
          name:'Tráfico, Vehículos y Ferrocarriles',
        },
        option1: {
          id: 'option_1',
          name:'Comodities y Bienes de Consumo',
        },
        option2: {
          id: 'option_2',
          name:'Industria e Infraestructura',
        },
        option3: {
          id: 'option_3',
          name:'Sistemas y Procesos',
        },
        option4: {
          id: 'option_4',
          name:'Capacitación y Calificación',
        },
        option5: {
          id: 'option_5',
          name:'Salud y seguridad en el trabajo',
        },
        option6: {
          id: 'option_6',
          name:'Transformación Digital',
        },
        option7: {
          id: 'option_7',
          name:'Seguridad Cibernética',
        },
        option8: {
          id: 'option_8',
          name:'Otros',
        },
      }
    },
  },
];
