// Constants

NUMSTEPS = 12;

$(document).ready(() => {
    console.log("document is ready");
    $.getJSON('config.json', initSteps);
    $("#carousel").carousel('pause')
        .on('slide.bs.carousel', event => {
            $('#step' + event.to).collapse('show')
        });
});

initSteps = (data) => {
    $('#title').html(data.info.title);
    $.each(data.steps, (key, value) => {
        $("#step-list")
            .append(
                $('<div class="card">')
                    .append(
                        $('<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#step' + key + '"></button>')
                            .append($('<h5><strong>Step ' + key + '</strong></h5>'))
                            .on('click', () => {
                                $('#carousel').carousel(parseInt(key));
                            }))
                    .append(
                        $('<div class="collapse" id="step' + key + '" data-parent="#step-list"></div>')
                            .append(
                                $('<div class="card-body"></div>')
                                    .html(value)
                            )
                    )
            )
    });
};

showSlide = (slide) => {
    $("#carousel").carousel(slide)
};
