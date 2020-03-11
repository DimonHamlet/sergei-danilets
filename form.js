$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо! Ваша Заявка была успешно отправлена. Скоро наш сотрудник свяжется с Вами!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});