 $(document).ready(function () {
      // Al cargar la página, mostrar subtopic-content
      $(".subtopic-content").show();
    
      // Variable para controlar si se ha abierto alguna carpeta o subcarpeta
      let folderOpened = false;
    
      // Al hacer clic en una carpeta (topic)
      $(".topic-label").click(function () {
        const subtopics = $(this).next(".subtopics");
        if (subtopics.is(":hidden")) {
          // Carpeta (topic) cerrada, abrir y mostrar subtopics
          $(".subtopics").hide();
          subtopics.show();
          folderOpened = true; // Carpeta (topic) abierta
          $(".subtopic-content").removeClass("subtopic-content-visible").hide();
        } else {
          // Carpeta (topic) abierta, cerrarla y mostrar subtopic-content
          subtopics.hide();
          showSubtopicContent();
        }
      });
    
      // Al hacer clic en una subcarpeta (subtopic-label)
      $(".subtopic-label a").click(function (e) {
        e.preventDefault(); // Evitar que el enlace se abra en una nueva página
        const contentUrl = $(this).attr("href");
        showSubtopicContent(); // Mostrar subtopic-content
        loadSubtopicContent(contentUrl); // Cargar el contenido de la subcarpeta
      });
    
      // Función para mostrar subtopic-content
      function showSubtopicContent() {
        $(".subtopic-content").show();
      }
    
      // Función para cargar el contenido de la subcarpeta en subtopic-content
      function loadSubtopicContent(url) {
        $(".subtopic-content").html(""); // Limpiar contenido anterior si lo hubiera
        $(".subtopic-content").load(url); // Cargar el contenido de la subcarpeta
      }
    
      // Al cargar la página, mostrar subtopic-content
      showSubtopicContent();
    });
    
    