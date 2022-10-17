$(function () {
   const date = $("#date");
   if (date) {
      date.datepicker({
         dateFormat: "dd-mm-yy",
         duration: "fast",
      });
   }

   const customRadio = $(".custom__radio input[name='age']");
   if (customRadio) {
      customRadio.on("change", function () {
         if ($(this).val() === "up-21") {
            $(this).parents("form").attr("action", "video.html");
         } else {
            $(this)
               .parents("form")
               .attr("action", "https://youtu.be/J7SOfbFzY-E");
         }
      });
   }
});
