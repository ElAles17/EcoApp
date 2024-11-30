document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const startBtn = document.getElementById("start-btn");

  // Mostrar la pantalla de bienvenida al cargar la página
  welcomeScreen.style.display = "flex";

  // Al hacer clic en el botón "Empezar", ocultamos la pantalla de bienvenida
  startBtn.addEventListener("click", () => {
    welcomeScreen.style.display = "none"; // Ocultar la pantalla de bienvenida
    document.body.style.overflow = "auto"; // Asegurarnos de que la app sea navegable
    document.getElementById("btn-ecocita").style.display = "block"; // Mostrar el botón EcoCita
  });

  const content = document.getElementById("content");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");

  // Información de los subtemas
  const topics = {
    ecologico: `
      <h2>🌱 ¿Cómo ser ecológico?</h2>
      <p>Adoptar un estilo de vida ecológico implica realizar pequeños cambios en tu día a día para reducir el impacto ambiental:</p>
      <ul>
        <li><strong>Reducir el consumo de plásticos:</strong> Usar bolsas reutilizables, evitar productos de un solo uso.</li>
        <li><strong>Ahorro de energía:</strong> Apagar luces y electrodomésticos cuando no los uses, cambiar a bombillas LED.</li>
        <li><strong>Transportes alternativos:</strong> Optar por caminar, usar la bicicleta o el transporte público en lugar de vehículos privados.</li>
        <li><strong>Reciclaje:</strong> Separar los residuos reciclables y compostables.</li>
      </ul>
    `,
    beneficios: `
      <h2>💚 Beneficios de ser ecológico</h2>
      <p>Ser ecológico no solo ayuda al planeta, sino que también tiene múltiples beneficios para ti:</p>
      <ul>
        <li><strong>Salud:</strong> Disminuir la contaminación y consumir productos orgánicos mejora tu salud.</li>
        <li><strong>Ahorro:</strong> Reducir el consumo de recursos como energía y agua se traduce en ahorros económicos.</li>
        <li><strong>Conservación:</strong> Ayudamos a preservar los recursos naturales y la biodiversidad para las futuras generaciones.</li>
      </ul>
    `,
    consecuencias: `
      <h2>⚠️ Consecuencias de no ser ecológico</h2>
      <p>Si no adoptamos un estilo de vida ecológico, podemos enfrentar graves consecuencias:</p>
      <ul>
        <li><strong>Cambio climático:</strong> El aumento de gases de efecto invernadero provoca cambios en el clima global.</li>
        <li><strong>Destrucción de hábitats:</strong> La deforestación y la contaminación afectan la fauna y flora mundial.</li>
        <li><strong>Escasez de recursos:</strong> El agotamiento de recursos naturales debido al consumo irresponsable.</li>
      </ul>
    `,
    innovaciones: `
      <h2>🚀 Innovaciones ecológicas</h2>
      <p>El futuro de la ecología está lleno de innovaciones tecnológicas que nos ayudan a reducir nuestro impacto ambiental:</p>
      <ul>
        <li><strong>Reciclaje inteligente:</strong> Nuevas tecnologías para separar y reciclar de manera más eficiente.</li>
        <li><strong>Vehículos eléctricos:</strong> Menos emisiones de CO2 gracias a los coches y bicicletas eléctricos.</li>
        <li><strong>Energía solar:</strong> Paneles solares más eficientes para reducir nuestra dependencia de los combustibles fósiles.</li>
      </ul>
    `,
    huella: `
      <h2>🌍 Reducir tu huella de carbono</h2>
      <p>Algunas acciones para reducir tu huella de carbono incluyen:</p>
      <ul>
        <li><strong>Comer menos carne:</strong> La producción de carne tiene un gran impacto ambiental.</li>
        <li><strong>Usar energía renovable:</strong> Optar por energía solar o eólica reduce las emisiones.</li>
        <li><strong>Evitar el derroche:</strong> Consumir con responsabilidad, comprar lo necesario y reciclar.</li>
      </ul>
    `,
    reciclaje: `
      <h2>♻️ Reciclaje</h2>
      <p>El reciclaje es una de las maneras más eficaces de reducir la contaminación:</p>
      <ul>
        <li><strong>Separar los residuos:</strong> Tener contenedores específicos para vidrio, plástico y papel.</li>
        <li><strong>Reciclar correctamente:</strong> Asegurarse de que los materiales reciclables estén limpios y secos.</li>
      </ul>
    `,
    energias: `
      <h2>🔋 Energías Renovables</h2>
      <p>El uso de energías renovables es fundamental para reducir la huella de carbono:</p>
      <ul>
        <li><strong>Energía solar:</strong> Paneles solares para capturar energía del sol.</li>
        <li><strong>Energía eólica:</strong> Aerogeneradores que aprovechan la fuerza del viento.</li>
        <li><strong>Energía hidroeléctrica:</strong> Aprovechar el agua en movimiento para generar electricidad.</li>
      </ul>
    `,
    comunidades: `
      <h2>👥 El poder de las comunidades</h2>
      <p>Las comunidades pueden ser agentes de cambio para la sostenibilidad:</p>
      <ul>
        <li><strong>Trabajo conjunto:</strong> Organizar eventos de limpieza, plantación de árboles, etc.</li>
        <li><strong>Conciencia ambiental:</strong> Crear campañas para educar a más personas sobre la importancia de cuidar el medio ambiente.</li>
      </ul>
    `,
    movilidad: `
      <h2>🚶‍♂️ Movilidad Sostenible</h2>
      <p>La movilidad sostenible es clave para reducir la contaminación urbana:</p>
      <ul>
        <li><strong>Transporte público:</strong> Usar el transporte colectivo para reducir el número de vehículos privados.</li>
        <li><strong>Bicicletas:</strong> Promover el uso de bicicletas como medio de transporte diario.</li>
      </ul>
    `,
    comida: `
      <h2>🥦 Alimentación Sostenible</h2>
      <p>Optar por una alimentación sostenible también impacta positivamente al medio ambiente:</p>
      <ul>
        <li><strong>Comida orgánica:</strong> Consumir alimentos cultivados sin pesticidas ni químicos.</li>
        <li><strong>Reducir el desperdicio de comida:</strong> Comprar solo lo necesario y reutilizar restos de comida.</li>
      </ul>
    `
  };

  // EcoCitas
  const ecoCitas = [
    "¡La Tierra no es un recurso, es nuestro hogar! 🌍💚",
    "Si no cuidamos nuestro planeta, ¿quién lo hará? 🌱",
    "Cada acción cuenta, incluso las más pequeñas. 🌏✨",
    "Haz del planeta tu prioridad, no tu opción. 🌳💚",
    "El cambio comienza contigo, hazlo hoy. 🌿🌍",
    "Protege el futuro, actúa en el presente. ♻️",
    "El futuro es verde, ¡hazlo posible! 🌱🌞",
    "Menos consumo, más acción. 💡🌍",
    "El reciclaje es la clave para salvar el planeta. ♻️🌍",
    "La sostenibilidad es una forma de vida, no una moda. 🌎",
    "La naturaleza nunca nos traiciona, solo nosotros a ella. 🌿🌍",
    "Vivir de manera ecológica es vivir con conciencia. 🌱✨",
    "Cada paso hacia la sostenibilidad es un paso hacia el futuro. 🌍💚",
    "Haz de la sostenibilidad un estilo de vida, no una tendencia. ♻️",
    "Es tiempo de hacer que el planeta sea verde nuevamente. 🌿💚",
    "Una pequeña acción puede tener un gran impacto. 🌱🌍",
    "La Tierra necesita de todos para sobrevivir. ¿Te unes? 🌍💚",
    "Cuidar el planeta es cuidar de todos nosotros. 🌿🌎",
    "Nuestro planeta es nuestro hogar, protejámoslo. 🏡💚",
    "La naturaleza es nuestra mayor aliada, cuídala. 🌳🌍",
    "El planeta es nuestro legado, hagamos que valga la pena. 🌍💚"
  ];

  // Mostrar una EcoCita en la parte inferior de la app
  const btnEcoCita = document.getElementById("btn-ecocita");
  const ecoCitaDisplay = document.createElement("div");
  ecoCitaDisplay.classList.add("ecocita-display");
  ecoCitaDisplay.style.display = "none"; // Inicialmente no visible
  document.body.appendChild(ecoCitaDisplay);

  // Función para cambiar EcoCita
  let ecoCitaIndex = 0;

  const updateEcoCita = () => {
    ecoCitaDisplay.textContent = ecoCitas[ecoCitaIndex];
    ecoCitaDisplay.style.display = "block"; // Hacer visible la EcoCita
    ecoCitaIndex = (ecoCitaIndex + 1) % ecoCitas.length; // Cambiar al siguiente mensaje
    restartTimer(); // Reiniciar el temporizador cuando se muestre una nueva EcoCita
  };

  btnEcoCita.addEventListener("click", updateEcoCita);

  // Temporizador que se reinicia al hacer clic
  let timer;
  const restartTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      ecoCitaDisplay.style.display = "none"; // Ocultar EcoCita después de un tiempo
    }, 5000); // Mostrar EcoCita por 5 segundos
  };

  // Lógica para manejar los subtemas
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Desmarcar cualquier botón previamente seleccionado
      buttons.forEach((btn) => btn.classList.remove("selected"));

      // Marcar el nuevo botón como seleccionado
      button.classList.add("selected");

      // Mostrar la información del tema
      showContent(button.id);

      // Actualizar progreso solo si el botón no estaba previamente seleccionado
      if (!button.classList.contains("visited")) {
        button.classList.add("visited");
        updateProgress();
      }
    });
  });

  function updateProgress() {
    const selectedButtons = document.querySelectorAll("nav button.visited").length;
    const totalButtons = buttons.length;
    const progress = (selectedButtons / totalButtons) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Progreso: ${selectedButtons}/${totalButtons}`;
  }

  function showContent(topic) {
    content.innerHTML = topics[topic] || "<p>Selecciona un tema para ver más información.</p>";
  }

  // Mostrar y ocultar el botón EcoCita con el scroll
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    btnEcoCita.style.display = "block"; // Mostrar el botón cuando se hace scroll

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      btnEcoCita.style.display = "none"; // Ocultar el botón después de 5 segundos si no hay más scroll
    }, 5000); // 5 segundos de espera antes de ocultar el botón
  });
});
