
import '../style-sheet/historia.css'
import Parallax from 'react-rellax'



export function Historia(props) {
  const imageStyle = {
    transition: 'transform 0.7s ease'
  };
    return(
        <div className="MainContainer">
            {props.children}

          <div className="ContentContainer soul">
            <div className="Content">
              <p>Nuestro protagonista Neo, un joven científico junto a su esposa Eva buscan crear un ambicioso artefacto para viajar entre mundos, tras varios años de investigaciones y arduo trabajo lograron construir esta maquinaria de manera funcional decidiendo así destapar su mejor botella de vino celebrando no solo su triunfo científico, sino también sus sueños compartidos, la pareja celebró hasta el anochecer, alrededor de la media noche la pareja decide ir a su casa y justo antes de salir un extraño sonido es emitido desde el artefacto llamando la atención de la pareja decidiendo ir a investigar y de manera sorpresiva el artefacto abre un portal el cual comienza a succionar con una gran fuerza todo lo que se encuentra a su alrededor cada vez con más fuerza a tal punto de succionar a la pareja e implosionando llevándose una parte del laboratorio.</p>
              <p>Dentro del portal la pareja confundida mira a su alrededor y trata de tomarse de sus manos y faltando pocos centímetros para juntarse su esposa desaparece repentinamente y una intensa luz ciega a nuestro protagonista, Al recuperar la conciencia nuestro protagonista se encuentra en una selva frondosa con partes del laboratorio por gran parte del lugar, Al ver que su amada esposa no está decide tomar un palo y cuidadosamente comenzar la búsqueda de su amada por distintos lugares (Aqui iria el tutorial de como moverse, saltar, agacharse si hay la posibilidad de escalar y encuentra pequeños planos o puntos de habilidades), luego de una larga caminata nuestro protagonista se encuentra con un grupo de animales mutantes los cuales se lanzan directamente al ataque (Tutorial de como pelear)</p>
              <p>gracias a las distintas habilidades de lucha de nuestro protagonista logra salir vencedor pero con unas pequeñas heridas y decide mirar los objetos que llevaban sus enemigos encontrando así una fruta capaz de curar su vida (Se programa para que si o si el protagonista reciba golpes y se vea obligado a aprender el uso del botiquín) y tomando una filosa espada para defenderse mejor. Nuestro protagonista pasa por diversos obstáculos y enfrentados a diversos enemigos (Monstruos de tronco, roca y Animales, puede que algún monstruo de tronco le dropee el escudo) luego de una larga travesía por esta selva frondosa nuestro protagonista llega a una explanada donde es sorprendido por un león gigante el cual misteriosamente tiene el artefacto para viajar entre mundos, comenzando una feroz lucha en la cual nuestro protagonista sale victorioso y tomando las pertenencias del león que le ayudarán a la búsqueda de su esposa (maleta para inventario, la maleta guarda los puntos de orión ) nuestro protagonista toma el artefacto de viajes y abre un nuevo portal al siguiente mundo.</p>
            </div>

            <div className='right-side'>
              <Parallax strength={-2}  style={imageStyle}>
                  <img src={require(`../images/soul.png`)} alt="Soul"/>
              </Parallax>
            </div>
            <div className='image2'>
            <img src={require(`../images/soul.png`)} alt="Soul" style={{paddingBottom: '20px'}}/>
            </div>
            
          </div>

          <div className="ContentContainer troll" style={{background:  '#9cb4ec' }}>
            <div className='left-side'>
              <Parallax speed={1} style={imageStyle}>
                  <img src={require(`../images/troll.gif`)} alt="troll" style={{paddingTop: '200px'}}/>
              </Parallax>
            </div>
            <div className='image2'>
            <img src={require(`../images/troll.gif`)} alt="troll"/>
            </div>
            <div className="Contents" >
              <p style={{marginTop: '10px'}}>Dentro del portal la pareja confundida mira a su alrededor y trata de tomarse de sus manos y faltando pocos centímetros para juntarse su esposa desaparece repentinamente y una intensa luz ciega a nuestro protagonista, Al recuperar la conciencia nuestro protagonista se encuentra en una selva frondosa con partes del laboratorio por gran parte del lugar, Al ver que su amada esposa no está decide tomar un palo y cuidadosamente comenzar la búsqueda de su amada por distintos lugares.</p>
              <p>Luego de una larga caminata nuestro protagonista se encuentra con un grupo de animales mutantes los cuales se lanzan directamente al ataque  gracias a las distintas habilidades de lucha de nuestro protagonista logra salir vencedor pero con unas pequeñas heridas y decide mirar los objetos que llevaban sus enemigos encontrando así una fruta capaz de curar su vida y tomando una filosa espada para defenderse mejor.</p>
              <p>Nuestro protagonista pasa por diversos obstáculos y enfrentados a diversos enemigos (Monstruos de tronco, roca y Animales, puede que algùn monstruo de tronco le dropee el escudo) luego de una larga travesía por esta selva frondosa nuestro protagonista llega a una explanada donde es sorprendido por un león gigante el cual misteriosamente tiene el artefacto para viajar entre mundos, comenzando una feroz lucha en la cual nuestro protagonista sale victorioso y tomando las pertenencias del león que le ayudarán a la búsqueda de su esposa, el jefe tenia una maleta para guardar todo su inventario, la maleta guarda los puntos de orión los cuales le ayudaran a fortalecerse durante todo el viaje, nuestro protagonista toma el artefacto de viajes y abre un nuevo portal al siguiente mundo.
              </p>
            </div>


            
          </div>

          <div className="ContentContainer chica">

            <div className='image2'>
            <img src={require(`../images/chica.png`)} alt="chica"/>
            </div>
            <div className="Content">
              <p style={{marginTop: '10px'}}>Nuestro protagonista sale del portal en una ciudad mecánica donde el mundo es gobernado por Robots los cuales sorprendidos de ver a un humano atacan de manera inmediata, nuestro protagonista a pesar de sus esfuerzos lucha pero sus armas no hacen daño a los robots, y de repente un ataque misterioso elimina a los robots y nuestro protagonista es salvado por una extraña criatura, la cual se encarga de explicar que en esa ciudad los Robots se rebelaron y las especies que se encontraban en el planeta fueron esclavizadas y obligadas a construir y hacer lo que los robots pidieran.</p>
              <p> Esta criatura le da una nueva arma a nuestro protagonista (Espada láser) y un escudo para protegerse de sus armas, nuestro protagonista le cuenta que está en busca de su esposa y del poder regresar a su hogar, la criatura le comenta sobre un mapa espacial el cual tiene las coordenadas de todos los planetas alrededor del eclipse y la manera de conseguirlo ofreciéndose como guía para llegar al lugar en donde este se encuentra, juntos emprenden su viaje  sorteando diversos obstáculos venciendo a varios enemigos Consiguiendo planos, objetos que le ayudarán a mejorar su equipamiento y obteniendo puntos de orión que se almacenan en su mochila.</p>
              <p>Tras superar diversas dificultades nuestro protagonista y su acompañante son sorprendidos al caer un robot gigante del cielo diciéndole a  nuestro protagonista que era verdad de lo que decían “que era una persona especial” iniciando así una batalla con grandes dificultades, apesar de laz dificultades nuestro protagonista sale vencedor obteniendo asi el mapa de los mundos y zarpando directamente al siguente con su acompañante.
              </p>
            </div>

            <div className='right-side'>
              <Parallax speed={-0.5} style={imageStyle}>
                  <img src={require(`../images/chica.png`)} alt="chica" style={{paddingBottom: '200px'}}/>
              </Parallax>
            </div>

            
            
          </div>

          <div className="ContentContainer viejo" style={{background:  ' #414151 ' }}>
            <div className='left-side'>
              <Parallax speed={0}>
                  <img src={require(`../images/viejo.gif`)} alt="viejo" style={{paddingTop: '110px'}}/>
              </Parallax>
            </div>

            <div className='image2'>
            <img src={require(`../images/viejo.gif`)} alt="viejo"/>
            </div>

            <div className="Contents" style={{paddingTop: '20px'}}>
              <p style={{marginTop: '10px'}}>Al salir del portal ven un mundo subterráneo una enorme cueva con hongos luminosos los cuales guían e iluminan el camino a nuestros protagonistas y tomando la decisión de buscar una salida y de paso encontrar a la entidad más fuerte del planeta por si esta tiene algún objeto o información que les sea de utilidad, nuestros personajes comienzan su camino a través de plataformas que suben y bajan a gran velocidad y usando su fuerza para mover objetos como rocas, cajas para subir a alturas inalcanzables por ellos, encontrando también distintos enemigos.</p>
              <p>en el camino como es costumbre nuestros personajes encontrarán diversos objetos  que le ayudarán a la mejora de nuestro personaje, cada vez que nuestro protagonista se adentra más a la cueva se aprecian menos hongos luminosos haciendo que nuestros protagonistas tengan menos luz y deban andar con mayor precaución al haber pozos de lava que algunas veces saldrán disparados como si de un Geiser se tratara. </p>
              <p>Nuestro protagonista llega a una zona oscura en la cual aparece la reina de las sombras, una mujer en vestido negro con una corona de espinas piel blanca, cabello plateado y ojos rojos, la cual le dice a nuestro protagonista “Nunca la podras salvar, Su poder es superior” tras esas palabras la reina crea una bola de luz y con su otra mano envia sombras que atacan a nuestro personaje luego de derrotarla nuestro protaginista curioso pregunta el como saben a quien esta buscando y justo en el momento que va a interrogarla ella se niega y se teletransporta, desapareciendo asi de donde se encontraba Neo.</p>
            </div>


            
          </div>

          <div className="ContentContainer tauro">

            <div className='image2'>
            <img src={require(`../images/tauro.gif`)} alt="tauro"/>
            </div>

            <div className="Content">
              <p style={{marginTop: '20px'}}>Nuestros protagonistas caen desde el cielo en un gran palacio en el cual vemos un gran reloj de fondo tan grande que pareciera que los seguirá a cada paso que den nuestros aventureros, nuestro acompañante decide ver el mapa llevándose la sorpresa de que en este se encontraba información relevante sobre este mundo el cual es llamado el Palacio Del Tiempo un lugar que representa distintas épocas y con unas letras en mayúscula y rojas la palabra “Ten precaución”, Nuestros protagonistas deciden emprender su viaje por el palacio viajando entre distintas épocas resolviendo puzzles.</p>
              <p>Nuestros Protagonistas enfrentarán diversos enemigos como lo son los parásitos temporales los cuales pueden intercambiar su velocidad haciendo que nuestro protagonista se deba adaptar a su velocidad para así vencerlo, también se podrán encontrar con un robots los cuales pueden autorepararse y recuperar su salud si nuestro protagonista no es capaz de derrotar a su creador, se verá también un personaje el cual luego de un  primer combate se abaptara a nuestros movimientos y debemos vencerlo cada ves de una forma distinta ya sea usando distintas armas o diversos movimientos que confundan a nuestro enemigo, nuestro protagonista debera enfrentar estos obstaculos y enemigos en distintas epocas como lo son los 60S, los 80S, la epoca de cowboys y la prehistoria.</p>
              <p>En un momento de sorpresa el dentro del reloj de fondo suena una campanada y aparecera el maestro del tiempo el cual comenzara inmediatamente a atacar a nuestro protagonista usando hechizos que nos ralentiza o acelera nuestra velocidad, deberemos esquivar sus ataques magicos adaptandonos a la velocidad y patrones de ataque, en medio de la fuerte pelea veremos diversos objetos, dandole a Neo un buffo de poder que nos ayudaran para contraatacar los hechizo de velocidad del mago (debemos tener en cuenta que si el mago nos envía hechizo de velocidad y contraatacamos al mago con ese él obtendrá mayor velocidad y nos lanzara ataques con mayor rapidez, luego de derrotar al maestro tempo, neo obtiene un traje acuatico que puede servirle para más adelante, tambien obtendremos un objeto sagrado el cual nos aumentará la vida, decidiendo así partir al siguiente mundo con la esperanza de ver pronto a su esposa.</p>
            </div>

            <div className='right-side'>
              <Parallax speed={-1.2} percentage={0.5} style={imageStyle}>
                  <img src={require(`../images/tauro.gif`)} alt="tauro" style={{ width: '600px', paddingTop: '100px'}}/>
              </Parallax>
            </div>

            
            
          </div>

          <div className="ContentContainer arma2" style={{background:  '#4b5072' }}>
            <div className='left-side'>
              <Parallax speed={-1} percentage={0.5} style={imageStyle}>
                  <img src={require(`../images/arma2.gif`)} alt="arma2" style={{paddingLeft: '130px', paddingTop: '200px'}}/>
              </Parallax>
            </div>

            <div className='image2'>
            <img src={require(`../images/arma2.gif`)} alt="arma2"/>
            </div>

            <div className="Contents">
              <p style={{marginTop: '10px'}}>Tras salir del portar nuestro protagonista se encuentran en una pequeña isla desierta y lo único que se ve a su alrededor es el inmenso océano, nuestros protagonistas con ayuda de los respiradores acuáticos se adentran a bucear en él, viendo que en ese inmenso océano se encuentra una enorme ciudad, comenzando así su búsqueda tanto por su esposa, pero no sería del todo sencillo ya que por el camino se encontrarán terribles enemigos (tritones, peces que nos seguirán y explotaran tras, veremos anguilas eléctricas que deberemos evitar tocar como si de un laberinto se tratara )</p>
              <p>Al no ser suficiente el luchar nuestro protagonista deberán solucionar diversos obstáculos que se presentan en su camino como la busqueda de llaves que estarán en una burbuja de aire y deberemos evitar diversos enemigos para conseguirla y llevarla junto a nosotros para desbloquear el paso, puertas que se abrirán o plataformas que debemos activar a través de la presión involucrando a llevar objetos que puedan mantener esta presión y llegar al siguiente punto , luego de una larga travesía nuestros protagonistas son atacados por un gigante kraken (su primera fase sería usar sus tentáculos para tratar de aplastarnos debemos evitarlos y cada sierto ataque su tentaculo quedara vulnerable y podremos atacar, su fase final el kraken adopara una forma humana que atacara cuerpo a cuerpo y a su ves lanzara su tentaculo como latigo evitando que nos acerquemos en diversas ocaciones, tambien disparara tinta que nos toca la pantalla se pondra en negro y perderemos la vision por momentos)</p>
              <p>Tras salir victoriosos de esta lucha el cientifico se percata que el kraken tiene la bufanda que usaba su esposa el dia antes del accidente del laboratorio decidiendo interrograr al kraken “Por que tienes la bufanda de mi amada” el kraken le responde “Cuando (Nombre jefe del mundo final) estuvo en mi mundo llevaba con sigo una rehen la cual forcejeaba por soltarse de sus terribles garras, antes de atravesar el portal para salir del mundo su prenda cayó al suelo y de allí la tome” el científico le pregunta que quién es (Nombre del villano) a lo cual el kraken le dice que es el Rey del Eclipse entre una respiración pausada mientras lentamente su vida se termina, nuestro protagonista abre abre el portal y enfurecido decide seguir su búsqueda.</p>
            </div>

          </div>

          <div className="ContentContainer plinplinplon">

            <div className='image2'>
            <img src={require(`../images/pliplon.png`)} alt="pliplinplon"/>
            </div>

            <div className="Content">
              <p style={{marginTop: '20px'}}>Nuestro protagonista salen rápidamente del portal en un mundo desierto, de fondo unas grandes pirámides y se ven ruinas de civilizaciones antiguas, con el trayecto del camino nuestros personajes se encontrarán con diversos enemigos entre ellos unos saqueadores los cuales lucharan pero también debemos tener precaución ya que nos podrán quitar objetos que llevemos en la mochila por cualquier golpe que nos den, (También se vera enemigos como esqueletos, gusanos de tierra que saldrán debajo de la tierra haciendo que llevemos precaución al andar, escorpiones gigantes que expulsaran veneno de su aguijón, momias), nuestro protagonista también se enfrentara a diversos obstáculos (Tormentas de arena que cortaran el campo de visión y deberemos luchar con precaución, se verá la opción de realizar rompecabezas para de distintas dificultades y niveles para lograr abrir puertas, tambien se veran plataformas de arena inestables que al pasar se irán cayendo y su velocidad de caída irá aumentando, palancas que moverán espejos los cuales con ayuda del reflejo podremos desbloquear puertas).</p>
              <p>Nuestro protagonista llega a la cima de una pirámide donde serán sorprendidos por un faraón el cual nos atacará y tendremos una fuerte batalla (El faraón puede manipular los vientos creando tormentas de arena, podria revivir esqueletos, en su siguiente fase se le adicionara un baculo dorado el cual lanzara ataques que al llegar a una distancia cerca del protagonista explotaran y su fase final se convertira en un perro faraon que atacara cuerpo a cuerpo, sus ataques con el báculo nos perseguiran ahora y tendran diversas velocidades, seguira el lanzamiento de tormentas de arena con el plus de que nos ralentiza e impulsa para atras), Al terminar con la vida del faraon nuestro protagonista toma los objetos importantes (Drops al derrotar boss) y observa en su mapa que no le quedan muchos planetas por explorar lo cual lo frusta de ver que aun no hay rastro de su esposa</p>
            </div>

            <div className='right-side'>
              <Parallax speed={-0.2} style={imageStyle}>
                  <img src={require(`../images/pliplon.png`)} alt="plinplinplon" />
              </Parallax>
            </div>

            

            
          </div>

          <div className="ContentContainer sabio" style={{background:  '#31303a ' }}>

            <div className='left-side'>
              <Parallax speed={-0.1} style={imageStyle}>
                  <img src={require(`../images/sabio.jpeg`)} alt="sabio" style={{paddingTop: '110px'}}/>
              </Parallax>
            </div>

            <div className='image2'>
            <img src={require(`../images/sabio.jpeg`)} alt="sabio"/>
            </div>

            <div className="Contents">
              <p style={{marginTop: '20px'}}>Al salir del portal nuestros protagonistas se encuentran en un planeta de hielo con grandes glaciares de fondo y en el cielo una hermosa Aurora boreal, pero a pesar de ser un lugar tan llamativo nuestros protagonistas no toman tiempo para distracciones e inmediatamente siguen en la búsqueda de su esposa, enfrentado diversos enemigos (esquimales que nos lanzarán bolas de nieve las cuales nos darán lentitud y si recibimos bastantes ataques de las bolas de nieve nos quedaremos congelados por cierto momento y el esquimal se acercara a nosotros y por un golpe estando congelados perderemos el doble de vida, también veremos yetis los cuales llevan consigo una pistola que lanza pinchos de hielo en diversas direcciones a una gran velocidad ).</p>
              <p>nuestro protagonista también se encontrarán con distintos obstáculos en el camino ( en el camino encontramos rampas resbaladizas que nos llevarán directamente a un abismo y nuestro personaje solo tendra la opcion de saltar, evitar obstáculos como pingüinos que bajan a mayor velocidad que nosotros y si nos golpean nos harán daño, pinchos que se encontraran en medio de la rampa resbaladiza, también veremos distintos puzzles, en un momento de la partida obtendremos una antorcha el cual nos ayudara a descongelar bloques de hielo y debemos abrirnos caminos para encontrar llaves o objetos que nos ayuden a abrir puertas, encontraremos puentes que debemos cruzar con precaucion ya que se romperan facilmente, tambien veremos una zona solo podremos acceder al interactuar con unos pilares que se activaran con la antorcha pero debemos activarlos en el orden correcto cada vez que fallemos apareceran enemigos ).</p>
              <p>nuestro protagonista logra llegar a la cima de una montaña nevada en la que se encontraran el rey del hielo, el cual comenzara atacando creando enemigos de hielo y lanzando proyectiles de hielo, en su segunda fase lanzara rafagas de viento que retrasa a nuestro protagonista y deberemos tener cuidado de no caernos de la montaña, también lanzará una lluvia de estalactitas, en su última fase el rey combinara todos estos ataques, creando una barrera de hielo que debemos debilitar y lanzando un fuerte soplido que congelara el suelo y estaremos deslizandonos, luego de una feroz batalla nuestro protagonista derrota al rey pero antes de irse del mundo decide preguntarle lo siguiente “¿ Dónde está mi esposa ? ” mostrando la foto de su amada a lo que el rey del hielo le responde “me has demostrado tu gran valentía simple mortal … pero lamentablemente lo que buscas se encuentra lejos de este frío y desolado mundo … tu amada se encuentra en las sombras del reino del eclipse, pero el que gobierna allí es un ser oscuro con  mucho poder … El camino es peligroso y muchas veces la oscuridad del eclipse es profunda y traicionera y los que entran a ella nunca regresan ” tras estas palabras nuestro protagonista sin dudarlo dos veces continúa su camino hacia el Eclipse.</p>
            </div>

          </div>

          <div className="ContentContainer lord">

            <div className='image2'>
            <img src={require(`../images/lord.gif`)} alt="lord"/>
            </div>

            <div className="Content">
              <p style={{marginTop: '20px'}}>Al salir del portal nuestro protagonista aparecen en una gran nave espacial en la cual se logra ver el eclipse en su plena perfección motivando así a nuestros protagonistas a continuar su camino y enfrentado a los enemigos que irán apareciendo (Robots que atacan cuerpo a cuerpo y cuentan con un escudo que evitará cualquier nuestros golpes, nuestro jugador debe golpear repetidamente y en el punto débil del escudo el cual se encuentra golpeando al robot desde la espalda, también encontraremos drones los cuales al vernos comenzaran  a dispararnos y se mantendrán alejados del jugador teniendo que buscar la forma para detenerlos, nuestros protagonistas también deberán vencer alienígenas los cuales nos atacaran de manera imprevista en el camino dando grandes saltos hacia nosotros, lanzando ataques de ácido y con un gran aguijón que tiene en su cola nos atacará y tendrá una pequeña mascota la cual tiene la apariencia de un pulpo con una gran velocidad que si nos ataca nos matara al comerse nuestro rostro).</p>
              <p>nuestro protagonista encontrará bastantes retos en lo que lleva del camino (torretas que disparan láseres los cuales deberemos  saltar o agacharnos, también nos lanzarán misiles teledirigidos,  también debemos sobrepasar algunos obstaculos como lo son barras de energias que cada cierto tiempo se activaran y desativaran y si somos tocados por una de esas barras seremos electrocutados, encontraremos plataformas con movimiento, algunas de ellas funcionan atavez del peso ayudandonos a bajo o subir para continuar con la aventura, habran distintas pruebas anti gravedad que nuestro compañero debera activar asi nuestro protagonista comenzara a caminar por el techo y debera pasar una serie de obstaculos para seguir avanzando en la historia) nuestros protagonistas llegan a la sala de control encontrandose con un gran alienigena con tentáculo y unos intimidnates ojos brillantes, el cual sin pensarlo daña la sala de control e inmediatamente se activa la alarma de autodestrucción de la nave iniciando una batalla (el alienígena en su primera fase comienza a lanzar ataques con sus tentáculos y libera esporas venenosas que deberemos destruir, en la segunda fase la sala de control activa sistemas de defensa que atacaran a nuestro protagonista y el alienigena emite un fuerte sonido convocando nuevas criaturas y en su última fase el jefe lanza meteoritos que deberemos esquivar, creara agujeros negros donde ocultando sus tencaculos en ellos y lanzando ataques desde cualquier direccion y sin previo aviso deberemos estar atentos a cada ataque).</p>
              <p>al terminar con el enemigo comienza una cuenta regresiva en el cual nuestro protagonista debera salir de la nave antes de que termine el tiempo esquivando diversos objetos que van cayendo mientra la nave colapsa, nuestros protagonistas se toparan con la sorpresa de que necesitaran activar una puerta lo mas rapido posible “Prota- no hay manera de pasar debemos abrir esta puerta lo mas rapido posible “ “Compañero- Debemos activarla manualmente pero el interruptor esta alejado, yo ire a activarlo, tu pasa esa puerta” “Prota- No debe haber otra opción entramos y salimos juntos” “Compañero- Esta es mi eleccion y deberas aceptarla ahora la mision es mas importante debes reunirte con tu esposa, tu siempre has sido el heroe, pero solo en este momento dejame ser tu heroe  (Mira con determinacion al cientifico)” el compañero rapidamente va y activa la puerta manualmuente “Compañero - VE Y SALVA A TU ESPOSA Y CUANDO MIRES A LAS ESTRELLAS RECUERDAME ”, el protagonista pasa las puertas y logra abrir el portal justo a tiempo y vemos como colapsa la nave y nuestro compañero cierra sus ojos con una gran sonrisa y es consumido por las llamas.</p>
            </div>

            <div className='right-side'>
              <Parallax speed={-2} percentage={0.5} style={imageStyle}>
                  <img src={require(`../images/lord.gif`)} alt="lord" style={{ paddingTop: '100px'}}/>
              </Parallax>
            </div>

            
          </div>

          <div className="ContentContainer cara" style={{background:  '#586689' }}>
            <div className='left-side'>
              <Parallax speed={-1.3} percentage={0.5} style={imageStyle}>
                  <img src={require(`../images/cara.jpeg`)} alt="cara" style={{width: '500px', paddingTop: '100px'}} />
              </Parallax>
            </div>

            <div className='image2'>
            <img src={require(`../images/cara.jpeg`)} alt="cara"/>
            </div>

            <div className="Contents">
              <p style={{marginTop: '20px'}}>Al salir del portal, nuestro protagonista desbastado de la pérdida de su amigo y de aún no haber encontrado a su esposa, emprende su camino con la esperanza de que esta pesadilla termine pronto y pueda volver a casa, nuestro protagonista se encuentra en el mundo de un antiguo volcán donde deberá pasar por ríos de lava , géiseres de vapor y deberá superar gran cantidad de obstáculos (Plataformas de roca que inestables por las que deberemos cruzar, si nos mantenemos mucho tiempo en ellas nos hundiremos o podrían romperse, cada cierto tiempo el planeta tiene una lluvia de meteoros que deberemos esquivar), También nuestro personaje deberá ir eliminando enemigos (lagartos que escupen bolas de fuego, bolas de magma que al destruir se multiplicarán cada que la golpeemos, también encontraremos criaturas voladoras que escupirán fuego hacia el lugar en el que estemos parados obligandonos a estar en un constante movimiento y usar coberturas).</p>
              <p>Nuestro protagonista agotado, comienza el ascenso a un volcán con caudalosos ríos de lava los cuales deberá evitar y cada vez que se acerca a la cima el suelo tiembla, distintos enemigos aparecen en busca de eliminarlos pero(el juego obliga a nuestro personaje a usar el arma caracteristica del juego) apesar de que tener su arma destrozada acaba con cada enemigo que se enfrenta mientras recuerdos de su esposa y compañeros pasan por su cabeza, retomando el aliento y sintiendo que el calor del volcan alimenta su espirito y forja su voluntad como un guerrero de acero, al llegar a la cima se encontrara con un gran caballero con una armadura oscura creada con roca volcanica y una enorme espada este caballero le dice al protagonista “Caballero- Para llegar a donde el Rey deberas acabar conmigo, aunque veo que tu espada quedo destruida, le dire a tu esposa que luchaste con valor”.</p>
              <p>Nuestro protagonista y el caballero comienzan una gran batalla( El caballero en su primera fase gracias a su gran espada lanza golpes fuertes y contundentes el cual nuestro protagonista deberá evitar con su escudo y mantener la distancia, también gracias a ser un caballero forjado en la lava manipula rocas lanzandolas como proyectiles,  luego de una larga y fuerte batalla el lugar en el que se encuentran comienza a agrietarse creando pequeños ríos de lava que acortan la distancia, el caballero invoca columnas, su modo de ataque es más veloz y lanza un fuerte ataque giratorio que cubre gran parte de la plataforma nuestro protagonista para evitarlo deberá mantenerse en constante movimiento y usar los pilares como apoyo buscando la forma de derrotarlo y en su última fase debido a la fuerte batalla la plataforma se convierte en una pequeña isla en un río de lava, el caballero cubre en llamas su espada y sus ataques aumentan en fuerza), tras una fuerte lucha nuestro protagonista sale victorioso llegando a un altar con una forja la cual le dejará crear su nuevas armas con ayuda de los fragmentos que encontró en el camino (entre los diversos mundos al derrotar algunos jefes obtendrá fragmentos de Espada Carmesí), al forjar esta nueva espada nuestro protagonista abre el portal y con determinación entra  listo para la lucha con su mayor enemigo el rey del eclipse.</p>
            </div>

          </div>

          <div className="ContentContainer rey">

            <div className='image2'>
            <img src={require(`../images/rey.png`)} alt="rey"/>
            </div>

            <div className="Content">
              <p style={{marginTop: '20px'}}>Al llegar al planeta del demoníaco rey el ambiente se siente tenso un lugar oscuro y sombrío, nuestro protagonista entra en un castillo abandonado, y cuidadosamente continúa su camino, al entrar al castillo se encontrará con varios enemigos que buscarán detenerle (algunos enemigos que veremos son sombras errantes los cuales son demonios casi transparentes que se camuflaran con el entorno y atacaran al estar cerca de nosotros, también veremos guerreros corruptos los cuales nos atacaran con sus armas lanzando fuertes ataques y muy veloces, también veremos gárgolas que al ver a nuestro jugador pasar cobraran vida y nos atacaran lanzando rafagas de energia oscura) continuando su camino nuestro protagonista deberá superar distintas pruebas en el camino (plataformas en movimiento de diferentes velocidades y diferentes direcciones para evitar caer al vacío, también deberemos buscar llaves que nos ayudaran para abrir puertas que nos obstaculizan el paso por el castillo en estas puertas por diferentes zonas encontraremos minibosses mandados por el rey demoniaco algunos de estos minibosses son los siguientes: El tejedor de sombras un mago que manipula las sombras y copia nuestra imagen convirtiéndose en un reflejo de nuestro protagonista y manipula las sombras creando clones que atacaran todos al mismo momento deberemos encontrar y acabar al tejedor para asi evitar que se siga clonando, el siguente miniboss es un guerrero con una armadura penetrante el cual solo puede ser lastimado por su espalda nuestro jugador debera estar en constante movimiento y evitar su veloces ataques para lograr acabar con el.</p>
              <p>tambien nos encontraremos con una temible bruja que invocara el alma en pena de los antiguos guerreros que iban en busca del rey demoniaco pero murieron en el camino, nuestro protagonista debera acabar con sus invocaciones para poder acercase a la bruja y asi poder golpearla y acabar con ella) tras varios enemigos derrotados nuestro protagonista por fin llega al trono, en el cual se encuentra el rey demonio el cual lo está esperando sentado en su gran trono, nuestro protagonista enojado decide hablar con el rey demonio “Protagonista- Suelta a mi esposa inmediatamente, tu reino de terror llegó a su final”, el rey demonio con una sonrisa en su rostro se levanta de su asiento y  toma su arma “Rey demonio- Eres un hombre valiente pero muy ingenuo ningún mortal puede desafiar mi poder ahora este sera el final de tu viaje y gracias a tu esposa cumplire mi objetivo” inician una fuerte  batalla dentro del castillo en el cual el rey demonio comienza atacando con su arma lanzando unos feroces y fuertes golpes y con su espada emana ondas de fuego magia oscura que deberemos esquivar, tras vencer la primera fase del rey demonio este tomara una distancia de nosotros a lo cual el protagonista usará a su favor y le pregunta “Protagonista- Por que a ella, porque la secuestraste” el rey demonio con una sonrisa maliciosa le dice “Rey  demonio- Por que ella es el eslabon que necesito para lograr mi conquista, su mente contiene informacion valiosa de los viajes entre mundos, justo el conocimiento que necesito”, “Protagonista- No permitire que le hagas daño y mucho menos que la uses para tus planes, vas a caer aqui y ahora” el rey demonio retoma fuerza y tras un gran rugido su apariencia cambia creciendo y obteniendo mas masa corporal</p>
            </div>

            <div className='right-side'>
            <Parallax speed={-1.7} percentage={0.5} style={imageStyle}>
                  <img src={require(`../images/rey.png`)} alt="rey" />

            </Parallax>
            </div>

            
          </div>

          <div className="ContentContainer rey2" style={{background:  '#5f2a2c' }}>
            <div className='left-side'>
              <Parallax speed={-0.3} percentage={0.5} style={imageStyle}>
                  <img src={require(`../images/rey2.png`)} alt="rey2" style={{ paddingLeft: '40px', paddingTop: '70px'}}/>
              </Parallax>
            </div>

            <div className='image2'>
            <img src={require(`../images/rey2.png`)} alt="rey2"/>
            </div>

            <div className="Contents">
              <p style={{marginTop: '20px'}}>El rey demonio lanza rayos de magia oscura y llamas de fuego las cuales debemos esquivar mientras el entorno a nuestro alrededor se desploma como lo son el suelo que al caer un rayo se ira agrietando y creando pozos los cuales debemos esquivar, el rey demonio tambien cuenta con la capacidad de crear una aura oscura que lo protegera de nuestros ataque y debemos ser precavidos con sus contraataques, tras una larga lucha nuestro protagonista esquiva el rayo del rey demonio a lo cual dice lo siguiente “Protagonista- tu poder no tiene límites pero mi voluntad es superior acabaré contigo ahora mismo y por fin estaré reunido con mi esposa nuevamente ”  El rey demonio enojado “Rey demonio- Abriré nuevamente el portal aún más poderoso e invadire nuevos reinos, mi legión se expandirá y todo gracia a tu maldita esposa, nada ni nadie podrá derrotarme ” “Protagonista- Mientras yo esté en pie buscaré la manera de detenerte sin importar cuántos planetas amenaces ”  el rey demonio enojado reuge mientras su forma se expande cada vez más “Rey demonio - Entonces se testigo del verdadero poder de la oscuridad”.</p>
              <p>El rey demonio expande su forma destruyendo la habitación en la que se encuentran mostrándonos así  un cielo oscuro con fuertes relámpagos, el rey demonio toma su espada nuevamente con una mayor velocidad y fuerza ataca a nuestro protagonista y lanzando con mayor rapidez rafagas de energia que salen de su espada que debemos esquivar, tambien lanzara rafagas de viento que nos podra detener al momento se sentirse acorralado o para atacar en combo lanzando rayos oscuros, esas rafagas de viento pueden venir de cualquier dirección logrando asi que el rey demonio se nos acerque aproposito para lanzar varios golpes con su espada, a medida que el combate transcurre se van creando plataformas o pilares que nuestro jugador debera usar al momento que el rey demonio lance su feroz llamara ya sea por el suelo obligandonos a saltar o por arriba oblicandonos a agacharnos estos ataques saldran si previo aviso.</p>
              <p>El jefe al estar en su punto critico de salud comenzara a atacar de manera desesperada con ataques precedicibles para el jugador hasta lograr derrotarlo haciendo que el rey demonio caiga de rodillas por primera vez en su vida y aceptado su derrota, nuestro protagonista toma su espada y con un corte limpio corta la cabeza del rey demonio, nuestro protagonista agotado y adolorido de esta fuerte batalla camina en busca de su amada pero no encuentra rastros de ella por ningún lado frustrado dice “Protagonista- No puede terminar así...” nuestro protagonista cierra sus ojos cuando la dulce voz de su esposa se escucha “Esposa- sabia que vendrias por mi, pero este no es el final de tu viaje ” el científico abre sus ojos y aliviado de ver a su esposa la abraza amorosamente “Protagonista- Por Fin te encontré.</p>
            </div>

          </div>

          <div className="ContentContainer final">

            <div className='image2' style={{paddingTop: '20px'}}>
            <img src={require(`../images/final.gif`)} alt="final"/>
            </div>

            <div className="Content">
              <p style={{marginTop: '20px'}}>¿estas bien te hicieron daño?, ya podremos largarnos de este horrible mundo y dejar todo esto atrás”  “Esposa- Estoy bien pero el tiempo que estuve con el Rey demonio vi muchos más mundos que necesitan tu valentía, la lucha contra el Rey demonio solo fue el comienzo, ahora estando juntos seremos responsables de traer la paz y armonía a los mundos, seamos los protectores de mundos erradiquemos el mal” “Protagonista- si el destino nos llama para ser los guardianes de los mundos estoy de acuerdo y listo para hacerlo, estando junto seremos imparables y no hay mal al cual no podamos derrotar” el científico abre un nuevo portal en y justos tomados de la mano van en busca de la armonía multiversal.</p>
            </div>

            <div className='right-side'>
              <Parallax speed={-0.1} style={imageStyle}>
                  <img src={require(`../images/final.gif`)} alt="final" />
              </Parallax>
            </div>

            
          </div>

        </div>
    );
}

export function Titulo() {
  <div className="ParallaxContainer">
          <h1>Historia</h1>
  </div>
}
