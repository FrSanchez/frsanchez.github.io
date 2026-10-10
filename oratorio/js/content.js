// Add meditation text to each mystery’s description field.
(function (root) {
  const content = {
  "groups": {
    "gozosos": {
      "name": "Gozosos",
      "kind": "gozo",
      "mysteries": [
        {
          "title": "La Encarnación del Hijo de Dios (Lc 1,28.31.38).",
          "description": "El Ángel entró en su casa y la saludó, diciendo: “¡Alégrate!, llena de gracia, el Señor está contigo”… “Concebirás y darás a luz un hijo, y le pondrás por nombre Jesús”… María dijo entonces: “Yo soy la servidora del Señor, que se cumpla en mí lo que has dicho”"
        },
        {
          "title": "La visita de la Virgen María a Santa Isabel (Lc 1,39-42.45-46).",
          "description": "«María partió y fue sin demora a un pueblo de la montaña de Judá. Entró en la casa de Zacarías y saludó a Isabel… Isabel… exclamó: “¡Tú eres bendita entre todas las mujeres y bendito es el fruto de tu vientre!… Feliz de ti por haber creído”. María dijo entonces: “Mi alma canta la grandeza del Señor”"
        },
        {
          "title": "El nacimiento del Niño Jesús (Lc 2,6-7.10-11).",
          "description": "Mientras se encontraban en Belén, le llegó el tiempo de ser madre; y María dio a luz a su Hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no había lugar para ellos en el albergue… El Ángel les dijo: “Hoy, en la ciudad de David, les ha nacido un Salvador, que es el Mesías, el Señor"
        },
        {
          "title": "La Presentación de Jesús en el Templo (Lc 2,22.28-30).",
          "description": "Llevaron al niño a Jerusalén para presentarlo al Señor… Simeón lo tomó en sus brazos y alabó a Dios, diciendo: “Ahora, Señor, puedes dejar que tu servidor muera en paz, como lo has prometido, porque mis ojos han visto la salvación"
        },
        {
          "title": "El Niño Jesús perdido y hallado en el Templo (Lc 2,42-43.46).",
          "description": "Cuando el niño cumplió doce años, subieron como de costumbre, y acabada la fiesta, María y José regresaron, pero Jesús permaneció en Jerusalén sin que ellos se dieran cuenta… Al tercer día, lo hallaron en el Templo en medio de los doctores de la Ley, escuchándolos y haciéndoles preguntas"
        }
      ]
    },
    "dolorosos": {
      "name": "Dolorosos",
      "kind": "dolor",
      "mysteries": [
        {
          "title": "La oración en el huerto (Lc 22,41-42.44).",
          "description": "Se alejó de ellos, más o menos a la distancia de un tiro de piedra, y puesto de rodillas, oraba: “Padre, si quieres, aleja de mí este cáliz. Pero que no se haga mi voluntad, sino la tuya”… En medio de la angustia, él oraba más intensamente"
        },
        {
          "title": "La flagelación de Jesús (Jn 19,1; Mc 15,15).",
          "description": "Pilato mandó entonces azotar a Jesús. Pilato, para contentar a la multitud, les puso en libertad a Barrabás; y a Jesús, después de haberlo hecho azotar, lo entregó para que fuera crucificado"
        },
        {
          "title": "La coronación de espinas (Jn 19,2.5).",
          "description": "Los soldados tejieron una corona de espinas y se la pusieron sobre la cabeza. Lo revistieron con un manto rojo… Jesús salió, llevando la corona de espinas y el manto rojo. Pilato les dijo: “¡Aquí tienen al hombre!”"
        },
        {
          "title": "Jesús con la cruz a cuestas (Jn 19,17; Lc 23,27).",
          "description": "Jesús, cargando sobre sí la cruz, salió de la ciudad para dirigirse al lugar llamado “del Cráneo”. Lo seguían muchos del pueblo y un buen número de mujeres, que se golpeaban el pecho y se lamentaban por él"
        },
        {
          "title": "La crucifixión y muerte de Jesús (Jn 19,18.25-26).",
          "description": "Allí lo crucificaron; y con él a otros dos, uno a cada lado y Jesús en el medio… Junto a la cruz de Jesús, estaba su madre… Al ver a la madre y cerca de ella al discípulo a quien él amaba, Jesús le dijo: “Mujer, aquí tienes a tu hijo”"
        }
      ]
    },
    "gloriosos": {
      "name": "Gloriosos",
      "kind": "gloria",
      "mysteries": [
        {
          "title": "La resurrección del Señor (Mt 28,1.5-6).",
          "description": "Pasado el sábado, al amanecer del primer día de la semana, María Magdalena y la otra María fueron a visitar el sepulcro… El Ángel dijo a las mujeres: “No teman, yo sé que ustedes buscan a Jesús, el Crucificado. No está aquí, porque ha resucitado como lo había dicho"
        },
        {
          "title": "La Ascensión del Señor (Mt 28,20; Mc 16,19).",
          "description": "Yo estaré siempre con ustedes hasta el fin del mundo». «Después de decirles esto, el Señor Jesús fue llevado al cielo y está sentado a la derecha de Dios"
        },
        {
          "title": "La venida del Espíritu Santo (Hech 2,2-4).",
          "description": "De pronto, vino del cielo un ruido, semejante a una fuerte ráfaga de viento, que resonó en toda la casa donde se encontraban. Entonces vieron aparecer unas lenguas como de fuego, que descendieron por separado sobre cada uno de ellos. Todos quedaron llenos del Espíritu Santo"
        },
        {
          "title": "La Asunción de María (Lc 1,48-49; Cant 4,7-8).",
          "description": "En adelante todas las generaciones me llamarán feliz, porque el Todopoderoso ha hecho en mí grandes cosas». «Eres toda hermosa, amada mía, y no tienes ningún defecto. ¡Ven conmigo del Líbano, novia mía…!"
        },
        {
          "title": "La coronación de María Reina de cielos y tierra (Ap 12,1).",
          "description": "Y apareció en el cielo un gran signo: una Mujer revestida del sol, con la luna bajo sus pies y una corona de doce estrellas en su cabeza"
        }
      ]
    },
    "luminosos": {
      "name": "Luminosos",
      "kind": "luz",
      "mysteries": [
        {
          "title": "El bautismo de Jesús (Mt 3,13.16-17).",
          "description": "Jesús fue desde Galilea hasta el Jordán y se presentó a Juan para ser bautizado por él… Apenas fue bautizado, Jesús salió del agua. En ese momento se abrieron los cielos, y vio al Espíritu de Dios descender como una paloma y dirigirse hacia él. Y se oyó una voz del cielo que decía: “Este es mi Hijo muy querido, en quien tengo puesta toda mi predilección”"
        },
        {
          "title": "Las bodas de Caná (Jn 2,1.3.5.11).",
          "description": "Se celebraron unas bodas en Caná de Galilea, y la madre de Jesús estaba allí… Como faltaba vino, la madre de Jesús le dijo: “No tienen vino”… Su madre dijo a los sirvientes: “Hagan todo lo que él les diga”… Así manifestó su gloria, y sus discípulos creyeron en él"
        },
        {
          "title": "El anuncio del Reino (Mc 1,14-15).",
          "description": "Jesús se dirigió a Galilea. Allí proclamaba la Buena Noticia de Dios, diciendo: “El tiempo se ha cumplido: el Reino de Dios está cerca. Conviértanse y crean en la Buena Noticia"
        },
        {
          "title": "La transfiguración del Señor (Mt 17,1-2.5).",
          "description": "Jesús tomó a Pedro, a Santiago y a su hermano Juan, y los llevó aparte a un monte elevado. Allí se transfiguró en presencia de ellos: su rostro resplandecía como el sol y sus vestiduras se volvieron blancas como la luz… Se oyó una voz que decía desde la nube: “Este es mi Hijo muy querido, en quien tengo puesta mi predilección: escúchenlo”"
        },
        {
          "title": "La institución de la Eucaristía (1 Cor 11,23-25).",
          "description": "El Señor Jesús, la noche en que fue entregado, tomó el pan, dio gracias, lo partió y dijo: “Esto es mi Cuerpo, que se entrega por ustedes”… De la misma manera, después de cenar, tomó la copa, diciendo: “Esta copa es la Nueva Alianza que se sella con mi Sangre”"
        }
      ]
    }
  },
  "prayers": {
    "ourFather": "Padre nuestro, que estás en el cielo, santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.",
    "hailMary": "Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.",
    "glory": "Gloria al Padre, al Hijo y al Espíritu Santo, como era en un principio, ahora y siempre, por los siglos de los siglos. Amén.",
    "maryGrace": "Guía: María, Madre de gracia y Madre de misericordia,",
    "maryResponse": "Todos: en la vida y en la muerte ampáranos, gran Señora.",
    "fatimaPrayer": "Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del infierno, lleva al cielo a todas las almas y socorre especialmente a las más necesitadas de tu misericordia. Amén.",
    "initialPrayers": [
      "Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.",
      "Señor mío Jesucristo, Dios y hombre verdadero, Creador y Redentor mío, por ser tú quien eres y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. Quiero y propongo firmemente confesarme a su tiempo. Ofrezco mi vida, obras y trabajos en satisfacción de mis pecados. Y confío en que, en tu bondad y misericordia infinita, me los perdonarás y me darás la gracia para no volver a ofenderte. Amén.",
      "V: Ven, Espíritu Santo, llena los corazones de tus fieles",
      "R: y enciende en ellos el fuego de tu amor.",
      "V: Envía tu Espíritu Creador",
      "R: y renueva la faz de la tierra.",
      "Oh Dios, que has iluminado los corazones de tus hijos con la luz del Espíritu Santo; haznos dóciles a sus inspiraciones para gustar siempre del bien y gozar de su consuelo. Por Cristo nuestro Señor. Amén.",
      "Ofrecemos este rosario por las intenciones del Santo Padre, del arzobispo, del párroco, por la paz en el mundo y por…"
    ],
    "closingPrayers": [
      "Por las intenciones del Santo Padre, del arzobispo de Seattle y de nuestro párroco",
      "Dios te salve, María, Hija de Dios Padre, Virgen purísima antes del parto; en tus manos encomendamos nuestra fe para que la ilumines. Llena eres de gracia…",
      "Dios te salve, María, Madre de Dios Hijo, Virgen purísima en el parto; en tus manos encomendamos nuestra esperanza para que la alientes. Llena eres de gracia…",
      "Dios te salve, María, Esposa de Dios Espíritu Santo, Virgen purísima después del parto; en tus manos encomendamos nuestra caridad para que la inflames. Llena eres de gracia…"
    ],
    "litanyOpening": [
      "Señor, ten piedad.",
      "Cristo, ten piedad.",
      "Señor, ten piedad.",
      "Cristo, óyenos.",
      "Cristo, escúchanos.",
      "Dios, Padre celestial,\nten piedad de nosotros.",
      "Dios Hijo, Redentor del mundo,",
      "Dios Espíritu Santo,",
      "Santísima Trinidad, un solo Dios,"
    ],
    "litanyInvocations": [
      "Santa María,",
      "Santa Madre de Dios,",
      "Santa Virgen de las vírgenes,",
      "Madre de Cristo,",
      "Madre de la Iglesia,",
      "Madre de la misericordia,",
      "Madre de la divina gracia,",
      "Madre de la esperanza,",
      "Madre purísima,",
      "Madre castísima,",
      "Madre siempre virgen,",
      "Madre inmaculada,",
      "Madre amable,",
      "Madre admirable,",
      "Madre del buen consejo,",
      "Madre del Creador,",
      "Madre del Salvador,",
      "Virgen prudentísima,",
      "Virgen digna de veneración,",
      "Virgen digna de alabanza,",
      "Virgen poderosa,",
      "Virgen clemente,",
      "Virgen fiel,",
      "Espejo de justicia,",
      "Trono de la sabiduría,",
      "Causa de nuestra alegría,",
      "Vaso espiritual,",
      "Vaso digno de honor,",
      "Vaso de insigne devoción,",
      "Rosa mística,",
      "Torre de David,",
      "Torre de marfil,",
      "Casa de oro,",
      "Arca de la Alianza,",
      "Puerta del cielo,",
      "Estrella de la mañana,",
      "Salud de los enfermos,",
      "Refugio de los pecadores,",
      "Consuelo de los migrantes,",
      "Consoladora de los afligidos,",
      "Auxilio de los cristianos,",
      "Reina de los Ángeles,",
      "Reina de los Patriarcas,",
      "Reina de los Profetas,",
      "Reina de los Apóstoles,",
      "Reina de los Mártires,",
      "Reina de los Confesores,",
      "Reina de las Vírgenes,",
      "Reina de todos los Santos,",
      "Reina concebida sin pecado original,",
      "Reina asunta a los Cielos,",
      "Reina del Santísimo Rosario,",
      "Reina de la familia,",
      "Reina de la paz."
    ],
    "finalPrayers": [
      "Infinitas gracias te damos, soberana Princesa, por los beneficios que a diario recibimos de tus generosas manos. Dígnate, ahora y siempre, tomarnos bajo tu poderoso amparo, y para más obligarte a ello, te saludamos diciendo:",
      "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. ¡Ea, pues!, Señora y abogada nuestra, vuelve a nosotros tus ojos misericordiosos, y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente, oh piadosa, oh dulce Virgen María!",
      "Guía: Ruega por nosotros, Santa Madre de Dios,",
      "Todos: para que seamos dignos de las promesas de Cristo.",
      "Te rogamos nos concedas, Señor Dios nuestro, gozar de continua salud de alma y cuerpo, y por la gloriosa intercesión de la bienaventurada siempre Virgen María, vernos libres de las tristezas de la vida presente y disfrutar de las alegrías eternas. Por Cristo nuestro Señor. Amén."
    ],
    "rosaryVirginLeader": "Guía: Oh Virgen Santísima del Rosario, no permitas",
    "rosaryVirginResponse": "Todos: que vivamos y muramos en pecado mortal.",
    "ourLadyFatimaLeader": "Guía: Nuestra Señora de Fátima,",
    "ourLadyFatimaResponse": "Todos: ruega por nosotros.",
    "immaculateHeartLeader": "Guía: Corazón Inmaculado de María,",
    "immaculateHeartResponse": "Todos: sé la salvación del alma mía.",
    "litanyMercyResponse": "ten piedad de nosotros.",
    "litanyResponse": "ruega por nosotros.",
    "litanyClosing": [
      "Guía: Cordero de Dios, que quitas el pecado del mundo,\nTodos: perdónanos, Señor.",
      "Guía: Cordero de Dios, que quitas el pecado del mundo,\nTodos: escúchanos, Señor.",
      "Guía: Cordero de Dios, que quitas el pecado del mundo,\nTodos: ten misericordia de nosotros."
    ]
  }
};
  if (typeof module !== "undefined" && module.exports) module.exports = content;
  else root.RosaryContent = content;
})(typeof globalThis !== "undefined" ? globalThis : this);
